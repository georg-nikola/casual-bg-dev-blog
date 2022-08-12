import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';

const CatalogItem = ({ blog }) => {
    return (
        <div className="vtimeline-point">
          <div className="vtimeline-icon">
            <i className="fa fa-image" />
          </div>
          <div className="vtimeline-block">
          <Moment className="vtimeline-date" format="YYYY/MM/DD">{blog._createdOn}</Moment>
            <div className="vtimeline-content">
              <img src={blog.img} alt=''/>
                <h3>{blog.title}</h3>
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