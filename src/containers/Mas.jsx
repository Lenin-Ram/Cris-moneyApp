import React from 'react';
import '../assets/style/Home.scss';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';




const Mas = () => {

  return( 
         
         
         <>

         <h1>HELLO</h1>
         
         <Form id='background-mas'>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
      
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Select
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelectMulti">
      Select Multiple
    </Label>
    <Input
      id="exampleSelectMulti"
      multiple
      name="selectMulti"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Text Area
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
  </FormGroup>
  
  <FormGroup tag="fieldset">
    <legend>
      Radio Buttons
    </legend>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Option one is this and that—be sure to include why it's great
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Option two can be something else and selecting it will deselect option one
      </Label>
    </FormGroup>
    <FormGroup
      check
      disabled
    >
      <Input
        disabled
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Option three is disabled
      </Label>
    </FormGroup>
  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      Check me out
    </Label>
  </FormGroup>
  <Button>
    Submit
  </Button>
</Form>

       
         
         </>
                  
         
           
             );
         }
         
         
         export default Mas;