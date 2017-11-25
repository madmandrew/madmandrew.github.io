webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n  <mat-card style=\"padding:4px\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n      <app-progress-spinner></app-progress-spinner>\n\n      <app-game-clock></app-game-clock>\n\n      <app-game-stats></app-game-stats>\n\n      <app-game-clock-controller></app-game-clock-controller>\n    </div>\n  </mat-card>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_progress_spinner_progress_spinner_component__ = __webpack_require__("../../../../../src/app/components/progress-spinner/progress-spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_game_clock_service__ = __webpack_require__("../../../../../src/app/services/game-clock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_game_clock_controller_game_clock_controller_component__ = __webpack_require__("../../../../../src/app/components/game-clock-controller/game-clock-controller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_game_stats_game_stats_component__ = __webpack_require__("../../../../../src/app/components/game-stats/game-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_circle_progress_service__ = __webpack_require__("../../../../../src/app/services/circle-progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_game_clock_game_clock_component__ = __webpack_require__("../../../../../src/app/components/game-clock/game-clock.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_progress_spinner_progress_spinner_component__["a" /* ProgressSpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_game_clock_controller_game_clock_controller_component__["a" /* GameClockControllerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_game_stats_game_stats_component__["a" /* GameStatsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_game_clock_game_clock_component__["a" /* GameClockComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                // Material modules
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_game_clock_service__["a" /* GameClockService */], __WEBPACK_IMPORTED_MODULE_11__services_circle_progress_service__["a" /* CircleProgressService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/game-clock-controller/game-clock-controller.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game-clock-controller/game-clock-controller.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <button mat-raised-button color=\"primary\" (click)=\"startTimer()\">Start</button>\n  <button mat-raised-button color=\"accent\" (click)=\"stopTimer()\">Stop</button>\n  <button mat-raised-button color=\"warn\" (click)=\"resetTimer()\">Reset</button>\n</div>\n\n<br><br>\n\n<div>\n  <mat-form-field>\n    <input matInput placeholder=\"Set Game Time (Seconds only)\" [(ngModel)]=\"manualGameClock\" type=\"number\"\n           (keyup.enter)=\"setGameClock()\">\n  </mat-form-field>\n  <button mat-raised-button color=\"primary\" (click)=\"setGameClock()\">Set</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/game-clock-controller/game-clock-controller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameClockControllerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_clock_service__ = __webpack_require__("../../../../../src/app/services/game-clock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_circle_progress_service__ = __webpack_require__("../../../../../src/app/services/circle-progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_CircleValues__ = __webpack_require__("../../../../../src/app/objects/CircleValues.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_CircleProgressData__ = __webpack_require__("../../../../../src/app/objects/CircleProgressData.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameClockControllerComponent = (function () {
    function GameClockControllerComponent(gameClockService, circleProgressService) {
        this.gameClockService = gameClockService;
        this.circleProgressService = circleProgressService;
        this.circleValues = new __WEBPACK_IMPORTED_MODULE_3__objects_CircleValues__["a" /* CircleValues */]();
        this.circleProgressData = new __WEBPACK_IMPORTED_MODULE_4__objects_CircleProgressData__["a" /* CircleProgressData */]({
            percentage: 0,
            currentCircleIndex: 0,
            currentCircleTime: 0,
            shrinking: false
        });
        this.manualGameClock = 0;
    }
    GameClockControllerComponent.prototype.ngOnInit = function () {
    };
    GameClockControllerComponent.prototype.startTimer = function () {
        this.gameClockService.startGameClock();
    };
    GameClockControllerComponent.prototype.stopTimer = function () {
        this.gameClockService.stopGameClock();
    };
    GameClockControllerComponent.prototype.resetTimer = function () {
        this.gameClockService.resetGameClock();
        this.circleProgressService.resetProgress();
    };
    GameClockControllerComponent.prototype.setGameClock = function () {
        var gameClockBeforeCircle = 0;
        for (var i = 0; i < this.circleProgressData.currentCircleIndex; i++) {
            gameClockBeforeCircle += this.circleValues.circles[i].circleTimeSeconds;
            gameClockBeforeCircle += this.circleValues.circles[i].shrinkTimeSeconds;
        }
        if (this.circleProgressData.shrinking) {
            gameClockBeforeCircle += this.circleValues.circles[this.circleProgressData.currentCircleIndex].circleTimeSeconds;
        }
        this.gameClockService.setGameClock(gameClockBeforeCircle + this.manualGameClock);
    };
    GameClockControllerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game-clock-controller',
            template: __webpack_require__("../../../../../src/app/components/game-clock-controller/game-clock-controller.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/game-clock-controller/game-clock-controller.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_clock_service__["a" /* GameClockService */],
            __WEBPACK_IMPORTED_MODULE_2__services_circle_progress_service__["a" /* CircleProgressService */]])
    ], GameClockControllerComponent);
    return GameClockControllerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/game-clock/game-clock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game-clock/game-clock.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"padding:2px\">\n  <div fxLayout=\"row\">\n    <div style=\"margin-top:12px\">Game Time: &nbsp; {{formatSeconds(gameClockSeconds)}}</div>\n\n    <button mat-icon-button color=\"primary\" (click)=\"increaseGameClock()\">\n      <mat-icon>keyboard_arrow_up</mat-icon>\n    </button>\n    <button mat-icon-button color=\"primary\" (click)=\"decreaseGameClock()\">\n      <mat-icon>keyboard_arrow_down</mat-icon>\n    </button>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/game-clock/game-clock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameClockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_clock_service__ = __webpack_require__("../../../../../src/app/services/game-clock.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameClockComponent = (function () {
    function GameClockComponent(gameClockService) {
        this.gameClockService = gameClockService;
        this.gameClockSeconds = 0;
    }
    GameClockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameClockService.gameClockInSeconds$
            .subscribe(function (gameClock) { return _this.gameClockSeconds = gameClock; });
    };
    GameClockComponent.prototype.increaseGameClock = function () {
        this.gameClockService.increaseGameClock();
    };
    GameClockComponent.prototype.decreaseGameClock = function () {
        this.gameClockService.decreaseGameClock();
    };
    GameClockComponent.prototype.formatSeconds = function (totalSeconds) {
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds - (minutes * 60);
        var secondsString = seconds.toString();
        if (seconds < 10) {
            secondsString = "0" + seconds;
        }
        return minutes + ":" + secondsString;
    };
    GameClockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game-clock',
            template: __webpack_require__("../../../../../src/app/components/game-clock/game-clock.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/game-clock/game-clock.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_clock_service__["a" /* GameClockService */]])
    ], GameClockComponent);
    return GameClockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/game-stats/game-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" style=\"padding-bottom: 8px; padding-top: 8px\">\n  Remaining: &nbsp; {{getSecondsRemaining()}} &nbsp;&nbsp;&nbsp;\n  Circle Time: &nbsp; {{formatSeconds(getFinishTime())}} &nbsp;&nbsp;&nbsp;\n</div>\n<div layout=\"row\" style=\"padding-bottom: 8px\">\n  CurrentCircle: &nbsp; {{circleProgressData.currentCircleIndex}} &nbsp;&nbsp;&nbsp;\n  Next Circle Time: &nbsp; {{formatSeconds(getNextCircleTime())}}\n  <!--Next Circle Shrinking: &nbsp; TODO-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/game-stats/game-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_CircleValues__ = __webpack_require__("../../../../../src/app/objects/CircleValues.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_CircleProgressData__ = __webpack_require__("../../../../../src/app/objects/CircleProgressData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_circle_progress_service__ = __webpack_require__("../../../../../src/app/services/circle-progress.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameStatsComponent = (function () {
    function GameStatsComponent(circleProgressService) {
        this.circleProgressService = circleProgressService;
        this.circleValues = new __WEBPACK_IMPORTED_MODULE_1__objects_CircleValues__["a" /* CircleValues */]();
        this.circleProgressData = new __WEBPACK_IMPORTED_MODULE_2__objects_CircleProgressData__["a" /* CircleProgressData */]({
            percentage: 0,
            currentCircleIndex: 0,
            currentCircleTime: 0,
            shrinking: false
        });
    }
    GameStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.circleProgressService.circleProgressData$
            .subscribe(function (newProgressData) {
            _this.circleProgressData = newProgressData.getCopy();
        });
    };
    GameStatsComponent.prototype.getNextCircleTime = function () {
        if (this.circleProgressData.shrinking || this.circleProgressData.currentCircleIndex == 0) {
            if ((this.circleProgressData.currentCircleIndex + 1) >= this.circleValues.circles.length) {
                return 0;
            }
            else {
                return this.circleValues.circles[this.circleProgressData.currentCircleIndex + 1].circleTimeSeconds;
            }
        }
        else {
            return this.circleValues.circles[this.circleProgressData.currentCircleIndex].shrinkTimeSeconds;
        }
    };
    GameStatsComponent.prototype.getFinishTime = function () {
        if (!this.circleProgressData.shrinking) {
            return this.circleValues.circles[this.circleProgressData.currentCircleIndex].circleTimeSeconds;
        }
        else {
            return this.circleValues.circles[this.circleProgressData.currentCircleIndex].shrinkTimeSeconds;
        }
    };
    GameStatsComponent.prototype.getSecondsRemaining = function () {
        var endTime = 0;
        if (this.circleProgressData.shrinking) {
            endTime = this.circleValues.circles[this.circleProgressData.currentCircleIndex].shrinkTimeSeconds;
        }
        else {
            endTime = this.circleValues.circles[this.circleProgressData.currentCircleIndex].circleTimeSeconds;
        }
        return this.formatSeconds(endTime - this.circleProgressData.currentCircleTime);
    };
    GameStatsComponent.prototype.formatSeconds = function (totalSeconds) {
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds - (minutes * 60);
        var secondsString = seconds.toString();
        if (seconds < 10) {
            secondsString = "0" + seconds;
        }
        return minutes + ":" + secondsString;
    };
    GameStatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game-stats',
            template: __webpack_require__("../../../../../src/app/components/game-stats/game-stats.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_circle_progress_service__["a" /* CircleProgressService */]])
    ], GameStatsComponent);
    return GameStatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/progress-spinner/progress-spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/progress-spinner/progress-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-spinner style=\"padding-bottom: 5px;\" [value]=\"circleProgressData.percentage\" [color]=\"circleColor\"\n                      strokeWidth=\"80\">\n</mat-progress-spinner>\n\n<div style=\"padding-bottom:5px\">\n  <mat-chip-list>\n    <mat-chip color=\"warn\" [selected]=\"flashClosing\" *ngIf=\"circleProgressData.shrinking\" fxFlex>Circle Closing\n    </mat-chip>\n  </mat-chip-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/progress-spinner/progress-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_CircleValues__ = __webpack_require__("../../../../../src/app/objects/CircleValues.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_CircleProgressData__ = __webpack_require__("../../../../../src/app/objects/CircleProgressData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_circle_progress_service__ = __webpack_require__("../../../../../src/app/services/circle-progress.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgressSpinnerComponent = (function () {
    function ProgressSpinnerComponent(circleProgressService) {
        this.circleProgressService = circleProgressService;
        this.circleValues = new __WEBPACK_IMPORTED_MODULE_1__objects_CircleValues__["a" /* CircleValues */]();
        this.circleProgressData = new __WEBPACK_IMPORTED_MODULE_2__objects_CircleProgressData__["a" /* CircleProgressData */]({
            percentage: 0,
            currentCircleIndex: 0,
            currentCircleTime: 0,
            shrinking: false
        });
        this.circleColor = "primary";
        this.flashClosing = false;
    }
    ProgressSpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.circleProgressService.circleProgressData$
            .subscribe(function (newProgressData) {
            _this.circleProgressData = newProgressData.getCopy();
            _this.setPercentage();
        });
        this.flashingToken = setInterval(function () {
            _this.flashClosing = !_this.flashClosing;
        }, 400);
    };
    ProgressSpinnerComponent.prototype.setPercentage = function () {
        if (this.circleProgressData.percentage < 75) {
            this.circleColor = "primary";
        }
        else if (this.circleProgressData.percentage >= 75 && this.circleProgressData.percentage < 90) {
            this.circleColor = "accent";
        }
        else if (this.circleProgressData.percentage >= 90) {
            this.circleColor = "warn";
        }
    };
    ProgressSpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-progress-spinner',
            template: __webpack_require__("../../../../../src/app/components/progress-spinner/progress-spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/progress-spinner/progress-spinner.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_circle_progress_service__["a" /* CircleProgressService */]])
    ], ProgressSpinnerComponent);
    return ProgressSpinnerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/objects/CircleProgressData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleProgressData; });
