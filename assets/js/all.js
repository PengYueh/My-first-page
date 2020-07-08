$(document).ready(function () {
    $('#login').on('click',function () {
        $('.login-wrapper').fadeIn()
    })
    $('.dark-mask').on('click',function () {
        $('.login-wrapper').fadeOut()
    })
    $('.btn-login').on('click',function () {
        $('.login-homepage').toggle(),
        $('.login-page').toggle()
    })
    $('.last-page').on('click',function () {
        $('.login-page').toggle(),
        $('.login-homepage').toggle()
    })


    $('#logout').on('click',function(){
        firebase.auth().signOut().then(function(){
            window.location.reload()
        })
    })

    $('#logout').hide()
    $('#login').hide()

    firebase.auth().onAuthStateChanged(
        function(user){
           if(user){
                $('#logout').show()
                $('#login').hide()
                            
            }else{
                $('#login').show()
                $('#logout').hide()
            } 
        }        
    )



});

