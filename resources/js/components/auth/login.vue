<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <div class="login-box">
        <div class="login-logo"></div>
        <div class="card">
          <div class="card-body login-card-body">
            <p class="login-box-msg">Login</p>

            <form @submit.prevent="login">
              <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email" v-model="form.email" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <small class="text-danger" v-if="errors.email">{{errors.email[0]}}</small>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="form.password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <small class="text-danger" v-if="errors.password">{{errors.password[0]}}</small>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label for="remember">Remember Me</label>
                  </div>
                </div>
                <!-- /.col -->
                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">Login</button>
                </div>
                <!-- /.col -->
              </div>
            </form>
            <!-- /.social-auth-links -->
            <div class="new-margin">
              <!-- <p class="text-center mb-1">
                <router-link to="/forget-password">Forgot Password</router-link>
              </p> -->
              <p class="text-center mb-0">
                <router-link to="/register">Register a new membership</router-link>
              </p>
            </div>
          </div>
          <!-- /.login-card-body -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    if (User.loggedIn()) {
      this.$router.push({ name: "home" });
    }
  },
  data() {
    return {
      form: {
        email: null,
        password: null
      },
      errors: {}
    };
  },
  methods: {
    login() {
      axios
        .post("/api/auth/login", this.form)
        .then(response => {
          console.log(response);

          if (response.data === "deliveryman") {
            this.$router.push({ name: "forget" });
          } else {
            User.reponseAfterLogin(response);
            Toast.fire({
              icon: "success",
              title: "Signed in successfully"
            });
            this.$router.push({ name: "home" });
          }
        })
        // .catch(error => (this.errors = error.response.data.errors));
        .catch(
          Toast.fire({
            icon: "warning",
            title: "Invalid email or password"
          })
        );
    }
  }
};
</script>