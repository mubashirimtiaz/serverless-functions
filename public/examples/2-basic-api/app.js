const result = document.querySelector(".result");

const getItems = async () => {
  try {
    const { data } = await axios.get("/api/2-basic-api");
    result.innerText = "";
    return data;
  } catch (err) {
    console.log(err);
  }
};

getItems()
  .then((items) =>
    items.map(
      (item) =>
        (result.innerHTML += `<div class="flex flex-col shadow-md rounded overflow-hidden">
        <img src=${item.image.url} alt=${item.name}/>
        <div class="p-3 flex justify-between items-center my-auto">
            <h3 class="uppercase text-xl">${item.name}</h3>
            <p>
            <span class="text-xl text-gray-500">$</span>${item.price}</p>
        </div>
      </div>`)
    )
  )
  .catch((err) => console.log(err));
