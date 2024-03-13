import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-1d1v.onrender.com/api",
});

export const getArticles = (topic, sortBy, order, page) => {
  let queryStr = `/articles?sort_by=${sortBy}&order=${order}&p=${page}`;
  if (topic) {
    queryStr += `&topic=${topic}`;
  }
  return newsApi.get(queryStr).then(({ data }) => {
    return data.articles;
  });
};

export const getArticlesCount = (topic) => {
  let queryStr = `/articles?limit=10000`;
  if (topic) {
    queryStr += `&topic=${topic}`;
  }
  return newsApi.get(queryStr).then(({ data }) => {
    return data.articles.length;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments?limit=10`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const getMoreComments = (article_id, pageNum) => {
  return newsApi
    .get(`/articles/${article_id}/comments?p=${pageNum}`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const postComment = (article_id, username, newComment) => {
  const commentToPost = {
    username: username,
    body: newComment,
  };
  return newsApi
    .post(`/articles/${article_id}/comments`, commentToPost)
    .then(({ data }) => {
      const newComment = {
        body: data.newComment,
        author: username,
        article_id: article_id,
        votes: 0,
      };
      return newComment;
    });
};

export const patchArticle = (article_id, vote) => {
  return newsApi.patch(`/articles/${article_id}`, vote);
};
