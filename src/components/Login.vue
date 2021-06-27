<template>
  <section class="login">
    <div class="landing">
      <!-- LANDING DECORATION -->
      <div class="landing-decoration"></div>
      <!-- /LANDING DECORATION -->

      <!-- LANDING INFO -->
      <div class="landing-info">
        <!-- LOGO -->
        <div class="logo">
          <!-- ICON LOGO VIKINGER -->
          <svg class="icon-logo-vikinger">
            <use xlink:href="#svg-logo-vikinger"></use>
          </svg>
          <!-- /ICON LOGO VIKINGER -->
        </div>
        <!-- /LOGO -->

        <!-- LANDING INFO PRETITLE -->
        <h2 class="landing-info-pretitle">Welcome to</h2>
        <!-- /LANDING INFO PRETITLE -->

        <!-- LANDING INFO TITLE -->
        <h1 class="landing-info-title">Vikinger</h1>
        <!-- /LANDING INFO TITLE -->

        <!-- LANDING INFO TEXT -->
        <p class="landing-info-text">
          The next generation social network &amp; community! Connect with your
          friends and play with our quests and badges gamification system!
        </p>
        <!-- /LANDING INFO TEXT -->
      </div>
      <!-- /LANDING INFO -->

      <!-- LANDING FORM -->
      <div class="landing-form">
        <!-- FORM BOX -->
              <div class="form-box login-register-form-element">
        <!-- FORM BOX DECORATION -->
        <img class="form-box-decoration overflowing" src="img/landing/rocket.png" alt="rocket">
        <!-- /FORM BOX DECORATION -->

        <!-- FORM BOX TITLE -->
        <h2 class="form-box-title">Account Login</h2>
        <!-- /FORM BOX TITLE -->
    
        <!-- FORM -->
        <form class="form">
    
          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- BUTTON -->
                <button type="button" class="button medium primary" @click="handle_login">
                  Signin Now!
                </button>
              <!-- /BUTTON -->
            </div>
            <!-- /FORM ITEM -->
          </div>
          <!-- /FORM ROW -->
        </form>
        <!-- /FORM -->

      </div>
        <!-- /FORM BOX -->
      </div>
      <!-- /LANDING FORM -->
    </div>
  </section>
   <div id="ual-div"></div>
</template>

<script lang="js">
import LoginService from '../_services/login_service';
export default {
    name: 'login',
    mounted(){
        localStorage.removeItem("ual-session-authenticator")
        localStorage.removeItem("ual-session-expiration")
        localStorage.removeItem("autoLogin")
        localStorage.removeItem("loglevel:webpack-dev-server")
        localStorage.removeItem("ual-wax:autologin")
        localStorage.removeItem("wax_user")
        
    },
     methods: {
      //  handle login request
        handle_login:function () {
            const loginService = new LoginService();

            loginService.handle_login();
        }
    }
}
</script>

<style scoped>
    .ual-button-gen {
      display: none !important;
    }
</style>
