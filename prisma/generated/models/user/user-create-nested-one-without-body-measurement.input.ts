import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBodyMeasurementInput } from './user-create-without-body-measurement.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBodyMeasurementInput } from './user-create-or-connect-without-body-measurement.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutBodyMeasurementInput {

    @Field(() => UserCreateWithoutBodyMeasurementInput, {nullable:true})
    @Type(() => UserCreateWithoutBodyMeasurementInput)
    create?: UserCreateWithoutBodyMeasurementInput;

    @Field(() => UserCreateOrConnectWithoutBodyMeasurementInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBodyMeasurementInput)
    connectOrCreate?: UserCreateOrConnectWithoutBodyMeasurementInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
