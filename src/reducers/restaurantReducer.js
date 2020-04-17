const initialState = {
  restaurants: [],
  filteredRestaurants: [],
  type: "",
  filterText: "",
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESTAURANTS":
      return {
        ...state,
        restaurants: action.payload.restaurants,
        filteredRestaurants: action.payload.restaurants,
        type: ''
      };
    case "SET_TYPE":
      return {
        ...state,
        type: action.payload.type,
        filteredRestaurants: action.payload.restaurants,
        filterText: ''
      };
    case "FILTER_RESTAURANTS":
      return {
        ...state,
        filterText: action.payload.filterText,
        filteredRestaurants: action.payload.restaurants.filter((item) =>
          item.name.startsWith(action.payload.filterText)
        ),
      };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        filterText: '',
        type: '',
        restaurants: action.payload.restaurants,
        filteredRestaurants: action.payload.restaurantss
      }
    default:
      return state;
  }
};

export default restaurantReducer;
