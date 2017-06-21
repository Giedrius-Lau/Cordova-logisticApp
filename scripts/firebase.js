
var config = {
    apiKey: "AIzaSyAhFnJqAhe-AO9YvsXPF3WH9xIZ2uITy9s",
    authDomain: "logisticsapp-d0456.firebaseapp.com",
    databaseURL: "https://logisticsapp-d0456.firebaseio.com",
    projectId: "logisticsapp-d0456",
    storageBucket: "logisticsapp-d0456.appspot.com",
    messagingSenderId: "307825676143"
};
firebase.initializeApp(config);





function atvykau() {
    firebase.database().ref().set({
        Krovinio statusas: 'Atvykau'
    });
}

function pradejauKrautis() {
    firebase.database().ref().set({
        Krovinio statusas: 'Pradejau krautis'
    });
}