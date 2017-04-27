import firebase from 'firebase';

const db = firebase.initializeApp({
    apiKey: "AIzaSyDYmyfh75QPwG8ddlg9OuabPK1Ue-vIDEQ",
    authDomain: "hoctot2017.firebaseapp.com",
    databaseURL: "https://hoctot2017.firebaseio.com",
}).database();



const userRef = db.ref('users');
//const dataRef = db.ref('cauhoi');

const burst = new mojs.Burst({
    radius: {
        15: 90
    },
    className: 'brust',
    count: 15,
    scale: 2,
    duration: 200,
    onComplete() {
        //console.log('Done');
    },
    children: {
        strokeWidth: 15,
        // property map - maps over children with mod function
        shape: ['circle', 'polygon'],
        // property map - maps over children with mod function
        fill: ['#333', 'magenta', 'purple', 'yellow', 'red', 'cyan', 'orange'],
        angle: {
            0: 180
        },
    }
});
burst.el.style.zIndex = 99999;
export { db, userRef, burst };
