import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RecipesService {
	constructor(private readonly prisma: PrismaService) {}

	// pagination, filtering (category, searchTerm (name, description, ingredients)), sorting (default, by date, recommended (likes), popularity (views))

	getAll() {
		return this.prisma.recipe.findMany()
	}

	async getBySlug(slug: string) {
		const recipe = await this.prisma.recipe.findUnique({
			where: { slug },
			include: { recipeSteps: true, recipeIngredients: true }
		})
		if (!recipe)
			throw new NotFoundException(`recipe with slug ${slug} not found`)
		return recipe
	}
}
