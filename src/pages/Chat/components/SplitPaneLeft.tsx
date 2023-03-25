import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Chats from './Chats'
import Users from './Users'

import cls from 'classnames'

// svg
import { NextIcon } from 'assets/icons/EXPORT'

const SplitPaneLeft = () => {
  const [search, setSearch] = useState('')
  const params = useParams()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div
      className={cls('lg:flex flex-col h-screen w-1/4 max-lg:w-[100vh] bg-gray-100', {
        hidden: Object.entries(params).length !== 0
      })}
    >
      <div className="pb-5 border-b px-3">
        <Link to="/profile" className="text-gray-400 mt-3 flex w-fit ml-auto hover:text-gray-500">
          Профиль
          <NextIcon width="10px" className="fill-gray-400 ml-2 mt-0.5" />
        </Link>
        <input
          className="w-full mt-5 h-10 bg-gray-200 rounded-lg outline-none px-3 placeholder-shown:text-center"
          type="text"
          placeholder="Поиск"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {search ? <Users search={search} /> : <Chats />}
    </div>
  )
}

export default SplitPaneLeft
