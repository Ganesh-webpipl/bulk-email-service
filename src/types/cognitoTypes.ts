import { JwtPayload } from 'jsonwebtoken';

export interface CognitoAccessTokenPayload extends JwtPayload {
  iss: string;
  client_id: string;
  origin_jti: string;
  event_id: string;
  token_use: string;
  scope: string;
  auth_time: number;
  exp: number;
  sub: string;
  iat: number;
  jti: string;
  username: string;
}
