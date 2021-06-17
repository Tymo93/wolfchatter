import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets'
import { Socket } from 'socket.io'
import { Server } from 'ws'
import { Logger } from '@nestjs/common'
import { MarkersService } from './markers/markers.service'
import { MessagesService } from './messages/messages.service'

@WebSocketGateway()
export class AppGateway {
  constructor(
    private readonly markersService: MarkersService,
    private readonly messagesService: MessagesService
  ) {}

  @WebSocketServer() server: Server
  private logger: Logger = new Logger('AppGateway')

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any) {
    this.server.to(payload.marker).emit('message_client', payload)

    // store msg to DB
    this.messagesService.createMessage(payload)
  }

  @SubscribeMessage('create_marker')
  public async newMarker(client: Socket, marker: string): Promise<void> {
    // Create marker in db
    const createdMarker = await this.markersService.createMarker({
      location: marker
    })
    const id = createdMarker.identifiers[0].id || null

    client.emit('new_marker', { id, location: marker }, true)
    client.broadcast.emit('new_marker', { id, location: marker })
  }

  @SubscribeMessage('join_marker')
  public joinMarker(client: Socket, marker: number): void {
    client.join(marker)
    client.emit('joined_marker', marker)
  }

  @SubscribeMessage('leave_marker')
  public leaveMarker(client: Socket, marker: any): void {
    client.leave(marker)
    client.emit('left_marker', marker)
  }

  // Server Logs
  afterInit() {
    this.logger.log('initialized...')
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`)
  }

  async handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`)
    const markers = await this.markersService.findAll()
    client.emit('all_markers', markers)
  }
}
