import React, { useState } from "react";

import Pagination from "./Pagination"
const PageSize = ({ list }) => {
  const [pagecount, setPagecount] = useState(0);

  const dropDownHandler = (e) => {
    const selected = e.target.value;
    const newSelected = Math.ceil(list.length / selected);
    setPagecount(newSelected);
    console.log(newSelected);
  };

  return (
    <div>
      <div>
        <select className="dropdown" onChange={dropDownHandler}>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
      </div>
      <div>
        <h3>pagination items</h3>
      </div>
      <div>
        <div>
          <Pagination
            pagecount={pagecount}
            // total={setPagecount}
            // limit={20}
            onPageChange={(page) => setPagecount(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default PageSize;
