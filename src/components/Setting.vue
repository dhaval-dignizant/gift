<template>
    <div>
        <Header />
        <div class="bg-cont">
            <div class="container pb-5">
                <div class="row">
                    <div class="col-md-12 mt-5 setting-header-margin">
                        <span class="alignleft">
                            <h4 class="marg font-weight-bold header-respo-size">Setting</h4>
                            <div colspan="2" class="bold-text lineweight w-25">
                                <hr class="line-color">
                            </div>
                        </span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <ul class="responsive-table">
                            <li data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1" class="table-row table-li-data setting-padding mb-1 pl-3" >
                                <img src="@/assets/Resource/ic_my_account.png">
                                <div class="pt-2 col setting-side-menu-text">My Account</div>
                            </li>
                            <li data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2" class="table-row table-li-data setting-padding mb-1 pl-3">
                                <img src="@/assets/Resource/ic_notification.png">
                                <div class="col setting-side-menu-text pt-2">Notification</div>
                            </li>
                            <li data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3" class="table-row table-li-data setting-padding mb-1 pl-3">
                                <img src="@/assets/Resource/ic_payment.png">
                                <div class="col setting-side-menu-text-payment pt-2">Payment</div>
                            </li>
                            <li data-toggle="collapse" data-target="#collapse4" aria-expanded="true" aria-controls="collapse4" class="table-row table-li-data setting-padding mb-1 pl-3">
                                <img src="@/assets/Resource/ic_address.png">
                                <div class="col setting-side-menu-text-address pt-2">Address</div>
                            </li>
                            <router-link to="/login">
                                <li data-toggle="collapse" data-target="#collapse5" aria-expanded="true" aria-controls="collapse5" class="table-row table-li-data setting-padding mb-1 pl-3">
                                    <img src="@/assets/Resource/ic_logout.png">
                                    <div class="col setting-side-menu-text-logout pt-2">Logout</div>
                                </li>
                            </router-link>
                        </ul>
                    </div>
                    <div class="col-md-9">
                        <div class="bg-cont" id="settingtab">
                            <div id="collapse1" data-parent="#settingtab" class="collapse show container pb-5 respo-padding">
                                <div class="container bg-white box-shadows border-radius p-md-4  ">
                                    <div class="row pt-3">
                                        <div class="col-md-12 ml-3">
                                            <h4 class="marg font-weight-bold">My Account</h4>
                                            <div colspan="2" class="bold-text lineweight">
                                                <hr class="line-color">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 ">
                                            <div class="mb-4 bg-white cardradius">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <form action="">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="font-weight-bold text-dark">First
                                                                            Name:</label>
                                                                        <input class="form-control rounded-0"
                                                                            placeholder="Enter here">
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label class="font-weight-bold text-dark">Last
                                                                            Email:</label>
                                                                        <input class="form-control rounded-0"
                                                                            placeholder="Enter here">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="font-weight-bold text-dark">Username:</label>
                                                                <input class="form-control rounded-0"
                                                                    placeholder="Enter here">
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="font-weight-bold text-dark">Phone:</label>
                                                                <input class="form-control rounded-0"
                                                                    placeholder="Enter here">
                                                            </div>
                                                            <div class="form-group">
                                                                <label class="font-weight-bold text-dark">Email
                                                                    Address:</label>
                                                                <input class="form-control rounded-0"
                                                                    placeholder="Enter here">
                                                            </div>
                                                        </form>
                                                        <div class="row mt-4 mb-2">
                                                            <div class="col-md-12">
                                                                <h4 class="marg font-weight-bold">Change Password</h4>
                                                                <div colspan="2" class="bold-text lineweight">
                                                                    <hr class="line-color">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="font-weight-bold text-dark">Current
                                                                Password:</label>
                                                            <input class="form-control rounded-0" placeholder="Enter here">
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="font-weight-bold text-dark">New
                                                                        Password:</label>
                                                                    <input class="form-control rounded-0"
                                                                        placeholder="Enter here">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="font-weight-bold text-dark">Confirm
                                                                        Password:</label>
                                                                    <input class="form-control rounded-0"
                                                                        placeholder="Enter here">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" class="btn but-relation pl-4 pr-4">
                                                            <span class="pl-2">Save Changes</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="collapse4" data-parent="#settingtab" class="collapse container pb-5 respo-padding">
                                <div class="container bg-white box-shadows border-radius p-5 setting-address-respo-padding">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <span class="alignleft">
                                                <h4 class="marg font-weight-bold header-respo-size">Address</h4>
                                                <div colspan="2" class="bold-text lineweight w-50">
                                                    <hr class="line-color">
                                                </div>
                                            </span>
                                            <span class="alignright">
                                                <a href="#" class="btn but-relation pl-3 pr-3">
                                                    <img src="@/assets/Resource/ic_add_relation.png">
                                                    <span class="pl-2">Add Address</span>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="row pt-3">
                                        <div class="col-lg-12 col-sm-12 mb-3">
                                            <div class="card add-credit-radius">
                                                <div class="card-body">
                                                    <span>
                                                        <img src="@/assets/Resource/ic_checkbox.png" class="pb-3">
                                                    </span>
                                                    <h4 class="marg color-purple-color font-weight-bold">Joen Doe</h4>
                                                    <h4 class="marg">1135 Market st, suite Jenny France CA 94103 </h4>
                                                        <h4 class="marg">mobile:(123)456-7890 </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-sm-12 mb-3">
                                            <div class="card add-credit-radius">
                                                <div class="card-body">
                                                    <span>
                                                        <img src="@/assets/Resource/ic_uncheckbox.png" class="pb-3">
                                                    </span>
                                                    <h4 class="marg color-purple-color font-weight-bold">Joen Doe</h4>
                                                <h4 class="marg">1135 Market st, suite Jenny France CA 94103 </h4>
                                                <h4 class="marg">mobile:(123)456-7890 </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="btn but-relation pl-5 pr-5 mt-3">
                                        <span class="pl-2">Save Change</span>
                                    </a>
                                </div>
                            </div>
                            <!-- notification -->
                            <div id="collapse2" data-parent="#settingtab" class="collapse container respo-padding">
                                <div class="radius-notifiction box-shadows">
                                    <div class="container bg-white p-3 line">
                                        <div class="row">
                                            <div class="col-md-1 setting-notification-avatar">
                                                <img src="@/assets/Resource/ic_seting_gift.png" alt="Avatar" class="mt-2">
                                            </div>
                                            <div class="col-md-11 setting-notification-avatar-text">
                                                <p class="mb-0 notification-text">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.
                                                    Lorem Ipsum has been the industry's standard
                                                    dummy text ever since the 1500s, when an</p>
                                                <p class="mb-0 color-date font-weight-bold">25-09-2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container bg-white p-3 line">
                                        <div class="row">
                                            <div class="col-md-1 setting-notification-avatar">
                                                <img src="@/assets/Resource/ic_seting_gift.png" alt="Avatar" class="mt-2">
                                            </div>
                                            <div class="col-md-11 setting-notification-avatar-text">
                                                <p class="mb-0 notification-text">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.
                                                    Lorem Ipsum has been the industry's standard
                                                    dummy text ever since the 1500s, when an</p>
                                                <p class="mb-0 color-date font-weight-bold">25-09-2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container bg-white p-3 line">
                                        <div class="row">
                                            <div class="col-md-1 setting-notification-avatar">
                                                <img src="@/assets/Resource/ic_seting_gift.png" alt="Avatar" class="mt-2">
                                            </div>
                                            <div class="col-md-11 setting-notification-avatar-text">
                                                <p class="mb-0 notification-text">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.
                                                    Lorem Ipsum has been the industry's standard
                                                    dummy text ever since the 1500s, when an</p>
                                                <p class="mb-0 color-date font-weight-bold">25-09-2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container bg-white p-3 line">
                                        <div class="row">
                                            <div class="col-md-1 setting-notification-avatar">
                                                <img src="@/assets/Resource/ic_seting_gift.png" alt="Avatar" class="mt-2">
                                            </div>
                                            <div class="col-md-11 setting-notification-avatar-text">
                                                <p class="mb-0 notification-text">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.
                                                    Lorem Ipsum has been the industry's standard
                                                    dummy text ever since the 1500s, when an</p>
                                                <p class="mb-0 color-date font-weight-bold">25-09-2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container bg-white p-3 line">
                                        <div class="row">
                                            <div class="col-md-1 setting-notification-avatar">
                                                <img src="@/assets/Resource/ic_seting_gift.png" alt="Avatar" class="mt-2">
                                            </div>
                                            <div class="col-md-11 setting-notification-avatar-text">
                                                <p class="mb-0 notification-text">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.
                                                    Lorem Ipsum has been the industry's standard
                                                    dummy text ever since the 1500s, when an</p>
                                                <p class="mb-0 color-date font-weight-bold">25-09-2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container bg-white p-3 line">
                                        <div class="row">
                                            <div class="col-md-1 setting-notification-avatar">
                                                <img src="@/assets/Resource/ic_seting_gift.png" alt="Avatar" class="mt-2">
                                            </div>
                                            <div class="col-md-11 setting-notification-avatar-text">
                                                <p class="mb-0 notification-text">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.
                                                    Lorem Ipsum has been the industry's standard
                                                    dummy text ever since the 1500s, when an</p>
                                                <p class="mb-0 color-date font-weight-bold">25-09-2018</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end notification -->
                            <!-- Payment -->
                            <div id="collapse3" data-parent="#settingtab" class="collapse container pb-5 respo-padding">
                                <div class="container bg-white box-shadows border-radius p-5 setting-payment-respo-padding">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <span class="alignleft">
                                                <h4 class="marg font-weight-bold">Payment</h4>
                                                <div colspan="2" class="bold-text lineweight w-50">
                                                    <hr class="line-color">
                                                </div>
                                            </span>
                                            <span class="alignright">
                                                <a href="#" class="btn but-relation pl-4 pr-4">
                                                    <img src="@/assets/Resource/ic_add_relation.png">
                                                    <span class="pl-2">Add Card</span>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="row pt-3">
                                        <div class="col-lg-6 col-sm-6 pb-3">
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
                                    <a href="#" class="btn but-relation pl-5 pr-5 mt-5">
                                        <span class="pl-2">Save Change</span>
                                    </a>
                                </div>
                            </div>
                            <!-- end Payment -->
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