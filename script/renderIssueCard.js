let issueContainer = document.getElementById("issue-card-container");
let issueQ = document.getElementById("issue-quantity");
let allData ;
const renderLabels = (labels) => {
  let html = "";
  console.log(labels);
  labels.forEach((label) => {
    
    let x;

    if (label === "documentation") {
      x = `<div class="rounded-full text-[12px] font-medium bg-gray-300 p-0.5 w-fit ">
            <i class="fa-solid fa-file"></i> ${label.toUpperCase()}
         </div>`;
    } else if (label === "enhancement") {
      x = `<div class="rounded-full p-0.5 text-[12px] font-medium bg-blue-300 w-fit ">
            <i class="fa-solid fa-arrow-turn-up"></i> ${label.toUpperCase()}
         </div>`;
    } else if (label === "bug") {
      x = `<div class="rounded-full text-[12px] font-medium bg-red-300 p-0.5 w-fit ">
            <i class="fa-solid fa-bug"></i> ${label.toUpperCase()}
         </div>`;
    } else if (label === "help wanted") {
      x = `<div class="rounded-full p-0.5 text-[12px] font-medium bg-yellow-500 w-fit ">
            <i class="fa-solid fa-hands-helping"></i> ${label.toUpperCase()}
         </div>`;
    } else if (label === "good first issue") {
      x = `<div class="rounded-full text-[12px] font-medium p-0.5 bg-green-300 w-fit ">
            <i class="fa-solid fa-heart"></i> ${label.toUpperCase()}
         </div>`;
    }
    html += x;
  });
  return html;
};

const renderIssueCard = (issues) => {
  let html = "";
  issues.forEach((issue) => {
    let x = `<div id='card-${issue.id}' class="issue-card  shadow rounded-2xl border-t-5  ${issue.status === "open" ? "border-t-green-600" : "border-t-blue-700"}">
                <div class="ic-first border-b-1 border-b-[#ddd] w-full p-4">
                    <div class="ic-heading w-full flex justify-between items-center mb-3">
                        <img src="./assets/${issue.status === "open" ? "Open-Status.png" : "c.png"}" class="w-6 h-6">
                        ${renderPriority(issue.priority)}
                    </div>


                    <div class="ic-main h-[150px] flex flex-col justify-between">
                        <div><h3 class="text-[14px] font-semibold text-black">${issue.title}</h3>
                        <p class="line-clamp-2 text-xs  text-[#64748B] mt-2">${issue.description}</p></div>


                        <div class="label-container mt-3 gap-[1px] flex flex-wrap">
                            ${renderLabels(issue.labels)}

<!-- enhancement 

documentation

good first issue

help wanted help wanted -->
                        </div>
                    </div>
                </div>
                <div class="ic-last p-4 text-xs text-[#64748B]">
                    <p class="mb-2">#${issue.id} ${issue.assignee != "" ? "by " + issue.assignee : ""}</p>
                    <p>${getDate(issue.createdAt)}</p>
                </div>
            </div>`;
    html += x;
  });
  issueContainer.innerHTML = html;
  renderIssueQ(issues.length);
};



document.getElementById('issue-card-container').addEventListener('click',async(evt)=>{
    let card = evt.target.closest('.issue-card');
    let idData = getId(card.id);
    let response =await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${idData}`)
    let data = await response.json();
    let issue = data.data;
    let modal = document.getElementById('modal');
    modal.innerHTML = `<div class="modal-box">
            <h1 class="text-2xl font-bold mb-2">${issue.title}</h1>

            <div class="flex gap-2 items-center">
                <div class="bg-green-500 p-2 rounded-full text-[12px] font-medium">Opened</div>&#9679;<p class="text-[#64748B] text-[12px]">${issue.status} by ${issue.author}</p>&#9679; <p class="text-[#64748B] text-[12px]">${getDate(issue.createdAt)}</p>
            </div>

            <div class="labels mt-6 mb-6 flex gap-1">${renderLabels(issue.labels)}</div>

            <p class="text-[#64748B] mb-6 text-[16px]">${issue.description}</p>

            <div class="p-4 grid grid-cols-2">
                <div class="assign text-left">
                    <h6 class="text-[#64748B] text-[16px] mb-1">Assignee:</h6>
                    <h6 class="font-semibold text-black text-[16px]">${issue.author}</h6>
                </div>
                <div class="preority  text-left">
                    <h6 class="text-[#64748B] text-[16px] mb-1">Priority:</h6>
                    ${renderPriority(issue.priority)}
                </div>
            </div>


            <form method="dialog" class="flex justify-end">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
            </form>
        </div>`
        modal.showModal();

})







const firstHtml = async () => {
  let response = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  let responseData = await response.json();
  let data = await responseData.data;
  allData = data;
  renderIssueCard(data);
};
firstHtml();
