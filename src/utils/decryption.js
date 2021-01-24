import CryptoJS from 'crypto-js'

export default {
    aesDecrypt(cypherText, key) {
        let plainText = CryptoJS.AES.decrypt(cypherText, key)
        plainText = CryptoJS.enc.Base64.stringify(plainText)
        plainText = atob(plainText)
        return plainText
    },
    rc4Decrypt(cypherText, key) {
        let plainText = CryptoJS.RC4.decrypt(cypherText, key)
        plainText = CryptoJS.enc.Base64.stringify(plainText)
        plainText = atob(plainText)
        return plainText
    }
}
