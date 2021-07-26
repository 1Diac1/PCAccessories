window.onload = () => {
  e.preventDefault();
  let data = {
    title: titleAdd,
    description:descriptionAdd,
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
      alert(data);
    })
    .fail(function (data) {
      alert(data);
    });
};

let titleAdd, descriptionAdd, priceAdd, isAvailableAdd;