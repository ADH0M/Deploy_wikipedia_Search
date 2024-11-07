import { useContext, useState } from "react";
import { Postcontext } from "../../../AppRouter";

const Coments = ({ post_id }) => {
  const { posts, dispatchPost } = useContext(Postcontext);
  const [err , setErr] = useState(false);

  const hadleComment = (id, formData) => {
    if(data.comment.trim().length > 0 && data.comment !==''  ){
      dispatchPost({ type: "Comment", payload: formData });
      setData({ ...data, comment: ''})
      setErr(false );
    }else{
      setErr(true);
    }
  };

  const [data, setData] = useState({
    post_id: post_id,
    comment: "",
    reaction: "like",
  });

  return (
    <div key={post_id}>
      <div className="flex gap-6 items-center">
        <textarea
          name="comment"
          id="comment"
          className="w-full max-h-16 overflow-auto min-h-10 outline-none border hover:border-cyan-600 rounded-md py-1 px-2 focus:border-cyan-500"
          value={data.comment}
          onChange={(e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value });
          }}
        />

        <button
          onClick={() => {
            hadleComment(post_id, data);
          }}
          className="border border-gray-400 p-2 rounded-md max-h-fit hover:bg-gray-300 hover:border-blue-500"
        >
          Comment
        </button>
      
      </div>
    </div>
  );
};

export default Coments;
