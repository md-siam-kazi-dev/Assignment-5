//search implentaion
document.getElementById('search-form').addEventListener('submit',async(evt)=>{
    evt.preventDefault();
    renderLoading(true)
    let searchValue = document.getElementById('search').value;
    if(searchValue.trim() === ''){
        searchValue.value = "";
        alert("No Search Value Entered");
        return;
    }
    let response = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`);
    let data = await response.json();
    

    let responseData = data.data;
    tabBtnAll.forEach(btn => {
        btn.classList.remove('btn-primary');
    })
    document.querySelector('#all').classList.add('btn-primary');
   
    seachMechanizom(responseData);
    
})