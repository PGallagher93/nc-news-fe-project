import axios from 'axios'

const fetchSingleArticle = (id) =>{
    console.log("fetching")
    return axios.get(`https://nc-news-app-bch2.onrender.com/api/articles/${id}`)
}

export default fetchSingleArticle