import './style.css'
import lax from 'lax.js'


//Array van foto's
/*
fetch(`https://picsum.photos/v2/list`).then((response) => {

  return response.json();

}).then((responseJson) => {

  for (let i = 0; i < responseJson.length; i++) {
    console.log(responseJson[i]);
    injectInfo(responseJson[i]);
  } 

});

//fotos in tabel
function injectInfo(responseJson) {

  var table = document.getElementById('myTable');

  for(var r = 1; r < 3; r++){
    var row = table.insertRow(r);
  }
  
  for (var c = 0; c < 2; c++) {
    var cell = row.insertCell(c);
    cell.id = `cellid_${responseJson.id}_${c}`;
  }

  document.querySelector(`#cellid_${responseJson.id}_0`).innerHTML = responseJson.id;

  var avatar = document.createElement('img');
  var src = document.querySelector(`#cellid_${responseJson.id}_1`);
  avatar.src = responseJson.download_url;
  src.appendChild(avatar);

}*/


const inp = document.getElementById("picsumSize");
const img = document.getElementById('picsum');
const img2 = document.getElementById('picsum2');
const img3 = document.getElementById('picsum3');
const img4 = document.getElementById('picsum4');

catchImage()
  .then(response => {
    console.log('yey');
  })
  .catch(error => {
    console.log('error');
    console.error(error);
});

// 320/320 size of pics in pixels

async function catchImage() {
  let size = inp.value;
  if (size == "") {
    size = 320;
  }
  const response = await fetch('https://picsum.photos/'+size);
  let blob = await response.blob();
  img.src = URL.createObjectURL(blob);
  img2.src = URL.createObjectURL(blob);
  img3.src = URL.createObjectURL(blob);
  img4.src = URL.createObjectURL(blob);
}

 inp.addEventListener("keyup", (e)=>{
    if (e.keyCode ) {
      catchImage();
    }
 });



