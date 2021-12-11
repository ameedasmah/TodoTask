import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex items-center pt-12 pl-16 text-xl">
      <h2>Sorry</h2>
      <p >That page cannot be found</p>
      <Link className="text-blue-600/100 " to="/">Back to the homepage...</Link>
    </div>
  );
}
 
export default NotFound;