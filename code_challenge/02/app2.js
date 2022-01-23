const randomNumber = document.querySelector('#randomNum');
const guessNumber = document.querySelector('#guessNum');
const btn = document.querySelector('button');
const msg = document.querySelector('#msg');
const winMsg = document.querySelector('#win');

btn.addEventListener('click', playGame)
function playGame(){
  let randomNumVal = randomNumber.value;
  let guessNumVal = guessNumber.value;
  if(randomNumVal < 0 ){
    alert('0이상을 입력하세요');
    return;
  }else{
    if(randomNumVal === guessNumVal){
      winMsg.textContent = "YOU WIN!"
    }else{
      winMsg.textContent = "YOU LOSE!"
    }
    msg.textContent = `YOU Choose : ${guessNumVal}, MACHINE Choose : ${randomNumVal}`;
  }
}

// ✅ 로직
// 1. 범위 정하기, 0 ~ 사용자가 최댓값 입력
// 2. guessInput과 maxNumber이 모두 입력이 없어 값이 비었을 땐 handleGuessSubmit함수를 빠져나옵니다.
// ** <button>태그를 클릭해 <input>태그의 내용을 submit(제출)하기 위해서는 <form>태그 내에 작성
// 3. Math.random -> 랜덤 숫자 생성 -> 0에서 1보다 작은 숫자를 생성
// 4. Math.ceil() -> 올림 / 소수점 이하 버리기
// ** 버림이 아닌 올림을 하는 이유는 올림을 함으로써 max까지의 수를 얻을 수 있기 때문
// 5. 타입 숫자로 바꿔주기 