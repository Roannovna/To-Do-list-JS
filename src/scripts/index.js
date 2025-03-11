import "../index.css";

const popupBu = document.querySelector(".popup__bu");
const popupOpenBtn = document.querySelector(".popup_btn_open");
const popupCloseBtn = document.querySelector(".popup_btn_close");

function handleOpenPopup() {
  console.log("DA");
  popupBu.classList.add("popup__visible");
}

function handleClosePopup() {
  popupBu.classList.remove("popup__visible");
}

popupOpenBtn.addEventListener("click", handleOpenPopup);
popupCloseBtn.addEventListener("click", handleClosePopup);
