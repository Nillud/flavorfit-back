import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { RecipesService } from './recipes.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'prisma/generated/graphql/prisma'
import { RecipeCreateInput } from './inputs/create-recipe.input'
import { RecipeModel } from './models/recipe.model'
import { AdminRecipesService } from './admin-rescipes.service'

@Resolver()
export class RecipesResolver {
	constructor(private readonly recipesService: RecipesService, private readonly adminRecipesService: AdminRecipesService) {}

	@Query(() => [RecipeModel], { name: 'recipes' })
	@Auth()
	getAll() {
		return this.recipesService.getAll()
	}

	@Query(() => [RecipeModel], { name: 'recipes' })
	@Auth()
	getBySlug(@Args('slug') slug: string) {
		return this.recipesService.getBySlug(slug)
	}

	@Query(() => RecipeModel, { name: 'recipe' })
	@Auth(Role.ADMIN)
	getById(@Args('id') id: string) {
		return this.adminRecipesService.getById(id)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	createRecipe(@Args('input') input: RecipeCreateInput) {
		return this.adminRecipesService.create(input)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	updateRecipe(
		@Args('id') id: string,
		@Args('input') input: RecipeCreateInput
	) {
		return this.adminRecipesService.update(id, input)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	deleteRecipe(@Args('id') id: string) {
		return this.adminRecipesService.deleteById(id)
	}
}
