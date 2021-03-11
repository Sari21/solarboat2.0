(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");



var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
        var elements = document.querySelectorAll('.animate-me');
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('animated');
                }
            });
        });
        elements.forEach(function (el) {
            observer.observe(el);
        });
    };
    AboutusComponent.ɵfac = function AboutusComponent_Factory(t) { return new (t || AboutusComponent)(); };
    AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutusComponent, selectors: [["app-aboutus"]], decls: 30, vars: 0, consts: [[1, "aboutus"], [1, "container", "col-md-11", "col-lg-11", "col-12", "align-items-right", "offset-md-1", "offset-lg-1", "offset-0"], [1, "jumbotron", "col-12", "align-self-center"], ["translate", "", 1, "title", "pb-md-5", "pb-lg-5", "pb-3"], [1, "row", "align-items-center"], [1, "description", "col-md-12", "col-lg-6", "col-sm-12", "col-12", "pl-5"], ["translate", "", 1, "pb-lg-4", "pb-md-4", "pb-2", "animate-me", "fade-up"], [1, "row", "pb-lg-4", "pb-md-4", "pb-2", "animate-me", "fade-up"], ["src", "../../assets/mainpage/aboutus/kari-logok/gpk.png", "alt", "logo", "title", "logo", 1, "col-2", "col-md-2", "col-sm-3"], ["translate", "", 1, "col"], ["src", "../../assets/mainpage/aboutus/kari-logok/kjk.png", "alt", "logo", "title", "logo", 1, "col-2", "col-md-2", "col-sm-3"], ["src", "../../assets/mainpage/aboutus/kari-logok/vik.png", "alt", "logo", "title", "logo", 1, "col-2", "col-md-2", "col-sm-3"], ["src", "../../assets/mainpage/aboutus/kari-logok/gtk.png", "alt", "logo", "title", "logo", 1, "col-2", "col-md-2", "col-sm-3"], ["translate", "", 1, "pt-4", "animate-me", "fade-up"], [1, "col", "ml-0", "ml-md-5", "ml-lg-5"], ["src", "../../assets/mainpage/aboutus/aboutus1.jpg", "alt", "logo", "title", "logo", 1, "col-12", "pb-5", "animate-me", "fade-up"], ["src", "../../assets/mainpage/aboutus/aboutus2.jpg", "alt", "logo", "title", "logo", 1, "col-12", "second-pic", "animate-me", "fade-up"]], template: function AboutusComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ABOUT_US.about_us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ABOUT_US.beginning");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ABOUT_US.GPK");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ABOUT_US.KJK");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ABOUT_US.VIK");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ABOUT_US.GTK");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "ABOUT_US.end");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"]], styles: ["div.aboutus[_ngcontent-%COMP%] {\r\n    background-color: #f3f4f4;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%] {\r\n    background: none;\r\n    margin: 0;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-family: \"Helvetica\";\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .description[_ngcontent-%COMP%] {\r\n        padding-left: 0px !important;\r\n    }\r\n\r\n    p[_ngcontent-%COMP%] {\r\n        padding-left: 0px !important;\r\n        padding-right: 0px !important;\r\n    }\r\n\r\n    .second-pic[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        visibility: hidden;\r\n        z-index: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSw0QkFBNEI7UUFDNUIsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmFib3V0dXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNDtcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gcCB7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY29uZC1waWMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"] });
    return AboutusComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutus',
                templateUrl: './aboutus.component.html',
                styleUrls: ['./aboutus.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/achievement/achievement.component.ts":
/*!******************************************************!*\
  !*** ./src/app/achievement/achievement.component.ts ***!
  \******************************************************/
/*! exports provided: AchievementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementComponent", function() { return AchievementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_achievement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/achievement.service */ "./src/app/shared/achievement.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_picture_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/picture.service */ "./src/app/shared/picture.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");











function AchievementComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
function AchievementComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} }
function AchievementComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r355 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementComponent_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r355); var ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx_r354.openContent(_r352); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementComponent_div_5_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r355); var ctx_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r356.delete(ctx_r356.achievement.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0, a1) { return { place_hu: a0, place_en: a1 }; };
function AchievementComponent_a_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ACHIEVEMENTS.place ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r357.achievement.place_hu, ctx_r357.achievement.place_en));
} }
function AchievementComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AchievementComponent_a_16_div_1_Template, 2, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r351.achievement.place_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r351.achievement.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c1 = function (a0) { return { "failed": a0 }; };
function AchievementComponent_ng_template_17_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    var _r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Helysz\u00EDn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_ng_template_15_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364); var ctx_r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r363.form.location_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Helyez\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_ng_template_15_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364); var ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r365.form.place_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Verseny/eredm\u00E9ny neve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_ng_template_15_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364); var ctx_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r366.form.title_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r361.form.location_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r361.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r361.form.place_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r361.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r361.form.title_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r361.failed));
} }
function AchievementComponent_ng_template_17_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    var _r368 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_ng_template_19_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r368); var ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r367.form.location_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Place ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_ng_template_19_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r368); var ctx_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r369.form.place_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title of achievement/competition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_ng_template_19_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r368); var ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r370.form.title_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r362 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r362.form.location_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r362.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r362.form.place_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r362.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r362.form.title_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r362.failed));
} }
function AchievementComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    var _r373 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "H\u00EDr m\u00F3dos\u00EDt\u00E1sa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementComponent_ng_template_17_Template_button_click_3_listener() { var modal_r358 = ctx.$implicit; return modal_r358.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Magyar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AchievementComponent_ng_template_17_ng_template_15_Template, 15, 12, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Angol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AchievementComponent_ng_template_17_ng_template_19_Template, 15, 12, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "D\u00E1tum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r373); var ctx_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r372.form.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "K\u00E9p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r373); var ctx_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r374.form.file = $event; })("change", function AchievementComponent_ng_template_17_Template_input_change_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r373); var ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r375.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementComponent_ng_template_17_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r373); var ctx_r376 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx_r376.onSubmit(_r352, ctx_r376.achievement.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Felt\u00F6lt\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r360 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    var ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r360);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r353.form.date)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r353.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r353.form.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r353.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r353.errorMessage, " ");
} }
var _c2 = function (a0, a1) { return { location_hu: a0, location_en: a1 }; };
var _c3 = function (a0, a1) { return { title_hu: a0, title_en: a1 }; };
var _c4 = function (a0) { return { date: a0 }; };
// import AOS from 'aos';
var AchievementComponent = /** @class */ (function () {
    function AchievementComponent(globals, http, apiService, modalService, pictureService) {
        this.globals = globals;
        this.http = http;
        this.apiService = apiService;
        this.modalService = modalService;
        this.form = {};
        this.failed = false;
        this.errorMessage = '';
        this.fileToUpload = null;
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pictureService = pictureService;
    }
    AchievementComponent.prototype.ngOnInit = function () {
        // AOS.init();
        this.form.title_hu = this.achievement.title_hu;
        this.form.location_hu = this.achievement.location_hu;
        this.form.title_en = this.achievement.title_en;
        this.form.location_en = this.achievement.location_en;
        this.form.place_hu = this.achievement.place_hu;
        this.form.place_en = this.achievement.place_en;
        this.form.date = this.achievement.date;
    };
    AchievementComponent.prototype.delete = function (id) {
        this.onRemove.emit(this.achievement);
        //TODO: kép törlése
        var b = this.http
            .delete(this.globals.BASE_URL + '/api/achievement/'.concat(id.toString()))
            .subscribe(function (data) {
        });
    };
    AchievementComponent.prototype.openContent = function (longContent) {
        this.modalService.open(longContent, { scrollable: true, centered: true, size: 'lg' });
    };
    AchievementComponent.prototype.onSubmit = function (empForm, id) {
        this.achievement.title_hu = this.form.title_hu;
        this.achievement.location_hu = this.form.location_hu;
        this.achievement.title_en = this.form.title_en;
        this.achievement.location_en = this.form.location_en;
        this.achievement.date = this.form.date;
        this.achievement.place_hu = this.form.place_hu;
        this.achievement.place_en = this.form.place_en;
        var achievementId = id;
        var o;
        if (this.fileToUpload != null) {
            this.achievement.picture = '../../assets/achievement/' + this.fileToUpload.name;
            this.uploadFileToActivity();
            o = {
                id: achievementId,
                title_hu: this.form.title_hu,
                location_hu: this.form.location_hu,
                title_en: this.form.title_en,
                location_en: this.form.location_en,
                description_hu: "leírás",
                description_en: "description",
                date: this.form.date,
                place_hu: this.form.place_hu,
                place_en: this.form.place_en,
                isLast: false,
                picture: '../../assets/achievement/' + this.fileToUpload.name
            };
        }
        else {
            o = {
                id: achievementId,
                title_hu: this.form.title_hu,
                location_hu: this.form.location_hu,
                title_en: this.form.title_en,
                location_en: this.form.location_en,
                description_hu: "leírás",
                description_en: "description",
                date: this.form.date,
                place_hu: this.form.place_hu,
                place_en: this.form.place_en,
                isLast: false,
                picture: this.achievement.picture
            };
        }
        var b = this.http
            .put(this.globals.BASE_URL + "/api/achievement", o)
            .subscribe(function (data) {
        });
        this.modalService.dismissAll('put');
        this.form = empForm;
        this.form.reset();
    };
    AchievementComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    AchievementComponent.prototype.uploadFileToActivity = function () {
        this.pictureService.postFile(this.fileToUpload, 'achievement').subscribe(function (data) {
            // do something, if upload success
        }, function (error) {
        });
    };
    AchievementComponent.ɵfac = function AchievementComponent_Factory(t) { return new (t || AchievementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_achievement_service__WEBPACK_IMPORTED_MODULE_3__["AchievementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_picture_service__WEBPACK_IMPORTED_MODULE_5__["PictureService"])); };
    AchievementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AchievementComponent, selectors: [["app-achievement"]], inputs: { authority: "authority", achievement: "achievement" }, outputs: { onRemove: "onRemove" }, decls: 19, vars: 15, consts: [[1, "timeline-badge"], ["class", "last-one", "src", "../../assets/achievement/cake.png", "width", "35", 4, "ngIf"], ["src", "../../assets/achievement/logo.png", "width", "35", 4, "ngIf"], [1, "timeline-panel", "pl-md-5", "pr-md-5", "pl-lg-5", "pr-lg-5", "pb-4", "pr-3"], [1, "timeline-heading"], ["class", "row justify-content-end edit", 4, "ngIf"], [1, "row", "timeline-title", "p-md-3", "p-lg-3", "pt-md-3", "pt-lg-3", "pb-3", "pr-2"], ["id", "timeline-location", "translate", "", 1, "pl-3", "pl-md-0", "pl-lg-0", "pt-md-3", "pt-lg-3", "pt-1", 3, "translateParams"], ["translate", "", 1, "pt-lg-3", "pl-3", "pt-1", "pt-md-3", 3, "translateParams"], [1, ".d-block", ".d-md-none", "row", "col-12", "date", "pt-lg-3", "pt-md-3", "mb-2", "align-items-center"], ["translate", "", 1, "pl-1", 3, "translateParams"], ["class", "img", 4, "ngIf"], ["EditForm", ""], ["src", "../../assets/achievement/cake.png", "width", "35", 1, "last-one"], ["src", "../../assets/achievement/logo.png", "width", "35"], [1, "row", "justify-content-end", "edit"], [1, "col-2", 3, "click"], [1, "update-icon"], [1, "img"], ["class", "img__overlay place", "translate", "", 3, "translateParams", 4, "ngIf"], [3, "src"], ["translate", "", 1, "img__overlay", "place", 3, "translateParams"], [1, "modal-header"], [1, "title", "mb-2", "mt-4"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "pb-5"], ["Form", "ngForm"], [1, "localization-tabs"], ["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "localization-tab-content", 3, "ngbNavOutlet"], [1, "row", "pl-1"], [1, "col-md-6", "col-lg-6", "col-12"], [1, "form-group"], ["for", "date"], ["id", "date", "required", "", "type", "text", "placeholder", "YYYY-MM-DD", "name", "date", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "form-group", "pt-4", "pb-3"], ["for", "file"], ["type", "file", "id", "file", "name", "file", 3, "ngModel", "ngModelChange", "change"], [1, "row", "justify-content-end", "pr-3"], ["href", "javascript:void(0)", 1, "btn", 3, "click"], [1, "alert", "alert-danger", "mt-3", 3, "hidden"], [1, "row"], ["for", "location_hu"], ["type", "text", "id", "location_hu", "placeholder", "v\u00E1ros vagy orsz\u00E1g neve", "required", "", "name", "location_hu", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "place_hu"], ["type", "text", "id", "place_hu", "name", "place_hu", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "title_hu"], ["type", "text", "id", "title_hu", "required", "", "name", "title_hu", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "location_en"], ["type", "text", "id", "location_en", "placeholder", "name of city or country", "required", "", "name", "location_en", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "place_en"], ["type", "text", "id", "place_en", "name", "place_en", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "title_en"], ["type", "text", "id", "title_en", "required", "", "name", "title", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"]], template: function AchievementComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AchievementComponent_img_1_Template, 1, 0, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AchievementComponent_img_2_Template, 1, 0, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AchievementComponent_div_5_Template, 7, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ACHIEVEMENTS.location");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ACHIEVEMENTS.title ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "calendar_today");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ACHIEVEMENTS.date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AchievementComponent_a_16_Template, 3, 2, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AchievementComponent_ng_template_17_Template, 38, 8, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.achievement.isLast);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.achievement.isLast);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authority == "admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, ctx.achievement.location_hu, ctx.achievement.location_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c3, ctx.achievement.title_hu, ctx.achievement.title_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c4, ctx.achievement.date));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.achievement.picture);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["a[_ngcontent-%COMP%]   .update-icon.mat-icon[_ngcontent-%COMP%]{\r\n    transition: transform .2s ease;\r\n}\r\na[_ngcontent-%COMP%]   .update-icon.mat-icon[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.1);\r\n}\r\nmat-icon[_ngcontent-%COMP%]{\r\n    transform: scale(0.75);\r\n}\r\n.edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    transform: scale(0.75);\r\n    cursor: pointer;\r\n}\r\n.date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: Helvetica;\r\n    margin:0;\r\n    font-size: 0.75rem;\r\n}\r\n.left-date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: KelsonSans-Normal;\r\n    margin:0;\r\n    font-size: 0.5rem;\r\n}\r\n.left-date[_ngcontent-%COMP%]{\r\n    right: 13%;\r\n    display: inline;\r\n    top: 20%;\r\n}\r\n.timeline-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: Helvetica;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    padding:0;\r\n    align-content: center;\r\n\r\n}\r\n.image[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n    margin: 0;\r\n    padding: 0;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    transition: .5s ease;\r\n    background-color: #17252f;\r\n}\r\n.container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n    opacity: 0.7;\r\n}\r\n.place[_ngcontent-%COMP%]{\r\n    font-family: Roboto;\r\n    font-size: 1.5rem;\r\n    color:white;\r\n    text-transform:uppercase;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.img__overlay[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    left: 0;\r\n    opacity: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transition: opacity 0.25s;\r\n    z-index: 1;\r\n    background-color: rgba(27, 53, 64, 0.7);\r\n    color: #fafafa;\r\n    font-size: 24px;\r\n}\r\n.img__overlay[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n    cursor: default;\r\n}\r\n\r\n.timeline-panel[_ngcontent-%COMP%] {\r\n    border: 1px solid #d4d4d4;\r\n    border-radius: 2px;\r\n    padding: 20px;\r\n    position: relative;\r\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n    width: calc(100% - 90px);\r\n    width: -webkit-calc(100% - 90px);\r\n    float: right;\r\n    background-color: #ffffff;\r\n}\r\n.timeline-panel[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    top: 26px;\r\n    display: inline-block;\r\n    border-top: 15px solid transparent;\r\n    border-left: 15px solid #ccc;\r\n    border-right: 0 solid #ccc;\r\n    border-bottom: 15px solid transparent;\r\n    content: \" \";\r\n    border-left-width: 0;\r\n    border-right-width: 15px;\r\n    left: -15px;\r\n    right: auto;\r\n}\r\n.timeline-panel[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    top: 27px;\r\n    display: inline-block;\r\n    border-top: 14px solid transparent;\r\n    border-left: 14px solid #fff;\r\n    border-right: 0 solid #fff;\r\n    border-bottom: 14px solid transparent;\r\n    content: \" \";\r\n    border-left-width: 0;\r\n    border-right-width: 14px;\r\n    left: -14px;\r\n    right: auto;\r\n\r\n}\r\n\r\n.timeline-badge[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    width: 50px;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    position: absolute;\r\n    z-index: 100;\r\n    border-top-right-radius: 110%;\r\n    border-top-left-radius: 110%;\r\n    border-bottom-right-radius: 50%;\r\n    border-bottom-left-radius: 50%;\r\n\r\n    left: 15px;\r\n    margin-left: 0;\r\n    top: 2px;\r\n}\r\n.timeline-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: black;\r\n    font-family: 'KelsonSans-Light';\r\n    text-transform: uppercase;\r\n    font-size: 1.5rem;\r\n    margin: 0;\r\n}\r\n#timeline-location[_ngcontent-%COMP%] {\r\n    font-family: 'KelsonSans-Normal';\r\n}\r\n.timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .timeline-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n}\r\n.timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n    color: grey;\r\n}\r\n.localization-tab-content[_ngcontent-%COMP%]{\r\n    padding: 1rem 1rem 0 1rem;\r\n    border: solid 1px lightgrey;\r\n    border-style: none solid solid solid;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]{\r\n    padding: 1rem 1rem 0 1rem\r\n}\r\n.localization-tabs[_ngcontent-%COMP%]{\r\n    margin-bottom: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNoaWV2ZW1lbnQvYWNoaWV2ZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFFBQVE7SUFDUixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsUUFBUTtBQUNaO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0JBQWlCO09BQWpCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsT0FBTztJQUNQLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFFQSxZQUFZO0FBQ1o7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFFbEIsMENBQTBDO0lBQzFDLHdCQUF3QjtJQUV4QixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsV0FBVzs7QUFFZjtBQUNBOztFQUVFO0FBRUY7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsOEJBQThCOztJQUU5QixVQUFVO0lBQ1YsY0FBYztJQUNkLFFBQVE7QUFDWjtBQUdBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0Isb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hY2hpZXZlbWVudC9hY2hpZXZlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSAudXBkYXRlLWljb24ubWF0LWljb257XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XHJcbn1cclxuYSAudXBkYXRlLWljb24ubWF0LWljb246aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxubWF0LWljb257XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xyXG59XHJcblxyXG4uZWRpdCBtYXQtaWNvbntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRhdGUgcHtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxufVxyXG4ubGVmdC1kYXRlIHB7XHJcbiAgICBmb250LWZhbWlseTogS2Vsc29uU2Fucy1Ob3JtYWw7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG59XHJcbi5sZWZ0LWRhdGV7XHJcbiAgICByaWdodDogMTMlO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdG9wOiAyMCU7XHJcbn1cclxuLnRpbWVsaW5lLWJvZHkgcHtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcbi5pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzI1MmY7XHJcbn1cclxuXHJcbi5jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4ucGxhY2V7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxufVxyXG4uaW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uaW1nX19vdmVybGF5IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCA1MywgNjQsIDAuNyk7XHJcbiAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uaW1nX19vdmVybGF5OmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi8qIFRJTUVMSU5FKi9cclxuLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XHJcbiAgICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLSA5MHB4KTtcclxuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDkwcHgpO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4udGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcclxuICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50aW1lbGluZS1wYW5lbDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI3cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItdG9wOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE0cHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yaWdodDogMCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XHJcbiAgICBsZWZ0OiAtMTRweDtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG4vKi50aW1lbGluZS1wYW5lbC5kYXRle1xyXG5cclxufSovXHJcblxyXG4udGltZWxpbmUtYmFkZ2Uge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDExMCU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB0b3A6IDJweDtcclxufVxyXG5cclxuXHJcbi50aW1lbGluZS10aXRsZSBwe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdLZWxzb25TYW5zLUxpZ2h0JztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4jdGltZWxpbmUtbG9jYXRpb24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdLZWxzb25TYW5zLU5vcm1hbCc7XHJcbn1cclxuXHJcbi50aW1lbGluZS1ib2R5ID4gcCxcclxuLnRpbWVsaW5lLWJvZHkgPiB1bCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGltZWxpbmUtYm9keSA+IHAgKyBwIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcbi5sb2NhbGl6YXRpb24tdGFiLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lIHNvbGlkIHNvbGlkIHNvbGlkO1xyXG59XHJcbi5uYXYtdGFic3tcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW1cclxufVxyXG4ubG9jYWxpemF0aW9uLXRhYnN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbiJdfQ== */"] });
    return AchievementComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AchievementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-achievement',
                templateUrl: './achievement.component.html',
                styleUrls: ['./achievement.component.css']
            }]
    }], function () { return [{ type: _globals__WEBPACK_IMPORTED_MODULE_1__["Globals"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_achievement_service__WEBPACK_IMPORTED_MODULE_3__["AchievementService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: _shared_picture_service__WEBPACK_IMPORTED_MODULE_5__["PictureService"] }]; }, { authority: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], achievement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/achievements/achievements.component.ts":
/*!********************************************************!*\
  !*** ./src/app/achievements/achievements.component.ts ***!
  \********************************************************/
/*! exports provided: AchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsComponent", function() { return AchievementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_achievement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/achievement.service */ "./src/app/shared/achievement.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _shared_picture_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/picture.service */ "./src/app/shared/picture.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _achievement_achievement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../achievement/achievement.component */ "./src/app/achievement/achievement.component.ts");














var _c0 = function (a0) { return { "failed": a0 }; };
function AchievementsComponent_div_6_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    var _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Helysz\u00EDn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_ng_template_12_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150); var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r149.form.location_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Helyez\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_ng_template_12_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150); var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r151.form.place_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Verseny/eredm\u00E9ny neve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_ng_template_12_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150); var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r152.form.title_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r147.form.location_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r147.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r147.form.place_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r147.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r147.form.title_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r147.failed));
} }
function AchievementsComponent_div_6_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_ng_template_16_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r153.form.location_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Place ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_ng_template_16_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r155.form.place_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title of achievement/competition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_ng_template_16_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r156.form.title_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r148.form.location_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r148.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r148.form.place_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r148.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r148.form.title_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r148.failed));
} }
var _c1 = function (a0) { return { "disabled": a0 }; };
function AchievementsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00DAj eredm\u00E9ny hozz\u00E1ad\u00E1sa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Magyar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AchievementsComponent_div_6_ng_template_12_Template, 15, 12, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Angol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AchievementsComponent_div_6_ng_template_16_Template, 15, 12, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "D\u00E1tum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158); var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r157.form.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "K\u00E9p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158); var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r159.form.file = $event; })("change", function AchievementsComponent_div_6_Template_input_change_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158); var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r160.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementsComponent_div_6_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158); var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r161.onSubmit(_r145); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Felt\u00F6lt\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    var _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r142.form.date)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r142.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r142.form.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, !_r145.form.valid || ctx_r142.fileToUpload == null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r142.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r142.errorMessage, " ");
} }
function AchievementsComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    var _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-achievement", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRemove", function AchievementsComponent_li_9_Template_app_achievement_onRemove_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r163.onDeleteAchievement($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var achievement_r162 = ctx.$implicit;
    var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("achievement", achievement_r162)("authority", ctx_r143.authority);
} }
function AchievementsComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementsComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166); var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r165.getAchievements(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BUTTON.more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var AchievementsComponent = /** @class */ (function () {
    function AchievementsComponent(globals, http, achievementService, tokenStorage, pictureService) {
        this.globals = globals;
        this.http = http;
        this.achievementService = achievementService;
        this.tokenStorage = tokenStorage;
        this.achievements = [];
        this.pageNumber = 0;
        this.isLastPage = false;
        this.form = {};
        this.failed = false;
        this.errorMessage = '';
        this.fileToUpload = null;
        this.pictureService = pictureService;
        this.form.place_en = '1st place';
        this.form.place_hu = '1. helyezés';
    }
    AchievementsComponent.prototype.ngOnInit = function () {
        this.getAchievements();
        this.checkAuth();
    };
    AchievementsComponent.prototype.getAchievements = function () {
        var _this = this;
        this.achievementService.getAchievements(this.pageNumber).subscribe(
        // tslint:disable-next-line:prefer-const
        function (res) {
            var data = res;
            data.content.forEach(function (element) {
                _this.achievements.push(element);
            });
            _this.pageNumber++;
            _this.isLastPage = data.last;
        }, function (err) {
            alert("get error");
        });
    };
    // public sortby(date: string) {
    //   return this.achievements.sort((a, b) =>
    //     a[date] < b[date] ? 1 : a[date] === b[date] ? 0 : -1
    //   );
    // }
    AchievementsComponent.prototype.onDeleteAchievement = function (a) {
        this.achievements = this.achievements.filter(function (rowObj) { return rowObj.id !== a.id; });
    };
    //post
    AchievementsComponent.prototype.onSubmit = function (empForm) {
        if (this.form.place_hu == null) {
            this.form.place_hu = ' ';
        }
        if (this.form.place_en == null) {
            this.form.place_en = ' ';
        }
        this.uploadFileToActivity();
        var o = {
            title_hu: this.form.title_hu,
            location_hu: this.form.location_hu,
            title_en: this.form.title_en,
            location_en: this.form.location_en,
            date: this.form.date,
            description_hu: "leírás",
            description_en: "description",
            place_hu: this.form.place_hu,
            place_en: this.form.place_en,
            isLast: false,
            picture: '../../assets/achievement/' + this.fileToUpload.name
        };
        var b = this.http
            .post(this.globals.BASE_URL + "/api/achievement", o)
            .subscribe(function (data) {
        });
        this.pushAchievement();
        this.form = empForm;
        this.form.reset();
        this.fileToUpload = null;
    };
    AchievementsComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    AchievementsComponent.prototype.uploadFileToActivity = function () {
        this.pictureService.postFile(this.fileToUpload, 'achievement').subscribe(function (data) {
            // do something, if upload success
        }, function (error) {
        });
    };
    AchievementsComponent.prototype.pushAchievement = function () {
        var n;
        if (this.fileToUpload != null) {
            n = {
                id: this.achievements.length,
                title_hu: this.form.title_hu,
                location_hu: this.form.location_hu,
                title_en: this.form.title_en,
                location_en: this.form.location_en,
                description_hu: "leírás",
                description_en: "description",
                place_hu: this.form.place_hu,
                place_en: this.form.place_en,
                isLast: false,
                date: this.form.date,
                picture: '../../assets/achievement/' + this.fileToUpload.name
            };
        }
        else {
            n = {
                id: this.achievements.length,
                title_hu: this.form.title_hu,
                location_hu: this.form.location_hu,
                title_en: this.form.title_en,
                location_en: this.form.location_en,
                description_hu: "leírás",
                description_en: "description",
                place_hu: this.form.place_hu,
                place_en: this.form.place_en,
                isLast: false,
                date: this.form.date,
                picture: ''
            };
        }
        this.achievements.unshift(n);
    };
    AchievementsComponent.prototype.checkAuth = function () {
        var _this = this;
        this.authority = undefined;
        if (this.tokenStorage.getToken()) {
            var roles = this.tokenStorage.getAuthorities();
            roles.every(function (role) {
                if (role === "ROLE_ADMIN") {
                    _this.authority = "admin";
                    return false;
                }
                _this.authority = "user";
                return true;
            });
        }
    };
    AchievementsComponent.ɵfac = function AchievementsComponent_Factory(t) { return new (t || AchievementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_achievement_service__WEBPACK_IMPORTED_MODULE_3__["AchievementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_picture_service__WEBPACK_IMPORTED_MODULE_5__["PictureService"])); };
    AchievementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AchievementsComponent, selectors: [["app-achievements"]], decls: 13, vars: 3, consts: [[1, "achievements"], [1, "container", "col-12", "col-sm-12", "col-lg-8", "col-md-11", "align-items-center"], ["translate", "", 1, "title", "pb-lg-4", "pb-md-4", "pb-0"], [1, "container", "col-lg-10", "col-md-12", "col-12", "col-sm-12", "mt-5"], ["class", "card  mb-5 mr-md-3 ml-md-3 mr-lg-3 ml-lg-3", "id", "achievement-form", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "timeline", "col-12", "col-sm-12", "col-lg-8", "col-md-11"], [4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-6", "col-lg-3", "col-6", "offset-lg-2", "offset-md-3", "offset-sm-3", "offset-2", "load-more"], ["class", "btn", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["id", "achievement-form", 1, "card", "mb-5", "mr-md-3", "ml-md-3", "mr-lg-3", "ml-lg-3"], [1, "title", "pb-3"], ["AddForm", "ngForm"], [1, "localization-tabs"], ["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "localization-tab-content", 3, "ngbNavOutlet"], [1, "row", "pl-1"], [1, "col-md-6", "col-lg-6", "col-12"], [1, "form-group"], ["for", "date"], ["id", "date", "required", "", "type", "text", "placeholder", "YYYY-MM-DD", "name", "date", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "form-group", "pt-4", "pb-3"], ["for", "file"], ["type", "file", "id", "file", "name", "file", 3, "ngModel", "ngModelChange", "change"], [1, "row", "justify-content-end", "pr-3"], ["href", "javascript:void(0)", 1, "btn", 3, "ngClass", "click"], [1, "alert", "alert-danger", "mt-3", 3, "hidden"], [1, "row"], ["for", "location_hu"], ["type", "text", "id", "location_hu", "placeholder", "v\u00E1ros vagy orsz\u00E1g neve", "required", "", "name", "location_hu", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "place_hu"], ["type", "text", "id", "place_hu", "name", "place_hu", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "title_hu"], ["type", "text", "id", "title_hu", "required", "", "name", "title_hu", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "location_en"], ["type", "text", "id", "location_en", "placeholder", "name of city or country", "required", "", "name", "location_en", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "place_en"], ["type", "text", "id", "place_en", "name", "place_en", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "title_en"], ["type", "text", "id", "title_en", "required", "", "name", "title", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [3, "achievement", "authority", "onRemove"], ["href", "javascript:void(0)", 1, "btn", 3, "click"], ["translate", ""]], template: function AchievementsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ACHIEVEMENTS.achievements");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AchievementsComponent_div_6_Template, 35, 11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AchievementsComponent_li_9_Template, 2, 2, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AchievementsComponent_a_11_Template, 3, 0, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-footer");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authority == "admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.achievements);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLastPage);
        } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _achievement_achievement_component__WEBPACK_IMPORTED_MODULE_12__["AchievementComponent"]], styles: ["div.achievements[_ngcontent-%COMP%]{\r\n    background-color: #F3F4F4;\r\n}\r\n\r\n\r\n\r\n.timeline[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 20px 0 20px;\r\n    position: relative;\r\n    margin:0;\r\n}\r\n\r\n#achievement-form[_ngcontent-%COMP%]{\r\n    background: white;\r\n    background-color: white;\r\n    padding: 3%;\r\n    box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]:before {\r\n    top: 0;\r\n    bottom: 0;\r\n    position: absolute;\r\n    content: \" \";\r\n    width: 2px;\r\n    background-color: #173a45;\r\n    margin-left: -1.5px;\r\n    left: 40px;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\r\n    content: \" \";\r\n    display: table;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\r\n    clear: both;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\r\n    content: \" \";\r\n    display: table;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\r\n    clear: both;\r\n}\r\n\r\n.load-more[_ngcontent-%COMP%]{\r\n    padding-bottom: 10%;\r\n    padding-top:3%;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    color: grey;\r\n}\r\n\r\n.localization-tab-content[_ngcontent-%COMP%]{\r\n    padding: 1rem 1rem 0 1rem;\r\n    border: solid 1px lightgrey;\r\n    border-style: none solid solid solid;\r\n}\r\n\r\n.nav-tabs[_ngcontent-%COMP%]{\r\n    padding: 1rem 1rem 0 1rem\r\n}\r\n\r\n.localization-tabs[_ngcontent-%COMP%]{\r\n    margin-bottom: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNoaWV2ZW1lbnRzL2FjaGlldmVtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLFlBQVk7O0FBQ1o7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxzREFBc0Q7QUFDMUQ7O0FBQ0E7SUFDSSxNQUFNO0lBQ04sU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixvQ0FBb0M7QUFDeEM7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYWNoaWV2ZW1lbnRzL2FjaGlldmVtZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmFjaGlldmVtZW50c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y0RjQ7XHJcbn1cclxuXHJcbi8qIFRJTUVMSU5FKi9cclxuLnRpbWVsaW5lIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjowO1xyXG59XHJcbiNhY2hpZXZlbWVudC1mb3Jte1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjE1cmVtIDEuNzVyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xyXG59XHJcbi50aW1lbGluZTpiZWZvcmUge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3M2E0NTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS41cHg7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaTpiZWZvcmUsXHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaTpiZWZvcmUsXHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4ubG9hZC1tb3Jle1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICAgIHBhZGRpbmctdG9wOjMlO1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuLmxvY2FsaXphdGlvbi10YWItY29udGVudHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmUgc29saWQgc29saWQgc29saWQ7XHJcbn1cclxuLm5hdi10YWJze1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDAgMXJlbVxyXG59XHJcbi5sb2NhbGl6YXRpb24tdGFic3tcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiJdfQ== */"] });
    return AchievementsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AchievementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-achievements",
                templateUrl: "./achievements.component.html",
                styleUrls: ["./achievements.component.css"],
            }]
    }], function () { return [{ type: _globals__WEBPACK_IMPORTED_MODULE_1__["Globals"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_achievement_service__WEBPACK_IMPORTED_MODULE_3__["AchievementService"] }, { type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] }, { type: _shared_picture_service__WEBPACK_IMPORTED_MODULE_5__["PictureService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_signup_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/signup-info */ "./src/app/auth/signup-info.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../footer/footer.component */ "./src/app/footer/footer.component.ts");









function RegisterComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_16_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r213.errors.required);
} }
function RegisterComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_23_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r215.errors.required);
} }
function RegisterComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_30_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_30_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_30_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r217.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r217.errors.email);
} }
function RegisterComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_37_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_37_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_37_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r219.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r219.errors.minlength);
} }
function RegisterComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Signup failed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r222.errorMessage, " ");
} }
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.form = {};
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = "";
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function () {
        // console.log(this.form);
        var _this = this;
        this.signupInfo = new _auth_signup_info__WEBPACK_IMPORTED_MODULE_1__["SignUpInfo"](this.form.name, this.form.username, this.form.email, this.form.password, this.form.admin);
        this.authService.signUp(this.signupInfo).subscribe(function (data) {
            // console.log(data);
            _this.isSignedUp = true;
            _this.isSignUpFailed = false;
            _this.router.navigateByUrl("/users");
        }, function (error) {
            // console.log(error);
            _this.errorMessage = error.error.message;
            _this.isSignUpFailed = true;
        });
    };
    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 53, vars: 10, consts: [[1, "register"], [1, "container", "col-10", "col-sm-12", "col-lg-10", "col-md-11", "align-items-center"], [1, "jumbotron", "col-12"], [1, "title", "mb-5"], [1, "container", "col-lg-7", "col-md-10", "col-12", "col-sm-12", "mt-5"], ["id", "registerform", 1, "card", "mb-5", "mr-3", "ml-3"], ["name", "form", "novalidate", "", 1, "mb-3", "mt-3", "col-12", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "name"], [1, "p-0", "m-0"], ["type", "text", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [4, "ngIf"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["type", "text", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "admin"], ["type", "checkbox", "name", "admin", 1, "form-control", 3, "ngModel", "ngModelChange"], ["admin", "ngModel"], [1, "form-group", "p-2"], ["href", "javascript:void(0)", "target", "", 1, "btn", "m-2"], ["routerLink", "/users", "href", "javascript:void(0)", "target", "", 1, "btn", "m-2"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert", "alert-warning"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            var _r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00DAj felhaszn\u00E1l\u00F3 regisztr\u00E1ci\u00F3ja");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r229); var _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r212.form.valid && ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " N\u00E9v ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.form.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_div_16_Template, 2, 1, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Felhaszn\u00E1l\u00F3n\u00E9v ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_21_listener($event) { return ctx.form.username = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterComponent_div_23_Template, 2, 1, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " E-mail c\u00EDm ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16, 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_28_listener($event) { return ctx.form.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegisterComponent_div_30_Template, 3, 2, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Jelsz\u00F3 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 18, 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_35_listener($event) { return ctx.form.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RegisterComponent_div_37_Template, 3, 2, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Adminisztr\u00E1tor ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 21, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_42_listener($event) { return ctx.form.admin = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "OK");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "M\u00E9gse");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, RegisterComponent_div_51_Template, 4, 1, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-footer");
        } if (rf & 2) {
            var _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
            var _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
            var _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
            var _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
            var _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r212.submitted && _r213.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.username);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r212.submitted && _r215.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r212.submitted && _r217.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r212.submitted && _r219.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.admin);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r212.submitted && ctx.isSignUpFailed);
        } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".register[_ngcontent-%COMP%]{\r\n    background-color: #f3f4f4;;\r\n}\r\n.jumbotron[_ngcontent-%COMP%] {\r\n    background: none;\r\n    margin-bottom: 0;\r\n  }\r\n#registerform[_ngcontent-%COMP%] {\r\n    background: white;\r\n    background-color: white;\r\n    padding: 3%;\r\n    box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\r\n  }\r\np[_ngcontent-%COMP%]{\r\n    font-size: 1.2rem;;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtBQUNGO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsc0RBQXNEO0VBQ3hEO0FBQ0Y7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNDs7XHJcbn1cclxuLmp1bWJvdHJvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiNyZWdpc3RlcmZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjE1cmVtIDEuNzVyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xyXG4gIH1cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtOztcclxufSJdfQ== */"] });
    return RegisterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-register",
                templateUrl: "./register.component.html",
                styleUrls: ["./register.component.css"],
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _model_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/role */ "./src/app/model/role.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");











