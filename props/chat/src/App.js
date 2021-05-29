import MessageHistory from './components/MessageHistory';
import './main.css';
import {messages} from './components/messages.js';

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <ul><MessageHistory list={messages} /></ul>
        </div>
      </div>
    </div>
  );
}

export default App;


