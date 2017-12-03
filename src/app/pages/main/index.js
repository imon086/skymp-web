import 'app/vendor.js';
import './style.styl';

var t = 0;
setInterval(() => {
    $('#timer').html(t++);
}, 1000);
