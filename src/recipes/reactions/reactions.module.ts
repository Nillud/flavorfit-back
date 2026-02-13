import { Module } from '@nestjs/common'
import { ReactionsService } from './reactions.service'
import { ReactionsResolver } from './reactions.resolver'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
	imports: [PrismaModule],
	providers: [ReactionsResolver, ReactionsService]
})
export class ReactionsModule {}
