import { IMessage } from './message'
import { IUser } from './user'

export interface IChat {
  id: string
  name: string
  messages: IMessage[]
  users: IUser[]
}
