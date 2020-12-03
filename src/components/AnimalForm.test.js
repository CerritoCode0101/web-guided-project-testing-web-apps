import React from 'react';
import { render, screen} from '@testing-library/react';
import AnimalForm from './AnimalForm';

test("renders without errors", ()=>{
    render(<AnimalForm />);
});

