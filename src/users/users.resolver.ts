import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { UserUpdateInput } from './inputs/user-update.input'
import { UserModel } from './models/user.model'
import { Role } from 'prisma/generated/enums'

@Resolver()
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => UserModel, { name: 'me' })
	@Auth()
	getProfile(@CurrentUser('id') id: string) {
		return this.usersService.findById(id)
	}

	@Mutation(() => UserModel)
	@Auth()
	updateProfile(
		@CurrentUser('id') id: string,
		@Args('data') input: UserUpdateInput
	) {
		return this.usersService.updateProfile(id, input)
	}

	@Query(() => [UserModel], { name: 'users' })
	@Auth(Role.ADMIN)
	getAll() {
		return this.usersService.findAll()
	}
}
