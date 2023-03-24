import { FC, useCallback } from 'react'

// types
import { IChat } from 'types/EXPORT'
import getFormatedTime from 'utils/getFormatedTime'

const mockedChats: IChat[] = [
  {
    user: {
      displayName: 'Андрей',
      uid: '2'
    },
    lastMessage: {
      text: 'MsgText 12345678910 test1 test2 test3 test4 test5 testMsg sometext1 sometext2 sometext3 some te',
      displayName: 'Артур',
      createdAt: new Date(999999),
      photoURL: '',
      uid: '2'
    },
    time: new Date(999994429),
    unreadMessages: 5
  },
  {
    user: {
      displayName: 'Илья',
      uid: '1'
    },
    lastMessage: {
      text: 'Круто!',
      displayName: 'Денис',
      createdAt: new Date(),
      photoURL: '',
      uid: '0'
    },
    time: new Date(999924244299)
  }
]

const Chats: FC = () => {
  const currentUser = {
    uid: '0',
    displayName: 'Денис'
  }

  const handleMessageLimit = useCallback(
    (msg: string = '') => (msg.length >= 95 ? msg.substring(0, 92) + '...' : msg),
    []
  )

  const handleChatSelect = (chat: IChat) => {
    console.log(chat.user.uid)
  }

  return (
    <div className="overflow-y-auto">
      {mockedChats.map(chat => {
        const { lastMessage, time, user, unreadMessages } = chat
        return (
          <div
            className="flex flex-row h-24 py-4 border-b cursor-pointer hover:bg-gray-200 px-3"
            key={user.uid}
            onClick={() => handleChatSelect(chat)}
          >
            <div className="min-w-[62px] h-[62px] rounded-full bg-gray-300" />
            <div className="flex flex-col w-fit grow ml-4">
              <div className="font-semibold">{user.displayName}</div>
              <div className="text-gray-400 text-sm overflow-hidden h-10">
                {currentUser.uid === lastMessage.uid && <span className="font-semibold text-black">Вы: </span>}
                {handleMessageLimit(lastMessage.text)}
              </div>
            </div>
            <div className="flex flex-col ml-auto justify-between pl-4">
              <div className="text-gray-400 text-xs">{getFormatedTime(time)}</div>
              {unreadMessages && (
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex justify-center items-center">
                  {unreadMessages}
                </div>
              )}
            </div>
          </div>
        )
      })}
      {mockedChats.length === 0 && <div className="text-center text-xl text-gray-400 mt-5">No chats</div>}
    </div>
  )
}

export default Chats
