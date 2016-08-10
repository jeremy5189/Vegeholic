var v_recipe_list = new Vue({
    el: '#recipe_list',
    data: {
        recipe_list: [{
            title: 'Mexican Drink',
            image_path: 'img/recipe/1.png',
            author_avatar: 'img/placeholder/us.png',
            author_name: 'Donald J. Trump',
            link: 'recipe-example.html?id=1'
        }, {
            title: 'Special Interest Fruit',
            image_path: 'img/recipe/2.png',
            author_avatar: 'img/placeholder/uk.png',
            author_name: 'Hillary Clinton',
            link: 'recipe-example.html?id=2'
        }, {
            title: 'Exile Salad',
            image_path: 'img/recipe/3.png',
            author_avatar: 'img/placeholder/ur.png',
            author_name: 'Fethullah Gülen',
            link: 'recipe-example.html?id=3'
        }, {
            title: 'Ottoman Empire Drink',
            image_path: 'img/recipe/4.png',
            author_avatar: 'img/placeholder/ir.png',
            author_name: 'Recep Tayyip Erdoğan',
            link: 'recipe-example.html?id=4'
        }, ]
    }
});

var v_recipe_row = new Vue({
    el: '#recipe_row',
});
