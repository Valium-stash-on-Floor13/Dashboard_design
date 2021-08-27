let links= document.querySelectorAll('.sidebar-menu li a')

links.addEventListener('click', (e)=>{
    e.preventDeafult();
links.forEach(link=>{
    
    console.log('hi');
    })
})