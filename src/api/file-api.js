import axios from 'axios'

const baseUrl = 'http://localhost:5500/api/'

export default {

    uploadImage(formData) {
        return axios.post(baseUrl + "file", formData, {headers: {'application-user': 'billk97', 'Content-Type': 'multipart/form-data'}})
    },
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