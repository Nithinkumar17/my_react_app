import { configureStore } from "@reduxjs/toolkit";

import teamReducer from "./teamSlice";

const store = configureStore({

    reducer: {

        teams: teamReducer

    }

});

export default store;