const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const bg_btnForm = $(".background-btnForm");
const Users = [
  {
    id: 1,
    userName: "tranngocphuwr",
    password: "123456",
  },
  {
    id: 2,
    userName: "0766586738",
    password: "123456",
  },
];
function start() {
  bg_btnForm.style.left = $("#login").offsetLeft + "px";
  bg_btnForm.style.width = $("#login").offsetWidth + "px";
  btnForm();
  checkValueInput();
  checkPass();
}
function btnForm() {
  const btnForm = $$(".btnForm button");
  const register = $(".register");
  const ipForm_pass_register = $(".inputForm_pass--pass");
  const ipForm_pass_text_register = $(".inputForm_text--pass");
  const submitRegister = $(".submitRegister");
  const checkboxPass = $(".checkboxPass");
  const checkboxPasslabel = $(".checkboxPasslabel");

  const login = $(".login");
  const ipForm_pass_login = $(".inputForm_pass--login");
  const ipForm_pass_text_login = $(".inputForm_text--login");
  const submitLogin = $(".submitLogin");
  const checkboxLogin = $(".checkboxLogin");
  const checkboxLoginlabel = $(".checkboxLoginlabel");

  btnForm.forEach((element) => {
    element.onclick = (e) => {
      e.preventDefault();
      bg_btnForm.style.left = e.target.offsetLeft + "px";
      bg_btnForm.style.width = e.target.offsetWidth + "px";
      $("button.active-btnForm").classList.remove("active-btnForm");
      e.target.classList.add("active-btnForm");
      if ($("#register.active-btnForm")) {
        // register
        register.style.animation = "animationNameForm 1s ease-in-out forwards";
        register.style.display = "flex";
        ipForm_pass_register.style.display = "flex";
        ipForm_pass_text_register.style.display = "flex";
        submitRegister.style.display = "flex";
        checkboxPass.style.display = "flex";
        checkboxPasslabel.style.display = "flex";
        // login
        login.style.display = "none";
        ipForm_pass_login.style.display = "none";
        ipForm_pass_text_login.style.display = "none";
        submitLogin.style.display = "none";
        checkboxLogin.style.display = "none";
        checkboxLoginlabel.style.display = "none";
      } else {
        // register
        register.style.animation = "";
        register.style.display = "none";
        ipForm_pass_register.style.display = "none";
        ipForm_pass_text_register.style.display = "none";
        submitRegister.style.display = "none";
        checkboxPass.style.display = "none";
        checkboxPasslabel.style.display = "none";
        // login
        login.style.animation = "animationNameForm 1s ease-in-out forwards";
        login.style.display = "flex";
        ipForm_pass_login.style.display = "flex";
        ipForm_pass_text_login.style.display = "flex";
        submitLogin.style.display = "flex";
        checkboxLogin.style.display = "flex";
        checkboxLoginlabel.style.display = "flex";
      }
    };
  });
}
function checkValueInput() {
  // login
  const inputTextLogin = $(".inputForm_text--login input");
  const inputpassLogin = $(".inputForm_pass--login input");
  $(".submitLogin").onclick = (e) => {
    e.preventDefault();
    Users.forEach((e) => {
      if (
        inputTextLogin.value === e.userName &&
        inputpassLogin.value === e.password
      ) {
        const SuccessToast = new toastMessage(
          "Successful Login !",
          "Welcome back my friend",
          "succesColor",
          "#379237",
          "#54b435",
          "fa-check"
        );
        SuccessToast.render();
      } else if (
        inputTextLogin.value !== e.userName &&
        inputpassLogin.value !== e.password
      ) {
        const ErrorToast = new toastMessage(
          "Error Login !",
          "Check your password and user name",
          "ErrorColor",
          "#C21010",
          "#ff1e00",
          "fa-xmark"
        );
        ErrorToast.render();
      }
    });
  };
  // register
}
function checkPass() {
  $("#eye-login").onclick = () => {
    $("#eye-login").classList.toggle("fa-eye");
    if ($("#eye-login").classList.contains("fa-eye")) {
      $(".inputForm_pass--login input").type = "text";
    } else {
      $(".inputForm_pass--login input").type = "password";
    }
  };
  $("#eye-register").onclick = () => {
    $("#eye-register").classList.toggle("fa-eye");
    if ($("#eye-register").classList.contains("fa-eye")) {
      $(".inputForm_pass--pass input").type = "text";
    } else {
      $(".inputForm_pass--pass input").type = "password";
    }
  };
}

class toastMessage {
  constructor(status, content, statusColor, backgroundIcon, borderLeft, icon) {
    this.status = status;
    this.content = content;
    this.statusColor = statusColor;
    this.backgroundIcon = backgroundIcon;
    this.borderLeft = borderLeft;
    this.icon = icon;
  }
  render = () => {
    const toast = [
      `  
  <div class="toast--icon">
    <i class="fa-solid ${this.icon}"></i>
  </div>
  <div class="toast--text">
    <div class="toast--text_status ${this.statusColor}">${this.status}</div>
    <div class="toast--text_content">${this.content}</div>
  </div>

  `,
    ].join("");
    let divToast = document.createElement("div");
    divToast.classList.add("toast");
    divToast.innerHTML = toast;
    const toastMessage = $(".toastMessage");
    toastMessage.appendChild(divToast);
    $(".toast").style.display = "flex";
    $(".toast").style.borderLeft = `5px solid ${this.borderLeft}`;
    $(".toast--icon i").style.background = `${this.backgroundIcon}`;
    if (this.icon === "fa-xmark") {
      $(".toast--icon i").style.padding = "10px 14px";
    }
    setTimeout(() => {
      divToast.style.animation = "toastHid 0.3s linear forwards";
    }, 2000);
    setTimeout(() => {
      divToast.remove();
    }, 2500);
  };
}
start();
