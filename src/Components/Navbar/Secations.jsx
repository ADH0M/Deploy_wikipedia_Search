import { Link } from "react-router-dom";

const Secations = () => {
  return (
    <div>
      <ul className="font-semibold flex text-gray-800 dark:text-gray-100  gap-2 m-2 ">
        <Link to= {`${import.meta.env.VITE_ROUTE_URL}`}>Home</Link>
        <Link to={'/posts'}>Posts</Link>
        <Link to={`/addpost` }>Add Post</Link>
        <Link to={`/contact us` }>Contact us</Link>
      </ul>
    </div>
  );
};

export default Secations;
