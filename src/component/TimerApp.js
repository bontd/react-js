import React, { Component } from 'react';
import Timer from './Timer/Timer';

class TimerApp extends React.Component {
	render(){
		return(
			<div>
				<div className="container pd-top-100">
					<div className="row">
						<div className="col-md-4">
							<Timer />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default TimerApp;