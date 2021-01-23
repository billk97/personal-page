<template>
    <div>
        <h1>Encrypt/Decrypt message</h1>
        <b-container fluid="lg">
            <b-row class="mt-5">
                <b-col class="">
                    <b-form-textarea
                        id="plain-text"
                        v-model="plainText"
                        placeholder="Enter the message to encrypt"
                        no-resize
                        :state="plainText.length > 0"
                    />
                </b-col>
                <b-col class="">
                    <b-form-textarea
                        id="encryption-key"
                        v-model="encryptionKey"
                        placeholder="Enter The encryption key"
                        :state="encryptionKey.length > 0"
                    />
                </b-col>
            </b-row>
            <b-row>
                <b-form-select
                    v-model="encryptionAlgorithm"
                    :options="supportedAlgorithms"
                    class="mx-3 mt-3"
                />
            </b-row>
            <b-row class="mt-3">
                <b-col>
                    <b-button variant="success" @click="selectAlgorithm">Encrypt</b-button>
                </b-col>
                <!--
                <b-col>
                    <b-button variant="info" @click="aesEncrypt">Decrypt</b-button>
                </b-col>
                -->
            </b-row>
            <b-row class="mt-3">
                <h2 class="w-100">Base64 encoded cypher text</h2>
            </b-row>
            <b-row class="mx-3">
                <div class="text-center w-100 cypher-text" :class="{hide: cypherText}">{{ cypherText }}</div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import encryption from '@/utils/encryption'

    export default {
        name: "Encrypt",
        data() {
            return {
                plainText: '',
                encryptionKey: '',
                encryptionAlgorithm: '',
                cypherText: '',
                supportedAlgorithms: [ { value: '', text: 'Select an encryption algorithm' }, 'AES', 'RC4']
            }
        },
        methods: {
            selectAlgorithm() {
                if( this.encryptionAlgorithm === 'AES') {
                    this.aesEncrypt()
                }
                if( this.encryptionAlgorithm === 'RC4') {
                    this.rc4Encrypt()
                }
            },
            aesEncrypt() {
                this.cypherText = encryption.aesEncrypt(this.plainText, this.encryptionKey)

            },
            rc4Encrypt() {
                this.cypherText = encryption.rc4Encrypt(this.plainText, this.encryptionKey)
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

</style>
