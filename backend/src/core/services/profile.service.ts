import { BadRequestException, Injectable, Scope } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../domain/user/user.schema';
import { RoleEnum } from 'src/foundation/enums/roles.enum';
import { CreateProfilesDto } from 'src/dtos/create-profiles.dto';
import {
  ProfileCompany,
  ProfileStudent,
} from '../../domain/profiles/profile.schema';
import { FileService, FileType } from './file.service';

@Injectable({ scope: Scope.REQUEST })
export class ProfileService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private fileService: FileService,
  ) {}

  async create(dto: CreateProfilesDto, id: ObjectId, image): Promise<User> {
    const user = await this.userModel.findById(id);
    const picturePath = this.fileService.createFile(FileType.Image, image);
    if (user.role === RoleEnum.company) {
      const profileCompany = new ProfileCompany();
      user.profile = profileCompany;
      if (picturePath) {
        profileCompany.profileImage = picturePath;
      }
      profileCompany.abilityToWorkRemotely = dto.abilityToWorkRemotely;
      profileCompany.aboutCompany = dto.aboutCompany;
      profileCompany.aboutProjects = dto.aboutProjects;
      profileCompany.fieldOfActivity = dto.fieldOfActivity;
      profileCompany.learningOpportunity = dto.learningOpportunity;
      user.save();
    } else if (user.role === RoleEnum.student) {
      const profileStudent = new ProfileStudent();
      user.profile = profileStudent;
      if (picturePath) {
        profileStudent.profileImage = picturePath;
      }
      profileStudent.achievements = dto.achievements;
      profileStudent.additionalEducation = dto.additionalEducation;
      profileStudent.averageScore = dto.averageScore;
      profileStudent.dateOfBirth = dto.dateOfBirth;
      profileStudent.education = dto.education;
      profileStudent.fieldOfActivity = dto.fieldOfActivity;
      profileStudent.foreignLanguages = dto.foreignLanguages;
      profileStudent.hardSkills = dto.hardSkills;
      profileStudent.interests = dto.interests;
      profileStudent.portfolio = dto.portfolio;
      profileStudent.schedule = dto.schedule;
      profileStudent.softSkills = dto.softSkills;
      profileStudent.technologyStack = dto.technologyStack;
      profileStudent.workPlace = dto.workPlace;
      profileStudent.сareerObjective = dto.сareerObjective;
      user.save();
    } else {
      new BadRequestException({ message: 'Invalid role' });
    }
    return user;
  }

  async getProfileUserById(id: string): Promise<User['profile']> {
    const user = await this.userModel.findById(id);
    return user.profile;
  }
}
