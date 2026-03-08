let msg = document.querySelector('.msg')
document.getElementById('form').addEventListener('submit',(event)=>{
    event.preventDefault();
    let userName = document.getElementById('username').value ;
    let pass = document.getElementById('pass').value;

    if(userName === 'admin' && pass === 'admin123'){
        window.location.replace("main.html");
    }else{
        msg.innerText = 'Entered Wrong Username and Password';
    }
    
})
