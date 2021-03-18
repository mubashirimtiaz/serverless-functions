const result = document.querySelector(".result");

const getItems = async () => {
  try {
    const id = window.location.search;
    const { data } = await axios(`/api/3-product${id}`);
    result.innerText = "";
    return data;
  } catch (err) {
    console.log(err);
  }
};

getItems().then((res) => {
  result.innerHTML = `
     <div class="rounded overflow-hidden m-auto">
          <img src=${res.url} alt=${res.name} />
        </div>
        <div class="m-auto">
        <h1 class="text-2xl uppercase font-bold">${res.name}</h1>
          <p>
           ${res.description}
          </p>
          <div class="flex justify-end">
          <p>$${res.price}</p>
          </div>
         
        </div>
    `;
});
