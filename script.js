let inputWord = document.getElementById("text-input");
const btn = document.getElementById('check-btn');
const showResult =document.getElementById('result');

const checkPali = input =>{
  if(input === ""){
    alert("Please input a value");
    return;
  }
  const inputLower = input.toLowerCase().replace(/[^a-z0-9]/g,"");
  let resultDisplay = `${input} ${inputLower === inputLower.split('').reverse().join('')? 'is' : 'is not'} a palindrome.`
  showResult.textContent = resultDisplay;
}


btn.addEventListener('click', () => {
  checkPali(inputWord.value);
  inputWord.value = "";
})

inputWord.addEventListener('keydown',e=>{
  if(e.key === 'Enter'){
    checkPali(inputWord.value);
    inputWord.value ="";
  }
})