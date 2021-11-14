import { useState } from 'react';
import './App.css';  // импорт стилей 
import './styles/Message.css';
import Message from './componens/Message';



function App() {

  const [value, setValue] = useState('некий текст')

  return (
    <div className="App-header">
      <h3>{value}</h3>
      <input type="text"
      value={value}
           onChange={event => setValue(event.target.value)}/>
       <Message name="Alex"/>
    </div>
  );
}

export default App;
