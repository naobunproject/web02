(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _titles_titles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./titles/titles.component */ "./src/app/titles/titles.component.ts");
/* harmony import */ var _title_detail_title_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title-detail/title-detail.component */ "./src/app/title-detail/title-detail.component.ts");
/* harmony import */ var _creators_creators_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creators/creators.component */ "./src/app/creators/creators.component.ts");
/* harmony import */ var _creator_detail_creator_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./creator-detail/creator-detail.component */ "./src/app/creator-detail/creator-detail.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"] },
    { path: 'title/:id', component: _title_detail_title_detail_component__WEBPACK_IMPORTED_MODULE_3__["TitleDetailComponent"] },
    { path: 'titles', component: _titles_titles_component__WEBPACK_IMPORTED_MODULE_2__["TitlesComponent"] },
    { path: 'creator/:id', component: _creator_detail_creator_detail_component__WEBPACK_IMPORTED_MODULE_5__["CreatorDetailComponent"] },
    { path: 'creators', component: _creators_creators_component__WEBPACK_IMPORTED_MODULE_4__["CreatorsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NaoBun Project - Cause-driven Comics Agency';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _title_detail_title_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./title-detail/title-detail.component */ "./src/app/title-detail/title-detail.component.ts");
/* harmony import */ var _titles_titles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./titles/titles.component */ "./src/app/titles/titles.component.ts");
/* harmony import */ var _title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./title.service */ "./src/app/title.service.ts");
/* harmony import */ var _creator_detail_creator_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./creator-detail/creator-detail.component */ "./src/app/creator-detail/creator-detail.component.ts");
/* harmony import */ var _creators_creators_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./creators/creators.component */ "./src/app/creators/creators.component.ts");
/* harmony import */ var _creator_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./creator.service */ "./src/app/creator.service.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _hero_hero_component__WEBPACK_IMPORTED_MODULE_5__["HeroComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_7__["MainMenuComponent"],
                _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_8__["SubscribeComponent"],
                _title_detail_title_detail_component__WEBPACK_IMPORTED_MODULE_9__["TitleDetailComponent"],
                _titles_titles_component__WEBPACK_IMPORTED_MODULE_10__["TitlesComponent"],
                _creator_detail_creator_detail_component__WEBPACK_IMPORTED_MODULE_12__["CreatorDetailComponent"],
                _creators_creators_component__WEBPACK_IMPORTED_MODULE_13__["CreatorsComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_15__["IndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], _creator_service__WEBPACK_IMPORTED_MODULE_14__["CreatorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/creator-detail/creator-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/creator-detail/creator-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/creator-detail/creator-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/creator-detail/creator-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"creator\">\r\n\r\n    <div class=\"jumbotron hero-creator\" id=\"index-top\" style=\"background-position: center center; background-image: url(./assets/img/titles/1.jpg);\">\r\n    </div>\r\n    \r\n    <div class=\"container creator-detail\">\r\n        <div class=\"row row-primary\">\r\n            <div class=\"col-md-12\">\r\n           \t\t<div class=\"creator-photo thumb\"><img src=\"./assets/img/titles/{{creator.id}}-thumb.jpg\" /></div>\r\n                <h3>{{creator.name}} <span>Role: {{creator.role}}</span></h3>\r\n            \t<p class=\"creator-summary\">{{creator.summary}}</p>\r\n                  <ul class=\"creator-social\">\r\n                    <li class=\"creator-social-item\" *ngIf=\"creator.sminstagram\"><a href=\"https://instagram.com/{{creator.sminstagram}}\"><i class=\"fab fa-instagram\" aria-hidden=\"true\"></i><span class=\"sr-only\">Instagram</span></a></li>\r\n                    <li class=\"creator-social-item\" *ngIf=\"creator.smfacebook\"><a href=\"https://www.facebook.com/{{creator.smfacebook}}\"><i class=\"fab fa-facebook\" aria-hidden=\"true\"></i><span class=\"sr-only\">Facebook</span></a></li>\r\n                    <li class=\"creator-social-item\" *ngIf=\"creator.smtwitter\"><a href=\"https://twitter.com/{{creator.smtwitter}}\"><i class=\"fab fa-twitter\" aria-hidden=\"true\"></i><span class=\"sr-only\">Twitter</span></a></li>\r\n                  </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"mailchimp-form\">\r\n        <div class=\"row row-primary\">\r\n          <p style=\"margin: 0 auto;\">\r\n            <a class=\"btn btn-primary btn-lg\" href=\"/creators\">other creators</a>\r\n          </p>\r\n        </div>\r\n    </div>\r\n    \r\n</section>"

/***/ }),

