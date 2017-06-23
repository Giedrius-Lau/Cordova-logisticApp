
var config = {
    apiKey: "AIzaSyAhFnJqAhe-AO9YvsXPF3WH9xIZ2uITy9s",
    authDomain: "logisticsapp-d0456.firebaseapp.com",
    databaseURL: "https://logisticsapp-d0456.firebaseio.com",
    projectId: "logisticsapp-d0456",
    storageBucket: "logisticsapp-d0456.appspot.com",
    messagingSenderId: "307825676143"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

var d = new Date();

function atvykau(clicked) {
    firebase.database().ref().set({
        id: 1,
        krovinioStatusas: 'Atvykau į pasikrovimo vietą',
        laikas: d
    });
    $(clicked).addClass('hidden');
    $("#1").removeClass('hidden');
}


function pradejauKrautis(clicked) {
    firebase.database().ref().update({
        id: 2,
        krovinioStatusas: 'Pradejau krautis',
        laikas2: d
    });
    $(clicked).addClass('hidden');
    $("#2").removeClass('hidden');

}

function isvykstuIsPasikrovimo(clicked) {
    firebase.database().ref().update({
        id: 3,
        krovinioStatusas: 'Išvykau iš pasikrovimo vietos',
        laikas3: d
    });
    $(clicked).addClass('hidden');
    $("#3").removeClass('hidden');

}

function atvykau2(clicked) {
    firebase.database().ref().set({
        id: 4,
        krovinioStatusas: 'Atvykau į išsikrovimo vietą',
        laikas4: d
    });
    $(clicked).addClass('hidden');
    $("#4").removeClass('hidden');

}


function pradejauKrautis2(clicked) {
    firebase.database().ref().set({
        id: 5,
        krovinioStatusas: 'Pradejau išsikrovimą',
        laikas5: d
    });
    $(clicked).addClass('hidden');
    $("#5").removeClass('hidden');

}

function isvykstu(clicked) {
    firebase.database().ref().set({
        id: 6,
        krovinioStatusas: 'Išvykau iš išsikrovimo vietos',
        laikas6: d
    });
     $(clicked).addClass('hidden');
    $("#camera").removeClass('hidden');
}



firebaseRef.on('value', (snapshot) => {
    //document.getElementById('chatas') = "<li>" + snapshot.val() + "</li>";
    $("#chatas").append("<li>" + snapshot.val() + "</li>");
    console.log(snapshot.val());
});