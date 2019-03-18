import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Layout from "./components/Layout";

const app = express();

app.use( express.static( "dist/client-dist" ));

app.get( "/", ( req, res ) => {
    const context = {};
    console.log(req.url, 'req.url');
    const jsx = (
        <StaticRouter context={context} location={req.url}>
            <Layout />
        </StaticRouter>
    );
    const reactDom = renderToString( jsx );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    console.log('App loaded on port 2048')
    res.end( htmlTemplate( reactDom ) );
} );

app.listen( 2048 );

function htmlTemplate( reactDom ) {
    return `
       <!DOCTYPE html>
        <html>
        <head>
        <title>Title of the document</title>
        </head>

        <body>
            <div id="app">${ reactDom }</div>
            <script src="./client-bundle.js"></script>
        </body>

        </html>
    `;
}