/***/ "./src/app/creator-detail/creator-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/creator-detail/creator-detail.component.ts ***!
  \************************************************************/
/*! exports provided: CreatorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatorDetailComponent", function() { return CreatorDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../creator */ "./src/app/creator.ts");
/* harmony import */ var _creator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../creator.service */ "./src/app/creator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatorDetailComponent = /** @class */ (function () {
    function CreatorDetailComponent(route, creatorService, location) {
        this.route = route;
        this.creatorService = creatorService;
        this.location = location;
    }
    CreatorDetailComponent.prototype.ngOnInit = function () {
        this.getCreator();
    };
    CreatorDetailComponent.prototype.getCreator = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.creatorService.getCreator(id)
            .subscribe(function (creator) { return _this.creator = creator; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _creator__WEBPACK_IMPORTED_MODULE_3__["Creator"])
    ], CreatorDetailComponent.prototype, "creator", void 0);
    CreatorDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-creator-detail',
            template: __webpack_require__(/*! ./creator-detail.component.html */ "./src/app/creator-detail/creator-detail.component.html"),
            styles: [__webpack_require__(/*! ./creator-detail.component.css */ "./src/app/creator-detail/creator-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _creator_service__WEBPACK_IMPORTED_MODULE_4__["CreatorService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], CreatorDetailComponent);
    return CreatorDetailComponent;
}());



/***/ }),

/***/ "./src/app/creator.service.ts":
/*!************************************!*\
  !*** ./src/app/creator.service.ts ***!
  \************************************/
/*! exports provided: CreatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatorService", function() { return CreatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_creators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-creators */ "./src/app/mock-creators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatorService = /** @class */ (function () {
    function CreatorService(http) {
        this.http = http;
    }
    CreatorService.prototype.getCreators = function () {
        // TODO: send the message _after_ fetching the heroes
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_creators__WEBPACK_IMPORTED_MODULE_3__["CREATORS"]);
    };
    CreatorService.prototype.getCreator = function (id) {
        // TODO: send the message _after_ fetching the hero
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_creators__WEBPACK_IMPORTED_MODULE_3__["CREATORS"].find(function (creator) { return creator.id === id; }));
    };
    CreatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CreatorService);
    return CreatorService;
}());



/***/ }),

/***/ "./src/app/creator.ts":
/*!****************************!*\
  !*** ./src/app/creator.ts ***!
  \****************************/
/*! exports provided: Creator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creator", function() { return Creator; });
var Creator = /** @class */ (function () {
    function Creator() {
    }
    return Creator;
}());



/***/ }),

/***/ "./src/app/creators/creators.component.css":
/*!*************************************************!*\
  !*** ./src/app/creators/creators.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/creators/creators.component.html":
/*!**************************************************!*\
  !*** ./src/app/creators/creators.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\r\n\r\n    <div class=\"row row-primary\">\r\n    \r\n    \t<div *ngFor=\"let creator of creators\" class=\"creator-list row row-primary\">\r\n        \t<p class=\"creator-list-individual thumb\"><img src=\"./assets/img/creators/{{creator.id}}-thumb.jpg\" /></p>\r\n            <p class=\"creator-list-individual\"><a routerLink=\"/creator/{{creator.id}}\">{{creator.name}}</a></p>\r\n        </div>\r\n    \r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/creators/creators.component.ts":
/*!************************************************!*\
  !*** ./src/app/creators/creators.component.ts ***!
  \************************************************/
