import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMeasurementInput } from './user-create-without-measurement.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMeasurementInput } from './user-create-or-connect-without-measurement.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMeasurementInput {

    @Field(() => UserCreateWithoutMeasurementInput, {nullable:true})
    @Type(() => UserCreateWithoutMeasurementInput)
    create?: UserCreateWithoutMeasurementInput;

    @Field(() => UserCreateOrConnectWithoutMeasurementInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMeasurementInput)
    connectOrCreate?: UserCreateOrConnectWithoutMeasurementInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
