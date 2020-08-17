/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

export default () => {
  function handleLoginForm(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <i className="zmdi zmdi-chevron-up" />
        </span>
      </div>
      {/* Modal1 */}
      <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
        <div className="overlay-modal1 js-hide-modal1" />
        <div className="container">
          <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal1">
              <img src="images/icons/icon-close.png" alt="CLOSE" />
            </button>
            <div className="row">
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  <div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-dots" />
                    <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                    <div className="slick3 gallery-lb">
                      <div
                        className="item-slick3"
                        data-thumb="images/product-detail-01.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="images/product-detail-01.jpg"
                            alt="IMG-PRODUCT"
                          />
                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="images/product-detail-01.jpg"
                          >
                            <i className="fa fa-expand" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="item-slick3"
                        data-thumb="images/product-detail-02.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="images/product-detail-02.jpg"
                            alt="IMG-PRODUCT"
                          />
                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="images/product-detail-02.jpg"
                          >
                            <i className="fa fa-expand" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="item-slick3"
                        data-thumb="images/product-detail-03.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="images/product-detail-03.jpg"
                            alt="IMG-PRODUCT"
                          />
                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="images/product-detail-03.jpg"
                          >
                            <i className="fa fa-expand" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 p-b-30">
                <div className="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    Lightweight Jacket
                  </h4>
                  <span className="mtext-106 cl2">$58.79</span>
                  <p className="stext-102 cl3 p-t-23">
                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                    ligula. Mauris consequat ornare feugiat.
                  </p>
                  {/*  */}
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Size</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Size S</option>
                            <option>Size M</option>
                            <option>Size L</option>
                            <option>Size XL</option>
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Color</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>White</option>
                            <option>Grey</option>
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-minus" />
                          </div>
                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product"
                            defaultValue={1}
                          />
                          <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-plus" />
                          </div>
                        </div>
                        <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                    <div className="flex-m bor9 p-r-10 m-r-11">
                      <a
                        href="/"
                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                        data-tooltip="Add to Wishlist"
                      >
                        <i className="zmdi zmdi-favorite" />
                      </a>
                    </div>
                    <a
                      href="/"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      href="/"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Twitter"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      href="/"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Google Plus"
                    >
                      <i className="fa fa-google-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {modal2} */}
      <div className="wrap-modal1 js-modal2 p-t-60 p-b-20">
        <div className="overlay-modal1 js-hide-modal2" />
        <div className="container">
          {/* Outer Row*/}
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/* Nested Row within Card Body*/}
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Welcome Back!
                          </h1>
                          <h5 className="mb-4 text-danger" />
                        </div>
                        <form
                          onClick={handleLoginForm}
                          className="user"
                          action="http://localhost:3001/user/login"
                          method="post"
                        >
                          <div className="form-group">
                            <input
                              className="form-control form-control-user"
                              id="exampleInputEmail"
                              type="email"
                              aria-describedby="emailHelp"
                              placeholder="Enter Email Address..."
                              required
                              name="email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control form-control-user"
                              id="exampleInputPassword"
                              type="password"
                              placeholder="Password"
                              name="password"
                              required
                            />
                          </div>
                          <button className="btn btn-primary btn-user btn-block">
                            Login
                          </button>
                          <hr />
                          <a
                            className="btn btn-google btn-user btn-block"
                            href="index.html"
                          >
                            <i className="fab fa-google fa-fw" /> Login with
                            Google
                          </a>
                          <a
                            className="btn btn-facebook btn-user btn-block"
                            href="index.html"
                          >
                            <i className="fab fa-facebook-f fa-fw" /> Login with
                            Facebook
                          </a>
                        </form>
                        <hr />
                        <div className="text-center">
                          <a className="small" href="forgot-password.html">
                            Forgot Password?
                          </a>
                        </div>
                        <div className="text-center">
                          <a className="small" href="/cozastore/register">
                            Create an Account!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
