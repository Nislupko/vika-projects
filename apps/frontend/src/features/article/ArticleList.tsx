import React, {FC, useEffect} from "react";
import {Article} from "./Article";
import {useArticles} from "./hooks/useArticles";

export const ArticleList: FC = () => {
  const {articles, loadArticles, isLoading, error} = useArticles();

  useEffect(() => {
    //loadArticles();
  }, []);

  return <div>
    {isLoading
      ? <div>Loading Articles...</div>
      : articles.map(article => <Article key={article.id} article={article}/>)
    }
    {
      error && <div>Error fetching articles, please, try later</div>
    }
  </div>
}
