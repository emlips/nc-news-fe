import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-1d1v.onrender.com/api",
});

export const getArticles = (topic) => {
  let queryStr = "/articles";
  if (topic) {
    queryStr += `?topic=${topic}`;
  }
  return newsApi
  .get(queryStr)
  .then(({ data }) => {
    return data.articles;
  });
};

export const getSingleArticle = (article_id) => {
    return newsApi
      .get(`/articles/${article_id}`)
      .then(({ data }) => {
        return data.article;
      });
}

export const getComments = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments.reverse();
    });
};

export const getTopics = () => {
  return newsApi
      .get("/topics")
      .then(({ data }) => {
        return data.topics;
      });
}

export const postComment = (article_id, username, newComment) => {
    const commentToPost = {
        username: username,
        body: newComment,
      };
    return newsApi
    .post(`/articles/${article_id}/comments`, commentToPost)
    .then(({data}) => {
        return data.newComment
    })
}

export const patchArticle = (article_id, vote) => {
  return newsApi.patch(`/articles/${article_id}`, vote);
};
