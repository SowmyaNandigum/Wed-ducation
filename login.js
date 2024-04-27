// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDoHCMH0vnbM4zfUoPWj6u1ABz410LhkfY",
    authDomain: "savishkaar-4f18d.firebaseapp.com",
    projectId: "savishkaar-4f18d",
    storageBucket: "savishkaar-4f18d.appspot.com",
    messagingSenderId: "59226786877",
    appId: "1:59226786877:web:de36beb87555710fb76e54"
});


// const firebaseConfig = {
//     apiKey: "AIzaSyA1Sks51Tz1vQqeGyORYEg-mkm1fBEjXdM",
//     authDomain: "upheld-momentum-404407.firebaseapp.com",
//     projectId: "upheld-momentum-404407",
//     storageBucket: "upheld-momentum-404407.appspot.com",
//     messagingSenderId: "487666200835",
//     appId: "1:487666200835:web:dc505b882649dedacbf936",
//     measurementId: "G-4S28N7L483"
//   };


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            console.log("You are signed in ",result)
            window.location.href="select_course.html"
            
        })
        .catch((error) => {
            console.log(error.code);
           alert("Wrong password")
        });
}


const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // Signed in with Google successfully
            console.log("You are Signed In with Google:", result);
            document.write("You are Signed In with Google");
        })
        .catch((error) => {
            console.error("Google Sign In Error:", error);
        });
}