var Plane = function(){

}
Plane.prototype.fire= function(){
    console.log('发送普通子弹')
}

var MissleDecorator = function(plane){
    this.plane = plane
}
MissleDecorator.prototype.fire = function(){
    this.plane.fire();
    console.log('发送导弹')
}
var AutoDecorator = function(plane){
    this.plane = plane
}
AutoDecorator.prototype.fire = function(){
    this.plane.fire()
    console.log('发送自动导弹')
}
var plane = new Plane()
var misslePlane = new MissleDecorator(plane)
var auotPlane = new AutoDecorator(misslePlane)
auotPlane.fire()