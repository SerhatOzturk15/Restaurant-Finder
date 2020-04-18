import React from 'react';
import Table from 'react-bootstrap/Table';
import {ListItem} from '../index'
import './List.scss'

const List = ({restaurants, header}) => {

    return(<Table striped bordered hover variant="dark">
    <thead>
    <tr>
      {header.map((item,index) => {
        return <th key = {index} >{item}</th>
      })}
      </tr>
    </thead>
    <tbody>
      {restaurants.map((restaurant, index) => {
        return <ListItem key = {restaurant.id} order = {index + 1} restaurant = {restaurant}></ListItem>
      })}
    </tbody>
  </Table>)
}

export default List