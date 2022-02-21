import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// The property "name" sets the table name. This is usually implied from the
// class name, however this can be overridden if needed.
@Entity({ name: 'note' })
export class NoteEntity {
  @PrimaryGeneratedColumn({ name: 'note_id' })
  id!: number;

  @Column({ name: 'content' })
  content!: string;

  @Column({ name: 'author' })
  author!: string;

  @Column({ name: 'created_at' })
  createdAt?: Date;
}
