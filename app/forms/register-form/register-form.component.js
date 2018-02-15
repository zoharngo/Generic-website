"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),new_user_model_1=require("../../shared/models/users/new-user.model"),country_model_1=require("../../shared/models/country/country.model"),RegisterFormComponent=function(){function e(e){this.countriesSrv=e,this.registerUser=new new_user_model_1.NewUser,this.countryListMode=!1,this.selectedCountry=new country_model_1.Country,this.selectedCountry.name="",this.selectedCountry.flag=""}return e.prototype.ngOnInit=function(){var e=this;this.countriesList||this.countriesSrv.fetchCountriesFlags().subscribe(function(t){e.countriesList=t,e.selectedCountry=e.countriesList.find(function(e){return e.name.indexOf("Israel")>-1}),console.log("stop")})},e.prototype.onSelectCountry=function(){this.countryListMode=!this.countryListMode},e.prototype.setCountrySelection=function(e){console.log(e),this.onSelectCountry(),this.registerUser.country=e.name,this.selectedCountry=e},e=__decorate([core_1.Component({selector:"register-form",templateUrl:"./register-form.component.html",styleUrls:["./register-form.component.css"]})],e)}();exports.RegisterFormComponent=RegisterFormComponent;