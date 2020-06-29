$(document).ready(function () {
    $('.login').on('click',function () {
        $('.login-wrapper').fadeIn()
    })
    $('.dark-mask').on('click',function () {
        $('.login-wrapper').fadeOut()
    })
    $('.btn-login').on('click',function () {
        $('.login-homepage').fadeOut(),
        $('.login-page').fadeIn()
    })
    $('.last-page').on('click',function () {
        $('.login-page').fadeOut(),
        $('.login-homepage').fadeIn()
    })
});

