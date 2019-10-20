import React,{useState} from 'react';
import "./Form.css"
import {Form} from 'react-bootstrap';
import {Col,Row,Container} from 'react-bootstrap';
import DropDown from './DropDown'
import DropDownStops from './DropDownStops'
function FormPara(){

    //API SHIT HERE GET DIRECTIONS
    const [jsonList,setJsonList] = useState({text:"sample",text2:"text"})

    return (
        <Form class = "formDiv">

        <Form.Group as={Row} controlId = "formHorizontalBusRoute">
        <Form.Label sm = {1} column class = "busRoute">
            <b>Bus Route</b>
        </Form.Label>
        
        <Col sm = {0}>
        <Form.Control  />
        </Col>

        </Form.Group>
     
        <Form.Group>
        <Form.Label sm = {0} column class = "cardinals">
            <b>Please Select the Direction: </b>
        </Form.Label>
        <Col  id = "colDrop" sm = {0}><DropDown listObject = {jsonList} /></Col>

            {/*   
            { let passedList = ["I eat ass", " on the daily"] }

            <DropDownStops />
            */}
        </Form.Group> 
        
        </Form>
    );
}

export default FormPara;