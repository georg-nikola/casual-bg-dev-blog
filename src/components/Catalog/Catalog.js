import { useContext } from "react"

import { BlogContext } from "../../contexts/BlogContext";
import CatalogItem from "./CatalogItem/CatalogItem";

const Catalog = () => {
  const { blogs } = useContext(BlogContext);

    return (
      <div className="container mb80">
        <div className="page-timeline">
        {blogs.length > 0
          ? blogs.map(x => <CatalogItem key={x._id} blog={x}/>)
          : <h3>No blogs yet</h3>
        }
            
        </div>
      </div>
    );
};

export default Catalog


{/* <div className="vtimeline-point">
<div className="vtimeline-icon">
  <i className="fa fa-image" />
</div>
<div className="vtimeline-block">
  <span className="vtimeline-date">June 25, 2020</span>
  <div className="vtimeline-content">
    <div className="embed-responsive embed-responsive-21by9 mb20">
      <iframe
        src="https://www.youtube.com/embed/htPYk6QxacQ?ecver=2"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0
        }}
        allowFullScreen=""
        width={640}
        height={360}
        frameBorder={0}
      />
    </div>
    <a href="#">
      <h3>Standard post title</h3>
    </a>
    <ul className="post-meta list-inline">
      <li className="list-inline-item">
        <i className="fa fa-user-circle-o" /> <a href="#">John Doe</a>
      </li>
      <li className="list-inline-item">
        <i className="fa fa-calendar-o" /> <a href="#">25 June 2020</a>
      </li>
      <li className="list-inline-item">
        <i className="fa fa-tags" /> <a href="#">Bootstrap4</a>
      </li>
    </ul>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec
      nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur
      libero. Morbi dapibus porta quam laoreet placerat.
    </p>
    <br />
    <a href="#" className="btn btn-outline-secondary btn-sm">
      Read More
    </a>
  </div>
</div>
</div>
<div className="vtimeline-point">
<div className="vtimeline-icon">
  <i className="fa fa-image" />
</div>
<div className="vtimeline-block">
  <span className="vtimeline-date">June 25, 2020</span>
  <div className="vtimeline-content">
    <a href="#">
      <img
        src="https://via.placeholder.com/700x400"
        alt=""
        className="img-fluid mb20"
      />
    </a>
    <a href="#">
      <h3>Standard post title</h3>
    </a>
    <ul className="post-meta list-inline">
      <li className="list-inline-item">
        <i className="fa fa-user-circle-o" /> <a href="#">John Doe</a>
      </li>
      <li className="list-inline-item">
        <i className="fa fa-calendar-o" /> <a href="#">25 June 2020</a>
      </li>
      <li className="list-inline-item">
        <i className="fa fa-tags" /> <a href="#">Bootstrap4</a>
      </li>
    </ul>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec
      nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur
      libero. Morbi dapibus porta quam laoreet placerat.
    </p>
    <br />
    <a href="#" className="btn btn-outline-secondary btn-sm">
      Read More
    </a>
  </div>
</div>
</div> */}