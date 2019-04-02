import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Event extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  title: string

  @Column('text')
  description: string

  @Column('text')
  pictureUrl: string

  @Column('text')
  startDate: Date
  
  @Column('text')
  endDate: Date
}