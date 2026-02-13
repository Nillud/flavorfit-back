import { Field, Int } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Role } from 'prisma/generated/enums'
import { OrderModel } from 'src/orders/models/order.model'
import { RecipeModel } from 'src/recipes/models/recipe.model'
import { CommentModel } from 'src/recipes/reactions/models/comment.model'
import { ProfileModel } from './profile.model'
import { BodyMeasurementModel } from './body-measurement.input'

@ObjectType()
export class UserModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	email!: string

	@Field(() => String, { nullable: false })
	password!: string

	@Field(() => Role, { defaultValue: 'USER', nullable: false })
	role!: `${Role}`

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => ProfileModel, { nullable: true })
	profile?: ProfileModel | null

	@Field(() => BodyMeasurementModel, { nullable: true })
	measurement?: BodyMeasurementModel | null

	@Field(() => [RecipeModel], { nullable: true })
	recipes?: Array<RecipeModel>

	@Field(() => [CommentModel], { nullable: true })
	comments?: Array<CommentModel>

	@Field(() => Int, { nullable: true })
	likes?: number

	@Field(() => [OrderModel], { nullable: true })
	orders?: Array<OrderModel>
}
