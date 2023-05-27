import React from 'react';

function ProfileInfo() {
  return (
    <div className='profile-info '>
        <div className="container py-5">
  <div className="row">
    <div className="col-lg-4 ">
      <div className="card mb-4 ">
        <div className="card-body text-center shadow  bg-white rounded">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="rounded-circle img-fluid"
            style={{ width: 100 }}
          />
          <h5 className="my-3">John Smith</h5>
          <p className="text-muted mb-1">Full Stack Developer</p>
          <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
          <div className="d-flex justify-content-center mb-2"></div>
        </div>
      </div>
    </div>
    <div className="col-lg-8">
      <div className="card mb-4">
        <div className="card-body shadow  bg-white rounded">
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Full Name</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">Johnatan Smith</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Email</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">example@example.com</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Phone</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">(097) 234-5678</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Mobile</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">(098) 765-4321</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Address</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default ProfileInfo;