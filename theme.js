// search bar

const searchIcon = document.getElementById("search______bar");
const cross = document.getElementById("cross_____icon");
const searchBar = document.getElementById("main___search___bar");

searchIcon.addEventListener("click", function (e) {
  searchBar.classList.add("show___searchbar");
  document
    .querySelector(".admin____overlay")
    .classList.add("show__adminOverlay");
});

cross.addEventListener("click", () => {
  searchBar.classList.remove("show___searchbar");
  document
    .querySelector(".admin____overlay")
    .classList.remove("show__adminOverlay");
});

document.addEventListener("click", (event) => {
  if (event.target.closest("#search______bar")) return;
  if (event.target.closest("#main___search___bar")) return;

  if (event.target.classList[1] === "show__adminOverlay") {
    document
      .querySelector(".admin____overlay")
      .classList.remove("show__adminOverlay");
  }

  searchBar.classList.remove("show___searchbar");
});
