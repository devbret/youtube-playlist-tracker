function main() {
  const playlistTitle = document.querySelectorAll(".playlistTitle")[0];
  const playlistLink = document.querySelectorAll(".playlistLink")[0];
  const youtuber = document.querySelectorAll(".youtuber")[0];
  const add = document.querySelectorAll(".add")[0];
  const display = document.querySelectorAll(".display")[0];
  add.addEventListener("click", () => {
    const title = playlistTitle.value;
    const tempItem = document.createElement("li");
    tempItem.classList.add("displayItems");
    const tempItemTitleDIV = document.createElement("div");
    const tempItemTitleText = document.createElement("p");
    const tempItemTitleLink = document.createElement("a");
    tempItemTitleLink.href = playlistLink.value;
    tempItemTitleLink.innerText = title;
    tempItemTitleLink.target = "_blank";
    tempItemTitleText.appendChild(tempItemTitleLink);
    tempItemTitleDIV.appendChild(tempItemTitleText);
    tempItem.appendChild(tempItemTitleDIV);
    const tempItemYouTuberDIV = document.createElement("div");
    const tempItemYouTuberName = document.createElement("p");
    tempItemYouTuberName.innerText = youtuber.value;
    tempItemYouTuberDIV.appendChild(tempItemYouTuberName);
    tempItem.appendChild(tempItemYouTuberDIV);
    const videoCounter = document.createElement("input");
    videoCounter.type = "number";
    videoCounter.value = 1;
    videoCounter.min = 1;
    tempItem.appendChild(videoCounter);
    display.appendChild(tempItem);
  });
}
main();
