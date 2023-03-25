import { FC, memo, useMemo } from 'react'

//types
import { IMessage } from 'types/EXPORT'

import cls from 'classnames'
import { getFormatedTime } from 'utils/EXPORT'
import { mockCurrentUser } from 'mocks/EXPORT'

export interface IMessageProps {
  message: IMessage
}

const Message: FC<IMessageProps> = props => {
  const { body, createdAt, senderId } = props.message

  const isCurrent = useMemo(() => senderId === mockCurrentUser.id, [mockCurrentUser.id, senderId])

  return (
    <div
      className={cls(
        'flex flex-row w-fit p-2.5 rounded-xl mb-1',
        isCurrent ? 'ml-auto bg-blue-100 rounded-br-sm' : 'bg-gray-100 rounded-tl-sm'
      )}
    >
      <div>{body}</div>
      <div className={cls('text-xs self-end ml-1', isCurrent ? 'text-blue-500' : 'text-gray-400')}>
        {getFormatedTime(createdAt)}
      </div>
    </div>
  )
}

export default memo(Message)
