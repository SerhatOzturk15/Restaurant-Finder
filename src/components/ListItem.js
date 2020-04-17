import React from "react";

const ListItem = ({ restaurant, order }) => {
  return (
    <tr>
      <td>{order}</td>
      <td>{restaurant.name}</td>
      <td>{restaurant.price}</td>
      <td>{restaurant.phone}</td>
      <td>{restaurant.rating}</td>
    </tr>
  );
};

export default ListItem;
