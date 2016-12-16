"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_1 = require("./app.routing");
var app_compent_1 = require("./app.compent");
var dashbord_compent_1 = require("./dashbord.compent");
// export class GlableErrorHandle implements ErrorHandler {
//     // constructor(
//     //     private router: Router) {
//     // }
//     handleError(error:any):void {
//         console.error("error:"+error);
//         if (error.rejection) {
//             let status = error.rejection.status;
//             if(status==401){
//                  //this.router.navigate(["/login"]);
//                 window.location.href = "/login";
//             }else if(status==403){
//                 alert("您无此操作权限");
//             }else{
//                 alert("未知错误:"+status);
//             }
//         }else {
//             alert("出错误了!");
//         }
//     }
// }
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                app_routing_1.routing,
                platform_browser_1.BrowserModule
            ],
            declarations: [app_compent_1.AppComponent, dashbord_compent_1.DashBordComponent],
            // providers: [{provide: ErrorHandler, useClass: GlableErrorHandle}],
            bootstrap: [app_compent_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.moudle.js.map