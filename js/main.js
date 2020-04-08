jQuery(document).ready(function(){
    jQuery('.menu-btn').on('click', function(){
        jQuery('body').toggleClass('expand-nav');
    });

    jQuery('.drop > a').each(function(){
        jQuery(this).on('click', function(){
            jQuery(this).toggleClass('current').next('.drop-content').slideToggle();
        });
    });

    

    
        $(window).on("load",function(){
            $(".sidenav").mCustomScrollbar();
        });
    

    $(".sidenav").mCustomScrollbar({
        axis:"y" // vertical scrollbar
    });

    

    jQuery('.card-btn .button').each(function(){

    jQuery (this).on ('click',function(){
        jQuery('.card-navigation').slideUp();
        jQuery(this).next('.card-navigation').slideToggle(); 
         
    });
    });

    jQuery('.card-btn .prog-btn').each(function(){

        jQuery (this).on ('click',function(){
            jQuery('.card-navigation').slideUp();
            jQuery(this).next('.card-navigation').slideToggle(); 
             
        });
        });

        $(window).on("load",function(){
            $(".page-table-content").mCustomScrollbar();
        });
    

    $(".page-table-content").mCustomScrollbar({
        axis:"x" // horizontal scrollbar
    });
});
