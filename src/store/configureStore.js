import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../components/events/eventReducer";
import counterReducer from "../sandbox/counter"

export default configureStore({
    reducer: {
        counter: counterReducer,
        events: eventReducer
    }
})

// return createStore(rootReducer, devToolsEnhancer())

