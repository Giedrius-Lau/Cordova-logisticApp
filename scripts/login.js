
    var config = {
        apiKey: "AIzaSyAhFnJqAhe-AO9YvsXPF3WH9xIZ2uITy9s",
        authDomain: "logisticsapp-d0456.firebaseapp.com",
        databaseURL: "https://logisticsapp-d0456.firebaseio.com",
        projectId: "logisticsapp-d0456",
        storageBucket: "logisticsapp-d0456.appspot.com",
        messagingSenderId: "307825676143"
    };
    firebase.initializeApp(config);


    //Get Elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    //Add login
    btnLogin.addEventListener('click', e => {
        //Get email and password fields
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    //Add signup event
    btnSignUp.addEventListener('click', e => {
        //Get email and password fields
        // TODO: authentication 
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    //Add a real time listener
    firebase.auth().onAuthStateChanged(firebase => {
        if (firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
        }
    })