var CircleProgressData = (function () {
    function CircleProgressData(json) {
        this.percentage = json.percentage;
        this.currentCircleIndex = json.currentCircleIndex;
        this.currentCircleTime = json.currentCircleTime;
        this.shrinking = json.shrinking;
    }
    CircleProgressData.prototype.getCopy = function () {
        return new CircleProgressData({
            percentage: this.percentage,
            currentCircleIndex: this.currentCircleIndex,
            currentCircleTime: this.currentCircleTime,
            shrinking: this.shrinking
        });
    };
    return CircleProgressData;
}());



/***/ }),

/***/ "../../../../../src/app/objects/CircleValues.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CircleValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleValues; });
var CircleValue = (function () {
    function CircleValue(circleJson) {
        this.diameter = circleJson.diameter;
        this.damage = circleJson.damage;
        this.circleTimeSeconds = circleJson.circleTime;
        this.shrinkTimeSeconds = circleJson.shrinkTime;
    }
    return CircleValue;
}());

var CircleValues = (function () {
    function CircleValues() {
        this.circles = [];
        //Circle 0, plane drop
        this.circles.push(new CircleValue({
            diameter: 4550,
            damage: 0,
            circleTime: 110,
            shrinkTime: 0
        }));
        //Circle 1
        this.circles.push(new CircleValue({
            diameter: 4550,
            damage: .4,
            circleTime: 300,
            shrinkTime: 300
        }));
        //Circle 2
        this.circles.push(new CircleValue({
            diameter: 2970,
            damage: .6,
            circleTime: 200,
            shrinkTime: 145
        }));
        //Circle 3
        this.circles.push(new CircleValue({
            diameter: 1480,
            damage: .8,
            circleTime: 145,
            shrinkTime: 90
        }));
        //Circle 4
        this.circles.push(new CircleValue({
            diameter: 740,
            damage: 1,
            circleTime: 120,
            shrinkTime: 60
        }));
        //Circle 5
        this.circles.push(new CircleValue({
            diameter: 360,
            damage: 3,
            circleTime: 120,
            shrinkTime: 40
        }));
        //Circle 6
        this.circles.push(new CircleValue({
            diameter: 175,
            damage: 5,
            circleTime: 90,
            shrinkTime: 30
        }));
        //Circle 7
        this.circles.push(new CircleValue({
            diameter: 90,
            damage: 7,
            circleTime: 90,
            shrinkTime: 30
        }));
        //Circle 8
        this.circles.push(new CircleValue({
            diameter: 40,
            damage: 11,
            circleTime: 60,
            shrinkTime: 15
        }));
        //Round End
        this.circles.push(new CircleValue({
            diameter: 40,
            damage: 11,
            circleTime: 300,
            shrinkTime: 0
        }));
    }
    return CircleValues;
}());



