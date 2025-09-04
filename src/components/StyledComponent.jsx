import React from 'react';
import styled from "styled-components";
const Button = styled.button`
  background-color:red;
  border:none;
  border-radius:5px;
  padding-top:10px;
  padding-bottom:10px;
  padding-left:20px;
  padding-right:20px;
`;
const Div = styled.div`
width:100px;
height:200px;
border:none;
background-color:red;
margin-top:50px;
`
const StyledComponent = () => {
    return (
        <div>
            <Button >Button</Button>
            <Div>

            </Div>
        </div>
    );
};

export default StyledComponent;