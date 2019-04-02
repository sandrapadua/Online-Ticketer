import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
@Entity()
export default class Ticket extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  pictureUrl: string;

  @Column('text')
  price: number

  @Column('text')
  description: string

  

 
}