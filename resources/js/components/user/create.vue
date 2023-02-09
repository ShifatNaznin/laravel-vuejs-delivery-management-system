<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row mb-2">
        <!-- <div class="col-sm-6">
            <h1>Add Employee</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">General Form</li>
            </ol>
        </div>-->
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- left column -->
        <div class="col-md-8">
          <!-- general form elements -->
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Add Employee</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form>
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <label>Salary</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Salary"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <label>NID Number</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="NID"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label>Joining Date</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <label>NID Number</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="NID"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label>Joining Date</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-primary float-right">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>