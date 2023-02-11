import { IMessage } from "./message"

export interface IChat {
  user: IUser
  lastMessage: IMessage
  time: string
  unreadMessages?: number
}

export interface IUser {
  displayName: string
  uid: string
}
