import { CreateVacancyDto } from './../../dtos/create-vacancy.dto';
import { Injectable, Scope } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Vacancy, VacancyDocument } from 'src/domain/vacancy/vacancy.schema';
import { ProfileService } from './profile.service';

@Injectable({ scope: Scope.REQUEST })
export class VacancyService {
  constructor(
    @InjectModel(Vacancy.name) private vacancyModel: Model<VacancyDocument>,
    private profileService: ProfileService,
  ) {}

  async create(dto: CreateVacancyDto) {
    const createdVacancy = await this.vacancyModel.create(dto);
    return createdVacancy.save();
  }

  async delete(id: string): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const vacancy = await this.vacancyModel.findByIdAndDelete(id);
    return 'The message was successfully deleted.';
  }

  async update(id: string, dto: CreateVacancyDto): Promise<Vacancy> {
    const updateVacancy = await this.vacancyModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        fieldOfActivity: dto.fieldOfActivity,
        vacancyName: dto.vacancyName,
        skills: dto.skills,
        requirements: dto.requirements,
        schedule: dto.schedule,
        workFormat: dto.workFormat,
        salary: dto.salary,
        offer: dto.offer,
      },
      { new: true },
    );
    return updateVacancy;
  }

  async findById(id: string): Promise<Vacancy> {
    const vacancy = await this.vacancyModel.findById(id);
    return vacancy;
  }
  async findAll() {
    const vacancy: Vacancy[] = await this.vacancyModel.find();
    return vacancy;
  }
}