/*! exports provided: CreatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatorsComponent", function() { return CreatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _creator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../creator.service */ "./src/app/creator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreatorsComponent = /** @class */ (function () {
    function CreatorsComponent(creatorService) {
        this.creatorService = creatorService;
    }
    CreatorsComponent.prototype.ngOnInit = function () {
        this.getCreators();
    };
    CreatorsComponent.prototype.getCreators = function () {
        var _this = this;
        this.creatorService.getCreators()
            .subscribe(function (creators) { return _this.creators = creators; });
    };
    CreatorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-creators',
            template: __webpack_require__(/*! ./creators.component.html */ "./src/app/creators/creators.component.html"),
            styles: [__webpack_require__(/*! ./creators.component.css */ "./src/app/creators/creators.component.css")]
        }),
        __metadata("design:paramtypes", [_creator_service__WEBPACK_IMPORTED_MODULE_1__["CreatorService"]])
    ], CreatorsComponent);
    return CreatorsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 hidden-xs hidden-sm\">\r\n        <img class=\"footer-img\" src=\"../assets/img/running.png\">\r\n      </div>          \r\n      <div class=\"col-md-4 hidden-xs hidden-sm\">     \t      \t\r\n        <img class=\"rsdf-logo\" src=\"../assets/img/rsdf-logo.png\">\r\n        <p>\r\n          The NaoBun Project is a subsidiary of <a href=\"http://rambatansaddhadhika.co.id/\" target=\"_blank\">Rambatan Saddhadhika Design Firm</a> and can be reached at the following address:\r\n        </p>  \r\n        <p>\r\n          Sudirman Plaza, Plaza Marein 23F <br/>\r\n          Jl. Jenderal Sudirman Kav. 76-78 <br/>\r\n          South Jakarta 12910, INDONESIA\r\n        </p>\r\n        <p>\r\n          General Enquiries:<br/>\r\n          <a href=\"mailto:hello@naobunproject.id\">hello@naobunproject.id</a>\r\n        </p>\r\n        <br />\r\n      </div>\r\n      <div class=\"col-md-3 links\">          \t          \t\r\n        <h3>Around the Web</h3>\r\n        <p><a href=\"#\" target=\"_blank\">LINE Webtoon</a></p>\r\n        <p><a href=\"#\" target=\"_blank\">CIAYO Comics</a></p>\r\n        <hr />\r\n        <p><a href=\"https://instagram.com/NaoBunProject\" target=\"_blank\">Instagram</a></p>\r\n        <p><a href=\"https://www.facebook.com/NaoBun-Project-1145525432178608s\" target=\"_blank\">Facebook</a></p>\r\n        <p><a href=\"https://twitter.com/NaoBunProject\" target=\"_blank\">Twitter</a></p>\r\n        <p><a href=\"https://www.youtube.com/channel/UC4J3D8o3_eOcQVti6pJPGEg\" target=\"_blank\">YouTube</a></p>\r\n        <p><a href=\"https://medium.com/naobun-blog/\" target=\"_blank\">Medium</a></p>          \t\r\n      </div>\r\n      <div class=\"col-md-3 links\">          \t\r\n        <h3>Contacts &amp; Partnerships</h3>\r\n        <p><a href=\"#\" target=\"_blank\">IP Management &amp; Licensing Deals</a></p>\r\n        <p><a href=\"#\" target=\"_blank\">IP Management Consulting</a></p>\r\n        <p><a href=\"#\" target=\"_blank\">Non-profit Campaign Partnerships</a></p>\r\n        <p><a href=\"#\" target=\"_blank\">Educational Outreach</a></p>\r\n        <hr />\r\n        <h3>Career Opportunities</h3>       \t\r\n        <p><a href=\"#\" target=\"_blank\">Join as Creative Talent</a></p>\r\n        <p><a href=\"#\" target=\"_blank\">Explore Corporate Careers</a></p>\r\n      </div>\r\n    </div>\r\n  </div>       \r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<nav class=\"navbar fixed-top navbar-expand-lg\">\r\n  <div class=\"container\">\r\n    <h1 class=\"sr-only\">NaoBun Project</h1>            \r\n    <a class=\"navbar-brand\" href=\"/\"><img src=\"assets/img/logo.png\"></a>\r\n\r\n    <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarLinks\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n      \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarLinks\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"/\"><i class=\"fas fa-home\" aria-hidden=\"true\"></i> Home<div class=\"underline\"></div></a></li>\r\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/titles\"><i class=\"fas fa-rocket\" aria-hidden=\"true\"></i> Titles<div class=\"underline\"></div></a></li>\r\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"/creators\"><i class=\"fas fa-child\" aria-hidden=\"true\"></i> Creators<div class=\"underline\"></div></a></li>\r\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\"><i class=\"fas fa-comments\" aria-hidden=\"true\"></i> Meet-ups<div class=\"underline\"></div></a></li>\r\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\"><i class=\"fas fa-tv\" aria-hidden=\"true\"></i> Videos<div class=\"underline\"></div></a></li>\r\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\"><i class=\"fas fa-shopping-cart\" aria-hidden=\"true\"></i> Shop<div class=\"underline\"></div></a></li>\r\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"https://medium.com/naobun-blog/\" target=\"_blank\"><i class=\"fas fa-align-left\" aria-hidden=\"true\"></i> Blog<div class=\"underline\"></div></a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<nav class=\"navbar navbar-secondary navbar-expand-lg\">\r\n  <div class=\"container\">\r\n      <div>\r\n          <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"https://instagram.com/NaoBunProject\"><i class=\"fab fa-instagram\" aria-hidden=\"true\"></i><span class=\"sr-only\">Instagram</span></a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"https://www.facebook.com/NaoBun-Project-1145525432178608s\"><i class=\"fab fa-facebook\" aria-hidden=\"true\"></i><span class=\"sr-only\">Facebook</span></a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"https://twitter.com/NaoBunProject\"><i class=\"fab fa-twitter\" aria-hidden=\"true\"></i><span class=\"sr-only\">Twitter</span></a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"https://www.youtube.com/channel/UC4J3D8o3_eOcQVti6pJPGEg\"><i class=\"fab fa-youtube\" aria-hidden=\"true\"></i><span class=\"sr-only\">YouTube</span></a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"https://medium.com/naobun-blog/\"><i class=\"fab fa-medium\" aria-hidden=\"true\"></i><span class=\"sr-only\">Medium</span></a></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"language-select pull-right\">\r\n          <div class=\"btn-group\">\r\n              <button type=\"button\" class=\"btn btn-lg btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <span><i class=\"fas fa-language\" data-fa-transform=\"grow-12 down-3\" aria-hidden=\"true\"></i> | <span class=\"sr-only\">Language Select</span></span>\r\n              <span class=\"sr-only\">Toggle Dropdown</span>\r\n            </button>\r\n            <div class=\"dropdown-menu\">\r\n              <a class=\"dropdown-item\" href=\"#\">English</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Bahasa Indonesia</a>\r\n              <a class=\"dropdown-item\" href=\"#\">日本語</a>\r\n              <a class=\"dropdown-item\" href=\"#\">한국어</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Français</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Deustch</a>\r\n            </div>\r\n          </div>          \r\n        </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/hero/hero.component.html":
