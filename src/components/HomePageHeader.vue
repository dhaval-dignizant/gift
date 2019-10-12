<template>
  <div>
    <header>
        <div class="header-area ">
            <div class="container">
                <div id="sticky-header" class="main-header-area" style="padding: 0px">
                    <div class="container-fluid p-0">
                        <div class="row align-items-center no-gutters"></div>
                        <nav class="navbar navbar-expand-lg navbar-light  static-top">
                            <div class="container">
                                <router-link to="/" class="nav-link text-dark">
                                    <img src="@/assets/img/ic_gif.png" class="logo-img" alt="">
                                    <span class="m-1 mt-2 font-weight-bold logo-text">GIFTASSUISTER</span>
                                </router-link>
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarResponsive" aria-controls="navbarResponsive"
                                    aria-expanded="false" @click="mobile_menu=!mobile_menu" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse my-navbar set-header-color" id="navbarResponsive">
                                    <ul class="navbar-nav mx-auto my-nav">
                                        <li class="nav-item active my-menu-option">
                                            <router-link to="/" class="nav-link text-dark">HOME</router-link>
                                            <!-- <a class="nav-link text-dark" href="index.html">HOME
                                                <span class="sr-only">(current)</span>
                                            </a> -->
                                        </li>
                                        <li class="nav-item my-menu-option">
                                            <!-- <a class="nav-link text-dark" href="Relationlist.html">RELATION</a> -->
                                            <router-link to="/relation" class="nav-link text-dark">RELATION</router-link>
                                        </li>
                                        <li class="nav-item my-menu-option">
                                            <router-link to="/wallet" class="nav-link text-dark">WALLET</router-link>
                                        </li>
                                        <li class="nav-item my-menu-option">
                                            <router-link to="/setting" class="nav-link text-dark">SETTINGS</router-link>
                                        </li>
                                        <li class="nav-item my-menu-option">
                                            <router-link to="/contactus" class="nav-link text-dark">CONTACT US</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- header-end -->

    <!-- slider_area_start -->
    <div class="slider_area">
        <!-- <img src="img/ic_image_1.png" alt="Los Angeles" style="width:100%;"> -->
        <img src="@/assets/img/ic_slider_top.png" class="slider-main-top-image" alt="Los Angeles">
        <div id="carouselExampleIndicators" class="carousel slide main-slider" data-ride="carousel">
            <a class="carousel-control-prev slider-option" href="#carouselExampleIndicators" role="button"
                data-slide="prev">
                <span class="carousel-control-prev-icon" v-if="mobile_menu == true" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next slider-option" v-if="mobile_menu == true" href="#carouselExampleIndicators" role="button"
                data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container">
                        <div class=" text-left ftco-animate respo-slider">
                            <h3 class="slider-header respo-slider-text-header">GIFTASSUISTER</h3>
                            <pre class="header-menu-color respo-silder-text">
ipsum dolor sit amet,111 consectetur adipisicing elit
ipsum dolor sit amet,111 consectetur adipisicing elit
ipsum dolor sit amet,111 consectetur adipisicing elit
                            </pre>
                            <a href="#" class="btn slider-btn repso-btn">Explore Now</a>
                        </div>
                    </div>
                    <img class="d-block w-100 fullscreen-height" src="@/assets/img/ic_slider.png" alt="First slide">
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class=" text-left ftco-animate respo-slider">
                            <h3 class="slider-header respo-slider-text-header">GIFTASSUISTER</h3>
                            <pre class="header-menu-color respo-silder-text">
ipsum dolor sit amet,111 consectetur adipisicing elit
ipsum dolor sit amet,111 consectetur adipisicing elit
ipsum dolor sit amet,111 consectetur adipisicing elit
                                                </pre>
                            <a href="#" class="btn slider-btn repso-btn">Explore Now</a>
                        </div>
                    </div>
                    <img class="d-block w-100 fullscreen-height" src="@/assets/img/ic_slider.png" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class=" text-left ftco-animate respo-slider">
                            <h3 class="slider-header respo-slider-text-header">GIFTASSUISTER</h3>
                            <pre class="header-menu-color respo-silder-text">
ipsum dolor sit amet,111 consectetur adipisicing elit
ipsum dolor sit amet,111 consectetur adipisicing elit
ipsum dolor sit amet,111 consectetur adipisicing elit
                                            </pre>
                            <a href="#" class="btn slider-btn repso-btn">Explore Now</a>
                        </div>
                    </div>
                    <img class="d-block w-100 fullscreen-height" src="@/assets/img/ic_slider.png" alt="Third slide">
                </div>
            </div>
            <!-- <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol> -->
        </div>
        <img src="@/assets/img/ic_slider_bottom.png" class="slider-bottom-main-image" alt="Los Angeles">
    </div>
  </div>
</template>

<script>

  export default {
    data: () => ({
        mobile_menu: true,
        
    }),
  }
</script>

<style scoped>
.router-link-exact-active{
    color: #ff7676 !important;
}
.logo-text {
    color: white !important;
}
</style>