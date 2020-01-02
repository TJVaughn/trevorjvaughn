import React, { Component } from 'react';
import nedOImg from './images/ned-officials-blank.png';
import ttlImg from './images/ttl-blank.png';
import weatherAppImg from './images/whether-app.png';
import ContactCard from './ContactCard'


const portfolioItemsArray = [
    {
        title: "WhetherApp",
        desc: "Find out whether you want to go outside or not!",
        link: 'https://whetherapp.co',
        img: weatherAppImg,
        type: 'Portfolio App'
    },
    {
        title: "NED Officials",
        link: "https://nedofficials.com/",
        desc: "Built from scratch to connect New England Hockey Officials!",
        img: nedOImg,
        type: 'Client Site'
    },
    {
        title: "Transformation Through Love",
        link: "https://transformationthroughlove.com/",
        desc: "Revamped website to bring mindfulness to more people in a more accessible way!",
        img: ttlImg,
        type: 'Client Site'
    }
]

class Portfolio extends Component {
    portfolioItemsMap = portfolioItemsArray.map(item => 
        <div className="Portfolio-items-inner" key={`${item.title}-${item[item]}`}>
            <div className="Portfolio-items-text">
                    <h3>{item.title}</h3>
                    {item.desc}
                </div>
                <p>{item.type}</p>   
                <a className="Portfolio-img" target="_blank" rel="noopener noreferrer" href={item.link}>
                    <img className="Portfolio-items-img" src={item.img} alt={item.title} />
                </a>    
                 
        </div>
        )

    render(){
    	return(
            <div>
                <div className="Portfolio-items-container fade-in">
                    {this.portfolioItemsMap}
    		    </div>
                <ContactCard />
            </div>
    		
    	);
    }
}
export default Portfolio ;