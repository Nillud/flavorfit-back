import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import './user.enum'
import { UsersResolver } from './users.resolver'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
	imports: [PrismaModule],
	providers: [UsersResolver, UsersService],
	exports: [UsersService]
})
export class UsersModule {}
