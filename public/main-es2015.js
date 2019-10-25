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
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n<h1>Blog</h1>\n\n<button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newBlog\" (click)=\"newPost()\">New Post</button>&nbsp;&nbsp;\n<button type=\"button\" [disabled]=\"loadingBlogs\" name=\"button\" class=\"btn btn-light\" *ngIf=\"!newBlog\" (click)=\"reloadPosts()\"><i class=\"fas fa-redo-alt\"></i>&nbsp;&nbsp;Reload</button>\n\n<br><br>\n\n<form [formGroup]=\"form\" name=\"blogForm\" (submit)=\"onBlogSubmit()\" *ngIf=\"newBlog\">\n    <div class=\"form-group\">\n        Title: \n        <input type=\"text\" name=\"title\" class=\"form-control\" autocomplete=\"off\" formControlName=\"title\">\n        Body: \n        <textarea name=\"body\" cols=\"80\" rows=\"8\" class=\"form-control\" formControlName=\"body\"></textarea>\n    </div>\n    <button type=\"submit\" name=\"button\" class=\"btn btn-success\">Submit</button>&nbsp;\n    <button type=\"button\" name=\"button\" class=\"btn btn-warning\" (click)=\"goBack()\">Go Back</button>\n</form>\n\n\n<div *ngIf=\"!newBlog\">\n    <div *ngFor=\"let blog of blogPosts\">\n        <div class=\"card\"> \n            <div class=\"card-header\">\n                <h3 class=\"card-title\">{{blog.title}}</h3>\n            </div>\n            <div class=\"card-block\" style=\"padding: 20px;\">\n                {{blog.body}}\n            </div>\n            <div class=\"card-footer\">\n                <p><strong>Posted By: </strong>{{blog.createdBy}}</p>\n                <p><strong>Date: </strong>{{blog.createdAt | date: 'MMM dd, yyyy'}}</p>\n                <div *ngIf=\"username===blog.createdBy\">\n                    <p><strong>Likes: </strong>{{blog.likes}}</p>\n                    <p><strong>Dislikes: </strong>{{blog.dislikes}}</p>\n                </div>\n                <a [routerLink]=\"['/delete-blog/',blog._id]\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" *ngIf=\"username===blog.createdBy\">Delete Post</button></a>&nbsp;\n                <a [routerLink]=\"['/edit-blog/',blog._id]\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-warning\" *ngIf=\"username===blog.createdBy\">Edit Post</button></a>&nbsp;\n                <div class=\"dropdown\">\n                    <button [disabled]=\"blog.likedBy.indexOf(username) > -1\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-success\" (click)=\"likeBlog(blog._id)\"><i class=\"fas fa-thumbs-up\"></i>&nbsp;&nbsp;Like  {{blog.likes}}</button>&nbsp;\n                    <div class=\"dropdown-content\">\n                        <p *ngFor=\"let name of blog.likedBy\">{{name}}</p>\n                    </div>\n                </div>\n\n                <div class=\"dropdown\">\n                    <button [disabled]=\"blog.dislikedBy.indexOf(username) > -1\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-warning\" (click)=\"dislikeBlog(blog._id)\"><i class=\"fas fa-thumbs-down\"></i>&nbsp;&nbsp;Dislike  {{blog.dislikes}}</button>\n                    <div class=\"dropdown-content\">\n                        <p *ngFor=\"let name of blog.dislikedBy\">{{name}}</p>\n                    </div>\n                </div>\n            </div>\n\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\">\n                    <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\" (click)=\"draftComment(blog._id)\" [disabled]=\"newComment.indexOf(blog._id) > -1\">Post comment</button>\n                    \n                    <br>\n                    <br>\n                    <div *ngIf=\"newComment.indexOf(blog._id) > -1\">\n                        <form [formGroup]=\"commentForm\">\n                            <textarea name=\"comment\" rows=\"10\" cols=\"10\" class=\"form-control\" formControlName=\"comment\"></textarea><br>\n                            <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-success\" (click)=\"postComment(blog._id)\">Comment</button>&nbsp;\n                            <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancel(blog._id)\">Cancel</button>\n                        </form>\n                    </div>\n                    \n                    <li *ngIf=\"enabledComments.indexOf(blog._id) === -1\">\n                        <span class=\"com\" (click)=\"expand(blog._id)\">Show Comments</span>\n                    </li>\n                    <li *ngIf=\"enabledComments.indexOf(blog._id) > -1\">\n                        <span class=\"com\" (click)=\"collapse(blog._id)\">Hide Comments</span>\n                    </li>\n                    <div class=\"com\" *ngIf=\"enabledComments.indexOf(blog._id) > -1\">\n                        <li *ngFor=\"let comment of blog.comments\" style=\"list-style-type: none;\">\n                            <strong>{{comment.commentedBy}}</strong>: {{comment.comment}}\n                        </li>\n                    </div>\n            </ul>\n        </div>\n    </div>\n</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/delete-blog/delete-blog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/delete-blog/delete-blog.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1>Delete Blogs</h1>\n\n    <!-- Modal Confirmation Window -->\n    <div class=\"col-md-6\" *ngIf=\"foundBlog\">\n        <!-- Model Outer Layer -->\n        <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n            \n            <!-- Modal Title -->\n            <h4 class=\"modal-title\">Confirm</h4>\n        </div>\n    \n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n            <p>Are you sure you would like to delete this blog?</p>\n        </div>\n    \n        <!-- Modal Footer -->\n        <div class=\"modal-footer\">\n            <!-- Yes Button -->\n            <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteBlog()\">Yes</button>\n            <!-- No Button -->\n            <a routerLink=\"/blog\"><button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\">No</button></a>\n        </div>\n    </div>\n  \n    <br />\n\n    <div class=\"card\"> \n            <div class=\"card-header\">\n                <h3 class=\"card-title\">{{blog.title}}</h3>\n            </div>\n            <div class=\"card-block\" style=\"padding: 20px;\">\n                {{blog.body}}\n            </div>\n            <div class=\"card-footer\">\n                <p><strong>Posted By: </strong>{{blog.createdBy}}</p>\n                <p><strong>Date: </strong>{{blog.createdAt | date: 'MMM dd, yyyy'}}</p>\n            </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/edit-blog/edit-blog.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/edit-blog/edit-blog.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1>Edit Blogs</h1>\n\n    <form (submit)=\"updateBlogSubmit()\" *ngIf=\"!loading\">\n        <div class=\"form-group\">\n            Title: \n            <input type=\"text\" name=\"title\" class=\"form-control\" autocomplete=\"off\" [(ngModel)]=\"blog.title\">\n            Body: \n            <textarea name=\"body\" cols=\"80\" rows=\"8\" class=\"form-control\" [(ngModel)]=\"blog.body\"></textarea>\n        </div>\n        <button type=\"submit\" name=\"button\" class=\"btn btn-success\">Save Changes</button>&nbsp;\n        <button type=\"button\" name=\"button\" class=\"btn btn-warning\" (click)=\"goBack()\">Go Back</button>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"landing\">\r\n        <div class=\"home-wrap\">\r\n            <div class=\"home-inner\">\r\n                <div class=\"off\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"caption text-center\">\r\n        <h1>Welcome</h1>\r\n        <h3>To your blog</h3>\r\n      \r\n    </div>\r\n\r\n    \r\n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"signup-content\">\n        <form method=\"POST\" [formGroup]=\"form\" id=\"signup-form\" class=\"signup-form\" (submit)=\"onLoginSubmit()\">\n            <h1 class=\"form-title text-center\">Login</h1>\n            <div class=\"row show-hide-message\">\n                <div [ngClass]=\"messageClass\" style=\"position: relative;left: 50%;transform: translateX(-50%);\">\n                    {{ message }}\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-input\" name=\"username\" id=\"username\" placeholder=\"Username\" formControlName=\"username\"/>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-input\" name=\"password\" id=\"password\" placeholder=\"Password\" formControlName=\"password\"/>\n            </div>\n            <div class=\"text-center form-group\" id=\"message\"></div>\n            <div class=\"form-group\">\n                <input type=\"submit\" name=\"submit\" id=\"submit\" class=\"form-submit\" value=\"Sign in\"/>\n            </div>\n        </form>\n        <p class=\"loginhere text-center\">\n            Dont have an account? <a routerLink=\"/register\" class=\"loginhere-link\" style=\"text-decoration: none;\">Signup here</a>\n        </p>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n        <a class=\"navbar-brand\" href=\"#\"><img src=\"../../../assets/logo.png\" style=\"height:40px; width:40px;\"></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item homeb\">\n                    <a class=\"nav-link\" routerLink=\"/\">HOME</a>\n                </li>\n                <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/blog\" style=\"cursor: pointer;\">Blogs</a>\n                </li>\n                <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/login\">LOGIN</a>\n                </li>\n                <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/register\">SIGNUP</a>\n                </li>\n                <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n                    <a class=\"nav-link\" (click)=\"onLogoutClick()\" style=\"cursor: pointer;\">LOGOUT</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-page/register-page.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-page/register-page.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"signup-content\">\n        <form method=\"POST\" [formGroup]=\"form\" id=\"signup-form\" class=\"signup-form\" (submit)=\"onRegisterSubmit()\">\n            <h2 class=\"form-title text-center\">Create account</h2>\n            <div class=\"row show-hide-message\">\n                <div [ngClass]=\"messageClass\" style=\"position: relative;left: 50%;transform: translateX(-50%);\">\n                    {{ message }}\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-input\" name=\"username\" id=\"username\" placeholder=\"Username\" formControlName=\"username\"/>\n                \n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-input\" name=\"email\" id=\"email\" autocomplete=\"off\" placeholder=\"Email\" formControlName=\"email\"/>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-input\" onkeyup=\"check()\" name=\"password\" id=\"password\" placeholder=\"Password\" formControlName=\"password\"/>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-input\" onkeyup=\"check()\" name=\"re_password\" id=\"re_password\" placeholder=\"Confirm password\" formControlName=\"re_password\"/>\n            </div>\n            <div class=\"text-center form-group\" id=\"message\"></div>\n            <div class=\"form-group\">\n                <input type=\"submit\" name=\"submit\" id=\"submit\" class=\"form-submit\" value=\"Sign up\"/>\n            </div>\n        </form>\n        <p class=\"loginhere text-center\">\n            Have already an account ? <a routerLink=\"/login\" class=\"loginhere-link\" style=\"text-decoration: none;\">Login here</a>\n        </p>\n    </div>\n</div>\n");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register-page/register-page.component */ "./src/app/components/register-page/register-page.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/blog/edit-blog/edit-blog.component */ "./src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/blog/delete-blog/delete-blog.component */ "./src/app/components/blog/delete-blog/delete-blog.component.ts");









