import React from 'react';


export default class searchwine extends React.Component{
constructor(props){
super(props);
this.state ={
}
}


render(){
return (
    <div>
    <button>Search</button>
    {this.props.text}
    </div>
);

}

}

