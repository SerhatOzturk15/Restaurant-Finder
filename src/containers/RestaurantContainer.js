import React, { useEffect } from "react";
import { List, Filter, ListItem, AppBar } from "./../components";
import Container from "react-bootstrap/Container";
import { PROXYURL,BASEURL } from "./../Util";

const RestaurantContainer = () => {
  useEffect(() => {
    const url = `${BASEURL}term=restaurants&location=Berlin`;
    var obj = {
      method: "GET",
      headers: new Headers({
        'Authorization': 'Bearer oSJvaTmFtYVCEJcMsLFA4uRljDOILtEfp0sTWflSWclozapMP1rCZ6uttKPOoYnrdUGcTXI0ztOf3rTPVSBRa1JjngqcoTKD30YUp7yKxhZCNzS4bsZV_DqzzkAwXXYx', 
        'Content-Type': 'application/json',
      }), 
    };
    fetch(PROXYURL + url, obj)
    .then((response) => response.json())
    .then(result => console.log(result))
  }, []);

  return (
    <>
      <AppBar title="Restaurant Finder App" />
      <Filter/>
      <List />
    </>
  );
};

export default RestaurantContainer;
