import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import { connect } from "react-redux";

const Anecdote = ({ anecdote, handleClick }) => (
  <div>
    <div>{anecdote.content}</div>
    <div>
      has <b>{anecdote.votes}</b>
      <button onClick={handleClick}>vote</button>
    </div>
  </div>
);

const AnecdoteList = (props) => {
  const handleVote = (anecdote) => {
    props.vote(anecdote);
    props.setNotification(`You voted '${anecdote.content}'`, 5);
  };

  // const dispatch = useDispatch();
  // const anecdotes = useSelector(({ filter, anecdotes }) => {
  //   let res = anecdotes;
  //   // console.log(res);
  //   if (filter) {
  //     res = anecdotes.filter((anecdote) => anecdote.content.includes(filter));
  //   }
  //   return res;
  // });

  // const handleVote = (anecdote) => {
  //   dispatch(vote(anecdote));
  //   dispatch(setNotification(`You voted '${anecdote.content}'`, 5));
  // };

  return (
    <div>
      {props.anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => handleVote(anecdote)}
        />
      ))}
    </div>
  );
};

// export default AnecdoteList;

const mapStateToProps = (state) => {
  let res = state.anecdotes;
  if (state.filter) {
    res = state.anecdotes.filter((anecdote) =>
      anecdote.content.includes(state.filter)
    );
  }

  return {
    anecdotes: res,
  };
};

export default connect(mapStateToProps, { vote, setNotification })(
  AnecdoteList
);
