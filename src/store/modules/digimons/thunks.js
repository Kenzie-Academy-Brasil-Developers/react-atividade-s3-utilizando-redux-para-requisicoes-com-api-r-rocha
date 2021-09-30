import axios from "axios";


import { addDigimons } from "./actions";

const addDigimonsThunk = (digimon, error, setErrorMessage) => (dispatch) => {
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((response) => {
      console.log(response.data[0]);
      dispatch(addDigimons(response.data[0]));
    })
    .catch((error) => {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         *
         * <Alert severity="error">{`${error.response.data}`}</Alert>
        */
        setErrorMessage(error.response.data.ErrorMsg);
        console.log(error.response.data.ErrorMsg);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message);
      }
      console.log(error);
    });
};

export default addDigimonsThunk;
