import React from 'react';
import { connect } from 'react-redux';

import './Counter.styles.css';

const Counter = (props) => {
  return (
    <p>Você tem {props.todos.length} todos.</p>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
})

export default connect(mapStateToProps)(Counter);


