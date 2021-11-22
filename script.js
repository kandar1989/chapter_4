
function fungsiku(pilihan_user){
  
  var hasil = "";
  var pilihan_comp1 = Math.floor(Math.random() * 3); 
  var pilihan_comp = pilihan_comp1 + 1;
  var comp = "";
  document.getElementById("scissors").style.backgroundColor = ""; 
  document.getElementById("rock").style.backgroundColor = ""; 
  document.getElementById("paper").style.backgroundColor = ""; 

  switch(pilihan_comp){
    case 1:
      comp = 'Gunting';
      let doc = document.getElementById("scissors");
      doc.style.backgroundColor = "yellow"; 
      if (pilihan_user == 'kertas'){
        hasil = "Anda Kalah";
      }else if (pilihan_user == 'batu'){
        hasil = "Selamat Anda Menang";
      }else{
        hasil = "Seri";
      }
      break;
      
    case 2:
      comp = 'Batu';
      let doc2 = document.getElementById("rock");
      doc2.style.backgroundColor = "yellow"; 
      if (pilihan_user == 'kertas'){
        hasil = "Selamat Anda Menang";
      }else if (pilihan_user == 'gunting'){
        hasil = "Anda Kalah";
      }else{
        hasil = "Seri";
      }
      break;
      
    case 3:
      comp = 'Kertas';
      let doc3 = document.getElementById("paper");
      doc3.style.backgroundColor = "yellow"; 
      if (pilihan_user == 'batu'){
        hasil = "Anda kalah";
      }else if (pilihan_user == 'gunting'){
        hasil = "Selamat Anda Menang";
      }else{
        hasil = "Seri";
      }
      break;
      
    default:
      hasil = "Ada Kesalahan";
      break;
         }
  console.log(pilihan_user);
  console.log(pilihan_comp1);
  console.log(pilihan_comp);       
  console.log(comp);
  console.log(hasil);
  
  document.getElementById('hasil').innerHTML = hasil;
  var html_hasil = document.getElementById('hasil');
  
  if (hasil == 'Anda kalah'){
    html_hasil.style.backgroundColor = "red";
    html_hasil.style.borderRadius = "10%";

  }else if(hasil == 'Selamat Anda Menang'){
    html_hasil.style.backgroundColor = 'blue';
    html_hasil.style.borderRadius = "10%";
    
  }else{
    html_hasil.style.backgroundColor = "yellow";
    html_hasil.style.borderRadius = "10%";
   
  }
  
  document.getElementById('hilang').style.display = "block";
  document.getElementById('user1').innerHTML = pilihan_user;
  document.getElementById('comp').innerHTML = comp;
  
  document.querySelector("#restart").addEventListener("click", function () {
    window.location.reload();
    return false;
  });
}
