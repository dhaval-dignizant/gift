<template>
  <div class="container w-50 reg-height">
        <div class="row">
            <div class="col-md-7 login-form-1 border-radius-login-left">
                <div class="row">
                    <div class="col-md-12 ">
                        <h4 class="marg font-weight-bold ">Register</h4>
                        <div colspan="2" class="bold-text lineweight">
                            <hr class="line-color mb-0 mt-0">
                        </div>
                    </div>
                    <div class="col-md-12 mt-4 ">
                        <form action="">
                            <div class="form-group">
                                <label  class="font-weight-bold text-dark">First Name:</label>
                                <input type="name" class="form-control"  placeholder="Enter here">
                            </div>
                            <div class="form-group">
                                <label  class="font-weight-bold text-dark">Last Name:</label>
                                <input type="name" class="form-control"  placeholder="Enter here">
                            </div>
                            <div class="form-group">
                                <label  class="font-weight-bold text-dark">Username:</label>
                                <input type="name" class="form-control"  placeholder="Enter here">
                            </div>
                            <div class="form-group">
                                <label  class="font-weight-bold text-dark">Phone:</label>
                                <input type="name" class="form-control"  placeholder="Enter here">
                            </div>
                            <div class="form-group">
                                <label  class="font-weight-bold text-dark">Email:</label>
                                <input type="email" class="form-control"  placeholder="Enter here">
                            </div>
                            <div class="form-group">
                                <label for="pwd" class="font-weight-bold text-dark">Password:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Enter here">
                            </div>
                            <div class="form-group">
                                <label for="pwd" class="font-weight-bold text-dark">Confirm Password:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Enter here">
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btnSubmit w-100" value="Register" />
                            </div>
                            <div class="form-group text-right ">
                               <!--  <a href="login.html" class="ForgetPwd text-muted opacity">Don't have an account? Login</a> -->
                                <router-link to="/login" class="ForgetPwd text-muted opacity">Don't have an account? Login</router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-5 login-form-2 border-radius-login-right reg-login-form-icon">

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