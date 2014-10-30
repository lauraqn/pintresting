// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .


// asynchronous - can make additional web requests without refreshing everything
function ajax() {
    var xmlhttp; 
 
    xmlhttp = new XMLHttpRequest();
 
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 ) { //means the request is being completed
           if(xmlhttp.status == 200){ //everything is okay!
               document.getElementById("response").innerHTML = xmlhttp.responseText;
           }
           else if(xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    }
 
    xmlhttp.open("GET", "/pages/ajax", true);
    xmlhttp.send();
}