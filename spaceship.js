function Spaceship(name, crew, phasers, shields){
  this.name=name;

  this.crew =crew
  this.phasers=phasers;
  this.shields=shields;
  this.cloaked = false;

  this.warpDrive = "disengaged";

    if (crew.length===0){
      this.docked = true }
    else {
      this.docked=false
    }

  this.phasersCharge = "uncharged";
  var ship= this;

    crew.forEach(function(CrewMember){
      CrewMember.currentShip= ship;
    })
}