import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAwardInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
