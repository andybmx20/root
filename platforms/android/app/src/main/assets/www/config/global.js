let user, today, dd, mm, yyyy, week_id;

let parola;

let root_url = "https://citygrillgroup.jobs";

function 	fetch_config(response)
{
	user = response;
}
function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

function getAdresa()
{
  var adresa = "";


if("street" in user)
  if(user.street)
    adresa += "Str " + user.street

if("street_no" in user)
  if(user.street_no)
    adresa += ", Nr " + user.street_no

if("stair" in user)
  if(user.stair)
    adresa += ", Sc " + user.stair

if("flat" in user)
  if(user.flat)
    adresa += ", Et " + user.flat

if("flat" in user)
  if(user.floor)
    adresa += ", Ap " + user.floor

  return adresa;

}

function    fetch_poziti(query, json)
{
  if(typeof json == "string")
    json = JSON.parse(json);
  if(!json)
    return;
  for(var i=0;i<json.length;i++)
  {
     var option = "<option value=" + json[i].id + ">" + json[i].pozitie + "</option>"
    $(query).append(option)
  }
}

function      expand_filters()
{
    if($("#arrow").hasClass("fa-arrow-up"))
    {
        $($(".filters")[0]).addClass("expand");
        $($("#arrow")).removeClass("fa-arrow-up");
        $($("#arrow")).addClass("fa-arrow-down")
    }else
    {
        $($(".filters")[0]).removeClass("expand");
        $($("#arrow")).addClass("fa-arrow-up");
        $($("#arrow")).removeClass("fa-arrow-down")
    }
}


function route(id)
{
  console.log(id)
  if(id==101)
        window.location.href="./oferite.html"
  if(id==100)
        window.location.href = "./referalnote.html"
  if(id==155)
        window.location.href = "./comenzi.html"
  if(id=="rn")
    window.location.href = "./ratingnote.html"
  if(id==1)
    window.location.href = "./agendamealogat.html"
  if(id==2)
    window.location.href = "./interval_rest.html"
  if(id==3)
    window.location.href = "./gestiune_necesar.html"
  if(id==4)
    window.location.href = "./ocupare.html"
  if(id==5)
    window.location.href = "./prezenta_restaurant.html"
  if(id==7)
    window.location.href = "./notificari.html"
  if(id==8)
    window.location.href = "./gamification.html"
  if(id==9)
    window.location.href = "./referal.html"
  if(id==10)
    window.location.href = "./rating.html"
  if(id==11)
    window.location.href = "./contul.html"
  if(id==12)
    window.location.href = "./ajutor.html"
  if(id==14)
    window.location.href = "./prezenta_mea.html"
  if(id==15)
    window.location.href = "./premi.html"
  if(id=="a")
    window.location.href = "./alerta_angajat.html"
  if(id=="p")
    window.location.href = "./profile.html"
  if(id=="e")
    window.location.href = "./profile_edit.html"
  if(id == 81)
        window.location.href = "./clasament1.html"

  if(id=="13") {
    localStorage.clear()
      window.location.href = "./login.html"
  }
  if(id=="re")
      window.location.href = "./register.html"
}


function openLoader()
{
    console.log("loader")
    $("[data-role*='page']").append('<div class="svg-container"> <img src="./img/gif.gif"/> </div>')
    $("[data-role*='page']").css("background", "#8a8a8a")
    $(".app").css("opacity", "0.2")
}

function closeLoader()
{
  $(".svg-container").remove()
  $("[data-role*='page']").css("background", "unset")
    $(".app").css("opacity", "1")

}

