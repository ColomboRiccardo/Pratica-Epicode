import React, { useState, useEffect } from "react";

//component imports
import CommentList from "../CommentList/CommentList.component";
import AddComment from "../AddComment/AddComment.component";

//link imports
import {
  GET_COMMENT_URL,
  POST_COMMENT_URL,
  PUT_COMMENT_URL,
  API_KEY,
} from "../../utils/constants";

//const API_KEY = process.env.APIKEY;

const modifyUrl = (asin) => {
  return GET_COMMENT_URL.replace(":asin", asin);
};

const CommentArea = ({ asin }) => {
  const fetchData = async () => {
    const response = await fetch(modifyUrl(asin), {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await response.json();
    setCommentList(data);
  };

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="comment-area">
      <h3 className="m-2">Recensioni {asin}</h3>
      {commentList.map((commentObj, index) => (
        <CommentList
          commentObj={commentObj}
          key={commentObj._id + index}
        />
      ))}
      <AddComment asin={asin} fetchData={fetchData} />
    </div>
  );
};

export default CommentArea;

// fetch(GET_COMMENT_URL, {
//     headers: {
//       Authorization: API_KEY,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => setCommentList(data));
