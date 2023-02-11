import ChatScreen from "./components/ChatScreen"
import SplitPaneLeft from "./components/SplitPaneLeft"

const Chat = () => {
  const isChatSelected = true
  return (
    <div className="flex flex-row">
      <SplitPaneLeft />
      <div className="w-3/4 h-screen">
        {isChatSelected ? (
          <ChatScreen />
        ) : (
          <div className="h-full flex justify-center items-center text-xl text-gray-500">
            No chats selected
          </div>
        )}
      </div>
    </div>
  )
}

export default Chat
