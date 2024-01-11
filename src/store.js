import { configureStore } from "@reduxjs/toolkit";
import storeSlicer from "./components/createStoreSlicer/storeSlicer";

export default configureStore({
    reducer:{
        addStore: storeSlicer,
    }
})