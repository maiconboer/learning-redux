import React from 'react';

import TodoList from '../../components/TodoList/TodoList';
import Counter from '../../components/Counter/Counter';

import './home.styles.css'

const Home = () => {
  return (
    <div className='container'>
      <TodoList />
      <Counter />
    </div>
  );
}

export default Home;

