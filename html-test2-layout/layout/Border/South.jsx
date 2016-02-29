import React from 'react'


export default class South extends React.Component {
        render() {
            var {children}=this.props;
            return <div className="border-south"> { children} < /div>
        }
}