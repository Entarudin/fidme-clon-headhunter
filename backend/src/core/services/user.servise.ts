import { BadRequestException, Injectable, Scope } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../domain/user/user.schema';
import { createUserDto } from 'src/dtos/create-user.dto';
import { updateUserDto } from 'src/dtos/update-user.dto';
import { RoleEnum } from 'src/foundation/enums/roles.enum';

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(dto: createUserDto): Promise<User> {
    if (dto.role === RoleEnum.student || dto.role === RoleEnum.company) {
      const createdUser: User = await this.userModel.create({
        ...dto,
        role: dto.role,
      });
      return createdUser;
    }
    throw new BadRequestException({ message: 'Invalid role' });
  }

  async getUserById(id: ObjectId): Promise<User> {
    const user: User = await this.userModel.findById(id);

    return await user;
  }

  async update(id: string, dto: updateUserDto): Promise<User> {
    const updateUser = await this.userModel.findByIdAndUpdate(
      { _id: id },
      { name: dto.name },
      { new: true },
    );

    return updateUser;
  }

  async delete(id: string): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await this.userModel.deleteOne({ _id: id });

    return 'User successfully deleted';
  }

  async getUserByEmail(email: string): Promise<User> {
    const user: User = await this.userModel.findOne({ email: email });

    return await user;
  }

  async getCompanies(): Promise<User[]> {
    const companies: User[] = await this.userModel.find({
      role: RoleEnum.company,
    });
    return companies;
  }
}
