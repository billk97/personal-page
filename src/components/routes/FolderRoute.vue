<template>
    <div class="mt-3">
        <h1>Folder</h1>
        <b-container fluid="lg">
            <ul style="list-style-type: none;">
                <li v-for="(item, index) in folders" :key="index">
                    <img :src="getFullUrl(item.s3FilePath)" style="max-width: 300px;">
                </li>
            </ul>
        </b-container>
    </div>
</template>

<script>
    import fileApi from '@/api/file-api'

    export default {
        name: "Folder",
        data() {
            return {
                folders: []
            }
        },
        created() {this.getFiles()},
        methods: {
            getFiles() {
                fileApi.getFilesInFolder("vacations").then( d => {
                    this.folders = d
                })
            },
            getFullUrl(fileName) {
                return "http://localhost:5000/api/file?file-name=" + fileName
            }
        }
    }
</script>

<style scoped>
    .border-help {
        border: 1px solid red;
        text-align: center;
    }
    .cypher-text {
        border-radius: 10px;
        word-break: break-all;
        background-color: #d4ecda;
    }
    .hide {
        border-radius: 10px;
    }
    .simple-folder {
        width: 150px;
        height: 100px;
        background-color: #f4b400; /* Folder color */
        position: relative;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin: 20px;
        color: #ffffff;
        font-size: xx-large;
    }

    .simple-folder::before {
        content: '';
        width: 60%;
        height: 20px;
        background-color: #f4b400;
        position: absolute;
        top: -10px;
        left: 10px;
        border-radius: 5px 5px 0 0;
    
    }

</style>