function UsersComponent_tr_20_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var role_r259 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r259.name);
} }
function UsersComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    var _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UsersComponent_tr_20_p_8_Template, 2, 1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_20_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r261); var user_r257 = ctx.$implicit; var ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx_r260.open(_r255, user_r257.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_20_Template_td_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r261); var user_r257 = ctx.$implicit; var ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r262.confirmDelete(user_r257.id, user_r257.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r257 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r257.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r257.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r257.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", user_r257.roles);
} }
function UsersComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    var _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Felhaszn\u00E1l\u00F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_21_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r266); var ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r265.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "N\u00E9v");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_ng_template_21_Template_textarea_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r266); var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r267.selectedUser.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Felhaszn\u00E1l\u00F3n\u00E9v");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_ng_template_21_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r266); var ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r268.selectedUser.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_ng_template_21_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r266); var ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r269.selectedUser.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Admin?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_ng_template_21_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r266); var ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r270.selectedUser.isAdmin = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_21_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r266); var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r271.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ment\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_21_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r266); var ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r272.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "M\u00E9gsem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r256.selectedUser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r256.selectedUser.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r256.selectedUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r256.selectedUser.isAdmin)("checked", ctx_r256.selectedUser.isAdmin);
} }
var UsersComponent = /** @class */ (function () {
    function UsersComponent(user, modalService) {
        this.modalService = modalService;
        this.title = "appBootstrap";
        this.editing = false;
        this.userService = user;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    UsersComponent.prototype.edit = function (user) {
        this.editing = true;
        // console.log(user);
    };
    UsersComponent.prototype.open = function (content, id) {
        var _this = this;
        this.selectedUser = this.users.find(function (t) { return t.id == id; });
        // this.selectedUser = {...this.originalUser};
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UsersComponent.prototype.submit = function () {
        if (this.selectedUser.isAdmin) {
            this.selectedUser.roles = [new _model_role__WEBPACK_IMPORTED_MODULE_2__["Role"]("ROLE_ADMIN"), new _model_role__WEBPACK_IMPORTED_MODULE_2__["Role"]("ROLE_USER")];
        }
        else {
            this.selectedUser.roles = [new _model_role__WEBPACK_IMPORTED_MODULE_2__["Role"]("ROLE_USER")];
        }
        //this.originalUser = this.selectedUser;
        this.userService
            .updateUser(this.selectedUser)
            .subscribe(function (error) { return console.log(error); });
    };
    UsersComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    UsersComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (t) {
            _this.users = t;
            _this.users.forEach(function (u) {
                u.isAdmin = false;
                u.roles.forEach(function (role) {
                    if (role.name === "ROLE_ADMIN") {
                        u.isAdmin = true;
                    }
                });
            });
        });
    };
    UsersComponent.prototype.close = function () {
        this.modalService.dismissAll();
    };
    UsersComponent.prototype.confirmDelete = function (id, name) {
        if (confirm("Biztos hogy törlöd a(z) " + name + "felhasználót?")) {
            this.delete(id);
        }
    };
    UsersComponent.prototype.delete = function (id) {
        var _this = this;
        this.userService.deleteUser(id).subscribe(function (data) {
            var du = _this.users.find(function (a) { return a.id == id; });
            var index = _this.users.indexOf(du, 0);
            if (index > -1) {
                _this.users.splice(index, 1);
            }
        }, function (error) {
            // console.log(error);
        });
    };
    UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 24, vars: 1, consts: [[1, "justify-content-center", "d-flex", "users"], [1, "col-10"], [1, "title", "mt-5", "mb-5"], ["href", "javascript:void(0)", "routerLink", "/signup", 1, "btn"], [1, "justify-content-center", "d-flex"], [1, "col-12", "m-5"], [1, "col-3"], [1, "col-1"], [4, "ngFor", "ngForOf"], ["content", ""], [1, "col-3", 3, "click"], [1, "fas", "fa-edit", "p-2"], [1, "fas", "fa-trash", "p-2"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["for", "name"], ["required", "", "id", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "username"], ["required", "", "id", "username", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["required", "", "id", "email", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "admin"], ["type", "checkbox", "id", "admin", "name", "admin", 3, "ngModel", "checked", "ngModelChange"], [1, "modal-footer"], ["type", "submit", 1, "brk-btn", 3, "click"], ["type", "cancel", 1, "brk-btn", 3, "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Felhaszn\u00E1l\u00F3k");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00DAj felhaszn\u00E1l\u00F3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "N\u00E9v");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Felhaszn\u00E1l\u00F3n\u00E9v");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "E-mail");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "th", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UsersComponent_tr_20_Template, 13, 4, "tr", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UsersComponent_ng_template_21_Template, 24, 5, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-footer");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"]], styles: [".users[_ngcontent-%COMP%] {\r\n  background-color: #f3f4f4;;\r\n}\r\nth[_ngcontent-%COMP%] {\r\n  font-family: \"KelsonSans-Bold\";\r\n  letter-spacing: 4px;\r\n  text-transform: uppercase;\r\n  font-size: 2rem;\r\n  margin: 0;\r\n  padding-top: 5%;\r\n  line-height: 100%;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n  font-family: \"Helvetica\";\r\n  font-size: 1rem;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  border: none;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\ntr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: white;\r\n}\r\n.fas[_ngcontent-%COMP%]{\r\n  scale: 1.5;\r\n}\r\n.fas[_ngcontent-%COMP%]:hover {\r\n  color: grey;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFFQTs7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VycyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNDs7XHJcbn1cclxudGgge1xyXG4gIGZvbnQtZmFtaWx5OiBcIktlbHNvblNhbnMtQm9sZFwiO1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBsaW5lLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxudGQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG50YWJsZSB7XHJcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5mYXN7XHJcbiAgc2NhbGU6IDEuNTtcclxufVxyXG4uZmFzOmhvdmVyIHtcclxuICBjb2xvcjogZ3JleTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });
    return UsersComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-users",
                templateUrl: "./users.component.html",
                styleUrls: ["./users.component.css"],
            }]
    }], function () { return [{ type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./achievements/achievements.component */ "./src/app/achievements/achievements.component.ts");
/* harmony import */ var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sponsors/sponsors.component */ "./src/app/sponsors/sponsors.component.ts");
/* harmony import */ var _admin_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/register/register.component */ "./src/app/admin/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _data_visualization_data_visualization_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data-visualization/data-visualization.component */ "./src/app/data-visualization/data-visualization.component.ts");














var routes = [
    { path: "gallery", component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"] },
    { path: "auth/login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: "signup", component: _admin_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: "team", component: _team_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"] },
    { path: "mainpage", component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_2__["MainpageComponent"] },
    { path: "news", component: _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"] },
    { path: "sponsors", component: _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_6__["SponsorsComponent"] },
    {
        path: "boatdata",
        component: _data_visualization_data_visualization_component__WEBPACK_IMPORTED_MODULE_11__["DataVisualizationComponent"],
    },
    { path: "achievements", component: _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_5__["AchievementsComponent"] },
    { path: "admin", redirectTo: "/auth/login" },
    { path: "users", component: _admin_users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"] },
    { path: "", redirectTo: "/mainpage", pathMatch: "full" },
    { path: "**", redirectTo: "/mainpage", pathMatch: "full" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(router, tokenStorage, translate) {
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.translate = translate;
        this.title = 'solarboat-app';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                window.ga('set', 'page', event.urlAfterRedirects);
                window.ga('send', 'pageview');
            }
        });
        translate.addLangs(['en', 'hu']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|hu/) ? browserLang : 'en');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every(function (role) {
                if (role === 'ROLE_ADMIN') {
                    _this.authority = 'admin';
                    return false;
                }
                _this.authority = 'user';
                return true;
            });
        }
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }, { type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tooltip.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _mainpage_news_mainpage_news_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mainpage-news/mainpage-news.component */ "./src/app/mainpage-news/mainpage-news.component.ts");
/* harmony import */ var _news_preview_news_preview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./news-preview/news-preview.component */ "./src/app/news-preview/news-preview.component.ts");
/* harmony import */ var _cover_cover_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cover/cover.component */ "./src/app/cover/cover.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/__ivy_ngcc__/index.js");
/* harmony import */ var _boat_data_boat_data_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./boat-data/boat-data.component */ "./src/app/boat-data/boat-data.component.ts");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./graph/graph.component */ "./src/app/graph/graph.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm5/swimlane-ngx-charts.js");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/bar-chart/bar-chart.component.ts");
/* harmony import */ var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sponsors/sponsors.component */ "./src/app/sponsors/sponsors.component.ts");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./achievements/achievements.component */ "./src/app/achievements/achievements.component.ts");
/* harmony import */ var _achievement_achievement_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./achievement/achievement.component */ "./src/app/achievement/achievement.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_register_register_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/register/register.component */ "./src/app/admin/register/register.component.ts");
/* harmony import */ var _team_members_team_members_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./team-members/team-members.component */ "./src/app/team-members/team-members.component.ts");
/* harmony import */ var _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/auth-guard.service */ "./src/app/shared/auth-guard.service.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm5/auth0-angular-jwt.js");
/* harmony import */ var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _notifications_rx_notifications_rx_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./notifications-rx/notifications-rx.component */ "./src/app/notifications-rx/notifications-rx.component.ts");
/* harmony import */ var _data_visualization_data_visualization_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./data-visualization/data-visualization.component */ "./src/app/data-visualization/data-visualization.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
/* harmony import */ var _compass_compass_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./compass/compass.component */ "./src/app/compass/compass.component.ts");
/* harmony import */ var _mileage_mileage_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./mileage/mileage.component */ "./src/app/mileage/mileage.component.ts");
/* harmony import */ var _waves_waves_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./waves/waves.component */ "./src/app/waves/waves.component.ts");
/* harmony import */ var _team_userview_team_userview_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./team-userview/team-userview.component */ "./src/app/team-userview/team-userview.component.ts");
/* harmony import */ var _team_editmembers_team_editmembers_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./team-editmembers/team-editmembers.component */ "./src/app/team-editmembers/team-editmembers.component.ts");
/* harmony import */ var _team_editgroups_team_editgroups_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./team-editgroups/team-editgroups.component */ "./src/app/team-editgroups/team-editgroups.component.ts");
/* harmony import */ var _team_editgroup_panel_team_editgroup_panel_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./team-editgroup-panel/team-editgroup-panel.component */ "./src/app/team-editgroup-panel/team-editgroup-panel.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/autocomplete.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");





























































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_38__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_33__["httpInterceptorProviders"],
            _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__["AuthGuardService"],
            _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__["AuthGuardService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_35__["JwtModule"],
            _globals__WEBPACK_IMPORTED_MODULE_39__["Globals"],
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBBootstrapModule"],
                ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_21__["ScrollToModule"].forRoot(),
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__["NgxChartsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_35__["JwtModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_40__["AngularEditorModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_45__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]],
                    },
                }),
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_54__["MatAutocompleteModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_56__["MatSelectModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_57__["MatInputModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_8__["MainpageComponent"],
        _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
        _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_16__["AboutusComponent"],
        _mainpage_news_mainpage_news_component__WEBPACK_IMPORTED_MODULE_17__["MainpageNewsComponent"],
        _news_preview_news_preview_component__WEBPACK_IMPORTED_MODULE_18__["NewsPreviewComponent"],
        _cover_cover_component__WEBPACK_IMPORTED_MODULE_19__["CoverComponent"],
        _news_news_component__WEBPACK_IMPORTED_MODULE_20__["NewsComponent"],
        _boat_data_boat_data_component__WEBPACK_IMPORTED_MODULE_22__["BoatDataComponent"],
        _graph_graph_component__WEBPACK_IMPORTED_MODULE_23__["GraphComponent"],
        _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_27__["AchievementsComponent"],
        _achievement_achievement_component__WEBPACK_IMPORTED_MODULE_28__["AchievementComponent"],
        _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_25__["BarChartComponent"],
        _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_26__["SponsorsComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"],
        _admin_register_register_component__WEBPACK_IMPORTED_MODULE_30__["RegisterComponent"],
        _team_members_team_members_component__WEBPACK_IMPORTED_MODULE_31__["TeamMembersComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_34__["GalleryComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
        _admin_users_users_component__WEBPACK_IMPORTED_MODULE_36__["UsersComponent"],
        _notifications_rx_notifications_rx_component__WEBPACK_IMPORTED_MODULE_41__["NotificationsRxComponent"],
        _data_visualization_data_visualization_component__WEBPACK_IMPORTED_MODULE_42__["DataVisualizationComponent"],
        _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_44__["StatisticsComponent"],
        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_46__["ConfirmComponent"],
        _compass_compass_component__WEBPACK_IMPORTED_MODULE_47__["CompassComponent"],
        _mileage_mileage_component__WEBPACK_IMPORTED_MODULE_48__["MileageComponent"],
        _waves_waves_component__WEBPACK_IMPORTED_MODULE_49__["WavesComponent"],
        _team_userview_team_userview_component__WEBPACK_IMPORTED_MODULE_50__["TeamUserviewComponent"],
        _team_editmembers_team_editmembers_component__WEBPACK_IMPORTED_MODULE_51__["TeamEditmembersComponent"],
        _team_editgroups_team_editgroups_component__WEBPACK_IMPORTED_MODULE_52__["TeamEditgroupsComponent"],
        _team_editgroup_panel_team_editgroup_panel_component__WEBPACK_IMPORTED_MODULE_53__["TeamEditgroupPanelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBBootstrapModule"], ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_21__["ScrollToModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__["NgxChartsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_35__["JwtModule"],
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_40__["AngularEditorModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_45__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__["TranslateModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_54__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_56__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_57__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_8__["MainpageComponent"],
                    _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
                    _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_16__["AboutusComponent"],
                    _mainpage_news_mainpage_news_component__WEBPACK_IMPORTED_MODULE_17__["MainpageNewsComponent"],
                    _news_preview_news_preview_component__WEBPACK_IMPORTED_MODULE_18__["NewsPreviewComponent"],
                    _cover_cover_component__WEBPACK_IMPORTED_MODULE_19__["CoverComponent"],
                    _news_news_component__WEBPACK_IMPORTED_MODULE_20__["NewsComponent"],
                    _boat_data_boat_data_component__WEBPACK_IMPORTED_MODULE_22__["BoatDataComponent"],
                    _graph_graph_component__WEBPACK_IMPORTED_MODULE_23__["GraphComponent"],
                    _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_27__["AchievementsComponent"],
                    _achievement_achievement_component__WEBPACK_IMPORTED_MODULE_28__["AchievementComponent"],
                    _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_25__["BarChartComponent"],
                    _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_26__["SponsorsComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"],
                    _admin_register_register_component__WEBPACK_IMPORTED_MODULE_30__["RegisterComponent"],
                    _team_members_team_members_component__WEBPACK_IMPORTED_MODULE_31__["TeamMembersComponent"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_34__["GalleryComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
                    _admin_users_users_component__WEBPACK_IMPORTED_MODULE_36__["UsersComponent"],
                    _notifications_rx_notifications_rx_component__WEBPACK_IMPORTED_MODULE_41__["NotificationsRxComponent"],
                    _data_visualization_data_visualization_component__WEBPACK_IMPORTED_MODULE_42__["DataVisualizationComponent"],
                    _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_44__["StatisticsComponent"],
                    _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_46__["ConfirmComponent"],
                    _compass_compass_component__WEBPACK_IMPORTED_MODULE_47__["CompassComponent"],
                    _mileage_mileage_component__WEBPACK_IMPORTED_MODULE_48__["MileageComponent"],
                    _waves_waves_component__WEBPACK_IMPORTED_MODULE_49__["WavesComponent"],
                    _team_userview_team_userview_component__WEBPACK_IMPORTED_MODULE_50__["TeamUserviewComponent"],
                    _team_editmembers_team_editmembers_component__WEBPACK_IMPORTED_MODULE_51__["TeamEditmembersComponent"],
                    _team_editgroups_team_editgroups_component__WEBPACK_IMPORTED_MODULE_52__["TeamEditgroupsComponent"],
                    _team_editgroup_panel_team_editgroup_panel_component__WEBPACK_IMPORTED_MODULE_53__["TeamEditgroupPanelComponent"],
                ],
                // tslint:disable-next-line:max-line-length
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBBootstrapModule"],
                    ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_21__["ScrollToModule"].forRoot(),
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__["NgxChartsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_35__["JwtModule"],
                    _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_40__["AngularEditorModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_45__["MatDialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]],
                        },
                    }),
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_54__["MatAutocompleteModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_55__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_56__["MatSelectModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_57__["MatInputModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                providers: [
                    _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_33__["httpInterceptorProviders"],
                    _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__["AuthGuardService"],
                    _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__["AuthGuardService"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_35__["JwtModule"],
                    _globals__WEBPACK_IMPORTED_MODULE_39__["Globals"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");




var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
    return AuthInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }]; }, null); })();
var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.loginUrl = this.globals.BASE_URL + '/api/auth/signin';
        this.signupUrl = this.globals.BASE_URL + '/api/auth/signup';
    }
    AuthService.prototype.attemptAuth = function (credentials) {
        return this.http.post(this.loginUrl, credentials, httpOptions);
    };
    AuthService.prototype.signUp = function (info) {
        return this.http.post(this.signupUrl, info, httpOptions);
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    return AuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/login-info.ts":
/*!************************************!*\
  !*** ./src/app/auth/login-info.ts ***!
  \************************************/
/*! exports provided: AuthLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function() { return AuthLoginInfo; });
var AuthLoginInfo = /** @class */ (function () {
    function AuthLoginInfo(username, password) {
        this.username = username;
        this.password = password;
    }
    return AuthLoginInfo;
}());



/***/ }),

/***/ "./src/app/auth/signup-info.ts":
/*!*************************************!*\
  !*** ./src/app/auth/signup-info.ts ***!
  \*************************************/
/*! exports provided: SignUpInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpInfo", function() { return SignUpInfo; });
var SignUpInfo = /** @class */ (function () {
    function SignUpInfo(name, username, email, password, admin) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ["user"];
        if (admin) {
            this.role.push("admin");
        }
    }
    return SignUpInfo;
}());



/***/ }),

/***/ "./src/app/auth/token-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/token-storage.service.ts ***!
  \***********************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority.authority);
            });
        }
        return this.roles;
    };
    TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
    TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });
    return TokenStorageService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/bar-chart/bar-chart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bar-chart/bar-chart.component.ts ***!
  \**************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm5/swimlane-ngx-charts.js");




function BarChartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-charts-bar-vertical", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx_r347.data.view)("scheme", ctx_r347.data.colorScheme)("results", ctx_r347.data.multi)("gradient", ctx_r347.data.gradient)("xAxis", ctx_r347.data.showXAxis)("yAxis", ctx_r347.data.showYAxis)("legend", ctx_r347.data.showLegend)("showXAxisLabel", ctx_r347.data.showXAxisLabel)("showYAxisLabel", ctx_r347.data.showYAxisLabel)("xAxisLabel", ctx_r347.data.xAxisLabel)("yAxisLabel", ctx_r347.data.yAxisLabel)("legend", ctx_r347.data.legend)("yScaleMax", ctx_r347.data.yScaleMax);
} }
var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
    }
    BarChartComponent.prototype.ngOnInit = function () { };
    BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
    BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [["style", "display: inline-block;", 4, "ngIf"], [2, "display", "inline-block"], [3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "yScaleMax"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BarChartComponent_div_0_Template, 2, 13, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["BarVerticalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"] });
    return BarChartComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-bar-chart",
                templateUrl: "./bar-chart.component.html",
                styleUrls: ["./bar-chart.component.css"],
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/boat-data.service.ts":
/*!**************************************!*\
  !*** ./src/app/boat-data.service.ts ***!
  \**************************************/
/*! exports provided: BoatDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoatDataService", function() { return BoatDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");





var BoatDataService = /** @class */ (function () {
    // tilt: MyCoordinates[] = [];
    function BoatDataService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.BASE_URL = this.globals.BASE_URL + "/api/dataGroup";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "fda66d02-9f2f-492e-9327-64bc68a7e509",
            }),
        };
    }
    BoatDataService.prototype.getDataGroupById = function (id) {
        return this.http.get(this.BASE_URL.concat("/response/").concat(id.toString()));
    };
    BoatDataService.prototype.getLastClosedDataGroup = function () {
        return this.http.get(this.BASE_URL + "/lastclosed");
    };
    BoatDataService.prototype.getActiveDataGroup = function () {
        return this.http.get(this.BASE_URL + "/active");
    };
    BoatDataService.prototype.getDate = function () {
        return this.http.get(this.BASE_URL.concat("/ids"));
    };
    BoatDataService.prototype.deleteAll = function () {
        this.http.delete(this.BASE_URL).subscribe(function (res) { });
    };
    BoatDataService.prototype.deleteById = function (id) {
        this.http
            .delete(this.BASE_URL + '/' + id.toString())
            .subscribe(function (res) { });
    };
    BoatDataService.ɵfac = function BoatDataService_Factory(t) { return new (t || BoatDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
    BoatDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BoatDataService, factory: BoatDataService.ɵfac, providedIn: "root" });
    return BoatDataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoatDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/boat-data/boat-data.component.ts":
/*!**************************************************!*\
  !*** ./src/app/boat-data/boat-data.component.ts ***!
  \**************************************************/
/*! exports provided: BoatDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoatDataComponent", function() { return BoatDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifications.service */ "./src/app/notifications.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graph/graph.component */ "./src/app/graph/graph.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _mileage_mileage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mileage/mileage.component */ "./src/app/mileage/mileage.component.ts");
/* harmony import */ var _compass_compass_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../compass/compass.component */ "./src/app/compass/compass.component.ts");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bar-chart/bar-chart.component */ "./src/app/bar-chart/bar-chart.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");












function BoatDataComponent_div_3_app_mileage_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-mileage", 17);
} if (rf & 2) {
    var ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("velocity", ctx_r339.velocity);
} }
function BoatDataComponent_div_3_app_compass_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-compass", 18);
} if (rf & 2) {
    var ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("compass", ctx_r340.compass);
} }
function BoatDataComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BoatDataComponent_div_3_app_mileage_1_Template, 1, 1, "app-mileage", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BoatDataComponent_div_3_app_compass_2_Template, 1, 1, "app-compass", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r331.velocity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r331.compass);
} }
function BoatDataComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "STATISTICS.stateOfCharge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-bar-chart", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoatDataComponent_div_4_Template_app_bar_chart_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r342); var ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r341.setShowDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "STATISTICS.temperature");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-bar-chart", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoatDataComponent_div_4_Template_app_bar_chart_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r342); var ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r343.setShowDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r332.soc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r332.temp);
} }
function BoatDataComponent_div_6_app_statistics_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-statistics", 26);
} if (rf & 2) {
    var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datas", ctx_r344.batteryTempSoCStatistics);
} }
function BoatDataComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-graph", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BoatDataComponent_div_6_app_statistics_2_Template, 1, 1, "app-statistics", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r333.temp_soc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r333.batteryTempSoCStatistics && ctx_r333.showStatistics);
} }
function BoatDataComponent_app_statistics_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-statistics", 26);
} if (rf & 2) {
    var ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datas", ctx_r334.batteryInOutStatistics);
} }
function BoatDataComponent_app_statistics_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-statistics", 26);
} if (rf & 2) {
    var ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datas", ctx_r335.motorStatistics);
} }
function BoatDataComponent_app_statistics_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-statistics", 26);
} if (rf & 2) {
    var ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datas", ctx_r336.tiltStatistics);
} }
function BoatDataComponent_app_statistics_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-statistics", 26);
} if (rf & 2) {
    var ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datas", ctx_r337.accelerationStatistics);
} }
function BoatDataComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var error_r345 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](error_r345.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](error_r345.message);
} }
var BoatDataComponent = /** @class */ (function () {
    function BoatDataComponent(notifService, globals) {
        var _this = this;
        this.notifService = notifService;
        this.globals = globals;
        this.isActiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.BASE_URL = this.globals.BASE_URL;
        this.EXPORT_URL = this.BASE_URL + "/api/dataGroup/export";
        this.show = false;
        this.showDetails = false;
        this.tempColor = ["#CDDC39"];
        this.socColor = ["#CDDC39"];
        this.notifService.dataCallback$.subscribe(function (data) {
            _this.dataCallbackFunction(data);
        });
        this.notifService.activityCallback$.subscribe(function (data) {
            _this.activityCallbackFunction(data);
        });
    }
    Object.defineProperty(BoatDataComponent.prototype, "dataGroup", {
        set: function (dataGroup) {
            if (dataGroup) {
                this.setGraphData(dataGroup);
                this.onResize(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    BoatDataComponent.prototype.dataCallbackFunction = function (data) {
        if (this.tilt) {
            this.addGraphData(data);
        }
        else {
            this.setGraphData(data);
        }
    };
    BoatDataComponent.prototype.activityCallbackFunction = function (data) {
        if (data) {
            this.dataGroup = null;
        }
        this.isActive = data;
        this.isActiveChange.emit(this.isActive);
    };
    BoatDataComponent.prototype.ngOnInit = function () { };
    BoatDataComponent.prototype.setActive = function () {
        this.isActive = !this.isActive;
        this.isActiveChange.emit(this.isActive);
    };
    //GRAPH
    BoatDataComponent.prototype.setShowDetails = function () {
        if (this.showDetails == false) {
            this.showDetails = true;
        }
        else {
            this.showDetails = false;
        }
    };
    BoatDataComponent.prototype.addGraphData = function (newData) {
        if (this.tilt) {
            if (newData.id) {
                this.setColor(newData.battery[2][0].value, newData.battery[3][0].value);
                this.tilt.multi[0].series.push(newData.tilt[0][0]);
                this.tilt.multi[1].series.push(newData.tilt[1][0]);
                this.tilt.multi[2].series.push(newData.tilt[2][0]);
                this.tilt.multi = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.tilt.multi);
                /*this.compass.multi[0].series.push(newData.compass[0][0]);
                this.compass.multi[1].series.push(newData.compass[1][0]);
                this.compass.multi[2].series.push(newData.compass[2][0]);*/
                this.compass =
                    newData.compass.length > 0
                        ? newData.compass[newData.compass.length - 1]
                        : { x: 0, y: 0, z: 0 };
                this.velocity =
                    newData.velocity.length > 0
                        ? newData.velocity[newData.velocity.length - 1]
                        : { x: 0, y: 0, z: 0 };
                //this.compass = [...this.compass];
                this.acceleration.multi[0].series.push(newData.acceleration[0][0]);
                this.acceleration.multi[1].series.push(newData.acceleration[1][0]);
                this.acceleration.multi[2].series.push(newData.acceleration[2][0]);
                this.acceleration.multi = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.acceleration.multi);
                this.battery.multi[0].series.push(newData.battery[0][0]);
                this.battery.multi[1].series.push(newData.battery[1][0]);
                this.battery.multi = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.battery.multi);
                this.motor.multi[0].series.push(newData.motor[0][0]);
                this.motor.multi[1].series.push(newData.motor[1][0]);
                this.motor.multi = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.motor.multi);
                this.temp_soc.multi[0].series.push(newData.battery[2][0]);
                this.temp_soc.multi[1].series.push(newData.battery[3][0]);
                this.temp_soc.multi = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.temp_soc.multi);
                this.soc.multi[0].value = newData.battery[2][0].value;
                this.soc.multi = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.soc.multi);
                this.temp.multi[0].value = newData.battery[3][0].value;
                this.temp.multi = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.temp.multi);
                // this.distance.multi[0].series.push(newData.distance[0]);
                // this.distance.multi = [...this.distance.multi];
            }
        }
        else {
            this.setGraphData(newData);
        }
    };
    BoatDataComponent.prototype.onResize = function (event) {
        if (this.tilt) {
            if (window.innerWidth >= 768) {
                this.tilt.view = [window.innerWidth / 2.7, 250];
                //this.compass.view = [window.innerWidth / 2.7, 250];
                this.acceleration.view = [window.innerWidth / 2.7, 250];
                this.battery.view = [window.innerWidth / 2.7, 250];
                this.motor.view = [window.innerWidth / 2.7, 250];
                this.temp_soc.view = [window.innerWidth / 2.7, 250];
                // this.distance.view = [window.innerWidth / 2.7, 250];
            }
            else {
                this.tilt.view = [window.innerWidth / 1.3, 200];
                //this.compass.view = [window.innerWidth / 2.7, 250];
                this.acceleration.view = [window.innerWidth / 1.3, 200];
                this.battery.view = [window.innerWidth / 1.3, 200];
                this.motor.view = [window.innerWidth / 1.3, 200];
                this.temp_soc.view = [window.innerWidth / 1.3, 200];
                // this.distance.view = [window.innerWidth / 2.7, 250];
            }
        }
    };
    BoatDataComponent.prototype.setGraphData = function (data) {
        this.accelerationStatistics = data.accelerationAnalysis;
        this.tiltStatistics = data.tiltAnalysis;
        // this.compassStatistics = data.compassAnalysis;
        this.accelerationStatistics = data.accelerationAnalysis;
        this.batteryInOutStatistics = [
            data.batteryAnalysis[0],
            data.batteryAnalysis[1],
        ];
        this.batteryTempSoCStatistics = [
            data.batteryAnalysis[2],
            data.batteryAnalysis[3],
        ];
        this.motorStatistics = data.motorAnalysis;
        if (data.battery[3].length > 0) {
            this.setColor(data.battery[3][data.battery[3].length - 1].value, data.battery[2][data.battery[2].length - 1].value);
        }
        this.tilt = {
            multi: [
                {
                    name: "x",
                    series: data.tilt[0],
                },
                {
                    name: "y",
                    series: data.tilt[1],
                },
                {
                    name: "z",
                    series: data.tilt[2],
                },
            ],
            view: [1000, 250],
            showXAxis: false,
            showYAxis: true,
            gradient: false,
            showLegend: true,
            showXAxisLabel: true,
            xAxisLabel: "Number",
            showYAxisLabel: true,
            //yAxisLabel: "data",
            timeline: true,
            colorScheme: {
                domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
            },
            autoScale: true,
            legendTitle: "STATISTICS.tilt",
            yScaleMax: 80,
            legend: false,
        };
        // this.distance = {
        //   multi: [
        //     {
        //       name: "s",
        //       series: data.distance[0],
        //     }
        //   ],
        //   view: [1000, 250],
        //   showXAxis: false,
        //   showYAxis: true,
        //   gradient: false,
        //   showLegend: true,
        //   showXAxisLabel: true,
        //   xAxisLabel: "Number",
        //   showYAxisLabel: true,
        //   yAxisLabel: "data",
        //   timeline: true,
        //   colorScheme: {
        //     domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
        //   },
        //   autoScale: true,
        //   legendTitle: "STATISTICS.distance",
        //   yScaleMax: 80,
        //   legend: false,
        // };
        /*this.compass = {
          multi: [
            {
              name: "STATISTICS.x",
              series: data.compass[0],
            },
    
            {
              name: "STATISTICS.y",
              series: data.compass[1],
            },
            {
              name: "STATISTICS.z",
              series: data.compass[2],
            },
          ],
          view: [1000, 250],
          showXAxis: false,
          showYAxis: true,
          gradient: false,
          showLegend: true,
          showXAxisLabel: true,
          xAxisLabel: "Number",
          showYAxisLabel: true,
          yAxisLabel: "data",
          timeline: true,
          colorScheme: {
            domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
          },
          autoScale: true,
          legendTitle: "STATISTICS.compass",
          yScaleMax: 80,
          legend: false,
        };
        */
        this.compass =
            data.compass.length > 0
                ? data.compass[data.compass.length - 1]
                : { x: 0, y: 0, z: 0 };
        this.velocity =
            data.velocity.length > 0
                ? data.velocity[data.velocity.length - 1]
                : { x: 0, y: 0, z: 0 };
        this.acceleration = {
            multi: [
                {
                    name: "x",
                    series: data.acceleration[0],
                },
                {
                    name: "y",
                    series: data.acceleration[1],
                },
                {
                    name: "z",
                    series: data.acceleration[2],
                },
            ],
            view: [1000, 250],
            showXAxis: false,
            showYAxis: true,
            gradient: false,
            showLegend: true,
            showXAxisLabel: true,
            xAxisLabel: "Number",
            showYAxisLabel: true,
            // yAxisLabel: "data",
            timeline: true,
            colorScheme: {
                domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
            },
            autoScale: true,
            legendTitle: "STATISTICS.acceleration",
            yScaleMax: 80,
            legend: false,
        };
        this.battery = {
            multi: [
                {
                    name: "in",
                    series: data.battery[0],
                },
                {
                    name: "out",
                    series: data.battery[1],
                },
            ],
            view: [1000, 250],
            showXAxis: false,
            showYAxis: true,
            gradient: false,
            showLegend: true,
            showXAxisLabel: true,
            xAxisLabel: "Number",
            showYAxisLabel: true,
            //yAxisLabel: "data",
            timeline: true,
            colorScheme: {
                domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
            },
            autoScale: true,
            legendTitle: "STATISTICS.battery",
            yScaleMax: 80,
            legend: false,
        };
        this.motor = {
            multi: [
                {
                    name: "RpM",
                    series: data.motor[0],
                },
                {
                    name: "T",
                    series: data.motor[1],
                },
            ],
            view: [1000, 250],
            showXAxis: false,
            showYAxis: true,
            gradient: false,
            showLegend: true,
            showXAxisLabel: true,
            xAxisLabel: "Number",
            showYAxisLabel: true,
            //yAxisLabel: "data",
            timeline: true,
            colorScheme: {
                domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
            },
            autoScale: true,
            legendTitle: "STATISTICS.motor",
            yScaleMax: 80,
            legend: false,
        };
        this.temp_soc = {
            multi: [
                {
                    name: "SoC",
                    series: data.battery[2],
                },
                {
                    name: "T",
                    series: data.battery[3],
                },
            ],
            view: [1000, 250],
            showXAxis: false,
            showYAxis: true,
            gradient: false,
            showLegend: true,
            showXAxisLabel: true,
            xAxisLabel: "Number",
            showYAxisLabel: true,
            //yAxisLabel: "data",
            timeline: true,
            colorScheme: {
                domain: ["#E91E63", "#CDDC39", "#3F51B5", "#AAAAAA"],
            },
            autoScale: true,
            legendTitle: "STATISTICS.battery",
            yScaleMax: 80,
            legend: false,
        };
        this.soc = {
            multi: [
                {
                    name: "SoC",
                    value: data.battery[2][0]
                        ? data.battery[2][data.battery[2].length - 1].value
                        : 0,
                },
            ],
            view: [200, 300],
            showXAxis: false,
            showYAxis: true,
            gradient: false,
            showLegend: true,
            showXAxisLabel: false,
            xAxisLabel: "Number",
            showYAxisLabel: true,
            yAxisLabel: "%",
            timeline: false,
            yScaleMax: 100,
            colorScheme: {
                domain: this.socColor,
            },
            legend: false,
            autoScale: true,
            legendTitle: "STATISTICS.battery",
        };
        this.temp = {
            multi: [
                {
                    name: "T",
                    value: data.battery[3][0]
                        ? data.battery[3][data.battery[3].length - 1].value
                        : 0,
                },
            ],
            view: [200, 300],
            showXAxis: false,
            showYAxis: true,
            gradient: false,
            showLegend: true,
            showXAxisLabel: false,
            xAxisLabel: "Number",
            showYAxisLabel: true,
            yAxisLabel: "°C",
            timeline: false,
            yScaleMax: 80,
            colorScheme: {
                domain: this.tempColor,
            },
            legend: false,
            autoScale: true,
            legendTitle: "STATISTICS.battery",
        };
        this.errors = data.errors;
        // }
    };
    BoatDataComponent.prototype.setColor = function (temp, soc) {
        if (temp < 60) {
            this.tempColor = ["#CDDC39"];
        }
        else {
            this.tempColor = ["#E91E63"];
        }
        if (soc > 20) {
            this.socColor = ["#CDDC39"];
        }
        else {
            this.socColor = ["#E91E63"];
        }
    };
    BoatDataComponent.ɵfac = function BoatDataComponent_Factory(t) { return new (t || BoatDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"])); };
    BoatDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BoatDataComponent, selectors: [["app-boat-data"]], inputs: { showStatistics: "showStatistics", isActive: "isActive", dataGroup: ["data", "dataGroup"] }, outputs: { tilt: "tilt", compass: "compass", velocity: "velocity", acceleration: "acceleration", battery: "battery", motor: "motor", soc: "soc", temp: "temp", distance: "distance", temp_soc: "temp_soc", errors: "errors", accelerationStatistics: "accelerationStatistics", tiltStatistics: "tiltStatistics", compassStatistics: "compassStatistics", batteryInOutStatistics: "batteryInOutStatistics", batteryTempSoCStatistics: "batteryTempSoCStatistics", motorStatistics: "motorStatistics", isActiveChange: "isActiveChange" }, decls: 26, vars: 12, consts: [[1, "justify-content-center", "d-flex", "pt-5"], [1, "col-12"], [1, "row", "d-flex", "flex-wrap"], ["class", "d-flex justify-content-start flex-wrap mb-5 col-md-6", 4, "ngIf"], ["class", "d-flex d-inline flex-row flex-wrap justify-content-center mb-5 col-md-6", "id", "firstrow", 4, "ngIf"], [1, "d-flex", "justify-content-between", "flex-wrap", 3, "resize"], ["class", "row col-md-6 pb-5 d-flex justify-content-center", 4, "ngIf"], [1, "row", "col-md-6", "mb-5", "d-flex", "justify-content-center"], ["id", "chart-parent", 1, "d-inline-flex", 3, "data"], [3, "datas", 4, "ngIf"], ["id", "errorTable", 1, "col-5"], ["translate", "", 1, "p-3"], [1, ""], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-start", "flex-wrap", "mb-5", "col-md-6"], [3, "velocity", 4, "ngIf"], [3, "compass", 4, "ngIf"], [3, "velocity"], [3, "compass"], ["id", "firstrow", 1, "d-flex", "d-inline", "flex-row", "flex-wrap", "justify-content-center", "mb-5", "col-md-6"], [1, "d-inline-flex"], [1, "column"], ["translate", "", 1, "text-center"], [1, "pr-3", 3, "data", "click"], [1, "pl-3", 3, "data", "click"], [1, "row", "col-md-6", "pb-5", "d-flex", "justify-content-center"], [3, "datas"], [1, "pl-3", "pb-2"], [1, "pr-3", "pl-3", "pb-2"]], template: function BoatDataComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BoatDataComponent_div_3_Template, 3, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BoatDataComponent_div_4_Template, 10, 2, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function BoatDataComponent_Template_div_resize_5_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BoatDataComponent_div_6_Template, 3, 2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-graph", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BoatDataComponent_app_statistics_9_Template, 1, 1, "app-statistics", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-graph", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BoatDataComponent_app_statistics_12_Template, 1, 1, "app-statistics", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-graph", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BoatDataComponent_app_statistics_15_Template, 1, 1, "app-statistics", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-graph", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, BoatDataComponent_app_statistics_18_Template, 1, 1, "app-statistics", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "STATISTICS.errors");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tbody", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, BoatDataComponent_tr_25_Template, 5, 2, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showStatistics);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showStatistics);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDetails || ctx.showStatistics);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.battery);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.batteryInOutStatistics && ctx.showStatistics);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.motor);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.motorStatistics && ctx.showStatistics);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.tilt);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tiltStatistics && ctx.showStatistics);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.acceleration);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.accelerationStatistics && ctx.showStatistics);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.errors);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _graph_graph_component__WEBPACK_IMPORTED_MODULE_5__["GraphComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _mileage_mileage_component__WEBPACK_IMPORTED_MODULE_7__["MileageComponent"], _compass_compass_component__WEBPACK_IMPORTED_MODULE_8__["CompassComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_9__["BarChartComponent"], _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_10__["StatisticsComponent"]], styles: ["div.graph[_ngcontent-%COMP%] {\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n}\r\ndiv.jumbotron[_ngcontent-%COMP%] {\r\n  max-height: 300px;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  font-family: \"KelsonSans-Light\";\r\n  background-color: #f3f4f4;\r\n}\r\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\ntbody[_ngcontent-%COMP%] {\r\n  height: 250px;\r\n\r\n  overflow-y: auto; \r\n  overflow-x: hidden; \r\n}\r\n#chart-parent[_ngcontent-%COMP%] { display: grid; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hdC1kYXRhL2JvYXQtZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsYUFBYTs7RUFFYixnQkFBZ0IsRUFBRSwrQkFBK0I7RUFDakQsa0JBQWtCLEVBQUUsK0JBQStCO0FBQ3JEO0FBQ0EsZ0JBQWdCLGFBQWEsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2JvYXQtZGF0YS9ib2F0LWRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5ncmFwaCB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5kaXYuanVtYm90cm9uIHtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG50YWJsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiS2Vsc29uU2Fucy1MaWdodFwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjQ7XHJcbn1cclxudGhlYWQsXHJcbnRib2R5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnRib2R5IHtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG5cclxuICBvdmVyZmxvdy15OiBhdXRvOyAvKiBUcmlnZ2VyIHZlcnRpY2FsIHNjcm9sbCAgICAqL1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogSGlkZSB0aGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxufVxyXG4jY2hhcnQtcGFyZW50IHsgZGlzcGxheTogZ3JpZDsgfVxyXG4iXX0= */"] });
    return BoatDataComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BoatDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-boat-data",
                templateUrl: "./boat-data.component.html",
                styleUrls: ["./boat-data.component.css"],
            }]
    }], function () { return [{ type: _notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] }]; }, { tilt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], compass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], velocity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], acceleration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], battery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], motor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], soc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], temp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], distance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], temp_soc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], errors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], accelerationStatistics: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], tiltStatistics: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], compassStatistics: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], batteryInOutStatistics: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], batteryTempSoCStatistics: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], motorStatistics: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], showStatistics: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isActiveChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dataGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ["data"]
        }] }); })();


