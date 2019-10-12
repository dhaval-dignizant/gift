<template>
<div>
    <Header />
    <div class="bg-cont">
        <div class="container pb-1">
            <div class="row">
                <div class="col-md-12 mt-5 header-top-height">
                    <span class="alignleft">
                        <h4 class="marg font-weight-bold header-respo-size">Relation</h4>
                        <div colspan="2" class="bold-text lineweight w-50">
                            <hr class="line-color">
                        </div>
                    </span>
                    <span class="alignright">
                        <a href="#" class="btn but-relation pl-4 pr-4">
                            <img src="@/assets/Resource/ic_add_relation.png">
                            <span class="pl-2">Add Relation</span>
                        </a>
                    </span>
                </div>
            </div>
            <div class="container bg-white box-shadows border-radius mb-5 p-md-2">
                <div class="row">
                    <div class="col-md-12 ">
                        <div class="header">
                            <a @click="filter=!filter"><i class="fa fa-ellipsis-v action-icon" aria-hidden="true"></i></a>  
                            <div class="dropdown">
                                <div v-if="filter == true" class="dropdown-content popup-menu-set show" >
                                    <a href="#" class="edit-delete-zindex color-editdelete respo-editdelete">Edit</a>
                                    <a href="#" class="edit-delete-zindex color-editdelete respo-editdelete">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="col-md-12 ">
                        <div class="mb-5 bg-white ml-2">
                            <div class="row">
                                <div class="col-md-1 relation-respo-padding-avatar">
                                    <img src="@/assets/img/avatar5.png" alt="Avatar" class="avatar mt-0 img-set">
                                </div>
                                <div class="col-md-11 relation-respo-padding-avatar-text">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5 class="textfont-color mb-0">Jenny Doe</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p class="card-text font-weight-bold">Wife</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5 class="textfont-color mb-0">Birthday</h5>
                                                </td>
                                                <td class="pl-2 pr-2">:</td>
                                                <td>25-09-2009</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5 class="textfont-color mb-0">Anniversary</h5>
                                                </td>
                                                <td class="pl-2 pr-2">:</td>
                                                <td>2-11-2009</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container bg-white box-shadows border-radius p-md-2 pb-5 mb-5">
                <div class="row">
                    <div class="col-md-12 ">
                        <div class="header">
                            <a @click="filter3=!filter3"><i class="fa fa-ellipsis-v action-icon" aria-hidden="true"></i></a>  
                            <div class="dropdown">
                                <div v-if="filter3 == true" class="dropdown-content popup-menu-set show" >
                                    <a href="#" class="edit-delete-zindex color-editdelete respo-editdelete">Edit</a>
                                    <a href="#" class="edit-delete-zindex color-editdelete respo-editdelete">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="col-md-12 ">
                        <div class=" mb-4 bg-white ml-2">
                            <div class="row">
                                <div class="col-md-1 col-sm-3 relation-respo-padding-avatar">
                                    <img src="@/assets/img/avatar5.png" alt="Avatar" class="avatar mt-0 img-set">
                                </div>
                                <div class="col-md-11 col-sm-9 relation-respo-padding-avatar-text">
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
                                                    <h5 class="textfont-color mb-0">Birthday</h5>
                                                </td>
                                                <td class="pl-2 pr-2">:</td>
                                                <td>25-09-2009</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="color-purple-line-bg">
                <div class="row">
                    <div class="col-md-12 ">
                        <span>
                            <h4 class="marg font-weight-bold pl-2">Selected Gift</h4>
                        </span>
                    </div>
                </div>
                <div class="row mb-4 pt-2 pl-2">
                    <div class="col-md-3">
                        <img src="@/assets/Resource/Mask Group 4.png" class="img-radius w-100">
                    </div>
                    <div class="col-md-6">
                        <table>
                            <tr>
                                <td>
                                    <h5 class="textfont-color mb-0 pb-2 pt-2">Candy Coating Chocolate</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="card-text font-weight-bold pb-2">Chocolate</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5 class="textfont-color mb-0 pb-2">$ 30</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <router-link to="/editrelation" class="btn but-relation pl-4 pr-4 mt-2 bg-color-gift-btn pb-2"><span class="pl-2">Edit Selection</span></router-link>
                                    <!-- <a href="editselection.html" class="btn but-relation pl-4 pr-4 mt-2 bg-color-gift-btn pb-2">
                                        <span class="pl-2">Edit Selection</span>
                                    </a> -->
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-md-3 pt-2">
                        <img src="@/assets/Resource/wish  message.png" class="img-radius" data-toggle="modal" data-target="#exampleModalCenter">
                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title font-weight-bold" id="exampleModalLongTitle">Wish Message</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label  class="font-weight-bold text-dark">Add Custom Wish Message</label>
                                            <textarea class="form-control rounded-0" placeholder="Enter Message" rows="6"></textarea>
                                        </div>
                                    </div>
                                    <div class="modal-footer border-0">
                                        <button type="button" class="btn border-radius-popup-btn text-white tomato-color w-25" data-dismiss="modal">Edit</button>
                                        <button type="button" class="btn color-purple border-radius-popup-btn text-white w-25">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container bg-white box-shadows border-radius mb-5 p-md-2">
                <div class="row">
                    <div class="col-md-12 ">
                        <div class="header">
                            <a @click="filter2=!filter2"><i class="fa fa-ellipsis-v action-icon" aria-hidden="true"></i></a>  
                            <div class="dropdown">
                                <!-- <ul class="dropbtn icons btn-right" onclick="showDropdown2()">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul> -->
                                 
                                <div v-if="filter2 == true" class="dropdown-content popup-menu-set show" style="z-index:1;position:relative;">
                                    <a href="#" class="edit-delete-zindex color-editdelete respo-editdelete">Edit</a>
                                    <a href="#" class="edit-delete-zindex color-editdelete respo-editdelete">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="col-md-12 ">
                        <div class="mb-5 bg-white ml-2">
                            <div class="row">
                                <div class="col-md-1 relation-respo-padding-avatar">
                                    <img src="@/assets/img/avatar5.png" alt="Avatar" class="avatar mt-0 img-set">
                                </div>
                                <div class="col-md-11 relation-respo-padding-avatar-text">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5 class="textfont-color mb-0">Jenny Doe</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p class="card-text font-weight-bold">Wife</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5 class="textfont-color mb-0">Birthday</h5>
                                                </td>
                                                <td class="pl-2 pr-2">:</td>
                                                <td>25-09-2009</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5 class="textfont-color mb-0">Anniversary</h5>
                                                </td>
                                                <td class="pl-2 pr-2">:</td>
                                                <td>2-11-2009</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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
    data: () => ({
        filter: false,
        filter2: false,
        filter3: false,
    }),

    methods: {
        /* showFilter() {
            alert("s");
            this.filter = false;
        },
        hideFilter() {
            alert("h");
            this.filter = true;
        },

        filtersMethod() {
            return this.filter ? this.showFilter() : this.hideFilter();
        } */
    }
}
window.$ = window.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
</script>

<style>

</style>