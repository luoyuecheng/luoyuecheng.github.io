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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"markdown-body\">\n  <h1>关于我</h1>\n  <ul>\n    <li><code>ID</code>: luoyuecheng</li>\n    <li><code>mail</code>: luoyuecheng.me@gmail.com</li>\n  </ul>\n  <p><strong>luoyuecheng(洛月尘)/默默</strong>: <code>luoyuecheng</code> 是我的ID。<code>默默</code>是之前朋友对我的称呼。</p>\n  <p>这个博客是我一时起意，随便堆出来的，用来记录学习笔记，遇到的问题及解决方案等等。顺便也希望把学习的各种技术堆在这里。</p>\n  <p>博客是学习 angular 的时候，以 angular 为基础开发。调用了 firebase 数据存储接口，作为接口数据。</p>\n</div>\n<!--\n# 关于我\n\n- `ID`: luoyuecheng\n- `mail`: luoyuecheng.me@gmail.com\n\n**luoyuecheng(洛月尘)/默默**: `luoyuecheng` 是我的ID。`默默`是之前朋友对我的称呼。\n这个博客是我一时起意，随便堆出来的，用来记录学习笔记，遇到的问题及解决方案等等。顺便也希望把学习的各种技术堆在这里。\n\n博客是学习 angular 的时候，以 angular 为基础开发。调用了 firebase 数据存储接口，作为接口数据。\n\n -->"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/articles/articles.component.ts");
/* harmony import */ var _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/not-found/not-found.component */ "./src/app/component/not-found/not-found.component.ts");
/* harmony import */ var _form_data_form_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-data/form-data.component */ "./src/app/form-data/form-data.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");








var routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'articles/:id', component: _articles_articles_component__WEBPACK_IMPORTED_MODULE_4__["ArticlesComponent"] },
    { path: 'form-data', component: _form_data_form_data_component__WEBPACK_IMPORTED_MODULE_6__["FormDataComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: '**', component: _component_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header logo and navigation -->\r\n<app-navigation></app-navigation>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<!-- footer -->\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 1200px) {\n  .container {\n    display: block;\n    width: 1200px;\n    margin: auto; } }\n\n.container {\n  padding: 0 5rem;\n  position: relative;\n  padding-top: 5.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERvY1xcYmxvZy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVksRUFBQSxFQUNiOztBQUdIO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgNXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy10b3A6IDUuMnJlbTtcclxufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blog';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _component_page_common_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/page.common.component */ "./src/app/component/page.common.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _form_data_form_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-data/form-data.component */ "./src/app/form-data/form-data.component.ts");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/articles/articles.component.ts");
/* harmony import */ var _common_mark_common_mark_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common-mark/common-mark.component */ "./src/app/common-mark/common-mark.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _basic_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./basic-form */ "./src/app/basic-form/index.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _form_data_form_data_component__WEBPACK_IMPORTED_MODULE_13__["FormDataComponent"],
                _articles_articles_component__WEBPACK_IMPORTED_MODULE_14__["ArticlesComponent"],
                _common_mark_common_mark_component__WEBPACK_IMPORTED_MODULE_15__["CommonmarkComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"],
            ],
            imports: [
                // BrowserModule 仅由AppModule或RootModule导入
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _component_page_common_component__WEBPACK_IMPORTED_MODULE_9__["PageCommonModule"],
                _basic_form__WEBPACK_IMPORTED_MODULE_17__["BasicFormModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/articles/articles.component.html":
/*!**************************************************!*\
  !*** ./src/app/articles/articles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-markdown [data]=\"article.content\"></app-markdown> -->\r\n<!-- <div class=\"directory\">\r\n  <ul [innerHtml]=\"articleHeads\">\r\n    <li *ngFor=\"let articleHead of articleHeads\">\r\n      {{articleHead | json}}\r\n      <a [href]=\"'#' + articleHead.name\">{{articleHead.text}}</a>\r\n    </li>\r\n  </ul>\r\n</div> -->\r\n<!-- <markdown [data]=\"article.content\" ngPreserveWhitespaces></markdown> -->\r\n\r\n<div class=\"art-container markdown-body\">\r\n  <common-mark [data]=\"(artContent | async)?.content\" ngPreserveWhitespaces></common-mark>\r\n</div>\r\n<!-- toc: table of contents -->\r\n<div class=\"toc-container\">\r\n  <ul class=\"aio-toc\">\r\n    <li *ngFor=\"let nav of tocContent\" class=\"level-{{ nav?.level }}\" [title]=\"nav?.content\">\r\n      <span (click)=\"onAnchorClick(nav?.anchor)\">{{ nav?.content }}</span>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/articles/articles.component.scss":
/*!**************************************************!*\
  !*** ./src/app/articles/articles.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".art-container {\n  width: 80%; }\n\n.toc-container {\n  width: 20%;\n  position: fixed;\n  right: 0;\n  top: 6rem;\n  bottom: 12px;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.toc-container .aio-toc {\n    margin: 4px 8px 0 10px;\n    color: #444;\n    line-height: 24px; }\n\n.toc-container .aio-toc li {\n      position: relative;\n      padding: 3px 0 3px 12px; }\n\n.toc-container .aio-toc li span {\n        cursor: pointer; }\n\n.toc-container .aio-toc li::before {\n      content: \"\";\n      border-left: 1px solid #dbdbdb;\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0; }\n\n.toc-container .aio-toc li:first-child::before {\n      top: 13px; }\n\n.toc-container .aio-toc li:last-child::before {\n      bottom: 14px; }\n\n.toc-container .aio-toc li.level-1::after {\n      content: \"\";\n      display: block;\n      height: 1px;\n      width: 40%;\n      margin: 7px 0 4px;\n      background: #dbdbdb;\n      clear: both; }\n\n.toc-container .aio-toc li.level-3, .toc-container .aio-toc li.level-4, .toc-container .aio-toc li.level-5, .toc-container .aio-toc li.level-6 {\n      padding-left: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvRDpcXERvY1xcYmxvZy9zcmNcXGFwcFxcYXJ0aWNsZXNcXGFydGljbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBUGxCO0lBVUksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTs7QUFackI7TUFlTSxrQkFBa0I7TUFDbEIsdUJBQXVCLEVBQUE7O0FBaEI3QjtRQW1CUSxlQUFlLEVBQUE7O0FBbkJ2QjtNQXdCTSxXQUFXO01BQ1gsOEJBQThCO01BQzlCLGtCQUFrQjtNQUNsQixPQUFPO01BQ1AsTUFBTTtNQUNOLFNBQVMsRUFBQTs7QUE3QmY7TUFpQ00sU0FBUyxFQUFBOztBQWpDZjtNQXFDTSxZQUFZLEVBQUE7O0FBckNsQjtNQXlDTSxXQUFXO01BQ1gsY0FBYztNQUNkLFdBQVc7TUFDWCxVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixXQUFXLEVBQUE7O0FBL0NqQjtNQW1ETSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzL2FydGljbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi50b2MtY29udGFpbmVyIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDZyZW07XHJcbiAgYm90dG9tOiAxMnB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAuYWlvLXRvYyB7XHJcbiAgICBtYXJnaW46IDRweCA4cHggMCAxMHB4O1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogM3B4IDAgM3B4IDEycHg7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaTo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGJkYmRiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGxpOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xyXG4gICAgICB0b3A6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGk6bGFzdC1jaGlsZDo6YmVmb3JlIHtcclxuICAgICAgYm90dG9tOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGxpLmxldmVsLTE6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgICBtYXJnaW46IDdweCAwIDRweDtcclxuICAgICAgYmFja2dyb3VuZDogI2RiZGJkYjtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcblxyXG4gICAgbGkubGV2ZWwtMywgbGkubGV2ZWwtNCwgbGkubGV2ZWwtNSwgbGkubGV2ZWwtNiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/articles/articles.component.ts":
/*!************************************************!*\
  !*** ./src/app/articles/articles.component.ts ***!
  \************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_articles_articles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/articles/articles.service */ "./src/app/services/articles/articles.service.ts");
/* harmony import */ var _common_mark_common_mark_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common-mark/common-mark.service */ "./src/app/common-mark/common-mark.service.ts");







