<template>
    <div class="mt-3">
        <div style="display: flex; flex-direction: row; justify-content: space-between; margin: 10px;">
            <h1>Folder: {{ this.$route.params.name }}</h1>
            <b-button variant="success" @click="uploadImage">Upload Image</b-button>
        </div>
        <upload-files-component :folder="this.$route.params.name" v-if="showUploadComponent">
        </upload-files-component>
        <b-container fluid="lg" class="image-frame">
            <div v-for="(item, index) in folders" :key="index">
                <img :src="getFullUrl(item.s3FileThumNailPath)" class="image-box">
            </div>
        </b-container>
    </div>
</template>

<script>
    import fileApi from '@/api/file-api'
    import UploadFilesComponent from '@/components/UploadFilesComponent.vue'
    
    export default {
        name: "Files",
        components: {UploadFilesComponent},
        data() {
            return {
                folders: [],
                showUploadComponent: false,
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
            },
            uploadImage() {
                this.showUploadComponent = ! this.showUploadComponent
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
    .image-box {
        border: 2px solid black;
        max-width: 300px;
        margin: 5px;
    }

</style>
