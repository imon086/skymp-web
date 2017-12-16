import './style.styl';

$(() => {
    $('#navbar .nav-link').each((k, v) => {
        let $v = $(v);
        if ($v.data('routeName') === location.route) {
            $v.addClass('active');
        } else {
            $v.removeClass('active');
        }
    });
});
