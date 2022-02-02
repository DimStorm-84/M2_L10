import React from "react";
import propTypes from "prop-types";
const RadioField = ({ options, name, onChange, value, label }) => {
    return (
        <div className="md-4">
            <label className="form-label">{label}</label>
            {options.map((option) => (
                <div
                    key={option.name + "_" + option.value}
                    className="form-check form-check-inline"
                >
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={option.name + "_" + option.value}
                        checkted={option.value === value}
                        value={option.value}
                        onChange={onChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={option.name + "_" + option.value}
                        value="option1"
                    >
                        {option.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

RadioField.propType = {
    option: propTypes.array,
    name: propTypes.string,
    onChange: propTypes.func,
    value: propTypes.string,
    label: propTypes.string
};

export default RadioField;
