import React from "react";

class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            fName: "",
            dept: "",
            rating: "",
            details: [],
            statusCondition: true
        }
    }

    getName = (e) => {
        this.setState({ fName: e.target.value })
    }

    getDept = (e) => {
        this.setState({ dept: e.target.value })
    }

    getRating = (e) => {
        this.setState({ rating: e.target.value })
    }



    handleSubmit = (e) => {
        e.preventDefault();
        if ((this.state.fName.length && this.state.dept.length && this.state.rating.length) === 0) {
            return;
        }
        const newDetail = {
            nameValue: this.state.fName,
            deptValue: this.state.dept,
            ratingValue: this.state.rating,
            id: Date.now()
        }
        this.setState(state => ({
            details: state.details.concat(newDetail)
        }))

        this.setState({
            fName: '',
            dept: '',
            rating: ''
        })

        this.setState({ statusCondition: !this.state.statusCondition })
    }



    back = (e) => {
        this.setState({ statusCondition: !this.state.statusCondition })
    }


    render() {
        return (
            <div className="body">
                <h1>Employee Feedback Form</h1>
                {
                    this.state.statusCondition ?
                        <div>
                            <form className="form" onSubmit={this.handleSubmit}>
                                <label for="name" className="label">Name:</label>
                                <input type="text" id="name" className="formInput" value={this.state.fName} onChange={this.getName}></input><br /><br />

                                <label for="department" className="label" >Department:</label>
                                <input type="text" id="department" className="formInput" value={this.state.dept} onChange={this.getDept}></input><br /><br />

                                <label for="rating" className="label">Rating:</label>
                                <input type="number" id="rating" className="formInput" value={this.state.rating} onChange={this.getRating}></input><br /><br />
                                <input type="submit" className="button" ></input>
                            </form >
                        </div>
                        :
                        <div>
                            <div className="empDetails">
                                {
                                    this.state.details.map(item => {
                                        return <>
                                            <div className='finalData' key={item.id}>
                                                <p>Name : {item.nameValue} | </p>
                                                <p>| Department : {item.deptValue} | </p>
                                                <p>| Rating : {item.ratingValue}</p>
                                            </div>

                                        </>
                                    })

                                }
                            </div>
                            <button onClick={this.back} className="backButton">Go Back</button >
                        </div>
                }
            </div>
        )
    }
}

export default Body;