var v_recipe_list = new Vue({
    el: '#recipe_list',
    data: {
        recipe_list: [{
            title: 'Mexican Drink',
            image_path: 'img/recipe/1.png',
            author_avatar: 'https://pbs.twimg.com/profile_images/650405543782121473/XyWJo5Xn.jpg',
            author_name: 'Donald J. Trump',
            link: 'recipe-example.html?id=1'
        }, {
            title: 'Special Interest Fruit',
            image_path: 'img/recipe/2.png',
            author_avatar: 'https://static-s.aa-cdn.net/img/ios/1084057530/54ff19e976e0eda8b92fca8d42a3e142?v=1',
            author_name: 'Hillary Clinton',
            link: 'recipe-example.html?id=2'
        }, {
            title: 'Exile Salad',
            image_path: 'img/recipe/3.png',
            author_avatar: 'https://pbs.twimg.com/profile_images/730873252554412032/5-w-A3rn.jpg',
            author_name: 'Fethullah Gülen',
            link: 'recipe-example.html?id=3'
        }, {
            title: 'Ottoman Empire Drink',
            image_path: 'img/recipe/4.png',
            author_avatar: 'http://media.nu.nl/m/bttxhhza2kig_sqr256.jpg/erdogan-wil-leger-en-inlichtingendienst-turkije-aanvoeren.jpg',
            author_name: 'Recep Tayyip Erdoğan',
            link: 'recipe-example.html?id=4'
        }, ]
    }
});

var v_recipe_row = new Vue({
    el: '#recipe_row',
});
