import {
  SET_RESTAURANTS,
  SET_TYPE,
  FILTER_RESTAURANTS,
  SET_LOADING,
  SET_RESTAURANT_FAILURE,
} from "./../constants";

const initialState = {
  restaurants: [],
  filteredRestaurants: [],
  type: "",
  filterText: "",
  isLoading: true,
  error: "",
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload.restaurants,
        filteredRestaurants: action.payload.restaurants,
        type: "",
        isLoading: false,
        filterText: "",
      };
    case SET_TYPE:
      return {
        ...state,
        type: action.payload.type,
        filteredRestaurants: action.payload.restaurants,
        filterText: "",
        isLoading: false,
      };
    case FILTER_RESTAURANTS:
      return {
        ...state,
        filterText: action.payload.filterText,
        filteredRestaurants: action.payload.restaurants.filter((item) =>
          item.name
            .trim()
            .toLowerCase()
            .includes(action.payload.filterText.toLowerCase().trim())
        ),
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case SET_RESTAURANT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