/*!******************************************!*\
  !*** ./src/app/hero/hero.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron jumbotron-primary\" id=\"index-top\">\r\n  <div class=\"container\">          \r\n    <header class=\"col-md-6\">\r\n      <h1>Empowering Creators to Speak Up through Comics</h1>\r\n    </header>\r\n    <div class=\"col-md-4 landing-text float-bottom\">\r\n      <p>\r\n        The NaoBun Project is a diversity-aware creators agency that strives to empower young,\r\n        emerging talents to speak up about the change they want to see in the world\r\n        through the creation of progressive comics and other innovative, cause-driven content.\r\n      </p>\r\n      <p>\r\n        <a class=\"btn btn-primary btn-lg\" href=\"#\">Our Titles &raquo;</a>\r\n        <a class=\"btn btn-primary btn-lg\" href=\"#\">Our Creators &raquo;</a>\r\n      </p>\r\n    </div>                    \r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/hero/hero.component.ts":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/hero/hero.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-hero></app-hero>\r\n<app-main-menu></app-main-menu>\r\n<app-subscribe></app-subscribe>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-menu\">\r\n\r\n  <header>\r\n    <h3>See the World through <b>Different</b> Eyes</h3>\r\n    <hr />\r\n  </header>\r\n\r\n  <div class=\"row row-primary\">\r\n    \r\n    <section class=\"col-sm col-primary\">\r\n      <div class=\"row row-primary-image\">\r\n        <h3>Explore our Titles</h3>\r\n      </div>\r\n      <div class=\"row row-primary-explainer\">\r\n        <p>\r\n          NaoBun Project features over a dozen upcoming creator-owned titles whose license it\r\n          manages—plus a few you can already read online.\r\n        </p>\r\n        <a class=\"btn btn-primary btn-lg\" href=\"#\">GO &raquo;</a>\r\n      </div>\r\n    </section>\r\n    \r\n    <section class=\"col-sm col-secondary\">\r\n      <div class=\"row row-secondary\">\r\n        <div class=\"col col-img\" id=\"topImg\">\r\n          <h3>Talents</h3>\r\n        </div>\r\n        <div class=\"col col-exp\" id=\"topExp\">\r\n          <p>\r\n            Meet the strong female-driven cast who come from backgrounds as diverse as their art styles.\r\n          </p>\r\n           <a class=\"btn btn-primary btn-lg\" href=\"#\">GO &raquo;</a>\r\n          </div>\r\n      </div>\r\n      <div class=\"row row-secondary\">\r\n        <div class=\"col col-exp\" id=\"ctrExp\">\r\n          <p>\r\n            Find out and participate in the next inspiring talk session from the talents of NaoBun Project.\r\n          </p>\r\n          <a class=\"btn btn-primary btn-lg\" href=\"#\">GO &raquo;</a>\r\n        </div>\r\n        <div class=\"col col-img\" id=\"ctrImg\">\r\n          <h3>Talks</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-secondary\">\r\n        <div class=\"col col-img\" id=\"endImg\">\r\n          <h3>Television</h3>\r\n        </div>\r\n        <div class=\"col col-exp\" id=\"endExp\">\r\n          <p>\r\n            Watch the latest videos from NaoBun TV, bringing you pop culture analysis from the creative industry.\r\n          </p>\r\n          <a class=\"btn btn-primary btn-lg\" href=\"#\">GO &raquo;</a>\r\n        </div>\r\n      </div>  \r\n    </section>\r\n\r\n    <hr />\r\n  \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/main-menu/main-menu.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/mock-creators.ts":
/*!**********************************!*\
  !*** ./src/app/mock-creators.ts ***!
  \**********************************/
