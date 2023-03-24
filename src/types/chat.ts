import { IMessage } from './message'

export interface IChat {
  user: IUser
  lastMessage: IMessage
  time: Date | number
  unreadMessages?: number
}

export interface IUser {
  displayName: string
  uid: string
}
