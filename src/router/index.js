import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '@/components/Login.vue';
import ForgotpasswordComponent from '@/components/Forgotpassword.vue';
import RegisterComponent from '@/components/Register.vue';
import HomeComponent from '@/components/Home.vue';
import RelationComponent from '@/components/Relation.vue';
import EditRelationComponent from '@/components/EditRelation.vue';
import WalletComponent from '@/components/Wallet.vue';
import SettingComponent from '@/components/Setting.vue';
import ContactusComponent from '@/components/Contactus.vue';
import AboutusComponent from '@/components/Aboutus.vue';
import PrivacypolicyComponent from '@/components/Privacypolicy.vue';
import TermsandconditionComponent from '@/components/Termsandcondition.vue';
import AddcreditComponent from '@/components/Addcredit.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: LoginComponent
    },
    {
      name: 'forgotpassword',
      path: '/forgotpassword',
      component: ForgotpasswordComponent
    },
    {
      name: 'register',
      path: '/register',
      component: RegisterComponent
    },
    {
      name: 'home',
      path: '/',
      component: HomeComponent
    },
    {
      name: 'relation',
      path: '/relation',
      component: RelationComponent
    },
    {
      name: 'editrelation',
      path: '/editrelation',
      component: EditRelationComponent
    },
    {
      name: 'wallet',
      path: '/wallet',
      component: WalletComponent
    },
    {
      name: 'setting',
      path: '/setting',
      component: SettingComponent
    },
    {
      name: 'contactus',
      path: '/contactus',
      component: ContactusComponent
    },
    {
      name: 'aboutus',
      path: '/aboutus',
      component: AboutusComponent
    },
    {
      name: 'privacypolicy',
      path: '/privacypolicy',
      component: PrivacypolicyComponent
    },
    {
      name: 'termsandcondition',
      path: '/termsandcondition',
      component: TermsandconditionComponent
    },
    {
      name: 'addcredit',
      path: '/addcredit',
      component: AddcreditComponent
    },

  ]
})
