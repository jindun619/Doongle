function googleSearch() {
  const keywords = google__input.value;
  location.href = `https://www.google.com/search?q=${keywords}`;
}

function googleKeyHandler(event) {
  const eventKey = event.key;
  if (eventKey == "Enter") {
    googleSearch();
  }
}

function naverSearch() {
  const keywords = naver__input.value;
  location.href = `https://search.naver.com/search.naver?query=${keywords}`;
}

function baiduSearch() {
  const keywords = baidu__input.value;
  location.href = `https://www.baidu.com/s?wd=${keywords}`;
}

function searcherInit() {
  //Google Search
  google__input.addEventListener("keydown", googleKeyHandler);
  google__iconInsider2.addEventListener("click", googleSearch);
  //Naver Search
  naver__button.addEventListener("click", naverSearch);
  //Baidu Search
  baidu__submit.addEventListener("click", baiduSearch);
}

searcherInit();
