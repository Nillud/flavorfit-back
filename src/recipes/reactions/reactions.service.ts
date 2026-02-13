import { ForbiddenException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import type {
	CommentCreateInput,
	CommentUpdateInput
} from './inputs/comment.input'
import { Role } from 'prisma/generated/prisma/enums'

@Injectable()
export class ReactionsService {
	constructor(private readonly prisma: PrismaService) {}

	async toggleLike(userId: string, recipeId: string) {
		const existingLike = await this.prisma.like.findUnique({
			where: {
				userId_recipeId: {
					recipeId,
					userId
				}
			}
		})

		if (existingLike) {
			await this.prisma.like.delete({
				where: {
					id: existingLike.id
				}
			})

			return { liked: false }
		} else {
			await this.prisma.like.create({
				data: {
					user: {
						connect: { id: userId }
					},
					recipe: {
						connect: { id: recipeId }
					}
				}
			})

			return { liked: true }
		}
	}

	createComment(userId: string, input: CommentCreateInput) {
		return this.prisma.comment.create({
			data: {
				content: input.content,
				user: {
					connect: { id: userId }
				},
				recipe: {
					connect: { id: input.recipeId }
				}
			}
		})
	}

	async updateComment(
		userId: string,
		userRole: Role,
		commentId: string,
		input: CommentUpdateInput
	) {
		const comment = await this.prisma.comment.findUnique({
			where: { id: commentId }
		})

		if (!comment || (comment.userId !== userId && userRole !== Role.ADMIN))
			throw new ForbiddenException('Coment not found or unauthorized')

		return this.prisma.comment.update({
			where: { id: commentId },
			data: {
				content: input.content
			},
			include: {
				user: true
			}
		})
	}

	async deleteComment(userId: string, commentId: string) {
		const comment = await this.prisma.comment.findUnique({
			where: { id: commentId }
		})

		if (!comment || comment.userId !== userId)
			throw new ForbiddenException('Coment not found or unauthorized')

		return this.prisma.comment.delete({
			where: { id: commentId }
		})
	}
}
