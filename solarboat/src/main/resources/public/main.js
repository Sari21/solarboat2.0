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
    var _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementComponent_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r217); var ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx_r216.openContent(_r214); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementComponent_div_5_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r217); var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r218.delete(ctx_r218.achievement.id); });
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
    var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r219.achievement.place_hu, ctx_r219.achievement.place_en));
} }
function AchievementComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AchievementComponent_a_16_div_1_Template, 2, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r213.achievement.place_hu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r213.achievement.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c1 = function (a0) { return { "failed": a0 }; };
function AchievementComponent_ng_template_17_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    var _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Helysz\u00EDn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_ng_template_15_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r226); var ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r225.form.location_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Helyez\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_ng_template_15_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r226); var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r227.form.place_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Verseny/eredm\u00E9ny neve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_ng_template_15_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r226); var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r228.form.title_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r223.form.location_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r223.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r223.form.place_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r223.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r223.form.title_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r223.failed));
} }
function AchievementComponent_ng_template_17_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    var _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_ng_template_19_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230); var ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r229.form.location_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Place ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_ng_template_19_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230); var ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r231.form.place_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title of achievement/competition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_ng_template_19_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230); var ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r232.form.title_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r224.form.location_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r224.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r224.form.place_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r224.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r224.form.title_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r224.failed));
} }
function AchievementComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    var _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "H\u00EDr m\u00F3dos\u00EDt\u00E1sa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementComponent_ng_template_17_Template_button_click_3_listener() { var modal_r220 = ctx.$implicit; return modal_r220.dismiss("Cross click"); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235); var ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r234.form.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "K\u00E9p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementComponent_ng_template_17_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235); var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r236.form.file = $event; })("change", function AchievementComponent_ng_template_17_Template_input_change_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235); var ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r237.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementComponent_ng_template_17_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235); var ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx_r238.onSubmit(_r214, ctx_r238.achievement.id); });
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
    var _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    var ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r215.form.date)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r215.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r215.form.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r215.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r215.errorMessage, " ");
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
    var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Helysz\u00EDn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_ng_template_12_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.form.location_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Helyez\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_ng_template_12_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.form.place_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Verseny/eredm\u00E9ny neve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_ng_template_12_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.form.title_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.form.location_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r42.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.form.place_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r42.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.form.title_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r42.failed));
} }
function AchievementsComponent_div_6_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_ng_template_16_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.form.location_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Place ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_ng_template_16_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.form.place_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title of achievement/competition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_ng_template_16_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.form.title_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.form.location_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r43.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.form.place_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r43.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.form.title_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r43.failed));
} }
var _c1 = function (a0) { return { "disabled": a0 }; };
function AchievementsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.form.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "K\u00E9p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AchievementsComponent_div_6_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.form.file = $event; })("change", function AchievementsComponent_div_6_Template_input_change_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementsComponent_div_6_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.onSubmit(_r40); });
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
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r37.form.date)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r37.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r37.form.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, !_r40.form.valid || ctx_r37.fileToUpload == null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r37.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r37.errorMessage, " ");
} }
function AchievementsComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-achievement", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRemove", function AchievementsComponent_li_9_Template_app_achievement_onRemove_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.onDeleteAchievement($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var achievement_r57 = ctx.$implicit;
    var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("achievement", achievement_r57)("authority", ctx_r38.authority);
} }
function AchievementsComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AchievementsComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.getAchievements(); });
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
    var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r108.errors.required);
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
    var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r110.errors.required);
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
    var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r112.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r112.errors.email);
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
    var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r114.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r114.errors.minlength);
} }
function RegisterComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Signup failed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r117.errorMessage, " ");
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
            var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r107.form.valid && ctx.onSubmit(); });
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
            var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
            var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
            var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
            var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
            var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r107.submitted && _r108.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.username);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r107.submitted && _r110.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r107.submitted && _r112.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r107.submitted && _r114.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.admin);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r107.submitted && ctx.isSignUpFailed);
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
    var role_r154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r154.name);
} }
function UsersComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_20_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156); var user_r152 = ctx.$implicit; var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx_r155.open(_r150, user_r152.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_20_Template_td_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156); var user_r152 = ctx.$implicit; var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r157.confirmDelete(user_r152.id, user_r152.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r152 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r152.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r152.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r152.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", user_r152.roles);
} }
function UsersComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    var _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Felhaszn\u00E1l\u00F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_21_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r160.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "N\u00E9v");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_ng_template_21_Template_textarea_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r162.selectedUser.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Felhaszn\u00E1l\u00F3n\u00E9v");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_ng_template_21_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r163.selectedUser.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_ng_template_21_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r164.selectedUser.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Admin?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_ng_template_21_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r165.selectedUser.isAdmin = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_21_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r166.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ment\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_21_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161); var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r167.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "M\u00E9gsem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r151.selectedUser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r151.selectedUser.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r151.selectedUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r151.selectedUser.isAdmin)("checked", ctx_r151.selectedUser.isAdmin);
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
                // console.log(u);
                u.isAdmin = false;
                u.roles.forEach(function (role) {
                    // console.log(role);
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
/* harmony import */ var _boat_data_boat_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boat-data/boat-data.component */ "./src/app/boat-data/boat-data.component.ts");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./achievements/achievements.component */ "./src/app/achievements/achievements.component.ts");
/* harmony import */ var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sponsors/sponsors.component */ "./src/app/sponsors/sponsors.component.ts");
/* harmony import */ var _admin_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/register/register.component */ "./src/app/admin/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/users/users.component */ "./src/app/admin/users/users.component.ts");














var routes = [
    { path: "gallery", component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"] },
    { path: "auth/login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: "signup", component: _admin_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: "team", component: _team_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"] },
    { path: "mainpage", component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_2__["MainpageComponent"] },
    { path: "news", component: _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"] },
    { path: "sponsors", component: _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_7__["SponsorsComponent"] },
    {
        path: "boatdata",
        component: _boat_data_boat_data_component__WEBPACK_IMPORTED_MODULE_5__["BoatDataComponent"],
    },
    { path: "achievements", component: _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_6__["AchievementsComponent"] },
    { path: "admin", redirectTo: "/auth/login" },
    { path: "users", component: _admin_users_users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"] },
    { path: "", redirectTo: "/mainpage", pathMatch: "full" },
    { path: "**", redirectTo: "/mainpage", pathMatch: "full" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: false })],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: false })],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(router, tokenStorage, translate) {
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.translate = translate;
        this.title = 'solarboat-app';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
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
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


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













































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_38__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_33__["httpInterceptorProviders"], _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__["AuthGuardService"], _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__["AuthGuardService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_35__["JwtModule"], _globals__WEBPACK_IMPORTED_MODULE_39__["Globals"],
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }], imports: [[
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                })
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
        _admin_users_users_component__WEBPACK_IMPORTED_MODULE_36__["UsersComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__["TranslateModule"]] }); })();
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
                    _admin_users_users_component__WEBPACK_IMPORTED_MODULE_36__["UsersComponent"]
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
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                        }
                    })
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                providers: [_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_33__["httpInterceptorProviders"], _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__["AuthGuardService"], _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_32__["AuthGuardService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_35__["JwtModule"], _globals__WEBPACK_IMPORTED_MODULE_39__["Globals"],
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }]
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
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm5/swimlane-ngx-charts.js");



