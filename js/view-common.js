$(window).load(function() {
	// Animate loader off screen
	$(".loading-icon").fadeOut("slow");;
});

var navbar = new Vue({
	el: '#navbar-wrap',
	data: {
		system_name: '全植食尚',
		buttons: [
			{
				title: '回首頁',
				links: 'index.html'
			},
			{
				title: '找食譜',
				links: 'recipe.html'
			},
			{
				title: '讀食記',
				links: '#blog.html'
			},
			{
				title: '逛市集',
				links: '#market.html'
			},
			{
				title: '看影片',
				links: '#video.html'
			}
		]
	}
});
