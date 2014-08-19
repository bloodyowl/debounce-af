# debounce af

[![browser support](https://ci.testling.com/bloodyowl/debounce-af.png)](https://ci.testling.com/bloodyowl/debounce-af)


## install

```sh
$ npm install bloody-debounce-af
```

## require

```javascript
var daf = require("bloody-debounce-af")
```

## api

### daf(fn) > debounced

creates a function which, when called, waits until there is no call
until an animation frame is triggered. then executes `fn` with its
the last arguments that has been passed to `debounced`.

## example

```javascript
var render = daf(function(text){
  div.textContent = text
})

input.addEventListener("input", function(eventObject){
  render(eventObject.currentTarget.value)
})
```
