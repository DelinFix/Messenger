import { IChat } from 'types/chat'

export const mockChats: IChat[] = [
  {
    id: '0',
    name: 'Андрей',
    users: [
      {
        id: '1',
        name: 'Андрей',
        login: 'andrew',
        email: 'andrew@yandex.ru',
        phoneNumber: '89998887766'
      },
      {
        id: '5',
        name: 'Денис',
        login: 'DelinMoran',
        email: 'denbasenko@yandex.ru',
        phoneNumber: '89881883808'
      }
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
      {
        id: '3',
        name: 'Илья',
        login: 'ilyacool',
        email: 'coolilya@yandex.ru',
        phoneNumber: '89998887766'
      },
      {
        id: '5',
        name: 'Денис',
        login: 'DelinMoran',
        email: 'denbasenko@yandex.ru',
        phoneNumber: '89881883808'
      }
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
