window.onload = (e) => {
  e.preventDefault();
  let data = {
    title: titleAdd,
    description : descriptionAdd,
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
        alert("Все добавилось!");
        console.log(data);
    })
    .fail(function (data) {
        console.log(data);
    });
};

let titleAdd, descriptionAdd, priceAdd, isAvailableAdd;