import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    status: false,
    searchValue: "",
    homeData: {},
  },
  reducers: {
    increment(state, { payload }) {
      //actions:{payload,type}
      state.count += payload;
    },
    decrement(state, { payload }) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.searchValue += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.fulfilled, (state, { payload, type }) => {
      state.homeData = payload;
    });
  },
});

//异步的action
export const fetchHomeData = createAsyncThunk("fetchHomeData", async () => {
  const data = await axios.get(
    "http://rap2api.taobao.org/app/mock/273986/example/1608694987892"
  );
  return data;
});

// 这个是同步的actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// counter 切片生成的reducer
export default counterSlice.reducer;
