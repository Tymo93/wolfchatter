import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { AppModule } from './app.module'
import { RedisIoAdapter } from './redis.adapter'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useWebSocketAdapter(new RedisIoAdapter(app))

  // Use static for front end
  app.useStaticAssets(join(__dirname, '..', 'static'))

  await app.listen(parseInt(process.env.PORT))
}
bootstrap()
