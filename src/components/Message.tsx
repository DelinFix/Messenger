import { FC, memo, useMemo } from 'react'

//types
import { IMessage } from 'types/EXPORT'

import cls from 'classnames'
import getFormatedTime from 'utils/getFormatedTime'

export interface IMessageProps {
  message: IMessage
}

const Message: FC<IMessageProps> = props => {
  const { text, uid, createdAt } = props.message

  const currentUser = {
    displayName: 'Денис',
    uid: '0'
  }

  const isCurrent = useMemo(() => uid === currentUser.uid, [currentUser, uid])

  return (
    <div
      className={cls(
        'flex flex-row w-fit p-2.5 rounded-xl mb-1',
        isCurrent ? 'ml-auto bg-blue-100 rounded-br-sm' : 'bg-gray-100 rounded-tl-sm'
      )}
    >
      <div>{text}</div>
      <div className={cls('text-xs self-end ml-1', isCurrent ? 'text-blue-500' : 'text-gray-400')}>
        {getFormatedTime(createdAt)}
      </div>
    </div>
  )
}

export default memo(Message)
