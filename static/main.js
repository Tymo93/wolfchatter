const app = new Vue({
  el: '#app',
  data: {
    title: 'WolfChatter',
    user_name: '',
    user_name_applied: false,
    message: '',
    messages: [],
    socket: null,
    error: false,
    map: null,
    markers: [],
    activeMarker: null,
    markersLoading: true
  },
  filters: {
    formatDate(value) {
      if (value === null) return ''
      const date = new Date(value)
      const day = ('0' + date.getDate()).slice(-2)
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      const hour =
        date.getHours().toString().length < 2
          ? `0${date.getHours()}`
          : date.getHours()
      const minutes =
        date.getMinutes().toString().length < 2
          ? `0${date.getMinutes()}`
          : date.getMinutes()

      return `${hour}:${minutes} ${day}/${month}/${date
        .getFullYear()
        .toString()}`
    }
  },
  methods: {
    sendMessage() {
      // save user name & validate and emit message
      if (this.validateInput()) {
        this.applyUserName()
        const message = {
          user_name: this.user_name.trim(),
          message: this.message.trim(),
          date_created: new Date(),
          marker: this.activeMarker.id
        }
        this.socket.emit('message', message)
        this.message = ''
      } else this.error = true
    },
    receivedMessage(message) {
      // Organize messages so the user doesn't repeat
      const previousMessage = this.messages[this.messages.length - 1]

      if (previousMessage && previousMessage.user_name === message.user_name)
        message.same_user = true

      this.messages.push(message)

      this.newMessageOnChat()
    },
    validateInput() {
      this.error = false
      return this.user_name.trim().length > 0 && this.message.trim().length > 0
    },
    applyUserName() {
      // save user name in storage and apply
      if (this.user_name.trim().length > 0) this.user_name_applied = true

      if (window.localStorage)
        window.localStorage.setItem('wc_user_name', this.user_name)
    },
    applyAndFocus() {
      this.applyUserName()

      this.$refs.message.focus()
    },
    initMap() {
      // Initialize the map and assign it to a variable for later use
      this.map = L.map('map', {
        // Set latitude and longitude of the map center (required)
        center: [46.7712, 23.6236],
        // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
        zoom: 5
      })

      // Initialize map clicks
      this.map.on('click', (e) => this.onMapClick(e))

      // Create a Tile Layer and add it to the map
      new L.tileLayer(
        'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'
      ).addTo(this.map)
    },
    onMapClick(e) {
      const location = `${e.latlng.lat},${e.latlng.lng}`

      this.socket.emit('create_marker', location)
    },
    addMarker(marker) {
      // Add marker on the map
      const latlng = marker.location.split(',')
      if (latlng[1]) {
        const newMarker = new L.marker(latlng).addTo(this.map)
        newMarker.location = latlng
        newMarker.id = marker.id

        newMarker.on('click', (e) => this.onMarkerClick(e))

        this.markers.push(newMarker)

        if (marker.last_marker) this.markersLoading = false
      }
    },
    onMarkerClick(marker) {
      if (this.activeMarker && this.activeMarker.id)
        this.socket.emit('leave_marker', this.activeMarker.id)
      this.socket.emit('join_marker', marker.target.id, marker.target.location)
      this.getMessages(marker.target.id)

      this.activeMarker = marker.target
    },
    getMessages(id) {
      // Get all previous message cross session
      axios
        .get(`/messages/all/${id}`)
        .then((response) => {
          this.messages = []
          this.organizeMessages(response.data)

          this.newMessageOnChat()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    newMessageOnChat() {
      // Scroll to bottom on new message
      setTimeout(() => {
        const $list = this.$refs.messages
        $list.scrollTop = $list.scrollHeight
      }, 1)
    },
    organizeMessages(messages) {
      // Prettify messages so the user name doesn't get display twice
      for (const [index, message] of messages.entries()) {
        const previousMessage = messages[index - 1]

        if (previousMessage && previousMessage.user_name === message.user_name)
          message.same_user = true

        this.messages.push(message)
      }
    }
  },
  created() {
    // get existing messages
    this.socket = io('http://localhost:3000')
    this.socket.on('message_client', (message) => {
      this.receivedMessage(message)
    })
    this.socket.on('new_marker', (marker, current = false) => {
      this.addMarker(marker)

      // Join chat if the same user that created the marker
      if (current) {
        this.socket.emit('join_marker', marker.id)
        this.activeMarker = marker
      }
    })
    this.socket.on('all_markers', (markers) => {
      // Initialize all pinned markers
      for (const [index, marker] of markers.entries()) {
        if (index === markers.length - 1) marker.last_marker = true
        this.addMarker(marker)
      }

      if (markers.length === 0) this.markersLoading = false
    })
  },
  mounted() {
    this.initMap()

    // get user name
    if (window.localStorage.getItem('wc_user_name')) {
      this.user_name = window.localStorage.getItem('wc_user_name')
      this.user_name_applied = true
    }
  }
})
