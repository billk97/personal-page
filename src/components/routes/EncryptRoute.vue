<template>
    <div class="mt-3">
        <h2 class="text-center">Encrypt/Decrypt message</h2>
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
                <b-col sm="12" md="6" class="mt-2 mt-md-0">
                    <b-form-textarea
                        id="encryption-key"
                        v-model="encryptionKey"
                        placeholder="Enter The encryption key"
                        no-resize
                        :state="encryptionKey.length > 0"
                    />
                </b-col>
            </b-row>
            <b-row>
                <b-col class="d-flex justify-content-center">
                    <b-form-select
                        v-model="encryptionAlgorithm"
                        :options="supportedAlgorithms"
                        class="mt-3"
                    />
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col sm="6" class="d-flex justify-content-center">
                    <b-button variant="success" size="lg" @click="selectAlgorithm(true)">Encrypt</b-button>
                </b-col>
                <b-col sm="6" class="mt-2 mt-md-0 d-flex justify-content-center">
                    <b-button variant="info" size="lg" @click="selectAlgorithm(false)">Decrypt</b-button>
                </b-col>
            </b-row>
            <b-row class="mt-4 mt-md-5">
                <b-col sm="12" md="4">
                    <h4>Base64 encoded cypher text:</h4>
                </b-col>
                <b-col sm="12" md="8">
                    <div class="text-center cypher-text">{{ finalText }}
                        <b-button
                            v-if="finalText"
                            v-clipboard:copy="finalText"
                            v-clipboard:success="onCopy"
                            size="sm"
                            class="copy-btn"
                            type="button"
                        >
                            Copy
                        </b-button>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import crypto from '@/utils/crypto'

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
                    this.finalText = crypto.aesEncrypt(this.message, this.encryptionKey)
                    return
                }
                this.finalText = crypto.aesDecrypt(this.message, this.encryptionKey)

            },
            rc4(shouldEncrypt) {
                if (shouldEncrypt) {
                    this.finalText = crypto.rc4Encrypt(this.message, this.encryptionKey)
                    return
                }
                this.finalText = crypto.rc4Decrypt(this.message, this.encryptionKey)
            },
            onCopy() {
                this.$bvToast.toast(`Encoded Text Copied`, {
                    variant: 'success',
                    appendToast: false,
                    noCloseButton: true,
                    solid: true,
                    autoHideDelay: 3000
                })
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
        font-size: 1.1rem;
        border-radius: 0.25rem;
        text-align: justify;
        word-wrap: break-word;
        background-color: #d4ecda;
        padding: 1rem 1rem 3rem;
        position: relative;
    }
    .copy-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: var(--secondary-clr);
        margin: 0.5rem;
    }

</style>
