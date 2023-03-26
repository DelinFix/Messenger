import { FC, useCallback, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

import cls from 'classnames'

// utils
import { getFormatedTime } from 'utils/EXPORT'

// mocks
import { mockChats, mockCurrentUser } from 'mocks/EXPORT'

// components
import { Avatar } from 'components/EXPORT'

const Chats: FC = () => {
  const params = useParams()

  const handleMessageLimit = useCallback(
    (msg: string = '') => (msg.length >= 95 ? msg.substring(0, 92) + '...' : msg),
    []
  )

  return (
    <div className="overflow-y-auto">
      {mockChats.map(chat => {
        const { id, name, messages, users } = chat
        const lastMsg = useMemo(() => messages[messages.length - 1], [messages])
        const otherUser = useMemo(() => users?.filter(user => user.id !== mockCurrentUser.id)[0], [users])
        return (
          <Link
            to={`/chat/${id}`}
            className={cls('flex flex-row h-24 py-4 border-b cursor-pointer hover:bg-gray-200 px-3', {
              'bg-blue-100 hover:bg-blue-100': params?.id === id
            })}
            key={id}
          >
            <Avatar className="w-16 h-16" src={otherUser.photoURL} />
            <div className="flex flex-col w-fit grow ml-4">
              <div className="font-semibold">{name}</div>
              <div className="text-gray-400 text-sm overflow-hidden h-10">
                {mockCurrentUser.id === lastMsg.id && <span className="font-semibold text-black">Вы: </span>}
                {handleMessageLimit(lastMsg.body)}
              </div>
            </div>
            <div className="flex flex-col ml-auto justify-between pl-4">
              <div className="text-gray-400 text-xs">{getFormatedTime(lastMsg.createdAt)}</div>
              {!lastMsg.checked && (
                // TODO add number
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex justify-center items-center" />
              )}
            </div>
          </Link>
        )
      })}
      {mockChats.length === 0 && <div className="text-center text-xl text-gray-400 mt-5">No chats</div>}
    </div>
  )
}

export default Chats
