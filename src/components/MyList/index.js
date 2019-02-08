import React, { Component, Fragment } from "react";
import Header from '../../modules/molecules/Header/Header.js';


class MyList extends Component {

    render() {
        return (
            <Fragment>
                <Header
                    placeHolder={`Revisit...`}
                />

            </Fragment>

        )
    }
}

export default MyList;