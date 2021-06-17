import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Markers } from './markers'
@Entity()
export class Messages {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  user_name: string

  @Column({ nullable: false })
  message: string

  @Column('timestamp', { nullable: false })
  date_created: Date

  @ManyToOne(() => Markers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  marker: Markers
}
