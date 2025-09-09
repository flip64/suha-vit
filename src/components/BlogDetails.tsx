

"use client";

import Footer from "../layouts/Footer";
import HeaderTwo from "../layouts/HeaderTwo";

 

const BlogDetails = () => {

  
  return (
    <>
      <HeaderTwo links="blog-grid" title="Blog Details" />
      <div className="page-content-wrapper">
        <div className="blog-details-post-thumbnail" style={{ backgroundImage: `url(/assets/img/bg-img/6.jpg)` }}>
          <div className="container">
            <div className="post-bookmark-wrap">
              <a className="post-bookmark" href="#"><i className="ti ti-bookmark"></i></a>
            </div>
          </div>
        </div>
        <div className="product-description pb-3">

          <div className="product-title-meta-data bg-white mb-3 py-3 dir-rtl">
            <div className="container">
              <h5 className="post-title">Bridal shopping is the latest trends of this month.</h5>
              <a className="post-catagory mb-3 d-block" href="#">Shopping</a>
              <div className="post-meta-data d-flex align-items-center justify-content-between">
                <a className="d-flex align-items-center" href="#"><img src="/assets/img/bg-img/9.jpg" alt="" />Sarah<span>Follow</span></a><span className="d-flex align-items-center">
                  <svg className="bi bi-clock me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                  </svg>4 min read</span></div>
            </div>
          </div>
          <div className="post-content bg-white py-3 mb-3 dir-rtl">
            <div className="container">
              <p>Torem ipsum dolor sit, amet consectetur adipisicing elit. Soluta delectus distinctio officiis! Quisquam blanditiis voluptatibus, quod doloribus modi, impedit in dolores voluptates, aliquam facilis architecto eligendi laudantium eos!</p>
              <h6>The top shopping deals is the year 2024.</h6>
              <p>Rorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum necessitatibus dicta adipisci tempora beatae impedit similique qui sit, ea possimus eos odit, voluptatum totam voluptates iure quo?</p>
              <p>Korem ipsum dolor sit amet consectetur adipisicing elit. Facilis cupiditate quis molestias molestiae minus vel, ipsam corporis aut error libero tenetur facere assumenda soluta esse? Perferendis, eum!</p><a className="mb-3 d-block h6" href="#">How to easily buy a product?</a>
              <p>Dorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi quas eligendi adipisci quaerat totam. Veritatis ratione a numquam molestias, sit at molestiae excepturi totam dolore, hic fugiat. Incidunt modi odit iure ipsam amet illo placeat laboriosam.</p>
              <p>Porem ipsum dolor sit amet consectetur adipisicing elit. Amet porro, consectetur cum ea aut dolores officia magni laudantium, sed hic ad nulla laborum quam minima voluptatum, labore ipsam.</p>
            </div>
          </div>

          <div className="rating-and-review-wrapper bg-white py-3 mb-3 dir-rtl">
            <div className="container">
              <h6>Comments (3)</h6>
              <div className="rating-review-content">
                <ul className="ps-0">
                  <li className="single-user-review d-flex">
                    <div className="user-thumbnail mt-0"><img src="/assets/img/bg-img/7.jpg" alt="" /></div>
                    <div className="rating-comment">
                      <p className="comment mb-0">Very good product. It is just amazing!</p><span className="name-date">Designing World 12 Dec 2024</span>
                    </div>
                  </li>
                  <li className="single-user-review d-flex">
                    <div className="user-thumbnail mt-0"><img src="/assets/img/bg-img/8.jpg" alt="" /></div>
                    <div className="rating-comment">
                      <p className="comment mb-0">Very excellent product. Love it.</p><span className="name-date">Designing World 8 Dec 2024</span>
                    </div>
                  </li>
                  <li className="single-user-review d-flex">
                    <div className="user-thumbnail mt-0"><img src="/assets/img/bg-img/9.jpg" alt="" /></div>
                    <div className="rating-comment">
                      <p className="comment mb-0">What a nice product it is. I am looking it is.</p><span className="name-date">Designing World 28 Nov 2024</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ratings-submit-form bg-white py-3 dir-rtl">
            <div className="container">
              <h6>Submit A Comment</h6>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <textarea className="form-control" id="comments" name="comment" cols={30} rows={10} placeholder="Write your comment..."></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Post Comment</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="internet-connection-status" id="internetStatus"></div>

      <Footer />
    </>
  );
};

export default BlogDetails;