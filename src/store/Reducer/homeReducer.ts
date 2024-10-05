import { createReducer } from '@reduxjs/toolkit';
import { toggleMenu } from '../Action/HomeAction';

interface HomeInterface {
  OpenMenu: boolean;
}

const HomeState: HomeInterface = {
  OpenMenu: false,
};

const HomeReducer = createReducer(HomeState, (builder) => {
  builder.addCase(toggleMenu, (state, action) => {
    state.OpenMenu = !state.OpenMenu;
  });
});

export default HomeReducer;
