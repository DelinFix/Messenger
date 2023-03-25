// components
import { Message } from 'components/EXPORT'

// svg
import { ArrowIcon, KebabMenuIcon, PaperClipIcon } from 'assets/icons/EXPORT'

// types
import { IChat } from 'types/EXPORT'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { mockChats } from 'mocks/chats'
import { mockCurrentUser } from 'mocks/users'

const ChatScreen = () => {
  const { id = '0' } = useParams<{ id?: string }>()
  const [chatInfo, setChatInfo] = useState({} as IChat)
  useEffect(() => {
    setChatInfo(mockChats[Number(id)])
  }, [id])

  // const sendMessage = async () => {
  //   if (message.trim()) {
  //     await addDoc(messageCol, {
  //       uid: user?.uid,
  //       displayName: user?.displayName,
  //       photoURL: user?.photoURL,
  //       text: message,
  //       createdAt: serverTimestamp(),
  //     })
  //     setMessage("")
  //     getMessages()
  //   }
  // }
  const otherUserId = useMemo(
    () => chatInfo.users?.filter(user => user.id !== mockCurrentUser.id)[0].id,
    [chatInfo.users]
  )
  return (
    <div className="h-[100vh] p-3 sm:p-8">
      <div className="flex flex-row items-center w-full pb-4 border-b">
        <Link to="/chat" className="block p-5 sm:hidden">
          <ArrowIcon width="35px" className="rotate-180 fill-blue-600" />
        </Link>
        <Link to={`/profile/${otherUserId}`} className="flex flex-row items-center cursor-pointer">
          <div className="min-w-[50px] h-[50px] rounded-full bg-gray-300" />
          <div className="text-lg font-semibold ml-4">{chatInfo.name}</div>
        </Link>
        <KebabMenuIcon width="20px" className="fill-blue-600 cursor-pointer ml-auto" />
      </div>
      <div className="overflow-y-auto align-bottom flex flex-col justify-end h-4/5 mb-4">
        <div className="w-full text-gray-400 text-center">19 июня</div>
        {chatInfo.messages?.map(msg => (
          <Message message={msg} key={msg.id} />
        ))}
      </div>
      <div className="flex flex-row w-full border-t pt-4">
        <PaperClipIcon width="30px" onClick={() => null} className="fill-blue-600 cursor-pointer mr-4" />
        <textarea
          rows={2}
          placeholder="Сообщение"
          className="w-full bg-gray-100 py-2 px-4 rounded-3xl resize-none focus:outline-blue-600"
        />
        <ArrowIcon width="40px" onClick={() => null} className="fill-blue-600 cursor-pointer ml-4" />
      </div>
    </div>
  )
}

export default ChatScreen
