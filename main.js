const callBtn = document.querySelector('.call_btn');
const callNum = document.querySelector('.call_num');
const callInput = document.querySelector('.call_input');

callBtn.addEventListener("click", (e) => {
  e.preventDefault()
  if(callInput.value === '1026') {
    callNum.classList.toggle("active")
  } else {
  }
});

