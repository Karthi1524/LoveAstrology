let loverFlames;
let name1;
let name2;
function cal(){
   name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, "");
   name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, "");
  // Create an array of all the characters in the first name
  if(name1=="" && name2=="")
  {
    document.getElementById("result").innerHTML="Enter Both Name";
  }
  else if (name1=="") {
    document.getElementById("result").innerHTML="Enter Male Name";
  }
  else if(name2=="")
  {
    document.getElementById("result").innerHTML="Enter Female Name";
  }
  else{
  loveFlames = eva(name1, name2);
  //console.log(loveFlames);
  document.getElementById("result").innerHTML=loveFlames;
  }


}
function eva(name1,name2){
  let characters = name1.split('');

  // Iterate through each character in the second name
  for (let i = 0; i < name2.length; i++) {
    let character = name2[i];

    // Check if the character exists in the array
    let index = characters.indexOf(character);
    if (index !== -1) {
      // Remove the character from the array
      characters.splice(index, 1);
    }
  }
  let count = characters.length;

  // Define the "FLAMES" sequence
  const flames = ['Friends 👨‍❤️‍👨', 'Lovers 👩‍❤️‍👨', 'Admirers 🫂', 'Married 👨‍👩‍👦', 'Enemies 🤼', 'Siblings 👫'];

  // Calculate the love flames result
  let result = flames[count % 6];

  // Return the result
  return result;
}

reset=()=>
{
  document.getElementById("result").innerHTML="";
  document.getElementById("name1").value="";
  document.getElementById("name2").value="";
}