import axios from 'axios'

export default {

    getFolders() {
        return axios.get('http://localhost:5000/api/file/folders', { headers: {
            'application-user': 'payzy'}
        })
            .then(r => {
                return r.data
            })
    },
    getFilesInFolder(fileName) {
        return axios.get(`http://localhost:5000/api/file/folder/${fileName}`, { headers: {
            'application-user': 'payzy'}
        })
            .then(r => {
                return r.data
            })
    }
}