import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apolice } from "./apolice/entities/apolice.entity";
import { ApoliceModule } from "./apolice/apolice.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_seguro_vida',
      entities: [Apolice],
      synchronize: true,
      logging: true,
    }),
    ApoliceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
