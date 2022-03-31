import React, {useState} from 'react';
import './App.css';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <p>test</p>
    </div>
  );
}

export default App;
