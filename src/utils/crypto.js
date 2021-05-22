import CryptoJS from 'crypto-js'
import sha256 from 'crypto-js/sha256'

export default{
    aesEncrypt(plainText, encryptionKey) {
        return CryptoJS.AES.encrypt(plainText,encryptionKey).toString()
    },
    rc4Encrypt(plainText, encryptionKey) {
        return CryptoJS.RC4.encrypt(plainText,encryptionKey).toString()
    },
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
    },
    sha3(plainText){
        return CryptoJS.SHA3(plainText).toString()
    },
    sha512(plainText){
        return CryptoJS.SHA512(plainText).toString()
    },
    sha256(plainText){
        return sha256(plainText).toString()
    },
    sha1(plainText){
        return CryptoJS.SHA1(plainText).toString()
    },
    md5(plainText){
        return CryptoJS.MD5(plainText).toString()
    },
    ripemd160(plainText){
        return CryptoJS.RIPEMD160(plainText).toString()
    }

}
