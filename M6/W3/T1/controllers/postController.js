import Post from "../models/postModel.js";
import Comment from "../models/commentModel.js";

const likesArray = [
  {
    author: "Maria Rossi",
    profileImg: "https://images.unsplash.com/",
  },
  {
    author: "Marina Verdi",
    profileImg: "https://images.unsplash.com/",
  },
];

const newComment = new Comment({
  author: "Mario Biondi",
  content: "Bel post, mi è piaciuto",
  totalLikes: 2,
  totalComments: 0,
});

const secondComment = new Comment({
  author: "Maria Rossi",
  content: "Mi piace anche",
  totalLikes: 2,
  totalComments: 0,
});

const saveComments = async () => {
  await newComment.save();
  await secondComment.save();
};

const addNewPost = async () => {
  const newPost = new Post({
    author: "Marco Rossi",
    content:
      "lorem ipsum dolor sit amet consectetur adipisicing elit",
    totalLikes: 2,
    totalComments: 1,
    likes: likesArray,
    comments: [newComment._id, secondComment._id],
  });
  await newPost.save();
};

export { addNewPost, saveComments };

// Create comments referencing the post

// const comments = await Comment.insertMany([
//     { user: 'Alice', text: 'Great post!' },
//     { user: 'Bob', text: 'Very helpful!' },
//   ]);

// Update the post with comment IDs
//   const commentIds = comments.map((comment) => comment._id);
//   await post.save();
