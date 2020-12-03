import React from 'react';
import { render, screen} from '@testing-library/react';
import AnimalForm from './AnimalForm';

test("renders without errors", ()=>{
    render(<AnimalForm />);
});

test("user can fill out and submit form", ()=> {
    //Arrange: setup react component
    render(<AnimalForm />);

    //Act: Submit our form:
    //  1. Query for our form elements.
    //  2. Type into our form elements.
    //  3. Query for our form button.
    //  4. Click our form button.
    const speciesInput = screen.getByLabelText(/species:/i);
    console.log(speciesInput);

    //Assert: Test to see is submit worked
    //  1. Find our submitted species name
});