/***/ }),

/***/ "./src/app/compass/compass.component.ts":
/*!**********************************************!*\
  !*** ./src/app/compass/compass.component.ts ***!
  \**********************************************/
/*! exports provided: CompassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompassComponent", function() { return CompassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");



var _c0 = ["circle"];
var CompassComponent = /** @class */ (function () {
    function CompassComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.name = 'Compass';
    }
    Object.defineProperty(CompassComponent.prototype, "compass", {
        set: function (compass) {
            this.setCompass(compass.x, compass.y);
        },
        enumerable: true,
        configurable: true
    });
    CompassComponent.prototype.setCompass = function (x, y) {
        this.angle = Math.atan2(y, x) * (180 / Math.PI);
        if (this.angle < 0) {
            this.angle = 360 + this.angle;
        }
        this.angle = Math.round(this.angle);
        this.styleRotate = this.sanitizer.bypassSecurityTrustStyle("transform: rotate(" + this.angle + "deg)");
    };
    CompassComponent.ɵfac = function CompassComponent_Factory(t) { return new (t || CompassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
    CompassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompassComponent, selectors: [["app-compass"]], viewQuery: function CompassComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.circle = _t.first);
        } }, inputs: { compass: "compass" }, decls: 53, vars: 4, consts: [[1, "d-inline-flex"], [1, "container-circle"], [1, "circle"], ["circle", ""], [1, "compass"], [1, "glass"], [1, "north"], [1, "east"], [1, "south"], [1, "west"], [1, "measure"], [1, "twenty-measure"], [1, "fourty-measure"], [1, "sixty-measure"], [1, "eighty-measure"], [1, "one-hundred-measure"], [1, "one-hundred-and-twenty-measure"], [1, "one-hundred-and-fourty-measure"], [1, "one-hundred-and-sixty-measure"], [1, "two-hundred-measure"], [1, "two-hundred-and-twenty-measure"], [1, "two-hundred-and-fourty-measure"], [1, "two-hundred-and-sixty-measure"], [1, "two-hundred-and-eighty-measure"], [1, "three-hundred-measure"], [1, "three-hundred-and-twenty-measure"], [1, "three-hundred-and-fourty-measure"], [1, "pointer"], [1, "arrow", "up"], [1, "center"], [1, "arrow", "down"], [1, "dot"], ["dot", ""]], template: function CompassComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "N");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "E");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "S");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "W");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "20");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "40");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "60");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "80");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "100");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "120");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "140");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "160");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "200");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "220");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "240");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "260");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "280");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "300");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "320");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "340");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 31, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.styleRotate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.styleRotate);
        } }, styles: ["@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:700');\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n[_nghost-%COMP%] {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  font: 16px/100% Arial, Tahoma, Verdana, sans-serif;\r\n  font-weight: bold;\r\n\r\n}\r\n[_nghost-%COMP%]   .debug[_ngcontent-%COMP%] {\r\n  color: #E91E63;\r\n  font-family: monospace;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate3d(-50%, -50%, 0);\r\n  z-index: 100;\r\n}\r\n[_nghost-%COMP%]   .container-circle[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n  position: absolute;\r\n  width: 200px;\r\n  height: 200px;\r\n  margin-left:250px;\r\n  margin-bottom: 250px;\r\n}\r\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  background-color: #CDDC39;\r\n  border-radius: 50%;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding-bottom: 25%;\r\n  transform: translate3d(-50%, -50%, 0);\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\r\n}\r\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 90%;\r\n  height: 90%;\r\n  background-color: #ecf0f1;\r\n  border-radius: 50%;\r\n  top: 5%;\r\n  left: 5%;\r\n  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n.glass[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  background: -webkit-repeating-linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 100px, transparent 100px, transparent 200px);\r\n  background: -webkit-repeating-linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 100px, transparent 100px, transparent 200px);\r\n  border-radius: 50%;\r\n  width: 200px;\r\n  height: 200px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  transform: rotate(230deg);\r\n}\r\n.cover[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  width: 240px;\r\n  height: 240px;\r\n  position: absolute;\r\n  top: -20px;\r\n  left: -20px;\r\n  z-index: 2;\r\n  overflow: hidden;\r\n  transition: all 0.5s linear;\r\n  transform-origin: bottom center;\r\n}\r\n.north[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 95px;\r\n}\r\n.south[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 95px;\r\n  transform: rotate(180deg);\r\n}\r\n.east[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 92px;\r\n  right: 13px;\r\n  transform: rotate(90deg);\r\n}\r\n.west[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 92px;\r\n  left: 16px;\r\n  transform: rotate(270deg);\r\n}\r\n.measure[_ngcontent-%COMP%] {\r\n  font-size: 9px;\r\n  list-style: none;\r\n  color: #000;\r\n}\r\n.measure[_ngcontent-%COMP%]   .twenty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(20deg);\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 70px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .fourty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(40deg);\r\n  position: absolute;\r\n  top: 30px;\r\n  right: 45px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .sixty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(60deg);\r\n  position: absolute;\r\n  top: 50px;\r\n  right: 25px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .eighty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(80deg);\r\n  position: absolute;\r\n  top: 75px;\r\n  right: 15px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .one-hundred-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(100deg);\r\n  position: absolute;\r\n  bottom: 75px;\r\n  right: 15px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .one-hundred-and-twenty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(120deg);\r\n  position: absolute;\r\n  bottom: 50px;\r\n  right: 25px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .one-hundred-and-fourty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(140deg);\r\n  position: absolute;\r\n  bottom: 30px;\r\n  right: 45px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .one-hundred-and-sixty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(160deg);\r\n  position: absolute;\r\n  bottom: 15px;\r\n  right: 70px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .two-hundred-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(200deg);\r\n  position: absolute;\r\n  bottom: 15px;\r\n  left: 70px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .two-hundred-and-twenty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(220deg);\r\n  position: absolute;\r\n  bottom: 30px;\r\n  left: 45px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .two-hundred-and-fourty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(240deg);\r\n  position: absolute;\r\n  bottom: 50px;\r\n  left: 25px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .two-hundred-and-sixty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(260deg);\r\n  position: absolute;\r\n  bottom: 75px;\r\n  left: 15px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .two-hundred-and-eighty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(280deg);\r\n  position: absolute;\r\n  top: 75px;\r\n  left: 15px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .three-hundred-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(300deg);\r\n  position: absolute;\r\n  top: 50px;\r\n  left: 25px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .three-hundred-and-twenty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(320deg);\r\n  position: absolute;\r\n  top: 30px;\r\n  left: 45px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .three-hundred-and-fourty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(340deg);\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 70px;\r\n}\r\n.pointer[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  position: relative;\r\n  -webkit-animation: animated-pointer 1s ease-in-out infinite;\r\n  animation: animated-pointer 1s ease-in-out infinite;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n.pointer[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\r\n  background: #444444;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);\r\n  width: 30px;\r\n  height: 30px;\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 85px;\r\n}\r\n.arrow[_ngcontent-%COMP%] {\r\n  border: 70px solid #555555;\r\n  margin: 0 auto;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n.arrow.up[_ngcontent-%COMP%] {\r\n  border-color: #E91E63;\r\n  border-top: 0px solid transparent;\r\n  border-left: 15px solid transparent;\r\n  border-right: 15px solid transparent;\r\n}\r\n.arrow.down[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  border-left: 15px solid transparent;\r\n  border-right: 15px solid transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFzcy9jb21wYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQXVFO0FBQ3ZFO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGtEQUFrRDtFQUNsRCxpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHFDQUFxQztFQUNyQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsNkNBQTZDO0FBQy9DO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNklBQTZJO0VBSTdJLDZJQUE2STtFQUM3SSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBS1YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0VBS2hCLDJCQUEyQjtFQUszQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFLVix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUtYLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBS1YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBS0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7RUFLRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFDQTtFQUtFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjtBQUNBO0VBS0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7RUFLRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUtFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBS0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFLRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUtFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBO0VBS0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFLRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUtFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBO0VBS0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFLRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUtFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBS0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDJEQUEyRDtFQUkzRCxtREFBbUQ7RUFLbkQsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBRWxCLHNDQUFzQztFQUN0QyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMsbUNBQW1DO0VBQ25DLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9jb21wYXNzL2NvbXBhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Sm9zZWZpbitTYW5zOjcwMCcpO1xyXG5ib2R5LCBodG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuOmhvc3QoKSB7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgZm9udDogMTZweC8xMDAlIEFyaWFsLCBUYWhvbWEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbjpob3N0KCkgLmRlYnVnIHtcclxuICBjb2xvcjogI0U5MUU2MztcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuOmhvc3QoKSAuY29udGFpbmVyLWNpcmNsZSB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjI1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1MHB4O1xyXG59XHJcbjpob3N0KCkgLmNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0REQzM5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbjpob3N0KCkgLmNpcmNsZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdG9wOiA1JTtcclxuICBsZWZ0OiA1JTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5nbGFzcyB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDEwMHB4LCB0cmFuc3BhcmVudCAxMDBweCwgdHJhbnNwYXJlbnQgMjAwcHgpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxMDBweCwgdHJhbnNwYXJlbnQgMTAwcHgsIHRyYW5zcGFyZW50IDIwMHB4KTtcclxuICBiYWNrZ3JvdW5kOiAtby1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDEwMHB4LCB0cmFuc3BhcmVudCAxMDBweCwgdHJhbnNwYXJlbnQgMjAwcHgpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDEwMHB4LCB0cmFuc3BhcmVudCAxMDBweCwgdHJhbnNwYXJlbnQgMjAwcHgpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxMDBweCwgdHJhbnNwYXJlbnQgMTAwcHgsIHRyYW5zcGFyZW50IDIwMHB4KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMzBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjMwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMzBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMzBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDIzMGRlZyk7XHJcbn1cclxuLmNvdmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgbGVmdDogLTIwcHg7XHJcbiAgei1pbmRleDogMjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xyXG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XHJcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcclxufVxyXG4ubm9ydGgge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogOTVweDtcclxufVxyXG4uc291dGgge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbGVmdDogOTVweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4uZWFzdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOTJweDtcclxuICByaWdodDogMTNweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuLndlc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDkycHg7XHJcbiAgbGVmdDogMTZweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxufVxyXG4ubWVhc3VyZSB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4ubWVhc3VyZSAudHdlbnR5LW1lYXN1cmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHJpZ2h0OiA3MHB4O1xyXG59XHJcbi5tZWFzdXJlIC5mb3VydHktbWVhc3VyZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwcHg7XHJcbiAgcmlnaHQ6IDQ1cHg7XHJcbn1cclxuLm1lYXN1cmUgLnNpeHR5LW1lYXN1cmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG59XHJcbi5tZWFzdXJlIC5laWdodHktbWVhc3VyZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg4MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoODBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoODBkZWcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDc1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuLm1lYXN1cmUgLm9uZS1odW5kcmVkLW1lYXN1cmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTAwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEwMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTAwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTAwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDBkZWcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDc1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuLm1lYXN1cmUgLm9uZS1odW5kcmVkLWFuZC10d2VudHktbWVhc3VyZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogMjVweDtcclxufVxyXG4ubWVhc3VyZSAub25lLWh1bmRyZWQtYW5kLWZvdXJ0eS1tZWFzdXJlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNDBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE0MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE0MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTQwZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIHJpZ2h0OiA0NXB4O1xyXG59XHJcbi5tZWFzdXJlIC5vbmUtaHVuZHJlZC1hbmQtc2l4dHktbWVhc3VyZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTYwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxNjBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNjBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE2MGRlZyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTVweDtcclxuICByaWdodDogNzBweDtcclxufVxyXG4ubWVhc3VyZSAudHdvLWh1bmRyZWQtbWVhc3VyZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjAwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDIwMGRlZyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTVweDtcclxuICBsZWZ0OiA3MHB4O1xyXG59XHJcbi5tZWFzdXJlIC50d28taHVuZHJlZC1hbmQtdHdlbnR5LW1lYXN1cmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjIwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIyMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjIwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjIwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjBkZWcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDMwcHg7XHJcbiAgbGVmdDogNDVweDtcclxufVxyXG4ubWVhc3VyZSAudHdvLWh1bmRyZWQtYW5kLWZvdXJ0eS1tZWFzdXJlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIGxlZnQ6IDI1cHg7XHJcbn1cclxuLm1lYXN1cmUgLnR3by1odW5kcmVkLWFuZC1zaXh0eS1tZWFzdXJlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI2MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNjBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI2MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI2MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjYwZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA3NXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbn1cclxuLm1lYXN1cmUgLnR3by1odW5kcmVkLWFuZC1laWdodHktbWVhc3VyZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyODBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyODBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyODBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI4MGRlZyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG59XHJcbi5tZWFzdXJlIC50aHJlZS1odW5kcmVkLW1lYXN1cmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwcHg7XHJcbiAgbGVmdDogMjVweDtcclxufVxyXG4ubWVhc3VyZSAudGhyZWUtaHVuZHJlZC1hbmQtdHdlbnR5LW1lYXN1cmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMyMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjBkZWcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwcHg7XHJcbiAgbGVmdDogNDVweDtcclxufVxyXG4ubWVhc3VyZSAudGhyZWUtaHVuZHJlZC1hbmQtZm91cnR5LW1lYXN1cmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzQwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM0MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzQwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzQwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNDBkZWcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogNzBweDtcclxufVxyXG4ucG9pbnRlciB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGVkLXBvaW50ZXIgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgLW1vei1hbmltYXRpb246IGFuaW1hdGVkLXBvaW50ZXIgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgLW1zLWFuaW1hdGlvbjogYW5pbWF0ZWQtcG9pbnRlciAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAtby1hbmltYXRpb246IGFuaW1hdGVkLXBvaW50ZXIgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlZC1wb2ludGVyIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnBvaW50ZXIgLmNlbnRlciB7XHJcbiAgYmFja2dyb3VuZDogIzQ0NDQ0NDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiA4NXB4O1xyXG59XHJcbi5hcnJvdyB7XHJcbiAgYm9yZGVyOiA3MHB4IHNvbGlkICM1NTU1NTU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcbi5hcnJvdy51cCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRTkxRTYzO1xyXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmFycm93LmRvd24ge1xyXG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"] });
    return CompassComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-compass',
                templateUrl: './compass.component.html',
                styleUrls: ['./compass.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { circle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['circle']
        }], compass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['compass']
        }] }); })();


/***/ }),

/***/ "./src/app/confirm/confirm.component.ts":
/*!**********************************************!*\
  !*** ./src/app/confirm/confirm.component.ts ***!
  \**********************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");




var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent() {
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) { return new (t || ConfirmComponent)(); };
    ConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmComponent, selectors: [["app-confirm"]], decls: 10, vars: 1, consts: [["translate", "", "mat-dialog-title", ""], [1, "mat-typography"], ["translate", ""], ["align", "end"], ["translate", "", "mat-button", "", "mat-dialog-close", ""], ["translate", "", "mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function ConfirmComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "STATISTICS.deleteData");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "STATISTICS.confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "STATISTICS.cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "STATISTICS.delete");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuY3NzIn0= */"] });
    return ConfirmComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm',
                templateUrl: './confirm.component.html',
                styleUrls: ['./confirm.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/cover/cover.component.ts":
/*!******************************************!*\
  !*** ./src/app/cover/cover.component.ts ***!
  \******************************************/
/*! exports provided: CoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverComponent", function() { return CoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/__ivy_ngcc__/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_solar_forecast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/solar-forecast.service */ "./src/app/shared/solar-forecast.service.ts");
/* harmony import */ var _shared_session_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/session-storage.service */ "./src/app/shared/session-storage.service.ts");










var _c0 = function (a0) { return { watts: a0 }; };
var CoverComponent = /** @class */ (function () {
    function CoverComponent(scrollService, translate, solarApiService, sessionStorage) {
        this.scrollService = scrollService;
        this.translate = translate;
        this.solarApiService = solarApiService;
        this.sessionStorage = sessionStorage;
    }
    CoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setWatts();
        this.sub = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].interval(6000000)
            .subscribe(function (val) {
            _this.setWatts();
        });
    };
    CoverComponent.prototype.setWatts = function () {
        var _this = this;
        var storageData = this.sessionStorage.getItem('solarpower');
        if (storageData != null) {
            this.watts = this.getWattsFromJsonByDate(storageData, this.getCurrentDateAndHour());
        }
        else {
            this.solarApiService.getCurrentSolarData()
                .subscribe(function (data) {
                _this.watts = _this.getWattsFromJsonByDate(data, _this.getCurrentDateAndHour());
                _this.sessionStorage.setItem('solarpower', data);
            });
        }
    };
    CoverComponent.prototype.getCurrentDateAndHour = function () {
        var date = new Date();
        var month = 1 + date.getMonth();
        // formatum: dátum + óra, "2020-04-14 05"
        return date.getFullYear() + '-' +
            this.addZero(month) + '-' +
            this.addZero(date.getDate()) + ' ' +
            this.addZero(date.getHours());
    };
    CoverComponent.prototype.addZero = function (i) {
        if (i < 10) {
            return '0' + i;
        }
        return i;
    };
    CoverComponent.prototype.getWattsFromJsonByDate = function (data, currentDateAndHour) {
        var e_1, _a;
        // console.log(data);
        // console.log(currentDateAndHour);
        var rawData = data;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.entries(rawData.result)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_c.value, 2), key = _d[0], value = _d[1];
                // console.log(`${key}: ${value}`);
                if (key.substring(0, 13) === currentDateAndHour) {
                    return value;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return 0;
    };
    CoverComponent.ɵfac = function CoverComponent_Factory(t) { return new (t || CoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_5__["ScrollToService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_solar_forecast_service__WEBPACK_IMPORTED_MODULE_7__["SolarForecastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_session_storage_service__WEBPACK_IMPORTED_MODULE_8__["SessionStorageService"])); };
    CoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CoverComponent, selectors: [["app-cover"]], decls: 19, vars: 7, consts: [[1, "cover"], [1, "container", "col-lg-11", "col-md-11", "col-12", "pt-5"], [1, "row", "pt-5", "pb-5", "justify-content-center"], [1, "col-12", "order-first", "order-1", "order-lg-0", "order-md-0", "order-xl-0"], [1, "row", "justify-content-end", "align-items-center", "mr-4"], [1, "col-lg-1", "col-md-2", "col-3"], [1, "icon", "bigger", 2, "background", "url(https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/day.png) no-repeat", "background", "none, url(https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/day.svg) no-repeat", "background-size", "contain"], [1, "col-lg-2", "col-md-4", "col-6"], ["translate", "", 3, "translateParams"], [1, "col-12", "col-lg-10", "col-md-12"], [1, "row", "title"], [1, "jumbotron", "col-lg-7", "col-md-10", "col-11", "pt-0", "mb-md-5"], [1, "title", "h0", "mb-md-5"], [1, "d-none", "d-lg-block"], ["href", "", "target", "", 1, "btn", "white", 3, "scrollTo"], ["translate", ""]], template: function CoverComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "COVER.solarPower");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h1", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "BME solar boat team");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "ABOUT_US.about_us");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flyIn3", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.watts));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flyIn1", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flyIn2", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollTo", "#aboutus");
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_5__["ScrollToDirective"]], styles: ["div.cover[_ngcontent-%COMP%]{\r\n    background-image: linear-gradient(to bottom, rgba(27,38,47,0) 80%, rgba(27,38,47,1)), url(\"/assets/mainpage/laptop-bg.png\");\r\n    background-color: #283A43;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    height: 100%;\r\n    margin: 0px;\r\n\r\n}\r\n@media only screen and (max-width: 500px) {\r\n    div.cover[_ngcontent-%COMP%]{\r\n        background-image: linear-gradient(to bottom, rgba(27,38,47,0) 80%, rgba(27,38,47,1)), url(\"/assets/mainpage/mobile-bg-empty.png\");\r\n        background-color: #283A43;\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        background-attachment: local;\r\n        height: auto;\r\n        width: 100%;\r\n        ovetflow-x: hidden;\r\n        margin: 0px;\r\n    }\r\n    .container[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{\r\n        padding-top: 0px !important;\r\n        padding-bottom: 0px !important;\r\n    }\r\n    .jumbotron[_ngcontent-%COMP%]{\r\n        padding-bottom: 1rem !important;\r\n    }\r\n    p[_ngcontent-%COMP%] {\r\n        margin-left:1rem;\r\n    }\r\n}\r\nh1.h0.title[_ngcontent-%COMP%]{\r\n    font-family: 'KelsonSans-Bold';\r\n    letter-spacing: 0.3em;\r\n    text-transform: uppercase;\r\n    font-size: 4rem;\r\n    margin: 0;\r\n    color: white;\r\n    line-height: 130%;\r\n    text-shadow: 2px 2px 5px slategrey;\r\n    padding-bottom: 3%;\r\n}\r\n.jumbotron[_ngcontent-%COMP%] {\r\n     background: none;\r\n     margin: 0;\r\n }\r\n.row.title[_ngcontent-%COMP%] {\r\n    padding-top: 5%;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    font-family: 'Helvetica';\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    color: white;\r\n    text-shadow: 2px 2px 5px lightslategrey;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 12em;\r\n    height: 10em;\r\n    font-size: 1em; \r\n    margin:0;\r\n    padding:0;\r\n}\r\n.sun[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 2.5em;\r\n    height: 2.5em;\r\n    margin: -1.25em;\r\n    background: none;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 0.375em #fff;\r\n    -webkit-animation: spin 12s infinite linear;\r\n            animation: spin 12s infinite linear;\r\n}\r\n.rays[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -2em;\r\n    left: 50%;\r\n    display: block;\r\n    width: 0.375em;\r\n    height: 1.125em;\r\n    margin-left: -0.1875em;\r\n    background: #fff;\r\n    border-radius: 0.25em;\r\n    box-shadow: 0 5.375em #fff;\r\n}\r\n.rays[_ngcontent-%COMP%]:before, .rays[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0em;\r\n    left: 0em;\r\n    display: block;\r\n    width: 0.375em;\r\n    height: 1.125em;\r\n    transform: rotate(60deg);\r\n    transform-origin: 50% 3.25em;\r\n    background: #fff;\r\n    border-radius: 0.25em;\r\n    box-shadow: 0 5.375em #fff;\r\n}\r\n.rays[_ngcontent-%COMP%]:before {\r\n    transform: rotate(120deg);\r\n}\r\n@-webkit-keyframes spin {\r\n    100% { transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n    100% { transform: rotate(360deg); }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292ZXIvY292ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJIQUEySDtJQUMzSCx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7O0FBRWY7QUFDQTtJQUNJO1FBQ0ksaUlBQWlJO1FBQ2pJLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLCtCQUErQjtJQUNuQztJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixTQUFTO0lBQ1QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCO0FBQ0E7S0FDSyxnQkFBZ0I7S0FDaEIsU0FBUztDQUNiO0FBQ0Q7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osdUNBQXVDO0FBQzNDO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYyxFQUFFLDJCQUEyQjtJQUMzQyxRQUFRO0lBQ1IsU0FBUztBQUNiO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxPQUFPLHlCQUF5QixFQUFFO0FBQ3RDO0FBRkE7SUFDSSxPQUFPLHlCQUF5QixFQUFFO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvY292ZXIvY292ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb3ZlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjcsMzgsNDcsMCkgODAlLCByZ2JhKDI3LDM4LDQ3LDEpKSwgdXJsKFwiL2Fzc2V0cy9tYWlucGFnZS9sYXB0b3AtYmcucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4M0E0MztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBkaXYuY292ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNywzOCw0NywwKSA4MCUsIHJnYmEoMjcsMzgsNDcsMSkpLCB1cmwoXCIvYXNzZXRzL21haW5wYWdlL21vYmlsZS1iZy1lbXB0eS5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4M0E0MztcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBsb2NhbDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZldGZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciwgLnJvd3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmp1bWJvdHJvbntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MXJlbTtcclxuICAgIH1cclxufVxyXG5oMS5oMC50aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2Vsc29uU2Fucy1Cb2xkJztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMTMwJTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBzbGF0ZWdyZXk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbn1cclxuLmp1bWJvdHJvbiB7XHJcbiAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICBtYXJnaW46IDA7XHJcbiB9XHJcbi5yb3cudGl0bGUge1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSc7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGxpZ2h0c2xhdGVncmV5O1xyXG59XHJcblxyXG4vKiBhbmltYXRlZCBzdW4gaWNvbiovXHJcbi5pY29uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgICBoZWlnaHQ6IDEwZW07XHJcbiAgICBmb250LXNpemU6IDFlbTsgLyogY29udHJvbCBpY29uIHNpemUgaGVyZSAqL1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbn1cclxuXHJcbi5zdW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMi41ZW07XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgbWFyZ2luOiAtMS4yNWVtO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMzc1ZW0gI2ZmZjtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAxMnMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbi5yYXlzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTJlbTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDAuMzc1ZW07XHJcbiAgICBoZWlnaHQ6IDEuMTI1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuMTg3NWVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgNS4zNzVlbSAjZmZmO1xyXG59XHJcbi5yYXlzOmJlZm9yZSxcclxuLnJheXM6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBlbTtcclxuICAgIGxlZnQ6IDBlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDAuMzc1ZW07XHJcbiAgICBoZWlnaHQ6IDEuMTI1ZW07XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMy4yNWVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgNS4zNzVlbSAjZmZmO1xyXG59XHJcbi5yYXlzOmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG59XHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('flyIn1', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(30px)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms 100ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0)', opacity: 1 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('flyIn2', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(30px)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms 300ms ease-in')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('flyIn3', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(-30px)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms 600ms ease-in')
                    ])
                ])
            ] } });
    return CoverComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-cover',
                templateUrl: './cover.component.html',
                styleUrls: ['./cover.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('flyIn1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(30px)', opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms 100ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0)', opacity: 1 }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('flyIn2', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(30px)', opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms 300ms ease-in')
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('flyIn3', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateX(-30px)', opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms 600ms ease-in')
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_5__["ScrollToService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _shared_solar_forecast_service__WEBPACK_IMPORTED_MODULE_7__["SolarForecastService"] }, { type: _shared_session_storage_service__WEBPACK_IMPORTED_MODULE_8__["SessionStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data-visualization/data-visualization.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/data-visualization/data-visualization.component.ts ***!
  \********************************************************************/
/*! exports provided: DataVisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVisualizationComponent", function() { return DataVisualizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
/* harmony import */ var _boat_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boat-data.service */ "./src/app/boat-data.service.ts");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notifications.service */ "./src/app/notifications.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");
/* harmony import */ var _boat_data_boat_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../boat-data/boat-data.component */ "./src/app/boat-data/boat-data.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _waves_waves_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../waves/waves.component */ "./src/app/waves/waves.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
















