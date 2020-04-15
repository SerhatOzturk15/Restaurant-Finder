import React, { useEffect } from "react";
import { List, Filter, ListItem, AppBar } from "./../components";
import Container from "react-bootstrap/Container";
import { BASEURL } from "./../Util";

const RestaurantContainer = () => {
  useEffect(() => {
    const url = `${BASEURL}term=restaurants&location=Berlin`;
    var obj = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "*",
      },
    };
    fetch(url, obj).then((response) => console.log(response.json()));
  }, []);

  return (
    <>
      <AppBar title="Restaurant Finder App" />
      <List />
    </>
  );
};

export default RestaurantContainer;
