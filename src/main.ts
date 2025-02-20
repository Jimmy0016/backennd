import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe())

  const confing = new DocumentBuilder()
  .setTitle("Cats example")
  .setDescription("The Produc API description")
  .setVersion("1.0")
  .build();
  const document = SwaggerModule.createDocument(app,confing);
  SwaggerModule.setup("api", app,document);
  await app.listen(3000);
}
bootstrap();
