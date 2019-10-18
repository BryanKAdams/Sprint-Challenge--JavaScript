// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
class CuboidMaker2{
    constructor(cuboidAttr){
      this.length = cuboidAttr.length;
      this.width = cuboidAttr.width;
      this.height = cuboidAttr.height;
    }
    volume(){
      return this.length * this.width * this.height;
    }
    surfaceArea(){
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }}

  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5,
  }
  )
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for 
//volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker2{
    constructor(cubeAttr){
        super(cubeAttr);
    }
    // what's the difference???
    weirdStretchVolume(){
        return Math.pow(this.length, 3)
    }
    weirdStretchSurfaceArea(){
        return 6 * Math.pow(this.length, 2);
    }
}

const CubeBoi = new CubeMaker({
    length: 5,
    height: 5,
    width: 5
})
const CuboidBoi = new CuboidMaker2({
    length: 5,
    height: 5,
    width: 5
})
console.log(CuboidBoi.volume());
console.log(CuboidBoi.surfaceArea());
console.log(CubeBoi.weirdStretchVolume());
console.log(CubeBoi.weirdStretchSurfaceArea());
console.log(CubeBoi.volume());
console.log(CubeBoi.surfaceArea());