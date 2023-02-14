<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Manager List</h1>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Manager Table</h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 250px;">
                    <div class="input-group-append" style="padding: 5px 10px 0px 0px;">
                      <h6>Search :</h6>
                    </div>
                    <input
                      type="text"
                      v-model="dataSearch"
                      class="form-control float-right"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>User Role</th>
                      <th>Division</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(usersData, index) in filterData" :key="usersData.id">
                      <td>{{ index + 1 }}.</td>
                      <td>{{ usersData.name }}</td>
                      <td>{{ usersData.email }}</td>
                      <td>{{ usersData.userRole }}</td>
                      <td>{{ usersData.division }}</td>
                      <td>
                        <router-link
                          :to="{name:'edit-data',params:{id:usersData.id} }"
                          class="btn btn-sm btn-success"
                        >Edit</router-link>
                        <a @click="deleteData(usersData.id)" class="btn btn-sm btn-danger">Delete</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      interval: null,
      dataSearch: ""
    };
  },
  computed: {
    filterData() {
      return this.users.filter(usersData => {
        return (
          usersData.division.match(this.dataSearch) ||
          usersData.name.match(this.dataSearch) ||
          usersData.userRole.match(this.dataSearch) ||
          usersData.email.match(this.dataSearch)
        );
      });
    }
  },
  methods: {
    allData() {
      axios
        .get("/api/user/manager/")
        .then(
          ({ data }) =>
            // console.log(data)
            (this.users = data)
        )
        .catch(function(error) {
          // console.log(error);
        });
    },
    deleteData(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.isConfirmed) {
          axios
            .post("/api/user/destroy/" + id)
            .then(() => {
              this.users = this.users.filter(post => {
                return post.id != id;
              });
            })
            .catch(console.log(error));
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  },
  created() {
    this.allData();
  }
};
</script>