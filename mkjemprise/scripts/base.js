function showOther(indicator){

  if (indicator == 0) {
    //add animation class to body to transition into next page
    window.location.href= "../MKJENTERPRISES/MKJENTERPRISES.html"
  }

  else if (indicator == 1) {
    //add animation class to body to transition into next page
    window.location.href= "../MKJFORROS/MKJFORROS.html"
  }
  
  else if (indicator == 2) {
    //add animation class to body to transition into next page
    window.location.href= "../MKJMUSIC/MKJMUSIC.HTML"
  }

  else if (indicator == 3) {
    //add animation class to body to transition into next page  
    window.location.href= "../MKJENTERPRISES/contacts.html"
  }

  else if (indicator == 4) {
    //add animation class to body to transition into next page
    window.location.href= "../MKJENTERPRISES/patrons.html"
  }
}
function link(url){
  window.location.href= String(url)
}

function submitRequest(){
  const request = document.getElementById('exampleInputText1').value
  console.log(request);
}
