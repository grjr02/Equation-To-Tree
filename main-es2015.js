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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <h1>Equation to Tree Visualizer</h1>\n    <div class = \"body\">\n        <div class = \"input\">\n            <app-input></app-input>\n        </div>\n        <!-- <div class = \"display\">\n            <app-display></app-display>\n        </div> -->\n    </div>\n\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/display/display.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/display/display.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class = \"display\"> -->\n\n    <div style=\"text-align:center\">\n        <o2-chart-lib-o2-chart class = \"chart\"\n            [chartType]=\"treeTypeName\" \n            [configData]=\"configData\"  \n            [graphData]=\"treeDataJson\" \n            [svgWidth]=\"'600'\" \n            [svgHeight]=\"'400'\">\n        </o2-chart-lib-o2-chart>\n      </div>\n    \n<!-- </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class = \"container\"> \n    <form class=\"form\" [formGroup] = \"eqForm\" (ngSubmit) = \"convertEq()\" >\n        <mat-card @fade class= \"card\">\n            <mat-form-field class=\"form-field\" >\n            \n                <input matInput = \"text\"\n                    \n                    formControlName = \"name\"\n                    placeholder=\"Enter equation\"\n                    autocomplete=\"off\"\n                    maxlength=\"15\"\n\n                    >\n                    \n                <!-- <mat-hint>Max 15 characters</mat-hint> -->\n                <button \n                    mat-flat-button\n                    matSuffix\n                    type = \"submit\"\n                    [disabled] = \"!eqForm.valid\"\n                >Enter</button>\n\n                \n                <mat-error *ngIf=\"!eqForm.valid\">{{getErrorMessage()}}</mat-error>\n            </mat-form-field>\n        </mat-card>\n    </form>\n    \n</div>\n\n\n<div class = \"display1\" style=\"text-align:center\">\n    <o2-chart-lib-o2-chart class = \"chart1\"\n        [chartType]=\"treeTypeName\" \n        [configData]=\"configData\"  \n        [graphData]=\"treeDataJson\" \n        [svgWidth]=\"'500'\" \n        [svgHeight]=\"'333.33'\">\n    </o2-chart-lib-o2-chart>\n    \n  </div>\n  <!-- <div class = \"display2\" style=\"text-align:center\">\n    <o2-chart-lib-o2-chart class = \"chart1\"\n        [chartType]=\"treeTypeName\" \n        [configData]=\"configData\"  \n        [graphData]=\"treeDataJson\" \n        [svgWidth]=\"'200'\" \n        [svgHeight]=\"'200'\">\n    </o2-chart-lib-o2-chart>\n    \n  </div> -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  overflow: hidden;\n}\n\nmain {\n  height: 100%;\n  background-color: #08384e;\n}\n\nh1 {\n  margin: 0;\n  height: 6.25%;\n  color: white;\n  text-align: center;\n}\n\n.body {\n  margin-top: 3%;\n  height: 100%;\n}\n\n.input {\n  height: 100%;\n}\n\n.display {\n  height: 70%;\n  background-color: salmon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HcmVnb3J5Um9zczEvQW5ndWxhci1Qcm9qZWN0cy9FcXVhdGlvbi10by1UcmVlLUNvbnZlcnRlci1tYXN0ZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxZQUFBO0VBQ0EseUJBQUE7QUNFRDs7QURBQTtFQUNDLFNBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0FDRUQ7O0FEQUE7RUFDQyxjQUFBO0VBQ0EsWUFBQTtBQ0dEOztBREFBO0VBQ0MsWUFBQTtBQ0dEOztBREFBO0VBQ0MsV0FBQTtFQUNBLHdCQUFBO0FDR0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxubWFpbntcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgNTYsIDc4KTtcbn1cbmgxe1xuXHRtYXJnaW46IDA7XG5cdGhlaWdodDogNi4yNSU7XG5cdC8vYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuXHRjb2xvcjogd2hpdGU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib2R5e1xuXHRtYXJnaW4tdG9wOiAzJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHQvL2JhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cbi5pbnB1dHtcblx0aGVpZ2h0OiAxMDAlO1xuXHQvL2JhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjgsIDEyOCk7XG59XG4uZGlzcGxheXtcblx0aGVpZ2h0OiA3MCU7XG5cdGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcbn1cbiIsIioge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgzODRlO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiA2LjI1JTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2R5IHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGlzcGxheSB7XG4gIGhlaWdodDogNzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'conversion';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var o2_chart_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! o2-chart-lib */ "./node_modules/o2-chart-lib/o2-chart-lib.umd.js");
/* harmony import */ var o2_chart_lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(o2_chart_lib__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/input/input.component */ "./src/app/components/input/input.component.ts");
/* harmony import */ var _components_display_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/display/display.component */ "./src/app/components/display/display.component.ts");
/* harmony import */ var _classes_conversion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./classes/conversion */ "./src/app/classes/conversion.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");



 // <= Add
 // <= Add