function DataVisualizationComponent_app_waves_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-waves", 13);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", "A haj\u00F3 jelenleg nem \u00FCzemel");
} }
function DataVisualizationComponent_app_waves_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-waves", 13);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", "Nincsenek r\u00F6gz\u00EDtett adatok");
} }
function DataVisualizationComponent_div_15_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r280 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r280);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r280.value, " ");
} }
function DataVisualizationComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r282 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "STATISTICS.date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DataVisualizationComponent_div_15_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r282); var ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r281.selectedDate = $event; })("change", function DataVisualizationComponent_div_15_Template_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r282); var ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r283.dateChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DataVisualizationComponent_div_15_option_5_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r275.selectedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r275.dates);
} }
function DataVisualizationComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    var _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataVisualizationComponent_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r285); var ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r284.setShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "STATISTICS.options");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DataVisualizationComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "STATISTICS.downloadAll");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "STATISTICS.downloadOne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataVisualizationComponent_div_17_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r287); var ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r286.openDeleteOneConfirmDialog(ctx_r286.selectedDate.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "STATISTICS.deleteOne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataVisualizationComponent_div_17_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r287); var ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r288.openDeleteAllConfirmDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "STATISTICS.deleteAll");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r277.EXPORT_URL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r277.EXPORT_URL + "/" + ctx_r277.selectedDate.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DataVisualizationComponent_app_boat_data_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-boat-data", 25);
} if (rf & 2) {
    var ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r278.data)("showStatistics", true);
} }
var DataVisualizationComponent = /** @class */ (function () {
    // private boatIsActive: Boolean;
    function DataVisualizationComponent(dataService, 
    //   private notifications: NotificationsRxComponent
    notifications, dialog, globals) {
        this.dataService = dataService;
        this.notifications = notifications;
        this.dialog = dialog;
        this.globals = globals;
        this.dates = [];
        this.BASE_URL = this.globals.BASE_URL;
        this.EXPORT_URL = this.BASE_URL + "/api/dataGroup/export";
        this.show = false;
        this.showDetails = false;
    }
    Object.defineProperty(DataVisualizationComponent.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (isActive) {
            this._isActive = isActive;
            if (isActive) {
                this.getActiveDataGroup();
            }
        },
        enumerable: true,
        configurable: true
    });
    DataVisualizationComponent.prototype.ngOnInit = function () {
        this.getDates();
        this.isActive = true;
        //this.getActiveDataGroup();
        this.connect();
    };
    DataVisualizationComponent.prototype.ngOnDestroy = function () {
        this.disconnect();
    };
    DataVisualizationComponent.prototype.getDates = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.dataService.getDate().subscribe(function (res) {
                    _this.dates = res;
                    _this.selectedDate = res[res.length - 1];
                }, function (err) {
                    alert("get error");
                });
                return [2 /*return*/];
            });
        });
    };
    DataVisualizationComponent.prototype.change = function (e) {
        this.isActive = e;
    };
    DataVisualizationComponent.prototype.connect = function () {
        this.notifications.connect();
        this.notifications.startListening();
    };
    DataVisualizationComponent.prototype.disconnect = function () {
        //if(this.notifications.isConnected()){
        this.notifications.stopListening();
        this.notifications.disconnect();
        // }
    };
    DataVisualizationComponent.prototype.getLastClosedDataGroup = function () {
        var _this = this;
        this.dataService.getLastClosedDataGroup().subscribe(function (res) {
            _this.data = res;
        });
    };
    DataVisualizationComponent.prototype.getActiveDataGroup = function () {
        var _this = this;
        this.dataService.getActiveDataGroup().subscribe(function (res) {
            if (res == null) {
                _this.data = null;
                _this.isActive = false;
            }
            else {
                // this.isActive = true;
            }
            _this.data = res;
        });
    };
    DataVisualizationComponent.prototype.dateChanged = function () {
        var _this = this;
        this.dataService
            .getDataGroupById(this.selectedDate.name)
            .subscribe(function (res) {
            _this.data = res;
        });
    };
    DataVisualizationComponent.prototype.deleteAll = function () {
        this.dataService.deleteAll();
        this.getDates();
    };
    DataVisualizationComponent.prototype.deleteById = function (id) {
        this.dataService.deleteById(id);
        this.getDates();
        this.getLastClosedDataGroup();
    };
    DataVisualizationComponent.prototype.openDeleteOneConfirmDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteById(id);
            }
        });
    };
    DataVisualizationComponent.prototype.openDeleteAllConfirmDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteAll();
            }
        });
    };
    DataVisualizationComponent.prototype.setShow = function () {
        if (this.show == false) {
            this.show = true;
        }
        else {
            this.show = false;
        }
    };
    DataVisualizationComponent.prototype.onTabChanged = function () {
        if (this.selectedTabIndex === 0) {
            this.getActiveDataGroup();
            this.connect();
        }
        else {
            this.disconnect();
            this.getDates();
            this.getLastClosedDataGroup();
        }
    };
    DataVisualizationComponent.ɵfac = function DataVisualizationComponent_Factory(t) { return new (t || DataVisualizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_boat_data_service__WEBPACK_IMPORTED_MODULE_3__["BoatDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_globals__WEBPACK_IMPORTED_MODULE_6__["Globals"])); };
    DataVisualizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataVisualizationComponent, selectors: [["app-data-visualization"]], inputs: { selectedDate: "selectedDate", isActive: "isActive", selectedTabIndex: "selectedTabIndex" }, outputs: { dates: "dates", isActive: "isActive" }, decls: 20, vars: 17, consts: [[1, "data-vis"], [1, "container", "col-12", "col-sm-12", "col-lg-10", "col-md-11", "align-items-center"], [1, "jumbotron", "col-12"], ["translate", "", 1, "title", "pb-4"], [1, "p-3"], ["mat-align-tabs", "start", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], [1, "pt-3", 3, "label"], [3, "hidden", "data", "showStatistics", "isActive", "isActiveChange"], [3, "text", 4, "ngIf"], ["class", "input-group mt-5 mb-3", 4, "ngIf"], ["class", "btn mb-3", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "d-flex mb-3 flex-wrap", 4, "ngIf"], [3, "data", "showStatistics", 4, "ngIf"], [3, "text"], [1, "input-group", "mt-5", "mb-3"], [1, "input-group-prepend"], ["for", "inputGroupSelect01", "translate", "", 1, "input-group-text"], [3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["href", "javascript:void(0)", 1, "btn", "mb-3", 3, "click"], ["translate", ""], [1, "d-flex", "mb-3", "flex-wrap"], [1, "btn", "m-3", 3, "href"], ["href", "javascript:void(0)", 1, "btn", "m-3", 3, "click"], [3, "data", "showStatistics"]], template: function DataVisualizationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "STATISTICS.datas");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab-group", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedIndexChange", function DataVisualizationComponent_Template_mat_tab_group_selectedIndexChange_7_listener($event) { return ctx.selectedTabIndex = $event; })("selectedTabChange", function DataVisualizationComponent_Template_mat_tab_group_selectedTabChange_7_listener() { return ctx.onTabChanged(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-tab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-boat-data", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("isActiveChange", function DataVisualizationComponent_Template_app_boat_data_isActiveChange_10_listener($event) { return ctx.isActive = $event; })("isActiveChange", function DataVisualizationComponent_Template_app_boat_data_isActiveChange_10_listener($event) { return ctx.change($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DataVisualizationComponent_app_waves_11_Template, 1, 1, "app-waves", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-tab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DataVisualizationComponent_app_waves_14_Template, 1, 1, "app-waves", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DataVisualizationComponent_div_15_Template, 6, 2, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DataVisualizationComponent_a_16_Template, 3, 0, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DataVisualizationComponent_div_17_Template, 13, 2, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DataVisualizationComponent_app_boat_data_18_Template, 1, 2, "app-boat-data", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-footer");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedIndex", ctx.selectedTabIndex);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 13, "STATISTICS.realTime"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isActive)("data", ctx.data)("showStatistics", false)("isActive", ctx.isActive);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isActive);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 15, "STATISTICS.previousStatistics"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dates.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dates.length != 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dates.length != 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dates.length != 0);
        } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _boat_data_boat_data_component__WEBPACK_IMPORTED_MODULE_10__["BoatDataComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _waves_waves_component__WEBPACK_IMPORTED_MODULE_13__["WavesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["div.data-vis[_ngcontent-%COMP%] {\r\n    background-color: #f3f4f4;\r\n  }\r\n  .jumbotron[_ngcontent-%COMP%] {\r\n    background: none;\r\n    margin-bottom: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS12aXN1YWxpemF0aW9uL2RhdGEtdmlzdWFsaXphdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGF0YS12aXN1YWxpemF0aW9uL2RhdGEtdmlzdWFsaXphdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmRhdGEtdmlzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjQ7XHJcbiAgfVxyXG4gIC5qdW1ib3Ryb24ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfSJdfQ== */"] });
    return DataVisualizationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataVisualizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-data-visualization",
                templateUrl: "./data-visualization.component.html",
                styleUrls: ["./data-visualization.component.css"],
            }]
    }], function () { return [{ type: _boat_data_service__WEBPACK_IMPORTED_MODULE_3__["BoatDataService"] }, { type: _notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_6__["Globals"] }]; }, { dates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], selectedDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ["isActive"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["isActive"]
        }], selectedTabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");





// import AOS from 'aos';
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        var elements = document.querySelectorAll('.animate-me');
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('animated');
                }
                else {
                    // entry.target.classList.remove('animated');
                }
            });
        });
        elements.forEach(function (el) {
            observer.observe(el);
        });
        // AOS.init();
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 27, vars: 0, consts: [["id", "footer"], [1, "contact", "text-center", "pt-5"], ["translate", "", 1, "title", "pt-5", "mb-5"], [1, "col-12", "col-md-12", "animate-me", "fade-up"], ["title", "mail", "href", "mailto:info@solarboatteam.hu", 1, "col-3", "col-sm-2", "col-md-1", "mr-2"], ["aria-hidden", "false"], ["title", "phone", "placement", "top", "ngbTooltip", "+36-30-73-16-221", "triggers", "click:blur", "tooltipClass", "my-tooltip", 1, "col-3", "col-sm-2", "col-md-1", "mr-2"], ["href", "https://www.facebook.com/BMEsolar/", "target", "blank", 1, "col-3", "col-sm-2", "col-md-1", "mr-2"], ["title", "facebook", 1, "fab", "fa-facebook-square", "fa-2x"], ["href", "https://www.instagram.com/bme_solar_team/?hl=hu", "target", "blank", 1, "col-3", "col-sm-2", "col-md-1", "mr-2"], ["title", "instagram", 1, "fab", "fa-instagram", "fa-2x"], ["href", "https://hu.linkedin.com/company/solar-boat-team?trk=public_profile_experience-item_result-card_image-click", "target", "blank", 1, "col-3", "col-sm-2", "col-md-1", "mr-2"], ["title", "linkedin", 1, "fa", "fa-linkedin-square", "fa-2x"], [1, "text-center", "d-flex", "mb-1", "justify-content-center"], [1, "col-12", "col-md-12", "links"], ["href", "https://www.bme.hu/", "target", "blank"], ["src", "../../assets/footer-logo/bme-white.png", "alt", "BME", "title", "BME", 1, "col-4", "col-sm-3", "col-md-2", "animate-me", "fade-up"], ["href", "https://solarboatteam.hu", "target", "blank", 1, "boat"], ["src", "../../assets/footer-logo/solarboat-white.png", "alt", "Solar Boat", "title", "Solar Boat", 1, "col-3", "col-sm-2", "col-md-1", "animate-me", "fade-up"], ["href", "https://www.facebook.com/bmemvk/", "target", "blank"], ["src", "../../assets/footer-logo/mkv-white.png", "alt", "MKV", "title", "M\u0171egyetemi Versenycsapat K\u00F6z\u00F6ss\u00E9g", 1, "col-4", "col-sm-3", "col-md-2", "animate-me", "fade-up"], [1, "text-center", "pb-3", "pt-5", "row", "justify-content-center", "mr-0", "ml-0"], [1, "madeby"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FOOTER.title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "mail");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "phone");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"]], styles: ["#footer {\r\n    width: 100%;\r\n    color: white;\r\n    background-color: #1B262F;\r\n}\r\n.contact {\r\n    justify-content: center;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\na, a:hover {\r\n    color: white;\r\n}\r\n.mat-icon {\r\n    transform: scale(1.3);\r\n    transition: transform 0.3s ease;\r\n}\r\n.mat-icon:hover {\r\n    transform: scale(1.6);\r\n    opacity: 0.7;\r\n    cursor: pointer;\r\n}\r\n#footer i.fab ,i.fa, #footer img{\r\n    transition: transform .2s ease;\r\n}\r\n#footer i.fab:hover ,i.fa:hover , #footer img:hover{\r\n    transform: scale(1.3);\r\n    opacity: 0.7;\r\n    cursor: pointer;\r\n}\r\n.links {\r\n    padding-top: 2%;\r\n}\r\n.tooltip-inner {\r\n    font-size: 1rem;\r\n    background-color: white;\r\n    color: black;\r\n    font-family: 'Helvetica';\r\n    margin-bottom: 10%;\r\n}\r\n.my-tooltip .arrow::before {\r\n    border-top-color: transparent;\r\n}\r\n/* .madeby p{\r\n    font-family: \"Kelson Sans Light\";\r\n    font-size: 0.8rem;\r\n    padding: 0;\r\n    margin:0;\r\n    opacity: 0.4;\r\n} */\r\n.footer{\r\n    width: 100%;\r\n    ovarlay: hidden;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7Ozs7OztHQU1HO0FBQ0g7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIyNjJGO1xyXG59XHJcbi5jb250YWN0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5hLCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWF0LWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG4ubWF0LWljb246aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjYpO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNmb290ZXIgaS5mYWIgLGkuZmEsICNmb290ZXIgaW1ne1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xyXG59XHJcblxyXG4jZm9vdGVyIGkuZmFiOmhvdmVyICxpLmZhOmhvdmVyICwgI2Zvb3RlciBpbWc6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saW5rcyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbn1cclxuXHJcbi50b29sdGlwLWlubmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcbi5teS10b29sdGlwIC5hcnJvdzo6YmVmb3JlIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi8qIC5tYWRlYnkgcHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIktlbHNvbiBTYW5zIExpZ2h0XCI7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufSAqL1xyXG4uZm9vdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmFybGF5OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4iXX0= */"], encapsulation: 2 });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _model_gallery_picture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/gallery-picture */ "./src/app/model/gallery-picture.ts");
/* harmony import */ var _shared_picture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/picture.service */ "./src/app/shared/picture.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");











var _c0 = function (a0) { return { "failed": a0 }; };
var _c1 = function (a0) { return { "disabled": a0 }; };
function GalleryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00DAj k\u00E9p hozz\u00E1ad\u00E1sa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Magyar c\u00EDm - opcion\u00E1lis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GalleryComponent_div_6_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244); var ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r243.newPicture.title_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Angol c\u00EDm - opcion\u00E1lis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GalleryComponent_div_6_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244); var ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r245.newPicture.title_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nagy fot\u00F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GalleryComponent_div_6_Template_input_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244); var ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r246.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Kis fot\u00F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GalleryComponent_div_6_Template_input_change_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244); var ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r247.handleSmallFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_6_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244); var _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); var ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r248.uploadGalleryPicture(_r242); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Felt\u00F6lt\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    var ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r240.newPicture.title_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r240.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r240.newPicture.title_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r240.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r240.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r240.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, !ctx_r240.isEnabled(_r242.form.valid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r240.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r240.errorMessage, " ");
} }
function GalleryComponent_div_15_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_15_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r253); var img_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r251.clickMethod(img_r249.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GalleryComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryComponent_div_15_a_1_Template, 2, 0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var img_r249 = ctx.$implicit;
    var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r241.authority == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", img_r249.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r249.smallPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", img_r249.title_hu);
} }
// import AOS from 'aos';
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(pictureService, router, tokenStorage) {
        this.pictureService = pictureService;
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.failed = false;
        this.errorMessage = "";
        this.picturesSelected = false;
        this.pic = false;
        this.smallPic = false;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        // AOS.init();
        this.checkAuth();
        this.loadGallery();
        this.newPicture = new _model_gallery_picture__WEBPACK_IMPORTED_MODULE_1__["GalleryPicture"]();
    };
    GalleryComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        this.newPicture.picture = files.item(0).name;
        this.pic = true;
        if (this.pic && this.smallPic) {
            this.picturesSelected = true;
        }
    };
    GalleryComponent.prototype.handleSmallFileInput = function (files) {
        this.smallFileToUpload = files.item(0);
        this.newPicture.smallPicture = files.item(0).name;
        this.smallPic = true;
        if (this.pic && this.smallPic) {
            this.picturesSelected = true;
        }
    };
    GalleryComponent.prototype.uploadFileToActivity = function () {
        var _this = this;
        this.pictureService.postFile(this.fileToUpload, "gallery").subscribe(function (data) {
            _this.fileToUpload = null;
        }, function (error) {
            // console.log(error);
        });
        this.pictureService.postFile(this.smallFileToUpload, "gallery").subscribe(function (data) {
            _this.smallFileToUpload = null;
        }, function (error) {
            // console.log(error);
        });
    };
    GalleryComponent.prototype.uploadGalleryPicture = function (empForm) {
        var _this = this;
        if (this.newPicture.title_hu == null) {
            this.newPicture.title_hu = ' ';
        }
        if (this.newPicture.title_en == null) {
            this.newPicture.title_en = ' ';
        }
        this.pictureService.postGalleryPicture(this.newPicture).subscribe(function (data) {
            // do something, if upload success
            _this.uploadFileToActivity();
            _this.newPicture = new _model_gallery_picture__WEBPACK_IMPORTED_MODULE_1__["GalleryPicture"]();
            _this.gallery.push(data);
            //this.loadGallery();
        }, function (error) {
            // console.log(error);
        });
        empForm.reset();
    };
    GalleryComponent.prototype.loadGallery = function () {
        var _this = this;
        this.pictureService.getGallery().subscribe(function (res) {
            _this.gallery = res;
            _this.gallery.forEach(function (s) {
                s.picture = "./assets/gallery/".concat(s.picture);
            });
            _this.gallery.forEach(function (s) { return (s.smallPicture = "./assets/gallery/".concat(s.smallPicture)); });
        });
    };
    GalleryComponent.prototype.delete = function (id) {
        var _this = this;
        this.pictureService.deleteGalleryPicture(id).subscribe(function (data) {
            var du = _this.gallery.find(function (a) { return a.id == id; });
            var index = _this.gallery.indexOf(du, 0);
            if (index > -1) {
                _this.gallery.splice(index, 1);
            }
        }, function (error) {
            // console.log(error);
        });
    };
    GalleryComponent.prototype.clickMethod = function (id) {
        if (confirm("Are you sure to delete " + id.toString())) {
            this.delete(id);
        }
    };
    GalleryComponent.prototype.checkAuth = function () {
        var _this = this;
        this.authority = undefined;
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every(function (role) {
                if (role === "ROLE_ADMIN") {
                    _this.authority = "admin";
                    return false;
                }
                _this.authority = "user";
                return true;
            });
        }
    };
    GalleryComponent.prototype.isEnabled = function (form) {
        return (form && this.smallFileToUpload && this.fileToUpload);
    };
    GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_picture_service__WEBPACK_IMPORTED_MODULE_2__["PictureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"])); };
    GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], outputs: { gallery: "gallery" }, decls: 17, vars: 2, consts: [[1, "gallery"], [1, "container", "col-12", "col-sm-12", "col-lg-10", "col-md-11", "align-items-center"], [1, "jumbotron", "col-12"], ["translate", "", 1, "title", "pb-3"], ["class", " container col-lg-7 col-md-10 col-12 col-sm-12 mt-5", 4, "ngIf"], [1, "align-items-center", "justify-content-center", "col-12", "d-flex", "flex-column"], [1, "row", "col-12"], [1, "d-flex", "justify-content-center", "col-12", "col-lg-6", "col-md-6", "p-3", "mb-lg-3", "pb-md-3"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/ezgTLqlOhzs", "frameborder", "0", "allow", " encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "p-3"], [1, "d-flex", "justify-content-center", "col-12", "col-lg-6", "col-md-6", "p-3", "mb-3"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/xFjTQf9uCsM", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "p-3"], [1, "justify-content-center", "d-flex", "mb-5"], ["id", "photos", 1, "gallery", "justify-content-center"], ["class", "picture", 4, "ngFor", "ngForOf"], [1, "container", "col-lg-7", "col-md-10", "col-12", "col-sm-12", "mt-5"], ["id", "galleryform", 1, "valami", "card", "mb-5", "mr-3", "ml-3"], [1, "title", "pb-3"], ["loginForm", "ngForm"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "title_hu"], ["type", "text", "id", "title_hu", "name", "title_hu", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "title_en"], ["type", "text", "id", "title_en", "name", "title_en", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "file"], ["type", "file", "required", "", "id", "file", 1, "form-control", 3, "ngClass", "change"], ["for", "smallfile"], ["type", "file", "required", "", "id", "smallfile", 1, "form-control", 3, "ngClass", "change"], ["href", "javascript:void(0)", 1, "btn", 3, "ngClass", "click"], [1, "alert", "alert-danger", "mt-3", 3, "hidden"], [1, "picture"], ["class", "close", 3, "click", 4, "ngIf"], ["data-lightbox", "gallery", 3, "href"], [1, "img-wrap"], [3, "src", "alt"], [1, "close", 3, "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "GALLERY.gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleryComponent_div_6_Template, 30, 19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "iframe", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GalleryComponent_div_15_Template, 5, 4, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-footer");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authority == "admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gallery);
        } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".gallery[_ngcontent-%COMP%] {\r\n  background-color: #f3f4f4;;\r\n}\r\n.jumbotron[_ngcontent-%COMP%] {\r\n  background: none;\r\n  margin-bottom: 0;\r\n}\r\n#galleryform[_ngcontent-%COMP%] {\r\n  background: white;\r\n  background-color: white;\r\n  padding: 3%;\r\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\r\n}\r\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  transition: 1s;\r\n  padding: 5px;\r\n  \r\n}\r\n.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n  filter: grayscale(70%);\r\n  transform: scale(1.05);\r\n  border-radius: 15px;\r\n}\r\n.img-wrap[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  z-index: 100;\r\n  background-color: #FFF;\r\n  padding: 0px;\r\n  color: #000;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  opacity: .8;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  line-height: 10px;\r\n  border-radius: 50%;\r\n}\r\n.img-wrap[_ngcontent-%COMP%]:hover   .close[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transform: scale(1.05);\r\n}\r\n.picture[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: inline-block;\r\n  font-size: 0;\r\n}\r\n#photos[_ngcontent-%COMP%] {\r\n  \r\n  line-height: 0;\r\n\r\n  -webkit-column-count: 4;\r\n  -webkit-column-gap: 0px;\r\n  -moz-column-count: 4;\r\n  -moz-column-gap: 0px;\r\n  column-count: 4;\r\n  column-gap: 0px;\r\n}\r\n#photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  \r\n  width: 100% !important;\r\n  height: auto !important;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  #photos[_ngcontent-%COMP%] {\r\n    -moz-column-count: 4;\r\n    column-count: 4;\r\n  }\r\n}\r\n@media (max-width: 1000px) {\r\n  #photos[_ngcontent-%COMP%] {\r\n    -moz-column-count: 3;\r\n    column-count: 3;\r\n  }\r\n}\r\n@media (max-width: 800px) {\r\n  #photos[_ngcontent-%COMP%] {\r\n    -moz-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n@media (max-width: 400px) {\r\n  #photos[_ngcontent-%COMP%] {\r\n    -moz-column-count: 1;\r\n    column-count: 1;\r\n  }\r\n\r\n\r\n  \r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsc0RBQXNEO0FBQ3hEO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaOztxQkFFbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7O0VBRWQsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0Msc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBOzs7Ozs7RUFNRTtBQUNGO0VBQ0U7SUFDRSxvQkFBb0I7SUFFcEIsZUFBZTtFQUNqQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLG9CQUFvQjtJQUVwQixlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usb0JBQW9CO0lBRXBCLGVBQWU7RUFDakI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxvQkFBb0I7SUFFcEIsZUFBZTtFQUNqQjs7Ozs7QUFLRiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouZ2FsbGVyeSB7XHJcbiAgbWFyZ2luOiAxMHB4IDUwcHg7XHJcbn0qL1xyXG4uZ2FsbGVyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNDs7XHJcbn1cclxuLmp1bWJvdHJvbiB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbiNnYWxsZXJ5Zm9ybSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMyU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjE1cmVtIDEuNzVyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xyXG59XHJcblxyXG4uZ2FsbGVyeSBpbWcge1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICAvKndpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvYmplY3QtZml0OiBjb3ZlcjsqL1xyXG59XHJcbi5nYWxsZXJ5IGltZzpob3ZlciB7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoNzAlKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5pbWctd3JhcCAuY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAuODtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaW1nLXdyYXA6aG92ZXIgLmNsb3NlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuLnBpY3R1cmV7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDA7XHJcbn1cclxuXHJcbiNwaG90b3Mge1xyXG4gIC8qIFByZXZlbnQgdmVydGljYWwgZ2FwcyAqL1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG5cclxuICAtd2Via2l0LWNvbHVtbi1jb3VudDogNDtcclxuICAtd2Via2l0LWNvbHVtbi1nYXA6IDBweDtcclxuICAtbW96LWNvbHVtbi1jb3VudDogNDtcclxuICAtbW96LWNvbHVtbi1nYXA6IDBweDtcclxuICBjb2x1bW4tY291bnQ6IDQ7XHJcbiAgY29sdW1uLWdhcDogMHB4O1xyXG59XHJcblxyXG4jcGhvdG9zIGltZyB7XHJcbiAgLyogSnVzdCBpbiBjYXNlIHRoZXJlIGFyZSBpbmxpbmUgYXR0cmlidXRlcyAqL1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLypAbWVkaWEgKG1heC13aWR0aDogMTAwMDBweCkge1xyXG4gICNwaG90b3Mge1xyXG4gICAgLW1vei1jb2x1bW4tY291bnQ6IDQ7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogNDtcclxuICAgIGNvbHVtbi1jb3VudDogNDtcclxuICB9XHJcbn0qL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgI3Bob3RvcyB7XHJcbiAgICAtbW96LWNvbHVtbi1jb3VudDogNDtcclxuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiA0O1xyXG4gICAgY29sdW1uLWNvdW50OiA0O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgI3Bob3RvcyB7XHJcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMztcclxuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xyXG4gICAgY29sdW1uLWNvdW50OiAzO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAjcGhvdG9zIHtcclxuICAgIC1tb3otY29sdW1uLWNvdW50OiAyO1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDI7XHJcbiAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICNwaG90b3Mge1xyXG4gICAgLW1vei1jb2x1bW4tY291bnQ6IDE7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMTtcclxuICAgIGNvbHVtbi1jb3VudDogMTtcclxuICB9XHJcblxyXG5cclxuICBcclxuICBcclxufVxyXG4iXX0= */"] });
    return GalleryComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-gallery",
                templateUrl: "./gallery.component.html",
                styleUrls: ["./gallery.component.css"],
            }]
    }], function () { return [{ type: _shared_picture_service__WEBPACK_IMPORTED_MODULE_2__["PictureService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] }]; }, { gallery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var Globals = /** @class */ (function () {
    function Globals() {
        this.BASE_URL = 'http://localhost:8080';
    }
    Globals.ɵfac = function Globals_Factory(t) { return new (t || Globals)(); };
    Globals.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Globals, factory: Globals.ɵfac });
    return Globals;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Globals, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/graph/graph.component.ts":
/*!******************************************!*\
  !*** ./src/app/graph/graph.component.ts ***!
  \******************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _boat_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../boat-data.service */ "./src/app/boat-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm5/swimlane-ngx-charts.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");







function GraphComponent_ngx_charts_line_chart_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-line-chart", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
} if (rf & 2) {
    var ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx_r346.data.view)("scheme", ctx_r346.data.colorScheme)("results", ctx_r346.data.multi)("gradient", ctx_r346.data.gradient)("xAxis", ctx_r346.data.showXAxis)("yAxis", ctx_r346.data.showYAxis)("legend", ctx_r346.data.showLegend)("showXAxisLabel", ctx_r346.data.showXAxisLabel)("showYAxisLabel", ctx_r346.data.showYAxisLabel)("xAxisLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 13, ctx_r346.data.xAxisLabel))("yAxisLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 15, ctx_r346.data.yAxisLabel))("autoScale", ctx_r346.data.autoScale)("legendTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 17, ctx_r346.data.legendTitle));
} }
var GraphComponent = /** @class */ (function () {
    function GraphComponent(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    GraphComponent.prototype.ngOnInit = function () { };
    GraphComponent.ɵfac = function GraphComponent_Factory(t) { return new (t || GraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_boat_data_service__WEBPACK_IMPORTED_MODULE_2__["BoatDataService"])); };
    GraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphComponent, selectors: [["app-graph"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [[3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale", "legendTitle", 4, "ngIf"], [3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale", "legendTitle"]], template: function GraphComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GraphComponent_ngx_charts_line_chart_0_Template, 4, 19, "ngx-charts-line-chart", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYXBoL2dyYXBoLmNvbXBvbmVudC5jc3MifQ== */"] });
    return GraphComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-graph",
                templateUrl: "./graph.component.html",
                styleUrls: ["./graph.component.css"],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _boat_data_service__WEBPACK_IMPORTED_MODULE_2__["BoatDataService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_login_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/login-info */ "./src/app/auth/login-info.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");








function LoginComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_12_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r231.errors.required);
} }
function LoginComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_17_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_17_div_2_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r233.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r233.errors.minlength);
} }
function LoginComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r235.errorMessage, " ");
} }
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenStorage, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = "";
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginInfo = new _auth_login_info__WEBPACK_IMPORTED_MODULE_1__["AuthLoginInfo"](this.form.username, this.form.password);
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getAuthorities();
            _this.router.navigateByUrl("/mainpage");
        }, function (error) {
            // console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 5, consts: [[1, "d-flex", "justify-content-center"], [1, "d-flex", "jumbotron", "mt-5", "col-10", "col-sm-8,", "col-md-4", "align-items-center", "flex-column"], [1, "pl-5", "pr-5", "mr-5", "ml-5", "pb-5"], ["src", "../../assets/logo.png", "alt", "logo", "title", "logo"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "col-12"], ["for", "username"], ["type", "text", "id", "username", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], [4, "ngIf"], ["for", "password", 1, "pt-3"], ["id", "password", "type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "load-more", "pt-5"], ["id", "login-btn", "href", "javascript:void(0)", "target", "", 1, "btn", "submit", 3, "click"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            var _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r239); var _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r230.form.valid && ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Felhaszn\u00E1l\u00F3n\u00E9v");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.form.username = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Jelsz\u00F3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.form.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 3, 2, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_19_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bejelentkez\u00E9s");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 2, 1, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
            var _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
            var _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.username);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r230.submitted && _r231.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r230.submitted && _r233.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r230.submitted && ctx.isLoginFailed);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]], styles: ["label[_ngcontent-%COMP%] {\r\n  font-family: \"KelsonSans-Light\";\r\n  letter-spacing: 4px;\r\n  text-transform: uppercase;\r\n  color: black;\r\n  margin-right: 1rem;\r\n  text-decoration: none;\r\n  position: relative;\r\n}\r\n.jumbotron[_ngcontent-%COMP%] {\r\n  background-color: #f3f4f4;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiS2Vsc29uU2Fucy1MaWdodFwiO1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmp1bWJvdHJvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNDtcclxufVxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"] });
    return LoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-login",
                templateUrl: "./login.component.html",
                styleUrls: ["./login.component.css"],
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/mainpage-news/mainpage-news.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mainpage-news/mainpage-news.component.ts ***!
  \**********************************************************/
/*! exports provided: MainpageNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageNewsComponent", function() { return MainpageNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/news.service */ "./src/app/shared/news.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _news_preview_news_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../news-preview/news-preview.component */ "./src/app/news-preview/news-preview.component.ts");








