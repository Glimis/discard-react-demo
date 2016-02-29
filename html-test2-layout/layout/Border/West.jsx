import React from 'react'


export default class West extends React.Component {
        render() {
            var {children}=this.props;
            return <div className="border-west"> { children} < /div>
        }
}