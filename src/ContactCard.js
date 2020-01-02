import React, { Component } from 'react';

class ContactCard extends Component {
    render(){
    	return(
    		<div>
    			<div className="Contact-card-container fade-in">
                    <a className="Contact-card" href="mailto:hauck.trevor@gmail.com">Email me</a>
                </div>
    		</div>
    	);
    }
}
export default ContactCard ;