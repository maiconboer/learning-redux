/* apenas uma função no arquivo reducer, o nome da
 * função é o nome da variável que vamos guardar no estado
 * Neste caso, todos
 * */

export default function todos(state = [], action) {

  switch(action.type) {
    case 'ADD_TODO':
      return [ ...state, { 
        id: Math.random(), 
        text: action.text 
      }]
      
    default:
      return state;
  }
}