//import { O2ChartLibModule } from '/Users/GregoryRoss1/Angular-Projects/conversion/node_modules/o2-chart-lib/index';











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _components_input_input_component__WEBPACK_IMPORTED_MODULE_11__["InputComponent"],
            _components_display_display_component__WEBPACK_IMPORTED_MODULE_12__["DisplayComponent"],
            o2_chart_lib__WEBPACK_IMPORTED_MODULE_3__["O2ChartComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        ],
        providers: [o2_chart_lib__WEBPACK_IMPORTED_MODULE_3__["ChartConst"], _classes_conversion__WEBPACK_IMPORTED_MODULE_13__["BinaryTree"], _classes_conversion__WEBPACK_IMPORTED_MODULE_13__["TreeNode"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/classes/conversion.ts":
/*!***************************************!*\
  !*** ./src/app/classes/conversion.ts ***!
  \***************************************/
/*! exports provided: TreeNode, BinaryTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return TreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryTree", function() { return BinaryTree; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TreeNode = class TreeNode {
    constructor() {
        this.name = '';
        this.children = new Array();
    }
};
TreeNode = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TreeNode);

class BinaryTree {
    treeConversion(temp, equation) {
        while (true) {
            if (equation.length === 1) {
                temp = new TreeNode();
                temp.name = equation;
                return temp;
            }
            var isNumber = false;
            for (let i = 0; i < equation.length; i++) {
                if (equation.charAt(i) === '+' || equation.charAt(i) === '-') {
                    isNumber = true;
                }
                else if (equation.charAt(i) === '*' || equation.charAt(i) === '/') {
                    isNumber = true;
                }
                else if (equation.charAt(i) === '^' || equation.charAt(i) === '$') {
                    isNumber = true;
                }
                if (isNumber === true)
                    break;
            }
            if (isNumber === false) {
                temp = new TreeNode();
                temp.name = equation;
                return temp;
            }
            else {
                break;
            }
        }
        let count = 1;
        while (count <= 3) {
            for (let i = equation.length; i >= 0; i--) {
                if (count === 1 && (equation.charAt(i) === '+' || equation.charAt(i) === '-')) {
                    temp = new TreeNode();
                    temp.name = equation.charAt(i);
                    temp.children[0] = this.treeConversion(temp.children[0], equation.substring(0, i));
                    temp.children[1] = this.treeConversion(temp.children[1], equation.substring(i + 1, equation.length));
                    return temp;
                }
                else if (count === 2 && (equation.charAt(i) === '*' || equation.charAt(i) === '/')) {
                    temp = new TreeNode();
                    temp.name = equation.charAt(i);
                    console.log(temp.name);
                    temp.children[0] = this.treeConversion(temp.children[0], equation.substring(0, i));
                    temp.children[1] = this.treeConversion(temp.children[1], equation.substring(i + 1, equation.length));
                    return temp;
                }
                else if (count === 3 && (equation.charAt(i) === '^' || equation.charAt(i) === '$')) {
                    temp = new TreeNode();
                    temp.name = equation.charAt(i);
                    console.log(temp.name);
                    temp.children[0] = this.treeConversion(temp.children[0], equation.substring(0, i));
                    temp.children[1] = this.treeConversion(temp.children[1], equation.substring(i + 1, equation.length));
                    return temp;
                }
            }
            count = count + 1;
        }
        return temp;
    }
    jsonConverter(temp) {
        if (temp === null)
            return "";
        let json = "{ \"name\": " + "\"" + temp.name + "\"";
        if (temp.children[0] != null && temp.children[1] != null) {
            json = json + ", \"children\": [ ";
            json = json + this.jsonConverter(temp.children[0]) + ", ";
            json = json + this.jsonConverter(temp.children[1]) + "] ";
        }
        json = json + " }";
        return json;
    }
}


/***/ }),

/***/ "./src/app/components/display/display.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/display/display.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".display {\n  margin-top: 2%;\n  margin-left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  height: 90%;\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HcmVnb3J5Um9zczEvQW5ndWxhci1Qcm9qZWN0cy9FcXVhdGlvbi10by1UcmVlLUNvbnZlcnRlci1tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXl7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDc1JTtcblxufVxuIiwiLmRpc3BsYXkge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDc1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/display/display.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/display/display.component.ts ***!
  \*********************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var o2_chart_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! o2-chart-lib */ "./node_modules/o2-chart-lib/o2-chart-lib.umd.js");
/* harmony import */ var o2_chart_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(o2_chart_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_graph_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/graph.service */ "./src/app/services/graph.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let DisplayComponent = class DisplayComponent {
    constructor(chartConst, _GraphService) {
        this.chartConst = chartConst;
        this._GraphService = _GraphService;
        this.treeTypeName = this.chartConst.TREE_CHART_TYPE_NAME;
        this.initilizeData();
    }
    ngOnInit() {
    }
    initilizeData() {
        // this.configData = this.httpClient.get('assets/json/ConfigData.json');
        this.configData = {
            "className": {
                "axis": "axis",
                "axisXBorder": "axis_x",
                "axisXText": "axis-x-text",
                "line": "line",
                "multiLinePrefix": "line-",
                "grid": "grid",
                "histogram": "histogram",
                "histogramBar": "histogram-bar",
                "treemap": "treemap",
                "treemapLabel": "treemap-label",
                "packlayout": "packlayout",
                "packlayoutLabel": "packlayout-label",
            },
            "label": {
                "display": true,
            },
            "title": {
                "display": true,
                "name": "Title",
                "className": "chart-title",
                "height": 30,
                "leftMargin": -20,
                "bottomMargin": 10
            },
            "maxValue": {
                "auto": true,
                "x": 100,
                "y": 100,
            },
            "legend": {
                "display": true,
                "position": "right",
                "totalWidth": 80,
                "initXPos": 5,
                "initYPos": 10,
                "rectWidth": 10,
                "rectHeight": 10,
                "xSpacing": 2,
                "ySpacing": 2
            },
            "color": {
                "auto": true,
                "defaultColorNumber": 10,
                "opacity": 1.0,
                "userColors": [
                    "blue",
                    "red",
                    "green",
                    "yellow",
                    "PaleGoldenrod",
                    "Khaki",
                    "DarkKhaki",
                    "Gold",
                    "Cornsilk",
                    "BlanchedAlmond",
                    "Bisque",
                    "NavajoWhite",
                    "Wheat",
                    "BurlyWood",
                    "Tan",
                    "RosyBrown",
                    "SandyBrown",
                    "Goldenrod",
                    "DarkGoldenrod",
                    "Peru",
                    "Chocolate"
                ],
                "focusColor": "red",
            },
            "line": {
                "legend": "lineEnd",
                "interpolate": "linear",
            },
            "margin": {
                "top": 30,
                "left": 30,
                "right": 10,
                "bottom": 20,
                "between": 5
            },
            "animation": {
                "enable": true,
                "duration": 4000,
            },
        };
        this.treeDataJson = "";
        this._GraphService.graph$.subscribe(data => {
            this.treeDataJson = data,
                console.log(data);
        });
        // this.treeDataJson = 
        // {
        //     "name": "Eve",
        //     "children": [
        //         { "name": "Cain" 
        //         },
        //         { 
        //             "name": "Seth",
        //             "children": [
        //                 { "name": "Enos" },
        //             ]
        //         },
        //         { "name": "Abel" 
        //         },
        //         { 
        //             "name": "Awan",
        //             "children": [
        //                 { "name": "Enoch" }
        //             ]
        //         },
        //         { "name": "Azura" 
        //         },
        //     ]
        // };
    }
};
DisplayComponent.ctorParameters = () => [
    { type: o2_chart_lib__WEBPACK_IMPORTED_MODULE_2__["ChartConst"] },
    { type: src_app_services_graph_service__WEBPACK_IMPORTED_MODULE_3__["GraphService"] }
];
DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/display/display.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fade', [
                //state(),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display.component.scss */ "./src/app/components/display/display.component.scss")).default]
    })
], DisplayComponent);



