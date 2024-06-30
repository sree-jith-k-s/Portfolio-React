import React from 'react';
import '../assets/css/meyawo.css';
import '../assets/vendors/vendors.css'

const KnowMore = () => (
    <section className="section bg-custom-gray" id="know">
        <div className="container text-center">
            <p className="section-subtitle">What I have done so far</p>
            <h6 className="section-title mb-6">My Journey</h6>
            <div className="blog-card">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card border-0">
                            <img src="assets/imgs/blog-1.jpg" alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">My journey of learning Java</h5>
                                <p className="card-text">I started learning Java as part of my college curriculum. I have learned various aspects of the language including object-oriented programming, data structures, and algorithms.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <img src="assets/imgs/blog-2.jpg" alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Exploring web development</h5>
                                <p className="card-text">I have developed several web applications using HTML, CSS, JavaScript, and PHP. I enjoy creating user-friendly interfaces and efficient back-end systems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <img src="assets/imgs/blog-3.jpg" alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Working with databases</h5>
                                <p className="card-text">I have experience working with SQL and NoSQL databases. I have implemented various database-driven applications and have a good understanding of database design and optimization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default KnowMore;
