import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://user:user@cluster0.fibcxnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), // Replace with your MongoDB connection string
    UserModule,
  ],
})
export class AppModule {}