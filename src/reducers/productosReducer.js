//cada reducer tiene su state

const initialState = {
  productos: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
