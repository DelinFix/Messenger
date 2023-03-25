import { mockCurrentUser, mockUsers } from 'mocks/users'
import { FC, useEffect, useState } from 'react'

export interface IUserssProps {
  search: string
}

const Users: FC<IUserssProps> = props => {
  const { search = '' } = props
  const [users, setUsers] = useState(mockUsers)

  useEffect(() => {
    setUsers(
      mockUsers.filter(
        user =>
          (user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.login.toLowerCase().includes(search.toLowerCase())) &&
          user.id !== mockCurrentUser.id
      )
    )
  }, [search])

  return (
    <div className="overflow-y-auto">
      {users.map(({ name, id }) => (
        <div className="flex flex-row h-24 py-4 border-b cursor-pointer hover:bg-gray-200 px-3" key={id}>
          <div className="min-w-[62px] h-[62px] rounded-full bg-gray-300" />
          <div className="flex flex-col w-fit grow ml-4 justify-center">
            <div className="font-medium text-lg">{name}</div>
          </div>
          <div className="flex flex-col ml-auto justify-between"></div>
        </div>
      ))}
      {users.length === 0 && <div className="text-center text-xl text-gray-400 mt-5">No users found</div>}
    </div>
  )
}

export default Users
