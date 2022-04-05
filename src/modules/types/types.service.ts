import { Injectable } from '@nestjs/common';
import { RepoService } from 'src/database/repository';
import { TypesEntity } from 'src/database/entities';

@Injectable()
export class TypesService {
  constructor(private readonly repoService: RepoService) {}
  public async getAllTypes(): Promise<TypesEntity[]> {
    return await this.repoService.typesRepo.find();
  }

  public async getType(id: number): Promise<TypesEntity> {
    return await this.repoService.typesRepo.findOne(id);
  }

  public async createType(data: TypesEntity): Promise<TypesEntity> {
    const type = this.repoService.typesRepo.create(data);
    return await this.repoService.typesRepo.save(type);
  }
}
