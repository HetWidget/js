
$(document).ready(function(){$(".tab_content").hide();$("ul.tabs li:first").addClass("active").show();$(".tab_content:first").show();$("ul.tabs li").click(function(){$("ul.tabs li").removeClass("active");$(this).addClass("active");$(".tab_content").hide();var activeTab=$(this).find("a").attr("href");$(activeTab).fadeIn();return false})});

function openchat(){new _uWnd('chat','РњРёРЅРё-С‡Р°С‚',300,100,{align:0,shadow:0,close:1,autosize:1,maxh:500,minh:100,resize:0},$("#chat").html())}function openpoll(){new _uWnd('polls','РћРїСЂРѕСЃ',200,100,{align:0,shadow:0,close:1,autosize:1,maxh:500,minh:100,resize:0},$("#poll").html())}
