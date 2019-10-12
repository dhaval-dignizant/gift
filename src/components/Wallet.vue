<template>
<div>
    <Header />
    <div class="bg-cont">
            <div class="container pb-5">
                <div class="row">
                    <div class="col-md-12 mt-5">
                    </div>
                </div>
                <div class="container bg-white box-shadows border-radius  p-md-2">
                    <div class="row p-2 wallety-total-p">
                        <div class="col-md-9 wallet-respo-text-center text-center">
                            <table>
                                <tr>
                                    <td>
                                        <h5 class="textfont-color mb-0 pb-2 header-respo-size">Total Balance</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="doller-size">$ 600</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <router-link to="/addcredit" class="btn but-relation pl-4 pr-4 mt-2 pb-2 wallet-color-addcredit">
                                           <!--  <a href="#" class="btn but-relation pl-4 pr-4 mt-2 pb-2 wallet-color-addcredit"> -->
                                                <img src="@/assets/Resource/ic_plus.png">
                                                <span>Add Credit</span>
                                            </router-link>
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
            <div class="container pb-5 wallet-header-respo-bottom">
                <div class="row p-2">
                    <div class="col-md-12 ">
                        <span>
                            <h4 class="marg font-weight-bold header-respo-size">Set Percentage of the Budget</h4>
                            <div colspan="2" class="bold-text lineweight">
                                <hr class="line-color">
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="container pb-4">
                <div class="container  bg-white border-radius box-shadows p-md-2 mb-4">
                    <div class="p-4 mb-4  bg-white">
                        <div class="row pt-2">
                            <div class="col-md-1 relation-respo-padding-avatar">
                                <img src="@/assets/img/avatar5.png" alt="Avatar" class="avatar mt-0 img-set">
                            </div>
                            <div class="col-md-3 relation-respo-padding-avatar-text">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5 class="textfont-color mb-0">Jenny doe</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="card-text font-weight-bold">Wife</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="textfont-color mb-0">Available balance</h5>
                                            </td>
                                            <td class="pl-2 pr-2 padding-avtar-text">:</td>
                                            <td>$ 300</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-5 pl-0 pb-3">
                                <div class="progress mt-5 progres-h-radius">
                                    <div class="progress-bar progress-color w-50" style="width: 50%"></div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <span>
                                    <h4 class="marg font-weight-bold mb-0 color-purple-header">Percentage of Budget</h4>
                                    <span>
                                        <span class="alignleft">
                                            <h5 class="percentage-size">50%</h5>
                                        </span>
                                        <span>
                                            <img src="@/assets/Resource/ic_down_arrow.png" style="margin-top: 25px;">
                                        </span>
                                    </span>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container bg-white border-radius box-shadows p-md-2 mb-4">
                    <div class="p-4 mb-4 bg-white">
                        <div class="row pt-2">
                            <div class="col-md-1 relation-respo-padding-avatar">
                                <img src="@/assets/img/avatar5.png" alt="Avatar" class="avatar mt-0 img-set">
                            </div>
                            <div class="col-md-3 relation-respo-padding-avatar-text">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5 class="textfont-color mb-0">Sam</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="card-text font-weight-bold">Son</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="textfont-color mb-0">Available balance</h5>
                                            </td>
                                            <td class="pl-2 pr-2">:</td>
                                            <td>$ 150</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-5 pl-0 pb-3">
                                <div class="progress mt-5 progres-h-radius">
                                    <div class="progress-bar progress-color w-25"></div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <span>
                                    <h4 class="marg font-weight-bold mb-0 color-purple-header">Percentage of Budget</h4>
                                    <span>
                                        <span class="alignleft">
                                            <h5 class="percentage-size">25%</h5>
                                        </span>
                                        <span>
                                            <img src="@/assets/Resource/ic_down_arrow.png" style="margin-top: 25px;">
                                        </span>
                                    </span>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container bg-white border-radius box-shadows p-md-2 mb-4">
                    <div class="p-4 mb-4 bg-white">
                        <div class="row pt-2">
                            <div class="col-md-1 relation-respo-padding-avatar">
                                <img src="@/assets/img/avatar5.png" alt="Avatar" class="avatar mt-0 img-set">
                            </div>
                            <div class="col-md-3 relation-respo-padding-avatar-text">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5 class="textfont-color mb-0">Melissa</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="card-text font-weight-bold">Daughter</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="textfont-color mb-0">Available balance</h5>
                                            </td>
                                            <td class="pl-2 pr-2">:</td>
                                            <td>$ 150</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-5 pl-0 pb-3">
                                <div class="progress mt-5 progres-h-radius">
                                    <div class="progress-bar progress-color w-25"></div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <span>
                                    <h4 class="marg font-weight-bold mb-0 color-purple-header">Percentage of Budget</h4>
                                    <span>
                                        <span class="alignleft">
                                            <h5 class="percentage-size">25%</h5>
                                        </span>
                                        <span>
                                            <img src="@/assets/Resource/ic_down_arrow.png" style="margin-top: 25px;">
                                        </span>
                                    </span>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container ">
                <div class="row">
                    <div class="col-md-12 ">
                        <span>
                            <h4 class="marg font-weight-bold header-respo-size">Transaction History</h4>
                            <div colspan="2" class="bold-text lineweight">
                                <hr class="line-color">
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="container pb-5 wallet-padding-repso-bottom">
                <div class="container border-radius  p-md-2">
                    <table class="table table-borderless all-table-respo">
                        <thead class="set-color">
                            <!-- <tr class="text-white table-border-color color-purple"> -->
                            <tr class="text-white table-border-color color-purple">
                                <th scope="col" class="border-less">Date</th>
                                <th scope="col" class="border-less">Relation</th>
                                <th scope="col" class="border-less">Name</th>
                                <th scope="col" class="border-less">Event</th>
                                <th scope="col" class="border-less">Gift Category</th>
                                <th scope="col" class="border-less">Gift Item</th>
                                <th scope="col" class="border-less">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white table-border-color">
                                <td class="border-less green-color">Mark</td>
                                <td class="border-less green-color">Otto</td>
                                <td class="border-less green-color">@mdo</td>
                                <td class="border-less green-color">@mdo</td>
                                <td class="border-less green-color">@mdo</td>
                                <td class="border-less green-color">@mdo</td>
                                <td class="border-less green-color">@mdo</td>
                            </tr>
                            <tr class="bg-white table-border-color">
                                <td class="border-less">Mark</td>
                                <td class="border-less">Otto</td>
                                <td class="border-less">@mdo</td>
                                <td class="border-less">@mdo</td>
                                <td class="border-less">@mdo</td>
                                <td class="border-less">@mdo</td>
                                <td class="border-less">@mdo</td>
                            </tr>
                            <tr class="bg-white table-border-color">
                                <td class="border-less">Mark</td>
                                <td class="border-less">Otto</td>
                                <td class="border-less">@mdo</td>
                                <td class="border-less">@mdo</td>
                                <td class="border-less">@mdo</td>
                                <td class="border-less">@mdo</td>
                                <td class="border-less">@mdo</td>
                            </tr>
                            <tr class="bg-white table-border-color">
                                <td class="border-less green-color">Mark</td>
                                <td class="border-less green-color">Otto</td>
                                <td class="border-less green-color">@mdo</td>
                                <td class="border-less green-color">@mdo</td>
                                <td class="border-less green-color">@mdo</td>
                                <td class="border-less green-color">@mdo</td>
                                <td class="border-less green-color">@mdo</td>
                            </tr>
                            <tr class="bg-white table-border-color">
                                <td class="border-less">Mark</td>
                                <td class="border-less">Otto</td>
                                <td class="border-less">@mdo</td>
                                <td class="border-less">@mdo</td>
                                <td class="border-less">@mdo</td>
                                <td class="border-less">@mdo</td>
                                <td class="border-less">@mdo</td>
                            </tr>
                        </tbody>
                    </table>
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