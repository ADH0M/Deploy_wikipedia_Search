import { useContext, useState } from "react";
import Inputs from "../../helper/inputs/Inputs";
import { Postcontext } from "../../../AppRouter";


const AddPosts = () => {
  const { posts, dispatchPost } = useContext(Postcontext);

  const [err, setErr] = useState(false);

  const [formData, setFormData] = useState({
    author_Id:posts.length+1,
    postTitle: "",
    author: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTask = () => {
    if (formData.postTitle && formData.author && formData.content) {
      setErr(false);
      dispatchPost({ type: "Add_Post", payload: formData });
      setFormData({
        postTitle: "",
        author: "",
        content: "",
      });
    } else {
      setErr(true);
    }
  };
  
console.log(posts);

  return (
    <div className=" w-96 m-auto">
      <h2 className="text-center text-2xl m-1 p-2 font-semibold text-indigo-700">
        Add New Post Page{" "}
      </h2>
      <Inputs
        label="Post Title "
        value={formData.postTitle}
        onChange={handleChange}
        name={"postTitle"}
        placeholder="Add Post Title"
      />
      <Inputs
        label="Author "
        value={formData.author}
        onChange={handleChange}
        name={"author"}
        placeholder="Add Your Name"
      />
      <textarea
        placeholder="max words only 100 "
        className="w-full max-h-32 outline-none hover:border focus:border-blue-400 rounded-md p-2 border hover:border-blue-500"
        name="content"
        value={formData.content}
        onChange={handleChange}
      ></textarea>
      <div>
        <button
          className="border dark:bg-blue-200 bg-blue-500 text-gray-200 hover:bg-opacity-90 text-lg dark:text-gray-700 px-2 py-1  rounded-md"
          onClick={handleAddTask}
        >
          Add Post{" "}
        </button>
        <p className="text-red-400 p-1 text-center">{err && "All failds are required "}</p>
      </div>
    </div>
  );
};

export default AddPosts;
