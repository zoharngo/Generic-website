"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var user_model_1=require("./user.model"),NewUser=function(e){function t(t,r){var o=e.call(this,t,r)||this;return o.firstName=t,o.lastName=r,o}return __extends(t,e),t}(user_model_1.User);exports.NewUser=NewUser;