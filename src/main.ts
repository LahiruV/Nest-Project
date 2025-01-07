import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation
  app.useGlobalPipes(new ValidationPipe());

  // Setup Swagger
  const config = new DocumentBuilder()
    .setTitle('User CRUD API')
    .setDescription('API for managing users')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = 3000;

  await app.listen(PORT);

  console.log(`Application is running on: http://localhost:${PORT}`);
  console.log(`Swagger is available at: http://localhost:${PORT}/api`);

}
bootstrap();