/***/ }),

/***/ "./src/app/components/input/input.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/input/input.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  height: 25%;\n  color: white;\n  background-color: none;\n}\n\n.card {\n  margin-left: 1%;\n  -webkit-transform: translateY(15%);\n          transform: translateY(15%);\n  background-color: rgba(230, 173, 173, 0);\n  color: rgba(255, 255, 255, 0);\n  height: 50%;\n  width: 40%;\n  box-shadow: 0px;\n}\n\n.form-field {\n  width: 100%;\n  margin-top: 50%;\n  background-color: rgba(255, 255, 255, 0);\n  color: white;\n}\n\nbutton {\n  background-color: rgba(255, 255, 255, 0);\n  color: salmon;\n}\n\n.example-container > * {\n  background-color: none;\n  width: 500px;\n}\n\n.input.placeholder {\n  color: coral;\n}\n\n@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {\n  .form-field {\n    -webkit-transform: translateY(-15%);\n            transform: translateY(-15%);\n  }\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0 0px 0px 0px black, 0 0px 0px 0 black, 0 0px 0px 0 black;\n}\n\n.mat-input-invalid .mat-input-placeholder {\n  color: white;\n}\n\n.mat-input-invalid .mat-input-ripple {\n  background-color: white;\n  color: white;\n}\n\nmat-error {\n  color: white;\n}\n\n@media only screen and (max-width: 600px) {\n  .container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    margin: auto;\n    height: 25%;\n    color: white;\n    background-color: none;\n  }\n\n  .card {\n    margin-left: 1%;\n    -webkit-transform: translateY(15%);\n            transform: translateY(15%);\n    background-color: rgba(230, 173, 173, 0);\n    color: rgba(255, 255, 255, 0);\n    height: 75%;\n    width: 80%;\n    box-shadow: 0px;\n  }\n\n  .display1 {\n    -webkit-transform: translateX(-10%);\n            transform: translateX(-10%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HcmVnb3J5Um9zczEvQW5ndWxhci1Qcm9qZWN0cy9FcXVhdGlvbi10by1UcmVlLUNvbnZlcnRlci1tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDSCxZQUFBO0VBRUcsc0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRElBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7QUNESjs7QURLQTtFQUVJLHdDQUFBO0VBQ0EsYUFBQTtBQ0hKOztBRFVBO0VBQ0ksc0JBQUE7RUFFQSxZQUFBO0FDUko7O0FEY0E7RUFDSSxZQUFBO0FDWEo7O0FEYUE7RUFJSTtJQUNJLG1DQUFBO1lBQUEsMkJBQUE7RUNiTjtBQUNGOztBRGdCRTtFQUNFLHFFQUFBO0FDZEo7O0FEbUJBO0VBQ0MsWUFBQTtBQ2hCRDs7QURxQkE7RUFDQyx1QkFBQTtFQUNBLFlBQUE7QUNsQkQ7O0FEb0JBO0VBQ0MsWUFBQTtBQ2pCRDs7QUQwQkE7RUFFSTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUVBLHNCQUFBO0VDekJOOztFRDRCRTtJQUNJLGVBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0Esd0NBQUE7SUFDQSw2QkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtFQ3pCTjs7RUQ0QkU7SUFDSSxtQ0FBQTtZQUFBLDJCQUFBO0VDekJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogMjUlO1xuXHRjb2xvcjogd2hpdGU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgIFxufVxuLmNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNSUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzAsIDE3MywgMTczLCAwKTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJveC1zaGFkb3c6IDBweDtcbiAgIFxufVxuXG4uZm9ybS1maWVsZHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIFxufVxuXG5idXR0b257XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgIGNvbG9yOiBzYWxtb247XG4gICAgXG4gICAgXG59XG5cblxuICBcbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG5cbiAgICB3aWR0aDogNTAwcHg7XG59XG5cblxuXG5cbi5pbnB1dC5wbGFjZWhvbGRlcntcbiAgICBjb2xvcjogY29yYWw7XG59XG5AbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApIGFuZCAobWluLXJlc29sdXRpb246IC4wMDFkcGNtKSB7IFxuICAgIC8vIC5jYXJke1xuICAgIC8vICAgICBoZWlnaHQ6IDYwJTtcbiAgICAvLyB9XG4gICAgLmZvcm0tZmllbGQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1JSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgICBib3gtc2hhZG93OiAwIDBweCAwcHggMHB4IHJnYmEoMCwwLDAsMSksIFxuICAgICAgICAgICAgICAgIDAgMHB4IDBweCAwIHJnYmEoMCwwLDAsMSksIFxuICAgICAgICAgICAgICAgIDAgMHB4IDBweCAwIHJnYmEoMCwwLDAsMSk7XG59XG5cbi5tYXQtaW5wdXQtaW52YWxpZCAubWF0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Y29sb3I6IHdoaXRlO1xuXHQvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG59XG5cbi5tYXQtaW5wdXQtaW52YWxpZCAubWF0LWlucHV0LXJpcHBsZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRjb2xvcjogd2hpdGU7XG59XG5tYXQtZXJyb3J7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ly9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuLy8gLmRpc3BsYXkye1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAuY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGhlaWdodDogMjUlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgICAgIFxuICAgIH1cbiAgICAuY2FyZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUlKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzMCwgMTczLCAxNzMsIDApO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweDtcbiAgICAgICBcbiAgICB9XG4gICAgLmRpc3BsYXkxe1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XG4gICAgICAgIC8vbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG5cbn1cbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDE3MywgMTczLCAwKTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogNDAlO1xuICBib3gtc2hhZG93OiAwcHg7XG59XG5cbi5mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBjb2xvcjogc2FsbW9uO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4uaW5wdXQucGxhY2Vob2xkZXIge1xuICBjb2xvcjogY29yYWw7XG59XG5cbkBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAuZm9ybS1maWVsZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNSUpO1xuICB9XG59XG4ubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwIDBweCAwcHggMHB4IGJsYWNrLCAwIDBweCAwcHggMCBibGFjaywgMCAwcHggMHB4IDAgYmxhY2s7XG59XG5cbi5tYXQtaW5wdXQtaW52YWxpZCAubWF0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWlucHV0LWludmFsaWQgLm1hdC1pbnB1dC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtZXJyb3Ige1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1JSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDE3MywgMTczLCAwKTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICB3aWR0aDogODAlO1xuICAgIGJveC1zaGFkb3c6IDBweDtcbiAgfVxuXG4gIC5kaXNwbGF5MSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMCUpO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/input/input.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/input/input.component.ts ***!
  \*****************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_classes_conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/conversion */ "./src/app/classes/conversion.ts");
