import React from "react";
import { Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

export default function SearchBox() {
  return (
    <>
      <InputGroup>
        <Input type="text" placeholder="Search todo" />
        <InputGroupAddon addonType="append">
          <Button color="secondary">
            <i className="far fa-search"></i>
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </>
  );
}
