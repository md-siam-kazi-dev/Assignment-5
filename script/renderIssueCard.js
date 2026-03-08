let issueContainer = document.getElementById("issue-card-container");
let issueQ = document.getElementById("issue-quantity");
let allData ;


//Modal interactiviry implentaion//

document.getElementById('issue-card-container').addEventListener('click',async(evt)=>{
    let card = evt.target.closest('.issue-card');
    let idData = getId(card.id);
    let response =await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${idData}`)
    let data = await response.json();
    let issue = data.data;
    let modal = document.getElementById('modal');
    modal.innerHTML = renderModal(issue);
        modal.showModal();

})







const firstHtml = async () => {
  renderLoading(true);
  let response = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  let responseData = await response.json();
  let data = await responseData.data;
  allData = data;
  renderIssueCard(data);
};
firstHtml();
