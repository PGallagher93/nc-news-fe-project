import axios from "axios";

const fetchArticles = () => {
  return axios.get("https://nc-news-app-bch2.onrender.com/api/articles");
};

const fetchComments = (id) => {
  return axios.get(
    `https://nc-news-app-bch2.onrender.com/api/articles/${id}/comments`
  );
};

const fetchSingleArticle = (id) => {
  return axios.get(`https://nc-news-app-bch2.onrender.com/api/articles/${id}`);
};

const patchArticleVotes = (id, votes) => {
  return axios.patch(
    `https://nc-news-app-bch2.onrender.com/api/articles/${id}`,
    { inc_votes: `${votes}` }
  );
};

const postComment = (id, commentBody, user) =>{
    return axios.post(`https://nc-news-app-bch2.onrender.com/api/articles/${id}/comments`, {username: `${user}`, body: `${commentBody}`})
}

export { fetchArticles, fetchComments, fetchSingleArticle, patchArticleVotes, postComment };
