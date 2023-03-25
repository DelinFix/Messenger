import { FC, memo, useMemo } from 'react'
import cls from 'classnames'

//types
import { IMessage } from 'types/EXPORT'

// utils
import { getFormatedTime } from 'utils/EXPORT'

// mocks
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
        'flex flex-row w-fit p-2.5 rounded-xl my-3',
        isCurrent ? 'ml-10 bg-blue-100 rounded-br-sm self-end' : 'bg-gray-100 rounded-tl-sm mr-10'
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
