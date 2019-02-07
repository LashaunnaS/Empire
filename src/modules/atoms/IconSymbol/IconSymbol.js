import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    IconStyle
} from "./iconSymbolStyles";


const IconSymbol = (props) => (
    <IconStyle style={props.style}>
        <FontAwesomeIcon
            icon={props.icon}
            size={props.size}
        />
    </IconStyle>
);


export default IconSymbol;