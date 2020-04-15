import React from 'react';
import {InputGroup, Dropdown, DropdownButton,FormControl} from 'react-bootstrap'

const Filter = () => {

    return(  <InputGroup className="mb-3" style = {{marginTop: '100px'}}>
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Filter by Type"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl  placeholder="Search Places by their name" aria-describedby="basic-addon1" />
  </InputGroup>)
}

export default Filter