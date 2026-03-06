
let issueContainer = document.getElementById('issue-card-container');
let issueQ = document.getElementById('issue-quantity');

const renderIssueCard = (issues)=>{
    let html = "";
    issues.forEach(issue => {
        let x = `<div class="issue-card shadow rounded-2xl border-t-5  ${issue.status === 'open' ? 'border-t-green-500' : 'border-t-blue-700'}">
                <div class="ic-first border-b-1 border-b-[#ddd] w-full p-4">
                    <div class="ic-heading w-full flex justify-between items-center mb-3">
                        <img src="./assets/${(issue.status === 'open'?'Open-Status.png':'c.png')}" class="w-6 h-6">
                        <div class="px-6 py-2 bg-[#FEECEC] rounded-full text-[14px] text-[#EF4444]">${issue.priority.toUpperCase()}</div>
                    </div>


                    <div class="ic-main h-[150px] flex flex-col justify-between">
                        <div><h3 class="text-[14px] font-semibold text-black">${issue.title}</h3>
                        <p class="line-clamp-2 text-xs  text-[#64748B] mt-2">${issue.description}</p></div>


                        <div class="label-container mt-3 flex">
                            <div class="rounded-full text-[14px] font-medium bg-green-500 w-fit p-1.5"><i class="fa-solid fa-arrow-turn-up"></i>enhancement</div>

<!-- enhancement 

documentation

good first issue

help wanted -->
                        </div>
                    </div>
                </div>
                <div class="ic-last p-4 text-xs text-[#64748B]">
                    <p class="mb-2">#${issue.id} ${issue.assignee != ''?'by '+issue.assignee:''}</p>
                    <p>1/33/2222</p>
                </div>
            </div>`;
            html += x;
    });
    issueContainer.innerHTML = html
    renderIssueQ(issues.length);
}

const firstHtml = async()=>{
    let response = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    let responseData = await response.json();
    let data =await responseData.data;
    renderIssueCard(data);

}
firstHtml()