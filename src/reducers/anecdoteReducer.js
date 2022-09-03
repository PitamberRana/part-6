import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      return [...state, action.payload];
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },

    votes(state, action) {
      const id = action.payload.id;
      const filterState = state.filter((as) => as.id !== id);
      const newState = [...filterState, action.payload];
      return newState.sort((a, b) => b.votes - a.votes);
    },
  },
});
export const { appendAnecdote, setAnecdotes, votes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;

export const initialize = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};
export const createAnecdote = (content) => {
  return async (dispatch) => {
    const NewAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(NewAnecdote));
  };
};

export const vote = (anecdote) => {
  return async (dispatch) => {
    const content = await anecdoteService.updateVotes(anecdote);
    dispatch(votes(content));
  };
};
