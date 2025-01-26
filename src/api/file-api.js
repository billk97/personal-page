import axios from 'axios'

const baseUrl = 'https://api.vsk.gr/api/'

export default {

    getBaseUrl() {
        return baseUrl
    },
    getFolders() {
        return axios.get(baseUrl + 'file/folder', { headers: {
            'application-user': 'admin'}
        })
            .then(r => {
                return r.data
            })
    },
    getFilesInFolder(fileName) {
        return axios.get(baseUrl + `file/folder/${fileName}?page=0&size=15`, { headers: {
            'application-user': 'admin'}
        })
            .then(r => {
                return r.data
            })
    }
}