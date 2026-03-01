import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { RecipesModule } from './recipes/recipes.module'
import { IngredientsModule } from './recipes/ingredients/ingredients.module'
import { OrdersModule } from './orders/orders.module'
import { PrismaModule } from './prisma/prisma.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { getGraphQLConfig } from './config/graphql.config'
import { TurnstileModule } from 'nest-cloudflare-turnstile'
import { getTurnstileConfig } from './config/turnstile.config'
import { ResendModule } from 'nestjs-resend'
import { EmailModule } from './email/email.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		GraphQLModule.forRootAsync<ApolloDriverConfig>({
			driver: ApolloDriver,
			imports: [ConfigModule],
			useFactory: getGraphQLConfig,
			inject: [ConfigService]
		}),
		TurnstileModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getTurnstileConfig,
			inject: [ConfigService]
		}),
		ResendModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configSerivce: ConfigService) => ({
				apiKey: configSerivce.getOrThrow<string>('RESEND_API_KEY')
			}),
			inject: [ConfigService]
		}),
		AuthModule,
		UsersModule,
		RecipesModule,
		IngredientsModule,
		OrdersModule,
		PrismaModule,
		EmailModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
