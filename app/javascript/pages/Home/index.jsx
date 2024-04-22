import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
	<div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
	    <div className="jumbotron jumbotron-fluid bg-transparent">
		<div className="container secondary-color">
		    <h1 className="display-4">Application messages</h1>
		    <p className="lead">List of application messages</p>
		    <hr className="my-4" />
		    <Link
			to="/messages"
			className="btn btn-lg custom-button"
			role="button">
			View messages
		    </Link>
		</div>
	    </div>
	</div>
    )
}

export default Home

