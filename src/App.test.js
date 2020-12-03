import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "./App";

test("renders without errors", ()=>{
    render(<App />);
});

test("renders the app header", ()=> {
    //Arrange: Setup our react component
    render(<App />);

    //Act: Execute our behavior
    const header = screen.queryByText("Add New Animal");
    
    //Assert: Test our app response
    
});