import './App.css'
import {ChatContainer} from "./lib/components/chat/ChatContainer.tsx";
import {ChatInput} from "./lib/components/chat/ChatInput.tsx";

function App() {
  return (
    <>
        <ChatContainer id="chatContainer">
            <ChatInput />
        </ChatContainer>
    </>
  )
}

export default App
