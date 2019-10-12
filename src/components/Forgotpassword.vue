
<template>
    <div class="container login-container forgot-padding-top">
        <div class="row">
            <div class="col-md-6 login-form-1 border-radius-login-left">
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="marg font-weight-bold ">Forgot Password?</h4>
                        <div colspan="2" class="bold-text lineweight">
                            <hr class="line-color mb-0 mt-0">
                        </div>
                    </div>
                    <div class="col-md-12 mt-4 ">
                        <form action="">
                            <div class="form-group">
                                <span class="ForgetPwd text-muted opacity">Enter your Register Email
                                    to get new Password</span>
                            </div>
                            <div class="form-group">
                                <label for="email" class="font-weight-bold text-dark">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Your Email">
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btnSubmit w-100" value="Send" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6 login-form-2 border-radius-login-right forget-pwd-icon">

                <img src="@/assets/Resource/ic_login_logo.png" alt="">

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>