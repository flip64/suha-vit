"use client"; 
import { useState } from "react";

const OffcanvasTwo = ({ handleShow, show }: any) => {
  // state برای Price Range
  const [minPrice, setMinPrice] = useState("1");
  const [maxPrice, setMaxPrice] = useState("5000");

  return (
    <>
      <div
        className={`offcanvas offcanvas-start suha-filter-offcanvas-wrap ${
          show ? "show" : ""
        }`}
        tabIndex={-1}
        id="suhaFilterOffcanvas"
        aria-labelledby="suhaFilterOffcanvasLabel"
      >
        <button
          onClick={handleShow}
          className="btn-close text-reset"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>

        <div className="offcanvas-body py-5">
          <div className="container">
            <div className="row">
              {/* Brand */}
              <div className="col-12">
                <div className="widget catagory mb-4">
                  <h6 className="widget-title mb-2">Brand</h6>
                  <div className="widget-desc">
                    {["Zara", "Gucci", "Addidas", "Nike", "Denim"].map(
                      (brand) => (
                        <div className="form-check" key={brand}>
                          <input
                            className="form-check-input"
                            id={brand}
                            type="checkbox"
                            defaultChecked={brand === "Zara"}
                          />
                          <label className="form-check-label" htmlFor={brand}>
                            {brand}
                          </label>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Color */}
              <div className="col-12">
                <div className="widget color mb-4">
                  <h6 className="widget-title mb-2">Color Family</h6>
                  <div className="widget-desc">
                    {["Purple", "Black", "White", "Red", "Pink"].map((color) => (
                      <div className="form-check" key={color}>
                        <input
                          className="form-check-input"
                          id={color}
                          type="checkbox"
                          defaultChecked={color === "Purple"}
                        />
                        <label className="form-check-label" htmlFor={color}>
                          {color}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Size */}
              <div className="col-12">
                <div className="widget size mb-4">
                  <h6 className="widget-title mb-2">Size</h6>
                  <div className="widget-desc">
                    {["XtraLarge", "Large", "Medium", "Small", "ExtraSmall"].map(
                      (size) => (
                        <div className="form-check" key={size}>
                          <input
                            className="form-check-input"
                            id={size}
                            type="checkbox"
                            defaultChecked={size === "XtraLarge"}
                          />
                          <label className="form-check-label" htmlFor={size}>
                            {size.replace(/([A-Z])/g, " $1").trim()}
                          </label>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Ratings */}
              <div className="col-12">
                <div className="widget ratings mb-4">
                  <h6 className="widget-title mb-2">Ratings</h6>
                  <div className="widget-desc">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div className="form-check" key={star}>
                        <input
                          className="form-check-input"
                          id={`${star}star`}
                          type="checkbox"
                          defaultChecked={star === 5}
                        />
                        <label className="form-check-label" htmlFor={`${star}star`}>
                          {[...Array(5)].map((_, idx) => (
                            <i
                              key={idx}
                              className={`ti ti-star-filled ${
                                idx < star ? "text-warning" : "text-secondary"
                              }`}
                            ></i>
                          ))}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Type */}
              <div className="col-12">
                <div className="widget payment-type mb-4">
                  <h6 className="widget-title mb-2">Payment Type</h6>
                  <div className="widget-desc">
                    {["Cash On Delivery", "Paypal", "Check Payment", "Payonner", "Mobile Banking"].map(
                      (payment) => (
                        <div className="form-check" key={payment}>
                          <input
                            className="form-check-input"
                            id={payment.replace(/\s/g, "")}
                            type="checkbox"
                            defaultChecked={payment === "Cash On Delivery"}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={payment.replace(/\s/g, "")}
                          >
                            {payment}
                          </label>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div className="col-12">
                <div className="widget price-range mb-4">
                  <h6 className="widget-title mb-2">Price Range</h6>
                  <div className="widget-desc">
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="form-floating">
                          <input
                            className="form-control"
                            id="floatingInputMin"
                            type="text"
                            placeholder="Min"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                          />
                          <label htmlFor="floatingInputMin">Min</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating">
                          <input
                            className="form-control"
                            id="floatingInputMax"
                            type="text"
                            placeholder="Max"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                          />
                          <label htmlFor="floatingInputMax">Max</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <div className="col-12">
                <div className="apply-filter-btn">
                  <a className="btn btn-lg btn-success w-100" href="#">
                    Apply Filter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffcanvasTwo;