var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
    }
    BarChartComponent.prototype.ngOnInit = function () { };
    BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
    BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], inputs: { data: "data" }, decls: 2, vars: 13, consts: [[2, "display", "inline-block"], [3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "yScaleMax"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-charts-bar-vertical", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.data.view)("scheme", ctx.data.colorScheme)("results", ctx.data.multi)("gradient", ctx.data.gradient)("xAxis", ctx.data.showXAxis)("yAxis", ctx.data.showYAxis)("legend", ctx.data.showLegend)("showXAxisLabel", ctx.data.showXAxisLabel)("showYAxisLabel", ctx.data.showYAxisLabel)("xAxisLabel", ctx.data.xAxisLabel)("yAxisLabel", ctx.data.yAxisLabel)("legend", ctx.data.legend)("yScaleMax", ctx.data.yScaleMax);
        } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__["BarVerticalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"] });
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
    BoatDataService.prototype.getLastDataGroup = function () {
        return this.http.get(this.BASE_URL);
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _boat_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boat-data.service */ "./src/app/boat-data.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bar-chart/bar-chart.component */ "./src/app/bar-chart/bar-chart.component.ts");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graph/graph.component */ "./src/app/graph/graph.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");











function BoatDataComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r32.value, " ");
} }
function BoatDataComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D6sszes let\u00F6lt\u00E9se");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Kiv\u00E1lasztott let\u00F6lt\u00E9se");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoatDataComponent_div_12_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.deleteById(ctx_r33.selectedDate.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Kiv\u00E1lasztott t\u00F6rl\u00E9se");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoatDataComponent_div_12_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.deleteAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u00D6sszes t\u00F6rl\u00E9se");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r29.BASE_URL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r29.EXPORT_URL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function BoatDataComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var error_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](error_r36.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](error_r36.message);
} }
function BoatDataComponent_app_graph_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-graph", 18);
} if (rf & 2) {
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r31.temp_soc);
} }
var BoatDataComponent = /** @class */ (function () {
    function BoatDataComponent(dataService) {
        this.dataService = dataService;
        this.dates = [];
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(10000);
        this.BASE_URL = "http://localhost:8080/api/dataGroup/export";
        this.EXPORT_URL = this.BASE_URL;
        this.show = false;
        this.showDetails = false;
    }
    BoatDataComponent.prototype.ngOnInit = function () {
        // this.subscription = this.source.subscribe((val) => this.makeGraphs());
        this.lastDataGroup();
        this.getDates();
    };
    BoatDataComponent.prototype.setShow = function () {
        if (this.show == false) {
            this.show = true;
        }
        else {
            this.show = false;
        }
    };
    BoatDataComponent.prototype.setShowDetails = function () {
        if (this.showDetails == false) {
            this.showDetails = true;
        }
        else {
            this.showDetails = false;
        }
    };
    BoatDataComponent.prototype.dateChanged = function () {
        this.EXPORT_URL = this.BASE_URL.concat("/").concat(this.selectedDate.name.toString());
        this.getDataById(this.selectedDate.name);
    };
    BoatDataComponent.prototype.getDataById = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function () {
                        var getData = _this.dataService.getDataGroupById(id);
                        _this.setGraphData(getData);
                    })];
            });
        });
    };
    BoatDataComponent.prototype.lastDataGroup = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function () {
                        var getData = _this.dataService.getLastDataGroup();
                        _this.setGraphData(getData);
                    })];
            });
        });
    };
    BoatDataComponent.prototype.getDates = function () {
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
    BoatDataComponent.prototype.deleteAll = function () {
        this.dataService.deleteAll();
        this.getDates();
    };
    BoatDataComponent.prototype.deleteById = function (id) {
        this.dataService.deleteById(id);
        this.getDates();
        this.lastDataGroup();
    };
    BoatDataComponent.prototype.setGraphData = function (getData) {
        var _this = this;
        var res;
        getData.toPromise().then(function (data) {
            res = data;
            _this.setColor(res.battery[3][res.battery[3].length - 1].value, res.battery[2][res.battery[2].length - 1].value);
            _this.tilt = {
                multi: [
                    {
                        name: "x",
                        series: res.tilt[0],
                    },
                    {
                        name: "y",
                        series: res.tilt[1],
                    },
                    {
                        name: "z",
                        series: res.tilt[2],
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
                legendTitle: "Tilt",
            };
            _this.compass = {
                multi: [
                    {
                        name: "x",
                        series: res.compass[0],
                    },
                    {
                        name: "y",
                        series: res.compass[1],
                    },
                    {
                        name: "z",
                        series: res.compass[2],
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
                legendTitle: "Compass",
            };
            _this.acceleration = {
                multi: [
                    {
                        name: "x",
                        series: res.acceleration[0],
                    },
                    {
                        name: "y",
                        series: res.acceleration[1],
                    },
                    {
                        name: "z",
                        series: res.acceleration[2],
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
                legendTitle: "Acceleration",
            };
            _this.battery = {
                multi: [
                    {
                        name: "in",
                        series: res.battery[0],
                    },
                    {
                        name: "out",
                        series: res.battery[1],
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
                legendTitle: "Battery",
            };
            _this.motor = {
                multi: [
                    {
                        name: "RpM",
                        series: res.motor[0],
                    },
                    {
                        name: "Temperature",
                        series: res.motor[1],
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
                legendTitle: "Motor",
            };
            _this.temp_soc = {
                multi: [
                    {
                        name: "SoC",
                        series: res.battery[2],
                    },
                    {
                        name: "temp",
                        series: res.battery[3],
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
                legendTitle: "Battery",
            };
            _this.soc = {
                multi: [
                    {
                        name: "SoC",
                        value: res.battery[2][res.battery[2].length - 1].value,
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
                yAxisLabel: "data",
                timeline: false,
                yScaleMax: 100,
                colorScheme: {
                    domain: _this.socColor,
                },
                legend: false,
            };
            _this.temp = {
                multi: [
                    {
                        name: "Temperature",
                        value: res.battery[3][res.battery[3].length - 1].value,
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
                    domain: _this.tempColor,
                },
                legend: false,
            };
            _this.errors = res.errors;
        });
    };
    BoatDataComponent.prototype.setColor = function (temp, soc) {
        if (temp < 60) {
            this.tempColor = ["#CDDC39"];
        }
        else {
            this.tempColor = ["#E91E63"];
        }
        if (soc < 80) {
            this.socColor = ["#CDDC39"];
        }
        else {
            this.socColor = ["#E91E63"];
        }
    };
    BoatDataComponent.ɵfac = function BoatDataComponent_Factory(t) { return new (t || BoatDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_boat_data_service__WEBPACK_IMPORTED_MODULE_3__["BoatDataService"])); };
    BoatDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BoatDataComponent, selectors: [["app-boat-data"]], inputs: { selectedDate: "selectedDate" }, outputs: { tilt: "tilt", compass: "compass", acceleration: "acceleration", battery: "battery", motor: "motor", soc: "soc", temp: "temp", temp_soc: "temp_soc", errors: "errors", dates: "dates" }, decls: 32, vars: 12, consts: [[1, "justify-content-center", "d-flex"], [1, "col-10"], [1, "input-group", "mt-5", "mb-3"], [1, "input-group-prepend"], ["for", "inputGroupSelect01", 1, "input-group-text"], [3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "btn", "mb-3", 3, "click"], ["class", "d-flex mb-3", 4, "ngIf"], ["id", " firstrow", 1, "d-flex", "flex-row", "justify-content-center"], [1, "d-inline-flex,", "flex-row"], [3, "data", "click"], ["id", "errorTable", 1, "col-5"], [1, "p-3"], [1, ""], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "flex-column"], ["class", "d-inline-flex p-5", 3, "data", 4, "ngIf"], [1, "d-inline-flex", "p-5", 3, "data"], [3, "ngValue"], [1, "d-flex", "mb-3"], [1, "btn", 3, "href"], ["href", "javascript:void(0)", 1, "btn", 3, "click"], [1, "pl-3", "pb-2"], [1, "pr-3", "pl-3", "pb-2"]], template: function BoatDataComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "D\u00E1tum");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "select", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BoatDataComponent_Template_select_ngModelChange_7_listener($event) { return ctx.selectedDate = $event; })("change", function BoatDataComponent_Template_select_change_7_listener() { return ctx.dateChanged(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BoatDataComponent_option_8_Template, 2, 2, "option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoatDataComponent_Template_a_click_9_listener() { return ctx.setShow(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Opci\u00F3k");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BoatDataComponent_div_12_Template, 13, 2, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "app-bar-chart", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoatDataComponent_Template_app_bar_chart_click_15_listener() { return ctx.setShowDetails(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "app-bar-chart", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoatDataComponent_Template_app_bar_chart_click_16_listener() { return ctx.setShowDetails(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "table", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Errors:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tbody", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, BoatDataComponent_tr_23_Template, 5, 2, "tr", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, BoatDataComponent_app_graph_25_Template, 1, 1, "app-graph", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-graph", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "app-graph", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "app-graph", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "app-graph", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "app-graph", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-footer");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dates);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.soc);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.temp);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.errors);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDetails);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.battery);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.motor);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.tilt);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.compass);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.acceleration);
        } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_7__["BarChartComponent"], _graph_graph_component__WEBPACK_IMPORTED_MODULE_8__["GraphComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["div.graph[_ngcontent-%COMP%] {\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n}\r\ndiv.jumbotron[_ngcontent-%COMP%] {\r\n  max-height: 300px;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  font-family: \"KelsonSans-Light\";\r\n  background-color: #f3f4f4;\r\n}\r\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\ntbody[_ngcontent-%COMP%] {\r\n  height: 250px;\r\n\r\n  overflow-y: auto; \r\n  overflow-x: hidden; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hdC1kYXRhL2JvYXQtZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsYUFBYTs7RUFFYixnQkFBZ0IsRUFBRSwrQkFBK0I7RUFDakQsa0JBQWtCLEVBQUUsK0JBQStCO0FBQ3JEIiwiZmlsZSI6InNyYy9hcHAvYm9hdC1kYXRhL2JvYXQtZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmdyYXBoIHtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcbmRpdi5qdW1ib3Ryb24ge1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcbnRhYmxlIHtcclxuICBmb250LWZhbWlseTogXCJLZWxzb25TYW5zLUxpZ2h0XCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNDtcclxufVxyXG50aGVhZCxcclxudGJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxudGJvZHkge1xyXG4gIGhlaWdodDogMjUwcHg7XHJcblxyXG4gIG92ZXJmbG93LXk6IGF1dG87IC8qIFRyaWdnZXIgdmVydGljYWwgc2Nyb2xsICAgICovXHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIHRoZSBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG59XHJcbiJdfQ== */"] });
    return BoatDataComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BoatDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-boat-data",
                templateUrl: "./boat-data.component.html",
                styleUrls: ["./boat-data.component.css"],
            }]
    }], function () { return [{ type: _boat_data_service__WEBPACK_IMPORTED_MODULE_3__["BoatDataService"] }]; }, { tilt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], compass: [{
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
        }], temp_soc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], errors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], selectedDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


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
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"]], styles: ["#footer {\r\n    width: 100%;\r\n    color: white;\r\n    background-color: #1B262F;\r\n}\r\n.contact {\r\n    justify-content: center;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\na, a:hover {\r\n    color: white;\r\n}\r\n.mat-icon {\r\n    transform: scale(1.3);\r\n    transition: transform 2s ease;\r\n}\r\n.mat-icon:hover {\r\n    transform: scale(1.6);\r\n    opacity: 0.7;\r\n    cursor: pointer;\r\n}\r\n#footer i.fab ,i.fa, #footer img{\r\n    transition: transform .2s ease;\r\n}\r\n#footer i.fab:hover ,i.fa:hover , #footer img:hover{\r\n    transform: scale(1.3);\r\n    opacity: 0.7;\r\n    cursor: pointer;\r\n}\r\n.links {\r\n    padding-top: 2%;\r\n}\r\n.tooltip-inner {\r\n    font-size: 1rem;\r\n    background-color: white;\r\n    color: black;\r\n    font-family: 'Helvetica';\r\n    margin-bottom: 10%;\r\n}\r\n.my-tooltip .arrow::before {\r\n    border-top-color: transparent;\r\n}\r\n/* .madeby p{\r\n    font-family: \"Kelson Sans Light\";\r\n    font-size: 0.8rem;\r\n    padding: 0;\r\n    margin:0;\r\n    opacity: 0.4;\r\n} */\r\n.footer{\r\n    width: 100%;\r\n    ovarlay: hidden;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7Ozs7OztHQU1HO0FBQ0g7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIyNjJGO1xyXG59XHJcbi5jb250YWN0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5hLCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWF0LWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzIGVhc2U7XHJcbn1cclxuLm1hdC1pY29uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS42KTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jZm9vdGVyIGkuZmFiICxpLmZhLCAjZm9vdGVyIGltZ3tcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZTtcclxufVxyXG5cclxuI2Zvb3RlciBpLmZhYjpob3ZlciAsaS5mYTpob3ZlciAsICNmb290ZXIgaW1nOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlua3Mge1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG59XHJcblxyXG4udG9vbHRpcC1pbm5lciB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG4ubXktdG9vbHRpcCAuYXJyb3c6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4vKiAubWFkZWJ5IHB7XHJcbiAgICBmb250LWZhbWlseTogXCJLZWxzb24gU2FucyBMaWdodFwiO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbn0gKi9cclxuLmZvb3RlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZhcmxheTogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuIl19 */"], encapsulation: 2 });
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
    var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GalleryComponent_div_6_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r138.newPicture.title_hu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Angol c\u00EDm - opcion\u00E1lis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GalleryComponent_div_6_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r140.newPicture.title_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nagy fot\u00F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GalleryComponent_div_6_Template_input_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r141.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Kis fot\u00F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GalleryComponent_div_6_Template_input_change_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r142.handleSmallFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_6_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r143.uploadGalleryPicture(_r137); });
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
    var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r135.newPicture.title_hu)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r135.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r135.newPicture.title_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r135.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r135.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r135.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, !ctx_r135.isEnabled(_r137.form.valid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r135.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r135.errorMessage, " ");
} }
function GalleryComponent_div_15_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_15_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148); var img_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r146.clickMethod(img_r144.id); });
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
    var img_r144 = ctx.$implicit;
    var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r136.authority == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", img_r144.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r144.smallPicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", img_r144.title_hu);
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
            // console.log("true");
            this.picturesSelected = true;
        }
    };
    GalleryComponent.prototype.handleSmallFileInput = function (files) {
        this.smallFileToUpload = files.item(0);
        this.newPicture.smallPicture = files.item(0).name;
        this.smallPic = true;
        if (this.pic && this.smallPic) {
            // console.log("true");
            this.picturesSelected = true;
        }
    };
    GalleryComponent.prototype.uploadFileToActivity = function () {
        var _this = this;
        this.pictureService.postFile(this.fileToUpload, "gallery").subscribe(function (data) {
            _this.fileToUpload = null;
            // console.log("pic");
        }, function (error) {
            // console.log(error);
        });
        this.pictureService.postFile(this.smallFileToUpload, "gallery").subscribe(function (data) {
            _this.smallFileToUpload = null;
            // console.log("sm");
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
            //console.log(res);
            _this.gallery.forEach(function (s) {
                s.picture = "./assets/gallery/".concat(s.picture);
            });
            _this.gallery.forEach(function (s) { return (s.smallPicture = "./assets/gallery/".concat(s.smallPicture)); });
        });
    };
    GalleryComponent.prototype.delete = function (id) {
        //var pic = this.gallery.find((g) => g.id == id);
        /*this.pictureService.deletePicture(pic.picture).subscribe(
          (data) => {
            // do something, if upload success
            console.log("pic");
            //this.loadGallery();
          },
          (error) => {
            console.log(error);
          }
        );
        this.pictureService.deletePicture(pic.smallPicture).subscribe(
          (data) => {
            // do something, if upload success
            console.log("smallpic");
            //this.loadGallery();
          },
          (error) => {
            console.log(error);
          }
        );
        */
        var _this = this;
        this.pictureService.deleteGalleryPicture(id).subscribe(function (data) {
            // do something, if upload success
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
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm5/swimlane-ngx-charts.js");





var GraphComponent = /** @class */ (function () {
    function GraphComponent(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    GraphComponent.prototype.ngOnInit = function () { };
    GraphComponent.ɵfac = function GraphComponent_Factory(t) { return new (t || GraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_boat_data_service__WEBPACK_IMPORTED_MODULE_2__["BoatDataService"])); };
    GraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphComponent, selectors: [["app-graph"]], inputs: { data: "data" }, decls: 1, vars: 13, consts: [[3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale", "legendTitle"]], template: function GraphComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-line-chart", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.data.view)("scheme", ctx.data.colorScheme)("results", ctx.data.multi)("gradient", ctx.data.gradient)("xAxis", ctx.data.showXAxis)("yAxis", ctx.data.showYAxis)("legend", ctx.data.showLegend)("showXAxisLabel", ctx.data.showXAxisLabel)("showYAxisLabel", ctx.data.showYAxisLabel)("xAxisLabel", ctx.data.xAxisLabel)("yAxisLabel", ctx.data.yAxisLabel)("autoScale", ctx.data.autoScale)("legendTitle", ctx.data.legendTitle);
        } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYXBoL2dyYXBoLmNvbXBvbmVudC5jc3MifQ== */"] });
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
    var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r126.errors.required);
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
    var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r128.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r128.errors.minlength);
} }
function LoginComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r130.errorMessage, " ");
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
        // console.log(this.form);
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
            var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r125.form.valid && ctx.onSubmit(); });
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
            var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
            var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
            var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.username);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r125.submitted && _r126.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r125.submitted && _r128.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r125.submitted && ctx.isLoginFailed);
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
    var news_r179 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("news", news_r179);
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
    var _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_26_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r173); var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r172.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    var _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_28_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r175); var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r174.translate.use("hu"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    var _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_29_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177); var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r176.translate.use("en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router, tokenStorage, translate) {
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.translate = translate;
        // console.log(this.router.url);
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
    var _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPreviewComponent_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187); var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx_r186.openContent(_r184, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPreviewComponent_div_2_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187); var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r188.delete(ctx_r188.news.id); });
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
    var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r181.news.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NewsPreviewComponent_ng_template_20_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r190.news.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c0 = function (a0, a1) { return { title_hu: a0, title_en: a1 }; };
