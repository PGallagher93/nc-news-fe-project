import axios from "axios";

const fetchArticles = ({sort, topic, order}) => {
  
  return axios.get(`https://nc-news-app-bch2.onrender.com/api/articles`,
  {params:{sort_by:sort, topic:topic, order:order}});
};

const fetchComments = (id) => {
  return axios.get(
    `https://nc-news-app-bch2.onrender.com/api/articles/${id}/comments`
  );
};

const fetchSingleArticle = (id) => {
  return axios.get(`https://nc-news-app-bch2.onrender.com/api/articles/${id}`);
};

const fetchTopics =() =>{
  return axios.get("https://nc-news-app-bch2.onrender.com/api/topics")
}

const patchArticleVotes = (id, votes) => {
  return axios.patch(
    `https://nc-news-app-bch2.onrender.com/api/articles/${id}`,
    { inc_votes: `${votes}` }
  );
};
const postComment = (id, commentBody, user) =>{
    return axios.post(`https://nc-news-app-bch2.onrender.com/api/articles/${id}/comments`, {username: `${user}`, body: `${commentBody}`})
}

const deleteComment = (id) =>{
  
  return axios.delete(`https://nc-news-app-bch2.onrender.com/api/comments/${id}`)
}

const patchCommentVotes = (id, votes) => {
  return axios.patch(`https://nc-news-app-bch2.onrender.com/api/comments/${id}`, {inc_votes: `${votes}`})

  
}

const fetchUsers = () => {
  return axios.get(`https://nc-news-app-bch2.onrender.com/api/users`)
}
export { fetchArticles, fetchComments, fetchSingleArticle, fetchUsers, patchArticleVotes, postComment, fetchTopics, deleteComment, patchCommentVotes};
