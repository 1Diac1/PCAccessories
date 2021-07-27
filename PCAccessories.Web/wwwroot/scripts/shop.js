function cb() {
  const shop_obj = document.getElementsByClassName("shop_object");
  const btn_shop = document.getElementsByClassName("addToCart");
  const titleShop = document.getElementsByClassName("titleShop");
  const descriptionShop = document.getElementsByClassName("descriptionShop");
  const priceShop = document.getElementsByClassName("priceShop");

  for (let i = 0; i < shop_obj.length; i++) {
    btn_shop[i].addEventListener("click", () => {
      addToCart(i);
    });
    }

    function addToCart(el) {
        localStorage.setItem(`name_${el}`, titleShop[el].innerHTML);
        localStorage.setItem(`description_${el}`, descriptionShop[el].innerHTML);
        localStorage.setItem(`price_${el}`, priceShop[el].innerHTML);
    }
}