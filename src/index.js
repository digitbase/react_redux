import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as servicWorker from "./servicWorker";
import router from "./routers";
import modelIndex from "./models";

import dva from "dva";

let app = new dva();

app.router(router);
app.model(modelIndex);

app.start("#root");
servicWorker.unregister();
