
  
  //todo -------- responsive navbar design --------
  let bar = document.querySelector('.bar');
  let dropdown = document.querySelector('.responsive-navbar');
  
  bar.addEventListener('click', ()=>{
    if(dropdown.style.display == 'none'){
      dropdown.style.display = 'inline';
    }
    else{
      dropdown.style.display = 'none';
    }
  });

