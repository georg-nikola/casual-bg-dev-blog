
const CatalogItem = () => {
    return (
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
        </div>
    );
};

export default CatalogItem