var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(articlesService, route, commonMarkService, db) {
        this.articlesService = articlesService;
        this.route = route;
        this.commonMarkService = commonMarkService;
        this.db = db;
        this.tocContent = [];
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        // this.articlesService.getArticle(id).subscribe((res: any) => this.article = res.data.content);
        this.artContent = this.db.doc("article/" + id).valueChanges();
        this.commonMarkService.eventEmit.subscribe(function (value) {
            _this.tocContent = _this.commonMarkService.headList;
        });
    };
    ArticlesComponent.prototype.onAnchorClick = function (anchor) {
        window.location.hash = '';
        window.location.hash = anchor;
        var body = document.documentElement;
        var scrollTop = body.scrollTop;
        var offsetHeight = body.offsetHeight;
        var scrollHeight = body.scrollHeight;
        var maxScroll = scrollHeight - offsetHeight;
        if (scrollTop < maxScroll) {
            body.scrollTop = scrollTop - 52;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { read: false, static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ArticlesComponent.prototype, "template", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('panel', { read: false, static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ArticlesComponent.prototype, "panel", void 0);
    ArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__(/*! ./articles.component.html */ "./src/app/articles/articles.component.html"),
            styles: [__webpack_require__(/*! ./articles.component.scss */ "./src/app/articles/articles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_articles_articles_service__WEBPACK_IMPORTED_MODULE_4__["ArticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _common_mark_common_mark_service__WEBPACK_IMPORTED_MODULE_5__["CommonMarkService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/basic-form/basic-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/basic-form/basic-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\">\r\n  <ng-content select=\"form\"></ng-content>\r\n</form>"

/***/ }),

/***/ "./src/app/basic-form/basic-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/basic-form/basic-form.component.ts ***!
  \****************************************************/
/*! exports provided: BasicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormComponent", function() { return BasicFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var BasicFormComponent = /** @class */ (function () {
    function BasicFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    BasicFormComponent.prototype.ngOnInit = function () {
        var formGroup = {};
        for (var _i = 0, _a = Object.keys(this.basicForm); _i < _a.length; _i++) {
            var key = _a[_i];
            formGroup[key] = [];
        }
        this.validateForm = this.formBuilder.group(formGroup);
    };
    BasicFormComponent.prototype.ngAfterContentInit = function () {
        if (this.remember) {
            console.log(this.remember);
            this.remember.changes.subscribe(function (a) {
                console.log(a);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BasicFormComponent.prototype, "basicForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], BasicFormComponent.prototype, "remember", void 0);
    BasicFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-form',
            template: __webpack_require__(/*! ./basic-form.component.html */ "./src/app/basic-form/basic-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], BasicFormComponent);
    return BasicFormComponent;
}());



/***/ }),

/***/ "./src/app/basic-form/basic-form.module.ts":
/*!*************************************************!*\
  !*** ./src/app/basic-form/basic-form.module.ts ***!
  \*************************************************/
/*! exports provided: BasicFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormModule", function() { return BasicFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd-form.js");
/* harmony import */ var _basic_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-form.component */ "./src/app/basic-form/basic-form.component.ts");






var BasicFormModule = /** @class */ (function () {
    function BasicFormModule() {
    }
    BasicFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _basic_form_component__WEBPACK_IMPORTED_MODULE_5__["BasicFormComponent"],
            ],
            exports: [
                _basic_form_component__WEBPACK_IMPORTED_MODULE_5__["BasicFormComponent"],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
        })
    ], BasicFormModule);
    return BasicFormModule;
}());



/***/ }),

/***/ "./src/app/basic-form/index.ts":
/*!*************************************!*\
  !*** ./src/app/basic-form/index.ts ***!
  \*************************************/
/*! exports provided: BasicFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "./src/app/basic-form/public-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicFormModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BasicFormModule"]; });




/***/ }),

