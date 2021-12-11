import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";
const TodoDetails = () => {
    const { id } = useParams();
    const { data: todo, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/todos/' + id);
    const history = useHistory();
    
    const handleClick = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/' + todo.id, {
        method: 'DELETE'
      }).then(() => {
          console.log('deleted')
        history.push('/');
      }) 
    }
  
    return (
      <div >
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { todo && (
          <div className="border-4 border-indigo-200 border-t-indigo-500 max-w-xl ml-24 mt-20">
            <p>id:{todo.id}</p>
            <h2>{ todo.title }</h2>
            <p>UserId: { todo.userId }</p>
          </div>
        )}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ml-32 mt-4 px-4 rounded" onClick={handleClick}>delete</button>
      </div>
    );
  }
   
  export default TodoDetails;