const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'register',
        component: _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPageComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'blog',
        component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"]
    },
    {
        path: 'edit-blog/:id',
        component: _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_7__["EditBlogComponent"]
    },
    {
        path: 'delete-blog/:id',
        component: _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteBlogComponent"]
    },
    {
        path: '**',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-inner {\r\n    height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */");

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
        this.title = 'client';
    }
    f() {
        test();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register-page/register-page.component */ "./src/app/components/register-page/register-page.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/blog/edit-blog/edit-blog.component */ "./src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/blog/delete-blog/delete-blog.component */ "./src/app/components/blog/delete-blog/delete-blog.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_7__["RegisterPageComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
            _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
            _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_14__["EditBlogComponent"],
            _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_15__["DeleteBlogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_blog_service__WEBPACK_IMPORTED_MODULE_10__["BlogService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    color: white;\r\n    margin-top: 60px;\r\n    margin-left: 40px;\r\n}\r\n\r\n.card{\r\n    color: black;\r\n    margin: 30px;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    padding: 12px 16px;\r\n    z-index: 1;\r\n  }\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n\r\n.com {\r\n    margin-left: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG4uZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5jb20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/blog.service */ "./src/app/services/blog.service.ts");





let BlogComponent = class BlogComponent {
    constructor(formBuilder, authService, blogService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.blogService = blogService;
        this.newBlog = false;
        this.loadingBlogs = false;
        this.blogs = {
            title: String,
            body: String
        };
        this.enabledComments = [];
        this.newComment = [];
        this.newBlogForm();
        this.createCommentForm();
    }
    newBlogForm() {
        this.form = this.formBuilder.group({
            title: '',
            body: ''
        });
    }
    createCommentForm() {
        this.commentForm = this.formBuilder.group({
            comment: ''
        });
    }
    newPost() {
        this.newBlog = true;
    }
    reloadPosts() {
        this.loadingBlogs = true;
        this.getAllBlogs();
        setTimeout(() => {
            this.loadingBlogs = false;
        }, 4000);
    }
    draftComment(id) {
        this.newComment = [];
        this.newComment.push(id);
    }
    cancel(id) {
        const index = this.newComment.indexOf(id);
        this.newComment.splice(index, 1);
        this.commentForm.reset();
    }
    expand(id) {
        this.enabledComments.push(id);
    }
    collapse(id) {
        const index = this.enabledComments.indexOf(id);
        this.enabledComments.splice(index, 1);
    }
    goBack() {
        window.location.reload();
    }
    onBlogSubmit() {
        const blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: this.username
        };
        this.blogService.newBlog(blog).subscribe(data => {
            this.getAllBlogs();
            setTimeout(() => {
                this.newBlog = false;
                this.form.reset();
            }, 2000);
        });
    }
    postComment(id) {
        const comment = this.commentForm.get('comment').value;
        this.blogService.postComment(id, comment, this.username).subscribe(data => {
            this.getAllBlogs();
            const index = this.newComment.indexOf(id);
            this.newComment.splice(index, 1);
            this.commentForm.reset();
            if (this.enabledComments.indexOf(id) < 0)
                this.expand(id);
        });
    }
    getAllBlogs() {
        this.blogService.getAllBlogs().subscribe(data => {
            this.blogPosts = data.blogs;
        });
    }
    likeBlog(id) {
        this.blogService.likeBlog(id, this.username).subscribe(data => {
            this.getAllBlogs();
        });
    }
    dislikeBlog(id) {
        this.blogService.dislikeBlog(id, this.username).subscribe(data => {
            this.getAllBlogs();
        });
    }
    ngOnInit() {
        var returned = localStorage.getItem('user');
        var parsed = JSON.parse(returned);
        this.username = parsed.username;
        this.getAllBlogs();
    }
};
BlogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"] }
];
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")).default]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/blog/delete-blog/delete-blog.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    color: white;\r\n    position: absolute;\r\n    margin-top: 60px;\r\n    margin-left: 40px;\r\n}\r\n.card, .modal-content{\r\n    color: black;\r\n    margin: 30px;\r\n    width: 800px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2RlbGV0ZS1ibG9nL2RlbGV0ZS1ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9kZWxldGUtYmxvZy9kZWxldGUtYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG4uY2FyZCwgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/blog/delete-blog/delete-blog.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeleteBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBlogComponent", function() { return DeleteBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DeleteBlogComponent = class DeleteBlogComponent {
    constructor(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.foundBlog = false;
        this.blog = {
            title: String,
            body: String
        };
    }
    deleteBlog() {
        this.blogService.deleteBlog(this.currentURL.id).subscribe(data => {
            setTimeout(() => {
                this.router.navigate(['/blog']);
            }, 2000);
        });
    }
    ngOnInit() {
        this.currentURL = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currentURL.id).subscribe(data => {
            this.blog = data.blogs;
            this.foundBlog = true;
        });
    }
};
DeleteBlogComponent.ctorParameters = () => [
    { type: _services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DeleteBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/delete-blog/delete-blog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-blog.component.css */ "./src/app/components/blog/delete-blog/delete-blog.component.css")).default]
    })
], DeleteBlogComponent);



