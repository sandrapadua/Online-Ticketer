import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
@Entity()
export default class Event extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  name: string

  @Column('text')
  description: string

  @Column('text')
  picture: string

  @Column('text')
  startDate: Date
  
  @Column('text')
  endDate: Date

 
}