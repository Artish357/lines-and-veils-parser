import * as React from "react";
import {createRoot} from "react-dom/client";

const body = document.getElementById("root");
if (body){
    const root = createRoot(body);
    root.render(
        <h1>Haha :)</h1>
    )
}