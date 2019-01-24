import {
  GET_NAVIGATION_ITEMS,
  SET_NAVIGATION_ITEM
} from "../actions/actionsTypes";

// mock initialization
const navigationData = [
  {
    id: 1,
    selected: true,
    title: "Root",
    icon: "home",
    uri: "/"
  },
  {
    id: 2,
    selected: false,
    title: "Dashboard",
    icon: "dashboard",
    uri: "/dashboard"
  },
  {
    id: 3,
    selected: false,
    title: "Example",
    icon: "codepen",
    uri: "/example"
  },
  {
    id: 4,
    selected: false,
    title: "Test Page",
    icon: "swap",
    uri: "/testPage"
  },
  {
    id: 5,
    selected: false,
    title: "Page not found",
    icon: "notification",
    uri: "/404"
  }
];

const navReducer = (state = navigationData, action) => {
  switch (action.type) {
    case GET_NAVIGATION_ITEMS:
      return state;
    case SET_NAVIGATION_ITEM:
      return state.map(navItem =>
        navItem.id === action.filter
          ? { ...navItem, selected: true }
          : { ...navItem, selected: false }
      );
    default:
      return state;
  }
};

export default navReducer;
