import { createReducer } from '@reduxjs/toolkit';
import { clickMenu, toggleMenu } from '../Action/HomeAction';

interface HomeInterface {
  OpenMenu: boolean;
}

const HomeState: HomeInterface = {
  OpenMenu: false,
};

const HomeReducer = createReducer(HomeState, (builder) => {
  builder
    .addCase(toggleMenu, (state, action) => {
      state.OpenMenu = !state.OpenMenu;
    })
    .addCase(clickMenu, (state, action) => {
      state.OpenMenu = false;
    });
});

export default HomeReducer;
