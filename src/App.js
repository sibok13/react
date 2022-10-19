import './App.css';
import {Message} from './components/Message';
import './index.css';

function App() {

  const textMessage = "Hello!";

  return (
    <div className="App">
      <Message text={textMessage} />
    </div>
  );
}

export default App;
