import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutBodyMeasurementInput } from './user-update-without-body-measurement.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutBodyMeasurementInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutBodyMeasurementInput, {nullable:false})
    @Type(() => UserUpdateWithoutBodyMeasurementInput)
    data!: UserUpdateWithoutBodyMeasurementInput;
}