/*! exports provided: CREATORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATORS", function() { return CREATORS; });
var CREATORS = [
    {
        id: 1,
        name: 'Jane Doe',
        role: 'Writer',
        heroimage: '01',
        summary: 'Chocolate bar chocolate cake souffle. Chocolate cake I love I love pastry, jelly beans bear claw marshmallow sesame snaps cookie Lemon drops chocolate bar halvah',
        smtwitter: 'janedoe',
        smfacebook: 'janedoe',
        sminstagram: ''
    }
];


/***/ }),

/***/ "./src/app/mock-titles.ts":
/*!********************************!*\
  !*** ./src/app/mock-titles.ts ***!
  \********************************/
/*! exports provided: TITLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLES", function() { return TITLES; });
var TITLES = [
    {
        id: 1,
        name: 'Lorem Ipsum',
        genre: 'Family',
        heroimage: '01',
        summary: 'Chocolate bar chocolate cake souffle Chocolate cake I love I love pastry jelly beans bear claw marshmallow sesame snaps cookie Lemon drops chocolate bar halvah'
    }
];


/***/ }),

/***/ "./src/app/subscribe/subscribe.component.html":
/*!****************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Begin MailChimp Signup Form -->\r\n<section class=\"mailchimp-form\">\r\n\r\n  <h3>Comic Updates and Event Notices in your Inbox!</h3>\r\n\r\n  <div class=\"container\" id=\"mc_embed_signup\">\r\n    <form action=\"//bonni.us3.list-manage.com/subscribe/post?u=25ab330b067956c80f2be82bf&amp;id=f92a1d1eb3\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>    \r\n      <div id=\"mc_embed_signup_scroll\">\r\n\r\n        <div class=\"mc-field-group inline-form\">\r\n          <label for=\"mce-EMAIL\">Email Address </label>\r\n          <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email field\" id=\"mce-EMAIL\">\r\n        </div>\r\n\r\n        <div id=\"mce-responses\" class=\"inline-form\">\r\n          <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\r\n          <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\r\n        </div>\r\n        \r\n        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\r\n        <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">\r\n          <input type=\"text\" name=\"b_25ab330b067956c80f2be82bf_f92a1d1eb3\" tabindex=\"-1\" value=\"\">\r\n        </div>\r\n\r\n        <div class=\"inline-form\">\r\n          <input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button btn btn-primary\">\r\n        </div>\r\n\r\n        <div class=\"inline-form\">\r\n          <span>   <a href=\"#\">(Privacy Policy)</a></span>\r\n        </div>\r\n      \r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</section>\r\n\r\n<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>\r\n<script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>\r\n<!--End mc_embed_signup-->"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.ts ***!
  \**************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubscribeComponent = /** @class */ (function () {
    function SubscribeComponent() {
    }
    SubscribeComponent.prototype.ngOnInit = function () {
    };
    SubscribeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscribe',
            template: __webpack_require__(/*! ./subscribe.component.html */ "./src/app/subscribe/subscribe.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "./src/app/title-detail/title-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/title-detail/title-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/title-detail/title-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/title-detail/title-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"title\">\r\n\r\n    <div class=\"jumbotron\" id=\"index-top\" style=\"background-position: center center; background-image: url(./assets/img/titles/1.jpg);\">\r\n      <div class=\"container\">          \r\n        <header class=\"col-md-6\">\r\n          <h1>{{ title.name }}</h1>\r\n        </header>                   \r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"container title-detail\">\r\n        <div class=\"row row-primary\">\r\n            <div class=\"col-md-3 title-detail thumb\"><img src=\"./assets/img/titles/{{title.id}}-thumb.jpg\" /></div>\r\n            <div class=\"col-md-9 title-detail summary\">\r\n            \t<p>Genre: {{title.genre}}</p>\r\n            \t<p>{{title.summary}}</p>\r\n              <p>\r\n                <a class=\"btn btn-primary btn-lg\" href=\"#\">Read Now</a>\r\n                <a class=\"btn btn-primary btn-lg\" href=\"#\">Trailer</a>\r\n              </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"mailchimp-form\">\r\n        <div class=\"row row-primary\">\r\n          <p style=\"margin: 0 auto;\">\r\n            <a class=\"btn btn-primary btn-lg\" href=\"/titles\">other titles</a>\r\n          </p>\r\n        </div>\r\n    </div>\r\n    \r\n</section>"

/***/ }),

/***/ "./src/app/title-detail/title-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/title-detail/title-detail.component.ts ***!
  \********************************************************/
/*! exports provided: TitleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleDetailComponent", function() { return TitleDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../title */ "./src/app/title.ts");
/* harmony import */ var _title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../title.service */ "./src/app/title.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TitleDetailComponent = /** @class */ (function () {
    function TitleDetailComponent(route, titleService, location) {
        this.route = route;
        this.titleService = titleService;
        this.location = location;
    }
    TitleDetailComponent.prototype.ngOnInit = function () {
        this.getTitle();
    };
    TitleDetailComponent.prototype.getTitle = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.titleService.getTitle(id)
            .subscribe(function (title) { return _this.title = title; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _title__WEBPACK_IMPORTED_MODULE_3__["Title"])
    ], TitleDetailComponent.prototype, "title", void 0);
    TitleDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title-detail',
            template: __webpack_require__(/*! ./title-detail.component.html */ "./src/app/title-detail/title-detail.component.html"),
            styles: [__webpack_require__(/*! ./title-detail.component.css */ "./src/app/title-detail/title-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], TitleDetailComponent);
    return TitleDetailComponent;
}());



