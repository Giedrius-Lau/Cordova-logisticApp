
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



function atvykau(clicked) {
    firebase.database().ref().set({
        krovinioStatusas: 'Atvykau į pasikrovimo vietą'
    });
    $(clicked).addClass('hidden');
    $("#1").removeClass('hidden');
}


function pradejauKrautis(clicked) {
    firebase.database().ref().update({
        krovinioStatusas2: 'Pradejau krautis'
    });
    $(clicked).addClass('hidden');
    $("#2").removeClass('hidden');

}

function isvykstuIsPasikrovimo(clicked) {
    firebase.database().ref().update({
        krovinioStatusas3: 'Išvykau iš pasikrovimo vietos'
    });
    $(clicked).addClass('hidden');
    $("#3").removeClass('hidden');

}

function atvykau2(clicked) {
    firebase.database().ref().update({
        krovinioStatusas4: 'Atvykau į išsikrovimo vietą'
    });
    $(clicked).addClass('hidden');
    $("#4").removeClass('hidden');

}


function pradejauKrautis2(clicked) {
    firebase.database().ref().update({
        krovinioStatusas5: 'Pradejau išsikrovimą'
    });
    $(clicked).addClass('hidden');
    $("#5").removeClass('hidden');

}

function isvykstu(clicked) {
    firebase.database().ref().update({
        krovinioStatusas6: 'Išvykau iš išsikrovimo vietos'
    });
     $(clicked).addClass('hidden');
    $("#camera").removeClass('hidden');
}



firebase.database().ref().once('value').then((snapshot) => {
    console.log('Got entire database', snapshot.val());
}, (e) => {
    console.log('Unable to fetch value', e);
    });

firebase.on('value', (snapshot) => {
    console.log('Got value', snapshot.val());
});

firebaseRef.update({ krovinioStatusas3: 123123123 });