var _c1 = function (a0, a1) { return { content_en: a0, content_hu: a1 }; };
function NewsPreviewComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NEWS.title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPreviewComponent_ng_template_20_Template_button_click_3_listener() { var modal_r189 = ctx.$implicit; return modal_r189.dismiss("Cross click"); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2020.03.04");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NewsPreviewComponent_ng_template_20_div_15_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r183.news.title_hu, ctx_r183.news.title_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 3, "NEWS.content", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, ctx_r183.news.content_en, ctx_r183.news.content_hu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r183.news.picture);
} }
var _c2 = function (a0) { return { "failed": a0 }; };
function NewsPreviewComponent_ng_template_22_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    var _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "C\u00EDm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsPreviewComponent_ng_template_22_ng_template_15_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r197.form.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tartalom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "angular-editor", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsPreviewComponent_ng_template_22_ng_template_15_Template_angular_editor_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r199.form.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r195.form.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r195.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r195.form.content)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r195.failed))("config", ctx_r195.config);
} }
function NewsPreviewComponent_ng_template_22_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    var _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsPreviewComponent_ng_template_22_ng_template_19_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r201); var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r200.form.title_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "angular-editor", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsPreviewComponent_ng_template_22_ng_template_19_Template_angular_editor_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r201); var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r202.form.content_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r196.form.title_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r196.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r196.form.content_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r196.failed))("config", ctx_r196.config);
} }
var _c3 = function (a0) { return { "disabled": a0 }; };
function NewsPreviewComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    var _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "H\u00EDr m\u00F3dos\u00EDt\u00E1sa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPreviewComponent_ng_template_22_Template_button_click_3_listener() { var modal_r192 = ctx.$implicit; return modal_r192.dismiss("Cross click"); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsPreviewComponent_ng_template_22_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r205); var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r204.form.file = $event; })("change", function NewsPreviewComponent_ng_template_22_Template_input_change_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r205); var ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r206.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "D\u00E1tum (opcion\u00E1lis)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsPreviewComponent_ng_template_22_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r205); var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r207.form.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPreviewComponent_ng_template_22_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r205); var _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r208.onSubmit(_r193, ctx_r208.news.id); });
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
    var _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    var _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r185.form.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r185.form.date)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r185.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, !_r193.form.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r185.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r185.errorMessage, " ");
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
        //TODO: kép törlése
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
            var _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsPreviewComponent_div_2_Template, 7, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPreviewComponent_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209); var _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.openContent(_r182, false); });
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NewsPreviewComponent_ng_template_20_Template, 16, 12, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
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
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "C\u00EDm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_div_7_ng_template_12_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.form.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tartalom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "angular-editor", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_div_7_ng_template_12_Template_angular_editor_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.form.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.form.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r10.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.form.content)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r10.failed))("config", ctx_r10.config);
} }
function NewsComponent_div_7_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_div_7_ng_template_16_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.form.title_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "angular-editor", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_div_7_ng_template_16_Template_angular_editor_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.form.content_en = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.form.title_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r11.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.form.content_en)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r11.failed))("config", ctx_r11.config);
} }
var _c1 = function (a0) { return { "disabled": a0 }; };
function NewsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_div_7_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.form.file = $event; })("change", function NewsComponent_div_7_Template_input_change_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "D\u00E1tum (opcion\u00E1lis)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_div_7_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.form.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_div_7_Template_a_click_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onSubmit(_r8, $event); });
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
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.form.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.form.date)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r5.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, !_r8.form.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r5.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.errorMessage, " ");
} }
function NewsComponent_app_news_preview_9_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-news-preview", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRemove", function NewsComponent_app_news_preview_9_Template_app_news_preview_onRemove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.onDeleteNews($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var news_r23 = ctx.$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("news", news_r23)("authority", ctx_r6.authority);
} }
function NewsComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.getNews(); });
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
        // console.log(this.form.date);
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
/* harmony import */ var _assets_team_team_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/team/team.json */ "./src/assets/team/team.json");
var _assets_team_team_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/team/team.json */ "./src/assets/team/team.json", 1);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");





