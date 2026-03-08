//this js file implement tab interactivity
let tabBtnAll = document.querySelectorAll(".tab-btn");
document.getElementById("tab").addEventListener("click", (evt) => {
    renderLoading(true)
  if (evt.target.classList.contains("tab-btn")) {
    //remove color from tab btn
    tabBtnAll.forEach((btn) => {
      btn.classList.remove("btn-primary");
    });

    if (evt.target.id === "all") {
      renderIssueCard(allData);
      evt.target.classList.add("btn-primary");
    } else if (evt.target.id === "open") {
      let openData = allData.filter((data) => data.status === "open");
      evt.target.classList.add("btn-primary");
      renderIssueCard(openData);
    } else if (evt.target.id === "closed") {
      let closedData = allData.filter((data) => data.status === "closed");
      evt.target.classList.add("btn-primary");
      //if user click closed then render closed issue card
      renderIssueCard(closedData);
    }
    document.querySelector('#search').value = "";
  }
});
