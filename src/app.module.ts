import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AppGateway } from './app.gateway'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MarkersModule } from './markers/markers.module'
import { MarkersService } from './markers/markers.service'
import { Markers } from './entity/markers'
import { MessagesService } from './messages/messages.service'
import { Messages } from './entity/messages'
import { MessagesModule } from './messages/messages.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ['dist/entity/**/*.ts'],
      autoLoadEntities: true,
      synchronize: false,
      logging: false,
      migrations: ['dist/migration/**/*.ts'],
      cli: {
        entitiesDir: 'dist/entity',
        migrationsDir: 'dist/migration'
      }
    }),
    TypeOrmModule.forFeature([Markers]),
    TypeOrmModule.forFeature([Messages]),
    MarkersModule,
    MessagesModule
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway, MarkersService, MessagesService]
})
export class AppModule {}
