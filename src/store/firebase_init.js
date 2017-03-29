/*jshint esversion: 6 */
/*jshint -W030 */

//Firebase config
import firebase from 'firebase';

const db = firebase.initializeApp({
    apiKey: "AIzaSyARtpjdBVtF9P-bhUVV8j9be5FDTAnO9Y8",
    authDomain: "tienganh-66025.firebaseapp.com",
    databaseURL: "https://tienganh-66025.firebaseio.com",
}).database();


const userRef = db.ref('user');

export { db, userRef };
