window.onload = () => {
  document.querySelector(".load").remove();
};
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let listItems = [
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

function handleMenu() {
  const menuControl = $$(".menu-control li");
  menuControl.forEach((element) => {
    element.onclick = (e) => {
      if (
        e.target.id === "cart" ||
        e.target.classList.contains("fa-cart-shopping") ||
        e.target.classList.contains("countBuy-item") ||
        e.target.classList.contains("itemTab") ||
        e.target.classList.contains("itemInfo-btn-buy") ||
        e.target.classList.contains("itemInfo-btn-delete") ||
        e.target.classList.contains("itemInfo-Name") ||
        e.target.classList.contains("itemImg") ||
        e.target.classList.contains("tabMore") ||
        e.target.classList.contains("defaulTab") ||
        e.target.classList.contains("btnTabMore-buy") ||
        e.target.classList.contains("btnTabMore-delAll")
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

class HandelItemTab {
  constructor(...arr) {
    this.img = arr[0];
    this.name = arr[1];
    this.ratiry = arr[2];
    this.price = arr[3];
    this.info_ratiry = arr[4];
    this.info_st = arr[5];
    this.info_tdd = arr[6];
    this.info_heal = arr[7];
    this.info_blood = arr[8];
    this.id = arr[9];
  }
  HandelAddItem = () => {
    const framesItemTab = [
      `
      <div class="itemInfo-rati"> ${this.info_ratiry}</div>
  
    <img
      src="../pageMarket/${this.img}"
      alt=""
      class="itemImg"
      title="${this.info_ratiry}"
    />
    <div class="itemInfo">
      <div class="itemInfo-Name">${this.name}</div>
      <div class="itemInfoPR">
      <div class="itemInfo-price">Giá: ${this.price}</div>
      </div>
    </div>
    <div class="itemInfo-btn">
      <div class="itemInfo-btn-buy ${this.id}">Mua</div>
      <div class="itemInfo-btn-delete ${this.id}" >Xóa</div>
    </div>
  `,
    ].join("");
    var divItemTab = document.createElement("div");
    divItemTab.classList.add("itemTab");
    divItemTab.classList.add(`${this.ratiry}`);
    divItemTab.classList.add(`${this.id}`);
    divItemTab.innerHTML = framesItemTab;
    const resultItemTab = [];
    for (let i = 0; i < $$(".itemTab").length; i++) {
      resultItemTab.push($$(".itemInfo-Name")[i].innerHTML);
    }
    // event loop item
    if ($$(".itemTab").length == 0) {
      $(".tabMore").appendChild(divItemTab);
    } else {
      const resultCount = resultItemTab.filter((e) => {
        return e === this.name;
      });
      if (resultCount.length < 1) {
        $(".tabMore").appendChild(divItemTab);
      }
    }
    // create crollbar
    if ($$(".itemTab").length > 5) {
      $(".tabMore").style.height = 450 + "px";
    }
    // show btnTabMore
    if ($$(".itemTab").length > 1) {
      $(".btnTabMore").style.display = "block";
    }
    $(".countBuy-item").innerHTML = "";
    $(".countBuy-item").innerHTML = $$(".itemTab").length;
    $(".defaulTab").style.display = "none";
    // delete item
    $$(".itemInfo-btn-delete").forEach((e) => {
      e.onclick = (ev) => {
        $$(".itemTab").forEach((e) => {
          if (e.classList[2] == ev.target.classList[1]) {
            e.remove();
            $(".countBuy-item").innerHTML = "";
            $(".countBuy-item").innerHTML = $$(".itemTab").length;
            if ($$(".itemTab").length < 1) {
              $(".defaulTab").style.display = "flex";
            }
            if ($$(".itemTab").length < 2) {
              $(".btnTabMore").style.display = "none";
            }
            if ($$(".itemTab").length < 6) {
              $(".tabMore").style.height = "max-content";
            }
          }
        });
      };
    });
    $(".btnTabMore-delAll").onclick = () => {
      $$(".itemTab").forEach((e) => {
        e.remove();
      });
      $(".btnTabMore").style.display = "none";
      $(".defaulTab").style.display = "flex";
      $(".countBuy-item").innerHTML = "";
      $(".countBuy-item").innerHTML = $$(".itemTab").length;
    };
    // Check even click button Buy in cart
    $$(".itemInfo-btn-buy").forEach((ez) => {
      ez.onclick = (ev) => {
        for (let i = 0; i < $$(".itemTab").length; i++) {
          if ($$(".itemTab")[i].classList[2] === ev.target.classList[1]) {
            const result = listItems.find((item) => {
              return item.id === Number($$(".itemTab")[i].classList[2]);
            });
            const creditUser = Number($(".point").innerHTML);
            const priceItem = Number(result.price);
            const remainingPrice = creditUser - priceItem;
            showFormBuy(
              result.img,
              result.name,
              result.ratiry,
              result.price,
              result.info.ratiry,
              result.info.st,
              result.info.tdd,
              result.info.healling,
              result.info.blood,
              result.id
            );
            $(".formBuy").style.display = "flex";
            $(".formBuy-pay").onclick = (es) => {
              es.preventDefault();
              if (creditUser >= priceItem) {
                $$(".itemTab")[i].remove();
                $(".countBuy-item").innerHTML = "";
                $(".countBuy-item").innerHTML = $$(".itemTab").length;
                // output sceen listArr new
                const resultListItem = listItems.filter((event) => {
                  if (event.id == result.id) {
                    return false;
                  }
                  return true;
                });
                listItems = resultListItem;
                renDer(listItems);
                $(".formBuy").style.display = "none";
                $(".point").innerHTML = "";
                $(".point").innerHTML = remainingPrice;
              }
              // check item in arr if length arr < 1 handle
              resetTabMore();
            };
          }
        }
      };
    });
  };
}
function showFormBuy(...arr) {
  const creditUser = Number($(".point").innerHTML);
  const priceItem = Number(arr[3]);
  const remainingPrice = creditUser - priceItem;
  const framesFormBuy = [
    `<form action="" class="${arr[2]}">
    <div class="NameForm">Vật Phẩm</div>
    <div class="formBuy-img">
      <img src="../pageMarket/${arr[0]}" alt="" />
      <div class="formBuy-priceItem">Giá: <span>${arr[3]}</span></div>
      <div class="formBuy-ratiry ${arr[2]}">${arr[4]}</div></div>
    </div>
    <hr />
    <div class="formBuy-nameItem">${arr[1]}</div>
    <div class="formBuy-Footer">
      <div class="itemStats">
        <span class="strong"> ${arr[5]}</span>
        <span class="strong">  ${arr[6]}</span>
        <span class="strong">  ${arr[7]}</span>
        <span class="strong">  ${arr[8]}</span>
      </div>
      <div class="formBuy-end">
        <div class="formBuy-creditUser">Số dư: <span>${creditUser}</span></div>
        <div class="formBuy-remaining">
          Số dư sau thanh toán: <span>${creditUser}</span> - <span>${priceItem}</span> =
          <span class="remaining">${remainingPrice}</span>
        </div>

        <button class="formBuy-pay">Thanh toán</button>
        <button class="formBuy-out">Tắt</button>
      </div>
    </div>
  </form>`,
  ].join("");
  $(".formBuy").innerHTML = framesFormBuy;
  $(".formBuy-out").onclick = (e) => {
    e.preventDefault();
    $(".formBuy").innerHTML = "";
    $(".formBuy").style.display = "none";
  };
  $(".formBuy-pay").onclick = (e) => {
    e.preventDefault();
    if (creditUser >= priceItem) {
      $(".formBuy").innerHTML = "";
      $(".formBuy").style.display = "none";
      $(".point").innerHTML = "";
      $(".point").innerHTML = remainingPrice;
      const resultListItem = listItems.filter((e) => {
        if (e.id == arr[9]) {
          return false;
        }
        return true;
      });
      listItems = resultListItem;
      renDer(listItems);
      $$(".tabMore .itemTab").forEach((item) => {
        if (item.classList[2] === arr[9]) {
          item.remove();
          resetTabMore();
        }
      });
    } else {
      return false;
    }
  };
}
function renDer(arr) {
  const list = $(".listItem");
  list.innerHTML = "";
  // src="/Market_item/login_register/pageMarket/${e.img}"
  arr.forEach((e) => {
    const framesItem = [
      `
    <div class="img">
      <img
      src="../pageMarket/${e.img}"
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
      <button class="buyItem" data-id = "${e.id}" data-info-st ="${e.info.st}" data-info-tdd ="${e.info.tdd}" data-info-heal ="${e.info.healling}" data-info-blood ="${e.info.blood}"  data-info-ratiry-buy="${e.info.ratiry}" data-img-buy = "${e.img}" data-name-buy = "${e.name}" data-ratiry-buy = "${e.ratiry}" data-price-buy ="${e.price}">Mua</button>
      <button class="addItem" data-id = "${e.id}" data-info-st ="${e.info.st}" data-info-tdd ="${e.info.tdd}" data-info-heal ="${e.info.healling}" data-info-blood ="${e.info.blood}" data-info-ratiry="${e.info.ratiry}" data-img = "${e.img}" data-name = "${e.name}" data-ratiry = "${e.ratiry}" data-price ="${e.price}">Thêm</button>
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
    $$(".addItem").forEach((e) => {
      e.onclick = () => {
        const addI = new HandelItemTab(
          e.getAttribute("data-img"),
          e.getAttribute("data-name"),
          e.getAttribute("data-ratiry"),
          e.getAttribute("data-price"),
          e.getAttribute("data-info-ratiry"),
          e.getAttribute("data-info-st"),
          e.getAttribute("data-info-tdd"),
          e.getAttribute("data-info-heal"),
          e.getAttribute("data-info-blood"),
          e.getAttribute("data-id")
        );
        addI.HandelAddItem();
      };
    });
    $$(".buyItem").forEach((e) => {
      e.onclick = () => {
        showFormBuy(
          e.getAttribute("data-img-buy"),
          e.getAttribute("data-name-buy"),
          e.getAttribute("data-ratiry-buy"),
          e.getAttribute("data-price-buy"),
          e.getAttribute("data-info-ratiry-buy"),
          e.getAttribute("data-info-st"),
          e.getAttribute("data-info-tdd"),
          e.getAttribute("data-info-heal"),
          e.getAttribute("data-info-blood"),
          e.getAttribute("data-id")
        );
        $(".formBuy").style.display = "flex";
      };
    });
  });
}
const btnSreach = $(".btnSreach");
btnSreach.onclick = () => {
  handleSreach(listItems);
};
function handleSreach(data) {
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
  console.log(data);
}
const payAll = $(".btnTabMore-buy");
payAll.onclick = () => {
  $(".payAllItemCart").style.display = "flex";
  payAllItemCart(listItems);
};
function payAllItemCart(data) {
  const items = $$(".tabMore .itemTab");
  const listItem = $(".payAllItemCart-item-frames-listitem");
  listItem.innerHTML = "";
  let sumPrice = 0;

  items.forEach((ev) => {
    const resultItem = data.find((item) => {
      return item.id === Number(ev.classList[2]);
    });
    const HTML = [
      `
    <div class="payAllItemCart-item-img">
      <img src="../pageMarket/${resultItem.img}" alt="" />
      <div class="payAllItemCart-item-ratiry ${resultItem.ratiry}">${resultItem.info.ratiry}</div>
    </div>
    <div class="payAllItemCart-item-nameItem">
    ${resultItem.name}
      <span
        >Giá:
        <span class="payAllItemCart-item-price">${resultItem.price}</span></span
      >
    </div>
    <div class="payAllItemCart-item-properties">
      <span class="strong">${resultItem.info.st}</span>
      <span class="strong">${resultItem.info.tdd}</span>
      <span class="strong">${resultItem.info.blood}</span>
      <span class="strong">${resultItem.info.healling}</span>
    </div>
    `,
    ].join("");
    const divAllItemCart = document.createElement("div");
    divAllItemCart.classList.add("payAllItemCart-item-frames-item");
    divAllItemCart.classList.add(`${resultItem.ratiry}`);
    divAllItemCart.innerHTML = HTML;
    listItem.appendChild(divAllItemCart);
    $(".payAllItemCart-item-name span").innerHTML = "";
    $(".payAllItemCart-item-name span").innerHTML = items.length;
    sumPrice += Number(resultItem.price);
  });
  const point = $(".point");
  const resultNumber = Number(point.innerHTML) - sumPrice;
  $(".payAllItemCart-item-frames-pay-surplus span").innerHTML = "";
  $(".payAllItemCart-item-frames-pay-surplus span").innerHTML = point.innerHTML;
  $(".pointUser").innerHTML = "";
  $(".pointUser").innerHTML = point.innerHTML;
  $(".sumPrice").innerHTML = "";
  $(".sumPrice").innerHTML = Number(sumPrice);
  $(".resultNumber").innerHTML = "";
  $(".resultNumber").innerHTML = resultNumber;
  // click btn hid form
  $(".payAllItemCart-out").onclick = (e) => {
    e.preventDefault();
    $(".payAllItemCart").style.display = "none";
  };
  $(".payAllItemCart-buy").onclick = (e) => {
    let resultItem = [];
    let result = [];
    e.preventDefault();
    if (point.innerHTML >= sumPrice) {
      point.innerHTML = "";
      point.innerHTML = resultNumber;
      items.forEach((e) => {
        data.find((item) => {
          if (Number(e.classList[2]) === item.id) {
            result.push(item);
          }
        });
        e.remove();
      });
      for (var i = 0; i < result.length; i++) {
        resultItem = data.filter((e) => {
          if (Number(result[i].id) === e.id) {
            return false;
          }
          return true;
        });
        data = resultItem;
      }
      listItems = data;
      renDer(listItems);
      listItem.innerHTML = "";
      $(".payAllItemCart").style.display = "none";
      $(".btnTabMore").style.display = "none";
      $(".countBuy-item").innerHTML = "0";
      $(".defaulTab").style.display = "flex";
    }
  };
}
function start() {
  handleMenu();
  formLoad();
  renDer(listItems);
}
start();
function resetTabMore() {
  if ($$(".itemTab").length < 1) {
    $(".defaulTab").style.display = "flex";
  }
  if ($$(".itemTab").length < 2) {
    $(".btnTabMore").style.display = "none";
  }
  $(".countBuy-item").innerHTML = "";
  $(".countBuy-item").innerHTML = $$(".tabMore .itemTab").length;
}
// ---------- hover vao` gio hang xuat hien tab hang` hoa
