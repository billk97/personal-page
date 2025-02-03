import axios from 'axios'

const baseUrl = 'https://api.konstantinou.dev/api/'

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
    getFilesInFolder(fileName, page, size) {
        return axios.get(baseUrl + `file/folder/${fileName}?page=${page}&size=${size}`, { headers: {
            'application-user': 'billk97'}
        })
            .then(r => {
                return r.data
            })
    }
}