/***/ "./src/app/basic-form/public-api.ts":
/*!******************************************!*\
  !*** ./src/app/basic-form/public-api.ts ***!
  \******************************************/
/*! exports provided: BasicFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_form_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-form.module */ "./src/app/basic-form/basic-form.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicFormModule", function() { return _basic_form_module__WEBPACK_IMPORTED_MODULE_0__["BasicFormModule"]; });




/***/ }),

/***/ "./src/app/common-mark/common-mark.component.html":
/*!********************************************************!*\
  !*** ./src/app/common-mark/common-mark.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n"

/***/ }),

/***/ "./src/app/common-mark/common-mark.component.scss":
/*!********************************************************!*\
  !*** ./src/app/common-mark/common-mark.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1tYXJrL2NvbW1vbi1tYXJrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/common-mark/common-mark.component.ts":
/*!******************************************************!*\
  !*** ./src/app/common-mark/common-mark.component.ts ***!
  \******************************************************/
/*! exports provided: CommonmarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonmarkComponent", function() { return CommonmarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_mark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-mark.service */ "./src/app/common-mark/common-mark.service.ts");



var CommonmarkComponent = /** @class */ (function () {
    function CommonmarkComponent(commonMarkService, element) {
        this.commonMarkService = commonMarkService;
        this.element = element;
        this.content = '';
    }
    CommonmarkComponent.prototype.ngOnChanges = function () {
        if (this.data) {
            this.handleData();
            return null;
        }
        if (this.src) {
            this.handleSrc();
            return null;
        }
    };
    CommonmarkComponent.prototype.ngAfterViewInit = function () {
        if (this.data || this.src)
            return null;
        this.handleInclude();
    };
    // @Input data have content
    CommonmarkComponent.prototype.handleData = function () {
        this.render(this.data);
    };
    // @Input src have content, to get markdown source.
    CommonmarkComponent.prototype.handleSrc = function () {
        var _this = this;
        this.commonMarkService.getSource(this.src).subscribe(function (markdown) {
            _this.render(markdown);
        });
    };
    // included in the <common-mark> tag.
    CommonmarkComponent.prototype.handleInclude = function () {
        // console.log(this.element.nativeElement.innerHTML)
        this.render(this.element.nativeElement.innerHTML);
    };
    // compile markdown to html and render.
    CommonmarkComponent.prototype.render = function (markdown) {
        var compiled = this.commonMarkService.compile(markdown);
        this.commonMarkService.pushEventEmit();
        this.element.nativeElement.innerHTML = compiled;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CommonmarkComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CommonmarkComponent.prototype, "src", void 0);
    CommonmarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'common-mark',
            template: __webpack_require__(/*! ./common-mark.component.html */ "./src/app/common-mark/common-mark.component.html"),
            styles: [__webpack_require__(/*! ./common-mark.component.scss */ "./src/app/common-mark/common-mark.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_mark_service__WEBPACK_IMPORTED_MODULE_2__["CommonMarkService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CommonmarkComponent);
    return CommonmarkComponent;
}());



/***/ }),

/***/ "./src/app/common-mark/common-mark.service.ts":
/*!****************************************************!*\
  !*** ./src/app/common-mark/common-mark.service.ts ***!
  \****************************************************/
/*! exports provided: CommonMarkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonMarkService", function() { return CommonMarkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! commonmark */ "./node_modules/commonmark/lib/index.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_5__);






