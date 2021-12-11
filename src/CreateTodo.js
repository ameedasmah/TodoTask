import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [userId, setUserId] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { title, completed, userId };

    fetch('https://jsonplaceholder.typicode.com/todos/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
    }).then(() => {
      // history.go(-1);
      console.log('added')
      history.push('/');
    })
  }
  return (
    <div className="p-16">
      <h2>Add a New Todo</h2>
      <form className="flex flex-col justify-between max-w-xl	mt-20 ml-80  " onSubmit={handleSubmit}>
        <label>todo userId:</label>
        <textarea
          className="border-2"
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        ></textarea>
        <label>todo title:</label>
        <input
          type="text"
          className="border-2"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>todo completed:</label>
        <select
          value={completed}
          className="border-2"
          onChange={(e) => setCompleted(e.target.value)}
        >
          <option value={true}>true</option>
          <option value={false}>false</option>
        </select>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded">Add todo</button>
      </form>
    </div>
  );
}

export default Create;