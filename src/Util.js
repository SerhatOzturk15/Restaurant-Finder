export const BASEURL = "https://api.yelp.com/v3/businesses";
export const PROXYURL = "https://cors-anywhere.herokuapp.com/";
export const token =
  "oSJvaTmFtYVCEJcMsLFA4uRljDOILtEfp0sTWflSWclozapMP1rCZ6uttKPOoYnrdUGcTXI0ztOf3rTPVSBRa1JjngqcoTKD30YUp7yKxhZCNzS4bsZV_DqzzkAwXXYx";

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
