import React from "react";
import './Filter.scss'
import {
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl,
  Button
} from "react-bootstrap";

const Filter = ({
  title,
  inputPlaceHolder,
  dropDownProps,
  handleTypeChange,
  selectedType,
  handleTextChange,
  filterText,
  clearButtonText,
  handleClearItems
}) => {
  return (
    <InputGroup className="mb-3 filter-group">
      <DropdownButton
        className = 'dropdown-button'
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title={title}
        id="input-group-dropdown-1"
      >
        {dropDownProps.map((item, index) => {
          return (
            <>
            <Dropdown.Item
              key={index}
              active={selectedType === item.data}
              onClick={() => handleTypeChange(item.data)}
              href="#"
            >
              {item.type}
            </Dropdown.Item>
            <Dropdown.Divider className = 'divider'/>
            </>
          );
        })}
      </DropdownButton>
      <FormControl
        placeholder={inputPlaceHolder}
        aria-describedby="basic-addon1"
        onChange={handleTextChange}
        value={filterText}
      />
          <Button className = 'clear-button' variant="dark" onClick = {handleClearItems}>{clearButtonText}</Button>
    </InputGroup>
  );
};

export default Filter;
