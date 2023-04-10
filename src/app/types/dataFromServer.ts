import { UserFromServer } from './data';

export interface UsersServerResponse {
  results: UserFromServer[];
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };
}
