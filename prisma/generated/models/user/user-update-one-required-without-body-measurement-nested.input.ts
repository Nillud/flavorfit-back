import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBodyMeasurementInput } from './user-create-without-body-measurement.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBodyMeasurementInput } from './user-create-or-connect-without-body-measurement.input';
import { UserUpsertWithoutBodyMeasurementInput } from './user-upsert-without-body-measurement.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutBodyMeasurementInput } from './user-update-to-one-with-where-without-body-measurement.input';

@InputType()
export class UserUpdateOneRequiredWithoutBodyMeasurementNestedInput {

    @Field(() => UserCreateWithoutBodyMeasurementInput, {nullable:true})
    @Type(() => UserCreateWithoutBodyMeasurementInput)
    create?: UserCreateWithoutBodyMeasurementInput;

    @Field(() => UserCreateOrConnectWithoutBodyMeasurementInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBodyMeasurementInput)
    connectOrCreate?: UserCreateOrConnectWithoutBodyMeasurementInput;

    @Field(() => UserUpsertWithoutBodyMeasurementInput, {nullable:true})
    @Type(() => UserUpsertWithoutBodyMeasurementInput)
    upsert?: UserUpsertWithoutBodyMeasurementInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutBodyMeasurementInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutBodyMeasurementInput)
    update?: UserUpdateToOneWithWhereWithoutBodyMeasurementInput;
}
