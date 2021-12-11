import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 flex justify-between items-center h-16 text-white">
      <h1 className="pl-8">Todo_App </h1>
      <div className="flex justify-between w-40 ">
        <Link to="/">Home</Link>
        <Link className="pr-8" to="/create" >New todo</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;