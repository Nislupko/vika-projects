import React, {FC} from "react";
import {IArticle} from "./types";

export const Article: FC<{ article: IArticle }> = ({article}) => {
  return <div> Article #{article.id}</div>;
}