function MainpageNewsComponent_app_news_preview_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-news-preview", 9);
} if (rf & 2) {
    var news_r300 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("news", news_r300);
} }
var MainpageNewsComponent = /** @class */ (function () {
    function MainpageNewsComponent(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.allnews = [];
    }
    MainpageNewsComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    MainpageNewsComponent.prototype.getNews = function () {
        var _this = this;
        this.apiService.getMainpageNews().subscribe(function (res) {
            var news = res;
            _this.allnews = news.content;
        }, function (err) {
            alert("get error");
        });
    };
    MainpageNewsComponent.ɵfac = function MainpageNewsComponent_Factory(t) { return new (t || MainpageNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"])); };
    MainpageNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainpageNewsComponent, selectors: [["app-mainpage-news"]], decls: 11, vars: 1, consts: [[1, "mainpage-news"], [1, "container", "col-md-10", "col-lg-10", "col-12", "align-items-center"], [1, "jumbotron", "col-12"], ["translate", "", 1, "title", "pb-4"], ["routerLink", "/news", "target", "", 1, "btn", "white"], ["translate", ""], [1, "container", "col-lg-10", "col-md-12", "col-12", "col-sm-12", "mt-5"], [1, "row", "justify-content-between"], ["class", "col-lg-6 col-md-6 col-12 col-sm-12", 3, "news", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-md-6", "col-12", "col-sm-12", 3, "news"]], template: function MainpageNewsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "NEWS.news");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NEWS.all_news");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainpageNewsComponent_app_news_preview_10_Template, 1, 1, "app-news-preview", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allnews);
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _news_preview_news_preview_component__WEBPACK_IMPORTED_MODULE_6__["NewsPreviewComponent"]], styles: ["div.mainpage-news[_ngcontent-%COMP%]{\r\n    background-image: url(\"/assets/mainpage/news/bg.png\");\r\n    background-color: #283A43;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-blend-mode: overlay;\r\n\r\n}\r\n.jumbotron[_ngcontent-%COMP%] {\r\n    background: none;\r\n    margin-bottom: 0;\r\n}\r\nh1.title[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n@media only screen and (max-width: 500px) {\r\n    app-news-preview[_ngcontent-%COMP%]{\r\n        padding-left: 0px !important;\r\n        padding-right: 0px !important;\r\n    }\r\n    div.mainpage-news[_ngcontent-%COMP%] {\r\n        background-attachment: local;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2UtbmV3cy9tYWlucGFnZS1uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxREFBcUQ7SUFDckQseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDhCQUE4Qjs7QUFFbEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWlucGFnZS1uZXdzL21haW5wYWdlLW5ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5tYWlucGFnZS1uZXdze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9tYWlucGFnZS9uZXdzL2JnLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODNBNDM7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG92ZXJsYXk7XHJcblxyXG59XHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuaDEudGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgYXBwLW5ld3MtcHJldmlld3tcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgZGl2Lm1haW5wYWdlLW5ld3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogbG9jYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
    return MainpageNewsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainpageNewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-mainpage-news",
                templateUrl: "./mainpage-news.component.html",
                styleUrls: ["./mainpage-news.component.css"],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _shared_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _cover_cover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cover/cover.component */ "./src/app/cover/cover.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _mainpage_news_mainpage_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mainpage-news/mainpage-news.component */ "./src/app/mainpage-news/mainpage-news.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");







var MainpageComponent = /** @class */ (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent.ɵfac = function MainpageComponent_Factory(t) { return new (t || MainpageComponent)(); };
    MainpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainpageComponent, selectors: [["app-mainpage"]], decls: 6, vars: 0, consts: [["id", "aboutus"]], template: function MainpageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cover");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-aboutus");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-mainpage-news");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _cover_cover_component__WEBPACK_IMPORTED_MODULE_2__["CoverComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__["AboutusComponent"], _mainpage_news_mainpage_news_component__WEBPACK_IMPORTED_MODULE_4__["MainpageNewsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
    return MainpageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-mainpage",
                templateUrl: "./mainpage.component.html",
                styleUrls: ["./mainpage.component.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/mileage/mileage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mileage/mileage.component.ts ***!
  \**********************************************/
/*! exports provided: MileageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MileageComponent", function() { return MileageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");



var _c0 = ["circle"];
var MileageComponent = /** @class */ (function () {
    function MileageComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.name = "mileage";
    }
    MileageComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(MileageComponent.prototype, "velocity", {
        set: function (velocity) {
            this.setMileage(velocity);
        },
        enumerable: true,
        configurable: true
    });
    MileageComponent.prototype.setMileage = function (velocity) {
        this.angle = velocity * 3 - 90;
        if (this.angle > 90) {
            this.angle += 180;
        }
        this.angle = Math.round(this.angle);
        this.styleRotate = this.sanitizer.bypassSecurityTrustStyle("transform: rotate(" + this.angle + "deg)");
    };
    MileageComponent.ɵfac = function MileageComponent_Factory(t) { return new (t || MileageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
    MileageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MileageComponent, selectors: [["app-mileage"]], viewQuery: function MileageComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.circle = _t.first);
        } }, inputs: { velocity: "velocity" }, decls: 25, vars: 2, consts: [[1, "d-inline-flex"], [1, "container-circle"], [1, "circle"], ["circle", ""], [1, "compass"], [1, "glass"], [1, "measure"], [1, "two-hundred-and-seventy-measure"], [1, "three-hundred-measure"], [1, "three-hundred-and-thirty-measure"], [1, "null-measure"], [1, "thirty-measure"], [1, "sixty-measure"], [1, "ninety-measure"], [1, "pointer"], [1, "arrow", "up"], [1, "center"], [1, "arrow", "down"]], template: function MileageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "10");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "20");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "30");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "40");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "50");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "60");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.styleRotate);
        } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Josefin+Sans:700\");\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding-right: 200px;\r\n}\r\n[_nghost-%COMP%] {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  font: 16px/100% Arial, Tahoma, Verdana, sans-serif;\r\n  font-weight: bold;\r\n}\r\n[_nghost-%COMP%]   .debug[_ngcontent-%COMP%] {\r\n  color: #e91e63;\r\n  font-family: monospace;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate3d(-50%, -50%, 0);\r\n  z-index: 100;\r\n}\r\n[_nghost-%COMP%]   .container-circle[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n  position: absolute;\r\n  width: 200px;\r\n  height: 200px;\r\n  margin-right: 250;\r\n  margin-bottom: 250px;\r\n  margin-left: 50;\r\n}\r\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  background-color: #cddc39;\r\n  border-top-left-radius: 100px;\r\n  border-top-right-radius: 100px;\r\n  height: 65%;\r\n  width: 100%;\r\n  padding-bottom: 25%;\r\n  transform: translate3d(-50%, -50%, 0);\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\r\n  border-bottom: 0;\r\n}\r\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 90%;\r\n  height: 90%;\r\n  background-color: #ecf0f1;\r\n  border-top-left-radius: 90px;\r\n  border-top-right-radius: 90px;\r\n  top: 5%;\r\n  left: 5%;\r\n  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);\r\n  border-bottom: 0;\r\n}\r\n.cover[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  width: 240px;\r\n  height: 120px;\r\n  position: absolute;\r\n  top: -20px;\r\n  left: -20px;\r\n  z-index: 2;\r\n  overflow: hidden;\r\n  transition: all 0.5s linear;\r\n  transform-origin: bottom center;\r\n}\r\n.measure[_ngcontent-%COMP%] {\r\n  font-size: 9px;\r\n  list-style: none;\r\n  color: #000;\r\n}\r\n.measure[_ngcontent-%COMP%]   .thirty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(30deg);\r\n  position: absolute;\r\n  top: 26px;\r\n  right: 57px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .sixty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(60deg);\r\n  position: absolute;\r\n  top: 57px;\r\n  right: 26px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .ninety-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n  position: absolute;\r\n  top: 90px;\r\n  right: 20px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .two-hundred-and-seventy-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(270deg);\r\n  position: absolute;\r\n  top: 90px;\r\n  left: 20px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .three-hundred-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(300deg);\r\n  position: absolute;\r\n  top: 57px;\r\n  left: 26px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .three-hundred-and-thirty-measure[_ngcontent-%COMP%] {\r\n  transform: rotate(330deg);\r\n  position: absolute;\r\n  top: 26px;\r\n  left: 57px;\r\n}\r\n.measure[_ngcontent-%COMP%]   .null-measure[_ngcontent-%COMP%]{\r\n  transform: rotate(0deg);\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 95px;\r\n}\r\n.pointer[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  position: relative;\r\n  -webkit-animation: animated-pointer 1s ease-in-out infinite;\r\n  animation: animated-pointer 1s ease-in-out infinite;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n.pointer[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\r\n  background: #444444;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);\r\n  width: 30px;\r\n  height: 30px;\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 85px;\r\n}\r\n.arrow[_ngcontent-%COMP%] {\r\n  border: 70px solid #555555;\r\n  margin: 0 auto;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n.arrow.up[_ngcontent-%COMP%] {\r\n  border-color: #e91e63;\r\n  border-top: 0px solid transparent;\r\n  border-left: 15px solid transparent;\r\n  border-right: 15px solid transparent;\r\n}\r\n.arrow.down[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  border-left: 15px solid transparent;\r\n  border-right: 15px solid transparent;\r\n  border-color: rgba(255, 255, 255, 0);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlsZWFnZS9taWxlYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQXVFO0FBQ3ZFOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsa0RBQWtEO0VBQ2xELGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxxQ0FBcUM7RUFDckMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLE9BQU87RUFDUCxRQUFRO0VBQ1IsNkNBQTZDO0VBQzdDLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUtoQiwyQkFBMkI7RUFLM0IsK0JBQStCO0FBQ2pDO0FBR0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBS0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7RUFLRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFDQTtFQUtFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjtBQUVBO0VBS0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFLRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUtFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBO0VBS0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDJEQUEyRDtFQUkzRCxtREFBbUQ7RUFLbkQsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBRWxCLHNDQUFzQztFQUN0QyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMsbUNBQW1DO0VBQ25DLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvbWlsZWFnZS9taWxlYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Kb3NlZmluK1NhbnM6NzAwXCIpO1xyXG5ib2R5LFxyXG5odG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbjpob3N0KCkge1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGZvbnQ6IDE2cHgvMTAwJSBBcmlhbCwgVGFob21hLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbjpob3N0KCkgLmRlYnVnIHtcclxuICBjb2xvcjogI2U5MWU2MztcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuOmhvc3QoKSAuY29udGFpbmVyLWNpcmNsZSB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjUwO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MDtcclxufVxyXG46aG9zdCgpIC5jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZGMzOTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwcHg7XHJcbiAgaGVpZ2h0OiA2NSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuOmhvc3QoKSAuY2lyY2xlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDkwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDkwcHg7XHJcbiAgdG9wOiA1JTtcclxuICBsZWZ0OiA1JTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNvdmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgbGVmdDogLTIwcHg7XHJcbiAgei1pbmRleDogMjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xyXG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XHJcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5tZWFzdXJlIHtcclxuICBmb250LXNpemU6IDlweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5tZWFzdXJlIC50aGlydHktbWVhc3VyZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI2cHg7XHJcbiAgcmlnaHQ6IDU3cHg7XHJcbn1cclxuLm1lYXN1cmUgLnNpeHR5LW1lYXN1cmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1N3B4O1xyXG4gIHJpZ2h0OiAyNnB4O1xyXG59XHJcbi5tZWFzdXJlIC5uaW5ldHktbWVhc3VyZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDkwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tZWFzdXJlIC50d28taHVuZHJlZC1hbmQtc2V2ZW50eS1tZWFzdXJlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5MHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuLm1lYXN1cmUgLnRocmVlLWh1bmRyZWQtbWVhc3VyZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTdweDtcclxuICBsZWZ0OiAyNnB4O1xyXG59XHJcbi5tZWFzdXJlIC50aHJlZS1odW5kcmVkLWFuZC10aGlydHktbWVhc3VyZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjZweDtcclxuICBsZWZ0OiA1N3B4O1xyXG59XHJcblxyXG4ubWVhc3VyZSAubnVsbC1tZWFzdXJle1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiA5NXB4O1xyXG59XHJcbi5wb2ludGVyIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZWQtcG9pbnRlciAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAtbW96LWFuaW1hdGlvbjogYW5pbWF0ZWQtcG9pbnRlciAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAtbXMtYW5pbWF0aW9uOiBhbmltYXRlZC1wb2ludGVyIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gIC1vLWFuaW1hdGlvbjogYW5pbWF0ZWQtcG9pbnRlciAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGFuaW1hdGVkLXBvaW50ZXIgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxufVxyXG4ucG9pbnRlciAuY2VudGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNDQ0NDQ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIGxlZnQ6IDg1cHg7XHJcbn1cclxuLmFycm93IHtcclxuICBib3JkZXI6IDcwcHggc29saWQgIzU1NTU1NTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuLmFycm93LnVwIHtcclxuICBib3JkZXItY29sb3I6ICNlOTFlNjM7XHJcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4uYXJyb3cuZG93biB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG59Il19 */"] });
    return MileageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MileageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-mileage",
                templateUrl: "./mileage.component.html",
                styleUrls: ["./mileage.component.css"],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { circle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["circle"]
        }], velocity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["velocity"]
        }] }); })();


/***/ }),

/***/ "./src/app/model/gallery-picture.ts":
/*!******************************************!*\
  !*** ./src/app/model/gallery-picture.ts ***!
  \******************************************/
/*! exports provided: GalleryPicture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPicture", function() { return GalleryPicture; });
var GalleryPicture = /** @class */ (function () {
    function GalleryPicture() {
    }
    return GalleryPicture;
}());



/***/ }),

/***/ "./src/app/model/role.ts":
/*!*******************************!*\
  !*** ./src/app/model/role.ts ***!
  \*******************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role = /** @class */ (function () {
    function Role(n) {
        this.name = n;
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/model/sponsor.ts":
/*!**********************************!*\
  !*** ./src/app/model/sponsor.ts ***!
  \**********************************/
/*! exports provided: Sponsor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sponsor", function() { return Sponsor; });
var Sponsor = /** @class */ (function () {
    function Sponsor() {
    }
    return Sponsor;
}());



/***/ }),

/***/ "./src/app/model/team-texts.ts":
/*!*************************************!*\
  !*** ./src/app/model/team-texts.ts ***!
  \*************************************/
/*! exports provided: TeamTexts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamTexts", function() { return TeamTexts; });
var TeamTexts = /** @class */ (function () {
    function TeamTexts(text_hu, text_en) {
        this.text_hu = text_hu;
        this.text_en = text_en;
    }
    return TeamTexts;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");







function NavBarComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "adatok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    var _r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_26_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r294); var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r293.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    var _r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_28_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r296); var ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r295.translate.use("hu"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    var _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_29_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r298); var ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r297.translate.use("en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router, tokenStorage, translate) {
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.translate = translate;
        this.page = this.router.url;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.checkAuth();
    };
    NavBarComponent.prototype.logout = function () {
        this.tokenStorage.signOut();
        this.checkAuth();
    };
    NavBarComponent.prototype.checkAuth = function () {
        var _this = this;
        this.authority = undefined;
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every(function (role) {
                if (role === "ROLE_ADMIN") {
                    _this.authority = "admin";
                    return false;
                }
                _this.authority = "user";
                return true;
            });
        }
    };
    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 30, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "sticky-top"], ["href", "#", 1, "navbar-brand"], ["src", "../../assets/logo.png", "alt", "logo", "title", "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-light", "ml-auto"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["translate", "", "routerLink", "/mainpage", "fragment", "aboutus", "routerLinkActive", "active-link", "target", "", 1, "nav-link"], ["translate", "", "routerLink", "/news", "routerLinkActive", "active-link", 1, "nav-link"], ["translate", "", "routerLink", "/team", "routerLinkActive", "active-link", 1, "nav-link"], ["translate", "", "routerLink", "/achievements", "routerLinkActive", "active-link", 1, "nav-link"], ["translate", "", "routerLink", "/gallery", "routerLinkActive", "active-link", 1, "nav-link"], ["translate", "", "routerLink", "/sponsors", "routerLinkActive", "active-link", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], [1, "nav"], [4, "ngIf"], ["routerLink", "/boatdata", "routerLinkActive", "active-link", 1, "nav-link"], ["routerLink", "/mainpage", 1, "nav-link", 3, "click"], [1, "language", 3, "click"], ["src", "../../assets/i18n/hu.png", "alt", "language", "title", "en"], ["src", "../../assets/i18n/en.png", "alt", "language", "title", "en"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NAV.aboutUs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NAV.news");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "NAV.team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "NAV.achievements");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "NAV.gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "NAV.sponsors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NavBarComponent_li_25_Template, 3, 0, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavBarComponent_li_26_Template, 3, 0, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NavBarComponent_li_28_Template, 3, 0, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NavBarComponent_li_29_Template, 3, 0, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("transparent", ctx.page == "/mainpage" || ctx.page == "/mainpage#aboutus");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authority);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authority);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.translate.currentLang == "en");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.translate.currentLang == "hu");
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n\r\n}\r\nnav.navbar[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\na.nav-link[_ngcontent-%COMP%]{\r\n    font-family: 'KelsonSans-Bold';\r\n    letter-spacing: 5px;\r\n    text-transform: uppercase;\r\n    font-size: 0.75rem;\r\n    color: black;\r\n    margin-right: 0.75rem;\r\n    text-decoration: none;\r\n    position: relative;\r\n}\r\n.language[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    max-height: 2em;\r\n    display: block;\r\n}\r\nnav.navbar.navbar-expand-lg[_ngcontent-%COMP%]{\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    background-color: rgba(233, 236, 239, 0.2);\r\n    overflow: hidden;\r\n    transition: height 0.9s ease-out;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    nav.navbar.navbar-expand-lg.transparent[_ngcontent-%COMP%] {\r\n        background-color: rgba(255, 255, 255, 0.2);\r\n        position: absolute;\r\n        width: 100%;\r\n    }\r\n    nav.navbar.navbar-expand-lg.transparent.nav-moving[_ngcontent-%COMP%]{\r\n        padding-left: 10%;\r\n        padding-right: 10%;\r\n        background-color: #fff;\r\n        height: 8%;\r\n        transition: height 0.9s ease-in;\r\n        position: fixed;\r\n    }\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    transition: transform .2s ease;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.07);\r\n}\r\nnav.navbar.navbar-expand-lg.nav-moving[_ngcontent-%COMP%]{\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    background-color: #fff;\r\n    height: 8%;\r\n    transition: height 0.9s ease-in;\r\n}\r\nnav.navbar.navbar-expand-lg.nav-moving[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    transform: scale(0.7);\r\n}\r\na.nav-link[_ngcontent-%COMP%]:hover:after {\r\n    width: 100%;\r\n    left: 0;\r\n}\r\na.nav-link.active-link[_ngcontent-%COMP%]:after{\r\n    bottom: 0;\r\n    content: \"\";\r\n    display: block;\r\n    height: 2px;\r\n    left: 50%;\r\n    position: absolute;\r\n    background: #000000;\r\n    width: 100%;\r\n    left: 0;\r\n}\r\na.nav-link[_ngcontent-%COMP%]:after {\r\n    background: none repeat scroll 0 0 transparent;\r\n    bottom: 0;\r\n    content: \"\";\r\n    display: block;\r\n    height: 2px;\r\n    left: 50%;\r\n    position: absolute;\r\n    background: #000000;\r\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\r\n    width: 0;\r\n}\r\n@media screen and (max-height: 300px) {\r\n    ul[_ngcontent-%COMP%] {\r\n        margin-top: 25px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXOztBQUVmO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQztBQUNBLHNEQUFzRDtBQUN0RDtJQUNJO1FBQ0ksMENBQTBDO1FBQzFDLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLFVBQVU7UUFDViwrQkFBK0I7UUFDL0IsZUFBZTtJQUNuQjtBQUNKO0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDViwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLE9BQU87QUFDWDtBQUNBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxPQUFPO0FBQ1g7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxTQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELFFBQVE7QUFDWjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5uYXYubmF2YmFye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmEubmF2LWxpbmt7XHJcbiAgICBmb250LWZhbWlseTogJ0tlbHNvblNhbnMtQm9sZCc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubGFuZ3VhZ2UgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxubmF2Lm5hdmJhci5uYXZiYXItZXhwYW5kLWxne1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMjM2LCAyMzksIDAuMik7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuOXMgZWFzZS1vdXQ7XHJcbn1cclxuLyphIGbFkW9sZGFsb24gbmFneSBrw6lwZXJuecWRcsWRbCBsZWd5ZW4gw6F0bMOhdHN6w7MgYSBtZW7DvCovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgbmF2Lm5hdmJhci5uYXZiYXItZXhwYW5kLWxnLnRyYW5zcGFyZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgbmF2Lm5hdmJhci5uYXZiYXItZXhwYW5kLWxnLnRyYW5zcGFyZW50Lm5hdi1tb3Zpbmd7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiA4JTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC45cyBlYXNlLWluO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhci1icmFuZCBpbWd7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XHJcbn1cclxuLm5hdmJhci1icmFuZCBpbWc6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xyXG59XHJcblxyXG5uYXYubmF2YmFyLm5hdmJhci1leHBhbmQtbGcubmF2LW1vdmluZ3tcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogOCU7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC45cyBlYXNlLWluO1xyXG59XHJcbm5hdi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZy5uYXYtbW92aW5nIC5uYXZiYXItYnJhbmQgaW1ne1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG59XHJcbmEubmF2LWxpbms6aG92ZXI6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbmEubmF2LWxpbmsuYWN0aXZlLWxpbms6YWZ0ZXJ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbmEubmF2LWxpbms6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMzAwcHgpIHtcclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19 */"] });
    return NavBarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-nav-bar",
                templateUrl: "./nav-bar.component.html",
                styleUrls: ["./nav-bar.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/news-preview/news-preview.component.ts":
/*!********************************************************!*\
  !*** ./src/app/news-preview/news-preview.component.ts ***!
  \********************************************************/
/*! exports provided: NewsPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPreviewComponent", function() { return NewsPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _shared_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/news.service */ "./src/app/shared/news.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_picture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/picture.service */ "./src/app/shared/picture.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm5/kolkov-angular-editor.js");











function NewsPreviewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPreviewComponent_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r308); var ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx_r307.openContent(_r305, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPreviewComponent_div_2_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r308); var ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r309.delete(ctx_r309.news.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsPreviewComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r302.news.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NewsPreviewComponent_ng_template_20_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r311.news.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c0 = function (a0, a1) { return { title_hu: a0, title_en: a1 }; };
var _c1 = function (a0, a1) { return { content_en: a0, content_hu: a1 }; };
function NewsPreviewComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NEWS.title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPreviewComponent_ng_template_20_Template_button_click_3_listener() { var modal_r310 = ctx.$implicit; return modal_r310.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NewsPreviewComponent_ng_template_20_div_15_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r304.news.title_hu, ctx_r304.news.title_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r304.news.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 4, "NEWS.content", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx_r304.news.content_en, ctx_r304.news.content_hu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r304.news.picture);
} }
var _c2 = function (a0) { return { "failed": a0 }; };
function NewsPreviewComponent_ng_template_22_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    var _r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "C\u00EDm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsPreviewComponent_ng_template_22_ng_template_15_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r319); var ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r318.form.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tartalom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "angular-editor", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsPreviewComponent_ng_template_22_ng_template_15_Template_angular_editor_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r319); var ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r320.form.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r316.form.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r316.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r316.form.content)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r316.failed))("config", ctx_r316.config);
} }
function NewsPreviewComponent_ng_template_22_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    var _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsPreviewComponent_ng_template_22_ng_template_19_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r322); var ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r321.form.title_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "angular-editor", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsPreviewComponent_ng_template_22_ng_template_19_Template_angular_editor_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r322); var ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r323.form.content_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r317.form.title_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r317.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r317.form.content_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r317.failed))("config", ctx_r317.config);
} }
var _c3 = function (a0) { return { "disabled": a0 }; };
function NewsPreviewComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    var _r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "H\u00EDr m\u00F3dos\u00EDt\u00E1sa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPreviewComponent_ng_template_22_Template_button_click_3_listener() { var modal_r313 = ctx.$implicit; return modal_r313.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Magyar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NewsPreviewComponent_ng_template_22_ng_template_15_Template, 11, 9, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Angol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NewsPreviewComponent_ng_template_22_ng_template_19_Template, 11, 9, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "K\u00E9p (opcion\u00E1lis)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsPreviewComponent_ng_template_22_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r326); var ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r325.form.file = $event; })("change", function NewsPreviewComponent_ng_template_22_Template_input_change_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r326); var ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r327.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "D\u00E1tum (opcion\u00E1lis)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsPreviewComponent_ng_template_22_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r326); var ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r328.form.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPreviewComponent_ng_template_22_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r326); var _r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); var ctx_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r329.onSubmit(_r314, ctx_r329.news.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Felt\u00F6lt\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    var _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    var ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r315);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r306.form.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r306.form.date)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r306.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, !_r314.form.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r306.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r306.errorMessage, " ");
} }
var _c4 = function (a0, a1) { return { shortArticle_en: a0, shortArticle_hu: a1 }; };
// import AOS from 'aos';
var NewsPreviewComponent = /** @class */ (function () {
    function NewsPreviewComponent(globals, apiService, modalService, pictureService) {
        this.globals = globals;
        this.apiService = apiService;
        this.modalService = modalService;
        this.form = {};
        this.failed = false;
        this.errorMessage = '';
        this.fileToUpload = null;
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = {
            editable: true,
            spellcheck: true,
            height: '15rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            defaultParagraphSeparator: 'p',
            defaultFontName: 'Arial',
            toolbarHiddenButtons: [
                [
                    'textColor',
                    'backgroundColor',
                    'customClasses',
                    'link',
                    'unlink',
                    'insertImage',
                    'insertVideo',
                    'insertHorizontalRule'
                ]
            ]
        };
        this.pictureService = pictureService;
    }
    NewsPreviewComponent.prototype.decodeEntities = function (str) {
        // this prevents any overhead from creating the object each time
        var element = document.createElement('div');
        if (str && typeof str === 'string') {
            // strip script/html tags
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
        }
        return str;
    };
    NewsPreviewComponent.prototype.ngOnInit = function () {
        // AOS.init();
        this.shortArticleHu = this.decodeEntities(this.news.content_hu.replace(/<[^>]+>/g, ''));
        this.shortArticleHu = this.shortArticleHu.substring(0, 100) + '...';
        this.shortArticleEn = this.decodeEntities(this.news.content_en.replace(/<[^>]+>/g, ''));
        this.shortArticleEn = this.shortArticleEn.substring(0, 100) + '...';
        this.form.title = this.news.title_hu;
        this.form.content = this.news.content_hu;
        this.form.title_en = this.news.title_en;
        this.form.content_en = this.news.content_en;
        this.form.date = this.news.date;
    };
    NewsPreviewComponent.prototype.openContent = function (content, edit) {
        this.modalService.open(content, { scrollable: true, centered: true, size: edit ? 'lg' : 'md' });
    };
    NewsPreviewComponent.prototype.delete = function (id) {
        this.onRemove.emit(this.news);
        // TODO: kép törlése
        this.apiService.deleteNews(id);
    };
    NewsPreviewComponent.prototype.onSubmit = function (empForm, id) {
        this.news.title_hu = this.form.title;
        this.news.content_hu = this.form.content;
        this.news.title_en = this.form.title_en;
        this.news.content_en = this.form.content_en;
        this.news.date = this.form.date ? this.form.date : this.news.date;
        var newsId = id;
        if (this.fileToUpload) {
            this.news.picture = '../../assets/news/' + this.fileToUpload.name;
            // console.log('kep modositas');
            this.uploadFileToActivity();
        }
        var o = {
            id: newsId,
            title_hu: this.form.title,
            content_hu: this.form.content,
            title_en: this.form.title_en,
            content_en: this.form.content_en,
            date: this.form.date.replace(/\./g, '-'),
            picture: this.fileToUpload ? '../../assets/news/' + this.fileToUpload.name : this.news.picture
        };
        this.apiService.putNews(o);
        this.modalService.dismissAll('put');
        this.form = empForm;
        this.form.reset();
        this.ngOnInit();
    };
    NewsPreviewComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    NewsPreviewComponent.prototype.uploadFileToActivity = function () {
        this.pictureService.postFile(this.fileToUpload, 'news').subscribe(function (data) {
            // do something, if upload success
        }, function (error) {
            // console.log(error);
        });
    };
    NewsPreviewComponent.ɵfac = function NewsPreviewComponent_Factory(t) { return new (t || NewsPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_picture_service__WEBPACK_IMPORTED_MODULE_4__["PictureService"])); };
    NewsPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsPreviewComponent, selectors: [["app-news-preview"]], inputs: { authority: "authority", news: "news" }, outputs: { onRemove: "onRemove" }, decls: 24, vars: 11, consts: [[1, "card", "lift", "mb-md-5", "mr-md-3", "ml-md-3", "mb-lg-5", "mr-lg-3", "ml-lg-3", "mr-0", "ml-0", "mb-5"], [1, "card-body", "m-3"], ["class", "row justify-content-end", 4, "ngIf"], [3, "click"], ["id", "news-title", "translate", "", 1, "title", "mb-2", "mt-4", 3, "translateParams"], [1, "row", "date", "col-12", "date", "mt-2", "mb-2", "align-items-center"], [1, "pl-1"], [1, "text-wrap", "col-12", "p-0"], ["translate", "", 1, "card-text", "mt-3", "text-break", 3, "translateParams"], [1, "arrow-read", "col-md-6", "offset-md-6", "col-lg-6", "offset-lg-6", "col-10", "offset-2", "p-0", "mt-4", "d-none", "d-lg-block"], ["translate", "", 1, "read-more", "m-0"], ["aria-hidden", "false"], ["class", "row mt-4 align-items-center", 4, "ngIf"], ["longContent", ""], ["Edit", ""], [1, "row", "justify-content-end"], [1, "col-2", 3, "click"], [1, "update-icon"], [1, "row", "mt-4", "align-items-center"], [1, "col-12"], ["alt", "logo", "title", "logo", 3, "src"], [1, "modal-header"], ["translate", "", 1, "title", "mb-2", "mt-4", 3, "translateParams"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "pb-5"], [3, "innerHTML"], ["alt", "picture", "title", "picture", 3, "src"], [1, "title", "mb-2", "mt-4"], ["EditForm", "ngForm"], [1, "localization-tabs"], ["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "localization-tab-content", 3, "ngbNavOutlet"], [1, "col-md-6", "col-lg-6", "col-12", "pb-2"], [1, "form-group"], ["for", "file", 1, "col-12"], ["type", "file", "id", "file", "name", "file", 3, "ngModel", "ngModelChange", "change"], ["for", "date", 1, "col-12"], ["id", "date", "type", "text", "placeholder", "YYYY-MM-DD", "name", "date", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "row", "justify-content-end", "pr-2"], ["href", "javascript:void(0)", 1, "btn", 3, "ngClass", "click"], [1, "alert", "alert-danger", "mt-3", 3, "hidden"], [1, "row"], [1, "col-md-6", "col-lg-6", "col-12"], ["for", "title"], ["type", "text", "id", "title", "required", "", "name", "title", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "col-md-12", "col-lg-12", "col-12"], ["for", "content"], ["id", "content", "required", "", "name", "content", 3, "ngModel", "ngClass", "config", "ngModelChange"], ["for", "title_en"], ["type", "text", "id", "title_en", "required", "", "name", "title_en", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "content_en"], ["id", "content_en", "required", "", "name", "content_en", 3, "ngModel", "ngClass", "config", "ngModelChange"]], template: function NewsPreviewComponent_Template(rf, ctx) { if (rf & 1) {
            var _r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsPreviewComponent_div_2_Template, 7, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPreviewComponent_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r330); var _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.openContent(_r303, false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NEWS.title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "calendar_today");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " NEWS.shortArticle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "arrow_right_alt");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " BUTTON.readAllNews ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NewsPreviewComponent_div_19_Template, 3, 1, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NewsPreviewComponent_ng_template_20_Template, 16, 13, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NewsPreviewComponent_ng_template_22_Template, 37, 11, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authority == "admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.news.title_hu, ctx.news.title_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.news.date);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c4, ctx.shortArticleEn, ctx.shortArticleHu));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.news.picture);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__["AngularEditorComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".lift[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\r\n    transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    cursor: pointer;\r\n}\r\n.lift[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-0.3333333333rem);\r\n    box-shadow: 0 0.5rem 2rem 0 rgba(31, 45, 65, 0.25);\r\n}\r\n.lift[_ngcontent-%COMP%]:active {\r\n    transform: none;\r\n    box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\r\n}\r\n.lift-sm[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0.125rem 0.25rem 0 rgba(31, 45, 65, 0.2);\r\n}\r\n.lift-sm[_ngcontent-%COMP%]:active {\r\n    transform: none;\r\n    box-shadow: 0 0.125rem 0.25rem 0 rgba(31, 45, 65, 0.2);\r\n}\r\n.card.lift[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n.card-text[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n}\r\n.date[_ngcontent-%COMP%]{\r\n    font-size: 0.7rem;\r\n    font-family: \"helvetica\";\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    max-height: 25em;\r\n    display: block;\r\n}\r\n.text-wrap[_ngcontent-%COMP%]{\r\n    width:30rem;\r\n}\r\nmat-icon[_ngcontent-%COMP%]{\r\n    transform: scale(0.7);\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n}\r\n\r\n.read-more[_ngcontent-%COMP%]{\r\n    display:block;\r\n    letter-spacing:0.1em;\r\n    font-size:0.75rem;\r\n    font-family: \"Kelson Sans Light\";\r\n    opacity:0;\r\n    will-change:transform;transform:translateX(-12px);transition:opacity 0.4s cubic-bezier(0.39, 0.575, 0.565, 1), transform 0s cubic-bezier(0.39, 0.575, 0.565, 1) 0.4s\r\n}\r\na[_ngcontent-%COMP%]:hover   .read-more[_ngcontent-%COMP%]{opacity:1;transform:none;transition:opacity 0.4s cubic-bezier(0.39, 0.575, 0.565, 1), transform 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)}\r\na[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\na[_ngcontent-%COMP%]   .update-icon.mat-icon[_ngcontent-%COMP%]{\r\n    transition: transform .2s ease;\r\n}\r\na[_ngcontent-%COMP%]   .update-icon.mat-icon[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.4);\r\n}\r\np[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n    color: grey;\r\n}\r\n.localization-tab-content[_ngcontent-%COMP%]{\r\n    padding: 1rem 1rem 0 1rem;\r\n    border: solid 1px lightgrey;\r\n    border-style: none solid solid solid;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]{\r\n    padding: 1rem 1rem 0 1rem\r\n}\r\n.localization-tabs[_ngcontent-%COMP%]{\r\n    margin-bottom: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1wcmV2aWV3L25ld3MtcHJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0RBQXNEO0lBR3RELHFFQUFxRTtJQUVyRSxlQUFlO0FBQ25CO0FBQ0E7SUFFSSx1Q0FBdUM7SUFDdkMsa0RBQWtEO0FBQ3REO0FBQ0E7SUFFSSxlQUFlO0lBQ2Ysc0RBQXNEO0FBQzFEO0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7QUFFQTtJQUVJLGVBQWU7SUFDZixzREFBc0Q7QUFDMUQ7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjtBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QscUJBQXFCLENBQ2UsMkJBQTJCLENBQStQO0FBQ2xVO0FBQ0EsbUJBQW1CLFNBQVMsQ0FBd0IsY0FBYyxDQUF5UCwrR0FBMlI7QUFFdGxCO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1wcmV2aWV3L25ld3MtcHJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpZnQge1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjE1cmVtIDEuNzVyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubGlmdDpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4zMzMzMzMzMzMzcmVtKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4zMzMzMzMzMzMzcmVtKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDJyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMjUpO1xyXG59XHJcbi5saWZ0OmFjdGl2ZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4xNXJlbSAxLjc1cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcclxufVxyXG5cclxuLmxpZnQtc20ge1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjIpO1xyXG59XHJcblxyXG4ubGlmdC1zbTphY3RpdmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMik7XHJcbn1cclxuXHJcbi5jYXJkLmxpZnQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuLmNhcmQtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLmRhdGV7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcImhlbHZldGljYVwiO1xyXG59XHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnRleHQtd3JhcHtcclxuICAgIHdpZHRoOjMwcmVtO1xyXG59XHJcbm1hdC1pY29ue1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4vKiBhbmltYXRlZCBhcnJvdyAqL1xyXG4ucmVhZC1tb3Jle1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGxldHRlci1zcGFjaW5nOjAuMWVtO1xyXG4gICAgZm9udC1zaXplOjAuNzVyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJLZWxzb24gU2FucyBMaWdodFwiO1xyXG4gICAgb3BhY2l0eTowO1xyXG4gICAgd2lsbC1jaGFuZ2U6dHJhbnNmb3JtO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTJweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEycHgpOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IDAuNHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDBzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIDAuNHM7dHJhbnNpdGlvbjpvcGFjaXR5IDAuNHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDBzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIDAuNHM7dHJhbnNpdGlvbjpvcGFjaXR5IDAuNHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSksIHRyYW5zZm9ybSAwcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSAwLjRzO3RyYW5zaXRpb246b3BhY2l0eSAwLjRzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpLCB0cmFuc2Zvcm0gMHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgMC40cywgLXdlYmtpdC10cmFuc2Zvcm0gMHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgMC40c1xyXG59XHJcbmE6aG92ZXIgLnJlYWQtbW9yZXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06bm9uZTt0cmFuc2Zvcm06bm9uZTstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAwLjRzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO3RyYW5zaXRpb246b3BhY2l0eSAwLjRzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO3RyYW5zaXRpb246b3BhY2l0eSAwLjRzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpLCB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTt0cmFuc2l0aW9uOm9wYWNpdHkgMC40cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSwgdHJhbnNmb3JtIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSl9XHJcblxyXG5hIC5tYXQtaWNvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5hIC51cGRhdGUtaWNvbi5tYXQtaWNvbntcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZTtcclxufVxyXG5hIC51cGRhdGUtaWNvbi5tYXQtaWNvbjpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcclxufVxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG4ubG9jYWxpemF0aW9uLXRhYi1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDAgMXJlbTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZSBzb2xpZCBzb2xpZCBzb2xpZDtcclxufVxyXG4ubmF2LXRhYnN7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtXHJcbn1cclxuLmxvY2FsaXphdGlvbi10YWJze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4iXX0= */"] });
    return NewsPreviewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-preview',
                templateUrl: './news-preview.component.html',
                styleUrls: ['./news-preview.component.css']
            }]
    }], function () { return [{ type: _globals__WEBPACK_IMPORTED_MODULE_1__["Globals"] }, { type: _shared_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _shared_picture_service__WEBPACK_IMPORTED_MODULE_4__["PictureService"] }]; }, { authority: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], news: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/news.service */ "./src/app/shared/news.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _shared_picture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/picture.service */ "./src/app/shared/picture.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _news_preview_news_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../news-preview/news-preview.component */ "./src/app/news-preview/news-preview.component.ts");















