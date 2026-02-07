import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMeasurementInput } from './user-create-without-measurement.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMeasurementInput } from './user-create-or-connect-without-measurement.input';
import { UserUpsertWithoutMeasurementInput } from './user-upsert-without-measurement.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMeasurementInput } from './user-update-to-one-with-where-without-measurement.input';

@InputType()
export class UserUpdateOneRequiredWithoutMeasurementNestedInput {

    @Field(() => UserCreateWithoutMeasurementInput, {nullable:true})
    @Type(() => UserCreateWithoutMeasurementInput)
    create?: UserCreateWithoutMeasurementInput;

    @Field(() => UserCreateOrConnectWithoutMeasurementInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMeasurementInput)
    connectOrCreate?: UserCreateOrConnectWithoutMeasurementInput;

    @Field(() => UserUpsertWithoutMeasurementInput, {nullable:true})
    @Type(() => UserUpsertWithoutMeasurementInput)
    upsert?: UserUpsertWithoutMeasurementInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutMeasurementInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutMeasurementInput)
    update?: UserUpdateToOneWithWhereWithoutMeasurementInput;
}
