// alert("welcome")
let n=Math.random()*6;
let p=Math.random()*6;
let randomnumber=Math.floor(n)+1;
let randomnumber2=Math.floor(p)+1;
// console.log(randomnumber);
let j="./images/dice"+randomnumber+".png";
let k="./images/dice"+randomnumber2+".png";
document.querySelector("img").setAttribute("src",j);
document.querySelector("img.img2").setAttribute("src",k);
if(j==k){
    document.querySelector("h1").innerHTML="🚩Draw🚩";
}
else if (j>k){
    document.querySelector("h1").innerHTML="🚩Player1 Wins";
}else{
    document.querySelector("h1").innerHTML="🚩Player2 wins";
}