import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'mc_tags' })
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}