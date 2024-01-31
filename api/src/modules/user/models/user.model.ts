import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export class UserModel extends Document {
  type?: string;

  email?: string;

  username?: string;

  name?: string;

  firstName?: string;

  lastName?: string;

  gender?: string;

  surname?: string;

  birthYear?: string;

  address?: string;

  country?: string;

  bodyType?: {
    height: string,

    weight: string,

    race: string,

    build: string
  };

  kycInfo?: string;

  banks?: {
    swiftCode?: string;

    accountType?: string;

    accountNumber?: string;

    routingNumber?: string;

    branchName?: string;

    branchAddress?: string;
  }[];

  phone?: string;

  roles?: string[];

  avatarId?: ObjectId;

  avatarPath?: string;

  status: string;

  balance?: number;

  isOnline?: boolean;

  onlineAt?: Date;

  offlineDat?: Date;

  createdAt: Date;

  updatedAt: Date;

  verifiedEmail?: boolean;

  twitterProfile?: any;

  twitterConnected?: boolean;

  googleProfile?: any;

  googleConnected?: boolean;

  stripeCardIds?: string[];

  stripeCustomerId?: string;

  stats: {
    totalSubscriptions: number;
    following: number;
  };
}
