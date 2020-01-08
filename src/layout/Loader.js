// MODULES
import React from "react";

// LOADER
import { Loader } from "semantic-ui-react";

export const LoaderComponent = () => {

    return(
        <div id="loading-container">
            <Loader active />
        </div>
    );
}