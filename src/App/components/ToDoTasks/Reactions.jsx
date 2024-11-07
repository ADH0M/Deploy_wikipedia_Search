import { flatMap } from "lodash";
import React, { useState } from "react";

const reactionEmojis = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const Reactions = () => {
  const [showReaction, setShowReaction] = useState(false);
  const reactions = Object.entries(reactionEmojis).map(
    ([name, emoji], index) => {
      return <button key={index+'reaction'} className="py-1 mb-1 hover:opacity-50 ">{emoji}</button>;
    }
  );
  return (
    <div
      className=" w-fit justify-around mt-3 mb-2 relative"
      onMouseLeave={() => {
        setShowReaction(false);
      }}
      onMouseEnter={() => setShowReaction(true)}
    >
      <div
        className={`w-full  transition-all absolute  -top-10 -translate-y-2 left-0 duration-500 py-3 justify-around mt-3 mb-2  ${
          showReaction ? "flex gap-2" : "hidden"
        }`}
      >
        {reactions}
      </div>

      <button
        className={`rounded-md border border-gray-600 m-2 cursor-pointer px-8 py-1 hover:bg-gray-300 `}
      >
        Reaction
      </button>
    </div>
  );
};

export default Reactions;
