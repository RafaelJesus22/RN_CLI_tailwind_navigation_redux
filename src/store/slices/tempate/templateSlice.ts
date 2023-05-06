import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface TemplateSlice {
  templateItems: Array<string>;
}

const initialState: TemplateSlice = {
  templateItems: [
    'Native Wind (Tailwind for RN)',
    'React Navigation',
    'Redux Toolkit',
  ],
};

const templateSlice = createSlice({
  name: 'templateSlice',
  initialState,
  reducers: {
    setTemplateItems: (state, {payload}: PayloadAction<string[]>) => {
      state.templateItems = payload;
    },
  },
});

export default templateSlice.reducer;
