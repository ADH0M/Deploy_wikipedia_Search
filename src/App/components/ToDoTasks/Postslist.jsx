import { Outlet } from "react-router";
import { Postcontext } from "../../../AppRouter";
import { useContext, useState } from "react";
import Reactions from "./Reactions";
import Coments from "./Coments";
import ShowComments from "./ShowComments";
const Postslist = () => {
  // {posts , dispatchPost }
  const context = useContext(Postcontext);

  const handleEdit = (post) => {
    context.dispatchPost({ type: "Edit_Post", payload: post });
  };

  const handleDelete = (id) => {
    context.dispatchPost({ type: "Delete_Post", payload: id });
  };

  return (
    <div className=" w-full z-30">
      <Outlet />
      {context?.posts?.map((item) => (
        <div
          key={item.author_Id}
          className=" container  w-full m-auto mt-4 border border-gray-600 p-2 my-4 relative rounded-md shadow-slate-300 shadow shadow-md"
        >
          <button
            onClick={() => handleDelete(item.author_Id)}
            className="font-semibold text-xl hover:bg-red-200 hover:border-red-400 text-rose-400 px-2 absolute top-1 right-2 hover:text-white rounded-md border border-gray-300"
          >
            X
          </button>

          <Post item={item} edit={handleEdit} />
          <div className="flex w-full justify-evenly items-center">
            <Reactions />
            <Coments post_id={item.author_Id} />
          </div>
          <ShowComments comments={item.comments} />
        </div>
      ))}
    </div>
  );
};

const Post = ({ item, edit }) => {
  const [isEdit, setIsEdit] = useState(false);

  const List = (
    <>
      <h4 className="font-semibold text-lg text-gray-400 capitalize ">
        {item.author}
      </h4>
      <h3 className="font-medium text-lg text-gray-600 ">{item.postTitle}</h3>
      {isEdit ? (
        <>
          <textarea
            className="w-full max-h-20 overflow-auto min-h-20 border focus:border-gray-900 outline-none px-2 py-1 rounded-md text-sm text-gray-700 "
            onChange={(e) => {
              edit({ ...item, content: e.target.value });
            }}
            value={item.content}
            name="content"
            id="content"
          ></textarea>
          <button
            className="font-semibold py-1 px-2 border  rounded-md border-gray-400 text-gray-500 hover:text-gray-400"
            onClick={() => {
              setIsEdit(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <div className="grid w-full grid-cols-5">
          <span className="font-medium col-span-4 text-slate-700 text-lg py-2 my-3 mr-2">
            {item.content}
          </span>
          <button
            className="col-span-1"
            onClick={() => {
              setIsEdit(true);
            }}
          >
            Edit
          </button>
        </div>
      )}
    </>
  );
  return <div className=" p-2 ">{List}</div>;
};

export default Postslist;
