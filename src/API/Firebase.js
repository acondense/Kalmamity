import * as firebase from "firebase";

const KalmamityDB = firebase.initializeApp({
    apiKey: "AIzaSyDJnII2ZL6yHZtP2M56JP6xMLp7SFgP0Cg",
    authDomain: "kalmamity-testapp.firebaseapp.com",
    databaseURL: "https://kalmamity-testapp.firebaseio.com",
    storageBucket: "kalmamity-testapp.appspot.com",
    messagingSenderId: "206119760779"
});

// const KalmamityDB2 = firebase.initializeApp({
//     apiKey: "AIzaSyCsFMAcdQC4_gO8E_842P7iLCIqfQX6Pmc",
//     authDomain: "kalmamity-965e8.firebaseapp.com",
//     databaseURL: "https://kalmamity-965e8.firebaseio.com",
//     storageBucket: "kalmamity-965e8.appspot.com",
//     messagingSenderId: "392680581532"
// })

module.exports.KalmamityDB = KalmamityDB.database();
// module.exports.KalmamityDB2 = KalmamityDB2.database();