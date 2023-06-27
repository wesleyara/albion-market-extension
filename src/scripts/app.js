const searchInput = document.querySelector("#search");
const button = document.querySelector("#button");
const results = document.querySelector("#results");

document.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", async () => {
    const query = searchInput.value;

    const response = await fetch("../../static/items.json");
    const items = await response.json();

    const filteredItems = items.filter((item) => {
      return (
        item.LocalizedNames &&
        item.LocalizedNames["PT-BR"]?.toLowerCase() === query?.toLowerCase()
      );
    });

    results.innerHTML = JSON.stringify(filteredItems);
  });
});
