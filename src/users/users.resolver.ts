import { Query, Resolver } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'prisma/generated/prisma/enums'
import { Profile } from 'prisma/generated/prisma/profile/profile.model'

@Resolver()
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => Profile, { name: 'profile' })
	@Auth()
	getProfile(@CurrentUser('id') id: string) {
		return this.usersService.findById(id)
	}

	@Query(() => [Profile], { name: 'users' })
	@Auth(Role.ADMIN)
	getAll() {
		return this.usersService.findAll()
	}
}