var _c0 = function (a0) { return { "failed": a0 }; };
function NewsComponent_div_7_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "C\u00EDm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_div_7_ng_template_12_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r126.form.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tartalom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "angular-editor", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_div_7_ng_template_12_Template_angular_editor_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r128.form.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r124.form.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r124.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r124.form.content)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r124.failed))("config", ctx_r124.config);
} }
function NewsComponent_div_7_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_div_7_ng_template_16_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130); var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r129.form.title_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "angular-editor", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_div_7_ng_template_16_Template_angular_editor_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130); var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r131.form.content_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r125.form.title_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r125.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r125.form.content_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r125.failed))("config", ctx_r125.config);
} }
var _c1 = function (a0) { return { "disabled": a0 }; };
function NewsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00DAj h\u00EDr hozz\u00E1ad\u00E1sa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Magyar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NewsComponent_div_7_ng_template_12_Template, 11, 9, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Angol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NewsComponent_div_7_ng_template_16_Template, 11, 9, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "K\u00E9p (opcion\u00E1lis)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_div_7_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r132.form.file = $event; })("change", function NewsComponent_div_7_Template_input_change_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r134.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "D\u00E1tum (opcion\u00E1lis)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_div_7_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.form.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_div_7_Template_a_click_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r136.onSubmit(_r122, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Felt\u00F6lt\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r119.form.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r119.form.date)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r119.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, !_r122.form.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r119.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r119.errorMessage, " ");
} }
function NewsComponent_app_news_preview_9_Template(rf, ctx) { if (rf & 1) {
    var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-news-preview", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRemove", function NewsComponent_app_news_preview_9_Template_app_news_preview_onRemove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r138.onDeleteNews($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var news_r137 = ctx.$implicit;
    var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("news", news_r137)("authority", ctx_r120.authority);
} }
function NewsComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    var _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r140.getNews(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BUTTON.more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var NewsComponent = /** @class */ (function () {
    function NewsComponent(http, apiService, tokenStorage, pictureService, globals) {
        this.http = http;
        this.apiService = apiService;
        this.tokenStorage = tokenStorage;
        this.globals = globals;
        this.allnews = [];
        this.pageNumber = 0;
        this.isLastPage = false;
        this.form = {};
        this.failed = false;
        this.errorMessage = '';
        this.fileToUpload = null;
        this.config = {
            editable: true,
            spellcheck: true,
            height: '15rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            defaultParagraphSeparator: 'p',
            defaultFontName: 'Arial',
            toolbarHiddenButtons: [
                [
                    'textColor',
                    'backgroundColor',
                    'customClasses',
                    'link',
                    'unlink',
                    'insertImage',
                    'insertVideo',
                    'insertHorizontalRule'
                ]
            ]
        };
        this.pictureService = pictureService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.getNews();
        this.checkAuth();
    };
    NewsComponent.prototype.onSubmit = function (empForm, event) {
        event.preventDefault();
        // tslint:disable-next-line:ban-types
        var o;
        if (this.fileToUpload != null) {
            this.uploadFileToActivity();
        }
        o = {
            title_hu: this.form.title,
            content_hu: this.form.content,
            title_en: this.form.title_en,
            content_en: this.form.content_en,
            date: this.form.date ? this.form.date : null,
            picture: this.fileToUpload ? '../../assets/news/' + this.fileToUpload.name : ''
        };
        // } else {
        //   o = {
        //     title_hu: this.form.title,
        //     content_hu: this.form.content,
        //     title_en: this.form.title_en,
        //     content_en: this.form.content_en,
        //     date: this.form.date ? this.form.date : null,
        //     picture: ''
        //   };
        // }
        this.apiService.addNews(o).subscribe(function (data) {
            // console.log(data);
        });
        this.pushNews();
        this.form = empForm;
        this.form.reset();
        this.fileToUpload = null;
    };
    NewsComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    NewsComponent.prototype.uploadFileToActivity = function () {
        this.pictureService.postFile(this.fileToUpload, 'news').subscribe(function (data) {
            // do something, if upload success
        }, function (error) {
            // console.log(error);
        });
    };
    NewsComponent.prototype.checkAuth = function () {
        var _this = this;
        this.authority = undefined;
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every(function (role) {
                if (role === "ROLE_ADMIN") {
                    _this.authority = "admin";
                    return false;
                }
                _this.authority = "user";
                return true;
            });
        }
    };
    NewsComponent.prototype.onDeleteNews = function (news) {
        this.allnews = this.allnews.filter(function (rowObj) { return rowObj.id !== news.id; });
    };
    NewsComponent.prototype.getNews = function () {
        var _this = this;
        this.apiService.getNews(this.pageNumber).subscribe(function (res) {
            // tslint:disable-next-line:prefer-const
            var data = res;
            // console.log(data);
            data.content.forEach(function (element) {
                _this.allnews.push(element);
            });
            _this.pageNumber++;
            _this.isLastPage = data.last;
        }, function (err) {
            alert('get error');
        });
    };
    NewsComponent.prototype.pushNews = function () {
        var n;
        // if (this.fileToUpload == null) {
        n = {
            id: 0,
            title_hu: this.form.title,
            content_hu: this.form.content,
            title_en: this.form.title_en,
            content_en: this.form.content_en,
            date: this.form.date ? this.form.date : this.form.date,
            picture: this.fileToUpload ? '../../assets/news/' + this.fileToUpload.name : ''
        };
        // } else {
        //   n = {
        //     id: 0,
        //     date: this.form.date,
        //     title_hu: this.form.title,
        //     content_hu: this.form.content,
        //     title_en: this.form.title_en,
        //     content_en: this.form.content_en,
        //     picture: '../../assets/news/' + this.fileToUpload.name,
        //   };
        // }
        this.allnews.unshift(n);
    };
    NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_picture_service__WEBPACK_IMPORTED_MODULE_4__["PictureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globals__WEBPACK_IMPORTED_MODULE_5__["Globals"])); };
    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 14, vars: 3, consts: [[1, "news"], [1, "container", "col-12", "col-lg-10", "col-md-11", "align-items-center"], [1, "jumbotron", "col-12"], ["translate", "", 1, "title", "pb-4"], [1, "container", "col-lg-10", "col-12", "mt-5"], ["class", "card mb-5 mr-md-3 mr-lg-3 ml-md-3 ml-lg-3", "id", "news-form", 4, "ngIf"], [1, "row", "justify-content-between"], ["class", "col-lg-6 col-md-6 col-12 col-sm-12", 3, "news", "authority", "onRemove", 4, "ngFor", "ngForOf"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-", "load-more", "pt-5"], ["class", "btn", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["id", "news-form", 1, "card", "mb-5", "mr-md-3", "mr-lg-3", "ml-md-3", "ml-lg-3"], ["id", "form-title", 1, "title", "pb-3"], ["AddForm", "ngForm"], [1, "localization-tabs"], ["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", ""], ["ngbNavContent", ""], ["id", "english-tab", "ngbNavItem", ""], [1, "localization-tab-content", 3, "ngbNavOutlet"], [1, "col-md-6", "col-lg-6", "col-12", "pb-2"], [1, "form-group"], ["for", "file", 1, "col-12"], ["type", "file", "id", "file", "name", "file", 3, "ngModel", "ngModelChange", "change"], ["for", "date", 1, "col-12"], ["id", "date", "type", "text", "placeholder", "YYYY-MM-DD", "name", "date", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "row", "justify-content-end"], ["id", "submit-btn", "href", "javascript:void(0)", 1, "btn", "mr-4", 3, "ngClass", "click"], [1, "alert", "alert-danger", "mt-3", 3, "hidden"], [1, "row"], [1, "col-md-6", "col-lg-6", "col-12"], ["for", "title"], ["type", "text", "id", "title", "required", "", "name", "title", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "col-md-12", "col-lg-12", "col-12"], ["for", "content"], ["id", "content", "required", "", "name", "content", 3, "ngModel", "ngClass", "config", "ngModelChange"], ["for", "title_en"], ["type", "text", "id", "title_en", "required", "", "name", "title_en", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "content_en"], ["id", "content_en", "required", "", "name", "content_en", 3, "ngModel", "ngClass", "config", "ngModelChange"], [1, "col-lg-6", "col-md-6", "col-12", "col-sm-12", 3, "news", "authority", "onRemove"], ["href", "javascript:void(0)", 1, "btn", 3, "click"], ["translate", ""]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NEWS.news");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewsComponent_div_7_Template, 34, 11, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NewsComponent_app_news_preview_9_Template, 1, 2, "app-news-preview", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NewsComponent_a_12_Template, 3, 0, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-footer");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authority == "admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allnews);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLastPage);
        } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__["AngularEditorComponent"], _news_preview_news_preview_component__WEBPACK_IMPORTED_MODULE_13__["NewsPreviewComponent"]], styles: ["div.news[_ngcontent-%COMP%] {\r\n  background-color: #f3f4f4;\r\n}\r\n.jumbotron[_ngcontent-%COMP%] {\r\n  background: none;\r\n  margin-bottom: 0;\r\n}\r\n#news-form[_ngcontent-%COMP%]{\r\n  background: white;\r\n  background-color: white;\r\n  padding: 3%;\r\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\r\n}\r\ntextarea[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  .jumbotron[_ngcontent-%COMP%]{\r\n\r\n  }\r\n  div.container[_ngcontent-%COMP%]{\r\n    padding-left: 0px !important;\r\n    padding-right: 0px !important;\r\n    margin-top: 1rem;\r\n  }\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: grey;\r\n}\r\n.localization-tab-content[_ngcontent-%COMP%]{\r\n  padding: 1rem 1rem 0 1rem;\r\n  border: solid 1px lightgrey;\r\n  border-style: none solid solid solid;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]{\r\n  padding: 1rem 1rem 0 1rem\r\n}\r\n.localization-tabs[_ngcontent-%COMP%]{\r\n  margin-bottom: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHNEQUFzRDtBQUN4RDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRTs7RUFFQTtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLG9DQUFvQztBQUN0QztBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubmV3cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNDtcclxufVxyXG4uanVtYm90cm9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuI25ld3MtZm9ybXtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzJTtcclxuICBib3gtc2hhZG93OiAwIDAuMTVyZW0gMS43NXJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XHJcbn1cclxudGV4dGFyZWF7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuanVtYm90cm9ue1xyXG5cclxuICB9XHJcbiAgZGl2LmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuLmxvY2FsaXphdGlvbi10YWItY29udGVudHtcclxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xyXG4gIGJvcmRlcjogc29saWQgMXB4IGxpZ2h0Z3JleTtcclxuICBib3JkZXItc3R5bGU6IG5vbmUgc29saWQgc29saWQgc29saWQ7XHJcbn1cclxuLm5hdi10YWJze1xyXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW1cclxufVxyXG4ubG9jYWxpemF0aW9uLXRhYnN7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuIl19 */"] });
    return NewsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _shared_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }, { type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }, { type: _shared_picture_service__WEBPACK_IMPORTED_MODULE_4__["PictureService"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/notifications-rx/notifications-rx.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/notifications-rx/notifications-rx.component.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsRxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsRxComponent", function() { return NotificationsRxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stomp/rx-stomp */ "./node_modules/@stomp/rx-stomp/bundles/rx-stomp.umd.js");
/* harmony import */ var _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _boat_data_boat_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../boat-data/boat-data.component */ "./src/app/boat-data/boat-data.component.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");







var NotificationsRxComponent = /** @class */ (function () {
    function NotificationsRxComponent(boatDataComponent, globals) {
        this.boatDataComponent = boatDataComponent;
        this.globals = globals;
        this.notifications = [];
        this.BASE_URL = this.globals.BASE_URL;
    }
    NotificationsRxComponent.prototype.connect = function () {
        var _this = this;
        if (!this.client || this.client.connected) {
            this.client = new _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_1__["RxStomp"]();
            this.client.configure({
                webSocketFactory: function () { return new sockjs_client__WEBPACK_IMPORTED_MODULE_2__(_this.BASE_URL + '/notifications'); },
                debug: function (msg) { return console.log(msg); }
            });
            this.client.activate();
            this.watchForNotifications();
            console.info('connected!');
        }
    };
    NotificationsRxComponent.prototype.watchForNotifications = function () {
        var _this = this;
        this.client.watch('/user/notification/item')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = JSON.parse(response.body);
            _this.boatDataComponent.setGraphData(data);
            return data;
        }))
            .subscribe(function (notification) { return _this.notifications.push(notification); });
    };
    NotificationsRxComponent.prototype.disconnect = function () {
        if (this.client && this.client.connected) {
            this.client.deactivate();
            this.client = null;
            console.info("disconnected :-/");
        }
    };
    NotificationsRxComponent.prototype.startListening = function () {
        if (this.client && this.client.connected) {
            this.client.publish({ destination: '/swns/start' });
        }
    };
    NotificationsRxComponent.prototype.stopListening = function () {
        if (this.client && this.client.connected) {
            this.client.publish({ destination: '/swns/stop' });
        }
    };
    NotificationsRxComponent.ɵfac = function NotificationsRxComponent_Factory(t) { return new (t || NotificationsRxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_boat_data_boat_data_component__WEBPACK_IMPORTED_MODULE_4__["BoatDataComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globals__WEBPACK_IMPORTED_MODULE_5__["Globals"])); };
    NotificationsRxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsRxComponent, selectors: [["app-notifications-rx"]], decls: 0, vars: 0, template: function NotificationsRxComponent_Template(rf, ctx) { }, encapsulation: 2 });
    NotificationsRxComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationsRxComponent, factory: NotificationsRxComponent.ɵfac, providedIn: 'root' });
    return NotificationsRxComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsRxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notifications-rx',
                templateUrl: './notifications-rx.component.html'
            }]
    }], function () { return [{ type: _boat_data_boat_data_component__WEBPACK_IMPORTED_MODULE_4__["BoatDataComponent"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/notifications.service.ts":
/*!******************************************!*\
  !*** ./src/app/notifications.service.ts ***!
  \******************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stomp/rx-stomp */ "./node_modules/@stomp/rx-stomp/bundles/rx-stomp.umd.js");
/* harmony import */ var _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");







var NotificationsService = /** @class */ (function () {
    function NotificationsService(globals) {
        this.globals = globals;
        this.BASE_URL = this.globals.BASE_URL;
        this.dataCallback = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // Source
        this.dataCallback$ = this.dataCallback.asObservable(); // Stream
        this.activityCallback = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // Source
        this.activityCallback$ = this.activityCallback.asObservable(); // Stream
    }
    NotificationsService.prototype.connect = function () {
        var _this = this;
        if (!this.client || this.client.connected) {
            this.client = new _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_1__["RxStomp"]();
            this.client.configure({
                webSocketFactory: function () { return new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(_this.BASE_URL + '/notifications'); },
                debug: function (msg) { return console.log(msg); }
            });
            this.client.activate();
            this.watchForData();
            this.watchForActivity();
            console.info('connected!');
        }
    };
    NotificationsService.prototype.watchForData = function () {
        var _this = this;
        this.client.watch('/user/notification/data')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var data = JSON.parse(response.body);
            // this.eventCallback.next(data);
            return data;
        }))
            .subscribe(function (notification) { return _this.dataCallback.next(notification); });
    };
    NotificationsService.prototype.watchForActivity = function () {
        var _this = this;
        this.client.watch('/user/notification/activity')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var data = JSON.parse(response.body);
            // this.eventCallback.next(data);
            return data;
        })).subscribe(function (notification) { return _this.activityCallback.next(notification); });
    };
    NotificationsService.prototype.disconnect = function () {
        if (this.client && this.client.connected) {
            this.client.deactivate();
            this.client = null;
            console.info("disconnected :-/");
        }
    };
    NotificationsService.prototype.startListening = function () {
        if (this.client && this.client.connected) {
            this.client.publish({ destination: '/swns/start' });
        }
    };
    NotificationsService.prototype.stopListening = function () {
        if (this.client && this.client.connected) {
            this.client.publish({ destination: '/swns/stop' });
        }
    };
    NotificationsService.prototype.isConnected = function () {
        return this.client.connected;
    };
    NotificationsService.ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_5__["Globals"])); };
    NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationsService, factory: NotificationsService.ɵfac, providedIn: 'root' });
    return NotificationsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/achievement.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/achievement.service.ts ***!
  \***********************************************/
/*! exports provided: AchievementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementService", function() { return AchievementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");




var AchievementService = /** @class */ (function () {
    function AchievementService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.BASE_URL = this.globals.BASE_URL;
    }
    AchievementService.prototype.getAchievements = function (pageNum) {
        return this.http.get(this.BASE_URL + '/api/achievement/page/'.concat(pageNum.toString()));
    };
    AchievementService.ɵfac = function AchievementService_Factory(t) { return new (t || AchievementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
    AchievementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AchievementService, factory: AchievementService.ɵfac, providedIn: "root" });
    return AchievementService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AchievementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(["login"]);
            return false;
        }
        return true;
    };
    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
    return AuthGuardService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm5/auth0-angular-jwt.js");



var AuthService = /** @class */ (function () {
    function AuthService(jwtHelper) {
        this.jwtHelper = jwtHelper;
    } // ...
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem("token"); // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
    return AuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/news.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/news.service.ts ***!
  \****************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");




var NewsService = /** @class */ (function () {
    function NewsService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.BASE_URL = this.globals.BASE_URL + "/api";
    }
    NewsService.prototype.getNews = function (pageNum) {
        return this.http.get(this.BASE_URL + "/news/page/".concat(pageNum.toString()));
    };
    NewsService.prototype.getMainpageNews = function () {
        return this.http.get(this.BASE_URL + '/news/mainpage');
    };
    NewsService.prototype.deleteNews = function (id) {
        this.http
            .delete(this.globals.BASE_URL + '/api/news/' + id)
            .subscribe(function (data) {
            // console.log(data);
        });
    };
    NewsService.prototype.putNews = function (o) {
        this.http
            .put(this.globals.BASE_URL + '/api/news', o)
            .subscribe(function (data) {
            // console.log(data);
        });
    };
    NewsService.prototype.addNews = function (o) {
        return this.http
            .post(this.globals.BASE_URL + '/api/news', o);
    };
    NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
    NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac, providedIn: "root" });
    return NewsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/picture.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/picture.service.ts ***!
  \*******************************************/
/*! exports provided: PictureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureService", function() { return PictureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");




var PictureService = /** @class */ (function () {
    function PictureService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.BASE_URL = this.globals.BASE_URL;
    }
    PictureService.prototype.postFile = function (fileToUpload, directory) {
        var formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        formData.append('path', directory);
        return this.http.post(this.BASE_URL.concat("/api/file/uploadFile"), formData);
    };
    PictureService.prototype.postSponsorLogo = function (fileToUpload) {
        var formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        formData.append('path', 'sponsors');
        return this.http.post(this.BASE_URL.concat("/api/file/uploadFile"), formData);
    };
    PictureService.prototype.getGallery = function () {
        return (this.http.get(this.BASE_URL + "/api/gallery"));
    };
    PictureService.prototype.postGalleryPicture = function (picture) {
        return this.http.post(this.BASE_URL.concat("/api/gallery"), picture);
    };
    PictureService.prototype.deleteGalleryPicture = function (id) {
        return this.http.delete(this.BASE_URL.concat("/api/gallery/").concat(id.toString()));
    };
    PictureService.prototype.deletePicture = function (filename) {
        return this.http.delete(this.BASE_URL.concat("/deleteFile/").concat(filename));
    };
    PictureService.ɵfac = function PictureService_Factory(t) { return new (t || PictureService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
    PictureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PictureService, factory: PictureService.ɵfac, providedIn: 'root' });
    return PictureService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/session-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/session-storage.service.ts ***!
  \***************************************************/
/*! exports provided: SessionStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageService", function() { return SessionStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SessionStorageService = /** @class */ (function () {
    function SessionStorageService() {
    }
    SessionStorageService.prototype.getItem = function (key) {
        var storageData = sessionStorage.getItem(key);
        if (storageData) {
            return JSON.parse(storageData);
        }
        return null;
    };
    // tslint:disable-next-line:ban-types
    SessionStorageService.prototype.setItem = function (key, data) {
        sessionStorage.setItem(key, JSON.stringify(data));
    };
    SessionStorageService.ɵfac = function SessionStorageService_Factory(t) { return new (t || SessionStorageService)(); };
    SessionStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionStorageService, factory: SessionStorageService.ɵfac, providedIn: 'root' });
    return SessionStorageService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/solar-forecast.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/solar-forecast.service.ts ***!
  \**************************************************/
/*! exports provided: SolarForecastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarForecastService", function() { return SolarForecastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var SolarForecastService = /** @class */ (function () {
    function SolarForecastService(http) {
        this.http = http;
    }
    SolarForecastService.prototype.getCurrentSolarData = function () {
        return this.http
            .get('https://api.forecast.solar/estimate/watts/47.475498098/19.05333312/0/0/2.1');
    };
    SolarForecastService.ɵfac = function SolarForecastService_Factory(t) { return new (t || SolarForecastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    SolarForecastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SolarForecastService, factory: SolarForecastService.ɵfac, providedIn: 'root' });
    return SolarForecastService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolarForecastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/sponsor.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/sponsor.service.ts ***!
  \*******************************************/
/*! exports provided: SponsorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorService", function() { return SponsorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");




var SponsorService = /** @class */ (function () {
    function SponsorService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.BASE_URL = this.globals.BASE_URL + "/api/sponsor";
    }
    SponsorService.prototype.getSponsors = function () {
        return this.http.get(this.BASE_URL);
    };
    SponsorService.prototype.postSponsor = function (sponsor) {
        return this.http.post(this.BASE_URL, sponsor);
    };
    SponsorService.prototype.deleteSponsor = function (id) {
        return this.http.delete(this.BASE_URL.concat("/").concat(id.toString()));
    };
    SponsorService.ɵfac = function SponsorService_Factory(t) { return new (t || SponsorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
    SponsorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SponsorService, factory: SponsorService.ɵfac, providedIn: "root" });
    return SponsorService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SponsorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/team.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/team.service.ts ***!
  \****************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");




var TeamService = /** @class */ (function () {
    function TeamService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.BASE_URL = this.globals.BASE_URL + '/api';
    }
    TeamService.prototype.getTeams = function () {
        return this.http.get(this.BASE_URL + '/team');
    };
    TeamService.prototype.getMembers = function () {
        return this.http.get(this.BASE_URL + '/member');
    };
    TeamService.prototype.updateMember = function (member) {
        return this.http
            .put(this.globals.BASE_URL + '/api/member/' + member.id, member);
    };
    TeamService.prototype.addMember = function (member) {
        return this.http
            .post(this.globals.BASE_URL + '/api/member', member);
    };
    TeamService.prototype.removeMemberFromTeam = function (memberId, teamId) {
        return this.http
            .delete(this.globals.BASE_URL + '/api/team/' + teamId + '/members/' + memberId);
    };
    TeamService.prototype.deleteMember = function (memberId) {
        return this.http
            .delete(this.globals.BASE_URL + '/api/member/' + memberId);
    };
    TeamService.prototype.addMemberToTeam = function (memberId, teamId) {
        return this.http
            .post(this.globals.BASE_URL + '/api/team/' + teamId + '/members/' + memberId, null);
    };
    TeamService.prototype.updateLeaderOfTeam = function (memberId, teamId) {
        return this.http
            .put(this.globals.BASE_URL + '/api/team/' + teamId + '/leader/' + memberId, null);
    };
    TeamService.prototype.updateDescriptionOfTeam = function (teamId, texts) {
        return this.http
            .put(this.globals.BASE_URL + '/api/team/' + teamId + '/description', texts);
    };
    TeamService.prototype.updateNameOfTeam = function (teamId, texts) {
        return this.http
            .put(this.globals.BASE_URL + '/api/team/' + teamId + '/name', texts);
    };
    TeamService.ɵfac = function TeamService_Factory(t) { return new (t || TeamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
    TeamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamService, factory: TeamService.ɵfac, providedIn: 'root' });
    return TeamService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");




var UserService = /** @class */ (function () {
    function UserService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.BASE_URL = this.globals.BASE_URL + "/api/user";
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.BASE_URL);
    };
    UserService.prototype.updateUser = function (user) {
        var v = {};
        return this.http.patch(this.BASE_URL, user);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.BASE_URL.concat("/").concat(id.toString()));
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: "root" });
    return UserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sponsors/sponsors.component.ts":
/*!************************************************!*\
  !*** ./src/app/sponsors/sponsors.component.ts ***!
  \************************************************/
/*! exports provided: SponsorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function() { return SponsorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _model_sponsor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/sponsor */ "./src/app/model/sponsor.ts");
/* harmony import */ var _shared_sponsor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sponsor.service */ "./src/app/shared/sponsor.service.ts");
/* harmony import */ var _shared_picture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/picture.service */ "./src/app/shared/picture.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");











function SponsorsComponent_div_3_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r175 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", item_r175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r175, " ");
} }
var _c0 = function (a0) { return { failed: a0 }; };
var _c1 = function (a0) { return { disabled: a0 }; };
function SponsorsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00DAj szponzor hozz\u00E1ad\u00E1sa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SponsorsComponent_div_3_Template_form_ngSubmit_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177); var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r176.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "N\u00E9v");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SponsorsComponent_div_3_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177); var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r178.newSponsor.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Weblap c\u00EDm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SponsorsComponent_div_3_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177); var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r179.newSponsor.link = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "T\u00EDpus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SponsorsComponent_div_3_Template_select_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177); var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r180.newSponsor.group = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SponsorsComponent_div_3_option_19_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SponsorsComponent_div_3_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177); var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r181.newSponsor.row = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "K\u00E9p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SponsorsComponent_div_3_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177); var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r182.fileToUpload = $event; })("change", function SponsorsComponent_div_3_Template_input_change_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177); var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r183.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SponsorsComponent_div_3_Template_a_click_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177); var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r184.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Felt\u00F6lt\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r167.newSponsor.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r167.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r167.newSponsor.link)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r167.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r167.newSponsor.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r167.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r167.newSponsor.row)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx_r167.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r167.fileToUpload);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, !_r173.form.valid || ctx_r167.fileToUpload == null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r167.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r167.errorMessage, " ");
} }
function SponsorsComponent_div_10_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SponsorsComponent_div_10_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189); var sponsor_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r187.clickMethod(sponsor_r185.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SponsorsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SponsorsComponent_div_10_a_1_Template, 2, 0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sponsor_r185 = ctx.$implicit;
    var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r168.authority == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", sponsor_r185.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", sponsor_r185.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", sponsor_r185.name);
} }
function SponsorsComponent_div_16_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SponsorsComponent_div_16_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194); var sponsor_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r192.clickMethod(sponsor_r190.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SponsorsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SponsorsComponent_div_16_a_1_Template, 2, 0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sponsor_r190 = ctx.$implicit;
    var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r169.authority == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", sponsor_r190.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", sponsor_r190.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", sponsor_r190.name);
} }
function SponsorsComponent_div_22_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SponsorsComponent_div_22_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199); var sponsor_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r197.clickMethod(sponsor_r195.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SponsorsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SponsorsComponent_div_22_a_1_Template, 2, 0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sponsor_r195 = ctx.$implicit;
    var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r170.authority == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", sponsor_r195.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", sponsor_r195.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", sponsor_r195.name);
} }
function SponsorsComponent_div_28_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SponsorsComponent_div_28_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r204); var sponsor_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r202.clickMethod(sponsor_r200.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SponsorsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SponsorsComponent_div_28_a_1_Template, 2, 0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sponsor_r200 = ctx.$implicit;
    var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r171.authority == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", sponsor_r200.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", sponsor_r200.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", sponsor_r200.name);
} }
function SponsorsComponent_div_36_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SponsorsComponent_div_36_div_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); var sponsor_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r209.clickMethod(sponsor_r207.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SponsorsComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SponsorsComponent_div_36_div_1_a_1_Template, 2, 0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sponsor_r207 = ctx.$implicit;
    var ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r206.authority == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", sponsor_r207.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", sponsor_r207.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", sponsor_r207.name);
} }
function SponsorsComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SponsorsComponent_div_36_div_1_Template, 5, 4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sponsors_r205 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sponsors_r205);
} }
// import AOS from 'aos';
var SponsorsComponent = /** @class */ (function () {
    function SponsorsComponent(sponsorService, pictureService, tokenStorage) {
        this.sponsorService = sponsorService;
        this.pictureService = pictureService;
        this.tokenStorage = tokenStorage;
        this.allSponsors = [];
        this.main = [];
        this.top = [];
        this.other = [];
        this.uni = [];
        this.partner = [];
        this.bme = new _model_sponsor__WEBPACK_IMPORTED_MODULE_1__["Sponsor"]();
        this.newSponsor = new _model_sponsor__WEBPACK_IMPORTED_MODULE_1__["Sponsor"]();
        this.failed = false;
        this.fileToUpload = null;
        this.types = ["MAIN", "TOP", "OTHER", "PARTNER", "UNI"];
    }
    SponsorsComponent.prototype.ngOnInit = function () {
        // AOS.init();
        this.checkAuth();
        this.getSponsores();
    };
    SponsorsComponent.prototype.getSponsores = function () {
        var _this = this;
        this.sponsorService.getSponsors().subscribe(function (res) {
            _this.allSponsors = res;
            _this.allSponsors.forEach(function (s) { return (s.picture = "../../assets/sponsors/".concat(s.picture)); });
            _this.splitSponsores();
        }, function (err) {
            alert("get error");
        });
    };
    SponsorsComponent.prototype.splitSponsores = function () {
        this.main = this.allSponsors.filter(function (s) { return s.group == "MAIN"; });
        this.top = this.allSponsors.filter(function (s) { return s.group == "TOP"; });
        this.other = this.allSponsors.filter(function (s) { return s.group == "OTHER"; });
        this.partner = this.allSponsors.filter(function (s) { return s.group == "PARTNER"; });
        this.bme = this.allSponsors.filter(function (s) { return s.group == "UNI" && s.row == 1; })[0];
        this.uni = [];
        var _loop_1 = function (i) {
            var t = this_1.allSponsors.filter(function (s) { return s.group == "UNI" && s.row == i; });
            if (t != undefined) {
                this_1.uni.push(t);
            }
        };
        var this_1 = this;
        for (var i = 2; i < 10; i++) {
            _loop_1(i);
        }
    };
    SponsorsComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        this.sponsorService.postSponsor(this.newSponsor).subscribe(function (data) {
            _this.uploadFileToActivity();
            _this.allSponsors.push(data);
            _this.splitSponsores();
        }, function (error) {
            // console.log(error);
        });
    };
    SponsorsComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        this.newSponsor.picture = files.item(0).name;
    };
    SponsorsComponent.prototype.uploadFileToActivity = function () {
        this.pictureService.postSponsorLogo(this.fileToUpload).subscribe(function (data) {
            // do something, if upload success
        }, function (error) {
            // console.log(error);
        });
    };
    SponsorsComponent.prototype.delete = function (id) {
        var _this = this;
        this.sponsorService.deleteSponsor(id).subscribe(function (data) {
            var du = _this.allSponsors.find(function (a) { return a.id == id; });
            var index = _this.allSponsors.indexOf(du, 0);
            if (index > -1) {
                _this.allSponsors.splice(index, 1);
            }
            _this.splitSponsores();
        }, function (error) {
            // console.log(error);
        });
    };
    SponsorsComponent.prototype.clickMethod = function (id) {
        var name;
        this.allSponsors.forEach(function (t) {
            if (t.id == id)
                name = t.name;
        });
        if (confirm("Biztos, hogy törölni szeretnéd a következő szponzort: " + name + "?")) {
            this.delete(id);
        }
    };
    SponsorsComponent.prototype.checkAuth = function () {
        var _this = this;
        this.authority = undefined;
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every(function (role) {
                if (role === "ROLE_ADMIN") {
                    _this.authority = "admin";
                    return false;
                }
                _this.authority = "user";
                return true;
            });
        }
    };
    SponsorsComponent.ɵfac = function SponsorsComponent_Factory(t) { return new (t || SponsorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sponsor_service__WEBPACK_IMPORTED_MODULE_2__["SponsorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_picture_service__WEBPACK_IMPORTED_MODULE_3__["PictureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"])); };
    SponsorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SponsorsComponent, selectors: [["app-sponsors"]], decls: 38, vars: 9, consts: [[1, "d-flex", "justify-content-center", "row", "sponsorsFull", "m-0", "p-0", "col-12"], [1, "form", "col-12", "d-flex", "justify-content-center", "row", "m-0", "p-0", "sponsorsFull"], ["class", "card mb-5 mt-5 col-11 col-md-6 col-lg-6 col-sm-10", "id", "sponsor-form", 4, "ngIf"], [1, "col-12", "p-0", "m-0"], [1, "d-flex", "justify-content-center", "sponsors", "pb-5", "m-0"], [1, "title", "col-md-9", "col-11"], ["translate", "", 1, "title", "pb-5"], [1, "d-flex", "justify-content-center", "flex-wrap", "col-md-12"], ["class", "col-6 col-md-4", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "sponsors", "pb-4", "sponsorsFull"], [1, "col-md-9", "col-11"], ["translate", "", 1, "pb-5", "pt-5", "title"], ["class", "col-6 col-md-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "sponsors", "pb-4"], [1, "d-flex", "align-content-start", "flex-wrap", "col-md-12"], ["class", "col-4 col-md-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-content-center", "flex-column", "flex-wrap", "col-md-12"], ["class", "col-6 col-md-5", 4, "ngFor", "ngForOf"], ["target", "blank", 1, "col-7", "col-md-5", 3, "href"], [1, "col-12", 3, "src", "alt"], ["class", "d-flex justify-content-center flex-wrap col-md-12", 4, "ngFor", "ngForOf"], ["id", "sponsor-form", 1, "card", "mb-5", "mt-5", "col-11", "col-md-6", "col-lg-6", "col-sm-10"], [1, "title", "pb-3"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "row"], [1, "col-11", "col-md-6", "col-lg-6", "col-sm-10"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "required", "", "name", "name", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "link"], ["type", "url", "id", "link", "required", "", "name", "link", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "group"], ["name", "group", "id", "group", 1, "ml-3", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "min", "0", "step", "1", "id", "row", "name", "row", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "file"], ["type", "file", "id", "file", "name", "file", 3, "ngModel", "ngModelChange", "change"], ["href", "javascript:void(0)", 1, "btn", 3, "ngClass", "click"], [1, "alert", "alert-danger", "mt-3", 3, "hidden"], [3, "ngValue"], [1, "col-6", "col-md-4"], ["href", "javascript:void(0)", "class", "close", 3, "click", 4, "ngIf"], [1, "img-wrap"], ["target", "blank", 3, "href"], ["href", "javascript:void(0)", 1, "close", 3, "click"], [1, "col-6", "col-md-3"], [1, "col-4", "col-md-2"], [1, "col-6", "col-md-5"], ["class", "col-3 col-md-2", 4, "ngFor", "ngForOf"], [1, "col-3", "col-md-2"]], template: function SponsorsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SponsorsComponent_div_3_Template, 33, 20, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SPONSORS.main");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SponsorsComponent_div_10_Template, 5, 4, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "SPONSORS.top");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SponsorsComponent_div_16_Template, 5, 4, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SPONSORS.other");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SponsorsComponent_div_22_Template, 5, 4, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SPONSORS.partners");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SponsorsComponent_div_28_Template, 5, 4, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " SPONSORS.uni");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SponsorsComponent_div_36_Template, 2, 1, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-footer");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authority == "admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.main);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.top);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.other);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.partner);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.bme.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.bme.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.bme.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uni);
        } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"]], styles: [".sponsorsFull[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\ndiv.sponsors[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: #f3f4f4;\r\n}\r\n.sponsors[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  background: white;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n}\r\nh3.title[_ngcontent-%COMP%] {\r\n  font-family: \"KelsonSans-Light\";\r\n  letter-spacing: 5px;\r\n  text-transform: uppercase;\r\n  font-size: 1.5rem;\r\n  margin: 0;\r\n  padding-top: 5%;\r\n}\r\n.img-wrap[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  z-index: 100;\r\n  background-color: #FFF;\r\n  padding: 5px 2px 2px;\r\n  color: #000;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  opacity: .8;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  line-height: 10px;\r\n  border-radius: 50%;\r\n}\r\n.img-wrap[_ngcontent-%COMP%]:hover   .close[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transform: scale(1.05);\r\n}\r\na.delete[_ngcontent-%COMP%]{\r\n  color: black;\r\n}\r\ndiv.news[_ngcontent-%COMP%] {\r\n  background-color: #f3f4f4;\r\n}\r\n.jumbotron[_ngcontent-%COMP%] {\r\n  background: none;\r\n  margin-bottom: 0;\r\n}\r\n#sponsor-form[_ngcontent-%COMP%]{\r\n  background: white;\r\n  background-color: white;\r\n  padding: 3%;\r\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\r\n}\r\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  transition: transform .2s ease;\r\n}\r\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n  transform: scale(1.05);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvbnNvcnMvc3BvbnNvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHNEQUFzRDtBQUN4RDtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9zcG9uc29ycy9zcG9uc29ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwb25zb3JzRnVsbHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5kaXYuc3BvbnNvcnM6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY0O1xyXG59XHJcbi5zcG9uc29ycyBpbWcge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbmgzLnRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJLZWxzb25TYW5zLUxpZ2h0XCI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcbi5pbWctd3JhcCAuY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgcGFkZGluZzogNXB4IDJweCAycHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IC44O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5pbWctd3JhcDpob3ZlciAuY2xvc2Uge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5hLmRlbGV0ZXtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmRpdi5uZXdzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY0O1xyXG59XHJcbi5qdW1ib3Ryb24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4jc3BvbnNvci1mb3Jte1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDMlO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xNXJlbSAxLjc1cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xyXG59XHJcbmEgaW1nOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });
    return SponsorsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SponsorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-sponsors",
                templateUrl: "./sponsors.component.html",
                styleUrls: ["./sponsors.component.css"],
            }]
    }], function () { return [{ type: _shared_sponsor_service__WEBPACK_IMPORTED_MODULE_2__["SponsorService"] }, { type: _shared_picture_service__WEBPACK_IMPORTED_MODULE_3__["PictureService"] }, { type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




function StatisticsComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var data_r390 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r390.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r390.average);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r390.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r390.min);
} }
var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent() {
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) { return new (t || StatisticsComponent)(); };
    StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsComponent, selectors: [["app-statistics"]], inputs: { datas: "datas" }, decls: 13, vars: 1, consts: [[1, "table", "table-bordered"], ["scope", "col"], ["scope", "col", "translate", ""], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function StatisticsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "STATISTICS.average");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "STATISTICS.maximum");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "STATISTICS.minimum");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StatisticsComponent_tr_12_Template, 9, 4, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.datas);
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIn0= */"] });
    return StatisticsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statistics',
                templateUrl: './statistics.component.html',
                styleUrls: ['./statistics.component.css']
            }]
    }], function () { return []; }, { datas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/team-editgroup-panel/team-editgroup-panel.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/team-editgroup-panel/team-editgroup-panel.component.ts ***!
  \************************************************************************/
/*! exports provided: TeamEditgroupPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamEditgroupPanelComponent", function() { return TeamEditgroupPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/team.service */ "./src/app/shared/team.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");












function TeamEditgroupPanelComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r399 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", member_r399.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r399.lastName + " " + member_r399.firstName, " ");
} }
function TeamEditgroupPanelComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r401 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupPanelComponent_div_11_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r401); var ctx_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r400.leader.job_hu = $event; })("change", function TeamEditgroupPanelComponent_div_11_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r401); var ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r402.changedMember(ctx_r402.leader); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r395.leader.job_hu);
} }
function TeamEditgroupPanelComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    var _r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupPanelComponent_div_12_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r404); var ctx_r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r403.leader.job_en = $event; })("change", function TeamEditgroupPanelComponent_div_12_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r404); var ctx_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r405.changedMember(ctx_r405.leader); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r396.leader.job_en);
} }
function TeamEditgroupPanelComponent_div_15_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var memberOption_r411 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", memberOption_r411.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", memberOption_r411.lastName + " " + memberOption_r411.firstName, " ");
} }
function TeamEditgroupPanelComponent_div_15_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupPanelComponent_div_15_div_13_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r414); var member_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return member_r406.job_hu = $event; })("change", function TeamEditgroupPanelComponent_div_15_div_13_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r414); var member_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r415.changedMember(member_r406); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", member_r406.job_hu);
} }
function TeamEditgroupPanelComponent_div_15_div_14_Template(rf, ctx) { if (rf & 1) {
    var _r420 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupPanelComponent_div_15_div_14_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r420); var member_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return member_r406.job_en = $event; })("change", function TeamEditgroupPanelComponent_div_15_div_14_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r420); var member_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r421 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r421.changedMember(member_r406); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", member_r406.job_en);
} }
function TeamEditgroupPanelComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r425 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "N\u00E9v");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TeamEditgroupPanelComponent_div_15_Template_mat_select_valueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r425); var member_r406 = ctx.$implicit; return member_r406.id = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeamEditgroupPanelComponent_div_15_mat_option_9_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamEditgroupPanelComponent_div_15_Template_mat_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r425); var member_r406 = ctx.$implicit; var ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r426.deleteMemberFromTeam(member_r406.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "remove_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TeamEditgroupPanelComponent_div_15_div_13_Template, 6, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TeamEditgroupPanelComponent_div_15_div_14_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r406 = ctx.$implicit;
    var ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", member_r406.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r397.allmember);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r397.isLeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r397.isLeader);
} }
function TeamEditgroupPanelComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r427 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", member_r427.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r427.lastName + " " + member_r427.firstName, " ");
} }
var TeamEditgroupPanelComponent = /** @class */ (function () {
    function TeamEditgroupPanelComponent(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChangedLeaderOfTeam = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = null;
    }
    TeamEditgroupPanelComponent.prototype.ngOnInit = function () {
        this.getMembers();
        this.selected = this.leader.id;
    };
    TeamEditgroupPanelComponent.prototype.getMembers = function () {
        var _this = this;
        this.allmember = [];
        this.apiService.getMembers().subscribe(function (res) {
            // tslint:disable-next-line:prefer-const
            var data = res;
            data.forEach(function (element) {
                _this.allmember.push(element);
            });
        }, function (err) {
            alert('get error');
        });
    };
    TeamEditgroupPanelComponent.prototype.deleteMemberFromTeam = function (memberId) {
        var _this = this;
        this.apiService.removeMemberFromTeam(memberId, this.teamId).subscribe(function (data) {
            _this.onChange.emit(memberId);
        });
    };
    TeamEditgroupPanelComponent.prototype.addMember = function ($event) {
        var _this = this;
        this.apiService.addMemberToTeam($event.value, this.teamId).subscribe(function (data) {
            _this.onChange.emit($event.value);
        });
    };
    TeamEditgroupPanelComponent.prototype.changedMember = function (member) {
        this.apiService.updateMember(member).subscribe(function (data) {
            // this.onChange.emit($event.value);
        });
    };
    TeamEditgroupPanelComponent.prototype.changeLeader = function ($event) {
        console.log($event);
        this.onChangedLeaderOfTeam.emit($event.value);
    };
    TeamEditgroupPanelComponent.ɵfac = function TeamEditgroupPanelComponent_Factory(t) { return new (t || TeamEditgroupPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"])); };
    TeamEditgroupPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamEditgroupPanelComponent, selectors: [["app-team-editgroup-panel"]], inputs: { members: "members", leader: "leader", isLeader: "isLeader", teamId: "teamId" }, outputs: { onChange: "onChange", onChangedLeaderOfTeam: "onChangedLeaderOfTeam" }, decls: 23, vars: 6, consts: [[1, "members"], ["translate", "", 1, "section_title", "pb-2"], [1, "leader", "d-flex", "flex-row", "justify-content-between"], [1, "d-flex", "flex-column", "align-self-center"], ["appearance", "fill"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "d-flex flex-column align-self-center", 4, "ngIf"], ["class", "d-flex flex-column align-self-center pr-5", 4, "ngIf"], ["class", "members d-flex flex-row justify-content-between", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "justify-content-between"], [3, "selectionChange"], [3, "value"], ["matInput", "", "name", "job_hu", "type", "text", "placeholder", "Feladatk\u00F6r magyarul", "required", "", 3, "ngModel", "ngModelChange", "change"], [1, "d-flex", "flex-column", "align-self-center", "pr-5"], ["matInput", "", "name", "job_hu", "type", "text", "placeholder", "Feladatk\u00F6r angolul", "required", "", 3, "ngModel", "ngModelChange", "change"], [1, "members", "d-flex", "flex-row", "justify-content-between"], [3, "value", "valueChange"], [1, "d-flex", "flex-column", "align-self-center", "pl-4"], ["label", "Tag elt\u00E1vol\u00EDt\u00E1sa", 1, "add-icon", "align-self-center", 3, "click"]], template: function TeamEditgroupPanelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " TEAM.leader ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "N\u00E9v");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TeamEditgroupPanelComponent_Template_mat_select_valueChange_9_listener($event) { return ctx.leader.id = $event; })("selectionChange", function TeamEditgroupPanelComponent_Template_mat_select_selectionChange_9_listener($event) { return ctx.changeLeader($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TeamEditgroupPanelComponent_mat_option_10_Template, 2, 2, "mat-option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TeamEditgroupPanelComponent_div_11_Template, 6, 1, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TeamEditgroupPanelComponent_div_12_Template, 6, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " TEAM.members ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TeamEditgroupPanelComponent_div_15_Template, 15, 4, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00DAj tag hozz\u00E1ad\u00E1sa");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function TeamEditgroupPanelComponent_Template_mat_select_selectionChange_21_listener($event) { return ctx.addMember($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TeamEditgroupPanelComponent_mat_option_22_Template, 2, 2, "mat-option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.leader.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allmember);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLeader);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLeader);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allmember);
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: [".section_title[_ngcontent-%COMP%]{\r\n    font-family: 'Roboto Medium';\r\n    font-size: 1rem;\r\n    margin: 0;\r\n}\r\n.add-icon[_ngcontent-%COMP%] {\r\n    transform: scale(1.5);\r\n    transition: transform 0.3s ease;\r\n}\r\n.add-icon[_ngcontent-%COMP%]:hover {\r\n    transform: scale(2);\r\n    opacity:1;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1lZGl0Z3JvdXAtcGFuZWwvdGVhbS1lZGl0Z3JvdXAtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsU0FBUztBQUNiO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC90ZWFtLWVkaXRncm91cC1wYW5lbC90ZWFtLWVkaXRncm91cC1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb25fdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5hZGQtaWNvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcbi5hZGQtaWNvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });
    return TeamEditgroupPanelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamEditgroupPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-editgroup-panel',
                templateUrl: './team-editgroup-panel.component.html',
                styleUrls: ['./team-editgroup-panel.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _shared_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"] }]; }, { members: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], leader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], teamId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onChangedLeaderOfTeam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/team-editgroups/team-editgroups.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/team-editgroups/team-editgroups.component.ts ***!
  \**************************************************************/
/*! exports provided: TeamEditgroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamEditgroupsComponent", function() { return TeamEditgroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _model_team_texts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/team-texts */ "./src/app/model/team-texts.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/team.service */ "./src/app/shared/team.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _team_editgroup_panel_team_editgroup_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../team-editgroup-panel/team-editgroup-panel.component */ "./src/app/team-editgroup-panel/team-editgroup-panel.component.ts");











function TeamEditgroupsComponent_div_0_app_team_editgroup_panel_18_Template(rf, ctx) { if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-team-editgroup-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function TeamEditgroupsComponent_div_0_app_team_editgroup_panel_18_Template_app_team_editgroup_panel_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.onChange($event); })("onChangedLeaderOfTeam", function TeamEditgroupsComponent_div_0_app_team_editgroup_panel_18_Template_app_team_editgroup_panel_onChangedLeaderOfTeam_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.onChangedLeaderOfTeam($event, ctx_r49.leaders.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r46.leaders.members)("leader", ctx_r46.leaders.leader)("isLeader", true)("teamId", ctx_r46.leaders.id);
} }
var _c0 = function (a0, a1) { return { management_hu: a0, management_en: a1 }; };
function TeamEditgroupsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MEMBERS.management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.leaders.name_hu = $event; })("change", function TeamEditgroupsComponent_div_0_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.changedTeamName(ctx_r52.leaders); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_0_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.leaders.name_en = $event; })("change", function TeamEditgroupsComponent_div_0_Template_input_change_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.changedTeamName(ctx_r54.leaders); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TeamEditgroupsComponent_div_0_app_team_editgroup_panel_18_Template, 1, 4, "app-team-editgroup-panel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx_r42.leaders == null ? null : ctx_r42.leaders.name_hu, ctx_r42.leaders == null ? null : ctx_r42.leaders.name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.leaders.name_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.leaders.name_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.leaders.members);
} }
function TeamEditgroupsComponent_div_1_app_team_editgroup_panel_39_Template(rf, ctx) { if (rf & 1) {
    var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-team-editgroup-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function TeamEditgroupsComponent_div_1_app_team_editgroup_panel_39_Template_app_team_editgroup_panel_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.onChange($event); })("onChangedLeaderOfTeam", function TeamEditgroupsComponent_div_1_app_team_editgroup_panel_39_Template_app_team_editgroup_panel_onChangedLeaderOfTeam_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.onChangedLeaderOfTeam($event, ctx_r58.electronics.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r55.electronics.members)("leader", ctx_r55.electronics.leader)("teamId", ctx_r55.electronics.id);
} }
var _c1 = function (a0, a1) { return { electronic_hu: a0, electronic_en: a1 }; };
var _c2 = function (a0, a1) { return { electronic_desc_hu: a0, electronic_desc_en: a1 }; };
function TeamEditgroupsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MEMBERS.electronic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " MEMBERS.electronicDesc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_1_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.electronics.name_hu = $event; })("change", function TeamEditgroupsComponent_div_1_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.changedTeamName(ctx_r61.electronics); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_1_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.electronics.name_en = $event; })("change", function TeamEditgroupsComponent_div_1_Template_input_change_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.changedTeamName(ctx_r63.electronics); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Csapat le\u00EDr\u00E1sa magyarul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_1_Template_textarea_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.electronics.description_hu = $event; })("change", function TeamEditgroupsComponent_div_1_Template_textarea_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.changedTeamDescription(ctx_r65.electronics); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Csapat le\u00EDr\u00E1sa angolul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_1_Template_textarea_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.electronics.description_en = $event; })("change", function TeamEditgroupsComponent_div_1_Template_textarea_change_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.changedTeamDescription(ctx_r67.electronics); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, TeamEditgroupsComponent_div_1_app_team_editgroup_panel_39_Template, 1, 3, "app-team-editgroup-panel", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c1, ctx_r43.electronics == null ? null : ctx_r43.electronics.name_hu, ctx_r43.electronics == null ? null : ctx_r43.electronics.name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c2, ctx_r43.electronics.description_hu, ctx_r43.electronics.description_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.electronics.name_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.electronics.name_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.electronics.description_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.electronics.description_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.electronics.members);
} }
function TeamEditgroupsComponent_div_2_app_team_editgroup_panel_39_Template(rf, ctx) { if (rf & 1) {
    var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-team-editgroup-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function TeamEditgroupsComponent_div_2_app_team_editgroup_panel_39_Template_app_team_editgroup_panel_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r69.onChange($event); })("onChangedLeaderOfTeam", function TeamEditgroupsComponent_div_2_app_team_editgroup_panel_39_Template_app_team_editgroup_panel_onChangedLeaderOfTeam_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r71.onChangedLeaderOfTeam($event, ctx_r71.economics.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r68.economics.members)("leader", ctx_r68.economics.leader)("teamId", ctx_r68.economics.id);
} }
var _c3 = function (a0, a1) { return { economic_hu: a0, economic_en: a1 }; };
var _c4 = function (a0, a1) { return { economic_desc_hu: a0, economic_desc_en: a1 }; };
function TeamEditgroupsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MEMBERS.economic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " MEMBERS.economicDesc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_2_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.economics.name_hu = $event; })("change", function TeamEditgroupsComponent_div_2_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.changedTeamName(ctx_r74.economics); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_2_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.economics.name_en = $event; })("change", function TeamEditgroupsComponent_div_2_Template_input_change_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.changedTeamName(ctx_r76.economics); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Csapat le\u00EDr\u00E1sa magyarul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_2_Template_textarea_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.economics.description_hu = $event; })("change", function TeamEditgroupsComponent_div_2_Template_textarea_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.changedTeamDescription(ctx_r78.economics); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Csapat le\u00EDr\u00E1sa angolul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_2_Template_textarea_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.economics.description_en = $event; })("change", function TeamEditgroupsComponent_div_2_Template_textarea_change_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.changedTeamDescription(ctx_r80.economics); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, TeamEditgroupsComponent_div_2_app_team_editgroup_panel_39_Template, 1, 3, "app-team-editgroup-panel", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c3, ctx_r44.economics == null ? null : ctx_r44.economics.name_hu, ctx_r44.economics == null ? null : ctx_r44.economics.name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c4, ctx_r44.economics.description_hu, ctx_r44.economics.description_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.economics.name_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.economics.name_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.economics.description_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.economics.description_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.economics.members);
} }
function TeamEditgroupsComponent_div_3_app_team_editgroup_panel_92_Template(rf, ctx) { if (rf & 1) {
    var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-team-editgroup-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function TeamEditgroupsComponent_div_3_app_team_editgroup_panel_92_Template_app_team_editgroup_panel_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r83.onChange($event); })("onChangedLeaderOfTeam", function TeamEditgroupsComponent_div_3_app_team_editgroup_panel_92_Template_app_team_editgroup_panel_onChangedLeaderOfTeam_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r85.onChangedLeaderOfTeam($event, ctx_r85.mechatronicsMaterial.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r81.mechatronicsMaterial.members)("leader", ctx_r81.mechatronicsMaterial.leader)("teamId", ctx_r81.mechatronicsMaterial.id);
} }
function TeamEditgroupsComponent_div_3_app_team_editgroup_panel_108_Template(rf, ctx) { if (rf & 1) {
    var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-team-editgroup-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function TeamEditgroupsComponent_div_3_app_team_editgroup_panel_108_Template_app_team_editgroup_panel_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r86.onChange($event); })("onChangedLeaderOfTeam", function TeamEditgroupsComponent_div_3_app_team_editgroup_panel_108_Template_app_team_editgroup_panel_onChangedLeaderOfTeam_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r88.onChangedLeaderOfTeam($event, ctx_r88.mechatronicsSimulation.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r82.mechatronicsSimulation.members)("leader", ctx_r82.mechatronicsSimulation.leader)("teamId", ctx_r82.mechatronicsSimulation.id);
} }
var _c5 = function (a0, a1) { return { mechanical_hu: a0, mechanical_en: a1 }; };
var _c6 = function (a0, a1) { return { mechanical_desc_hu: a0, mechanical_desc_en: a1 }; };
var _c7 = function (a0, a1) { return { material_desc_hu: a0, material_desc_en: a1 }; };
var _c8 = function (a0, a1) { return { simulation_desc_hu: a0, simulation_desc_en: a1 }; };
var _c9 = function (a0, a1) { return { material_hu: a0, material_en: a1 }; };
var _c10 = function (a0, a1) { return { simulation_hu: a0, simulation_en: a1 }; };
function TeamEditgroupsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MEMBERS.mechanical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " MEMBERS.mechanicalDesc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " MEMBERS.materialDesc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " MEMBERS.simulationDesc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_3_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.mechatronics.name_hu = $event; })("change", function TeamEditgroupsComponent_div_3_Template_input_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.changedTeamName(ctx_r91.mechatronics); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_3_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.mechatronics.name_en = $event; })("change", function TeamEditgroupsComponent_div_3_Template_input_change_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.changedTeamName(ctx_r93.mechatronics); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Csapat le\u00EDr\u00E1sa magyarul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_3_Template_textarea_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.mechatronics.description_hu = $event; })("change", function TeamEditgroupsComponent_div_3_Template_textarea_change_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.changedTeamDescription(ctx_r95.mechatronics); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Csapat le\u00EDr\u00E1sa magyarul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_3_Template_textarea_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.mechatronics.description_en = $event; })("change", function TeamEditgroupsComponent_div_3_Template_textarea_change_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.changedTeamDescription(ctx_r97.mechatronics); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Csapat le\u00EDr\u00E1sa magyarul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "textarea", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_3_Template_textarea_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.mechatronicsMaterial.description_hu = $event; })("change", function TeamEditgroupsComponent_div_3_Template_textarea_change_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.changedTeamDescription(ctx_r99.mechatronicsMaterial); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Csapat le\u00EDr\u00E1sa magyarul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "textarea", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_3_Template_textarea_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.mechatronicsMaterial.description_en = $event; })("change", function TeamEditgroupsComponent_div_3_Template_textarea_change_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.changedTeamDescription(ctx_r101.mechatronicsMaterial); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Csapat le\u00EDr\u00E1sa magyarul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_3_Template_textarea_ngModelChange_66_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.mechatronicsSimulation.description_hu = $event; })("change", function TeamEditgroupsComponent_div_3_Template_textarea_change_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.changedTeamDescription(ctx_r103.mechatronicsSimulation); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Csapat le\u00EDr\u00E1sa magyarul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_3_Template_textarea_ngModelChange_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r104.mechatronicsSimulation.description_en = $event; })("change", function TeamEditgroupsComponent_div_3_Template_textarea_change_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.changedTeamDescription(ctx_r105.mechatronicsSimulation); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " MEMBERS.material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_3_Template_input_ngModelChange_83_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.mechatronicsMaterial.name_hu = $event; })("change", function TeamEditgroupsComponent_div_3_Template_input_change_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.changedTeamName(ctx_r107.mechatronicsMaterial); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_3_Template_input_ngModelChange_89_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.mechatronicsMaterial.name_en = $event; })("change", function TeamEditgroupsComponent_div_3_Template_input_change_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.changedTeamName(ctx_r109.mechatronicsMaterial); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, TeamEditgroupsComponent_div_3_app_team_editgroup_panel_92_Template, 1, 3, "app-team-editgroup-panel", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " MEMBERS.simulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_3_Template_input_ngModelChange_99_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.mechatronicsSimulation.name_hu = $event; })("change", function TeamEditgroupsComponent_div_3_Template_input_change_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.changedTeamName(ctx_r111.mechatronicsSimulation); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditgroupsComponent_div_3_Template_input_ngModelChange_105_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.mechatronicsSimulation.name_en = $event; })("change", function TeamEditgroupsComponent_div_3_Template_input_change_105_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.changedTeamName(ctx_r113.mechatronicsSimulation); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "K\u00F6telez\u0151 mez\u0151");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, TeamEditgroupsComponent_div_3_app_team_editgroup_panel_108_Template, 1, 3, "app-team-editgroup-panel", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c5, ctx_r45.mechatronics == null ? null : ctx_r45.mechatronics.name_hu, ctx_r45.mechatronics == null ? null : ctx_r45.mechatronics.name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c6, ctx_r45.mechatronics.description_hu, ctx_r45.mechatronics.description_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c7, ctx_r45.mechatronicsMaterial.description_hu, ctx_r45.mechatronicsMaterial.description_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](41, _c8, ctx_r45.mechatronicsSimulation.description_hu, ctx_r45.mechatronicsSimulation.description_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.mechatronics.name_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.mechatronics.name_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.mechatronics.description_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.mechatronics.description_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.mechatronicsMaterial.description_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.mechatronicsMaterial.description_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.mechatronicsSimulation.description_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.mechatronicsSimulation.description_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](44, _c9, ctx_r45.mechatronicsMaterial == null ? null : ctx_r45.mechatronicsMaterial.name_hu, ctx_r45.mechatronicsMaterial == null ? null : ctx_r45.mechatronicsMaterial.name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.mechatronicsMaterial.name_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.mechatronicsMaterial.name_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.mechatronicsMaterial.members);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](47, _c10, ctx_r45.mechatronicsSimulation == null ? null : ctx_r45.mechatronicsSimulation.name_hu, ctx_r45.mechatronicsSimulation == null ? null : ctx_r45.mechatronicsSimulation.name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.mechatronicsSimulation.name_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.mechatronicsSimulation.name_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.mechatronicsSimulation.members);
} }
var TeamEditgroupsComponent = /** @class */ (function () {
    function TeamEditgroupsComponent(http, apiService) {
        this.http = http;
        this.apiService = apiService;
    }
    TeamEditgroupsComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamEditgroupsComponent.prototype.getTeams = function () {
        var _this = this;
        this.apiService.getTeams().subscribe(function (res) {
            var data = res;
            data.forEach(function (element) {
                if (element.teamType === 1) {
                    _this.leaders = element;
                }
                if (element.teamType === 2) {
                    _this.electronics = element;
                }
                if (element.teamType === 3) {
                    _this.economics = element;
                }
                if (element.teamType === 4) {
                    _this.mechatronics = element;
                }
                if (element.teamType === 5) {
                    _this.mechatronicsMaterial = element;
                }
                if (element.teamType === 6) {
                    _this.mechatronicsSimulation = element;
                }
            });
        }, function (err) {
            alert('get error');
        });
    };
    TeamEditgroupsComponent.prototype.onChange = function ($event) {
        this.ngOnInit();
    };
    TeamEditgroupsComponent.prototype.onChangedLeaderOfTeam = function (memberId, teamId) {
        var _this = this;
        this.apiService.updateLeaderOfTeam(memberId, teamId).subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    TeamEditgroupsComponent.prototype.changedTeamDescription = function (team) {
        var texts = new _model_team_texts__WEBPACK_IMPORTED_MODULE_1__["TeamTexts"](team.description_hu, team.description_en);
        this.apiService.updateDescriptionOfTeam(team.id, texts).subscribe(function (data) {
        });
    };
    TeamEditgroupsComponent.prototype.changedTeamName = function (team) {
        var texts = new _model_team_texts__WEBPACK_IMPORTED_MODULE_1__["TeamTexts"](team.name_hu, team.name_en);
        this.apiService.updateNameOfTeam(team.id, texts).subscribe(function (data) {
        });
    };
    TeamEditgroupsComponent.ɵfac = function TeamEditgroupsComponent_Factory(t) { return new (t || TeamEditgroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"])); };
    TeamEditgroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamEditgroupsComponent, selectors: [["app-team-editgroups"]], decls: 4, vars: 4, consts: [["class", "team-boss ", 4, "ngIf"], ["class", "team-electr", 4, "ngIf"], ["class", "team-econ", 4, "ngIf"], ["class", "team-mech", 4, "ngIf"], [1, "team-boss"], [1, "container", "col-12", "col-sm-12", "col-lg-10", "col-md-11", "align-items-center"], [1, "jumbotron", "p-0"], ["translate", "", 1, "title", "pb-4", 3, "translateParams"], [1, "leader", "d-flex", "flex-row", "justify-content-between"], [1, "d-flex", "flex-column", "align-self-center"], ["matInput", "", "name", "name_hu", "type", "text", "placeholder", "Csapat neve magyarul", "width", "100%", "required", "", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "name", "name_en", "type", "text", "placeholder", "Csapat neve angolul", "required", "", 3, "ngModel", "ngModelChange", "change"], ["class", "col-lg-6 col-md-6 col-12 col-sm-12", 3, "members", "leader", "isLeader", "teamId", "onChange", "onChangedLeaderOfTeam", 4, "ngIf"], [1, "col-lg-6", "col-md-6", "col-12", "col-sm-12", 3, "members", "leader", "isLeader", "teamId", "onChange", "onChangedLeaderOfTeam"], [1, "team-electr"], [1, "row"], [1, "col-lg-8", "col-md-8", "col-sm-12"], ["translate", "", 1, "description", "col-", "pb-lg-4", "pb-md-4", "pb-0", 3, "translateParams"], [1, "example-full-width", 2, "width", "400px"], ["rows", "5", "cols", "40", "matInput", "", "name", "description_hu", "type", "text", "placeholder", "Csapat le\u00EDr\u00E1sa magyarul", "required", "", 3, "ngModel", "ngModelChange", "change"], ["rows", "5", "cols", "40", "matInput", "", "name", "description_hu", "type", "text", "placeholder", "Csapat le\u00EDr\u00E1sa angolul", "required", "", 3, "ngModel", "ngModelChange", "change"], ["class", "col-lg-6 col-md-6 col-12 col-sm-12", 3, "members", "leader", "teamId", "onChange", "onChangedLeaderOfTeam", 4, "ngIf"], [1, "col-lg-6", "col-md-6", "col-12", "col-sm-12", 3, "members", "leader", "teamId", "onChange", "onChangedLeaderOfTeam"], [1, "team-econ"], ["translate", "", 1, "description", "col-", 3, "translateParams"], [1, "team-mech"], ["translate", "", 1, "description", "col-", "pb-1", 3, "translateParams"], ["translate", "", 1, "description", "col-", "pt-0", 3, "translateParams"], ["rows", "5", "cols", "40", "matInput", "", "name", "description_en", "type", "text", "placeholder", "Csapat le\u00EDr\u00E1sa angolul", "required", "", 3, "ngModel", "ngModelChange", "change"], ["rows", "5", "cols", "40", "matInput", "", "name", "description_hu", "type", "text", "placeholder", "Anyagtechnol\u00F3giai alcsoport le\u00EDr\u00E1sa magyarul", "required", "", 3, "ngModel", "ngModelChange", "change"], ["rows", "5", "cols", "40", "matInput", "", "name", "description_en", "type", "text", "placeholder", "Anyagtechnol\u00F3giai alcsoport le\u00EDr\u00E1sa angolul", "required", "", 3, "ngModel", "ngModelChange", "change"], ["rows", "5", "cols", "40", "matInput", "", "name", "description_hu", "type", "text", "placeholder", "Szimul\u00E1ci\u00F3s alcsoport le\u00EDr\u00E1sa magyarul", "required", "", 3, "ngModel", "ngModelChange", "change"], ["rows", "5", "cols", "40", "matInput", "", "name", "description_en", "type", "text", "placeholder", "Szimul\u00E1ci\u00F3s alcsoport le\u00EDr\u00E1sa angolul", "required", "", 3, "ngModel", "ngModelChange", "change"], ["translate", "", 1, "title", "subtitle", "pb-lg-4", "pb-md-4", "pb-1", 3, "translateParams"]], template: function TeamEditgroupsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TeamEditgroupsComponent_div_0_Template, 19, 11, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamEditgroupsComponent_div_1_Template, 40, 17, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamEditgroupsComponent_div_2_Template, 40, 17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamEditgroupsComponent_div_3_Template, 109, 50, "div", 3);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.leaders);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.electronics);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.economics);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mechatronicsMaterial && ctx.mechatronicsSimulation);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _team_editgroup_panel_team_editgroup_panel_component__WEBPACK_IMPORTED_MODULE_9__["TeamEditgroupPanelComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"]], styles: [".jumbotron[_ngcontent-%COMP%] {\r\n    background: none;\r\n    margin-bottom: 0;\r\n    margin-left: 0;\r\n    margin-right:0;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    margin-left: 0;\r\n    margin-right:0;\r\n}\r\n.description[_ngcontent-%COMP%]{\r\n    font-family: Helvetica;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    padding-bottom: 10%;\r\n    text-align: justify;\r\n}\r\n.description.card.card-body[_ngcontent-%COMP%]{\r\n    padding-bottom: 5%;\r\n}\r\n.title.subtitle[_ngcontent-%COMP%]{\r\n    font-family: 'KelsonSans-Normal';\r\n    letter-spacing: 6px;\r\n    text-transform: uppercase;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1lZGl0Z3JvdXBzL3RlYW0tZWRpdGdyb3Vwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC90ZWFtLWVkaXRncm91cHMvdGVhbS1lZGl0Z3JvdXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uZGVzY3JpcHRpb24uY2FyZC5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbn1cclxuLnRpdGxlLnN1YnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdLZWxzb25TYW5zLU5vcm1hbCc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4iXX0= */"] });
    return TeamEditgroupsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamEditgroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-editgroups',
                templateUrl: './team-editgroups.component.html',
                styleUrls: ['./team-editgroups.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/team-editmembers/team-editmembers.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/team-editmembers/team-editmembers.component.ts ***!
  \****************************************************************/
/*! exports provided: TeamEditmembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamEditmembersComponent", function() { return TeamEditmembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/team.service */ "./src/app/shared/team.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_picture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/picture.service */ "./src/app/shared/picture.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");










function TeamEditmembersComponent_div_4_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    var member_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../assets/members/" + member_r14.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamEditmembersComponent_div_4_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", member_r14.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../assets/members/" + member_r14.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c0 = function (a0, a1) { return { member_lastName: a0, member_firstName: a1 }; };
function TeamEditmembersComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamEditmembersComponent_div_4_img_1_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamEditmembersComponent_div_4_a_2_Template, 4, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamEditmembersComponent_div_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var member_r14 = ctx.$implicit; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx_r20.openEditMemberForm(_r10, member_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MEMBERS.member_first ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " MEMBERS.member_last ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r14.linkedin === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r14.linkedin !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, member_r14.lastName, member_r14.firstName));
} }
var _c1 = function (a0) { return { "failed": a0 }; };
var _c2 = function (a0) { return { "disabled": a0 }; };
function TeamEditmembersComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Csapattag m\u00F3dos\u00EDt\u00E1sa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamEditmembersComponent_ng_template_5_Template_button_click_3_listener() { var modal_r22 = ctx.$implicit; return modal_r22.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Vezet\u00E9kn\u00E9v");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditmembersComponent_ng_template_5_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.form.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Keresztn\u00E9v");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditmembersComponent_ng_template_5_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.form.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "K\u00E9p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TeamEditmembersComponent_ng_template_5_Template_input_change_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Linkedin link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditmembersComponent_ng_template_5_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.form.linkedin = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamEditmembersComponent_ng_template_5_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.onSubmit(_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Felt\u00F6lt\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamEditmembersComponent_ng_template_5_Template_a_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.deleteMember(ctx_r31.form.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tag t\u00F6rl\u00E9se");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.form.lastName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r11.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.form.firstName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r11.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.form.linkedin)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx_r11.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, !_r23.form.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r11.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.errorMessage, " ");
} }
function TeamEditmembersComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Csapattag hozz\u00E1ad\u00E1sa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamEditmembersComponent_ng_template_7_Template_button_click_3_listener() { var modal_r32 = ctx.$implicit; return modal_r32.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Vezet\u00E9kn\u00E9v");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditmembersComponent_ng_template_7_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.form.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Keresztn\u00E9v");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditmembersComponent_ng_template_7_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.form.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "K\u00E9p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TeamEditmembersComponent_ng_template_7_Template_input_change_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Linkedin link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamEditmembersComponent_ng_template_7_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.form.linkedin = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamEditmembersComponent_ng_template_7_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.onSubmitAddForm(_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Felt\u00F6lt\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.form.lastName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r13.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.form.firstName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r13.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.form.linkedin)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx_r13.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, !_r33.form.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r13.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.errorMessage, " ");
} }
var TeamEditmembersComponent = /** @class */ (function () {
    function TeamEditmembersComponent(http, apiService, modalService, pictureService) {
        this.http = http;
        this.apiService = apiService;
        this.modalService = modalService;
        this.pictureService = pictureService;
        this.members = [];
        this.form = {};
        this.failed = false;
        this.errorMessage = '';
        this.fileToUpload = null;
    }
    TeamEditmembersComponent.prototype.ngOnInit = function () {
        this.getMembers();
    };
    TeamEditmembersComponent.prototype.getMembers = function () {
        var _this = this;
        this.members = [];
        this.apiService.getMembers().subscribe(function (res) {
            // tslint:disable-next-line:prefer-const
            var data = res;
            data.forEach(function (element) {
                _this.members.push(element);
            });
        }, function (err) {
            alert('get error');
        });
    };
    TeamEditmembersComponent.prototype.openEditMemberForm = function (content, member) {
        this.form = JSON.parse(JSON.stringify(member));
        this.modalService.open(content, { scrollable: true, centered: true, size: 'lg' });
    };
    TeamEditmembersComponent.prototype.openAddMemberForm = function (content) {
        this.form = {};
        this.modalService.open(content, { scrollable: true, centered: true, size: 'lg' });
    };
    TeamEditmembersComponent.prototype.onSubmit = function (EditForm) {
        var _this = this;
        if (this.fileToUpload) {
            this.form.picture = '../../assets/members/' + this.fileToUpload.name;
            this.uploadFileToActivity();
            this.fileToUpload = null;
        }
        this.apiService.updateMember(this.form).subscribe(function (data) {
            _this.getMembers();
        });
        this.modalService.dismissAll('put');
        this.form = null;
    };
    TeamEditmembersComponent.prototype.onSubmitAddForm = function (AddForm) {
        var _this = this;
        if (this.fileToUpload) {
            this.form.picture = '../../assets/members/' + this.fileToUpload.name;
            this.uploadFileToActivity();
            this.apiService.addMember(this.form).subscribe(function (data) {
                _this.members.push(data);
            });
            this.modalService.dismissAll('put');
            this.form = null;
            this.fileToUpload = null;
        }
    };
    TeamEditmembersComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    TeamEditmembersComponent.prototype.uploadFileToActivity = function () {
        this.pictureService.postFile(this.fileToUpload, 'members').subscribe(function (data) {
        }, function (error) {
        });
    };
    TeamEditmembersComponent.prototype.deleteMember = function (id) {
        var _this = this;
        this.apiService.deleteMember(id).subscribe(function (data) {
            console.log(data);
            _this.getMembers();
        });
        this.modalService.dismissAll('put');
        this.form = null;
    };
    TeamEditmembersComponent.ɵfac = function TeamEditmembersComponent_Factory(t) { return new (t || TeamEditmembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_picture_service__WEBPACK_IMPORTED_MODULE_4__["PictureService"])); };
    TeamEditmembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamEditmembersComponent, selectors: [["app-team-editmembers"]], decls: 9, vars: 1, consts: [[1, "d-flex", "flex-row", "mb-3", "flex-wrap", "members"], [1, "d-flex", "flex-column", "col-lg-2", "col-sm-4", "col-md-4", "col-6", "p-3", "align-self-center"], [1, "add-icon", "align-self-center", 3, "click"], ["class", "d-flex flex-column col-lg-2 col-sm-4 col-md-4 col-6 pl-3 pr-3 pt-3 mb-3", 4, "ngFor", "ngForOf"], ["EditMember", ""], ["AddMember", ""], [1, "d-flex", "flex-column", "col-lg-2", "col-sm-4", "col-md-4", "col-6", "pl-3", "pr-3", "pt-3", "mb-3"], ["class", "rounded-circle p-0 img-fluid flex-grow-0 flex-shrink-0 d-flex", 3, "src", 4, "ngIf"], ["class", "img", "target", "blank", 3, "href", 4, "ngIf"], ["translate", "", 1, "text-center", "name", 3, "translateParams", "click"], [1, "rounded-circle", "p-0", "img-fluid", "flex-grow-0", "flex-shrink-0", "d-flex", 3, "src"], ["target", "blank", 1, "img", 3, "href"], [1, "img__overlay"], [1, "fab", "fa-linkedin-in", "left"], [3, "src"], [1, "modal-header"], [1, "title", "mb-2", "mt-4"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "pb-5"], ["EditForm", "ngForm"], [1, "row"], [1, "col-md-6", "col-lg-6", "col-12"], [1, "form-group"], ["for", "lastName"], ["type", "text", "id", "lastName", "required", "", "name", "lastName", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "firstName"], ["type", "text", "id", "firstName", "required", "", "name", "firstName", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "col-md-6", "col-lg-6", "col-12", "pb-2"], ["for", "file", 1, "col-12"], ["type", "file", "id", "file", "name", "picture", 3, "change"], ["for", "linkedin", 1, "col-12"], ["id", "linkedin", "type", "text", "name", "linkedin", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "row", "justify-content-end", "pr-2"], [1, "column"], ["href", "javascript:void(0)", 1, "btn", 3, "ngClass", "click"], [1, "alert", "alert-danger", "mt-3", 3, "hidden"], ["href", "javascript:void(0)", 1, "btn", 3, "click"], ["AddForm", "ngForm"], ["for", "lastName1"], ["type", "text", "id", "lastName1", "required", "", "name", "lastName1", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "firstName1"], ["type", "text", "id", "firstName1", "required", "", "name", "firstName1", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "file", "required", "", "id", "file", "name", "picture", 3, "change"], ["for", "linkedin1", 1, "col-12"], ["id", "linkedin1", "type", "text", "name", "linkedin1", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"]], template: function TeamEditmembersComponent_Template(rf, ctx) { if (rf & 1) {
            var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamEditmembersComponent_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.openAddMemberForm(_r12); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add_circle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeamEditmembersComponent_div_4_Template, 7, 6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamEditmembersComponent_ng_template_5_Template, 41, 17, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TeamEditmembersComponent_ng_template_7_Template, 36, 17, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
        } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".flex-column[_ngcontent-%COMP%]{\r\n    min-width: 16em;\r\n}\r\n.name[_ngcontent-%COMP%]{\r\n    font-family: 'KelsonSans-Normal';\r\n    letter-spacing: 4px;\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    margin: 0;\r\n    padding-top: 5%;\r\n    padding-bottom: 5%;\r\n    line-height: 110%;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n    border-radius: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.img__overlay[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    left: 0;\r\n    opacity: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transition: opacity 0.25s;\r\n    z-index: 1;\r\n    background-color: rgba(14, 118, 168,0.4);\r\n    color: #fafafa;\r\n    font-size: 24px;\r\n}\r\n.img__overlay[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n}\r\n.add-icon[_ngcontent-%COMP%] {\r\n    transform: scale(2);\r\n    transition: transform 0.3s ease;\r\n}\r\n.add-icon[_ngcontent-%COMP%]:hover {\r\n    transform: scale(2.3);\r\n    opacity:1;\r\n    cursor: pointer;\r\n}\r\n.name[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.name[_ngcontent-%COMP%]:hover:after {\r\n    width: 100%;\r\n    left: 0;\r\n}\r\n.name[_ngcontent-%COMP%]:after {\r\n    background: none repeat scroll 0 0 transparent;\r\n    bottom: 0;\r\n    content: \"\";\r\n    display: block;\r\n    height: 2px;\r\n    left: 50%;\r\n    position: absolute;\r\n    background: #000000;\r\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\r\n    width: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1lZGl0bWVtYmVycy90ZWFtLWVkaXRtZW1iZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1AsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLE9BQU87QUFDWDtBQUNBO0lBQ0ksOENBQThDO0lBQzlDLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpREFBaUQ7SUFDakQsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvdGVhbS1lZGl0bWVtYmVycy90ZWFtLWVkaXRtZW1iZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb2x1bW57XHJcbiAgICBtaW4td2lkdGg6IDE2ZW07XHJcbn1cclxuLm5hbWV7XHJcbiAgICBmb250LWZhbWlseTogJ0tlbHNvblNhbnMtTm9ybWFsJztcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDExMCU7XHJcbn1cclxuLmltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5pbWdfX292ZXJsYXkge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDExOCwgMTY4LDAuNCk7XHJcbiAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uaW1nX19vdmVybGF5OmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuLmFkZC1pY29uIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcbi5hZGQtaWNvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuMyk7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5hbWV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5hbWU6aG92ZXI6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbi5uYW1lOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbiJdfQ== */"] });
    return TeamEditmembersComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamEditmembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-editmembers',
                templateUrl: './team-editmembers.component.html',
                styleUrls: ['./team-editmembers.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _shared_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _shared_picture_service__WEBPACK_IMPORTED_MODULE_4__["PictureService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/team-members/team-members.component.ts":
/*!********************************************************!*\
  !*** ./src/app/team-members/team-members.component.ts ***!
  \********************************************************/
/*! exports provided: TeamMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMembersComponent", function() { return TeamMembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");




function TeamMembersComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    var ctx_r377 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../assets/members/" + ctx_r377.leader.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamMembersComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r378.leader.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../assets/members/" + ctx_r378.leader.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c0 = function (a0, a1) { return { job_hu: a0, job_en: a1 }; };
function TeamMembersComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MEMBERS.job ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r379.leader.job_hu, ctx_r379.leader.job_en));
} }
function TeamMembersComponent_div_9_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    var member_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../assets/members/" + member_r381.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamMembersComponent_div_9_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", member_r381.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../assets/members/" + member_r381.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamMembersComponent_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MEMBERS.job ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, member_r381.job_hu, member_r381.job_en));
} }
var _c1 = function (a0, a1) { return { member_lastName: a0, member_firstName: a1 }; };
function TeamMembersComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamMembersComponent_div_9_img_1_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamMembersComponent_div_9_a_2_Template, 4, 2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MEMBERS.member_first ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " MEMBERS.member_last ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TeamMembersComponent_div_9_div_7_Template, 2, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r381 = ctx.$implicit;
    var i_r382 = ctx.index;
    var ctx_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("break", ctx_r380.members.length > 4 && i_r382 >= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r381.linkedin === "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r381.linkedin !== "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, member_r381.lastName, member_r381.firstName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r380.isLeader);
} }
var _c2 = function (a0, a1) { return { leader_lastName: a0, leader_firstName: a1 }; };
var TeamMembersComponent = /** @class */ (function () {
    function TeamMembersComponent() {
    }
    TeamMembersComponent.prototype.ngOnInit = function () {
        var elements = document.querySelectorAll('.animate-me');
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('animated');
                }
                else {
                    // entry.target.classList.remove('animated');
                }
            });
        });
        elements.forEach(function (el) {
            observer.observe(el);
        });
    };
    TeamMembersComponent.ɵfac = function TeamMembersComponent_Factory(t) { return new (t || TeamMembersComponent)(); };
    TeamMembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamMembersComponent, selectors: [["app-team-members"]], inputs: { members: "members", leader: "leader", isLeader: "isLeader" }, decls: 10, vars: 8, consts: [[1, "d-flex", "flex-row", "members", "mb-3", "justify-content-center", "flex-wrap"], [1, "animate-me", "fade-left", "d-flex", "flex-column", "flex-wrap", "col-lg-3", "col-6", "col-sm-4", "col-md-4", "ml-3", "mr-3", "p-md-0", "ml-md-0", "mr-md-0", "p-lg-2", "ml-lg-2", "leader", "p-md-3", "pl-lg-5", "pr-lg-4", "pb-3"], ["class", "rounded-circle p-0 img-fluid flex-grow-0 flex-shrink-0 d-flex", 3, "src", 4, "ngIf"], ["class", "img", "target", "blank", 3, "href", 4, "ngIf"], ["translate", "", 1, "text-center", "name", 3, "translateParams"], ["translate", "", "class", "text-center post pb-3", 3, "translateParams", 4, "ngIf"], ["class", "animate-me fade-right d-flex flex-column col-lg-2 col-sm-4 col-md-4 col-6 p-md-3 p-lg-2 pb-3 member justify-content-center", 3, "break", 4, "ngFor", "ngForOf"], [1, "rounded-circle", "p-0", "img-fluid", "flex-grow-0", "flex-shrink-0", "d-flex", 3, "src"], ["target", "blank", 1, "img", 3, "href"], [1, "img__overlay"], [1, "fab", "fa-linkedin-in", "left"], [3, "src"], ["translate", "", 1, "text-center", "post", "pb-3", 3, "translateParams"], [1, "animate-me", "fade-right", "d-flex", "flex-column", "col-lg-2", "col-sm-4", "col-md-4", "col-6", "p-md-3", "p-lg-2", "pb-3", "member", "justify-content-center"], ["translate", "", "class", "text-center post pb-3 ", 3, "translateParams", 4, "ngIf"]], template: function TeamMembersComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamMembersComponent_img_2_Template, 1, 1, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamMembersComponent_a_3_Template, 4, 2, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " MEMBERS.leader_first ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " MEMBERS.leader_last ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeamMembersComponent_div_8_Template, 2, 4, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeamMembersComponent_div_9_Template, 8, 9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.leader.linkedin === "string");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.leader.linkedin !== "string");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, ctx.leader.lastName, ctx.leader.firstName));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLeader);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".name[_ngcontent-%COMP%]{\r\n    font-family: 'KelsonSans-Normal';\r\n    letter-spacing: 4px;\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    margin: 0;\r\n    padding-top: 5%;\r\n    padding-bottom: 5%;\r\n    line-height: 110%;\r\n}\r\n.post[_ngcontent-%COMP%]{\r\n    font-family: 'Helvetica';\r\n    text-transform: uppercase;\r\n    font-size: 0.75rem;\r\n    margin: 0;\r\n    line-height: 100%;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n    border-radius: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.img__overlay[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    left: 0;\r\n    opacity: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transition: opacity 0.25s;\r\n    z-index: 1;\r\n    background-color: rgba(14, 118, 168,0.4);\r\n    color: #fafafa;\r\n    font-size: 24px;\r\n}\r\n.img__overlay[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n\r\n\r\n.flex-row[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    width: 100%;\r\n}\r\n.break[_ngcontent-%COMP%] { \r\n    order: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1tZW1iZXJzL3RlYW0tbWVtYmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsT0FBTztJQUNQLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLHdDQUF3QztJQUN4QyxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0EsV0FBVztBQUNYLHFCQUFxQjtBQUNyQix3QkFBd0I7QUFDeEIsSUFBSTtBQUNKO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBLFNBQVMsMkJBQTJCO0lBQ2hDLFFBQVE7QUFDWjtBQUNBLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLElBQUk7QUFDSix5REFBeUQ7QUFDekQsZ0JBQWdCO0FBQ2hCLElBQUkiLCJmaWxlIjoic3JjL2FwcC90ZWFtLW1lbWJlcnMvdGVhbS1tZW1iZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2Vsc29uU2Fucy1Ob3JtYWwnO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcclxufVxyXG4ucG9zdHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcclxufVxyXG4uaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltZyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmltZ19fb3ZlcmxheSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXM7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTE4LCAxNjgsMC40KTtcclxuICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5pbWdfX292ZXJsYXk6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4vKi5icmVhayB7Ki9cclxuLyogICAgY29udGVudDogXCJcXEFcIjsqL1xyXG4vKiAgICB3aGl0ZS1zcGFjZTogcHJlOyovXHJcbi8qfSovXHJcbi5mbGV4LXJvdzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnJlYWsgeyAvKiBvciBgOm50aC1jaGlsZChuICsgNClgICovXHJcbiAgICBvcmRlcjogMTtcclxufVxyXG4vKi5mbGV4LXJvdzo6YWZ0ZXIgeyovXHJcbi8qICAgIGNvbnRlbnQ6ICcnOyovXHJcbi8qICAgIHdpZHRoOiAxMDAlOyovXHJcbi8qfSovXHJcbi8qLmZsZXgtY29sdW1uOmxhc3QtY2hpbGQgeyAhKiBvciBgOm50aC1jaGlsZChuICsgNClgICohKi9cclxuLyogICAgb3JkZXI6IDE7Ki9cclxuLyp9Ki9cclxuIl19 */"] });
    return TeamMembersComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamMembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-members',
                templateUrl: './team-members.component.html',
                styleUrls: ['./team-members.component.css']
            }]
    }], function () { return []; }, { members: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], leader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/team-userview/team-userview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/team-userview/team-userview.component.ts ***!
  \**********************************************************/
