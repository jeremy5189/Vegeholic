$(window).load(function() {
	// Animate loader off screen
	$(".loading-icon").fadeOut("slow");;
});
$(function(){
	$('#sticky_navbar').hide();
});
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // Do something
	//console.log(scroll);
	if( scroll < 130 ) {
		$('#sticky_navbar').hide();
		//$('#great_navbar').show();
	} else {
		// 顯示 sticky_navbar
		$('#sticky_navbar').show();
		//$('#great_navbar').hide();
	}
});

var navbar = new Vue({
	el: '.navbar-wrap',
	data: {
		system_name: '全植食尚',
		buttons: [
			{
				title: '回首頁 Homepage',
				links: 'index.html'
			},
			{
				title: '找食譜 Recipe',
				links: 'recipe.html'
			},
			{
				title: '讀食記 Blog',
				links: '#blog.html'
			},
			{
				title: '逛市集 Market',
				links: '#market.html'
			},
			{
				title: '看影片 Videos',
				links: '#video.html'
			}
		]
	}
});
