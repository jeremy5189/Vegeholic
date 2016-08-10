new Vue({
    el: '#recipe-panel',
    data: {
        info: {
            name: '蘇維埃香菇雞肉炒麵',
            img_link: 'img/slide-1.jpg',
            author: {
                name: '蘇維埃共產黨',
                recipe_count: 204,
                fan_count: 1888,
                avatar: 'img/placeholder/us.png'
            },
            stat: {
                view: 2705,
                like: 90,
                reply: 5,
                date: '2016.08.02'
            }
        },
        text: '1950 年代，匈牙利的三明治和蘇聯的三明治有什麼不同呢？匈牙利的三明治是：麵包、麵包、中間再夾一片麵包。蘇聯的三明治是：麵包兌換券、麵包兌換券、中間再夾一張火腿兌換券',
        ingredients: [
            {
                item: '香菇兌換卷',
                amount: '3張'
            },
            {
                item: '雞肉兌換卷',
                amount: '2張'
            },
            {
                item: '乾麵團兌換卷',
                amount: '1張'
            },
            {
                item: '<del>美帝主義</del>檸檬兌換卷<span class="label label-danger">政治不正確警告</span>',
                amount: '1張'
            },
            {
                item: '馬克思共產調味料',
                amount: '5g'
            }
        ],
        steps: [
            {
                img: 'img/new/1.jpg',
                order: '1',
                text: '將香菇兌換卷洗淨切丁'
            },
            {
                img: 'img/new/2.jpg',
                order: '2',
                text: '將雞肉兌換卷丟進人民公社的大鍋子裡面炒熟'
            },
            {
                img: 'img/new/3-fit.png',
                order: '3',
                text: '將乾麵糰兌換卷放進鍋子裡面煮熟'
            },
            {
                img: 'img/new/4.jpg',
                order: '4',
                text: '將上述三樣食材加入鍋中，加入馬克思共產主義調味料炒至香味飄出，然後趕快收好行李站在門口等待 KGB 旅行社，因為偉大的蘇維埃社會主義共和國不會發生兌換卷無法兌換食物的問題，所以你將獲得至西伯利亞旅遊的機會，祝你旅途愉快'
            }
        ]
    }
});
