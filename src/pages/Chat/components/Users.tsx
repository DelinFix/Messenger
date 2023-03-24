import { FC } from 'react'

// types
import { IUser } from 'types/EXPORT'

const mockedUsers: IUser[] = [
  {
    displayName: 'Андрей',
    uid: '1'
  },
  {
    displayName: 'Артур',
    uid: '2'
  },
  {
    displayName: 'Илья',
    uid: '3'
  },
  {
    displayName: 'Денис',
    uid: '0'
  }
]

export interface IUserssProps {
  search: string
}

const Users: FC<IUserssProps> = props => {
  const { search } = props
  return (
    <div className="overflow-y-auto">
      {mockedUsers
        .filter(user => user.displayName.toLowerCase().includes((search ? search : '').toLowerCase()))
        .map(({ displayName, uid }) => (
          <div className="flex flex-row h-24 py-4 border-b cursor-pointer hover:bg-gray-200 px-3" key={uid}>
            <div className="min-w-[62px] h-[62px] rounded-full bg-gray-300" />
            <div className="flex flex-col w-fit grow ml-4 justify-center">
              <div className="font-medium text-xl">{displayName}</div>
            </div>
            <div className="flex flex-col ml-auto justify-between"></div>
          </div>
        ))}
      {mockedUsers.length === 0 && <div className="text-center text-xl text-gray-400 mt-5">No users found</div>}
    </div>
  )
}

export default Users
