// selecting items
const qty = document.querySelectorAll("#qty"); 
const btnplus = document.querySelectorAll("#btn-plus");
const btnmoin = document.querySelectorAll("#btn-moins");
const delbtn = document.querySelectorAll("#btn5");
const card = document.querySelectorAll(".card-body");
const prix = document.querySelectorAll("#prix");
const img = document.querySelectorAll(".img");

// + operation
 qty.forEach(add) ;
function add(e,i,qty){
    btnplus[i].addEventListener("click",function(){
        let quantity =parseInt(qty[i].innerHTML);
        if (!isNaN(quantity)) {
            
            qty[i].innerHTML = quantity + 1;
           
        }
    })
     
}


    
  // - operation  
  qty.forEach(subs) ;
  function subs(e,i,qty){
      btnmoin[i].addEventListener("click",function(){
          let quantity =parseInt(qty[i].innerHTML);
          if (!isNaN(quantity)) {
              
              qty[i].innerHTML = quantity - 1;
              
          }
      })
      
  }

  // delete operation
  
  
  /*
function del(e,i,card) {
img[i].addEventListener("click",function(){
card[i].parentElement.remove(card[i]);

})}
card.forEach(del) ;
*/
// total price :
prix.forEach(function totl(elem,i,prix) {
    let quantity =parseInt(qty[i].innerHTML);
     let pris = parseInt(prix[i].innerHTML);
     let totpris =(quantity*pris) ;
   

})
console.log(prix.innerHTML);

