import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AwardService } from './award.service';
import { Award } from './entities/award.entity';
import { CreateAwardInput } from './dto/create-award.input';
import { UpdateAwardInput } from './dto/update-award.input';

@Resolver(() => Award)
export class AwardResolver {
  constructor(private readonly awardService: AwardService) {}

  @Mutation(() => Award)
  createAward(@Args('createAwardInput') createAwardInput: CreateAwardInput) {
    return this.awardService.create(createAwardInput);
  }

  @Query(() => [Award], { name: 'award' })
  findAll() {
    return this.awardService.findAll();
  }

  @Query(() => Award, { name: 'award' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.awardService.findOne(id);
  }

  @Mutation(() => Award)
  updateAward(@Args('updateAwardInput') updateAwardInput: UpdateAwardInput) {
    return this.awardService.update(updateAwardInput.id, updateAwardInput);
  }

  @Mutation(() => Award)
  removeAward(@Args('id', { type: () => Int }) id: number) {
    return this.awardService.remove(id);
  }
}
