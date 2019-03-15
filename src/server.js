import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import Layout from "./components/Layout";

const app = express();

// app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
    const jsx = ( <Layout /> );
    const reactDom = renderToString( jsx );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom ) );
} );

app.listen( 2048 );

function htmlTemplate( reactDom ) {
    // function hi() {
    //     return () => {console.log('hi') }
    // }
    // const hello = hi;
    // hello();
    return `
       <!DOCTYPE html>
        <html>
        <head>
        <title>Title of the document</title>
        </head>

        <body>
            <div id="app">${ reactDom }</div>
        </body>

        </html>
    `;
}
