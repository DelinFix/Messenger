export type MsgType = 'text' | 'image' | 'file'

export interface IMessage {
  id: string
  body: string
  photoURL: string
  createdAt: Date | number
  checked: boolean
  type: MsgType
  senderId: string
}
