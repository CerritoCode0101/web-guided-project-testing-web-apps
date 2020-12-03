import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "./App";

test("example test 1", ()=>{
    console.log("test passes");
});

test("example test 2", ()=>{
    console.log("test passes");
});

test("example test 3", ()=>{
    console.log("test passes");
    throw new Error("fake error");
});