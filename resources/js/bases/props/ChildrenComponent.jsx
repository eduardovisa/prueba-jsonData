import PropTypes from "prop-types";

export const ChildrenComponent = (props) => {
    const { btnText, ...rest } = props;
    return <button>{btnText}</button>;
};

ChildrenComponent.PropTypes = {
    btnText: PropTypes.string.isRequired,
};
