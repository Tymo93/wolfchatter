import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Messages } from './messages'
@Entity()
export class Markers {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  location: string

  @OneToMany(() => Messages, (message) => message.marker, {
    nullable: true
  })
  messages: Messages[]
}