function openNav(select) {
          document.getElementsByClassName("closebtn")[0].style.display = "block"


    var user = window.localStorage.getItem('user');
    if(typeof user == "string")
        user = JSON.parse(user);
  menu = user.menu;
  document.getElementById("mySidenav").style.left = "0px";
        document.getElementsByClassName("closebtn")[0].style.display = "block"

if(document.getElementById("menuz").childNodes.length < 4)
  for(var i=0;i<menu.length;i++)
  {
    console.log(menu[i]);

    var a = document.createElement("a");
    var div = document.createElement("div");

    if(select == menu[i].id)
      $(div).addClass("selected")

    div.setAttribute("id", "route(" + menu[i].id + ")")
    div.setAttribute("onclick", "route(" + menu[i].id + ")")

    $(div).append(menu[i].icon);
    a.innerText = menu[i].title;
    $(div).append(a);
    $("#menuz").append(div);
  }

  /*

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>


</table>


  */

//document.getElementById("headernav").children[2].children[0].innerHTML = '</th><i class="fas fa-crown"></i></th></tr></table>'

//document.getElementById("imgbor").children[0].src = "https://banner2.kisspng.com/20180319/xrq/kisspng-computer-icons-user-profile-clip-art-person-icon-user-person-man-icon-5ab04a2bed2dd1.5439408315215027639715.jpg"

document.getElementById("fullname").innerText = user.firstname + ' ' + user.lastname;
document.getElementById("fullimg").src = root_url + user.image
}



function closeNav() {
  document.getElementById("mySidenav").style.left = "-10050px";
  document.getElementsByClassName("closebtn")[0].style.display = "none"
}

function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo;
}

function get_compani()
{
  if(window.localStorage.getItem('compani'))
    return

  $.ajax
      ({
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Basic " + btoa(user.username + ":" + window.localStorage.getItem('parola')));
    },
        type: "GET",
        url: root_url + "/api/companii",
        dataType: 'json',
        async: true,
        success: function (e){
        console.log(e)
        window.localStorage.setItem("compani", JSON.stringify(e));


        }
    });
}


function    get_countries()
{
   if(window.localStorage.getItem('countries'))
    return

    $.ajax
      ({
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Basic " + btoa(user.username + ":" + window.localStorage.getItem('parola')));
    },
        type: "GET",
        url: root_url + "/api/counties",
        dataType: 'json',
        async: true,
        success: function (a){
                console.log(a)
                window.localStorage.setItem("countries", JSON.stringify(a));
        }
    });
}


$( ".row1 .title" ).click(function() {
  openNav()
});


function      get_poziti()
{
  if(window.localStorage.getItem('poziti'))
    return;

      $.ajax
      ({
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Basic " + btoa(user.username + ":" + window.localStorage.getItem('parola')));
    },
        type: "GET",
        url: root_url + "/api/pozitii",
        dataType: 'json',
        async: true,
        success: function (a){
                console.log(a)
                window.localStorage.setItem("poziti", JSON.stringify(a));
        }
    });
}

function   get_restaurant_by_brand(ids)
{


}

function get_brands()
{
  if(window.localStorage.getItem('brands'))
    return

  $.ajax
      ({
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Basic " + btoa(user.username + ":" + window.localStorage.getItem('parola')));
    },
        type: "GET",
        url: root_url + "/api/brands",
        dataType: 'json',
        async: true,
        success: function (e){
        console.log(e)
        window.localStorage.setItem("brands", JSON.stringify(e));


        }
    });
}

function get_brands()
{
  if(window.localStorage.getItem('all_brands'))
    return

  $.ajax
      ({
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Basic " + btoa(user.username + ":" + window.localStorage.getItem('parola')));
    },
        type: "GET",
        url: root_url + "/api/get-all-brands",
        dataType: 'json',
        async: true,
        success: function (e){
        console.log(e)
        window.localStorage.setItem("all_brands", JSON.stringify(e));


        }
    });
}

  function  get_restaurants()
  {

  if(window.localStorage.getItem('restaurants'))
    return

  $.ajax
      ({
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Basic " + btoa(user.username + ":" + window.localStorage.getItem('parola')));
    },
        type: "GET",
        url: root_url + "/api/get-all-restaurants",
        dataType: 'json',
        async: true,
        success: function (e){
        console.log(e)
        window.localStorage.setItem("restaurants", JSON.stringify(e));


        }
    });
  }

function getUser()
{
    user = JSON.parse(window.localStorage.getItem('user'))
  parola = window.localStorage.getItem('parola')

$( ".row1 .title" ).click(function() {
  openNav()
});

  today = new Date();
  dd = String(today.getDate()).padStart(2, '0');
  mm = String(today.getMonth() + 1).padStart(2, '0');
  yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  get_compani();
  get_brands();
 // get_poziti();
  get_countries();
  get_restaurants();
  return window.localStorage.getItem('user');
}
