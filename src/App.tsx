import React from "react";
import {
  SampleAppContextProvider,
  SampleAppContext,
} from "sample-app-shared/dist/esm/contexts/sample-app";

import { Module1 } from "./components/Module1";

function App() {
  return (
    <SampleAppContextProvider>
      <SampleAppContext.Consumer>
        {(data) => {
          return (
            <div style={{ padding: 16 }}>
              <div style={{ textAlign: "center" }}>
                <h1>Welcome to sample-app-module-1</h1>
                <p>Category: {data.product}</p>
              </div>

              <div style={{ marginTop: 32 }}>
                <Module1 />
              </div>
            </div>
          );
        }}
      </SampleAppContext.Consumer>
    </SampleAppContextProvider>
  );
}

export default App;
