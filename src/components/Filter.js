import { useDispatch } from "react-redux";
import React from "react";
import { connect } from "react-redux";

import { filterChange } from "../reducers/filterReducer";

const FilterAnecdotes = (props) => {
  // const dispatch = useDispatch();

  // const handleChange = (event) => {
  //   dispatch(filterChange(event.target.value));
  // };
  const handleChange = (event) => {
    props.filterChange(event.target.value);
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

// export default FilterAnecdotes;
export default connect(null, { filterChange })(FilterAnecdotes);
