const searchbox = document.querySelector("#searchbox");
const languageSelect = document.querySelector("#language");
const productSelect = document.querySelector("#products");
const priceSelect = document.querySelector("#prices");
const dealsButton = document.querySelector("#offer");
const thirdContainer = document.querySelector("#thirdid");

searchbox.addEventListener("input", function () {
  const searchText = searchbox.value;
  console.log(`Search text: ${searchText}`);
});

languageSelect.addEventListener("change", function () {
  const selectedLanguage = languageSelect.value;
  console.log(`Selected language: ${selectedLanguage}`);
});

productSelect.addEventListener("change", function () {
  const selectedProduct = productSelect.value;
  console.log(`Selected product: ${selectedProduct}`);
});

priceSelect.addEventListener("change", function () {
  const selectedPriceRange = priceSelect.value;
  console.log(`Selected price range: ${selectedPriceRange}`);
});

dealsButton.addEventListener("click", function () {
  console.log("Today's Deals button clicked");
});

thirdContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    const imageId = event.target.getAttribute("data-image-id");
    showImageContent(imageId);
  }
});

function showImageContent(imageId) {
  window.location.href = `content.html?image=${imageId}`;
}