/***/ }),

/***/ "../../../../../src/app/services/circle-progress.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleProgressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_clock_service__ = __webpack_require__("../../../../../src/app/services/game-clock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_CircleValues__ = __webpack_require__("../../../../../src/app/objects/CircleValues.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_CircleProgressData__ = __webpack_require__("../../../../../src/app/objects/CircleProgressData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CircleProgressService = (function () {
    function CircleProgressService(gameClockService) {
        var _this = this;
        this.gameClockService = gameClockService;
        this.circleValues = new __WEBPACK_IMPORTED_MODULE_2__objects_CircleValues__["a" /* CircleValues */]();
        this.circleProgressData = new __WEBPACK_IMPORTED_MODULE_3__objects_CircleProgressData__["a" /* CircleProgressData */]({
            percentage: 0,
            currentCircleIndex: 0,
            currentCircleTime: 0,
            shrinking: false
        });
        this.circleProgressDataSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.circleProgressData$ = this.circleProgressDataSubject.asObservable();
        this.gameClockService.gameClockInSeconds$
            .subscribe(function (gameClockInSeconds) {
            _this.getPercentage(gameClockInSeconds);
        });
    }
    CircleProgressService.prototype.getPercentage = function (gameClockInSeconds) {
        var gameClockBeforeCircle = 0;
        for (var i = 0; i < this.circleProgressData.currentCircleIndex; i++) {
            gameClockBeforeCircle += this.circleValues.circles[i].circleTimeSeconds;
            gameClockBeforeCircle += this.circleValues.circles[i].shrinkTimeSeconds;
        }
        if (this.circleProgressData.shrinking) {
            gameClockBeforeCircle += this.circleValues.circles[this.circleProgressData.currentCircleIndex].circleTimeSeconds;
        }
        var gameClockDelta = gameClockInSeconds - gameClockBeforeCircle;
        var finishTime = this.getFinishTime();
        this.circleProgressData.currentCircleTime = gameClockDelta;
        var percentage = (gameClockDelta / finishTime) * 100;
        percentage = Math.round(percentage * 100) / 100;
        this.circleProgressData.percentage = percentage;
        if (this.circleProgressData.percentage > 100) {
            if (this.circleProgressData.shrinking || this.circleValues.circles[this.circleProgressData.currentCircleIndex].shrinkTimeSeconds == 0) {
                this.circleProgressData.currentCircleIndex += 1;
                this.circleProgressData.shrinking = false;
            }
            else {
                this.circleProgressData.shrinking = true;
            }
            this.circleProgressData.percentage = 0;
            if (this.circleProgressData.currentCircleIndex >= this.circleValues.circles.length - 1) {
                this.gameClockService.stopGameClock();
            }
        }
        this.circleProgressDataSubject.next(this.circleProgressData);
    };
    CircleProgressService.prototype.getFinishTime = function () {
        if (!this.circleProgressData.shrinking) {
            return this.circleValues.circles[this.circleProgressData.currentCircleIndex].circleTimeSeconds;
        }
        else {
            return this.circleValues.circles[this.circleProgressData.currentCircleIndex].shrinkTimeSeconds;
        }
    };
    CircleProgressService.prototype.resetProgress = function () {
        this.circleProgressData.percentage = 0;
        this.circleProgressData.currentCircleIndex = 0;
        this.circleProgressData.shrinking = false;
        this.circleProgressData.currentCircleTime = 0;
        this.circleProgressDataSubject.next(this.circleProgressData);
    };
    CircleProgressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_clock_service__["a" /* GameClockService */]])
    ], CircleProgressService);
    return CircleProgressService;
}());



