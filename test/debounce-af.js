var tape = require("tape")
var daf = require("..")

tape("debounce animation frame", function(test){
  var fn = daf(function(text){
    var i = document.createElement("i")
    i.innerHTML = text
    document.body.appendChild(i)
  })
  fn("foo")
  fn("bar")
  fn("baz")
  setTimeout(function(){
    test.equal(document.querySelectorAll("i").length, 1)
    test.equal(document.querySelector("i").innerHTML, "baz")
    test.end()
  }, 25)
})

tape("debounce animation frame", function(test){
  var fn = daf(function(text){
    var i = document.createElement("em")
    i.innerHTML = text
    document.body.appendChild(i)
  })
  fn("foo")
  fn("bar")
  setTimeout(function(){
    fn("baz")
  }, 0)
  setTimeout(function(){
    test.equal(document.querySelectorAll("em").length, 1)
    test.equal(document.querySelector("em").innerHTML, "baz")
    test.end()
  }, 25)
})
