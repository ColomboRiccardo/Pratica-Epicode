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
  API_KEY,
} from "../../utils/constants";
import { findBookTitle } from "../../utils/utils";

import {
  BookContext,
  AsinSelectedContext,
} from "../../Contexts/context";

//const API_KEY = process.env.APIKEY;

const modifyUrl = (asin) => {
  return GET_COMMENT_URL.replace(":asin", asin);
};

const CommentArea = () => {
  const { asinSelected } = useContext(AsinSelectedContext);
  const { bookList } = useContext(BookContext);

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    !!asinSelected && fetchData();
  }, [asinSelected]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        modifyUrl(asinSelected),
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const data = await response.json();
      setCommentList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comment-area p-1">
      <h3 className="m-2">
        Recensioni di:
        <span className="h5 d-block text-primary">
          {findBookTitle(asinSelected, bookList)}
        </span>
      </h3>
      {!asinSelected ? (
        <DefaultComment />
      ) : (
        <>
          {commentList.map((commentObj, index) => (
            <CommentList
              commentObj={commentObj}
              key={commentObj._id + index}
            />
          ))}
          <AddComment
            asin={asinSelected}
            fetchData={fetchData}
          />
        </>
      )}
    </div>
  );
};

export default CommentArea;
