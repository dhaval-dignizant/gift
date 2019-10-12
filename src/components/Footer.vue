<template>
    <div class="two-color-background p-5 footer-respo-paddingfull">
        <div class="container">
            <div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6 p-2 w-50" style="width: 180px;">
                                <h4 class="marg whitecolortext marginbottom">Giftassister</h4>
                                <p class="footer-li whitecolortext footer-font-size">Giftassister@gmail.com</p>
                                <p class="footer-li whitecolortext footer-font-size">+91 99999 8888</p>
                            </div>
                            <div class="col-md-6 p-2 w-50" style="width: 130px;">
                                <div>
                                    <h4 class="marg font-weight-bold whitecolortext">Servies</h4>
                                    <div colspan="2" class="bold-text lineweight">
                                        <hr class="line-color line-white">
                                    </div>
                                </div>
                                <ul class="list-unstyled">
                                    <li class="footer-li">
                                        <a href="#!" class="whitecolortext footer-font-size">Reminder</a>
                                    </li>
                                    <li class="footer-li">
                                        <a href="#!" class="whitecolortext footer-font-size">Gift Send</a>
                                    </li>
                                    <li class="footer-li">
                                        <router-link to="/wallet" class="whitecolortext footer-font-size">Wallet</router-link>
                                        <!-- <a href="#!" class="whitecolortext footer-font-size">Wallet</a> -->
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="row">
                            <div class="col-md-6 p-2 w-50">
                                <div>
                                    <h4 class="marg font-weight-bold whitecolortext">About us</h4>
                                    <div colspan="2" class="bold-text lineweight">
                                        <hr class="line-color line-white">
                                    </div>
                                </div>
                                <ul class="list-unstyled">
                                    <li class="footer-li">
                                        <!-- <a href="aboutus.html" class="whitecolortext footer-font-size">About</a> -->
                                        <router-link to="/aboutus" class="whitecolortext footer-font-size">About</router-link>
                                    </li>
                                    <li class="footer-li">
                                        <!-- <a href="PrivacyPolicy.html" class="whitecolortext footer-font-size">Privacy Policy</a> -->
                                        <router-link to="/privacypolicy" class="whitecolortext footer-font-size">Privacy Policy</router-link>
                                    </li>
                                    <li class="footer-li">
                                        <router-link to="/termsandcondition" class="whitecolortext footer-font-size">Term & Condtions</router-link>
                                        <!-- <a href="termandconditions.html" class="whitecolortext footer-font-size">Term & Condtions</a> -->
                                    </li>
                                    <li class="footer-li">
                                        <router-link to="/contactus" class="whitecolortext footer-font-size">Contact Us</router-link>
                                        <!-- <a href="contactus.html" class="whitecolortext footer-font-size">Contact Us</a> -->
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6 p-2 w-50">
                                <div>
                                    <h4 class="marg font-weight-bold whitecolortext">Our Address</h4>
                                    <div colspan="2" class="bold-text lineweight">
                                        <hr class="line-color line-white">
                                    </div>
                                </div>
                                <p class="footer-li whitecolortext footer-font-size">00 Orville Road Apt 728
                                    California,USA
                                </p>
                                <span>
                                    <img src="@/assets/img/ic_facebook.png" alt="Avatar" class="avatar social-icon">
                                    <img src="@/assets/img/ic_twitter.png" alt="Avatar" class="avatar social-icon">
                                    <img src="@/assets/img/ic_google_plus.png" alt="Avatar" class="avatar social-icon">
                                    <img src="@/assets/img/ic_insta.png" alt="Avatar" class="avatar social-icon">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="whitecolor">
                <div class="footer-copyright text-center py-3 text-white">© 2019 Copyright all right reserved
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>