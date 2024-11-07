const ShowComments = ({ comments }) => {
  console.log(comments);

  return (
    <div>
      {comments.map((item, index) => (
        <ul key={item.id + "comments" + index} className="m-2 border-b py-2">
          <li className="font-normal text-sm text-blue-500 hover:translate-x-1 transition-all duration-300 ">
            {item.comment}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ShowComments;
