import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);

    userEvent.type(speciesInput, "canine");
    userEvent.type(ageInput, "3");
    userEvent.type(notesInput, "the cutest!!!!");

    const button = screen.getByRole("button");
    userEvent.click(button);
    
    //Assert: Test to see is submit worked
    //  1. Find our submitted species name
    const newAnimal = screen.queryByText(/canine/i);
});