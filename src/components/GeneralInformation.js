import { Component } from "react"

class GeneralInformation extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const change = this.props.changeFunctions;
        const props = this.props.props;
        return(
            <form>
                <h2>General Information</h2>
                <div className="general-form">
                    <div className="general-left">
                        <label htmlFor="full-name">Full Name:</label>
                        <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        value={props.name}
                        required
                        onChange={(e)=> change.updateName(e.target.value)}
                        />
                        <br/><br/>
                        <label htmlFor="title">Profession:</label>
                        <input
                        type="text"
                        id="title"
                        name="title"
                        value={props.title}
                        required
                        onChange={(e)=> change.updateTitle(e.target.value)}
                        />
                        <br/><br/>
                        <label htmlFor="email">Email:</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={props.email}
                        onChange={(e)=> change.updateEmail(e.target.value)}
                        required/><br/><br/>
                    </div>
                    <div className="general-right">
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={props.phone}
                        onChange={(e)=> change.updatePhone(e.target.value)}
                        required/><br/><br/>
                        <label htmlFor="address">Address:</label>
                        <input
                        type="text"
                        id="address"    qa
                        name="address"
                        value={props.address}
                        onChange={(e)=> change.updateAddress(e.target.value)}
                        required/><br/><br/>
                        <label htmlFor="image">Image URL:</label>
                        <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={(e)=> {
                            if(e.target.files.length)
                            change.updateImage(e.target.files[0]
                            )}}
                        required/><br/><br/>
                    </div>
                </div>
            </form>
        )
    }
}

export default GeneralInformation;