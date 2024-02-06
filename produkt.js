const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".produktinformation h3").textContent = product.productdisplayname;
  document.querySelector(".produktinformation .brand").textContent = product.brandname;
  document.querySelector(".produktinformation .category").textContent = product.subcategory;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".produktinformation .h4").textContent = product.price;
  document.querySelector(".produktinformation .id").textContent = product.id;
  document.querySelector(".produktinformation .gender").textContent = product.gender;
  document.querySelector(".produktinformation .season").textContent = product.season;
}
