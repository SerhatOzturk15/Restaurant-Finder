import { PROXYURL, BASEURL, token } from "./../Util";

export const getRestaurants = () => {
  return new Promise((resolve, reject) => {
    const url = `${BASEURL}term=restaurants&location=Berlin&limit=10`;
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
        resolve(result.businesses);
      })
      .catch((error) => reject(new Error(error)));
  });
};

export const getRestaurantsByType = (selectedType) => {
  return new Promise((resolve, reject) => {
    const url = `${BASEURL}term=restaurants&location=Berlin&limit=10&categories=${selectedType}`;
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
        resolve(result.businesses);
      })
      .catch((error) => reject(new Error(error)));
  });
};
