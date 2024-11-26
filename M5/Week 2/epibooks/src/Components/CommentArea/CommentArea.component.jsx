import React, {
  useState,
  useEffect,
  useContext,
} from "react";

//component imports
import CommentList from "../CommentList/CommentList.component";
import AddComment from "../AddComment/AddComment.component";
import DefaultComment from "../DefaultComment/DefaultComment.component";

//link imports
import {
  GET_COMMENT_URL,
  POST_COMMENT_URL,
  PUT_COMMENT_URL,
  API_KEY,
} from "../../utils/constants";

import { BookContext } from "../../Contexts/context";

//const API_KEY = process.env.APIKEY;

const modifyUrl = (asin) => {
  return GET_COMMENT_URL.replace(":asin", asin);
};

const CommentArea = ({ asin }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    !isFresh() && fetchData();
  }, [asin]);

  const { bookList } = useContext(BookContext);
  const CommentContent = () => {
    return (
      <>
        {commentList.map((commentObj, index) => (
          <CommentList
            commentObj={commentObj}
            key={commentObj._id + index}
          />
        ))}
        <AddComment asin={asin} fetchData={fetchData} />
      </>
    );
  };

  const isFresh = () => {
    return asin === 1234567890;
  };

  const fetchData = async () => {
    try {
      const response = await fetch(modifyUrl(asin), {
        headers: {
          Authorization: API_KEY,
        },
      });
      const data = await response.json();
      setCommentList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const bookTitle = () => {
    if (isFresh()) return "";
    const book = bookList.find((el) => el.asin === asin);
    return book?.title;
  };

  return (
    <div className="comment-area p-1">
      <h3 className="m-2">
        Recensioni di
        <span className="h5 d-block text-primary">
          {bookTitle()}
        </span>
      </h3>
      {isFresh() ? <DefaultComment /> : <CommentContent />}
    </div>
  );
};

export default CommentArea;