var CommonMarkService = /** @class */ (function () {
    function CommonMarkService(http) {
        this.http = http;
        this.headList = [];
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * get head by list
     */
    CommonMarkService.prototype.getHeadList = function () {
        return this.headList;
    };
    /**
     * get markdown source by src.
     * @param {string} src resource link
     * @return {string} recource responce
     */
    CommonMarkService.prototype.getSource = function (src) {
        var _this = this;
        return this.http.get(src).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetch markdown content: " + _); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get markdown content")));
    };
    /**
     * compile narkdown to html
     * @param {string} markdown markdown content.
     * @return {string} html string.
     */
    CommonMarkService.prototype.compile = function (markdown) {
        var reader = new commonmark__WEBPACK_IMPORTED_MODULE_5___default.a.Parser();
        var writer = new commonmark__WEBPACK_IMPORTED_MODULE_5___default.a.HtmlRenderer({ sourcepos: true, headAnchor: true });
        this.headList = [];
        writer.attrs = function (node) {
            var att = [];
            if (this.options.sourcepos) {
                var pos = node.sourcepos;
                if (pos) {
                    att.push(['data-sourcepos', String(pos[0][0]) + ':' +
                            String(pos[0][1]) + '-' + String(pos[1][0]) + ':' +
                            String(pos[1][1])]);
                }
            }
            if (this.options.headAnchor && node.type === 'heading') {
                var pos = node.sourcepos;
                if (pos) {
                    att.push(['id', String(pos[0][0]) + ':' +
                            String(pos[0][1]) + '-' + String(pos[1][0]) + ':' +
                            String(pos[1][1])]);
                }
            }
            return att;
        };
        var parsed = reader.parse(markdown);
        var walker = parsed.walker();
        var event;
        while ((event = walker.next())) {
            var node = event.node;
            if (!event.entering)
                continue;
            if (node.type === 'heading') {
                var content = this.getText(writer.render(node));
                var id = '';
                var pos = node.sourcepos;
                if (pos) {
                    id = String(pos[0][0]) + ':' + String(pos[0][1]) + '-' +
                        String(pos[1][0]) + ':' + String(pos[1][1]);
                }
                this.headList.push({ level: node.level, content: content, anchor: id });
            }
            // if (node.type === 'text') {
            //   node.literal = node.literal.toUpperCase();
            // }
        }
        var result = writer.render(parsed);
        return result;
    };
    CommonMarkService.prototype.pushEventEmit = function (value) {
        this.eventEmit.emit(value);
    };
    CommonMarkService.prototype.getText = function (text) {
        var div = document.createElement('DIV');
        div.innerHTML = text;
        return div.innerText;
    };
    CommonMarkService.prototype.log = function (message) {
        // console.log(message);
    };
    CommonMarkService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    CommonMarkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommonMarkService);
    return CommonMarkService;
}());



/***/ }),

/***/ "./src/app/component/basic-form/basic-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/basic-form/basic-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "basic form.\r\n<form nz-form [formGroup]=\"basicForm\">\r\n  <ng-container *ngFor=\"let formItem of formData\">\r\n    <!-- input -->\r\n    <nz-form-item *ngIf=\"formItem.type === 'input'\">\r\n      <nz-form-label>{{ formItem.label }}</nz-form-label>\r\n      <nz-form-control>\r\n        <input nz-input formControlName=\"{{ formItem.name }}\" placeholder=\"{{ formItem.placeholder }}\" />\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <!-- select -->\r\n    <nz-form-item *ngIf=\"formItem.type === 'select'\">\r\n      <nz-form-label>{{ formItem.label }}</nz-form-label>\r\n      <nz-form-control>\r\n        <nz-select\r\n          [nzPlaceHolder]=\"formItem.placeholder\"\r\n          formControlName=\"{{ formItem.name }}\"\r\n        >\r\n          <nz-option *ngFor=\"let optionItem of formItem.options\" [nzValue]=\"optionItem.value\" [nzLabel]=\"optionItem.text\"></nz-option>\r\n        </nz-select>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <!-- textarea -->\r\n    <nz-form-item *ngIf=\"formItem.type === 'textarea'\">\r\n      <nz-form-label>{{ formItem.label }}</nz-form-label>\r\n      <nz-form-control>\r\n        <textarea nz-input formControlName=\"{{ formItem.name }}\" placeholder=\"{{ formItem.placeholder }}\"></textarea>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <!-- button -->\r\n    <nz-form-item *ngIf=\"formItem.type === 'button'\">\r\n      <nz-form-control>\r\n        <button nz-button (click)=\"resetForm($event)\">{{ formItem.label }}</button>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item *ngIf=\"formItem.type === 'button-group'\">\r\n      <nz-form-control>\r\n        <ng-container *ngFor=\"let button of formItem.options\">\r\n          <button nz-button [nzType]=\"button.type\" *ngIf=\"button.click\" (click)=\"button.click($event)\">{{ button.text }}</button>\r\n          <button nz-button [nzType]=\"button.type\">{{ button.text }}</button>\r\n        </ng-container>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n\r\n    <!-- text -->\r\n    <nz-form-item *ngIf=\"formItem.type === 'text'\">\r\n      <nz-form-control>\r\n        {{ formItem.label }}\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n  </ng-container>\r\n</form>\r\n\r\n=================================="

/***/ }),

/***/ "./src/app/component/basic-form/basic-form.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/basic-form/basic-form.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9iYXNpYy1mb3JtL2Jhc2ljLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/component/basic-form/basic-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/basic-form/basic-form.component.ts ***!
  \**************************************************************/
