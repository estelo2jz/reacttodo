import React from 'react';
import Logo1 from '../src/logo/logo1.png';
import './App.scss';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-outer-app">
      <div className="todo-app">
        <div>
          <img src={Logo1} />
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
