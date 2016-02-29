import React from 'react'


export default class North extends React.Component {
        render() {
            var {children}=this.props;
            return <div className="border-north"> { children} < /div>
        }
}