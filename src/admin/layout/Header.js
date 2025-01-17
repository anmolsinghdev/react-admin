import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
   {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to='/' data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></NavLink>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <NavLink to='/' className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <NavLink to='/' className="nav-link" >Contact</NavLink>
      </li>
    </ul>

   {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
     {/* Navbar Search */}
      <li className="nav-item">
        <NavLink className="nav-link" data-widget="navbar-search" to='/' role="button">
          <i className="fas fa-search"></i>
        </NavLink>
        <div className="navbar-search-block">
          <form className="form-inline">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search"></i>
                </button>
                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

     {/* Messages Dropdown Menu */}
      <li className="nav-item dropdown">
        <NavLink to='/' className="nav-link" data-toggle="dropdown" >
          <i className="far fa-comments"></i>
          <span className="badge badge-danger navbar-badge">3</span>
        </NavLink>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <NavLink to='/' className="dropdown-item">
           {/* Message Start */}
            <div className="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Brad Diesel
                  <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                </h3>
                <p className="text-sm">Call me whenever you can...</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
           {/* Message End */}
          </NavLink>
          <div className="dropdown-divider"></div>
          <NavLink to='/' className="dropdown-item">
           {/* Message Start */}
            <div className="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  John Pierce
                  <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                </h3>
                <p className="text-sm">I got your message bro</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
           {/* Message End */}
          </NavLink>
          <div className="dropdown-divider"></div>
          <NavLink to='/' className="dropdown-item">
           {/* Message Start */}
            <div className="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Nora Silvester
                  <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                </h3>
                <p className="text-sm">The subject goes here</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
           {/* Message End */}
          </NavLink>
          <div className="dropdown-divider"></div>
          <NavLink to='/' className="dropdown-item dropdown-footer">See All Messages</NavLink>
        </div>
      </li>
     {/* Notifications Dropdown Menu */}
      <li className="nav-item">
        <NavLink className="nav-link" data-widget="fullscreen" to='/'  role="button">
          <i className="fas fa-expand-arrows-alt"></i>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/' className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" role="button">
          <i className="fas fa-th-large"></i>
        </NavLink>
      </li>
    </ul>
  </nav>
    </>
  )
}

export default Header