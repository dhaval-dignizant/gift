<template>
<div>
    <Header />
        <div class="bg-cont pb-5">
            <div class="container pb-5">
                <div class="row">
                    <div class="col-md-12 mt-5 header-top-height">
                        <span class="font-weight-bold relation-color header-respo-size">Relation <img class="pl-2 pr-2"
                                src="@/assets/Resource/ic_left_arrowp.png"><span
                                class="font-weight-bold relation-color header-respo-size">Relation Details<img
                                    class="pl-2 pr-2" src="@/assets/Resource/ic_left_arrowp.png"></span>
                            <span class="text-dark header-respo-size">Edit Selection</span>
                        </span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mt-5">
                        <span class="alignleft">
                            <h4 class="marg font-weight-bold">Choose Gift</h4>
                            <div colspan="2" class="bold-text lineweight w-25">
                                <hr class="line-color">
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="tab" role="tabpanel">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation"><a href="#Section1" class="nav-link active" aria-controls="home" role="tab"
                                        data-toggle="tab">Jewellery</a></li>
                                <li role="presentation"><a href="#Section2" class="nav-link" aria-controls="profile" role="tab"
                                        data-toggle="tab">Flower</a></li>
                                <li role="presentation"><a href="#Section3" class="nav-link"  aria-controls="messages" role="tab"
                                        data-toggle="tab">Chocolate</a></li>
                                <li role="presentation"><a href="#Section3" class="nav-link"  aria-controls="messages" role="tab"
                                        data-toggle="tab">Teddy</a></li>
                                <li role="presentation"><a href="#Section3" class="nav-link"  aria-controls="messages" role="tab"
                                        data-toggle="tab">gift-Cards</a></li>
                            </ul>
                            <!-- Tab panes -->
                            <div class="tab-content tabs" id="myTabContent">
                                <div role="tabpanel" class="tab-pane fade in active show" id="Section1">
                                    <carousel :perPage=1 :autoplay="true" :loop="true"  :navigation-enabled="true"  navigationNextLabel='<span class="carousel-control-next-icon" aria-hidden="true"></span>' navigationPrevLabel='<span class="carousel-control-prev-icon" aria-hidden="true"></span>' :paginationEnabled="false" :spacePadding=5 :perPageCustom=[[780,3]]>
                                        <slide>
                                            <div class="item itemradius">
                                                <div class="shadow-effect">
                                                    <img class="img-responsive itemradiusimag" src="@/assets/img/ring.png"
                                                        alt="">
                                                    <div class="item-details text-center whitecolor itemradiustext">
                                                        <p>Ring</p>
                                                        <p>Jewellery</p>
                                                        <h3>$513</h3>
                                                        <a href="#"
                                                            class="btn but-relation pl-4 pr-5 mt-2 pb-2 tomato-color respo-btn1-slider"
                                                            data-toggle="modal" data-target="#exampleModal">
                                                            <span class="pl-2 text-respo">View
                                                                Details</span>
                                                        </a>
                                                        <a href="#"
                                                            class="btn but-relation pl-4 pr-4 mt-2 mb-2 pb-2 color-purple respo-btn2-slide">
                                                            <span class="pl-2 text-respo">Send this as
                                                                gift</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide>
                                        <slide>
                                            <div class="item itemradius">
                                                <div class="shadow-effect">
                                                    <img class="img-responsive itemradiusimag" src="@/assets/img/flower.png"
                                                        alt="">
                                                    <div class="item-details text-center whitecolor itemradiustext">
                                                        <p>Ring</p>
                                                        <p>Jewellery</p>
                                                        <h3>$513</h3>
                                                        <a href="#"
                                                            class="btn but-relation pl-4 pr-5 mt-2 pb-2 tomato-color respo-btn1-slider"
                                                            data-toggle="modal" data-target="#exampleModal">
                                                            <span class="pl-2 ">View Details</span>
                                                        </a>
                                                        <a href="#"
                                                            class="btn but-relation pl-4 pr-4 mt-2 mb-2 pb-2 color-purple respo-btn2-slide">
                                                            <span class="pl-2 ">Send this as gift</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide>
                                        <slide>
                                            <div class="item itemradius">
                                                <div class="shadow-effect">
                                                    <img class="img-responsive itemradiusimag" src="@/assets/img/ring.png"
                                                        alt="">
                                                    <div class="item-details text-center whitecolor itemradiustext">
                                                        <p>Ring</p>
                                                        <p>Jewellery</p>
                                                        <h3>$513</h3>
                                                        <a href="#"
                                                            class="btn but-relation pl-4 pr-5 mt-2 pb-2 tomato-color respo-btn1-slider"
                                                            data-toggle="modal" data-target="#exampleModal">
                                                            <span class="pl-2 text-respo">View
                                                                Details</span>
                                                        </a>
                                                        <a href="#"
                                                            class="btn but-relation pl-4 pr-4 mt-2 mb-2 pb-2 color-purple respo-btn2-slide">
                                                            <span class="pl-2 text-respo">Send this as
                                                                gift</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide>
                                        <slide>
                                            <div class="item itemradius">
                                                <div class="shadow-effect">
                                                    <img class="img-responsive itemradiusimag" src="@/assets/img/choco.png"
                                                        alt="">
                                                    <div class="item-details text-center whitecolor itemradiustext">
                                                        <p>Ring</p>
                                                        <p>Jewellery</p>
                                                        <h3>$513</h3>
                                                        <a href="#"
                                                            class="btn but-relation pl-4 pr-5 mt-2 pb-2 tomato-color respo-btn1-slider"
                                                            data-toggle="modal" data-target="#exampleModal">
                                                            <span class="pl-2 ">View Details</span>
                                                        </a>
                                                        <a href="#"
                                                            class="btn but-relation pl-4 pr-4 mt-2 mb-2 pb-2 color-purple respo-btn2-slide">
                                                            <span class="pl-2 ">Send this as gift</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </slide>
                                        <slide>
                                            <div class="item itemradius">
                                                <div class="shadow-effect">
                                                    <img class="img-responsive itemradiusimag" src="@/assets/Resource/ic_red_rose.png" alt="">
                                                    <div class="item-details text-center whitecolor itemradiustext">
                                                        <p>Ring</p>
                                                        <p>Jewellery</p>
                                                        <a class="btn firstbutton marginbottom">Select as a
                                                            gift</a>
                                                    </div> 
                                                </div>
                                            </div>
                                        </slide>
                                    </carousel>
                                    <!-- <section class="testimonials  upcoming-backgroundcolor">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div id="customers-testimonials" class="owl-carousel">
                                                        <div class="item itemradius">
                                                            <div class="shadow-effect">
                                                                <img class="img-responsive itemradiusimag" src="@/assets/img/ring.png"
                                                                    alt="">
                                                                <div class="item-details text-center whitecolor itemradiustext">
                                                                    <p>Ring</p>
                                                                    <p>Jewellery</p>
                                                                    <h3>$513</h3>
                                                                    <a href="#"
                                                                        class="btn but-relation pl-4 pr-5 mt-2 pb-2 tomato-color respo-btn1-slider"
                                                                        data-toggle="modal" data-target="#exampleModal">
                                                                        <span class="pl-2 text-respo">View
                                                                            Details</span>
                                                                    </a>
                                                                    <a href="#"
                                                                        class="btn but-relation pl-4 pr-4 mt-2 mb-2 pb-2 color-purple respo-btn2-slide">
                                                                        <span class="pl-2 text-respo">Send this as
                                                                            gift</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item itemradius">
                                                            <div class="shadow-effect">
                                                                <img class="img-responsive itemradiusimag" src="@/assets/img/flower.png"
                                                                    alt="">
                                                                <div class="item-details text-center whitecolor itemradiustext">
                                                                    <p>Ring</p>
                                                                    <p>Jewellery</p>
                                                                    <h3>$513</h3>
                                                                    <a href="#"
                                                                        class="btn but-relation pl-4 pr-5 mt-2 pb-2 tomato-color respo-btn1-slider"
                                                                        data-toggle="modal" data-target="#exampleModal">
                                                                        <span class="pl-2 ">View Details</span>
                                                                    </a>
                                                                    <a href="#"
                                                                        class="btn but-relation pl-4 pr-4 mt-2 mb-2 pb-2 color-purple respo-btn2-slide">
                                                                        <span class="pl-2 ">Send this as gift</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item itemradius">
                                                            <div class="shadow-effect">
                                                                <img class="img-responsive itemradiusimag" src="@/assets/img/ring.png"
                                                                    alt="">
                                                                <div class="item-details text-center whitecolor itemradiustext">
                                                                    <p>Ring</p>
                                                                    <p>Jewellery</p>
                                                                    <h3>$513</h3>
                                                                    <a href="#"
                                                                        class="btn but-relation pl-4 pr-5 mt-2 pb-2 tomato-color respo-btn1-slider"
                                                                        data-toggle="modal" data-target="#exampleModal">
                                                                        <span class="pl-2 text-respo">View
                                                                            Details</span>
                                                                    </a>
                                                                    <a href="#"
                                                                        class="btn but-relation pl-4 pr-4 mt-2 mb-2 pb-2 color-purple respo-btn2-slide">
                                                                        <span class="pl-2 text-respo">Send this as
                                                                            gift</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item itemradius">
                                                            <div class="shadow-effect">
                                                                <img class="img-responsive itemradiusimag" src="@/assets/img/choco.png"
                                                                    alt="">
                                                                <div class="item-details text-center whitecolor itemradiustext">
                                                                    <p>Ring</p>
                                                                    <p>Jewellery</p>
                                                                    <h3>$513</h3>
                                                                    <a href="#"
                                                                        class="btn but-relation pl-4 pr-5 mt-2 pb-2 tomato-color respo-btn1-slider"
                                                                        data-toggle="modal" data-target="#exampleModal">
                                                                        <span class="pl-2 ">View Details</span>
                                                                    </a>
                                                                    <a href="#"
                                                                        class="btn but-relation pl-4 pr-4 mt-2 mb-2 pb-2 color-purple respo-btn2-slide">
                                                                        <span class="pl-2 ">Send this as gift</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section> -->
                                </div>
                                <div role="tabpanel" class="tab-pane fade" id="Section2">
                                    <h3>Section 2</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, magna a
                                        ultricies
                                        volutpat, mi eros viverra massa, vitae consequat nisi justo in tortor. Proin
                                        accumsan felis
                                        ac felis dapibus, non iaculis mi varius.</p>
                                </div>
                                <div role="tabpanel" class="tab-pane fade" id="Section3">
                                    <h3>Section 3</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, magna a
                                        ultricies
                                        volutpat, mi eros viverra massa, vitae consequat nisi justo in tortor. Proin
                                        accumsan felis
                                        ac felis dapibus, non iaculis mi varius.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="row">
                    <div class="col-md-12 mt-5">
                        <span class="alignleft">
                            <h4 class="marg font-weight-bold">Wallet</h4>
                            <div colspan="2" class="bold-text lineweight w-25">
                                <hr class="line-color">
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="container box-shadows bg-white border-radius pb-5">
                <div class="row wallety-total-p">
                    <div class="col-md-9 col-sm-12 wallet-respo-text-center">
                        <table>
                            <tr>
                                <td>
                                    <h5 class="textfont-color mb-0 pb-2 header-respo-size">Total Balance</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5 class="doller-size">$ 550</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>
                                        <a href="#" class="btn but-relation pl-4 pr-4 mt-2 pb-2 wallet-color-addcredit">
                                            <img src="@/assets/Resource/ic_plus.png" class="pb-1">
                                            <span>Add Credit</span>
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#" class="btn but-relation pl-4 pr-4 mt-2 pb-2 color-purple">
                                            <span>View Transaction</span>
                                        </a>
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-md-3">
                        <div class="alignright w-100 vertial-line">
                            <img src="@/assets/Resource/ic_mini_wallet.png" class="img-radius alignright">
                        </div>
                    </div>
                </div>
            </div>
        </div>
     <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'; 
export default {
    components: {
        Header,
        Footer, 
    },
}
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;
 $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 30,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        navText: ['<i class=""></i>', '<i class=""></i>'],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
      });
</script>

<style>

</style>