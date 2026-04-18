import {
Column,
CreateDateColumn,
Entity,
PrimaryGeneratedColumn,
UpdateDateColumn
} from 'typeorm';

@Entity('artigos')

export default class Artigo {

  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  type: string;
  @Column()
  description: string;
  @Column()
  local: string;
  @Column({ type: 'timestamptz' })
  data_obtencao: Date;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
