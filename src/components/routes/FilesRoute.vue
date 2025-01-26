<template>
    <div class="mt-3">
        <h1>Folder: {{ this.$route.params.name }}</h1>
        <b-container fluid="lg" class="image-frame">
            <div v-for="(item, index) in folders" :key="index">
                <img :src="getFullUrl(item.s3FilePath)" style="max-width: 300px;">
            </div>
        </b-container>
    </div>
</template>

<script>
    import fileApi from '@/api/file-api'

    export default {
        name: "Files",
        data() {
            return {
                folders: []
            }
        },
        created() {this.getFiles()},
        methods: {
            getFiles() {
                fileApi.getFilesInFolder(this.$route.params.name).then( d => {
                    console.log(d)
                    this.folders = d.content
                })
            },
            getFullUrl(fileName) {
                console.log(`${fileApi.getBaseUrl()}file?file-name=${fileName}`)
                return `${fileApi.getBaseUrl()}file?file-name=${fileName}`
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
    .image-frame {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

</style>
