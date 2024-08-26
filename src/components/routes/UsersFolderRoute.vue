<template>
    <div class="mt-3">
        <h1>My Shared files</h1>
        <b-container fluid="lg" class="folder-frame">
            <div v-for="(item, index) in folders" :key="index">
                <button class="simple-folder" @click="gotToFolder(item)">
                    {{ item }}
                </button>
            </div>
        </b-container>
    </div>
</template>

<script>
    import fileApi from '@/api/file-api'

    export default {
        name: "File",
        data() {
            return {
                folders: []
            }
        },
        created() {this.getFolders()},
        methods: {
            getFolders() {
                fileApi.getFolders().then( d => {
                    this.folders = d
                })
            },
            gotToFolder(folderName) {
                console.log(folderName)
                this.$router.push(`/utils/files/folder/${folderName}`)
            }
        }
    }
</script>

<style scoped>
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
    .folder-frame {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

</style>
