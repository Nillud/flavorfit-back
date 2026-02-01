import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    id = "id",
    content = "content",
    userId = "userId",
    recipeId = "recipeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