/*! exports provided: BasicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormComponent", function() { return BasicFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var BasicFormComponent = /** @class */ (function () {
    function BasicFormComponent(formBuild) {
        this.formBuild = formBuild;
    }
    BasicFormComponent.prototype.ngOnInit = function () {
        var formGroup = {};
        for (var i in this.formData) {
            var formItem = this.formData[i];
            formGroup[formItem.name] = [];
        }
        this.basicForm = this.formBuild.group(formGroup);
        // setValue 必须是完整匹配 formGroup 的值(form 中的每一个 formControlName 在 formValue 里都有一个对应字段)
        // this.basicForm.setValue(this.formValue);
        this.basicForm.patchValue(this.formValue);
        console.log(this.formChild);
    };
    BasicFormComponent.prototype.resetForm = function (e) {
        e.preventDefault();
        this.basicForm.reset();
        console.log(this.basicForm.controls);
        for (var key in this.basicForm.controls) {
            // this.basicForm.controls[key].markAsPending();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BasicFormComponent.prototype, "formData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BasicFormComponent.prototype, "formValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BasicFormComponent.prototype, "formChild", void 0);
    BasicFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'basic-form',
            template: __webpack_require__(/*! ./basic-form.component.html */ "./src/app/component/basic-form/basic-form.component.html"),
            styles: [__webpack_require__(/*! ./basic-form.component.scss */ "./src/app/component/basic-form/basic-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], BasicFormComponent);
    return BasicFormComponent;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"back-to-top\" [ngStyle]=\"{ 'display': backToTop ? 'block' : 'none' }\" (click)=\"onBackToTop()\">\n  <i></i>\n  <i></i>\n</a>"

/***/ }),

/***/ "./src/app/component/footer/footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-to-top {\n  position: fixed;\n  display: block;\n  right: 2.4rem;\n  bottom: 2.4rem;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 3px;\n  border: 1px solid #1976d2;\n  background: #fff;\n  cursor: pointer; }\n  .back-to-top i:first-child {\n    display: block;\n    border: 1.2rem solid transparent;\n    border-bottom-color: #1976d2;\n    width: 0;\n    height: 0;\n    margin: auto;\n    margin-top: calc(-.1rem - 1px); }\n  .back-to-top i:last-child {\n    display: block;\n    background: #1976d2;\n    width: 1.2rem;\n    height: 1.2rem;\n    margin: auto;\n    margin-top: -.6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Zvb3Rlci9EOlxcRG9jXFxibG9nL3NyY1xcYXBwXFxjb21wb25lbnRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBVmpCO0lBYUksY0FBYztJQUNkLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osOEJBQThCLEVBQUE7RUFuQmxDO0lBdUJJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHJpZ2h0OiAyLjRyZW07XG4gIGJvdHRvbTogMi40cmVtO1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxOTc2ZDI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBpOmZpcnN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDEuMnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMTk3NmQyO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogY2FsYygtLjFyZW0gLSAxcHgpO1xuICB9XG5cbiAgaTpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjMTk3NmQyO1xuICAgIHdpZHRoOiAxLjJyZW07XG4gICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IC0uNnJlbTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.backToTop = false;
    }
    // listen scroll event
    FooterComponent.prototype.scroll = function (event) {
        var body = document.documentElement;
        var scrollTop = body.scrollTop;
        var offsetHeight = body.offsetHeight;
        if (scrollTop > offsetHeight / 2) {
            this.backToTop = true;
        }
        else {
            this.backToTop = false;
        }
    };
    FooterComponent.prototype.ngOnInit = function () { };
    // click back to top, return scroll top
    FooterComponent.prototype.onBackToTop = function () {
        var body = document.documentElement;
        body.scrollTop = 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FooterComponent.prototype, "scroll", null);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/component/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/navigation/navigation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/navigation/navigation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"header\">\r\n    <a class=\"logo\" [routerLink]=\"['/']\">\r\n      <img src=\"assets/source/photo.jpeg\" alt=\"\">\r\n      <h1>Luoyuecheng</h1>\r\n    </a>\r\n    <ul class=\"nav\">\r\n      <li class=\"nav-list\" *ngFor=\"let nav of navList\" routerLinkActive=\"current\"\r\n        [routerLinkActiveOptions]=\"{ exact: true }\">\r\n        <a routerLink=\"{{ nav.link }}\" title=\"{{ nav.text }}\">{{ nav.text }}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</header>\r\n<!-- <div class=\"nav\">\r\n  <div>\r\n    <a class=\"logo\" routerLink=\"/\">\r\n      <img [src]=\"logo\" alt=\"洛月尘\">\r\n    </a>\r\n    <span class=\"nav-name\">洛月尘</span>\r\n    <span class=\"nav-describe\">一个不起眼前端</span>\r\n  </div>\r\n  <ul class=\"nav-menu\">\r\n    <li\r\n      *ngFor=\"let nav of navList\"\r\n      routerLinkActive=\"current\"\r\n      class=\"nav-menu-list\"\r\n      [routerLinkActiveOptions]=\"{ exact: true }\"\r\n    >\r\n      <a routerLink={{nav.link}}>{{nav.text}}</a>\r\n    </li>\r\n  </ul>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/component/navigation/navigation.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/navigation/navigation.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  display: block;\n  width: 100%;\n  background: #1976d2;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 5.2rem;\n  z-index: 1; }\n\n@media (min-width: 1200px) {\n  .header {\n    width: 1200px;\n    margin: auto; } }\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  background: #1976d2; }\n\n.header a.logo {\n    display: flex;\n    align-items: center; }\n\n.header img {\n    width: 3.2rem;\n    height: 3.2rem;\n    border-radius: 50%;\n    margin-right: .6rem; }\n\n.header h1 {\n    font-size: 2rem;\n    color: #fff;\n    margin: 0; }\n\n.header .nav {\n    display: flex;\n    align-items: center; }\n\n.header .nav li {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      padding: 0 .6rem; }\n\n.header .nav li:hover {\n        opacity: .7; }\n\n.header .nav li a {\n        color: #fff; }\n\n/* .nav {\r\n  text-align: center;\r\n  width: 260px;\r\n  background-color: #2599f2;\r\n  color: #fff;\r\n  box-shadow: 3px 3px 3px 3px #aaa;\r\n\r\n  .logo {\r\n    display: block;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    margin: auto;\r\n\r\n    img {\r\n      display: inline-block;\r\n      width: inherit;\r\n      height: inherit;\r\n    }\r\n  }\r\n\r\n  .nav-name {\r\n    display: block;\r\n  }\r\n\r\n  .nav-describe {\r\n    display: block;\r\n  }\r\n\r\n  .nav-menu {\r\n    padding: 5px 0;\r\n    background-color: #f5f5f5;\r\n\r\n    .nav-menu-list {\r\n      // transition: transform ease-in .1s;\r\n\r\n      a {\r\n        display: inline-block;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        color: #333;\r\n        padding: 5px 10px;\r\n\r\n        &:hover {\r\n          color: #2599f2;\r\n          transform: translateX(3px);\r\n        }\r\n      }\r\n\r\n      &.current {\r\n        background-color: #fff;\r\n        a {\r\n          color: #2599f2;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n} */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L25hdmlnYXRpb24vRDpcXERvY1xcYmxvZy9zcmNcXGFwcFxcY29tcG9uZW50XFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBR1o7RUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZLEVBQUEsRUFDYjs7QUFHSDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUpyQjtJQU9JLGFBQWE7SUFDYixtQkFBbUIsRUFBQTs7QUFSdkI7SUFZSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTs7QUFmdkI7SUFtQkksZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTLEVBQUE7O0FBckJiO0lBeUJJLGFBQWE7SUFDYixtQkFBbUIsRUFBQTs7QUExQnZCO01BNkJNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGdCQUFnQixFQUFBOztBQWhDdEI7UUFtQ1EsV0FBVyxFQUFBOztBQW5DbkI7UUF1Q1EsV0FBVyxFQUFBOztBQU1uQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0N5Q0ciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMTk3NmQyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDUuMnJlbTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjMTk3NmQyO1xyXG5cclxuICBhLmxvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDMuMnJlbTtcclxuICAgIGhlaWdodDogMy4ycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNnJlbTtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMCAuNnJlbTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IC43O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogLm5hdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU5OWYyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCAjYWFhO1xyXG5cclxuICAubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXYtbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5uYXYtZGVzY3JpYmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubmF2LW1lbnUge1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG5cclxuICAgIC5uYXYtbWVudS1saXN0IHtcclxuICAgICAgLy8gdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4gLjFzO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICMyNTk5ZjI7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY3VycmVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjU5OWYyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0gKi9cclxuIiwiaGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMTk3NmQyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogNS4ycmVtO1xuICB6LWluZGV4OiAxOyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IGF1dG87IH0gfVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjMTk3NmQyOyB9XG4gIC5oZWFkZXIgYS5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmhlYWRlciBpbWcge1xuICAgIHdpZHRoOiAzLjJyZW07XG4gICAgaGVpZ2h0OiAzLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogLjZyZW07IH1cbiAgLmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMDsgfVxuICAuaGVhZGVyIC5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIC5oZWFkZXIgLm5hdiBsaSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAgLjZyZW07IH1cbiAgICAgIC5oZWFkZXIgLm5hdiBsaTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IC43OyB9XG4gICAgICAuaGVhZGVyIC5uYXYgbGkgYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XG5cbi8qIC5uYXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1OTlmMjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggI2FhYTtcclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2LW5hbWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubmF2LWRlc2NyaWJlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuXHJcbiAgICAubmF2LW1lbnUtbGlzdCB7XHJcbiAgICAgIC8vIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluIC4xcztcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjMjU5OWYyO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmN1cnJlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzI1OTlmMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/component/navigation/navigation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/navigation/navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "./src/app/services/navigation/navigation.service.ts");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(navService) {
        this.navService = navService;
        // public navList: Nav[] = [];
        this.navList = [
            { id: 0, key: 0, text: '首页', link: '/' },
            { id: 1, key: 1, text: '分类', link: '/category' },
            { id: 2, key: 2, text: '归档', link: '/archives' },
            { id: 3, key: 3, text: '关于', link: '/about' }
        ];
        this.logo = 'assets/source/photo.jpeg';
    }
    NavigationComponent.prototype.ngOnInit = function () {
        // this.getNavList();
    };
    NavigationComponent.prototype.getNavList = function () {
        var _this = this;
        this.navService.getNavigations()
            .subscribe(function (navList) { return _this.navList = navList; });
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/component/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/component/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/component/not-found/not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/not-found/not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <span>404</span>\r\n  Not found\r\n  <code>\r\n    TODO\r\n    二维网格，自己设计图画\r\n    小游戏\r\n  </code>\r\n</div>"

/***/ }),

/***/ "./src/app/component/not-found/not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/not-found/not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/not-found/not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/not-found/not-found.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(titleService) {
        this.titleService = titleService;
        this.title = 'not found | 洛月尘';
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.title);
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/component/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/component/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/component/page.common.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/page.common.component.ts ***!
  \****************************************************/
