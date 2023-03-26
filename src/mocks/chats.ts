import { IChat } from 'types/chat'
import { mockUsers } from './users'

export const mockChats: IChat[] = [
  {
    id: '0',
    name: 'Андрей',
    users: [
      ...mockUsers.filter(user => user.id === '1' || user.id === '5')
      // {
      //   id: '1',
      //   name: 'Андрей',
      //   login: 'andrew',
      //   email: 'andrew@yandex.ru',
      //   phoneNumber: '89998887766',
      //   photoURL: 'https://kleo.ru/img/articles/Attorney-1-img.jpg'
      // },
      // {
      //   id: '5',
      //   name: 'Денис',
      //   login: 'DelinMoran',
      //   email: 'denbasenko@yandex.ru',
      //   phoneNumber: '89881883808',
      //   photoURL: ''
      // }
    ],
    messages: [
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
        senderId: '1'
      }
    ]
  },
  {
    id: '1',
    name: 'Илья',
    users: [
      ...mockUsers.filter(user => user.id === '3' || user.id === '5')
      // {
      //   id: '3',
      //   name: 'Илья',
      //   login: 'ilyacool',
      //   email: 'coolilya@yandex.ru',
      //   phoneNumber: '89998887766',
      //   photoURL: 'https://cdn1.flamp.ru/7157ee2795de7696bece8a0d3b386b31.jpg'
      // },
      // {
      //   id: '5',
      //   name: 'Денис',
      //   login: 'DelinMoran',
      //   email: 'denbasenko@yandex.ru',
      //   phoneNumber: '89881883808',
      //   photoURL: ''
      // }
    ],
    messages: [
      {
        id: '0',
        body: 'Как дела?',
        photoURL: '',
        createdAt: new Date(899899),
        checked: true,
        type: 'text',
        senderId: '2'
      },
      {
        id: '1',
        body: 'Круто!',
        photoURL: '',
        createdAt: new Date(),
        checked: true,
        type: 'text',
        senderId: '5'
      }
    ]
  }
]
