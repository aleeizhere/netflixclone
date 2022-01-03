const inp = document.getElementById('emailinput');
const pholder = document.getElementById('placeholder');

document.addEventListener('click',(event)=>{
 //returns the element which triggered the event
    if(event.target==inp){
        pholder.setAttribute("id","plchldsmall");
    }else{
        if(inp.value==''){
            pholder.setAttribute("id", "placeholder")
        }
        else{
            pholder.setAttribute("id","plchldsmall")
        }
    }
})