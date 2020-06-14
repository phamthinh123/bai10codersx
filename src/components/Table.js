import React, { Component } from 'react';
import "./Table.css"
class Table extends Component{
	render(){

		const {content}=this.props;
		let className="Main";
		if(content.stt%2===0){
			className += " is-even"
		}

		return(
<div className="Table">
<table className={className}>
<tr>
<td>{this.props.content.stt}</td>
<td>{this.props.content.First}</td>
<td>{this.props.content.Last}</td>
<td>{this.props.content.Handle}</td>
</tr>
</table>
</div>
			)
	}
}
export default Table