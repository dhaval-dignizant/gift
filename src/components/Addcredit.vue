<template>
    <div>
        <Header />
        <div class="bg-cont">
            <div class="container pb-5">
                <div class="row">
                    <div class="col-md-12 mt-5 addcredit-header-margin">
                        <span class="font-weight-bold color-addcredit-wallet header-respo-size">Wallet <img class="pl-2 pr-2"
                                src="@/assets/Resource/ic_left_arrowp.png">
                            <sapn class="text-dark">Add Credit</sapn>
                        </span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mt-5 addcredit-header-margin">
                        <span class="alignleft">
                            <h4 class="marg font-weight-bold">Add Credit to Wallet</h4>
                            <div colspan="2" class="bold-text lineweight w-25">
                                <hr class="line-color">
                            </div>
                        </span>
                    </div>
                </div>
                <div class="container bg-white box-shadows border-radius p-md-4 mt-4 addcredit-header-margin">
                    <div class="row">
                        <div class="col-md-12 ">
                            <div class="mb-4 bg-white cardradius">
                                <div class="row">
                                    <div class="col-md-12">
                                        <form action="">
                                            <div class="form-group">
                                                <label class="font-weight-bold text-dark">Enter Amount:</label>
                                                <input class="form-control" id="email" placeholder="Enter here">
                                            </div>
                                            <div class="form-group">
                                                <label class="font-weight-bold text-dark">Comfirm Amount:</label>
                                                <input class="form-control" id="pwd" placeholder="Enter here">
                                            </div>
                                            <div class="form-group">
                                                <label class="font-weight-bold text-dark">Reason for Credit
                                                    (optional)</label>
                                                <input class="form-control" id="pwd" placeholder="Enter here">
                                            </div>
                                        </form>
                                        <div class="row">
                                            <div class="col-md-12 mt-4 addcredit-header-margin">
                                                <span class="alignleft">
                                                    <h4 class="marg font-weight-bold">Select Payment Card</h4>
                                                    <div colspan="2" class="bold-text lineweight w-50">
                                                        <hr class="line-color">
                                                    </div>
                                                </span>
                                                <span class="alignright">
                                                    <a href="#" class="btn but-relation pl-4 pr-4 mb-2">
                                                        <img src="@/assets/Resource/ic_add_relation.png">
                                                        <span class="pl-2">Add Card</span>
                                                    </a>
                                                </span>
                                                <!-- <i class="fa fa-check-circle"></i> -->
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6 col-sm-6 pb-2">
                                                <div class="card add-credit-radius">
                                                    <div class="card-body">
                                                        <span>
                                                            <img src="@/assets/Resource/ic_checkbox.png" class="pb-3">
                                                        </span>
                                                        <h4 class="marg">Joen Doe</h4>
                                                        <h4 class="marg">05-22</h4>
                                                        <span class="alignleft">
                                                            <h4 class="marg">8989 9898 8989 xxxx</h4>
                                                        </span>
                                                        <span class="alignright">
                                                            <img src="@/assets/Resource/Ic_mastercard.png">
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-sm-6">
                                                <div class="card add-credit-radius">
                                                    <div class="card-body">
                                                        <span>
                                                            <img src="@/assets/Resource/ic_uncheckbox.png" class="pb-3">
                                                        </span>
                                                        <h4 class="marg">Joen Doe</h4>
                                                        <h4 class="marg">05-22</h4>
                                                        <span class="alignleft">
                                                            <h4 class="marg">8989 9898 8989 xxxx</h4>
                                                        </span>
                                                        <span class="alignright">
                                                            <img src="@/assets/Resource/Ic_visa.png">
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="btn but-relation pl-5 pr-5 mt-5 addcredit-header-margin">
                                    <span class="pl-2">Add</span>
                                </a>
                            </div>
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
</script>

<style>

</style>