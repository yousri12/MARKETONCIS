import React from "react";
import img from "../../assets/image/user.jpg";
import { NavLink, Outlet } from "react-router-dom";



const ProfileBase = () => {
  return (
    <section className="user">
    <div className="row user__content">
      <div className="col-lg-2  col-md-12 col-sm-12   user__content__sections">
        <figure className="text-center mt-5 mb-2">
          <img
            className="user__content__sections__img rounded-circle"
            src={img}
            alt="user"
          />
          <figcaption><h3 className="text-center">Ryo Lu</h3></figcaption>
        </figure>
        <ul className="mt-5">
          <li><NavLink  end   className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/profile"><span>|</span> Shop history </NavLink></li>
          <li><NavLink   className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/profile/activity"><span>|</span>Blog activity </NavLink></li>
          <li><NavLink   className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/profile/whislist"><span>|</span>My Wishlist </NavLink></li>
        </ul>
      </div>
      <div className="col-lg-8 col-md-12 order-md-3 order-sm-3 order-2">
        <Outlet />
      </div>
      <div className="col-lg-2 col-md-12  order-md-2   order-lg-3   px-2 text-center user__content__biography ">
        <div className="user__content__biography__box">
          <div>
        <h3 className="mt-5 mb-2">BIOGRAPHY</h3>
        <p className="user__content__biography__box__paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown
        </p>
        </div>
        <div className="user__content__biography__box__location">
        <h3>LOCATION</h3>
        <p>Egypt, Suez</p>
        </div>
      </div>
      </div>
      </div>
      </section>
  );
};

export default ProfileBase;