/***/ }),

/***/ "../../../../../src/app/services/game-clock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameClockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameClockService = (function () {
    function GameClockService() {
        this.gameClockValue = 0;
        this.gameClockInSeconds = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.gameClockInSeconds$ = this.gameClockInSeconds.asObservable();
    }
    GameClockService.prototype.startGameClock = function () {
        var _this = this;
        if (this.timerToken == null) {
            this.timerToken = setInterval(function () {
                _this.gameClockValue += 1;
                _this.gameClockInSeconds.next(_this.gameClockValue);
            }, 1000);
        }
    };
    GameClockService.prototype.stopGameClock = function () {
        clearInterval(this.timerToken);
        this.timerToken = null;
    };
    GameClockService.prototype.resetGameClock = function () {
        this.stopGameClock();
        this.gameClockValue = 0;
        this.gameClockInSeconds.next(0);
    };
    GameClockService.prototype.setGameClock = function (gameClockValue) {
        this.gameClockValue = gameClockValue;
        this.gameClockInSeconds.next(this.gameClockValue);
    };
    GameClockService.prototype.increaseGameClock = function () {
        this.gameClockValue += 1;
        this.gameClockInSeconds.next(this.gameClockValue);
    };
    GameClockService.prototype.decreaseGameClock = function () {
        this.gameClockValue -= 1;
        this.gameClockInSeconds.next(this.gameClockValue);
    };
    GameClockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GameClockService);
    return GameClockService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map