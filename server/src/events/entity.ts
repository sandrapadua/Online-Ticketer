import { 
  BaseEntity,
  Entity, 
  PrimaryGeneratedColumn, 
  Column } from 'typeorm'
import { IsString, MinLength} from 'class-validator'


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
  picture: string
  
  @Column('date', {nullable:false})
  startDate: Date

  @Column('date', {nullable:true})
  endDate: Date

}