import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Layout from "./components/Layout";
import emoji from "node-emoji"

const app = express();

app.use( express.static( "dist/client-dist" ));

app.get( "/*", ( req, res ) => {
    const context = {};
    const reactApp = (
        <StaticRouter context={context} location={req.url}>
            <Layout />
        </StaticRouter>
    );
    const htmlMarkup = renderToString( reactApp );
    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end(htmlTemplate(htmlMarkup));
} );

app.listen( 2048 );
console.log(emoji.get('ear'), ' Listening on port 2048', emoji.get('ear'))

function htmlTemplate(htmlMarkup) {
    return `
       <!DOCTYPE html>
        <html>
        <head>
        <title>Title of the document</title>
        </head>

        <body>
            <div id="app">${ htmlMarkup }</div>
            <script src="./client-bundle.js"></script>
        </body>
        </html>
    `;
}
