"use strict";var __decorate=this&&this.__decorate||function(e,t,o,r){var c,n=arguments.length,p=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,o,r);else for(var u=e.length-1;u>=0;u--)(c=e[u])&&(p=(n<3?c(p):n>3?c(t,o,p):c(t,o))||p);return n>3&&p&&Object.defineProperty(t,o,p),p};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),productComponent=function(){function e(){}return e.prototype.ngOnInit=function(){console.log(this.productPreview)},__decorate([core_1.Input()],e.prototype,"productPreview",void 0),e=__decorate([core_1.Component({selector:"product-preview",templateUrl:"./product.component.html",styleUrls:["./product.component.css"]})],e)}();exports.productComponent=productComponent;