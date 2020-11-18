

import './Dashboard.css';


function Dashboard() {
  return (

    <div className="Dashboard">

        <div className="ourwork">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1 className="heading">
                        OUR <strong>WORK</strong>
                    </h1>
                    <p className="ourwork__detail">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <div className="ourwork__button">
                        <button type="button" className="btn btn-info">SHOW ALL </button>
                        <button type="button" className="btn btn-light">SPLASH LIGHT - 01 DEMO</button>
                    </div>
                    </div>                   
                </div>
            </div>
        </div>

        <div className="whycoose">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="heading">Why <strong>Choose us</strong></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card h-100">
                            <div className="view overlay">
                                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card's content.</p>
                                <button type="button" className="btn btn-info">Read more</button>
                            </div>
                        </div>
                    </div>                    
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card h-100">
                            <div className="view overlay">
                                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card's content.</p>
                                <button type="button" className="btn btn-info">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card h-100">
                            <div className="view overlay">
                                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card's content.</p>
                                <button type="button" className="btn btn-info">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

  );
}

export default Dashboard;
