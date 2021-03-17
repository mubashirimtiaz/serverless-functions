const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    // const response = await axios("/.netlify/functions/1-hello");
    const { data } = await axios.get("/api/1-hello");
    result.innerText = data;
    return data;
  } catch (err) {
    return err.response.data;
  }
};

fetchData();
