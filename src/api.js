import axios from "axios";

const fetchArticles = ({sort, topic, order}) => {
  let path = `https://nc-news-app-bch2.onrender.com/api/articles`
  if(topic || sort || order){
    path += `?`
  }
  
  if (topic){
    path+= `topic=${topic}`
  }
  if(sort && topic){
    path += `&sort_by=${sort}`
    
  }
  if (sort && !topic){
    path+= `sort_by=${sort}`
  }
  if(order){
    path+=`&order=${order}`
  }
  console.log(path)
  return axios.get(path);
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

export { fetchArticles, fetchComments, fetchSingleArticle, patchArticleVotes, postComment, fetchTopics };
