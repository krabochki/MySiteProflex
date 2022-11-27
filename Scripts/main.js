
  function DoesItCurrent(paramId) {

  var clientHeight = document.getElementById('HeightH2').clientHeight;
  var btn = document.getElementById(paramId);
  var k=paramId;
  k = k.replace('z','');
  const pNum = k;
  document.querySelector(`div[class="${pNum}"]`) && window.scrollTo(0, document.querySelector(`div[class="${pNum}"]`).offsetTop-clientHeight+48);
  btn.classList.add("kiki");
  

  }
  
  


$(document).scroll(function(e){
    
var k='1z';
var z=0;

for (let i = 1; i <= 10; i++) { // выводит 0, затем 1, затем 2
var btn = document.getElementById(k);

    var clientHeight = document.getElementById('HeightH2').clientHeight;
    var bound_top = $(this).scrollTop();
        $(document.getElementsByClassName(i)).each(function(){
            if( 
                $(this).position().top  <= bound_top  + clientHeight -25 &&
                $(this).position().top + $(this).outerHeight()  - clientHeight +25>= bound_top
            )   
                {
                    btn.classList.add("kiki");
                }

            else{
                btn.classList.remove("kiki");
            }
        });
    
k = k.replace('z','');
k++;
k=k+'z';
z++;
    }




});



