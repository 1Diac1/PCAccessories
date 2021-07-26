const cart = document.querySelector(".cart");
const clearBtn = document.querySelector('#clrBtn')
const cartObjects = [];

for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.getItem(`name_${i}`) != null) {
        cartObjects.push(i);
        cartObjects[i] = {
            name: localStorage.getItem(`name_${i}`),
            descrpt: localStorage.getItem(`description_${i}`),
            price: localStorage.getItem(`price_${i}`),
      };
      delBtn.addEventListener('click', () => {
        delete cartObjects[i];
      });
  }
}

cartObjects.forEach((el) => {
  let obj = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let price = document.createElement("h3");
  let delBtn = document.createElement('div')

  obj.classList.add("object");
  delBtn.classList.add('del')
  h1.classList.add("title");
  p.classList.add("description");
  price.classList.add("price");

  cart.appendChild(obj);
  obj.appendChild(delBtn);
  obj.appendChild(h1);
  obj.appendChild(p);
  obj.appendChild(price);

  delBtn.innerHTML = '&#10006;';
  h1.innerHTML = (el.name != undefined) ? el.name : (obj.style.display = 'none');
  p.innerHTML = el.descrpt;
  price.innerHTML = el.price + '&#8381;';


  clearBtn.style.display = 'block';
});
if (cartObjects.length == 0) {
  let obj = document.createElement("div");
  let h1 = document.createElement("h1");

  obj.classList.add("noAny");

  cart.appendChild(obj);
  obj.appendChild(h1);

  clearBtn.style.display = 'none';
  h1.innerHTML = "В корзине нет товаров";
}



function clearLocal() {
  localStorage.clear();
  window.location.reload(true); 
}