var TeamService = /** @class */ (function () {
    function TeamService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.BASE_URL = this.globals.BASE_URL + "/api";
    }
    TeamService.prototype.getTeams = function () {
        //return this.http.get(this.BASE_URL + '/teams');
        return _assets_team_team_json__WEBPACK_IMPORTED_MODULE_1___namespace;
    };
    TeamService.ɵfac = function TeamService_Factory(t) { return new (t || TeamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"])); };
    TeamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamService, factory: TeamService.ɵfac, providedIn: "root" });
    return TeamService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] }]; }, null); })();


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
    var item_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", item_r70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r70, " ");
} }
var _c0 = function (a0) { return { failed: a0 }; };
var _c1 = function (a0) { return { disabled: a0 }; };
function SponsorsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00DAj szponzor hozz\u00E1ad\u00E1sa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SponsorsComponent_div_3_Template_form_ngSubmit_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "N\u00E9v");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SponsorsComponent_div_3_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.newSponsor.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Weblap c\u00EDm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SponsorsComponent_div_3_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.newSponsor.link = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "T\u00EDpus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SponsorsComponent_div_3_Template_select_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.newSponsor.group = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SponsorsComponent_div_3_option_19_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SponsorsComponent_div_3_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.newSponsor.row = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "K\u00E9p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SponsorsComponent_div_3_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.fileToUpload = $event; })("change", function SponsorsComponent_div_3_Template_input_change_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SponsorsComponent_div_3_Template_a_click_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.onSubmit($event); });
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
    var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r62.newSponsor.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r62.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r62.newSponsor.link)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r62.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r62.newSponsor.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r62.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r62.newSponsor.row)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx_r62.failed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r62.fileToUpload);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, !_r68.form.valid || ctx_r62.fileToUpload == null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r62.failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r62.errorMessage, " ");
} }
function SponsorsComponent_div_10_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SponsorsComponent_div_10_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); var sponsor_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.clickMethod(sponsor_r80.id); });
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
    var sponsor_r80 = ctx.$implicit;
    var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.authority == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", sponsor_r80.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", sponsor_r80.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", sponsor_r80.name);
} }
function SponsorsComponent_div_16_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SponsorsComponent_div_16_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); var sponsor_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.clickMethod(sponsor_r85.id); });
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
    var sponsor_r85 = ctx.$implicit;
    var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.authority == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", sponsor_r85.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", sponsor_r85.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", sponsor_r85.name);
} }
function SponsorsComponent_div_22_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SponsorsComponent_div_22_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); var sponsor_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.clickMethod(sponsor_r90.id); });
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
    var sponsor_r90 = ctx.$implicit;
    var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r65.authority == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", sponsor_r90.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", sponsor_r90.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", sponsor_r90.name);
} }
function SponsorsComponent_div_28_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SponsorsComponent_div_28_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); var sponsor_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.clickMethod(sponsor_r95.id); });
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
    var sponsor_r95 = ctx.$implicit;
    var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r66.authority == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", sponsor_r95.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", sponsor_r95.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", sponsor_r95.name);
} }
function SponsorsComponent_div_36_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SponsorsComponent_div_36_div_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); var sponsor_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r104.clickMethod(sponsor_r102.id); });
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
    var sponsor_r102 = ctx.$implicit;
    var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r101.authority == "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", sponsor_r102.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", sponsor_r102.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", sponsor_r102.name);
} }
function SponsorsComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SponsorsComponent_div_36_div_1_Template, 5, 4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sponsors_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sponsors_r100);
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
        // console.log("fileupload");
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
    var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../assets/members/" + ctx_r239.leader.picture + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamMembersComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r240.leader.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../assets/members/" + ctx_r240.leader.picture + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c0 = function (a0, a1) { return { job_hu: a0, job_en: a1 }; };
function TeamMembersComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MEMBERS.job ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r241.leader.job_hu, ctx_r241.leader.job_en));
} }
function TeamMembersComponent_div_9_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    var member_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../assets/members/" + member_r243.picture + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamMembersComponent_div_9_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", member_r243.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../assets/members/" + member_r243.picture + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TeamMembersComponent_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MEMBERS.job ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var member_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, member_r243.job_hu, member_r243.job_en));
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
    var member_r243 = ctx.$implicit;
    var ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r243.linkedin === "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r243.linkedin !== "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, member_r243.lastName, member_r243.firstName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r242.isLeader);
} }
var _c2 = function (a0, a1) { return { leader_lastName: a0, leader_firstName: a1 }; };
// import AOS from 'aos';
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
        // AOS.init();
    };
    TeamMembersComponent.ɵfac = function TeamMembersComponent_Factory(t) { return new (t || TeamMembersComponent)(); };
    TeamMembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamMembersComponent, selectors: [["app-team-members"]], inputs: { members: "members", leader: "leader", isLeader: "isLeader" }, decls: 10, vars: 8, consts: [[1, "d-flex", "flex-row", "members", "mb-3", "justify-content-center", "flex-wrap"], [1, "animate-me", "fade-left", "d-flex", "flex-column", "flex-wrap", "col-lg-3", "col-6", "col-sm-4", "col-md-4", "ml-3", "mr-3", "p-md-0", "ml-md-0", "mr-md-0", "p-lg-2", "ml-lg-2", "leader", "p-md-3", "pl-lg-5", "pr-lg-4", "pb-3"], ["class", "rounded-circle p-0 img-fluid flex-grow-0 flex-shrink-0 d-flex", 3, "src", 4, "ngIf"], ["class", "img", "target", "blank", 3, "href", 4, "ngIf"], ["translate", "", 1, "text-center", "name", 3, "translateParams"], ["translate", "", "class", "text-center post pb-3", 3, "translateParams", 4, "ngIf"], ["class", "animate-me fade-right d-flex flex-column col-lg-2 col-sm-4 col-md-4 col-6 p-md-3 p-lg-2 pb-3 member justify-content-center", 4, "ngFor", "ngForOf"], [1, "rounded-circle", "p-0", "img-fluid", "flex-grow-0", "flex-shrink-0", "d-flex", 3, "src"], ["target", "blank", 1, "img", 3, "href"], [1, "img__overlay"], [1, "fab", "fa-linkedin-in", "left"], [3, "src"], ["translate", "", 1, "text-center", "post", "pb-3", 3, "translateParams"], [1, "animate-me", "fade-right", "d-flex", "flex-column", "col-lg-2", "col-sm-4", "col-md-4", "col-6", "p-md-3", "p-lg-2", "pb-3", "member", "justify-content-center"], ["translate", "", "class", "text-center post pb-3 ", 3, "translateParams", 4, "ngIf"]], template: function TeamMembersComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeamMembersComponent_div_9_Template, 8, 7, "div", 6);
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
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".name[_ngcontent-%COMP%]{\r\n    font-family: 'KelsonSans-Normal';\r\n    letter-spacing: 4px;\r\n    text-transform: uppercase;\r\n    font-size: 1rem;\r\n    margin: 0;\r\n    padding-top: 5%;\r\n    padding-bottom: 5%;\r\n    line-height: 110%;\r\n}\r\n.post[_ngcontent-%COMP%]{\r\n    font-family: 'Helvetica';\r\n    text-transform: uppercase;\r\n    font-size: 0.75rem;\r\n    margin: 0;\r\n    line-height: 100%;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n    border-radius: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.img__overlay[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    left: 0;\r\n    opacity: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transition: opacity 0.25s;\r\n    z-index: 1;\r\n    background-color: rgba(14, 118, 168,0.4);\r\n    color: #fafafa;\r\n    font-size: 24px;\r\n}\r\n.img__overlay[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1tZW1iZXJzL3RlYW0tbWVtYmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsT0FBTztJQUNQLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLHdDQUF3QztJQUN4QyxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdGVhbS1tZW1iZXJzL3RlYW0tbWVtYmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWV7XHJcbiAgICBmb250LWZhbWlseTogJ0tlbHNvblNhbnMtTm9ybWFsJztcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDExMCU7XHJcbn1cclxuLnBvc3R7XHJcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSc7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5pbWdfX292ZXJsYXkge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDExOCwgMTY4LDAuNCk7XHJcbiAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uaW1nX19vdmVybGF5OmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiJdfQ== */"] });
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
/* harmony import */ var _assets_team_team_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/team/team.json */ "./src/assets/team/team.json");
var _assets_team_team_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/team/team.json */ "./src/assets/team/team.json", 1);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/team.service */ "./src/app/shared/team.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _team_members_team_members_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../team-members/team-members.component */ "./src/app/team-members/team-members.component.ts");










