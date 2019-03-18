import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Layout from "./components/Layout";
var emoji = require('node-emoji')

const app = express();

app.use( express.static( "dist/client-dist" ));

app.get( "/*", ( req, res ) => {
    const context = {};
    console.log(req.url, 'req.url');
    const jsx = (
        <StaticRouter context={context} location={req.url}>
            <Layout />
        </StaticRouter>
    );
    const reactDom = renderToString( jsx );
    if (context.url) {
        console.log(context.url, 'context.url');
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        res.writeHead( 200, { "Content-Type": "text/html" } );
        res.end( htmlTemplate( reactDom ) );
    }
} );

app.listen( 2048 );

console.log(emoji.get('ear'), ' Listening on port 2048', emoji.get('ear'))
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
