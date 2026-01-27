import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { PrismaModule } from 'src/prisma/prisma.module'
import { JwtModule } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { getJwtConfig } from 'src/config/jwt.config'

@Module({
	imports: [
		PrismaModule,
		JwtModule.registerAsync({
			imports: [PrismaModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		})
	],
	providers: [AuthService, AuthResolver]
})
export class AuthModule {}
