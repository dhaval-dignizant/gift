<template>
  <div>
        <Header />
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2211.279026496714!2d72.85674993282392!3d21.23528979968675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1569556145234!5m2!1sen!2sin" class="w-100" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
        <div class="bg-cont">
            <div class="container pb-5">
                <div class="row">
                    <div class="col-md-12 mt-5 contactus-repos-margin">
                        <h4 class="marg font-weight-bold header-respo-size">Contact Us</h4>
                        <div colspan="2" class="bold-text lineweight">
                            <hr class="line-color">
                        </div>
                    </div>
                </div>
                <div class="container bg-white box-shadows border-radius p-md-4 mt-4 contactus-repos-margin">
                    <div class="row">
                        <div class="col-md-12 ">
                            <div class="mb-4 bg-white contactus-form">
                                <div class="row">
                                    <div class="col-md-12">
                                        <form action="">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-bold text-dark">Name:</label>
                                                        <input class="form-control rounded-0" placeholder="Enter here">
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="font-weight-bold text-dark">Email:</label>
                                                        <input class="form-control rounded-0"  placeholder="Enter here">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-bold text-dark">Phone:</label>
                                                        <input class="form-control rounded-0"  placeholder="Enter here">
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="font-weight-bold text-dark">Subject:</label>
                                                        <input class="form-control rounded-0" placeholder="Enter here">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="comment">Message:</label>
                                                <textarea class="form-control rounded-0" rows="4" id="comment"></textarea>
                                            </div>
                                        </form>
                                        <a href="#" class="btn but-relation pl-4 pr-4">
                                            <span class="pl-2">Send Message</span>
                                        </a>
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
}
</script>

<style>

</style>