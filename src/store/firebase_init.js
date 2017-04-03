/*jshint esversion: 6 */
/*jshint -W030 */
import firebase from 'firebase';

const db = firebase.initializeApp({
    apiKey: "AIzaSyDYmyfh75QPwG8ddlg9OuabPK1Ue-vIDEQ",
    authDomain: "hoctot2017.firebaseapp.com",
    databaseURL: "https://hoctot2017.firebaseio.com",
}).database();


const userRef = db.ref('users');
//const dataRef = db.ref('cauhoi');


export { db, userRef, dataRef };
