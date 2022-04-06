import { Injectable } from '@nestjs/common';
import { RepoService } from 'src/database/repository';
import { AccessEntity } from 'src/database/entities';

@Injectable()
export class AccessService {
  constructor(private repoService: RepoService) {}

  async findAccess(email: string): Promise<AccessEntity> {
    return this.repoService.accessRepository.findOne({ email });
  }

  async getAccess(): Promise<AccessEntity[]> {
    return this.repoService.accessRepository.find();
  }
}
