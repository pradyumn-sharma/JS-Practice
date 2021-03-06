/*
   /   = Root directory
   .   = This location
   ..  = Up a directory
   ./  = Current directory
   ../ = Parent of current directory
   ../../ = Two directories backwards
*/

"use strict";

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);
var deep = _.cloneDeep(user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place
alert(clone.sizes.width); // 51, see the result from the other one

alert(deep.sizes.width);