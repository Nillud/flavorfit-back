import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMeasurementInput } from './user-create-without-measurement.input';

@InputType()
export class UserCreateOrConnectWithoutMeasurementInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutMeasurementInput, {nullable:false})
    @Type(() => UserCreateWithoutMeasurementInput)
    create!: UserCreateWithoutMeasurementInput;
}
