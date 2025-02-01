import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Award {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
