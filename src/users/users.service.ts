import { Injectable, NotFoundException } from '@nestjs/common'
import { hash } from 'argon2'
import type { Prisma } from 'prisma/generated/prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import type { UserUpdateInput } from './inputs/user-update.input'

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll() {
		return this.prisma.user.findMany()
	}

	async findById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				profile: true,
				measurement: true
			}
		})
	}

	async findByEmail(email: string) {
		return await this.prisma.user.findFirst({
			where: {
				email: {
					equals: email,
					mode: 'insensitive'
				}
			}
		})
	}

	async updateProfile(id: string, input: UserUpdateInput) {
		const { profile, measurement, password, ...data } = input

		const isUser = await this.findById(id)

		if (!isUser) throw new NotFoundException('user not found')

		const updateProfile: Prisma.XOR<
			Prisma.UserUpdateInput,
			Prisma.UserUncheckedUpdateInput
		> = profile
			? {
					profile: {
						upsert: {
							create: profile as Prisma.ProfileCreateWithoutUserInput,
							update: profile as Prisma.ProfileCreateWithoutUserInput
						}
					}
				}
			: {}

		const updateMeasurement: Prisma.XOR<
			Prisma.UserUpdateInput,
			Prisma.UserUncheckedUpdateInput
		> = measurement
			? {
					measurement: {
						upsert: {
							create: measurement,
							update: measurement
						}
					}
				}
			: {}

		const hashedPassword =
			typeof password === 'string'
				? {
						password: await hash(password)
					}
				: {}

		return this.prisma.user.update({
			where: { id },
			data: {
				...hashedPassword,
				...updateProfile,
				...updateMeasurement,
				email: data.email
			},
			include: {
				measurement: true,
				profile: true
			}
		})
	}
}
