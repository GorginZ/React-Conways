import CryptoJS from "crypto-js";

const test = () => {
  // const encryptWithAES = (text) => {
  //   const passphrase = "123";
  //   return CryptoJS.AES.encrypt(text, passphrase).toString();
  // };

  // const decryptWithAES = (ciphertext) => {
  //   const passphrase = "123";
  //   const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  //   const originalText = bytes.toString(CryptoJS.enc.Utf8);
  //   return originalText;
  // };

  // let cryp = encryptWithAES("1");
  // console.log(cryp);
  // cryp = decryptWithAES(cryp);
  // console.log(cryp);
  // let cryp2 = encryptWithAES("1");
  // console.log(cryp2);
  // cryp2 = decryptWithAES(cryp2);
  // console.log(cryp2);
  fetch("https://pixabay.com/api/?key=17401644-d52a5734cec03a9bb1803044d&q=yellow+flowers&image_type=photo")
    .then((res)=>{console.log(res)})

  return <img></img>
};

export default test;
