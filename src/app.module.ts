import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
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
      database: 'db_seguro_seguro_vida',
      entities: [Usuario, Apolice],
      synchronize: true,
      //logging: true, opcional
    }),

    UsuarioModule,
    ApoliceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