/*! exports provided: TeamUserviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamUserviewComponent", function() { return TeamUserviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/team.service */ "./src/app/shared/team.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _team_members_team_members_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../team-members/team-members.component */ "./src/app/team-members/team-members.component.ts");







function TeamUserviewComponent_div_0_app_team_members_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-team-members", 9);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r4.leaders.members)("leader", ctx_r4.leaders.leader)("isLeader", true);
} }
var _c0 = function (a0, a1) { return { management_hu: a0, management_en: a1 }; };
function TeamUserviewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MEMBERS.management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamUserviewComponent_div_0_app_team_members_5_Template, 1, 3, "app-team-members", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r0.leaders == null ? null : ctx_r0.leaders.name_hu, ctx_r0.leaders == null ? null : ctx_r0.leaders.name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.leaders.members);
} }
function TeamUserviewComponent_div_1_app_team_members_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-team-members", 18);
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r5.electronics.members)("leader", ctx_r5.electronics.leader);
} }
var _c1 = function (a0, a1) { return { electronic_hu: a0, electronic_en: a1 }; };
var _c2 = function (a0, a1) { return { electronic_desc_hu: a0, electronic_desc_en: a1 }; };
function TeamUserviewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MEMBERS.electronic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "BUTTON.description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " MEMBERS.electronicDesc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TeamUserviewComponent_div_1_app_team_members_13_Template, 1, 2, "app-team-members", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r1.electronics == null ? null : ctx_r1.electronics.name_hu, ctx_r1.electronics == null ? null : ctx_r1.electronics.name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, ctx_r1.electronics.description_hu, ctx_r1.electronics.description_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.electronics.members);
} }
function TeamUserviewComponent_div_2_app_team_members_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-team-members", 18);
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r6.economics.members)("leader", ctx_r6.economics.leader);
} }
var _c3 = function (a0, a1) { return { economic_hu: a0, economic_en: a1 }; };
var _c4 = function (a0, a1) { return { economic_desc_hu: a0, economic_desc_en: a1 }; };
function TeamUserviewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MEMBERS.economic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "BUTTON.description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " MEMBERS.economicDesc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TeamUserviewComponent_div_2_app_team_members_13_Template, 1, 2, "app-team-members", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c3, ctx_r2.economics == null ? null : ctx_r2.economics.name_hu, ctx_r2.economics == null ? null : ctx_r2.economics.name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c4, ctx_r2.economics.description_hu, ctx_r2.economics.description_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.economics.members);
} }
function TeamUserviewComponent_div_3_app_team_members_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-team-members", 18);
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r7.mechatronicsMaterial.members)("leader", ctx_r7.mechatronicsMaterial.leader);
} }
function TeamUserviewComponent_div_3_app_team_members_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-team-members", 18);
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r8.mechatronicsSimulation.members)("leader", ctx_r8.mechatronicsSimulation.leader);
} }
var _c5 = function (a0, a1) { return { mechanical_hu: a0, mechanical_en: a1 }; };
var _c6 = function (a0, a1) { return { mechanical_desc_hu: a0, mechanical_desc_en: a1 }; };
var _c7 = function (a0, a1) { return { material_desc_hu: a0, material_desc_en: a1 }; };
var _c8 = function (a0, a1) { return { simulation_desc_hu: a0, simulation_desc_en: a1 }; };
var _c9 = function (a0, a1) { return { material_hu: a0, material_en: a1 }; };
var _c10 = function (a0, a1) { return { simulation_hu: a0, simulation_en: a1 }; };
function TeamUserviewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MEMBERS.mechanical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "BUTTON.description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " MEMBERS.mechanicalDesc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " MEMBERS.materialDesc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " MEMBERS.simulationDesc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " MEMBERS.material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TeamUserviewComponent_div_3_app_team_members_19_Template, 1, 2, "app-team-members", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " MEMBERS.simulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TeamUserviewComponent_div_3_app_team_members_22_Template, 1, 2, "app-team-members", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c5, ctx_r3.mechatronics == null ? null : ctx_r3.mechatronics.name_hu, ctx_r3.mechatronics == null ? null : ctx_r3.mechatronics.name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c6, ctx_r3.mechatronics.description_hu, ctx_r3.mechatronics.description_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c7, ctx_r3.mechatronicsMaterial.description_hu, ctx_r3.mechatronicsMaterial.description_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c8, ctx_r3.mechatronicsSimulation.description_hu, ctx_r3.mechatronicsSimulation.description_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c9, ctx_r3.mechatronicsMaterial == null ? null : ctx_r3.mechatronicsMaterial.name_hu, ctx_r3.mechatronicsMaterial == null ? null : ctx_r3.mechatronicsMaterial.name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.mechatronicsMaterial.members);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c10, ctx_r3.mechatronicsSimulation == null ? null : ctx_r3.mechatronicsSimulation.name_hu, ctx_r3.mechatronicsSimulation == null ? null : ctx_r3.mechatronicsSimulation.name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.mechatronicsSimulation.members);
} }
// import * as data from '../../assets/team/team.json';
var TeamUserviewComponent = /** @class */ (function () {
    function TeamUserviewComponent(http, apiService) {
        this.http = http;
        this.apiService = apiService;
    }
    TeamUserviewComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamUserviewComponent.prototype.getTeams = function () {
        var _this = this;
        this.apiService.getTeams().subscribe(function (res) {
            var data = res;
            data.forEach(function (element) {
                if (element.teamType === 1) {
                    _this.leaders = element;
                }
                if (element.teamType === 2) {
                    _this.electronics = element;
                }
                if (element.teamType === 3) {
                    _this.economics = element;
                }
                if (element.teamType === 4) {
                    _this.mechatronics = element;
                }
                if (element.teamType === 5) {
                    _this.mechatronicsMaterial = element;
                }
                if (element.teamType === 6) {
                    _this.mechatronicsSimulation = element;
                }
            });
        }, function (err) {
            alert('get error');
        });
        // this.leaders = data.leaders;
        // this.electronics = data.electronics;
        // this.economics = data.economics;
        // this.mechatronics = data.mechatronics;
        // this.mechatronicsMaterial = data.mechatronics_material;
        // this.mechatronicsSimulation = data.mechatronics_simulation;
    };
    TeamUserviewComponent.ɵfac = function TeamUserviewComponent_Factory(t) { return new (t || TeamUserviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"])); };
    TeamUserviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamUserviewComponent, selectors: [["app-team-userview"]], decls: 4, vars: 4, consts: [["class", "team-boss", 4, "ngIf"], ["class", "team-electr", 4, "ngIf"], ["class", "team-econ", 4, "ngIf"], ["class", "team-mech", 4, "ngIf"], [1, "team-boss"], [1, "container", "col-12", "col-sm-12", "col-lg-10", "col-md-11", "align-items-center"], [1, "jumbotron", "col-12"], ["translate", "", 1, "title", "pb-4", 3, "translateParams"], ["class", "col-lg-6 col-md-6 col-12 col-sm-12", 3, "members", "leader", "isLeader", 4, "ngIf"], [1, "col-lg-6", "col-md-6", "col-12", "col-sm-12", 3, "members", "leader", "isLeader"], [1, "team-electr"], [1, "row"], [1, "col-", "load-more", "pb-lg-5", "pb-md-5", "pb-1", "pl-3"], ["data-toggle", "collapse", "data-target", "#collapseElectr", "href", "javascript:void(0)", 1, "btn"], ["translate", ""], ["id", "collapseElectr", 1, "collapse", "col-lg-6", "col-md-6", "col-sm-12"], ["translate", "", 1, "description", "col-", "pl-lg-5", "pb-lg-4", "pb-md-4", "pb-0", 3, "translateParams"], ["class", "col-lg-6 col-md-6 col-12 col-sm-12", 3, "members", "leader", 4, "ngIf"], [1, "col-lg-6", "col-md-6", "col-12", "col-sm-12", 3, "members", "leader"], [1, "team-econ"], [1, "load-more", "pb-lg-5", "pb-md-5", "pb-1", "pl-3"], ["data-toggle", "collapse", "data-target", "#collapseEcon", "href", "javascript:void(0)", 1, "btn"], ["id", "collapseEcon", 1, "collapse", "col-lg-6", "col-md-6", "col-sm-12"], ["translate", "", 1, "description", "col-", "pl-lg-5", 3, "translateParams"], [1, "team-mech"], [1, "col-", "load-more", "pb-5", "pl-3"], ["data-toggle", "collapse", "data-target", "#collapseMech", "href", "javascript:void(0)", 1, "btn"], ["id", "collapseMech", 1, "collapse", "col-lg-6", "col-md-6", "col-sm-12"], ["translate", "", 1, "description", "col-", "pl-lg-5", "pb-1", 3, "translateParams"], ["translate", "", 1, "description", "col-", "pl-lg-5", "pt-0", 3, "translateParams"], ["translate", "", 1, "title", "subtitle", "pb-lg-4", "pb-md-4", "pb-1", 3, "translateParams"]], template: function TeamUserviewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TeamUserviewComponent_div_0_Template, 6, 5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamUserviewComponent_div_1_Template, 14, 9, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamUserviewComponent_div_2_Template, 14, 9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamUserviewComponent_div_3_Template, 23, 26, "div", 3);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.leaders);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.electronics);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.economics);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mechatronicsMaterial && ctx.mechatronicsSimulation);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], _team_members_team_members_component__WEBPACK_IMPORTED_MODULE_5__["TeamMembersComponent"]], styles: ["div.team-boss[_ngcontent-%COMP%], div.team-econ[_ngcontent-%COMP%]{\r\n    background-color: #f3f4f4;\r\n}\r\ndiv.team-electr[_ngcontent-%COMP%], div.team-mech[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n}\r\n.jumbotron[_ngcontent-%COMP%] {\r\n    background: none;\r\n    margin-bottom: 0;\r\n}\r\n.post.leader[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    line-height: 1.2rem;\r\n    font-style: italic;\r\n}\r\n.description[_ngcontent-%COMP%]{\r\n    font-family: Helvetica;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    padding-bottom: 10%;\r\n    text-align: justify;\r\n}\r\n.description.card.card-body[_ngcontent-%COMP%]{\r\n    padding-bottom: 5%;\r\n}\r\n.title.subtitle[_ngcontent-%COMP%]{\r\n    font-family: 'KelsonSans-Normal';\r\n    letter-spacing: 6px;\r\n    text-transform: uppercase;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS11c2Vydmlldy90ZWFtLXVzZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUdBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC90ZWFtLXVzZXJ2aWV3L3RlYW0tdXNlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50ZWFtLWJvc3MsIGRpdi50ZWFtLWVjb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY0O1xyXG59XHJcbmRpdi50ZWFtLWVsZWN0ciwgZGl2LnRlYW0tbWVjaHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcblxyXG4ucG9zdC5sZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4uZGVzY3JpcHRpb257XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5kZXNjcmlwdGlvbi5jYXJkLmNhcmQtYm9keXtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG4udGl0bGUuc3VidGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ0tlbHNvblNhbnMtTm9ybWFsJztcclxuICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
    return TeamUserviewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamUserviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-userview',
                templateUrl: './team-userview.component.html',
                styleUrls: ['./team-userview.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _shared_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _team_userview_team_userview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../team-userview/team-userview.component */ "./src/app/team-userview/team-userview.component.ts");
/* harmony import */ var _team_editmembers_team_editmembers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../team-editmembers/team-editmembers.component */ "./src/app/team-editmembers/team-editmembers.component.ts");
/* harmony import */ var _team_editgroups_team_editgroups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../team-editgroups/team-editgroups.component */ "./src/app/team-editgroups/team-editgroups.component.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");














function TeamComponent_app_team_userview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-team-userview");
} }
function TeamComponent_div_2_mat_tab_group_6_Template(rf, ctx) { if (rf & 1) {
    var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function TeamComponent_div_2_mat_tab_group_6_Template_mat_tab_group_selectedTabChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r117.onTabChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-team-userview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-team-editmembers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-team-editgroups");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "TEAM.userview"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "TEAM.editmembers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "TEAM.editteams"));
} }
function TeamComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TEAM.team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TeamComponent_div_2_mat_tab_group_6_Template, 10, 9, "mat-tab-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r115.authority == "admin");
} }
var TeamComponent = /** @class */ (function () {
    function TeamComponent(tokenStorage) {
        this.tokenStorage = tokenStorage;
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.checkAuth();
    };
    TeamComponent.prototype.checkAuth = function () {
        var _this = this;
        this.authority = undefined;
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every(function (role) {
                if (role === 'ROLE_ADMIN') {
                    _this.authority = 'admin';
                    return false;
                }
                _this.authority = 'user';
                return true;
            });
        }
    };
    TeamComponent.prototype.onTabChanged = function (event) {
        if (event.index === 0) {
            this.userviewComponent.ngOnInit();
        }
        if (event.index === 1) {
            this.editmembersComponent.ngOnInit();
        }
        if (event.index === 2) {
            this.editgroupsComponent.ngOnInit();
        }
    };
    TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"])); };
    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], viewQuery: function TeamComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_team_userview_team_userview_component__WEBPACK_IMPORTED_MODULE_1__["TeamUserviewComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_team_editmembers_team_editmembers_component__WEBPACK_IMPORTED_MODULE_2__["TeamEditmembersComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_team_editgroups_team_editgroups_component__WEBPACK_IMPORTED_MODULE_3__["TeamEditgroupsComponent"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userviewComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editmembersComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editgroupsComponent = _t.first);
        } }, decls: 4, vars: 2, consts: [[4, "ngIf"], ["class", "team", 4, "ngIf"], [1, "team"], [1, "container", "col-12", "col-sm-12", "col-lg-10", "col-md-11", "align-items-center"], [1, "jumbotron", "col-12"], ["translate", "", 1, "title", "pb-4"], [1, "p-3"], ["mat-align-tabs", "start", 3, "selectedTabChange", 4, "ngIf"], ["mat-align-tabs", "start", 3, "selectedTabChange"], [1, "pt-3", 3, "label"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamComponent_app_team_userview_1_Template, 1, 0, "app-team-userview", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamComponent_div_2_Template, 7, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authority != "admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authority == "admin");
        } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _team_userview_team_userview_component__WEBPACK_IMPORTED_MODULE_1__["TeamUserviewComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _team_editmembers_team_editmembers_component__WEBPACK_IMPORTED_MODULE_2__["TeamEditmembersComponent"], _team_editgroups_team_editgroups_component__WEBPACK_IMPORTED_MODULE_3__["TeamEditgroupsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["div.team[_ngcontent-%COMP%] {\r\n    background-color: #f3f4f4;\r\n}\r\n.jumbotron[_ngcontent-%COMP%] {\r\n    background: none;\r\n    margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50ZWFtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjQ7XHJcbn1cclxuLmp1bWJvdHJvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */"] });
    return TeamComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.css']
            }]
    }], function () { return [{ type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] }]; }, { userviewComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_team_userview_team_userview_component__WEBPACK_IMPORTED_MODULE_1__["TeamUserviewComponent"]]
        }], editmembersComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_team_editmembers_team_editmembers_component__WEBPACK_IMPORTED_MODULE_2__["TeamEditmembersComponent"]]
        }], editgroupsComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_team_editgroups_team_editgroups_component__WEBPACK_IMPORTED_MODULE_3__["TeamEditgroupsComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/waves/waves.component.ts":
/*!******************************************!*\
  !*** ./src/app/waves/waves.component.ts ***!
  \******************************************/
/*! exports provided: WavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WavesComponent", function() { return WavesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");



var WavesComponent = /** @class */ (function () {
    function WavesComponent() {
    }
    WavesComponent.prototype.ngOnInit = function () {
    };
    WavesComponent.ɵfac = function WavesComponent_Factory(t) { return new (t || WavesComponent)(); };
    WavesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WavesComponent, selectors: [["app-waves"]], inputs: { text: "text" }, decls: 7, vars: 1, consts: [["translate", "", 1, "text-center", "waves-title", "p-5"], [1, "wave", "wave1"], [1, "wave", "wave2"], [1, "wave", "wave3"], [1, "wave", "wave4"]], template: function WavesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"]], styles: ["*[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin:0;\r\n}\r\nsection[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width:100%;\r\n    height: 50vh;\r\n    overflow: hidden;\r\n}\r\nsection[_ngcontent-%COMP%]   .waves-title[_ngcontent-%COMP%]{\r\n    font-family: 'KelsonSans-Light';\r\n    letter-spacing: 7px;\r\n    text-transform: uppercase;\r\n    font-size: 2rem;\r\n    margin: 0;\r\n    padding-top: 10%;\r\n    line-height: 100%;\r\n}\r\nsection[_ngcontent-%COMP%]   .wave[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left:0;\r\n    bottom:0;\r\n    width:100%;\r\n    height: 100px;\r\n    background: url('wave.png');\r\n    background-size: 500px 100px;\r\n}\r\nsection[_ngcontent-%COMP%]   .wave.wave1[_ngcontent-%COMP%]\r\n{\r\n    -webkit-animation: animate1 30s linear infinite;\r\n            animation: animate1 30s linear infinite;\r\n    z-index: 100;\r\n    opacity: 0.4;\r\n    -webkit-animation-delay: 0s;\r\n            animation-delay: 0s;\r\n    bottom: 0;\r\n\r\n}\r\nsection[_ngcontent-%COMP%]   .wave.wave2[_ngcontent-%COMP%]\r\n{\r\n    -webkit-animation: animate2 20s linear infinite;\r\n            animation: animate2 20s linear infinite;\r\n    z-index: 98;\r\n    opacity: 0.5;\r\n    -webkit-animation-delay: -5s;\r\n            animation-delay: -5s;\r\n    bottom: 20px;\r\n\r\n}\r\nsection[_ngcontent-%COMP%]   .wave.wave3[_ngcontent-%COMP%]\r\n{\r\n    -webkit-animation: animate1 15s linear infinite;\r\n            animation: animate1 15s linear infinite;\r\n    z-index: 97;\r\n    opacity: 0.3;\r\n    -webkit-animation-delay: -2s;\r\n            animation-delay: -2s;\r\n    bottom: 30;\r\n\r\n}\r\nsection[_ngcontent-%COMP%]   .wave.wave4[_ngcontent-%COMP%]\r\n{\r\n    -webkit-animation: animate2 30s linear infinite;\r\n            animation: animate2 30s linear infinite;\r\n    z-index: 100;\r\n    opacity: 0.35;\r\n    -webkit-animation-delay: 0s;\r\n            animation-delay: 0s;\r\n    bottom: 15;\r\n}\r\n@-webkit-keyframes animate1{\r\n    0%{\r\n        background-position-x: 0; \r\n    }\r\n    100%{\r\n        background-position-x: 500px; \r\n    }\r\n}\r\n@keyframes animate1{\r\n    0%{\r\n        background-position-x: 0; \r\n    }\r\n    100%{\r\n        background-position-x: 500px; \r\n    }\r\n}\r\n@-webkit-keyframes animate2{\r\n    0%{\r\n        background-position-x: 0; \r\n    }\r\n    100%{\r\n        background-position-x: -500px; \r\n    }\r\n}\r\n@keyframes animate2{\r\n    0%{\r\n        background-position-x: 0; \r\n    }\r\n    100%{\r\n        background-position-x: -500px; \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F2ZXMvd2F2ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixRQUFRO0FBQ1o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixVQUFVO0lBQ1YsYUFBYTtJQUNiLDJCQUFzQztJQUN0Qyw0QkFBNEI7QUFDaEM7QUFDQTs7SUFFSSwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixZQUFZO0lBQ1osMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixTQUFTOztBQUViO0FBQ0E7O0lBRUksK0NBQXVDO1lBQXZDLHVDQUF1QztJQUN2QyxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsWUFBWTs7QUFFaEI7QUFDQTs7SUFFSSwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixVQUFVOztBQUVkO0FBQ0E7O0lBRUksK0NBQXVDO1lBQXZDLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBQ0E7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0FBQ0o7QUFQQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7QUFDSjtBQUNBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKO0FBUEE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC93YXZlcy93YXZlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG5zZWN0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuc2VjdGlvbiAud2F2ZXMtdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ0tlbHNvblNhbnMtTGlnaHQnO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDdweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbnNlY3Rpb24gLndhdmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBib3R0b206MDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy93YXZlLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwMHB4IDEwMHB4O1xyXG59XHJcbnNlY3Rpb24gLndhdmUud2F2ZTFcclxue1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlMSAzMHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICAgIGJvdHRvbTogMDtcclxuXHJcbn1cclxuc2VjdGlvbiAud2F2ZS53YXZlMlxyXG57XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGUyIDIwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB6LWluZGV4OiA5ODtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTVzO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG5cclxufVxyXG5zZWN0aW9uIC53YXZlLndhdmUzXHJcbntcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZTEgMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIHotaW5kZXg6IDk3O1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMnM7XHJcbiAgICBib3R0b206IDMwO1xyXG5cclxufVxyXG5zZWN0aW9uIC53YXZlLndhdmU0XHJcbntcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZTIgMzBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIG9wYWNpdHk6IDAuMzU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgYm90dG9tOiAxNTtcclxufVxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUxe1xyXG4gICAgMCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAwOyBcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MDBweDsgXHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBhbmltYXRlMntcclxuICAgIDAle1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMDsgXHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTUwMHB4OyBcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
    return WavesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WavesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-waves',
                templateUrl: './waves.component.html',
                styleUrls: ['./waves.component.css']
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["text"]
        }] }); })();


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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\repos\solarboat2.0\solarboat-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map