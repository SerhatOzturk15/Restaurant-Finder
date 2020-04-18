
const restaurantReducer = (state, action) => {
  switch (action.type) {
    case "SET_RESTAURANTS":
      return {
        ...state,
        restaurants: action.payload.restaurants,
        filteredRestaurants: action.payload.restaurants,
        type: '',
        isLoading: false,
        filterText: ''
      };
    case "SET_TYPE":
      return {
        ...state,
        type: action.payload.type,
        filteredRestaurants: action.payload.restaurants,
        filterText: '',
        isLoading: false
      };
    case "FILTER_RESTAURANTS":
      return {
        ...state,
        filterText: action.payload.filterText,
        filteredRestaurants: action.payload.restaurants.filter((item) =>
          item.name.trim().toLowerCase().includes(action.payload.filterText.toLowerCase().trim())
        ),
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    default:
      return state;
  }
};

export default restaurantReducer;
