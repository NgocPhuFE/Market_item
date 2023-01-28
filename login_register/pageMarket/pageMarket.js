window.onload = () => {
  document.querySelector(".load").remove();
};
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const listItems = [
  {
    id: 1,
    img: "sword.png",
    ratiry: "normal",
    name: "Kiếm Hoa cương",
    price: "25",
    load: "sword",
    info: {
      ratiry: "Bình thường",
      st: "+ 75 STVL",
      tdd: "+ 20 Tốc độ đánh",
      blood: "+ 200 Máu",
      healling: "+ 5s/Hồi 15 máu",
    },
  },
  {
    id: 2,
    img: "sword.png",
    ratiry: "normal",
    name: "Kiếm Hoa cương",
    price: "25",
    load: "sword",
    info: {
      ratiry: "Bình thường",
      st: "+ 75 STVL",
      tdd: "+ 20 Tốc độ đánh",
      blood: "+ 200 Máu",
      healling: "+ 5s/Hồi 15 máu",
    },
  },
  {
    id: 3,
    img: "quartzsword.png",
    ratiry: "rare",
    name: "Kiếm Thạch anh",
    price: "75",
    load: "sword",
    info: {
      ratiry: "Hiếm",
      st: "+ 175 STVL",
      tdd: "+ 30 Tốc độ đánh",
      blood: "+ 250 Máu",
      healling: "+ 5s/Hồi 15 máu",
    },
  },
  {
    id: 4,
    img: "Uzi.png",
    ratiry: "rare",
    name: "Súng Uzi",
    price: "120",
    load: "gun",
    info: {
      ratiry: "Hiếm",
      st: "+ 90 STVL",
      tdd: "+ 50 Tốc độ đánh",
      blood: "+ 150 Máu",
      healling: "+ 5% Tốc độ chạy",
    },
  },
  {
    id: 5,
    img: "ak47.png",
    ratiry: "epic",
    name: "Súng Ak47",
    price: "580",
    load: "gun",
    info: {
      ratiry: "Sử thi",
      st: "+ 250 STVL",
      tdd: "+ 100 Tốc độ đánh",
      blood: "+ 250 Máu",
      healling: "+ 10% Tốc độ chạy",
    },
  },
  {
    id: 6,
    img: "Uzi.png",
    ratiry: "rare",
    name: "Súng Uzi",
    price: "120",
    load: "gun",
    info: {
      ratiry: "Hiếm",
      st: "+ 90 STVL",
      tdd: "+ 50 Tốc độ đánh",
      blood: "+ 150 Máu",
      healling: "+ 5% Tốc độ chạy",
    },
  },
  {
    id: 7,
    img: "boweff.png",
    ratiry: "normal",
    name: "Cung eff",
    price: "25",
    load: "bow",
    info: {
      ratiry: "Bình thường",
      st: "+ 80 STVL",
      tdd: "+ 25 Tốc độ đánh",
      blood: "+ 150 Máu",
      healling: "+ 5% Tốc độ chạy",
    },
  },
  {
    id: 8,
    img: "bowlegend.png",
    ratiry: "legendary",
    name: "Cung huyền thoại",
    price: "1020",
    load: "bow",
    info: {
      ratiry: "Huyền thoại",
      st: "+ 950 STVL",
      tdd: "+ 150 Tốc độ đánh",
      blood: "+ 590 Máu",
      healling: "+ 25% Tốc độ chạy",
    },
  },
  {
    id: 9,
    img: "firesword.png",
    ratiry: "epic",
    name: "Kiếm lửa",
    price: "525",
    load: "sword",
    info: {
      ratiry: "Sử thi",
      st: "+ 450 STVL",
      tdd: "+ 70 Tốc độ đánh",
      blood: "+ 790 Máu",
      healling: "+ 30% tỉ lệ thiêu đốt địch",
    },
  },
  {
    id: 10,
    img: "Icesword.png",
    ratiry: "epic",
    name: "Kiếm Băng",
    price: "525",
    load: "sword",
    info: {
      ratiry: "Sử thi",
      st: "+ 450 STVL",
      tdd: "+ 70 Tốc độ đánh",
      blood: "+ 790 Máu",
      healling: "+ 30% tỉ lệ làm chậm địch",
    },
  },
  {
    id: 11,
    img: "bowepic.png",
    ratiry: "epic",
    name: "Cung OVE",
    price: "505",
    load: "bow",
    info: {
      ratiry: "Sử thi",
      st: "+ 350 STVL",
      tdd: "+ 75 Tốc độ đánh",
      blood: "+ 890 Máu",
      healling: "+ 30% tỉ lệ đầu độc địch",
    },
  },
  {
    id: 12,
    img: "bowiron.png",
    ratiry: "rare",
    name: "Cung sắt",
    price: "105",
    load: "bow",
    info: {
      ratiry: "Hiếm",
      st: "+ 120 STVL",
      tdd: "+ 40 Tốc độ đánh",
      blood: "+ 390 Máu",
      healling: "+ 5s/Hồi 15 thể lực",
    },
  },
  {
    id: 13,
    img: "gatling.png",
    ratiry: "legendary",
    name: "Súng Gatling",
    price: "1550",
    load: "gun",
    info: {
      ratiry: "Huyền thoại",
      st: "+ 520 STVL",
      tdd: "+ 250 Tốc độ đánh",
      blood: "+ 990 Máu",
      healling: "+ 30% tốc độ đánh",
    },
  },
  {
    id: 14,
    img: "rainbowsword.png",
    ratiry: "legendary",
    name: "Kiếm cầu vòng",
    price: "1150",
    load: "sword",
    info: {
      ratiry: "Huyền thoại",
      st: "+ 1220 STVL",
      tdd: "+ 100 Tốc độ đánh",
      blood: "+ 1890 Máu",
      healling: "+ 30% Hút máu",
    },
  },
  {
    id: 15,
    img: "firesword.png",
    ratiry: "epic",
    name: "Kiếm lửa",
    price: "525",
    load: "sword",
    info: {
      ratiry: "Sử thi",
      st: "+ 450 STVL",
      tdd: "+ 70 Tốc độ đánh",
      blood: "+ 790 Máu",
      healling: "+ 30% tỉ lệ thiêu đốt địch",
    },
  },
  {
    id: 16,
    img: "boweff.png",
    ratiry: "normal",
    name: "Cung eff",
    price: "25",
    load: "bow",
    info: {
      ratiry: "Bình thường",
      st: "+ 80 STVL",
      tdd: "+ 25 Tốc độ đánh",
      blood: "+ 150 Máu",
      healling: "+ 5% Tốc độ chạy",
    },
  },
  {
    id: 17,
    img: "quartzsword.png",
    ratiry: "rare",
    name: "Kiếm Thạch anh",
    price: "75",
    load: "sword",
    info: {
      ratiry: "Hiếm",
      st: "+ 175 STVL",
      tdd: "+ 30 Tốc độ đánh",
      blood: "+ 250 Máu",
      healling: "+ 5s/Hồi 15 máu",
    },
  },
  {
    id: 18,
    img: "bowiron.png",
    ratiry: "rare",
    name: "Cung sắt",
    price: "105",
    load: "bow",
    info: {
      ratiry: "Hiếm",
      st: "+ 120 STVL",
      tdd: "+ 40 Tốc độ đánh",
      blood: "+ 390 Máu",
      healling: "+ 5s/Hồi 15 thể lực",
    },
  },
];
function start() {
  handleMenu();
  formLoad();
  renDer(listItems);
  handleSreach(listItems);
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
function renDer(arr) {
  const list = $(".listItem");
  list.innerHTML = "";
  arr.forEach((e) => {
    const framesItem = [
      `
    <div class="img">
      <img
        src="./${e.img}"
        alt=""
      />
    </div>
    <div class="itemName">${e.name}</div>
    <div class="infoItem">
      <span class="strong"> ${e.info.st}</span>
      <span class="strong"> ${e.info.tdd}</span>
      <span class="strong"> ${e.info.blood}</span>
      <span class="strong"> ${e.info.healling}</span>
    </div>
 
    <div class="btnItem">
      <button class="buyItem">Mua</button>
      <button class="addItem">Thêm</button>
    </div>
    <div class="piceItem">Giá:<span id="priceItem">${e.price}</span></div>
    <div class="rankRatiry ${e.ratiry}">${e.info.ratiry}</div>
  `,
    ].join("");
    let divItem = document.createElement("div");
    divItem.classList.add("item");
    divItem.classList.add(`${e.ratiry}`);
    divItem.innerHTML = framesItem;
    list.appendChild(divItem);
  });
}
function handleSreach(data) {
  const btnSreach = $(".btnSreach");
  btnSreach.onclick = () => {
    const type = $('select[name="types"]');
    const rarity = $('select[name="rarity"]');
    const minPrice = $("#minPrice");
    const maxPrice = $("#maxPrice");
    const resultItem = data.filter((e) => {
      if (type.value !== "") {
        if (type.value !== e.load) {
          return false;
        }
      }
      if (rarity.value !== "") {
        if (rarity.value !== e.ratiry) {
          return false;
        }
      }
      if (minPrice.value !== "") {
        if (Number(e.price) < minPrice.value) {
          return false;
        }
      }
      if (maxPrice.value !== "") {
        if (Number(e.price) > maxPrice.value) {
          return false;
        }
      }
      return true;
    });
    renDer(resultItem);
  };
}
start();
// ---------- hover vao` gio hang xuat hien tab hang` hoa
