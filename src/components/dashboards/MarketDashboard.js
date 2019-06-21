import React, { Component } from "react"

class MarketDashboard extends Component {

  buyItem = item => {
    if(this.props.market.currentFarmer.budget <= 0) {
      alert("You do not have enough money!");
      return;
    }
    if (item === "straw" && this.props.market.currentFarmer.budget > 100) {
      this.props.market.currentFarmer.myFarm.straw.total += 100
      this.props.market.currentFarmer.budget -= 100
    }
    if (item === "cow" && this.props.market.currentFarmer.budget > 100) {
      this.props.market.currentFarmer.myFarm.buyCow();
      this.props.market.currentFarmer.budget -= 150
      this.props.market.currentFarmer.myFarm.cows.total += 1;
    }
    if (item === "sheep" && this.props.market.currentFarmer.budget > 100) {
      this.props.market.currentFarmer.myFarm.buySheep();
      this.props.market.currentFarmer.budget -= 150
      this.props.market.currentFarmer.myFarm.sheep.total += 1;
    }
    if (item === "chicken" && this.props.market.currentFarmer.budget > 100) {
      this.props.market.currentFarmer.myFarm.buyChicken();
      this.props.market.currentFarmer.budget -= 150
      this.props.market.currentFarmer.myFarm.chickens.total += 1;
    }

  }

  sellItem = item => {
    if(item === "milk" && this.props.market.currentFarmer.myFarm.milk.total > 0) {
      this.props.market.currentFarmer.budget += this.props.market.currentFarmer.myFarm.milk.total * 1.5;
      this.props.market.currentFarmer.myFarm.milk.total = 0;
    }
    if(item === "wool" && this.props.market.currentFarmer.myFarm.wool.total > 0) {
      this.props.market.currentFarmer.budget += this.props.market.currentFarmer.myFarm.wool.total * 1.5;
      this.props.market.currentFarmer.myFarm.wool.total = 0;
    }
    if(item === "eggs" && this.props.market.currentFarmer.myFarm.eggs.total > 0) {
      this.props.market.currentFarmer.budget += this.props.market.currentFarmer.myFarm.eggs.total * 1.5;
      this.props.market.currentFarmer.myFarm.eggs.total = 0;
    }
    if (item === "cow" && this.props.market.currentFarmer.myFarm.cows.total > 0) {
      this.props.market.currentFarmer.budget += 150
      this.props.market.currentFarmer.myFarm.cows.total -= 1;
      this.props.market.currentFarmer.myFarm.cows.objects.pop();
    }
    if (item === "chicken" && this.props.market.currentFarmer.myFarm.chickens.total > 0) {
      this.props.market.currentFarmer.budget += 100
      this.props.market.currentFarmer.myFarm.chickens.total -= 1;
      this.props.market.currentFarmer.myFarm.chickens.objects.pop();
    }
    if (item === "sheep" && this.props.market.currentFarmer.myFarm.sheep.total > 0) {
      this.props.market.currentFarmer.budget += 100
      this.props.market.currentFarmer.myFarm.sheep.total -= 1;
      this.props.market.currentFarmer.myFarm.sheep.objects.pop();
    }
  }

    render() {
      return (
        <div className="MarketDashboard">
          <h1>Market</h1>
          <p>Welcome to the market! See our prices below:</p>

          <h3>Sell</h3>
          <div className="container">
            <dl class="item">
              <dt>Milk</dt>
              <button class="btn" onClick={() => this.sellItem("milk")}>Sell Milk</button>
            </dl>
            <dl class="item">
              <dt>Eggs</dt>
              <button class="btn" onClick={() => this.sellItem("eggs")}>Sell Eggs</button>
            </dl>
            <dl class="item">
              <dt>Wool</dt>
              <button class="btn" onClick={() => this.sellItem("wool")}>Sell Wool</button>
            </dl>
            <dl class="item">
              <dt>Cow</dt>
              <button class="btn" onClick={() => this.sellItem("cow")}>Sell Cow</button>
            </dl>
            <dl class="item">
              <dt>Sheep</dt>
              <button class="btn" onClick={() => this.sellItem("sheep")}>Sell Sheep</button>
            </dl>
            <dl class="item">
              <dt>Chicken</dt>
              <button class="btn" onClick={() => this.sellItem("chicken")}>Sell Chicken</button>
            </dl>
          </div>
          <h3>Buy</h3>
          <div className="container">
            <dl class="item">
              <dt>Straw</dt>
              <button class="btn" onClick={() => this.buyItem("straw")}>Buy Straw</button>
            </dl>
            <dl class="item">
              <dt>Cow</dt>
              <button class="btn" onClick={() => this.buyItem("cow")}>Buy Cow</button>
            </dl>
            <dl class="item">
              <dt>Sheep</dt>
              <button class="btn" onClick={() => this.buyItem("sheep")}>Buy Sheep</button>
            </dl>
            <dl class="item">
              <dt>Chicken</dt>
              <button class="btn" onClick={() => this.buyItem("chicken")}>Buy Chicken</button>
            </dl>
          </div>
        </div>
      )
    }
  }
  
  export default MarketDashboard
