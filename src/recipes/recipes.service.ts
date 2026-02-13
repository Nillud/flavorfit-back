import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RecipesService {
	constructor(private readonly prisma: PrismaService) {}

	// pagination, filtering (category, searchTerm (name, description, ingredients)), sorting (default, by date, recommended (likes), popularity (views))

	async getAll() {
		const data = await this.prisma.recipe.findMany({
			include: {
				comments: true,
				likes: true
			}
		})

		return data
	}

	async getBySlug(slug: string) {
		const recipe = await this.prisma.recipe.findUnique({
			where: { slug },
			include: {
				recipeSteps: true,
				recipeIngredients: {
					include: {
						ingredient: true
					}
				}
			}
		})
		if (!recipe)
			throw new NotFoundException(`recipe with slug ${slug} not found`)
		return recipe
	}
}
