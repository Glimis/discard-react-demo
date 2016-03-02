import React from 'react'


export default class NavLink extends React.Component {
    render() {
        var {data}=this.props;
        console.log(data.url)
        return (<tr className="pointer" onClick={()=>{
           window.open(data.url+"?username="+data.username+"&password="+data.password);
       
           
        
        }}>
        		    <td className="info">{data.title}</td>
                <td className="warning">{data.username}</td>
                <td className="danger">{data.password}</td>
                <td className="success"><iframe className="iframe" src={data.url}></iframe></td>
				</tr>)
    }
}