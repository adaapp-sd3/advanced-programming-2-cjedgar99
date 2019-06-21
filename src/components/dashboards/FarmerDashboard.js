import React, { Component } from 'react';

class FarmerDashboard extends Component {

  render() {
    return (
      <div className="FarmerDashboard">
        <dl>
          <h1>Current budget: {this.props.farmer.budget}</h1>
          {this.props.farmer.myFarm && (<>
          <h4>Livestock</h4>
          <div className="container">
            <div className="container-item">
              <p><strong>Total cows:</strong></p> 
              <p>{this.props.farmer.myFarm.cows.total}</p>
            </div>
            <div className="container-item">
              <p><strong>Total sheep:</strong></p> 
              <p>{this.props.farmer.myFarm.sheep.total}</p>
            </div>
            <div className="container-item">
              <p><strong>Total chickens:</strong></p> 
              <p>{this.props.farmer.myFarm.chickens.total}</p>
            </div>
          </div>
            </>
          )}
          {this.props.farmer.myFarm && (<>
            <h4>Produce</h4>
            <div className="container">
              <div className="container-item">
                <p><strong>Total milk:</strong></p> 
                <p>{this.props.farmer.myFarm.milk.total} pints</p>
              </div>
              <div className="container-item">
                <p><strong>Total wool:</strong></p> 
                <p>{this.props.farmer.myFarm.wool.total} kilos</p>
              </div>
              <div className="container-item">
                <p><strong>Total eggs:</strong></p> 
                <p>{this.props.farmer.myFarm.eggs.total} eggs</p>
              </div>
            </div>

            <h4>Resources</h4>
            <div className="container">
              <div className="container-item">
                <p><strong>Total straw:</strong></p> 
                <p>{this.props.farmer.myFarm.straw.total} bails</p>
              </div>
              <div className="container-item">
                <p><strong>Total seeds:</strong></p> 
                <p>{this.props.farmer.myFarm.seeds.total} bunches</p>
              </div>
            </div>
            </>
          )}
        </dl>
      </div>
    )
  }
}

export default FarmerDashboard;