function TeamComponent_app_team_members_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-team-members", 25);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r0.leaders.members)("leader", ctx_r0.leaders.leader)("isLeader", true);
} }
function TeamComponent_app_team_members_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-team-members", 26);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r1.electronics.members)("leader", ctx_r1.electronics.leader);
} }
function TeamComponent_app_team_members_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-team-members", 26);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r2.economics.members)("leader", ctx_r2.economics.leader);
} }
function TeamComponent_app_team_members_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-team-members", 26);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r3.mechatronicsMaterial.members)("leader", ctx_r3.mechatronicsMaterial.leader);
} }
function TeamComponent_app_team_members_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-team-members", 26);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("members", ctx_r4.mechatronicsSimulation.members)("leader", ctx_r4.mechatronicsSimulation.leader);
} }
var _c0 = function (a0, a1) { return { management_hu: a0, management_en: a1 }; };
var _c1 = function (a0, a1) { return { electronic_hu: a0, electronic_en: a1 }; };
var _c2 = function (a0, a1) { return { electronic_desc_hu: a0, electronic_desc_en: a1 }; };
var _c3 = function (a0, a1) { return { economic_hu: a0, economic_en: a1 }; };
var _c4 = function (a0, a1) { return { economic_desc_hu: a0, economic_desc_en: a1 }; };
var _c5 = function (a0, a1) { return { mechanical_hu: a0, mechanical_en: a1 }; };
var _c6 = function (a0, a1) { return { mechanical_desc_hu: a0, mechanical_desc_en: a1 }; };
var _c7 = function (a0, a1) { return { material_desc_hu: a0, material_desc_en: a1 }; };
var _c8 = function (a0, a1) { return { simulation_desc_hu: a0, simulation_desc_en: a1 }; };
var _c9 = function (a0, a1) { return { material_hu: a0, material_en: a1 }; };
var _c10 = function (a0, a1) { return { simulation_hu: a0, simulation_en: a1 }; };
var TeamComponent = /** @class */ (function () {
    function TeamComponent(http, apiService) {
        this.http = http;
        this.apiService = apiService;
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.getTeams();
        // this.leaders = this.teams[0];
        //this.elektronics = this.teams[1];
    };
    TeamComponent.prototype.getTeams = function () {
        //var data = this.apiService.getTeams();
        /* this.apiService.getTeams().subscribe(
             (res) => {
               var data: any = res;
              // console.log(data);
               <Team[]> data.forEach((element) => {
                // console.log(element.members);
                 if (element.teamType == 1 ) {
                   this.leaders = element;
                 }
                 if (element.teamType == 2 ) {
                   this.electronics = element;
                 }
                 if (element.teamType == 3 ) {
                   this.economics = element;
                 }
                 if (element.teamType == 4 ) {
                   this.mechatronics = element;
                 }
                 if (element.teamType == 5 ) {
                   this.mechatronics_material = element;
                 }
                 if (element.teamType == 6 ) {
                   this.mechatronics_simulation = element;
                 }
               });
             },
             (err) => {
               alert('get error');
             }
         );*/
        this.leaders = _assets_team_team_json__WEBPACK_IMPORTED_MODULE_1__["leaders"];
        this.electronics = _assets_team_team_json__WEBPACK_IMPORTED_MODULE_1__["electronics"];
        this.economics = _assets_team_team_json__WEBPACK_IMPORTED_MODULE_1__["economics"];
        this.mechatronics = _assets_team_team_json__WEBPACK_IMPORTED_MODULE_1__["mechatronics"];
        this.mechatronicsMaterial = _assets_team_team_json__WEBPACK_IMPORTED_MODULE_1__["mechatronics_material"];
        this.mechatronicsSimulation = _assets_team_team_json__WEBPACK_IMPORTED_MODULE_1__["mechatronics_simulation"];
        // console.log(data);
    };
    TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"])); };
    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 59, vars: 49, consts: [[1, "team-boss"], [1, "container", "col-12", "col-sm-12", "col-lg-10", "col-md-11", "align-items-center"], [1, "jumbotron", "col-12"], ["translate", "", 1, "title", "pb-4", 3, "translateParams"], ["class", "col-lg-6 col-md-6 col-12 col-sm-12", 3, "members", "leader", "isLeader", 4, "ngIf"], [1, "team-electr"], [1, "row"], [1, "col-", "load-more", "pb-lg-5", "pb-md-5", "pb-1", "pl-3"], ["data-toggle", "collapse", "data-target", "#collapseElectr", "href", "javascript:void(0)", 1, "btn"], ["translate", ""], ["id", "collapseElectr", 1, "collapse", "col-lg-6", "col-md-6", "col-sm-12"], ["translate", "", 1, "description", "col-", "pl-lg-5", "pb-lg-4", "pb-md-4", "pb-0", 3, "translateParams"], ["class", "col-lg-6 col-md-6 col-12 col-sm-12", 3, "members", "leader", 4, "ngIf"], [1, "team-econ"], [1, "load-more", "pb-lg-5", "pb-md-5", "pb-1", "pl-3"], ["data-toggle", "collapse", "data-target", "#collapseEcon", "href", "javascript:void(0)", 1, "btn"], ["id", "collapseEcon", 1, "collapse", "col-lg-6", "col-md-6", "col-sm-12"], ["translate", "", 1, "description", "col-", "pl-lg-5", 3, "translateParams"], [1, "team-mech"], [1, "col-", "load-more", "pb-5", "pl-3"], ["data-toggle", "collapse", "data-target", "#collapseMech", "href", "javascript:void(0)", 1, "btn"], ["id", "collapseMech", 1, "collapse", "col-lg-6", "col-md-6", "col-sm-12"], ["translate", "", 1, "description", "col-", "pl-lg-5", "pb-1", 3, "translateParams"], ["translate", "", 1, "description", "col-", "pl-lg-5", "pt-0", 3, "translateParams"], ["translate", "", 1, "title", "subtitle", "pb-lg-4", "pb-md-4", "pb-1", 3, "translateParams"], [1, "col-lg-6", "col-md-6", "col-12", "col-sm-12", 3, "members", "leader", "isLeader"], [1, "col-lg-6", "col-md-6", "col-12", "col-sm-12", 3, "members", "leader"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MEMBERS.management");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TeamComponent_app_team_members_6_Template, 1, 3, "app-team-members", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "MEMBERS.electronic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "BUTTON.description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " MEMBERS.electronicDesc ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TeamComponent_app_team_members_20_Template, 1, 2, "app-team-members", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "MEMBERS.economic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "BUTTON.description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " MEMBERS.economicDesc ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TeamComponent_app_team_members_34_Template, 1, 2, "app-team-members", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "MEMBERS.mechanical");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "BUTTON.description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " MEMBERS.mechanicalDesc ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " MEMBERS.materialDesc ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " MEMBERS.simulationDesc ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "MEMBERS.material");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, TeamComponent_app_team_members_54_Template, 1, 2, "app-team-members", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "MEMBERS.simulation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, TeamComponent_app_team_members_57_Template, 1, 2, "app-team-members", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-footer");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c0, ctx.leaders.name_hu, ctx.leaders.name_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.leaders.members);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c1, ctx.electronics.name_hu, ctx.electronics.name_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c2, ctx.electronics.description_hu, ctx.electronics.description_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.electronics.members);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c3, ctx.economics.name_hu, ctx.economics.name_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c4, ctx.economics.description_hu, ctx.economics.description_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.economics.members);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](31, _c5, ctx.mechatronics.name_hu, ctx.mechatronics.name_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](34, _c6, ctx.mechatronics.description_hu, ctx.mechatronics.description_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](37, _c7, ctx.mechatronicsMaterial.description_hu, ctx.mechatronicsMaterial.description_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](40, _c8, ctx.mechatronicsSimulation.description_hu, ctx.mechatronicsSimulation.description_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](43, _c9, ctx.mechatronicsMaterial.name_hu, ctx.mechatronicsMaterial.name_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mechatronicsMaterial.members);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](46, _c10, ctx.mechatronicsSimulation.name_hu, ctx.mechatronicsSimulation.name_en));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mechatronicsSimulation.members);
        } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _team_members_team_members_component__WEBPACK_IMPORTED_MODULE_8__["TeamMembersComponent"]], styles: ["div.team-boss[_ngcontent-%COMP%], div.team-econ[_ngcontent-%COMP%]{\r\n    background-color: #f3f4f4;\r\n}\r\ndiv.team-electr[_ngcontent-%COMP%], div.team-mech[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n}\r\n.jumbotron[_ngcontent-%COMP%] {\r\n    background: none;\r\n    margin-bottom: 0;\r\n}\r\n.post.leader[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    line-height: 1.2rem;\r\n    font-style: italic;\r\n}\r\n.description[_ngcontent-%COMP%]{\r\n    font-family: Helvetica;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    padding-bottom: 10%;\r\n    text-align: justify;\r\n}\r\n.description.card.card-body[_ngcontent-%COMP%]{\r\n    padding-bottom: 5%;\r\n}\r\n.title.subtitle[_ngcontent-%COMP%]{\r\n    font-family: 'KelsonSans-Normal';\r\n    letter-spacing: 6px;\r\n    text-transform: uppercase;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUdBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50ZWFtLWJvc3MsIGRpdi50ZWFtLWVjb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY0O1xyXG59XHJcbmRpdi50ZWFtLWVsZWN0ciwgZGl2LnRlYW0tbWVjaHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcblxyXG4ucG9zdC5sZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4uZGVzY3JpcHRpb257XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5kZXNjcmlwdGlvbi5jYXJkLmNhcmQtYm9keXtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG4udGl0bGUuc3VidGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ0tlbHNvblNhbnMtTm9ybWFsJztcclxuICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
    return TeamComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/team/team.json":
/*!***********************************!*\
  !*** ./src/assets/team/team.json ***!
  \***********************************/
/*! exports provided: leaders, electronics, economics, mechatronics, mechatronics_material, mechatronics_simulation, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"leaders\":{\"name_hu\":\"Vezetőség\",\"name_en\":\"Management\",\"description_en\":\"string\",\"description_hu\":\"string\",\"id\":0,\"leader\":{\"id\":0,\"firstName\":\"Szilárd\",\"lastName\":\"Czibere\",\"job_hu\":\"Csapatkapitány és Gazdasági vezető\",\"job_en\":\"Team manager and Financial group leader\",\"picture\":\"czibere-szilard\",\"linkedin\":\"https://hu.linkedin.com/in/szil%C3%A1rd-czibere-861b7b185\"},\"members\":[{\"id\":1,\"firstName\":\"Márk\",\"lastName\":\"Kecskés\",\"job_hu\":\"Elektronikai csoportvezető\",\"job_en\":\"Electronic group leader\",\"picture\":\"kecskes-mark\",\"linkedin\":\"https://hu.linkedin.com/in/m%C3%A1rk-kecsk%C3%A9s-b238251b1?trk=people-guest_people_search-card&fbclid=IwAR2CuvM650hzcrkFpuG7aPP0uT6ASazw9XHMwzyL2PoobrerxktERWKwrE4\"},{\"id\":2,\"firstName\":\"Ábel\",\"lastName\":\"Visnyei\",\"job_hu\":\"Gépészet vezető\",\"job_en\":\"Mechanical group leader\",\"picture\":\"visnyei-abel\",\"linkedin\":\"https://hu.linkedin.com/in/%C3%A1bel-visnyei-b290951a4?fbclid=IwAR1DcN1YBqSiqE81JAfn4nefhsih76f2I7mccJOjsY7a1MCf2v2WnrFhqxk\"},{\"id\":3,\"firstName\":\"András\",\"lastName\":\"Pintér\",\"job_hu\":\"Anyagtechnológia csoportvezető\",\"job_en\":\"Material Science group leader\",\"picture\":\"pinter-andras\",\"linkedin\":\"string\"},{\"id\":2,\"firstName\":\"Zalán\",\"lastName\":\"Petőcz\",\"job_hu\":\"Konstrukció & Szimuláció csoportvezető\",\"job_en\":\"Design & Simulation group leader\",\"picture\":\"petocz-zalan\",\"linkedin\":\"string\"}],\"teamType\":1},\"electronics\":{\"name_hu\":\"Elektronikai csoport\",\"name_en\":\"Electronic group\",\"description_hu\":\"Az elektronikai csoport két részegységből áll: Elektrotechnika és Informatika. Az elektronikai csoport legfontosabb feladatai a hajó energia ellátásának a biztosítása és monitorozása. Számos villamos energetikai, valamint informatikai projekt köthető a csoporthoz, mint például akkumulátor design, töltésvezérlés tervezése, vagy szenzorok közötti kommunikáció. A 2020-as versenyszezontól a csapat nagy figyelmet fordít a felhő alapú IoT technológiákban rejlő lehetőségekre is.\",\"description_en\":\"The electronic group consists of two parts: Electrical Engineering and Computer Science. The most important tasks of the this group are to maintain and monitor the energy supply of the boat. The electric group deals with electrical power or software design projects, such as battery design, charge control design, or sensor-to-sensor communication. From the 2020 racing season, the team will also pay close attention to the potential of cloud-based IoT technologies.\",\"id\":0,\"leader\":{\"id\":11,\"firstName\":\"Márk\",\"lastName\":\"Kecskés\",\"picture\":\"kecskes-mark\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"https://hu.linkedin.com/in/m%C3%A1rk-kecsk%C3%A9s-b238251b1?trk=people-guest_people_search-card&fbclid=IwAR2CuvM650hzcrkFpuG7aPP0uT6ASazw9XHMwzyL2PoobrerxktERWKwrE4\"},\"members\":[{\"id\":12,\"firstName\":\"Katica\",\"lastName\":\"Bozsó\",\"picture\":\"bozso-katica\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"},{\"id\":13,\"firstName\":\"Szilárd\",\"lastName\":\"Czibere\",\"picture\":\"czibere-szilard\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"https://hu.linkedin.com/in/szil%C3%A1rd-czibere-861b7b185\"},{\"id\":3,\"firstName\":\"Péter\",\"lastName\":\"Tömöri\",\"picture\":\"tomori-peter\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"},{\"id\":3,\"firstName\":\"Dávid\",\"lastName\":\"Gracza\",\"picture\":\"gracza-david\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"https://hu.linkedin.com/in/gracza\"}],\"teamType\":2},\"economics\":{\"name_hu\":\"Gazdasági csoport\",\"name_en\":\"Economic group\",\"description_hu\":\"A Gazdasági csoport további két részegységre tagolható: Pénzügy & Stratégia és Business Marketing. A Gazdasági csoport fő feladatai közé tartozik a csapat költségvetésének kezelése, illetve a marketing tevékenységek ellátása. Ezek mellett a megjelenések és a csapatépítő programok megszervezése is részét képezi a csapat tevékenységeinek.\",\"description_en\":\"The Economic Group can be further divided into two divisions: Finance & Strategy and Business Marketing. The main tasks of the Economic Group are managing the budget of the team and performing marketing activities. In addition to these, the organization of appearances and team building programs are also part of the team’s activities.\",\"id\":0,\"leader\":{\"id\":0,\"firstName\":\"Szilárd\",\"lastName\":\"Czibere\",\"job_hu\":\"string\",\"job_en\":\"string\",\"picture\":\"czibere-szilard\",\"linkedin\":\"https://hu.linkedin.com/in/szil%C3%A1rd-czibere-861b7b185\"},\"members\":[{\"id\":1,\"firstName\":\"Dóra\",\"lastName\":\"Budai\",\"picture\":\"budai-dora\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"},{\"id\":2,\"firstName\":\"Luca\",\"lastName\":\"Bartus\",\"picture\":\"bartus-luca\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"},{\"id\":2,\"firstName\":\"Fanni\",\"lastName\":\"Dallos\",\"picture\":\"dallos-fanni\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"},{\"id\":2,\"firstName\":\"Zsófia\",\"lastName\":\"Dombóvári\",\"picture\":\"dombovari-zsofi\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"}],\"teamType\":3},\"mechatronics\":{\"name_hu\":\"Gépészeti csoport\",\"name_en\":\"Mechanical engineering group\",\"description_en\":\"The mechanical group has two parts: Materials Science and Design & Simulation.\",\"description_hu\":\"A gépészeti csoportban két részegység található: Anyagtechnológia és Konstrukciós tervezés & Szimuláció.\",\"id\":0,\"leader\":null,\"members\":[],\"teamType\":4},\"mechatronics_material\":{\"name_hu\":\"Anyagtechnológiai csoport\",\"name_en\":\"Material Technology group\",\"description_hu\":\"Az Anyagtechnológiai csoport feladatai közé tartozik a különböző elemekhez szükséges gyártástechnológia és anyaghasználat megválasztása, illetve a gyártás kivitelezése\",\"description_en\":\"The material science group is responsible for the production of products that have already been designed and validated by simulation. In addition to the planning and production. we also place high importance on the appropriate material technology.\",\"id\":0,\"leader\":{\"id\":0,\"firstName\":\"András\",\"lastName\":\"Pintér\",\"picture\":\"pinter-andras\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"},\"members\":[{\"id\":1,\"firstName\":\"Márk\",\"lastName\":\"Bakonyi\",\"picture\":\"bakonyi-mark\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"},{\"id\":2,\"firstName\":\"András\",\"lastName\":\"Sinkó\",\"picture\":\"sinko-andras\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"https://hu.linkedin.com/in/andr%C3%A1s-sink%C3%B3-15b390150?trk=people-guest_people_search-card&fbclid=IwAR1a_MB78jf3YdB3RcltuElcGm9qboy95sr1xGWakT70jy68j-FTafeMRDk\"},{\"id\":2,\"firstName\":\"Alexszisz\",\"lastName\":\"Szertaridisz\",\"picture\":\"alexszisz\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"},{\"id\":2,\"firstName\":\"Ákos\",\"lastName\":\"Tóth\",\"picture\":\"toth-akos\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"}],\"teamType\":5},\"mechatronics_simulation\":{\"name_hu\":\"Konstrukció tervezés & Szimuláció\",\"name_en\":\"Design & Simulation\",\"description_hu\":\"A Konstrukció tervezés & Szimuláció csoport elsődleges feladata a gépészeti tervek megalkotása, illetve azok gyártás előtti szimulációval végzett validálása.\",\"description_en\":\"The Design & Simultion group is responsible for the design and simulation of mechanical components. Tasks of this group, for instance, are the design of the hull and the foils. Moreover, the required validation simulations are conducted by this team as well.\",\"id\":0,\"leader\":{\"id\":0,\"firstName\":\"Zalán\",\"lastName\":\"Petőcz\",\"picture\":\"petocz-zalan\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"},\"members\":[{\"id\":1,\"firstName\":\"Ágoston\",\"lastName\":\"Dobos\",\"picture\":\"dobos-agoston\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"},{\"id\":2,\"firstName\":\"Péter\",\"lastName\":\"Ónódy\",\"picture\":\"onody-peter\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"},{\"id\":2,\"firstName\":\"János\",\"lastName\":\"Popovics\",\"picture\":\"popovics-janos\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"string\"},{\"id\":2,\"firstName\":\"Ábel\",\"lastName\":\"Visnyei\",\"picture\":\"visnyei-abel\",\"job_hu\":\"string\",\"job_en\":\"string\",\"linkedin\":\"https://hu.linkedin.com/in/%C3%A1bel-visnyei-b290951a4?fbclid=IwAR1DcN1YBqSiqE81JAfn4nefhsih76f2I7mccJOjsY7a1MCf2v2WnrFhqxk\"}],\"teamType\":6}}");

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