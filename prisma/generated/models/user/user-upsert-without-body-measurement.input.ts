import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutBodyMeasurementInput } from './user-update-without-body-measurement.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBodyMeasurementInput } from './user-create-without-body-measurement.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutBodyMeasurementInput {

    @Field(() => UserUpdateWithoutBodyMeasurementInput, {nullable:false})
    @Type(() => UserUpdateWithoutBodyMeasurementInput)
    update!: UserUpdateWithoutBodyMeasurementInput;

    @Field(() => UserCreateWithoutBodyMeasurementInput, {nullable:false})
    @Type(() => UserCreateWithoutBodyMeasurementInput)
    create!: UserCreateWithoutBodyMeasurementInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
