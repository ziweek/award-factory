import { CreateAwardInput } from './create-award.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAwardInput extends PartialType(CreateAwardInput) {
  @Field(() => Int)
  id: number;
}
