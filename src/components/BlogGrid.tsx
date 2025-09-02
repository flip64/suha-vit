import { Link } from "react-router-dom";
import HeaderTwo from "../layouts/HeaderTwo";
import blog_data from "../data/blog_data";
import category_data from "../data/category_data";
import Footer from "../layouts/Footer";


const BlogGrid = () => {
  return (
    <>
      <HeaderTwo links="home" title="Blog Grid" />

      <div className="page-content-wrapper">
        <div className="blog-wrapper py-3">
          <div className="container">
            <div className="section-heading d-flex align-items-center justify-content-between rtl-flex-d-row-r">
              <h6>Blog Grid</h6>

              <div className="layout-options">
                <Link className="active" to="/blog-grid">
                  <i className="ti ti-border-all"></i>
                </Link>
                <Link to="/blog-list">
                  <i className="ti ti-list-check"></i>
                </Link>
              </div>
            </div>
            <div className="row g-2 rtl-flex-d-row-r">
              {blog_data.map((item, i) => (
                <div key={i} className="col-6 col-md-4 col-lg-3">
                  <div className="card blog-card">
                    <div className="post-img">
                      <img src={item.img} alt="" />
                    </div>
                    <a className="post-bookmark" href="#">
                      <i className="ti ti-bookmark"></i>
                    </a>

                    <div className="post-content">
                      <div className="bg-shapes">
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                        <div className="circle4"></div>
                      </div>
                      <a className="post-catagory d-block" href="#">
                        {item.catagory}
                      </a>
                      <Link className="post-title" to="/blog-details">
                        {item.title}
                      </Link>

                      <div className="post-meta d-flex align-items-center justify-content-between flex-wrap mb-2">
                        <a href="#">
                          <i className="ti ti-user"></i>
                          {item.user_name}
                        </a>
                        <span>
                          <i className="ti ti-clock"></i>
                          {item.read_time}
                        </span>
                      </div>
                      <Link
                        className="btn btn-primary btn-sm read-more-btn"
                        to="/blog-details"
                      >
                        {item.button}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="section-heading pt-3 rtl-text-right">
              <h6>Read by category</h6>
            </div>
            <div className="row g-2 rtl-flex-d-row-r">
              {/* <!-- Single Catagory--> */}
              {category_data.map((item, i) => (
                <div key={i} className="col-4">
                  <div className="card blog-catagory-card">
                    <div className="card-body">
                      <a href="#">
                        <i className={`ti ti-${item.icon}`}></i>
                        <span className="d-block">{item.title}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      <div className="internet-connection-status" id="internetStatus"></div>

      <Footer />
    </>
  );
};

export default BlogGrid;
