import { Field, ObjectType, ID } from '@nestjs/graphql'
import { Role } from 'prisma/generated/enums'
import { ProfileModel } from './profile.model'
import { BodyMeasurementModel } from './body-measurement.input'

@ObjectType()
export class UserModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	email!: string

	@Field(() => Role, { defaultValue: 'USER', nullable: false })
	role!: `${Role}`

	@Field(() => ProfileModel, { nullable: true })
	profile?: ProfileModel | null

	@Field(() => BodyMeasurementModel, { nullable: true })
	measurement?: BodyMeasurementModel | null

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date
}
