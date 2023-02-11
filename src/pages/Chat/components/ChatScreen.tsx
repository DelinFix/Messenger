// components
import { Message } from "~components"

// svg
import { ArrowIcon, KebabMenuIcon, PaperClipIcon } from "~svg"

// types
import { IMessage } from "~types"

const mockMessages: IMessage[] = [
  {
    text: "Как ты себя чувтсвуешь?",
    displayName: "Илья",
    createdAt: new Date(999999),
    photoURL: "",
    uid: "1",
  },
  {
    text: "Круто!",
    displayName: "Денис",
    createdAt: new Date(),
    photoURL: "",
    uid: "0",
  },
]

const ChatScreen = () => {
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
  return (
    <div className="h-full p-8">
      <div className="flex flex-row items-center w-full pb-4 border-b">
        <div className="min-w-[50px] h-[50px] rounded-full bg-gray-300" />
        <div className="text-lg font-semibold ml-4">Илья</div>
        <KebabMenuIcon
          width="20px"
          className="fill-blue-600 cursor-pointer ml-auto"
        />
      </div>
      <div className="overflow-y-auto align-bottom flex flex-col justify-end h-4/5 mb-4">
        <div className="w-full text-gray-400 text-center">19 июня</div>
        {mockMessages.map((msg) => (
          <Message message={msg} key={msg.createdAt.toString()} />
        ))}
      </div>
      <div className="flex flex-row w-full border-t pt-4">
        <PaperClipIcon
          width="30px"
          onClick={() => null}
          className="fill-blue-600 cursor-pointer mr-4"
        />
        <textarea
          rows={2}
          placeholder="Сообщение"
          className="w-full bg-gray-100 py-2 px-4 rounded-3xl resize-none focus:outline-blue-600"
        />
        <ArrowIcon
          width="40px"
          onClick={() => null}
          className="fill-blue-600 cursor-pointer ml-4"
        />
      </div>
    </div>
  )
}

export default ChatScreen
