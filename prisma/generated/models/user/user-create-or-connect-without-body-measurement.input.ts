import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBodyMeasurementInput } from './user-create-without-body-measurement.input';

@InputType()
export class UserCreateOrConnectWithoutBodyMeasurementInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutBodyMeasurementInput, {nullable:false})
    @Type(() => UserCreateWithoutBodyMeasurementInput)
    create!: UserCreateWithoutBodyMeasurementInput;
}
