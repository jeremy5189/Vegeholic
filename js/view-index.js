$(function() {

    $(document).on('keypress', '#recipe_search', function(event) {
        if( event.keyCode == 13 ) {
            location.href = 'recipe.html';
        }
    });

    $(document).on('click', '.activity_items_link', function(event) {

        // Prevent Jump to top
        event.preventDefault();

        var id = $(this).data('id');
        var img_path = $('#activity_items_row_' + id + ' img').attr('src');

        console.log(id + ': ' + img_path);

        var current_tmp = {
            img_path: $('#current_image').attr('src'),
            title: $('#current_title').html(),
            desc: $('#current_desc').html(),
            'id': id
        }

        console.log(current_tmp);

        $('#current_image').attr('src', img_path);
        $('#current_title').html(vue_activity_items.activities[id-1].title);
        $('#current_desc').html(vue_activity_items.activities[id-1].desc);

        vue_activity_items.activities[id-1] = current_tmp;
        $(this).html(current_tmp.title);
        $('#activity_items_row_' + id + ' img').attr('src', current_tmp.img_path);

    });
});

var vue_activity_items = new Vue({
    el: '.activity_items',
    data: {
        activities: [
            {
                img_path: 'img/activity/activity_2.jpg',
                title: 'Vegan Meetup 蔬食好朋友聚餐',
                desc: '由臉書社團 Taipei Vegan Meetup 所舉辦，一起來認識新朋友、嘗遍全臺北的純素餐廳！',
                id: '1',
            },
            {
                img_path: 'img/activity/activity_3.jpg',
                title: 'Kid\'s English Cooking Class 全美語兒童廚藝教室',
                desc: '教導孩子們用全植物性的健康食材做出營養美味的甜點、飲品，除了讓孩子從實作中學習英文、體驗自己做甜點的快樂，更讓孩子們認識健康飲食的重要！',
                id: '2',
            },
            {
                img_path: 'img/activity/activity_4.jpg',
                title: 'Summer Smoothie Party 夏日繽紛果昔派對',
                desc: '酷熱的夏天，讓"大學生愛健康"告訴你如何打出繽紛美味、健康滿分的蔬果昔！',
                id: '3',
            },
        ]
    }
});

var vue_popular_recipe = new Vue({
  el: '#popular_recipe',
  data: {
    popular_recipe: [
        {
            title: 'Mexican Drink',
            image_path: 'img/recipe/1.png',
            author_avatar: 'https://pbs.twimg.com/profile_images/650405543782121473/XyWJo5Xn.jpg',
            author_name: 'Donald J. Trump',
            link: '#'
        },
        {
            title: 'Special Interest Fruit',
            image_path: 'img/recipe/2.png',
            author_avatar: 'https://static-s.aa-cdn.net/img/ios/1084057530/54ff19e976e0eda8b92fca8d42a3e142?v=1',
            author_name: 'Hillary Clinton',
            link: '#'
        },
        {
            title: 'Exile Salad',
            image_path: 'img/recipe/3.png',
            author_avatar: 'https://pbs.twimg.com/profile_images/730873252554412032/5-w-A3rn.jpg',
            author_name: 'Fethullah Gülen',
            link: '#'
        },
        {
            title: 'Ottoman Empire Drink',
            image_path: 'img/recipe/4.png',
            author_avatar: 'http://media.nu.nl/m/bttxhhza2kig_sqr256.jpg/erdogan-wil-leger-en-inlichtingendienst-turkije-aanvoeren.jpg',
            author_name: 'Recep Tayyip Erdoğan',
            link: '#'
        },
    ]
  }
});
