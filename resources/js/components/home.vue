<template>
 <div>
  <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div>
 </div>
</template>
<script>
export default {
  created() {
    if (!(User.loggedIn())) {
      this.$router.push({ name: "/" });
    }
  }
};
</script>