/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    color: white;\r\n    position: absolute;\r\n    margin-top: 60px;\r\n    margin-left: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2VkaXQtYmxvZy9lZGl0LWJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9lZGl0LWJsb2cvZWRpdC1ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.ts ***!
  \******************************************************************/
/*! exports provided: EditBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return EditBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/blog.service */ "./src/app/services/blog.service.ts");






let EditBlogComponent = class EditBlogComponent {
    constructor(location, activatedRoute, blogService, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.router = router;
        this.blog = {
            title: String,
            body: String
        };
        this.loading = false;
    }
    updateBlogSubmit() {
        this.blogService.editBlog(this.blog).subscribe(data => {
            setTimeout(() => {
                this.router.navigate(['/blog']);
            }, 2000);
        });
    }
    goBack() {
        this.location.back();
    }
    ngOnInit() {
        this.currentURL = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currentURL.id).subscribe(data => {
            this.blog = data.blogs;
        });
    }
};
EditBlogComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/edit-blog/edit-blog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-blog.component.css */ "./src/app/components/blog/edit-blog/edit-blog.component.css")).default]
    })
], EditBlogComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".offset:before{\r\n    display: block;\r\n    content: \"\";\r\n    height: 4rem;\r\n    margin-top: -4rem;\r\n}\r\n.home-inner{\r\n    background-image: url('BACKGROUND1.jpg');\r\n    z-index: -1000!important;\r\n    height: 100vh;\r\n    width: 100%;\r\n}\r\n.home-inner .off{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: #000;\r\n    opacity: 0.5;\r\n}\r\n.caption{\r\n    width: 100%;\r\n    max-width: 100%;\r\n    position: absolute;\r\n    top: 40%;\r\n    z-index: 1;\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n.caption h1{\r\n    font-size: 4rem;\r\n    font-weight: 700;\r\n    letter-spacing: 0.5rem;\r\n    text-shadow: 0.1rem 0.1rem 0.8rem black;\r\n    padding-bottom: 0.6rem;\r\n}\r\n.caption h3{\r\n    font-size: 2rem;\r\n    text-shadow: 0.1rem 0.1rem 0.5rem black;\r\n    padding-bottom: 1rem;\r\n}\r\n#search-container {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%,-50%);\r\n\theight: 40px;\r\n\twidth: 60%;\r\n\tz-index: 1;\r\n}\r\n#search-bar{\r\n\tposition: relative;\r\n\twidth: 90%;\r\n\tfloat: left;\r\n\theight: 40px;\r\n\tpadding-left: 5px;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 5px;\r\n\tbackground-color: white;\r\n\r\n}\r\n#search-button{\r\n\tposition: relative;\r\n\twidth: 10%;\r\n\theight: 40px;\r\n\tfloat: left;\r\n\tpadding: 0px;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 5px; \r\n\tbackground-color: white;\r\n}\r\n#search-bar:focus{\r\n\tborder-color: #2196F3;\r\n\tborder-width: 1px;\r\n\tcolor: black;\r\n}\r\n#search-button:hover{\r\n\tbackground-color: #2196F3;\r\n\tcolor: white;\r\n}\r\n.btn-lg{\r\n    border-width: medium;\r\n    border-radius: 0;\r\n    padding: 0.6rem 1.3rem;\r\n    font-size: 1.1rem;\r\n}\r\n.animate{\r\n    -webkit-animation: drop 2s linear infinite;\r\n            animation: drop 2s linear infinite;\r\n}\r\n/*Landing page over*/\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksd0NBQXdEO0lBQ3hELHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsb0JBQW9CO0FBQ3hCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFNBQVM7Q0FDVCwrQkFBK0I7Q0FDL0IsWUFBWTtDQUNaLFVBQVU7Q0FDVixVQUFVO0FBQ1g7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsNkJBQTZCO0NBQzdCLGtCQUFrQjtDQUNsQix1QkFBdUI7O0FBRXhCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtDQUNaLDZCQUE2QjtDQUM3QixrQkFBa0I7Q0FDbEIsdUJBQXVCO0FBQ3hCO0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLFlBQVk7QUFDYjtBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSwwQ0FBa0M7WUFBbEMsa0NBQWtDO0FBQ3RDO0FBRUEsb0JBQW9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZmZzZXQ6YmVmb3Jle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTRyZW07XHJcbn1cclxuLmhvbWUtaW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9CQUNLR1JPVU5EMS5qcGcnKTtcclxuICAgIHotaW5kZXg6IC0xMDAwIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhvbWUtaW5uZXIgLm9mZntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5jYXB0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY2FwdGlvbiBoMXtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC44cmVtIGJsYWNrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNnJlbTtcclxufVxyXG5cclxuLmNhcHRpb24gaDN7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogMC4xcmVtIDAuMXJlbSAwLjVyZW0gYmxhY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuI3NlYXJjaC1jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDEwMCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHdpZHRoOiA2MCU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuI3NlYXJjaC1iYXJ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiA5MCU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHBhZGRpbmctbGVmdDogNXB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbiNzZWFyY2gtYnV0dG9ue1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMTAlO1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4OyBcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3NlYXJjaC1iYXI6Zm9jdXN7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMjE5NkYzO1xyXG5cdGJvcmRlci13aWR0aDogMXB4O1xyXG5cdGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI3NlYXJjaC1idXR0b246aG92ZXJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bi1sZ3tcclxuICAgIGJvcmRlci13aWR0aDogbWVkaXVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDAuNnJlbSAxLjNyZW07XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLmFuaW1hdGV7XHJcbiAgICBhbmltYXRpb246IGRyb3AgMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4vKkxhbmRpbmcgcGFnZSBvdmVyKi9cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let HomeComponent = class HomeComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.createForm();
    }
    createForm() {
        this.myForm = this.formBuilder.group({
            search: ''
        });
    }
    f() {
        new test();
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: black;\r\n}\r\nh1{\r\n    margin-top: 30px;\r\n    margin-bottom: 130px;\r\n}\r\n.signup-content{\r\n    background-color: white;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    width: 30%;\r\n    height: 80%;\r\n    padding: 30px;\r\n    border-radius: 8px;\r\n    box-sizing: border-box;\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\ninput[type=\"text\"],input[type=\"password\"]{\r\n    border: none;\r\n    border-bottom: 1px solid black;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 80%;\r\n    font-size: 20px;\r\n    outline: none;\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\ninput[type=\"submit\"]{\r\n    width: 60%;\r\n    margin-top: 40px;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 40px;\r\n    background-image: linear-gradient(#0984e3,#74b9ff);\r\n}\r\n#message{\r\n    width: 50%; \r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    padding: 10px;\r\n    display: none;\r\n    background-color: rgba(255,0,0,0.2);\r\n    border-radius: 3px;\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0RBQWtEO0FBQ3REO0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbmgxe1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEzMHB4O1xyXG59XHJcbi5zaWdudXAtY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl17XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJde1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwOTg0ZTMsIzc0YjlmZik7XHJcbn1cclxuXHJcbiNtZXNzYWdle1xyXG4gICAgd2lkdGg6IDUwJTsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDAsMCwwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59ICJdfQ== */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.createForm();
    }
    createForm() {
        this.form = this.formBuilder.group({
            username: '',
            password: ''
        });
    }
    onLoginSubmit() {
        const user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.login(user).subscribe(data => {
            if (!data.success) {
                this.messageClass = 'alert alert-danger';
                this.message = data.message;
            }
            else {
                this.messageClass = 'alert alert-success';
                this.message = data.message;
                this.authService.storeUserData(data.token, data.user);
                setTimeout(() => {
                    this.router.navigate(['/']);
                }, 2000);
            }
        });
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar{\r\n    text-transform: uppercase;\r\n    max-width: 100%;\r\n    font-weight: 700;\r\n    font-size: 0.9rem;\r\n    letter-spacing: 0.1rem;\r\n    background-color: rgba(0,0,0,0.7)!important;\r\n}\r\n\r\n\r\n.navbar-dark .navbar-nav .nav-link{\r\n    color: white;\r\n    /*padding-top: 1rem;*/\r\n    \r\n}\r\n\r\n\r\n.navbar-dark .navbar-nav .nav-link.active,\r\n.navbar-dark .navbar-nav .nav-link:hover{\r\n\tcolor: white;\r\n    background-color: #2196F3;\r\n    -webkit-animation: fadein .3s;\r\n            animation: fadein .3s;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLDJDQUEyQztBQUMvQzs7O0FBR0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCOztBQUV6Qjs7O0FBRUE7O0NBRUMsWUFBWTtJQUNULHlCQUF5QjtJQUN6Qiw2QkFBcUI7WUFBckIscUJBQXFCOztBQUV6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvKnBhZGRpbmctdG9wOiAxcmVtOyovXHJcbiAgICBcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUsXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXJ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICAgIGFuaW1hdGlvbjogZmFkZWluIC4zcztcclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavbarComponent = class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    onLogoutClick() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/register-page/register-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: black;\r\n}\r\n.signup-content{\r\n    background-color: white;\r\n    position: absolute;\r\n    top: 55%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    width: 35%;\r\n    height: 85%;\r\n    padding: 30px;\r\n    border-radius: 8px;\r\n    box-sizing: border-box;\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\ninput[type=\"text\"],input[type=\"password\"]{\r\n    border: none;\r\n    border-bottom: 1px solid black;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 80%;\r\n    font-size: 20px;\r\n    outline: none;\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\ninput[type=\"submit\"]{\r\n    width: 60%;\r\n    margin-top: 40px;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 40px;\r\n    background-image: linear-gradient(#0984e3,#74b9ff);\r\n}\r\n#message{\r\n    width: 50%; \r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    padding: 10px;\r\n    display: none;\r\n    background-color: rgba(255,0,0,0.2);\r\n    border-radius: 3px;\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtEQUFrRDtBQUN0RDtBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLnNpZ251cC1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzA5ODRlMywjNzRiOWZmKTtcclxufVxyXG5cclxuI21lc3NhZ2V7XHJcbiAgICB3aWR0aDogNTAlOyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwwLDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn0gIl19 */");

/***/ }),

/***/ "./src/app/components/register-page/register-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterPageComponent = class RegisterPageComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.createForm();
    }
    createForm() {
        this.form = this.formBuilder.group({
            email: '',
            username: '',
            password: '',
            re_password: ''
        });
    }
    onRegisterSubmit() {
        const user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.registerUser(user).subscribe(data => {
            if (!data.success) {
                this.messageClass = "alert alert-danger";
                this.message = data.message;
            }
            else {
                this.messageClass = "alert alert-success";
                this.message = data.message;
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 2000);
            }
        });
    }
    ngOnInit() {
    }
};
RegisterPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-page/register-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-page.component.css */ "./src/app/components/register-page/register-page.component.css")).default]
    })
], RegisterPageComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.domain = "http://localhost:8080";
    }
    createAuthenticationHeaders() {
        this.loadToken();
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-type': 'application/json',
                'authorization': this.authToken
            })
        });
    }
    loadToken() {
        const token = localStorage.getItem('token');
        this.authToken = token;
    }
    registerUser(user) {
        return this.http.post(this.domain + '/authentication/register', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    login(user) {
        return this.http.post(this.domain + '/authentication/login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    storeUserData(token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
    loggedIn() {
        return helper.isTokenExpired(this.authToken);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/blog.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let BlogService = class BlogService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    createAuthenticationHeaders() {
        this.authService.loadToken();
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-type': 'application/json',
                'authorization': this.authService.authToken
            })
        });
    }
    newBlog(blog) {
        this.createAuthenticationHeaders();
        return this.http.post(this.domain + '/blogs/newBlog', blog, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    getAllBlogs() {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/blogs/allBlogs', this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res));
    }
    getSingleBlog(id) {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/blogs/singleBlog/' + id, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res));
    }
    editBlog(blog) {
        this.createAuthenticationHeaders();
        return this.http.put(this.domain + '/blogs/updateBlog', blog, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res));
    }
    deleteBlog(id) {
        this.createAuthenticationHeaders();
        return this.http.delete(this.domain + '/blogs/deleteBlog/' + id, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res));
    }
    likeBlog(id, username) {
        const blogData = { id: id, username: username };
        return this.http.put(this.domain + '/blogs/likeBlog/' + id, blogData, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res));
    }
    dislikeBlog(id, username) {
        const blogData = { id: id, username: username };
        return this.http.put(this.domain + '/blogs/dislikeBlog/' + id, blogData, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res));
    }
    postComment(id, comment, username) {
        this.createAuthenticationHeaders();
        const blogData = {
            id: id,
            commentedBy: username,
            comment: comment
        };
        return this.http.post(this.domain + '/blogs/comment', blogData, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => res));
    }
};
BlogService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BlogService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Abhishek\Desktop\BlogApplication\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map