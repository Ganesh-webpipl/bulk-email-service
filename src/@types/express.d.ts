import { Types } from 'mongoose';
import { EUserRole } from './userRole';

interface vendorInterface {
  _id: Types.ObjectId;
  role: EUserRole;
  email: string;
  companyId: Types.ObjectId;
}

interface loggerInterface {
  dontLog?: boolean;
}

declare global {
  namespace Express {
    interface Request {
      user: vendorInterface;
      logger: loggerInterface;
    }
  }
}
