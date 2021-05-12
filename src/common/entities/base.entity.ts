// import {
//   Column,
//   CreateDateColumn,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from 'typeorm';

// export abstract class BaseEntity {
//   @PrimaryGeneratedColumn('increment')
//   id: number;

//   @Column({ type: 'boolean', default: true })
//   status: boolean;

//   @CreateDateColumn({
//     name: 'created_at',
//     type: 'timestamptz',
//     nullable: false,
//   })
//   createdAt: Date;

//   @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
//   updatedAt: Date;
// }
