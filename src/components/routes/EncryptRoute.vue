<template>
    <div class="mt-3">
        <h1>Encrypt/Decrypt message</h1>
        <b-container fluid="lg">
            <b-row class="mt-5">
                <b-col class="" sm="12" md="6">
                    <b-form-textarea
                        id="plain-text"
                        v-model="message"
                        placeholder="Enter the message to encrypt"
                        no-resize
                        :state="message.length > 0"
                    />
                </b-col>
                <b-col class="" sm="12" md="6">
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
                    <b-button variant="success" @click="selectAlgorithm(true)">Encrypt</b-button>
                </b-col>
                <b-col>
                    <b-button variant="info" @click="selectAlgorithm(false)">Decrypt</b-button>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <h2 class="w-100">Base64 encoded cypher text</h2>
            </b-row>
            <b-row class="mx-3">
                <div class="text-center w-100 cypher-text" :class="{hide: finalText}">{{ finalText }}</div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import encryption from '@/utils/encryption'
    import decryption from '@/utils/decryption'

    export default {
        name: "Encrypt",
        data() {
            return {
                message: '',
                encryptionKey: '',
                encryptionAlgorithm: '',
                finalText: '',
                supportedAlgorithms: [ { value: '', text: 'Select an encryption algorithm' }, 'AES', 'RC4']
            }
        },
        methods: {
            selectAlgorithm(shouldEncrypt) {
                if( this.encryptionAlgorithm === 'AES') {
                    this.aes(shouldEncrypt)
                }
                if( this.encryptionAlgorithm === 'RC4') {
                    this.rc4(shouldEncrypt)
                }
            },
            aes(shouldEncrypt) {
                if (shouldEncrypt) {
                    this.finalText = encryption.aesEncrypt(this.message, this.encryptionKey)
                    return
                }
                this.finalText = decryption.aesDecrypt(this.message, this.encryptionKey)

            },
            rc4(shouldEncrypt) {
                if (shouldEncrypt) {
                    this.finalText = encryption.rc4Encrypt(this.message, this.encryptionKey)
                    return
                }
                this.finalText = decryption.rc4Decrypt(this.message, this.encryptionKey)
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
