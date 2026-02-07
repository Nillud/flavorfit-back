import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { RecipeCreateInput } from './inputs/create-recipe.input'

@Injectable()
export class AdminRecipesService {
    constructor(private readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.recipe.findMany()
    }

    async getById(id: string) {
        const recipe = await this.prisma.recipe.findUnique({
            where: { id }
        })
        if (!recipe) throw new NotFoundException(`recipe with ID ${id} not found`)
        return recipe
    }

    create(data: RecipeCreateInput) {
        return this.prisma.recipe.create({ data })
    }

    update(id: string, data: RecipeCreateInput) {
        return this.prisma.recipe.update({ where: { id }, data })
    }

    deleteById(id: string) {
        return this.prisma.recipe.delete({ where: { id } })
    }
}
