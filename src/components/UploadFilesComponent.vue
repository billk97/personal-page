<template>
    <div class="input-container">
        <h1 class="container">Image Upload Vue.js</h1>
        <div>
            {{ folder }}
            <form>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    @change="(payload) => handleImageUpload(payload)"
                />
            </form>
        </div>
        <div class="image-containers">
            <h2>Selected images</h2>
            <div class="images-list">
                <div
                    v-for="(src, index) in imageSrc"
                    :key="index"
                >
                    <div class="image-container">
                        <img :src="src" class="image-style" />
                    </div>
                </div>
            </div>
        </div>
        <b-button variant="success" @click="uploadImages()">Upload</b-button>
    </div>
</template>
<script>
    import fileApi from '@/api/file-api'
    export default {
        name: "UploadFilesComponent",
        props: {
            folder: {
                type: String,
                default: "test"
            }
        },
        data() {
            return {
                imageSrc : [],
                images: []
            }
        },
        methods: {
            handleImageUpload(payload) {
                console.log(payload)
                let files = payload.target.files
                console.log(files.length)
                if (files.length <= 0) {
                    return
                }
                for (let i = 0; i < files.length; i++) {
                    const src = URL.createObjectURL(files[i])   
                    this.imageSrc.push(src)
                    this.images.push(files[i])
                }
            },
            uploadImages() {
                for (let i = 0; i < this.images.length; i++) {
                    const formData = new FormData()
                    formData.append("file", this.images[i])
                    formData.append("folder-name", this.folder)
                    fileApi.uploadImage(formData)
                }
                this.imageSrc = []
                this.images = []
            }
        }
    }
</script>
<style scoped>
    form {
        border: 1px dotted white;
        display: flex;
        flex-direction: column; 
        
    }
    .input-container {
        background-color: #5e6165cf;
        color: white;
        border: 2px dashed white;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
    }

    input::file-selector-button {
        color: transparent;
    }

    form input {
        border: none;
        outline: none;
    }

    .images-list {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .image-style {
        max-width: 100px;
    }
    
</style>