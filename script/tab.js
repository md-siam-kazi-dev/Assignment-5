document.getElementById('tab').addEventListener('click' ,(evt) => {
    
    if(evt.target.classList.contains('tab-btn')){
        document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('btn-primary')
    })
        if(evt.target.id === 'all'){
            renderIssueCard(allData);
            evt.target.classList.add('btn-primary')
        }
        else if(evt.target.id === 'open'){
            let openData = allData.filter(data => data.status === 'open');
            evt.target.classList.add('btn-primary')
            renderIssueCard(openData)
        }else if(evt.target.id === 'closed'){
            let closedData = allData.filter(data => data.status === 'closed');
            evt.target.classList.add('btn-primary')
            renderIssueCard(closedData);
        }
    }
})
