window.onload = () => {
  document.querySelector(".load").remove();
};
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
function start() {
  handleMenu();
  formLoad();
}
function handleMenu() {
  const menuControl = $$(".menu-control li");
  menuControl.forEach((element) => {
    element.onclick = (e) => {
      if (
        e.target.id === "cart" ||
        e.target.classList.contains("fa-cart-shopping") ||
        e.target.classList.contains("countBuy-item")
      ) {
        return;
      }
      $("li.active-li").classList.remove("active-li");
      e.target.classList.add("active-li");
    };
  });
  // logout the user
  const logOut = $(".fa-right-from-bracket");
  logOut.onclick = () => {
    window.location = "/Market_item/login_register";
  };
  const showFormLoad = $(".credit i");
  showFormLoad.onclick = () => {
    $(".formLoad").style.display = "block";
  };
}
function formLoad() {
  let resultNumber = 100;
  const numberLoad = $(".numberLoad select");

  const bankLoad = $(".howLoad select");
  numberLoad.onchange = () => {
    resultNumber = numberLoad.value;
  };
  bankLoad.onchange = (e) => {
    if (e.target.value === "bank") {
      $(".numberBank").innerHTML = "TpBank-07665867388";
    } else {
      $(".numberBank").innerHTML = "0766586738";
    }
  };
  const btnForm = $(".formSubmit");
  const btnCloseForm = $(".btnClose");

  btnForm.onclick = (e) => {
    btnForm.setAttribute("disabled", "");
    btnCloseForm.setAttribute("disabled", "");

    $(".formCheck").innerHTML = "<span>Kiểm tra...</span>";
    $(".formCheck").style.color = "black";
    e.preventDefault();
    $(".formCheck").style.display = "block";
    setTimeout(() => {
      $(".formCheck").style.color = "green";
      $(".formCheck").innerHTML = "<span>Thành công</span>";
      setTimeout(() => {
        $(".formCheck").style.display = "none";
        const NumberUser = Number($(".point").innerHTML);
        $(".point").innerHTML = Number(resultNumber) + NumberUser;
        $(".formLoad").style.display = "none";
        btnForm.removeAttribute("disabled", "");
        btnCloseForm.removeAttribute("disabled", "");
      }, 500);
    }, 2500);
  };
  btnCloseForm.onclick = (e) => {
    e.preventDefault();
    $(".formLoad").style.display = "none";
  };
}
start();
// ---------- hover vao` gio hang xuat hien tab hang` hoa
