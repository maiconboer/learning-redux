/* cada action é uma função */

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text,
  };
}