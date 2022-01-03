const getArticles = () => {
  return [
    {id: "1", text: "One"},
    {id: "3", text: "Three"},
    {id: "5", text: "Five"},
  ]
}

export const resolvers = {
  Query: {
    articles: getArticles
  }
}
