import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice'
//  counterReducer is a variable and its value assigned from exporting slice => counterSlice.reducer

const store = configureStore({
    reducer: {
        counter: counterReducer

    }
})

export default store