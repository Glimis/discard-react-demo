import React from 'react'


export default class East extends React.Component {
        render() {
            var {children}=this.props;
            return <div className="border-east"> { children} < /div>
        }
}