import { Injectable, Scope } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { User, UserDocument } from '../../domain/user/user.schema';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

type tokenPaylod = {
  email: string;
  role: string;
  id: ObjectId;
};

@Injectable({ scope: Scope.REQUEST })
export class TokenService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly configService: ConfigService,
  ) {}

  private readonly secretAccesToken = String(
    this.configService.get('JWT_ACCESS_SECRET'),
  );

  private readonly secretRefreshToken = String(
    this.configService.get('JWT_REFRESH_SECRET'),
  );

  async generateTokens(user: User) {
    const payload: tokenPaylod = {
      email: user.email,
      role: user.role,
      id: user._id,
    };

    const accessToken = await jwt.sign(payload, this.secretAccesToken, {
      expiresIn: '1h',
    });
    const refreshToken = await jwt.sign(payload, this.secretRefreshToken, {
      expiresIn: '30d',
    });

    return { accessToken, refreshToken };
  }

  validateAccessToken(token: string) {
    try {
      const userData: tokenPaylod = jwt.verify(token, this.secretAccesToken);

      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      const userData: tokenPaylod = jwt.verify(token, this.secretRefreshToken);
      return userData;
    } catch (e) {
      return null;
    }
  }
  async saveTokenOnUser(userId: ObjectId, refresh: string, access: string) {
    const id = this.castObjectIdInString(userId);
    const user = await this.userModel.findById(id);
    if (user) {
      user.tokens.push({ access, refresh });
      return user.save();
    }
  }

  async removeToken(userId: ObjectId, refreshToken: string): Promise<string> {
    const id = this.castObjectIdInString(userId);
    const user = await this.userModel.findById(id);
    const forDeletion = [];
    forDeletion.push(refreshToken);

    const filterTokens = user.tokens.filter(
      (currentToken) => !forDeletion.includes(currentToken.refresh),
    );

    user.tokens = filterTokens;
    user.save();

    return 'The user has successfully logged out of the personal account';
  }

  async findToken(userId: ObjectId, refresh: string) {
    const id = this.castObjectIdInString(userId);
    const user = await this.userModel.findById(id);
    const tokens: { refresh: string; access: string }[] = user.tokens.filter(
      (currentToken) => currentToken.refresh === refresh,
    );
    const refreshToken = tokens.map((currentToken) =>
      currentToken.refresh.toString(),
    );
    return refreshToken;
  }

  private castObjectIdInString(objectId: ObjectId): string {
    const idInJSON = JSON.stringify(objectId);
    return JSON.parse(idInJSON);
  }
}
