import React, { Component } from "react"

class FieldDashboard extends Component {

  milkCows = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldMilk()
    }
  }

  shearSheep = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldWool()
    }
  }

  collectEggs = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldEggs()
    }
  }

  render() {
    return (
      <div className="FieldDashboard">
        <h1>Field</h1>

        {this.props.field.contents[0] ? (
              <>
                <h3 className="item-heading">{this.props.field.contents[0].name} Field</h3>
                <dl>
                  <p>Hunger level: {this.props.field.contents[0].hunger}</p>
                </dl>
              </>
        ) : (
          <h3>This field is empty</h3>
        )}
          {this.props.field.contents[0] && (
            <div>
          <p>{this.props.field.contents.length}{" "}{this.props.field.contents[0].name}s</p>
          <p>
            {this.props.field.contents[0].name === "Cow" && (
              <button className="btn" onClick={this.milkCows}>Milk them</button>
            )}
            {this.props.field.contents[0].name === "Sheep" && (
              <button className="btn" onClick={this.shearSheep}>Shear them</button>
            )}
            {this.props.field.contents[0].name === "Chicken" && (
              <button className="btn" onClick={this.collectEggs}>Collect eggs</button>
            )}
          </p>
          </div>
        )}
      </div>
    )
  }
}

export default FieldDashboard
