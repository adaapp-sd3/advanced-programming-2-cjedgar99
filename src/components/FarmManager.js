import React, { Component } from "react"
import FarmerDashboard from "./dashboards/FarmerDashboard"
import FieldDashboard from "./dashboards/FieldDashboard"
import MarketDashboard from "./dashboards/MarketDashboard"
import WeatherDashboard from "./dashboards/WeatherDashboard"

class FarmManager extends Component {
  render() {
    return (
      <div className="FarmManager">
        
        {this.props.farmer.showUI && (
          <div>
            <FarmerDashboard farmer={this.props.farmer} level={this.props.level}/>
            <WeatherDashboard /> 
          </div>
        )}
        {this.props.farm.fields.map((field,i) => (
          <>{field.showUI && <FieldDashboard key={i} field={field} />}</>
        ))}
        {this.props.market.showUI && (
          <MarketDashboard market={this.props.market} />
        )}
      </div>
    )
  }
}

export default FarmManager
