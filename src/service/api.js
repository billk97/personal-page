import axios from 'axios'

export default {

    fetchArticles() {
        return axios.get('https://6181a93c84c2020017d89b65.mockapi.io/articles').then(resp => {
            return resp.data
        })
    }
}
