import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMeasurementInput } from './user-update-without-measurement.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutMeasurementInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutMeasurementInput, {nullable:false})
    @Type(() => UserUpdateWithoutMeasurementInput)
    data!: UserUpdateWithoutMeasurementInput;
}
