/**
 * Created by xieqiang on 2016/9/25.
 */
"use strict";
//及时编译
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_moudle_1 = require("./app.moudle");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_moudle_1.AppModule);
//预编译
// The browser platform without a compiler
// import { platformBrowser } from '@angular/platform-browser';
//
// // The app module factory produced by the static offline compiler
// import { AppModuleNgFactory } from '../aot/app/app.moudle.ngfactory';
//
// // Launch with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map