import * as firebase from "firebase";


const KalmamityDB = firebase.initializeApp({
    apiKey: "AIzaSyDJnII2ZL6yHZtP2M56JP6xMLp7SFgP0Cg",
    authDomain: "kalmamity-testapp.firebaseapp.com",
    databaseURL: "https://kalmamity-testapp.firebaseio.com",
    storageBucket: "kalmamity-testapp.appspot.com",
    messagingSenderId: "206119760779"
});

module.exports.KalmamityDB = KalmamityDB.database();