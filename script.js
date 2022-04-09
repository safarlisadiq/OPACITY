let images = document.querySelectorAll('img');
let inp = document.querySelectorAll('input');


inp[0].addEventListener('change', (e)=>{

         let val1 = inp[0].value;
         for(let i=0; i<images.length; i++){

            images[i].style.opacity = val1;
        }
        console.log(val1);

});
inp[1].addEventListener('change', (e)=>{

    let val2 = inp[1].value;
    for(let i=0; i<images.length; i++){

        images[i].style.borderRadius = val2+'%';
    
    }
    console.log(val2);
})
// helelik cox sagol tekrar buyur getdim

