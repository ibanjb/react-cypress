import { GET_NAVIGATION_ITEMS, SET_NAVIGATION_ITEM } from './actionsTypes'

export const getNavigationItem = filter => ({
  type: GET_NAVIGATION_ITEMS,
  filter
});

export const setNavigationItem = filter => ({
  type: SET_NAVIGATION_ITEM,
  filter
});
