import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ value, onChange }) => {
    return (
        <div className="input-group shadow mb-3">
            <input
                className="form-control"
                onChange={onChange}
                type="text"
                placeholder="Search"
                value={value}
            />
        </div>
    );
};

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchInput;
