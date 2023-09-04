import axios from 'axios'

const fetchArticles = () =>{
    return axios.get('https://nc-news-app-bch2.onrender.com/api/articles')

}

export default fetchArticles