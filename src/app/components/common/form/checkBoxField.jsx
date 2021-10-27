import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxField = ({ name, value, onChange, children, error }) => {
    const handleChange = () => {
        onChange({ name: name, value: !value });
    };

    const getInputClasses = () => {
        return 'form-check-input' + (error ? ' is-invalid' : '');
    };

    return (
        <div className="form-check m-4">
            <input
                onChange={handleChange}
                className={getInputClasses()}
                type="checkbox"
                value=""
                checked={value}
                id={name}
            />
            <label className="form-check-label is-invalid" htmlFor={name}>
                {children}
            </label>
            {error && (
                <div className="checkbox-invalid-feedback invalid-feedback ps-0">
                    {error}
                </div>
            )}
        </div>
    );
};
CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    error: PropTypes.string
};

export default CheckBoxField;
