import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMeasurementInput } from './user-update-without-measurement.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMeasurementInput } from './user-create-without-measurement.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutMeasurementInput {

    @Field(() => UserUpdateWithoutMeasurementInput, {nullable:false})
    @Type(() => UserUpdateWithoutMeasurementInput)
    update!: UserUpdateWithoutMeasurementInput;

    @Field(() => UserCreateWithoutMeasurementInput, {nullable:false})
    @Type(() => UserCreateWithoutMeasurementInput)
    create!: UserCreateWithoutMeasurementInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
