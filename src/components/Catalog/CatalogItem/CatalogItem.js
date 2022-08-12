import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';

const CatalogItem = ({ blog }) => {
    return (
        <div className="vtimeline-point">
          <div className="vtimeline-icon">
            <i className="fa fa-image" />
          </div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">June 25, 2020</span>
            <div className="vtimeline-content">
              <img src={blog.img} alt=''/>
                <h3>{blog.title}</h3>
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
                {blog.description}
              </p>
              <br />
              <Button as={Link} to={`/catalog/${blog._id}`}>
                Read More
              </Button>                
            </div>
          </div>
        </div>
    );
};

export default CatalogItem