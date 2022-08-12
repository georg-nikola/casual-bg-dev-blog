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