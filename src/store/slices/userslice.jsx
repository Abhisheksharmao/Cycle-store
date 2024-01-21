import { createSlice } from '@reduxjs/toolkit'
import { clearAllItems } from '../../actions/action';

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
        removeToCart(state, action) {
            state.pop(action.payload)
        },
        clearAllItems(state, action) {
            return [];
        }
    },
    extraReducers(builder) {
        builder.addCase(clearAllItems, () => {
            return [];
        })
    }
});
export const { removeToCart, addToCart } = userSlice.actions;
export default userSlice.reducer;
