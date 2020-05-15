//classNames
const CN_googleFocused = "search__google-focused";
const CN_baiduFocused = "baidu__form-focused";

function googleFocus() {
  search__google.classList.toggle(CN_googleFocused);
}

function baiduFocus() {
  baidu__form.classList.toggle(CN_baiduFocused);
}

function stylerInit() {
  //Google focus&blur event
  google__input.addEventListener("focus", googleFocus);
  google__input.addEventListener("blur", googleFocus);
  //Baidu focus&blur event
  baidu__input.addEventListener("blur", baiduFocus);
  baidu__input.addEventListener("focus", baiduFocus);
}

stylerInit();
