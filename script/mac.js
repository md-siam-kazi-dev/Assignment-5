const getDate = (date) =>{
    const dataRes = new Date(date);
    console.log(dataRes)
    return dataRes.toLocaleDateString();
}



const getId =(id)=>{
   id = id.split('-');
    return id[1];
}



const renderPriority = (priority) => {
    let x;
    if(priority === 'high'){
        x = `<div class="px-6 py-1.5 w-fit bg-[#FEECEC] rounded-full text-[14px] text-[#EF4444]">${priority.toUpperCase()}</div>`
    }else if(priority === 'low'){
        x= `<div class="px-6 py-1.5w-fit bg-[#EEEFF2] rounded-full text-[14px] text-[#9CA3AF]">${priority.toUpperCase()}</div>`
    }else{
        x = `<div class="px-6 py-1.5 w-fit bg-[#FFF6D1] rounded-full text-[14px] text-[#F59E0B]">${priority.toUpperCase()}</div>`
    }
    return x;
}