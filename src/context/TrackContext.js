import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackRedcuer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTracks = (dispatch) => (name, locations) => {
  //make request to api
};

export const { Provider, Context } = createDataContext(
  trackRedcuer,
  { fetchTracks, createTracks },
  []
);
