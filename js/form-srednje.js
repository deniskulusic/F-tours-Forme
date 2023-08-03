var currentTab = 0;
showTab(currentTab); 

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "grid";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Sljedeći korak";
  } else {
    document.getElementById("nextBtn").innerHTML = "Sljedeći korak";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  var y = document.getElementById("regForm");
  // Exit the function if any field in the current tab is invalid:
  
  // Hide the current tab:
  
  // Increase or decrease the current tab by 1:
  if (n == 1 && !validateForm()) return false;
  window.scrollTo(0, 0);
  // if you have reached the end of the form... :
  if (currentTab >= x.length-1 && n==1) {
    //...the form gets submitted:
    x[2].style.display = "grid";
    x[3].style.display = "grid";
    y.classList.add("form-check");
    document.getElementById("prevBtn").style.display = "none";
    var nextb=document.getElementById("nextBtn")
    nextb.innerHTML = "Pošalji prijavu";
    nextb.addEventListener('click',function(){
      const success=document.querySelector(".success");
        success.classList.toggle("active-upit");
        
    });
    
  }
  else{
    
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    showTab(currentTab);
  }
  // Otherwise, display the correct tab:
  
  
}
var closeform=document.querySelectorAll(".upit-button-close , .background-s");
for( var j=0;j<closeform.length;j++){
  closeform[j].addEventListener('click',function(){
    document.getElementById("regForm").submit();
    console.log("yo")
  });}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y,z,zx,yx,xy, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].querySelectorAll("input , select");
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var validnum = /^[\+]?[0-9]{3}[(][0-9]{1}?[)][0-9]{2}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
  if(currentTab==1){
    z=x[currentTab].querySelector(".checkbox input");
    zx=x[currentTab].querySelector(".checkbox label");
    if(z.checked==false){
        valid = false;
        zx.className += " invalid";
    }
    
  }
  if(currentTab==2){
    yx=x[currentTab].querySelectorAll('input[name="spol"]');
    xy=x[currentTab].querySelectorAll(".big label");
    if(!(yx[0].checked ||yx[1].checked)){
      valid = false;
      for(var j=0;j<yx.length;j++){
        xy[j].className += " invalid";
      }
    }
    
    if(!(y[3].value.match(validRegex))){
      y[3].className += " invalid";
      valid = false;

    }
    if(!(y[2].value.match(validnum))){
      y[2].className += " invalid";
      valid = false;
    }
    
  }
  if(currentTab==3){
   var qw=x[currentTab].querySelectorAll('input[name="vrstaputneisprave"]');
   var tw=x[currentTab].querySelectorAll('input[name="suglas"]');
   var wq=x[currentTab].querySelectorAll(".big label");
   var zw=x[currentTab].querySelectorAll(".checkbox input");
   var zq=x[currentTab].querySelectorAll(".checkbox label");
    if(zw[0].checked==false){
        valid = false;
        zq[0].className += " invalid";
    }
    if(zw[1].checked==false){
      valid = false;
      zq[1].className += " invalid";
  }
    if(!(qw[0].checked ||qw[1].checked)){
      valid = false;
      for(var j=0;j<2;j++){
        wq[j].className += " invalid";
      }
    }

    if(!(y[5].value.match(validRegex))){
      y[5].className += " invalid";
      valid = false;
    }
    if(!(y[4].value.match(validnum))){
      y[4].className += " invalid";
      valid = false;
    }
    
    if(!(tw[0].checked ||tw[1].checked)){
      valid = false;
      for(var j=2;j<4;j++){
        wq[j].className += " invalid";
      }
    }
  }
 
  
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
      
    }
    
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  else{
    window.scrollTo(0, 0);
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active-u", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active-u";
}

var select=document.querySelectorAll("select");
for(i=0;i<select.length;i++){
  
    select[i].addEventListener('change',function(){
        this.classList.add("active-option");
        
    })
    if(select[i].value!=""){
        select[i].classList.add("active-option");
    }
    
}

var x = document.getElementsByClassName("tab");
  var z=x[1].querySelector(".checkbox input");
  var zx=x[1].querySelector(".checkbox label");
  z.addEventListener('click',function(){
    zx.classList.remove("invalid");
  });
  var yx=x[2].querySelectorAll('input[name="spol"]');
   var xy=x[2].querySelectorAll(".big label");
      for(var j=0;j<yx.length;j++){
        yx[j].addEventListener('click',function(){
          xy[0].classList.remove("invalid")
          xy[1].classList.remove("invalid")
          
        });
      }
      var qw=x[3].querySelectorAll('input[name="vrstaputneisprave"]');
      var tw=x[3].querySelectorAll('input[name="suglas"]');
      var wq=x[3].querySelectorAll(".big label");
       for(var j=0;j<qw.length;j++){
        qw[j].addEventListener('click',function(){
          wq[0].classList.remove("invalid")
          wq[1].classList.remove("invalid")
          
        });
      }
      for(var j=0;j<tw.length;j++){
        tw[j].addEventListener('click',function(){
          wq[2].classList.remove("invalid")
          wq[3].classList.remove("invalid")
          
        });
      }
      var zq=x[3].querySelectorAll(".checkbox input");
      var zw=x[3].querySelectorAll(".checkbox label");
      zq[0].addEventListener('click',function(){
        zw[0].classList.remove("invalid");
      });
      zq[1].addEventListener('click',function(){
        zw[1].classList.remove("invalid");
      });
      
     
    var ShowMore=document.getElementById("show-more");
      var ShowMoreText=document.querySelector(".show-more-text");
      var ShowMoreCount=0;
      ShowMore.addEventListener('click',function(){
        ShowMoreText.classList.toggle("show-more-active");
        if(ShowMoreCount%2==0){
          ShowMore.innerHTML="Prikaži više";
        }
        else{
          ShowMore.innerHTML="Prikaži manje";
        }
        ShowMoreCount++;
      });

     
      
      var PdfDiv=document.querySelector(".pdf-choose");
      const iconElement =  document.querySelector('#pdf-pop');
     
     if(PdfDiv.value!=""){
      iconElement.classList.remove("hidden");
      
      }
     PdfDiv.addEventListener('input',function(){
      iconElement.classList.remove("hidden");
      
    });