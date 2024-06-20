import React from "react";

class ClassBasedUserComponent extends React.Component{

    // passing props to class...
    constructor(props){
        super(props);

        this.state = {
            count:0,
            count2 :2
        }
        console.log('contructor...')
    }

    async componentDidMount(){
        console.log('mounted...'+ this.coucount2nt2)
    }

    componentDidUpdate(){
        console.log('component update call')
        // this.setState({
        //     count2:this.state.count2+1
        // })
    }

    componentWillUnmount(){
        console.log('clearing..')
    }

    // local state variable...


    render(){
        console.log('render')
        const {fName, lName} = this.props;
        const {count} = this?.state;

    return <div>
            <h1>Class Based Component</h1>
            <h2>I am {fName} {lName}</h2>
            <button onClick={ () => {
                
                console.log('btn clicked');

                this.setState( {
                    count : this.state.count + 2,
                })

            }} >Count - {count}</button>
            <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, autem?
            </p>
        </div>
    }
}

export default ClassBasedUserComponent;