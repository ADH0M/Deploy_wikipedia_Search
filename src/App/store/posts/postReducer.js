export const initialState = [
  {
    author_Id: 1,
    postTitle: "Javascript",
    author: "Ali mohammed",
    content: "language programming",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
    comments: [
      { id: 1, comment: "the javascript is good language programming .." },
    ],
  },
  {
    author_Id: 2,
    postTitle: "Html",
    author: "serag",
    content: "language programming",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
    comments: [{ id: 1, comment: "the html is hyper text markup language .." }],
  },
  {
    author_Id: 3,
    postTitle: "Html",
    author: "serag",
    content: "language programming",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
    comments: [{ id: 1, comment: "the html is hyper text markup language .." }],
  },
  {
    author_Id: 4,
    postTitle: "Html",
    author: "serag",
    content: "language programming",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
    comments: [{ id: 1, comment: "the html is hyper text markup language .." }],
  },
];

const postsReducer = (state, action) => {
  switch (action.type) {
    case "Add_Post":
      return [
        ...state,
        {
          author_Id: action.payload.author_Id,
          postTitle: action.payload.postTitle,
          author: action.payload.author,
          content: action.payload.content,
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
          comments: [{ id: '', comment: "" }],
        },
      ];

    case "Edit_Post":
      return state.map((item) => {
        if (item.author_Id === action.payload.author_Id) {
          return { ...item, content: action.payload.content };
        } else {
          return item;
        }
      });

    case "Delete_Post":
      return state.filter((item) => {
        return item.author_Id !== action.payload;
      });

    case "Comment":
      return state.map((item) => {
        if (item.author_Id === action.payload.post_id) {          
          return {
            ...item,
            comments: [
              ...item.comments,
              { id: item.comments.length +1,...action.payload },
            ],
          };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

export default postsReducer;
