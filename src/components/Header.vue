<template>
<div>
    <header>
        <div id="sticky-header" style="padding: 0px">
            <div class="container-fluid p-0">
                <div class="row align-items-center no-gutters"></div>
                <nav class=" navbar navbar-expand-lg navbar-dark color-purple static-top">
                    <div class="container">
                        <router-link to="/" class="navbar-brand">
                            <img src="@/assets/img/ic_gif.png" alt="">
                            <span class="m-15 font-size-15 font-weight-bold">GIFTASSUISTER</span>

                        </router-link >
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <router-link  to="/" class="nav-link text-dark">HOME</router-link>
                                    <!-- <a class="nav-link" href="index.html">HOME
                                        <span class="sr-only">(current)</span>
                                    </a> -->
                                </li>
                                <li class="nav-item">
                                    <!-- <a class="nav-link" href="Relationlist.html">RELTION</a> -->
                                    <router-link to="/relation" class="nav-link text-dark">RELATION</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/wallet" class="nav-link text-dark">WALLET</router-link>
                                    <!-- <a class="nav-link" href="">WALLET</a> -->
                                </li>
                                <li class="nav-item">
                                    <router-link to="/setting" class="nav-link text-dark">SETTINGS</router-link>
                                    <!-- <a class="nav-link" href="#">SETTINGS</a> -->
                                </li>
                                <li class="nav-item">
                                    <router-link to="/contactus" class="nav-link text-dark">CONTACT US</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        
    </header>
</div>  
</template>

<script>
global.jQuery = require('jquery');
var $ = global.jQuery;
$(window).on('scroll', function () {
    $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $('#back-top').fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $('#back-top').fadeIn(500);
    }
  });
     var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol: '-'
      });
    }
});
export default {

}
</script>

<style scoped>
.router-link-exact-active{
	color: #fff !important;
}
</style>