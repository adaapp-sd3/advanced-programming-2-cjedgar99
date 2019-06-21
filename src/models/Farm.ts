import Drawable from "./abstract/Drawable"
import Field from "./Field"
import Cow from "./animals/Cow"
import Chicken from "./animals/Chicken"
import Sheep from "./animals/Sheep"
class Farm extends Drawable {
  fields: Field[] = []
  width: number = 700
  height: number = 710
  cows: any
  sheep: any
  chickens: any
  straw: any
  milk: any
  eggs: any
  wool: any
  seeds: any
  constructor(
    cows: any = {
      name: "Cows",
      total: 100,
      objects: []
    },
    sheep: any = {
      name: "Sheep",
      total: 50,
      objects: []
    },
    chickens: any = {
      name: "Chickens",
      total: 50,
      objects: []
    },
    straw: any = {
      name: "Straw",
      total: 1500,
      unit: "bails"
    },
    milk: any = {
      name: "Milk",
      total: 0,
      unit: "pints"
    },
    wool: any = {
      name: "Wool",
      total: 0,
      unit: "kilos"
    },
    eggs: any = {
      name: "Eggs",
      total: 0,
      unit: "eggs"
    },
    seeds: any = {
      name: "Grass seeds",
      total: 0,
      unit: "bunches"
    }
  ) {
    super()
    this.cows = cows
    this.sheep = sheep
    this.chickens = chickens
    this.straw = straw
    this.milk = milk
    this.wool = wool
    this.eggs = eggs
    this.seeds = seeds
  }

  public preload() {
    this.createBasicFarm()
  }

  public buyCow() {
    let cow = new Cow(this);
    cow.p5 = this.p5;
    cow.preload();
    cow.setRandomPositionInField((window.innerWidth/2 - 300) + 25, 25, 350, 175);
    this.cows.objects.push(cow);
  }
  
  public buyChicken() {
    let chicken = new Chicken(this);
    chicken.p5 = this.p5;
    chicken.preload();
    chicken.setRandomPositionInField((window.innerWidth/2 - 300) + 25, 365, 300, 125);
    this.chickens.objects.push(chicken);
  }

  public buySheep() {
    let sheep = new Sheep(this);
    sheep.p5 = this.p5;
    sheep.preload();
    sheep.setRandomPositionInField((window.innerWidth/2 - 300) + 25, 220, 350, 125);
    this.sheep.objects.push(sheep);
  }

  private createBasicFarm = () => {
    for (let i = 0; i < this.cows.total; i++) {
      let cow = new Cow(this)
      cow.p5 = this.p5
      cow.preload()
      cow.setRandomPositionInField(25, 25, 350, 175)
      this.cows.objects.push(cow)
    }
    this.fields.push(
      new Field(25, 25, 350, 175, this.cows.objects)
    )


    for (let i = 0; i < this.chickens.total; i++) {
      let chicken = new Chicken(this)
      chicken.p5 = this.p5
      chicken.preload()
      chicken.setRandomPositionInField(25, 275, 350, 125)
      this.chickens.objects.push(chicken)
    }
    this.fields.push(
      new Field(25, 275, 350, 125, this.chickens.objects)
    )

    for (let i = 0; i < this.sheep.total; i++) {
      let sheep = new Sheep(this)
      sheep.p5 = this.p5
      sheep.preload()
      sheep.setRandomPositionInField(25, 450, 300, 125)
      this.sheep.objects.push(sheep)
    }
    this.fields.push(
      new Field(25, 450, 300, 125, this.sheep.objects)
    )

    for (let field of this.fields) {
      field.p5 = this.p5
      field.setHandleUpdate = this.updateUI
    }
  }

  public draw() {
    for (let field of this.fields) {
      field.draw()
    }
  }
}

export default Farm
