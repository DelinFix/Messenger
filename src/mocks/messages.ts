import { IMessage } from 'types/message'

export const mockMessages: IMessage[] = [
  {
    id: '0',
    body: 'MsgText 12345678910 test1 test2 test3 test4 test5 testMsg sometext1 sometext2 sometext3 some te',
    photoURL: '',
    createdAt: new Date(999999),
    checked: true,
    type: 'text',
    senderId: '1'
  },
  {
    id: '1',
    body: 'Что?',
    photoURL: '',
    createdAt: new Date(999999999),
    checked: true,
    type: 'text',
    senderId: '5'
  },
  {
    id: '2',
    body: 'Это был тест',
    photoURL: '',
    createdAt: new Date(),
    checked: false,
    type: 'text',
    senderId: '5'
  },
  {
    id: '3',
    body: 'Как дела?',
    photoURL: '',
    createdAt: new Date(899899),
    checked: true,
    type: 'text',
    senderId: '2'
  },
  {
    id: '4',
    body: 'Круто!',
    photoURL: '',
    createdAt: new Date(),
    checked: true,
    type: 'text',
    senderId: '5'
  }
]
