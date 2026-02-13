import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { ReactionsService } from './reactions.service'
import { CommentModel } from './models/comment.model'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { CommentCreateInput } from './inputs/comment.input'
import { Role } from 'prisma/generated/prisma/enums'
import { ToggleLikeResponse } from './models/toggle-like.response'

@Resolver()
export class ReactionsResolver {
	constructor(private readonly reactionsService: ReactionsService) {}

	@Mutation(() => CommentModel)
	@Auth()
	createComment(
		@CurrentUser('id') userId: string,
		@Args('input') input: CommentCreateInput
	) {
		return this.reactionsService.createComment(userId, input)
	}

	@Mutation(() => CommentModel)
	@Auth()
	updateComment(
		@CurrentUser('id') userId: string,
		@CurrentUser('role') userRole: Role,
		@Args('commentId') commentId: string,
		@Args('input') input: CommentCreateInput
	) {
		return this.reactionsService.updateComment(
			userId,
			userRole,
			commentId,
			input
		)
	}

	@Mutation(() => CommentModel)
	@Auth()
	deleteComment(
		@CurrentUser('id') userId: string,
		@Args('commentId') commentId: string
	) {
		return this.reactionsService.deleteComment(userId, commentId)
	}

	@Mutation(() => ToggleLikeResponse)
	@Auth()
	toggleLike(
		@CurrentUser('id') userId: string,
		@Args('recipeId') recipeId: string
	) {
		return this.reactionsService.deleteComment(userId, recipeId)
	}
}
