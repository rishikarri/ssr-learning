import React from "react";
import ReactDOM from "react-dom";BrowserRouter
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";


const app = document.getElementById( "app" );
ReactDOM.hydrate(<BrowserRouter><Layout /></BrowserRouter>, app );
