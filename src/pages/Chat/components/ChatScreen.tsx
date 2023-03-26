import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// components
import { Avatar, Message } from 'components/EXPORT'

// svg
import { ArrowIcon, KebabMenuIcon, PaperClipIcon } from 'assets/icons/EXPORT'

// types
import { IChat } from 'types/EXPORT'

// mocks
import { mockChats, mockCurrentUser } from 'mocks/EXPORT'

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
  const otherUser = useMemo(() => chatInfo.users?.filter(user => user.id !== mockCurrentUser.id)[0], [chatInfo.users])

  return (
    <div className="h-screen p-3 sm:p-8">
      <div className="flex flex-row items-center w-full pb-4 border-b">
        <Link to="/chat" className="block pr-4 sm:hidden">
          <ArrowIcon width="36px" className="rotate-180 fill-blue-600" />
        </Link>
        <Link to={`/profile/${otherUser?.id}`} className="flex flex-row items-center cursor-pointer">
          <Avatar className="w-14 h-14" src={otherUser?.photoURL} />
          <div className="text-lg font-semibold ml-4">{chatInfo.name}</div>
        </Link>
        <KebabMenuIcon width="20px" className="fill-blue-600 cursor-pointer ml-auto" />
      </div>
      {/* TODO fix height and order */}
      <div className="overflow-y-auto align-bottom flex flex-col justify-start h-4/5 mb-4">
        <div className="w-full text-gray-400 text-center mt-5">19 июня</div>
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
