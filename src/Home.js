
import Todo_List from "./Components/Todo_List";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: todo } = useFetch('https://jsonplaceholder.typicode.com/todos/')
  return (
    <div className="border border-red-100 text-lg bg-white text-white">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { todo && <Todo_List todo={todo}  /> }
    </div>
  );
}
 
export default Home;