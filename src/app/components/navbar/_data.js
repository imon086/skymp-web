module.exports = {
    menu: [
        {name: 'main', url: '/', title: 'Новости'},
        {name: 'forum', url: 'http://skymp.ru/forum/', title: 'Форум'},
        {name: 'about', url: '/about', title: 'Особенности'},
        {name: 'support', url: '#support', title: 'Поддержка'},
        {name: 'shop', url: '#shop', title: 'Магазин'},
        {name: 'profile', url: '#profile', title: 'Профиль'}
    ]
};

const staticPages = true;
if (staticPages) {
    module.exports.menu.forEach((v) => {
        if (v.url[0] === '/' && v.url.length > 1) v.url += '.html';
    });
}
