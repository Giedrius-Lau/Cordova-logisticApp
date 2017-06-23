
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
var notesRef = firebaseRef.child('statusas');
//var newNoteRef = notesRef.push();


//Get elements
const preObject = document.getElementById('object');
const ulList = document.getElementById('list');


//Create references

const dbRefObject = firebase.database().ref().child('statusas');
const dbRefList = dbRefObject.child('status');
//const dbRefListTime = dbRefObject.child('time');

//Sync object changes
dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
});


//Sync list changes
dbRefList.on('child_added', snap => console.log(snap.val()));









function atvykau(clicked) {
    notesRef.push({
        status: 'Atvykau',
        time: Date()
    });
    $(clicked).addClass('hidden');
    $("#1").removeClass('hidden');
}


function pradejauKrautis(clicked) {
    notesRef.push({
        status: 'Pradėjau krautis',
        time: Date()
    });
    $(clicked).addClass('hidden');
    $("#2").removeClass('hidden');

}

function isvykstuIsPasikrovimo(clicked) {
    
    notesRef.push({
        status: 'Išvykau iš pasikrovimo vietos',
        time: Date()
    });
    $(clicked).addClass('hidden');
    $("#3").removeClass('hidden');

}

function atvykau2(clicked) {
  
    notesRef.push({
        status: 'Atvykau į išsikrovimo vietą',
        time: Date()
    });
    $(clicked).addClass('hidden');
    $("#4").removeClass('hidden');

}


function pradejauKrautis2(clicked) {
 
    notesRef.push({
        status: 'Pradejau išsikrovimą',
        time: Date()
    });
    $(clicked).addClass('hidden');
    $("#5").removeClass('hidden');

}

function isvykstu(clicked) {
 
    notesRef.push({
        status: 'Išvykau iš išsikrovimo vietos',
        time: Date()
    });
     $(clicked).addClass('hidden');
    $("#camera").removeClass('hidden');
}



//firebaseRef.on('value', (snapshot) => {
//    //document.getElementById('chatas') = "<li>" + snapshot.val() + "</li>";
//    $("#chatas").append("<li>" + snapshot.val() + "</li>");
//    console.log(snapshot.val());
//});