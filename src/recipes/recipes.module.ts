import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { IngredientsModule } from './ingredients/ingredients.module'
import './recipe.enum'
import { RecipesResolver } from './recipes.resolver'
import { RecipesService } from './recipes.service'
import { AdminRecipesService } from './admin-rescipes.service'
import { ReactionsModule } from './reactions/reactions.module'

@Module({
	imports: [IngredientsModule, ReactionsModule, PrismaModule],
	providers: [RecipesResolver, RecipesService, AdminRecipesService]
})
export class RecipesModule {}