/***/ }),

/***/ "./src/app/title.service.ts":
/*!**********************************!*\
  !*** ./src/app/title.service.ts ***!
  \**********************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_titles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-titles */ "./src/app/mock-titles.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TitleService = /** @class */ (function () {
    function TitleService(http) {
        this.http = http;
    }
    TitleService.prototype.getTitles = function () {
        // TODO: send the message _after_ fetching the heroes
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_titles__WEBPACK_IMPORTED_MODULE_3__["TITLES"]);
    };
    TitleService.prototype.getTitle = function (id) {
        // TODO: send the message _after_ fetching the hero
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_titles__WEBPACK_IMPORTED_MODULE_3__["TITLES"].find(function (title) { return title.id === id; }));
    };
    TitleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TitleService);
    return TitleService;
}());



/***/ }),

/***/ "./src/app/title.ts":
/*!**************************!*\
  !*** ./src/app/title.ts ***!
  \**************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
var Title = /** @class */ (function () {
    function Title() {
    }
    return Title;
}());



/***/ }),

/***/ "./src/app/titles/titles.component.css":
/*!*********************************************!*\
  !*** ./src/app/titles/titles.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/titles/titles.component.html":
/*!**********************************************!*\
  !*** ./src/app/titles/titles.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\r\n\r\n    <div class=\"row row-primary\">\r\n    \r\n    \t<div *ngFor=\"let title of titles\" class=\"title-list row row-primary\">\r\n        \t<p class=\"title-list-individual thumb\"><a routerLink=\"/title/{{title.id}}\"><img src=\"./assets/img/titles/{{title.id}}-thumb.jpg\" /></a></p>\r\n        </div>\r\n    \r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/titles/titles.component.ts":
/*!********************************************!*\
  !*** ./src/app/titles/titles.component.ts ***!
  \********************************************/
/*! exports provided: TitlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlesComponent", function() { return TitlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../title.service */ "./src/app/title.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TitlesComponent = /** @class */ (function () {
    function TitlesComponent(titleService) {
        this.titleService = titleService;
    }
    TitlesComponent.prototype.ngOnInit = function () {
        this.getTitles();
    };
    TitlesComponent.prototype.getTitles = function () {
        var _this = this;
        this.titleService.getTitles()
            .subscribe(function (titles) { return _this.titles = titles; });
    };
    TitlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-titles',
            template: __webpack_require__(/*! ./titles.component.html */ "./src/app/titles/titles.component.html"),
            styles: [__webpack_require__(/*! ./titles.component.css */ "./src/app/titles/titles.component.css")]
        }),
        __metadata("design:paramtypes", [_title_service__WEBPACK_IMPORTED_MODULE_1__["TitleService"]])
    ], TitlesComponent);
    return TitlesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\NaoBun Project\naobunproject.id\naobun-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map