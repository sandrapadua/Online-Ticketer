import { 
  BaseEntity,
  Entity, 
  PrimaryGeneratedColumn, 
  Column ,
  OneToMany} from 'typeorm'
import { IsString, MinLength} from 'class-validator'
import Ticket from '../ticket/entity';


@Entity()
export default class Event extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(2)
  @Column('text', {nullable:false})
  name: string

  @IsString()
  @Column('text', {nullable:false})
  description: string

  @Column('text', {nullable:false})
  pictureUrl: string
  
  @Column('date', {nullable:false})
  startDate: Date

  @Column('date', {nullable:true})
  endDate: Date

  @OneToMany(_type => Ticket, ticket => ticket.event, {eager:true})
  tickets: Ticket[];
 

}