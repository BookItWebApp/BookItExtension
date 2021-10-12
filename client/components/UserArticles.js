import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getArticles } from "../store/userArticles";
import {SingleArticle} from "./SingleArticle"
import {previewArticle} from '../store/SingleArticle'

export function UserArticles() {
  //ref: https://thoughtbot.com/blog/using-redux-with-react-hooks
  const articles = useSelector((state) => state.userArticles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(previewArticle("be7050ea-13ff-43ba-8fda-07db76a84b86"));
  }, [dispatch]);

  return (
    <div>
      Articles
      {articles.map((article) => {
        return (
          <div key={article.article.id} className="singleContainer">
            <div>
              <a href={article.article.url}>{article.name}</a>
               {/* <SingleArticle article = {article} /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
