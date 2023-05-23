
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const sign_up = document.querySelector("#sign-up");
const sign_in = document.querySelector(".loginbtn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
sign_up.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
sign_in.addEventListener("click", (event) => {
  event.preventDefault()
  const user = 'nduemmanuel@gmail.com'
  const pass = '11111111'
  if (user === document.getElementById('loginemail').value && pass === document.getElementById('loginpassword').value){
   window.location.assign('index.html')
  }else{
    alert('incorrect password try again')
  }
});
  
