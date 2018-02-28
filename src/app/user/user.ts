import { Poll } from '../poll/poll'

export class User {
  constructor(
    public id?: number,
    public username?: string,
    public email?: string,
    public polls?: Poll[],
    public votes?: boolean
  ){}
}
