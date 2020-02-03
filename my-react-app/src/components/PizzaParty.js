import React, {Component} from 'react';
import '../App.css';


class PizzaParty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            globalTitle: document.title

        }
    }


        componentDidMount = () => {
            console.log('Rendered Form')
        }

        handleChange = (event) => {
            this.setState({
                title: event.target.value
            })
        }

        handleSubmit = (event) =>  {
            this.setState({
                globalTitle: "My form -"
            })

            event.preventDefault();
        }


        componentDidUpdate = () => {
            console.log("Title changed")
            document.title = this.state.globalTitle
        }
        


    render () {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form">
                    <label className='form-input' htmlFor="name">Participation Pizza Party</label>
                    <input className='form-input'type="text" id="name" onChange={this.handleChange} />
                    <input className='form-button'type='submit'/>
                </form>
            </div>
        );
    
    }

}

export default PizzaParty;