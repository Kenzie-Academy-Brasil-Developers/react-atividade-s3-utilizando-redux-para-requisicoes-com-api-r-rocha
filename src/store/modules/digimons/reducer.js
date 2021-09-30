import { ADD_DIGIMONS } from "./actionTypes";

const digimonsReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
      console.log(action.digimon)
      return action.digimon;

    default:
      return state;
  }
};

export default digimonsReducer;
