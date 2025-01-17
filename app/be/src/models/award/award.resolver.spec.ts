import { Test, TestingModule } from '@nestjs/testing';
import { AwardResolver } from './award.resolver';
import { AwardService } from './award.service';

describe('AwardResolver', () => {
  let resolver: AwardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwardResolver, AwardService],
    }).compile();

    resolver = module.get<AwardResolver>(AwardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
