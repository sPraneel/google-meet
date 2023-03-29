import firebase from "node_modules\firebase\app";
import database from "node_modules\firebase\database";
const firebaseConfig ={
    apiKey:'AIzaSyCD_o6DwOBzL0Ydde3Jl2-LyDQXiBSnaa4',
    databaseURL:'https://console.firebase.google.com/project/meet-f217a/database/meet-f217a-default-rtdb/data/~2F',
};

firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database.ref();

export const userName=  prompt("What is your user name ?");

const urlParams= new URLSearchParams(window.location.search);
const roomId= urlParams.get("Id");

if(roomId)
{
 dbRef=dbRef.child(roomId);
 
}
else{
    dbRef=dbRef.push();
    window.history.replaceState(null,"meet","?id="+dbRef.key);
}
export default dbRef;