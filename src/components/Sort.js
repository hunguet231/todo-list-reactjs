import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

export default function Sort() {
  return (
    <>
      <FormGroup>
        <Label for="exampleSelect">Sort by</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>--</option>
          <option>Level</option>
          <option>Name</option>
          <option>Time (oldest)</option>
          <option>Time (newest)</option>
        </Input>
      </FormGroup>
    </>
  );
}
