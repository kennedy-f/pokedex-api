import { Injectable, UseGuards } from '@nestjs/common';
import { RepoService } from 'src/database/repository';
import { AccessEntity } from 'src/database/entities';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Injectable()
export class AccessService {
  constructor(private repoService: RepoService) {}

  async findAccessByEmail(email: string): Promise<AccessEntity> {
    return await this.repoService.accessRepository.findOne({
      where: { email },
    });
  }

  async getAccess(): Promise<AccessEntity[]> {
    return this.repoService.accessRepository.find();
  }
}
