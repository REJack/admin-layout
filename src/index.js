import $ from 'jquery'

import '../node_modules/admin-lte/dist/js/adminlte.min.js'
import './scss/style.scss';

$(document).ready(function () {
    $('body').Layout('init');
    $('.sidebar-toggle-btn').PushMenu();
});
