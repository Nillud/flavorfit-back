import { Module } from '@nestjs/common'
import { RecipesService } from './recipes.service'
import { RecipesResolver } from './recipes.resolver'
import { IngredientsModule } from './ingredients/ingredients.module'
import { PrismaModule } from 'src/prisma/prisma.module'
import { AdminRecipesService } from './admin-rescipes.service'
import { ReactionsModule } from './reactions/reactions.module';

@Module({
	imports: [PrismaModule, IngredientsModule, ReactionsModule],
	providers: [RecipesResolver, RecipesService, AdminRecipesService]
})
export class RecipesModule {}
