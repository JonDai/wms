import {NgModule, ErrorHandler} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import {routing} from "./app.routing";
import {AppComponent} from "./app.compent";
import {DashBordComponent} from "./dashbord.compent";


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

@NgModule({
    imports: [
        routing,
        BrowserModule

      ],
   
    declarations: [ AppComponent, DashBordComponent],
    // providers: [{provide: ErrorHandler, useClass: GlableErrorHandle}],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
