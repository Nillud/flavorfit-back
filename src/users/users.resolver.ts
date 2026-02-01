import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'prisma/generated/prisma/enums'
import { User, type UserUpdateInput } from 'prisma/generated/models/user'

@Resolver()
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => User, { name: 'profile' })
	@Auth()
	getProfile(@CurrentUser('id') id: string) {
		return this.usersService.findById(id)
	}

	@Mutation(() => User)
	@Auth()
	updateProfile(
		@CurrentUser('id') id: string,
		@Args('data') input: UserUpdateInput
	) {
		return this.usersService.updateProfile(id, input)
	}

	@Query(() => [User], { name: 'users' })
	@Auth(Role.ADMIN)
	getAll() {
		return this.usersService.findAll()
	}
}
