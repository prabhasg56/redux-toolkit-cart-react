import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    showCart: false,
    notification: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        showCart(state) {
            if (state.showCart === false) {
              state.showCart = true;
            } else {
              state.showCart = false;
            }
          },
          
        notificationHandler(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;