/* harmony import */ var src_app_services_graph_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/graph.service */ "./src/app/services/graph.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var o2_chart_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! o2-chart-lib */ "./node_modules/o2-chart-lib/o2-chart-lib.umd.js");
/* harmony import */ var o2_chart_lib__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(o2_chart_lib__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");







let InputComponent = class InputComponent {
    constructor(chartConst, _BinaryTree, _GraphService) {
        this.chartConst = chartConst;
        this._BinaryTree = _BinaryTree;
        this._GraphService = _GraphService;
        this.eqForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.eqValidator])
        });
        this.treeDataJson = "";
    }
    getErrorMessage() {
        return this.eqForm.controls['name'].hasError('required') ? 'You must enter a value' :
            this.eqForm.controls['name'].hasError('invalidChar') ? 'Equation contains invalid characters    Ex. Format: 2+5*10' :
                this.eqForm.controls['name'].hasError('prefixSuffixError') ? 'Equation cant start or end with an operator (+ - * / ^)   Ex. Format: 2+5*10' :
                    this.eqForm.controls['name'].hasError('leadingZeros') ? 'Integer cannot have a leading zero   Ex. Format: 2+5*10' :
                        this.eqForm.controls['name'].hasError('adjOperators') ? 'Cannot have adjacent operators  Ex. Format: 2+5*10' :
                            this.eqForm.controls['name'].hasError('whiteSpace') ? 'Please enter equation without whitespace  Ex. Format: 2+5*10' :
                                '';
    }
    eqValidator(control) {
        let eq = control.value;
        for (let i = 0; i < eq.length; i++) {
            if (eq.charAt(i) == ' ')
                return { whiteSpace: {} };
            if (i == 0 || i == eq.length - 1) {
                if (eq.charAt(i) === '+' || eq.charAt(i) === '-')
                    return { prefixSuffixError: {} };
                if (eq.charAt(i) === '*' || eq.charAt(i) === '/')
                    return { prefixSuffixError: {} };
                if (eq.charAt(i) === '^' || eq.charAt(i) === '$')
                    return { prefixSuffixError: {} };
            }
            if (Number(eq.charAt(i)) || eq.charAt(i) == '0') {
                console.log("YES");
                continue;
            }
            if (eq.charAt(i) === '+' || eq.charAt(i) === '-')
                continue;
            if (eq.charAt(i) === '*' || eq.charAt(i) === '/')
                continue;
            if (eq.charAt(i) === '^' || eq.charAt(i) === '$')
                continue;
            return { invalidChar: {} };
        }
        for (let i = 0; i < eq.length; i++) {
            if (i != eq.length - 1 && eq.length != 1) {
                if (eq.charAt(i) === '+' || eq.charAt(i) === '-' || eq.charAt(i) === '*' || eq.charAt(i) === '/' || eq.charAt(i) === '^' || eq.charAt(i) === '$') {
                    if (eq.charAt(i + 1) === '+' || eq.charAt(i + 1) === '-')
                        return { adjOperators: {} };
                    if (eq.charAt(i + 1) === '*' || eq.charAt(i + 1) === '/')
                        return { adjOperators: {} };
                    if (eq.charAt(i + 1) === '^' || eq.charAt(i + 1) === '$')
                        return { adjOperators: {} };
                }
            }
            if (i === 0) {
                if (eq.charAt(i) === '0' && eq.length > 1 && (Number(eq.charAt(i + 1) || eq.charAt(i + 1) === '0'))) {
                    return { leadingZeros: {} };
                }
                continue;
            }
            if (eq.charAt(i) === '0') {
                if (eq.length > 1 && i !== eq.length - 1) {
                    if (eq.charAt(i - 1) === '+' || eq.charAt(i - 1) === '-')
                        return { leadingZeros: {} };
                    if (eq.charAt(i - 1) === '*' || eq.charAt(i - 1) === '/')
                        return { leadingZeros: {} };
                    if (eq.charAt(i - 1) === '^' || eq.charAt(i - 1) === '$')
                        return { leadingZeros: {} };
                }
            }
        }
        return null;
    }
    ngOnInit() {
    }
    //Submits equation string to tree converter
    convertEq() {
        this.treeTypeName = this.chartConst.TREE_CHART_TYPE_NAME;
        this.node = this._BinaryTree.treeConversion(this.node, this.eqForm.controls['name'].value);
        this.initilizeData(this.node);
        //this.send(this.node); // ==> Sends tree object to display component
    }
    //Sends tree object to display component
    send(treenode) {
        this._GraphService.send(treenode);
    }
    initilizeData(_TN) {
        // this.configData = this.httpClient.get('assets/json/ConfigData.json');
        this.configData = {
            "className": {
                "axis": "axis",
                "axisXBorder": "axis_x",
                "axisXText": "axis-x-text",
                "line": "line",
                "multiLinePrefix": "line-",
                "grid": "grid",
                "histogram": "histogram",
                "histogramBar": "histogram-bar",
                "treemap": "treemap",
                "treemapLabel": "treemap-label",
                "packlayout": "packlayout",
                "packlayoutLabel": "packlayout-label",
            },
            "label": {
                "display": true,
            },
            "title": {
                "display": true,
                "name": "Title",
                "className": "chart-title",
                "height": 30,
                "leftMargin": -20,
                "bottomMargin": 10
            },
            "maxValue": {
                "auto": true,
                "x": 100,
                "y": 100,
            },
            "legend": {
                "display": true,
                "position": "right",
                "totalWidth": 80,
                "initXPos": 5,
                "initYPos": 10,
                "rectWidth": 10,
                "rectHeight": 10,
                "xSpacing": 2,
                "ySpacing": 2
            },
            "color": {
                "auto": true,
                "defaultColorNumber": 10,
                "opacity": 1.0,
                "userColors": [
                    "blue",
                    "red",
                    "green",
                    "yellow",
                    "PaleGoldenrod",
                    "Khaki",
                    "DarkKhaki",
                    "Gold",
                    "Cornsilk",
                    "BlanchedAlmond",
                    "Bisque",
                    "NavajoWhite",
                    "Wheat",
                    "BurlyWood",
                    "Tan",
                    "RosyBrown",
                    "SandyBrown",
                    "Goldenrod",
                    "DarkGoldenrod",
                    "Peru",
                    "Chocolate"
                ],
                "focusColor": "red",
            },
            "line": {
                "legend": "lineEnd",
                "interpolate": "linear",
            },
            "margin": {
                "top": 30,
                "left": 30,
                "right": 10,
                "bottom": 20,
                "between": 5
            },
            "animation": {
                "enable": true,
                "duration": 4000,
            },
        };
        this.treeDataJson = _TN;
    }
};
InputComponent.ctorParameters = () => [
    { type: o2_chart_lib__WEBPACK_IMPORTED_MODULE_5__["ChartConst"] },
    { type: src_app_classes_conversion__WEBPACK_IMPORTED_MODULE_2__["BinaryTree"] },
    { type: src_app_services_graph_service__WEBPACK_IMPORTED_MODULE_3__["GraphService"] }
];
InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fade', [
                //state(),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input.component.scss */ "./src/app/components/input/input.component.scss")).default]
    })
], InputComponent);



/***/ }),

/***/ "./src/app/services/graph.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/graph.service.ts ***!
  \*******************************************/
/*! exports provided: GraphService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphService", function() { return GraphService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let GraphService = class GraphService {
    constructor() {
        this.sendGraph = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.graph$ = this.sendGraph.asObservable();
    }
    send(_TreeNode) {
        this.sendGraph.next(_TreeNode);
    }
};
GraphService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GraphService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/GregoryRoss1/Angular-Projects/Equation-to-Tree-Converter-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map