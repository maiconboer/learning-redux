import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../store/modules/Todos/actions/todos';

import './TodoList.styles.css';

const TodoList = (props) => {
  const inputRef = React.useRef();
 
  function handleAddTodo() {

    if(inputRef.current.value.length === 0) return
    props.addTodo(inputRef.current.value);
    inputRef.current.value = ''
    inputRef.current.focus();
  }

  return (
    <>
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <input 
        ref={inputRef}
        type="text"
        autoFocus
      />
      <button onClick={handleAddTodo}>New todo</button>
    </>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);