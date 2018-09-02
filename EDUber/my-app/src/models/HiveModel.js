import { observable, computed, action } from "mobx";
import GridModel from "./GridModel";

export default class HiveModel {
  @observable grids = [];


  @computed
  get unfinishedgridsCount() {
    return this.grids.filter(grid => !grid.finished).length;
  }

  @action
  addgrid(title, contentInput) {
    this.grids.push(new GridModel(title, contentInput));
  }

  @action
  rango(ID) {
    var pieces = [];

    pieces = (String(this.grids[ID].contentInput)).split("");
    this.grids[ID].contentOutput0 = "";
    this.grids[ID].contentOutput1 = "";
    this.grids[ID].contentOutput2 = "";  
    console.log(pieces);  

  }

  @action
  destroy(ID) {
    var i = ID;
    this.grids.splice(i,1);
  }

}