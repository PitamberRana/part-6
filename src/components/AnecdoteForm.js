// import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import React from "react";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const NewAnecdote = (props) => {
  // const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = "";

    props.createAnecdote(content);
    props.setNotification(`You created '${content}'`, 5);
    // dispatch(createAnecdote(content));
    // dispatch(setNotification(`You created '${content}'`, 5));
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={(event) => addAnecdote(event)}>
        <div>
          <input name="content" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

// export default NewAnecdote;
export default connect(null, { createAnecdote, setNotification })(NewAnecdote);
