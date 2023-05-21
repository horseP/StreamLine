
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const loginemail = document.getElementById('loginemail')                                          
const loginpassword = document.getElementById('loginpassword').value
const user = [
  {
      user: "peter@gmail.com",
      pass: "password"
  },
  {
      user: "peter@gmail.com",
      pass: "password"
  },
  {
      user: "peter@gmail.com",
      pass: "password"
  },
  {
      user: "peter@gmail.com",
      pass: "password"
  },
  {
      user: "peter@gmail.com",
      pass: "password"
  },
  {
      user: "peter@gmail.com",
      pass: "password"
  }
]

const matchfound = user.map(users => users.user == loginemail.value && users.pass == loginpassword.value)

function loginbutton () {
  console.log('hello', loginpassword.value)                                                                                                                                                           
if(matchfound){
  window.location.assign('index.html')
}else{
  alert('incorrect password')
}
}

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
  