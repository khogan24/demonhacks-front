import React, {useState, useEffect}from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './Dropdown.css';
function DropDown(props){

    

    return(
    <DropdownButton size = "lg" class = "dropdown-menu" id = "dropdown-item-button" title = "Direction" >
    <Dropdown.Item  as = 'button'> {props.listObject['text']}</Dropdown.Item>
    <Dropdown.Item as = 'button'>{props.listObject['text2']}</Dropdown.Item> 
    </DropdownButton>
    );
}

export default DropDown;