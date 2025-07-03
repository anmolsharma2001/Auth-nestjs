import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { RefreshToken, RefreshTokeSchema } from './schemas/refresh-token.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name: User.name, schema:UserSchema,
    },
    {
      name: RefreshToken.name, schema:RefreshTokeSchema,
    },
])
],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}