/*! exports provided: PageCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCommonModule", function() { return PageCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/component/navigation/navigation.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/component/not-found/not-found.component.ts");
/* harmony import */ var _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic-form/basic-form.component */ "./src/app/component/basic-form/basic-form.component.ts");










var PageCommonModule = /** @class */ (function () {
    function PageCommonModule() {
    }
    PageCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"]
            ],
            declarations: [
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_9__["BasicFormComponent"]
            ],
            exports: [
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_9__["BasicFormComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], PageCommonModule);
    return PageCommonModule;
}());



/***/ }),

/***/ "./src/app/form-data/form-data.component.html":
/*!****************************************************!*\
  !*** ./src/app/form-data/form-data.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-basic-form [basicForm]=\"basicFormValues\">\r\n    <input placeholder=\"Title\" />\r\n</app-basic-form>\r\n\r\n<basic-form [formData]=\"basicFormData\" [formValue]=\"basicFormValues\"></basic-form>\r\n<!-- <form nz-form [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\">\r\n  <nz-form-item>\r\n    <input matInput placeholder=\"Title\" />\r\n  </nz-form-item>\r\n  <button class=\"button\" type=\"submit\">Purchase</button>\r\n</form> -->\r\n<form nz-form [nzLayout]=\"vertical\" [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\">\r\n  <nz-form-item>\r\n    <nz-form-label>Title</nz-form-label>\r\n    <nz-form-control nzErrorTip=\"Please input article title!\">\r\n      <nz-input-group>\r\n        <input formControlName=\"title\" nz-input placeholder=\"Title\" />\r\n      </nz-input-group>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label>Desc</nz-form-label>\r\n    <nz-form-control nzErrorTip=\"Please input article descript!\">\r\n      <nz-input-group>\r\n        <input formControlName=\"desc\" nz-input placeholder=\"desc\" />\r\n      </nz-input-group>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label>Content Type</nz-form-label>\r\n    <nz-form-control nzErrorTip=\"Please select article content type!\">\r\n      <nz-select formControlName=\"contentType\">\r\n        <nz-option nzLabel=\"markdown\" nzValue=\"markdown\"></nz-option>\r\n        <nz-option nzLabel=\"html\" nzValue=\"html\"></nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label>Category</nz-form-label>\r\n    <nz-form-control nzErrorTip=\"Please select article category!\">\r\n      <nz-select formControlName=\"category\">\r\n        <nz-option nzLabel=\"markdown\" nzValue=\"markdown\"></nz-option>\r\n        <nz-option nzLabel=\"html\" nzValue=\"html\"></nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label>Label</nz-form-label>\r\n    <nz-form-control nzErrorTip=\"Please select article label!\">\r\n      <nz-select formControlName=\"label\">\r\n        <nz-option nzLabel=\"markdown\" nzValue=\"markdown\"></nz-option>\r\n        <nz-option nzLabel=\"html\" nzValue=\"html\"></nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label>Content</nz-form-label>\r\n    <nz-form-control nzErrorTip=\"Please input article content!\">\r\n      <nz-input-group>\r\n        <textarea formControlName=\"content\" nz-input placeholder=\"content\" [nzAutosize]=\"{ minRows: 5 }\"></textarea>\r\n      </nz-input-group>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <button nz-button nzType=\"primary\">Submit</button>\r\n      <button nz-button nzType=\"dashed\">Reset</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>"

/***/ }),

