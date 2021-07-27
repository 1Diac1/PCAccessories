window.onload = (e) => {
  let titleAdd, descriptionAdd, priceAdd, isAvailableAdd;
  e.preventDefault();
  let data = {
    title: titleAdd,
    description: descriptionAdd,
    price: priceAdd,
    isAvailable: isAvailableAdd,
  };

  $.ajax({
    type: "GET",
    url: "http://localhost:3161/api/v1/products",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),
  })
    .success(function (data) {
      for (let i = 0; i < data.length; i++) {
        let shop = document.getElementById("shop");
        let obj = document.createElement("div");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        let price = document.createElement("h3");
        let btn = document.createElement("button");

        shop.appendChild(obj);
        obj.appendChild(h1);
        obj.appendChild(p);
        obj.appendChild(price);
        obj.appendChild(btn);

        obj.classList.add("shop_object");
        btn.classList.add('addToCart');
        h1.classList.add('titleShop');
        p.classList.add('descriptionShop');
        price.classList.add('priceShop');

        h1.innerHTML = data[i].title;
        p.innerHTML = data[i].description;
        price.innerHTML = data[i].price + '&#8381;';
        btn.innerHTML = "Добавить в корзину";

        cb();
      }
    })
    .fail(function (data) {
      console.log(data);
    });
};