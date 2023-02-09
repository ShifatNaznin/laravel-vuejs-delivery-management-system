<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <div class="login-box">
        <div class="login-logo"></div>
        <div class="card">
          <div class="card-body login-card-body">
            <p class="login-box-msg">Forget Password</p>

            <form action="../../index3.html" method="post">
              <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Existing Email Address" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <button type="submit" class="btn btn-primary btn-block">Forget Password</button>
                </div>
                <!-- /.col -->
              </div>
            </form>
            <div class="new-margin">
              <p class="text-center mb-0">
                <router-link to="/" class="text-center">Back to login</router-link>
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
export default {};
</script>