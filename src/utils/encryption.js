import CryptoJS from 'crypto-js'

export default{
    aesEncrypt(plainText, encryptionKey) {
        return CryptoJS.AES.encrypt(plainText,encryptionKey).toString()
    },
    rc4Encrypt(plainText, encryptionKey) {
        return CryptoJS.RC4.encrypt(plainText,encryptionKey).toString()
    }
}
