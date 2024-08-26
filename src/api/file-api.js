import axios from 'axios'

const baseUrl = 'http://localhost:5000/api/'

export default {

    getBaseUrl() {
        return baseUrl
    },
    getFolders() {
        return axios.get(baseUrl + 'file/folders', { headers: {
            'application-user': 'billk97'}
        })
            .then(r => {
                return r.data
            })
    },
    getFilesInFolder(fileName) {
        return axios.get(baseUrl + `file/folder/${fileName}?page=0&size=15`, { headers: {
            'application-user': 'billk97'}
        })
            .then(r => {
                return r.data
            })
    }
}