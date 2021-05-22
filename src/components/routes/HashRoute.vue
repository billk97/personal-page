<template>
    <div class="mt-3">
        <h1>Hash Debugger</h1>
        <b-container fluid="lg">
            <b-row class="mt-5">
                <b-form-textarea
                    id="plain-text"
                    v-model="plainText"
                    placeholder="Enter the message to encrypt"
                    no-resize
                    :state="plainText.length > 0"
                />
                <hash-component :hash="{func: 'SHA 3: ', value: sha3()}" />
                <hash-component :hash="{func: 'SHA 512: ', value: sha512()}" />
                <hash-component :hash="{func: 'SHA 256: ', value: sha256()}" />
                <hash-component :hash="{func: 'SHA 1: ', value: sha1()}" />
                <hash-component :hash="{func: 'MD5: ', value: md5()}" />
                <hash-component :hash="{func: 'ripemd160 : ', value: ripemd160()}" />
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import crypto from '@/utils/crypto'
    import HashComponent from '@/components/HashComponent'
    export default {
        name: "HashRoute",
        components: {HashComponent},
        data() {
            return {
                plainText: ''
            }
        },
        methods: {
            sha3() {
                return crypto.sha3(this.plainText)
            },
            sha512() {
                return crypto.sha512(this.plainText)
            },
            sha256() {
                return crypto.sha256(this.plainText)
            },
            sha1() {
                return crypto.sha1(this.plainText)
            },
            md5() {
                return crypto.md5(this.plainText)
            },
            ripemd160() {
                return crypto.ripemd160(this.plainText)
            }

        }
    }
</script>

<style scoped>

</style>
