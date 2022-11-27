function load() {
    $("#content").append("    <header> <span class='menuversioncomp'> <button id='logo'><a href='index.html'><span class='logo1'>pro</span><i><b>flex</b></i></a></button> <div id='btnsmenu'><button class='menubutt' '><a href='Specialities/Specialities.html'>Specialities</a></button > <button class='menubutt'><a href=''>Just English</a></button> <button class='menubutt'><a href=''>Proflex+</a></button> <button class='btn-hover color-2' >Log in</button></div> </span> <hr> </header>");
    $("#content2").append(" <footer> <div class='bobo'> <div id='stolblog'> <a href='index.html'><span style='font-weight:400;color:var(--main-blue-color);font-style: normal;'>pro</span>flex</a></div> <div style='display:flex'> <div class='stolb' > <div id='aaa' style='display:inline-block'> <div id='stolbcont'> Contact (Polytech) </div> <div>Республика Беларусь<br>г. Гродно, ул. Советских <br>пограничников 2</div> </div> <div id='kkkk'> <a href='mailto:polyteh@mail.grodno.by'><div class='footbtn'>E-mail </div></a> <a href='http://ggpk.by/'><div class='footbtn'>Website</div></a> </div> <div id='mobiicon'> <a href='https://vk.com/club107460874'><div class='vk'></div></a> <a href=' https://www.instagram.com/polytech_grodno/'> <div class='inst'></div> </a> <a href='tel:+375152393602'> <div class='telef'></div> </a> </div> </div> <div class='stolb' id='buttonstolb1'> <a href='Specialities/Specialities.html'><div class='stolbmain' style='text-align:left;'>Specialities</div></a> <div class='stolbbutt'>Programmers</div> <div class='stolbbutt'>Architects</div> <div class='stolbbutt'>Mechanics</div> <div class='stolbbutt'>Builders</div> <div class='stolbbutt'>Electricians</div> <div class='stolbbutt'>Economists</div> </div> <div class='stolb' id='buttonstolb'> <a href=''><div class='stolbmain'>Just English</div></a> <div class='stolbbutt'>Topic one</div> <div class='stolbbutt'>Topic two</div> <div class='stolbbutt'>Topic three</div> <div class='stolbbutt'>Topic four</div> <div class='stolbbutt'>Topic five</div> <div class='stolbbutt'>Topic six</div> </div> <div class='stolb' id='buttonstolb'> <div class='stolbmain' >Proflex+</div> <div class='stolbbutt'>How to use it</div> <div class='stolbbutt'>About the site</div> <div class='stolbbutt'>Our teachers</div> <div class='stolbbutt'>Feedback</div> </div> </div> <center> <div id='stolb3mobo'> <div class='stolbmob'> <a href='Specialities/Specialities.html'><div class='stolbmain' >Specialities</div></a> <div class='stolbbutt'>Programmers</div> <div class='stolbbutt'>Architects</div> <div class='stolbbutt'>Mechanics</div> <div class='stolbbutt'>Builders</div> <div class='stolbbutt'>Electricians</div> <div class='stolbbutt'>Economists</div> </div> <div class='stolbmob' > <a href=''><div class='stolbmain'> Just English</div></a> <div class='stolbbutt'>Topic one</div> <div class='stolbbutt'>Topic two</div> <div class='stolbbutt'>Topic three</div> <div class='stolbbutt'>Topic four</div> <div class='stolbbutt'>Topic five</div> <div class='stolbbutt'>Topic six</div> </div> <div class='stolbmob' > <div class='stolbmain' >Proflex+</div> <div class='stolbbutt'>How to use it</div> <div class='stolbbutt'>About the site</div> <div class='stolbbutt'>Our teachers</div> <div class='stolbbutt'>Feedback</div> <div class='stolbbutt'> </div> <div class='stolbbutt'> </div> </div> </div> </center> <div style='margin-top:2em'> <div id='xz1'> &copy; 2022 All Rights Reserved </div> <div id='xz2'> Made with love by <a id='footerlinks' href='https://vk.com/nanananana_come_on'>Polina</a> </div> </div> </div> </footer>");




 }
    
    window.onload = load;
  function foo(paramId) {

  var clientHeight = document.getElementById('kike').clientHeight;
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

    var clientHeight = document.getElementById('kike').clientHeight;
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



