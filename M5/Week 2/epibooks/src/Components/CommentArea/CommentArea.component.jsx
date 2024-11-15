import React, { useState, useEffect } from "react";
import CommentList from "../CommentList/CommentList.component";

//link imports
import {
  GET_COMMENT_URL,
  POST_COMMENT_URL,
  PUT_COMMENT_URL,
  API_KEY,
} from "../../utils/constants";

//const API_KEY = process.env.APIKEY;

const CommentArea = () => {
  //console.log(API_KEY);

  const fetchData = async () => {
    const response = await fetch(GET_COMMENT_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await response.json();
    setCommentList(data);
  };

  const postData = async () => {
    const response = await fetch(POST_COMMENT_URL, {
      headers: {
        Authorization: API_KEY,
      },
      method: "POST",
      body: JSON.stringify({
        comment:
          "Ottimo libro, lo rileggerei subito, ma non lo ho ancora letto",
        rate: "4",
        elementId: "0000",
      }),
    });
  };

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    postData();
    fetchData();
    console.log(commentList);
  }, []);

  return (
    <>
      <h3 className="m-2">Recensioni</h3>
      <CommentList />
    </>
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
