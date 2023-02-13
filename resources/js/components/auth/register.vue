<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <div class="login-box">
        <div class="login-logo"></div>
        <div class="card">
          <div class="card-body login-card-body">
            <p class="login-box-msg">Register a new account</p>

            <form @submit.prevent="signup">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Full Name" v-model="form.name" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <small class="text-danger" v-if="errors.name">{{errors.name[0]}}</small>
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
                <select class="form-control select2" style="width: 100%;" v-model="form.userRole">
                  <option disabled selected>Select User Role</option>
                  <option value="superadmin">Super Admin</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="zonemanager">Zone Manager</option>
                  <option value="user">User</option>
                  <option value="deliveryman">Delivery Man</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <select class="form-control" style="width: 100%;" v-model="form.division">
                  <option disabled selected>Select Division</option>
                  <option value="barisal">Barisal</option>
                  <option value="chittagong">Chittagong</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="khulna">Khulna</option>
                  <option value="mymensingh">Mymensingh</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="sylhet">Sylhet</option>
                </select>
              </div>
              <!-- <small class="text-danger" v-if="errors.email">{{errors.email[0]}}</small> -->
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
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  v-model="form.password_confirmation"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <!-- <small class="text-danger" v-if="errors.password">{{errors.password[0]}}</small> -->
              <div class="row">
                <div class="col-12">
                  <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                </div>
                <!-- /.col -->
              </div>
            </form>
            <div class="new-margin">
              <p class="text-center mb-0">
                <router-link to="/">Already have an account</router-link>
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
        name: null,
        email: null,
        userRole: null,
        division: null,
        password: null,
        confirm_password: null
      },
      errors: {}
    };
  },
  methods: {
    signup() {
      axios
        .post("/api/auth/signup", this.form)
        .then(response => {
          User.reponseAfterLogin(response);
          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });
          this.$router.push({ name: "home" });
        })
        .catch(error => (this.errors = error.response.data.errors))
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