/***/ "./src/app/form-data/form-data.component.scss":
/*!****************************************************!*\
  !*** ./src/app/form-data/form-data.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/form-data/form-data.component.ts":
/*!**************************************************!*\
  !*** ./src/app/form-data/form-data.component.ts ***!
  \**************************************************/
/*! exports provided: FormDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataComponent", function() { return FormDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_articles_articles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/articles/articles.service */ "./src/app/services/articles/articles.service.ts");





var FormDataComponent = /** @class */ (function () {
    function FormDataComponent(formBuilder, articleService, db) {
        this.formBuilder = formBuilder;
        this.articleService = articleService;
        this.db = db;
        this.basicFormData = [
            { name: 'title', label: 'Title', type: 'input', placeholder: 'Title', required: true },
            { name: 'desc', label: 'Description', type: 'input', placeholder: 'Description', required: true },
            {
                name: 'contentType',
                label: 'Content Type',
                type: 'select',
                placeholder: 'Content Type',
                options: [{ value: 'markdown', text: 'Markdown' }, { value: 'html', text: 'HTML' }]
            },
            {
                name: 'category',
                label: 'Category',
                type: 'select',
                placeholder: 'Category',
                options: [{ value: 'linux', text: 'linux' }, { value: 'archlinux', text: 'archlinux' }]
            },
            {
                name: 'label',
                label: 'Label',
                type: 'select',
                placeholder: 'Label',
                options: [{ value: 'linux', text: 'linux' }, { value: 'archlinux', text: 'archlinux' }]
            },
            {
                name: 'content',
                label: 'Content',
                type: 'textarea',
                placeholder: 'Content'
            },
            {
                type: 'button-group',
                options: [
                    { text: 'Submit', type: 'primary' },
                    { text: 'Reset', click: this.reset }
                ]
            },
            {
                label: 'reset',
                type: 'button'
            }
        ];
        this.basicFormValues = {
            title: 'basic title',
            desc: 'basic description',
            contentType: 'html',
            category: 'linux',
            label: 'archlinux',
            content: 'basic content'
        };
        this.basicForm = {};
    }
    FormDataComponent.prototype.ngOnInit = function () {
        this.checkoutForm = this.formBuilder.group({
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            desc: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            content: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            contentType: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            category: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            label: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    FormDataComponent.prototype.onSubmit = function (customerData) {
        // Process checkout data here
        console.warn('Your order has been submitted', customerData);
        console.log(this.checkoutForm);
        for (var i in this.checkoutForm.controls) {
            this.checkoutForm.controls[i].markAsDirty();
            this.checkoutForm.controls[i].updateValueAndValidity();
        }
        if (this.checkoutForm.status !== 'VALID') {
            console.warn('Validate failed, please checked!');
            return false;
        }
        this.addItem(customerData);
        // this.checkoutForm.reset();
    };
    // add article to firebase database
    FormDataComponent.prototype.addItem = function (item) {
        this.db.collection('article').add(item);
    };
    FormDataComponent.prototype.addArticleToMongo = function (item, callback) {
        this.articleService.addArticle(item).subscribe(callback);
    };
    FormDataComponent.prototype.reset = function (e) {
        console.log(e);
    };
    FormDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-data',
            template: __webpack_require__(/*! ./form-data.component.html */ "./src/app/form-data/form-data.component.html"),
            styles: [__webpack_require__(/*! ./form-data.component.scss */ "./src/app/form-data/form-data.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_articles_articles_service__WEBPACK_IMPORTED_MODULE_4__["ArticlesService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], FormDataComponent);
    return FormDataComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-list\">\r\n  <!-- {{ articleLists | async | json }} -->\r\n  <section *ngFor=\"let article of articleLists | async\">\r\n    <h2><a [routerLink]=\"['/articles', article._id]\">{{ article.title }}</a></h2>\r\n    <p>{{ article.desc }}</p>\r\n    <footer>\r\n      <span class=\"icon\"></span>\r\n      <!-- <time datetime=\"{{ article.createTime }}+0800\" title=\"创建时间: {{ article.createTime }}\">{{ article.createTime }}</time> -->\r\n      <time datetime=\"2019-07-03 11:12:00+0800\"\r\n        title=\"创建时间: {{ article.createTime | date:'yyyy-MM-dd hh:mm:ss' }}\">{{ article.createTime | date:'yyyy-MM-dd' }}</time>\r\n      <span class=\"divider\">|</span>\r\n      <span class=\"icon\"></span>\r\n      <time datetime=\"2019-07-03 11:12:00+0800\"\r\n        title=\"修改时间: {{ article.updateTime | date:'yyyy-MM-dd hh:mm:ss' }}\">{{ article.updateTime | date:'yyyy-MM-dd' }}</time>\r\n      <address>洛月尘</address>\r\n    </footer>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article-list {\n  display: flex;\n  flex-wrap: wrap; }\n\nsection {\n  padding: 4rem 2rem 2rem;\n  background: #f5f5f5;\n  color: #333;\n  box-shadow: 3px 3px 3px #aaa;\n  margin: 1rem;\n  flex: 0 0 calc(50% - 2rem); }\n\nsection h2 {\n    margin-bottom: 1rem;\n    font-weight: 500; }\n\nsection h2 a {\n      color: #1890ff; }\n\nsection footer {\n    margin: auto;\n    margin-top: 1rem; }\n\nsection footer .divider {\n      display: inline-block;\n      padding: 0 .5rem; }\n\nsection footer address {\n      display: inline;\n      margin-left: .5rem; }\n\ntime {\n  cursor: help; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcRG9jXFxibG9nL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsWUFBWTtFQUVaLDBCQUEwQixFQUFBOztBQVA1QjtJQVVJLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTs7QUFYcEI7TUFjTSxjQUFjLEVBQUE7O0FBZHBCO0lBbUJJLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFwQnBCO01BdUJNLHFCQUFxQjtNQUNyQixnQkFBZ0IsRUFBQTs7QUF4QnRCO01BNEJNLGVBQWU7TUFDZixrQkFBa0IsRUFBQTs7QUFLeEI7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aWNsZS1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNHJlbSAycmVtIDJyZW07XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBjb2xvcjogIzMzMztcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjYWFhO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICAvLyBmbGV4OiAwIDAgNTAlO1xyXG4gIGZsZXg6IDAgMCBjYWxjKDUwJSAtIDJyZW0pO1xyXG5cclxuICBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICMxODkwZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuXHJcbiAgICAuZGl2aWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogMCAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRyZXNzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG50aW1lIHtcclxuICBjdXJzb3I6IGhlbHA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_articles_articles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/articles/articles.service */ "./src/app/services/articles/articles.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(articlesService, db) {
        this.articlesService = articlesService;
        this.db = db;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getArticleLists();
    };
    HomeComponent.prototype.getArticleLists = function () {
        // this.articleLists = this.articlesService.getLists();
        // this.articlesService.getLists().subscribe((res: any) => this.articleLists = res.data);
        this.articleLists = this.db.collection('article').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { _id: id });
        }); }));
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_articles_articles_service__WEBPACK_IMPORTED_MODULE_4__["ArticlesService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/articles/articles.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/articles/articles.service.ts ***!
  \*******************************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ArticlesService = /** @class */ (function () {
    function ArticlesService(http) {
        this.http = http;
    }
    // get article list
    ArticlesService.prototype.getLists = function () {
        return this.http.get('/api/articleLists');
    };
    ArticlesService.prototype.getArticle = function (id) {
        return this.http.get("/api/articleLists/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("fetched article id=" + id); }));
    };
    ArticlesService.prototype.getMdContent = function (url) {
        return this.http.post('/api/mdContent', { "contentUrl": url, "id": 1 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("fetched article content url=" + url); }));
    };
    ArticlesService.prototype.addArticle = function (content) {
        return this.http.post('/api/demo/insert', content).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("fetched article content=" + JSON.stringify(content)); }));
    };
    ArticlesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/services/navigation/navigation.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/navigation/navigation.service.ts ***!
  \***********************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NavigationService = /** @class */ (function () {
    function NavigationService(http) {
        this.http = http;
        this.navsUrl = 'localhost:3001/api/navigation';
    }
    NavigationService.prototype.getNavigations = function () {
        // return of(NAVLIST);
        return this.http.get(this.navsUrl);
    };
    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NavigationService);
    return NavigationService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCaLSRLWhlAt7BRSUbmI-z8VwmNl-d0pP4",
        authDomain: "blog-63534.firebaseapp.com",
        databaseURL: "https://blog-63534.firebaseio.com",
        projectId: "blog-63534",
        storageBucket: "blog-63534.appspot.com",
        messagingSenderId: "638684187966",
        appId: "1:638684187966:web:9e69f6e69921e4ae"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Doc\blog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map