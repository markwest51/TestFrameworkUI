import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class MainComponent extends React.Component {
    render() {
        return <div>Hello {this.props.message}</div>;
    }
}

MainComponent.propTypes = {
    message: PropTypes.string
};

ReactDOM.render(
    <MainComponent message="Hello Client" />,
    document.querySelector( '.js-app' )
);