import React from 'react'


export default class Center extends React.Component {
        render() {
            var {children}=this.props;
            return <div className="border-center"> { children} < /div>
        }
}