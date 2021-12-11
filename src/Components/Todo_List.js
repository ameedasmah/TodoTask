import { Link } from 'react-router-dom';

const Todo_List = ({ todo }) => {
  return (
    <div >
      {todo.map(todo => (
        <div className="border border-gray-100 text-lg bg-gray-400 text-white py-4 my-4  max-w-lg ml-80 " key={todo.id} >
          <Link to={`/todo/${todo.id}`}>
          <h2> id : { todo.id }</h2>
            <h2> title: { todo.title }</h2>
            <h2>userId: { todo.userId }</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default Todo_List;