import { Injectable } from '@nestjs/common';
import { CreateAwardInput } from './dto/create-award.input';
import { UpdateAwardInput } from './dto/update-award.input';

@Injectable()
export class AwardService {
  create(createAwardInput: CreateAwardInput) {
    return 'This action adds a new award';
  }

  findAll() {
    return `This action returns all award`;
  }

  findOne(id: number) {
    return `This action returns a #${id} award`;
  }

  update(id: number, updateAwardInput: UpdateAwardInput) {
    return `This action updates a #${id} award`;
  }

  remove(id: number) {
    return `This action removes a #${id} award`;
  }
}
