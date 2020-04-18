import { PROXYURL, BASEURL, token } from "./../Util";
import {
  setRestaurants,
  setType,
  setLoading,
  setRestaurantFailure,
} from "./../actions/restaurantActions";

export const getRestaurants = () => (dispatch) => {
  dispatch(setLoading(true));
  const url = `${BASEURL}/search?term=restaurants&location=Berlin&limit=10`;
  var obj = {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
  };
  fetch(PROXYURL + url, obj)
    .then((response) => response.json())
    .then((result) => {
      if (result && result.businesses) {
        dispatch(setRestaurants(result.businesses));
      } else {
        dispatch(setLoading(false));
      }
    })
    .catch((error) => {
      dispatch(setRestaurantFailure(error));
    });
};

export const getRestaurantsByType = (selectedType) => (dispatch) => {
  dispatch(setLoading(true));
  const url = `${BASEURL}/search?term=restaurants&location=Berlin&limit=10&categories=${selectedType}`;
  var obj = {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
  };
  fetch(PROXYURL + url, obj)
    .then((response) => response.json())
    .then((result) => {
      if (result && result.businesses) {
        dispatch(setType(selectedType, result.businesses));
      } else {
        dispatch(setLoading(false));
      }
    })
    .catch((error) => {
      dispatch(setRestaurantFailure(error));
    });
};
