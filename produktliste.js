fetch("https://kea-alt-del.dk/t7/api/products?limit=100")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //loope
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log("test");
  //clone, ændre og appende
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("h4").textContent = product.brandname;
  copy.querySelector("h5").textContent = "Prev. DKK " + product.price + ",-";

  //hvis produktet er udsolgt
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
    copy.querySelector("div.soldout").textContent = "Udsolgt";
  }

  //hvis produktet er på udsalg
  if (product.discounted) {
    copy.querySelector("article").classList.add("discount");
    copy.querySelector("div.discounted").textContent = "-" + product.discount + "%";
  }

  copy.querySelector(".link_produkt").setAttribute("href", `produkt.html?id=${product.id}`);

  //appende
  document.querySelector("main").appendChild(copy);

  const parent = document.querySelector(".produktliste");
  parent.appendChild(copy);
}
