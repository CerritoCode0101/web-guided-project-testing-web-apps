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
    const header = screen.queryByText(/add new animal/i);
    
    //Assert: Test our app response
    
    //Positive Assertions
    expect(header).toBeTruthy();
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/add new animal/i);

    //Negative Assertions
    expect(header).not.toBeFalsy();
    expect(header).not.toHaveTextContent(/add old animal/i);
});