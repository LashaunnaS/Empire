import React from 'react';

import {
    Form,
    SearchInput,
} from "./searchFormStyles";

const SearchForm = (props) => (
    <Form onSubmit={e => e.preventDefault()}>
        <SearchInput
            type="text"
            placeholder={props.placeHolder}
            value={props.cityQuery}
            onChange={props.handleSearch}
        />
    </Form>
)


export default SearchForm;