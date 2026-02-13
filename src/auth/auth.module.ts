import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { PrismaModule } from 'src/prisma/prisma.module'
import { JwtModule } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { getJwtConfig } from 'src/config/jwt.config'
import { UsersModule } from 'src/users/users.module'
import { JwtStrategy } from './strategies/jwt.strategy'
import { PassportModule } from '@nestjs/passport'
import './auth.enum'

@Module({
	imports: [
		PrismaModule,
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.registerAsync({
			imports: [PrismaModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		}),
		UsersModule
	],
	providers: [JwtStrategy, AuthService, AuthResolver]
})
export class AuthModule {}
