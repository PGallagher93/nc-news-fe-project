import axios from 'axios'

const fetchComments = (id) => {
    return axios.get(`https://nc-news-app-bch2.onrender.com/api/articles/${id}/comments`)
}

export default fetchComments