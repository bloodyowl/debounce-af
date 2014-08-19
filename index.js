var af = require("bloody-animationframe")

module.exports = function(fn){
  var id
  return function(){
    var args = arguments
    if(id != null) {
      af.cancelAnimationFrame(id)
    }
    id = af.requestAnimationFrame(function(){
      fn.apply(null, args)
      id = null
    })
  }
}
