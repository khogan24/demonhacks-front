import React, {useState, useEffect}from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function DropDownStops(props){

    const [listObject, setList] = useState(props.listObject);

    return(
    <DropdownButton id = "dropdown-basic-button" title = "Pick your stop!" >
    {this.props.listObject.map(  (listString) =>     <Dropdown.item>this.props.listObject[1]</Dropdown.item>) }
    </DropdownButton>
    );
}

export default DropDownStops;