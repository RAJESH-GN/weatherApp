(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{kXT5:function(e,t,n){"use strict";n.r(t),n.d(t,"WidgetModule",function(){return A});var a=n("ofXK"),r=n("tyNb"),i=n("fXoL"),c=n("AytR"),s=n("tk/3");let o=(()=>{class e{constructor(e){this.http=e}getWeatherInfoWithCity(e){return this.http.get(`${c.a.weather_api_base_url}weather?q=${e}&units=metric&appid=${c.a.api_key}`)}getHourlyInfoOfCity(e,t){return this.http.get(`${c.a.weather_api_base_url}onecall?lat=${e}&units=metric&lon=${t}&exclude=daily,current,minutely,alerts&appid=${c.a.api_key}`)}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(s.a))},e.\u0275prov=i.Hb({token:e,factory:e.\u0275fac}),e})();var l=n("7EHt"),p=n("NFeN");let d=(()=>{class e{transform(e,t){return e+"\xb0C"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=i.Kb({name:"temperature",type:e,pure:!0}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["app-expansion-title"]],inputs:{parsedWeatherDetail:"parsedWeatherDetail"},decls:17,vars:15,consts:[[1,"temperature-details"],[1,"temperature-details__actual-temperature"],[1,"wind-info"],[1,"wind-info__speed"]],template:function(e,t){1&e&&(i.Ob(0,"h2"),i.lc(1),i.Nb(),i.Ob(2,"div",0),i.Ob(3,"p"),i.lc(4),i.Yb(5,"date"),i.Nb(),i.Ob(6,"p",1),i.lc(7),i.Yb(8,"temperature"),i.Yb(9,"number"),i.Nb(),i.Ob(10,"h2"),i.lc(11),i.Nb(),i.Ob(12,"span",2),i.Ob(13,"mat-icon"),i.lc(14,"air"),i.Nb(),i.Ob(15,"span",3),i.lc(16),i.Nb(),i.Nb(),i.Nb()),2&e&&(i.Ab(1),i.oc(" ",null==t.parsedWeatherDetail?null:t.parsedWeatherDetail.name,",",null==t.parsedWeatherDetail?null:t.parsedWeatherDetail.sys.country,"\n"),i.Ab(3),i.nc("As of ",i.ac(5,6,1e3*(null==t.parsedWeatherDetail?null:t.parsedWeatherDetail.dt),"HH:mm a"),""),i.Ab(3),i.nc(" ",i.ac(8,9,i.ac(9,12,null==t.parsedWeatherDetail?null:t.parsedWeatherDetail.main.temp,"1.0-0"),"Celsius")," "),i.Ab(4),i.mc(null==t.parsedWeatherDetail?null:t.parsedWeatherDetail.weather[0].main),i.Ab(5),i.nc("",null==t.parsedWeatherDetail?null:t.parsedWeatherDetail.wind.speed," m/s"))},directives:[p.a],pipes:[a.e,d,a.f],styles:[".temperature-details__actual-temperature[_ngcontent-%COMP%]{flex-grow:1;font-size:5rem;margin:1.5rem 0}.temperature-details[_ngcontent-%COMP%]   .wind-info[_ngcontent-%COMP%]{align-items:center;display:flex}.temperature-details[_ngcontent-%COMP%]   .wind-info__speed[_ngcontent-%COMP%]{margin:0 1rem}"]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["app-expansion-additional-info"]],inputs:{parsedWeatherDetail:"parsedWeatherDetail"},decls:14,vars:6,consts:[[1,"additional-info"]],template:function(e,t){1&e&&(i.Ob(0,"div",0),i.Ob(1,"p"),i.lc(2," Feels Like : "),i.Ob(3,"span"),i.lc(4),i.Yb(5,"temperature"),i.Nb(),i.Nb(),i.Ob(6,"p"),i.lc(7," Pressure: "),i.Ob(8,"span"),i.lc(9),i.Nb(),i.Nb(),i.Ob(10,"p"),i.lc(11," Clouds: "),i.Ob(12,"span"),i.lc(13),i.Nb(),i.Nb(),i.Nb()),2&e&&(i.Ab(4),i.mc(i.ac(5,3,null==t.parsedWeatherDetail?null:t.parsedWeatherDetail.main.feels_like,"celsius")),i.Ab(5),i.nc("",null==t.parsedWeatherDetail?null:t.parsedWeatherDetail.main.pressure," hpa"),i.Ab(4),i.nc("",null==t.parsedWeatherDetail?null:t.parsedWeatherDetail.clouds.all," %"))},pipes:[d],styles:[""]}),e})(),b=(()=>{class e{constructor(){this.iconSize=2,this.imageSize="small"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["app-weather-icon"]],inputs:{iconName:"iconName",iconSize:"iconSize",imageSize:"imageSize"},decls:1,vars:4,consts:[["alt","weather-icon",3,"src"]],template:function(e,t){1&e&&i.Mb(0,"img",0),2&e&&(i.Cb(t.imageSize),i.ec("src","http://openweathermap.org/img/wn/",t.iconName,"@",t.iconSize,"x.png",i.hc))},styles:[".small[_ngcontent-%COMP%]{height:4rem}.large[_ngcontent-%COMP%]{height:10rem}"]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["app-expansion-average-temperature"]],inputs:{parsedWeatherDetail:"parsedWeatherDetail"},decls:7,vars:16,consts:[["imageSize","large",3,"iconName","iconSize"]],template:function(e,t){1&e&&(i.Mb(0,"app-weather-icon",0),i.Ob(1,"p"),i.lc(2),i.Yb(3,"temperature"),i.Yb(4,"number"),i.Yb(5,"temperature"),i.Yb(6,"number"),i.Nb()),2&e&&(i.dc("iconName",null==t.parsedWeatherDetail?null:t.parsedWeatherDetail.weather[0].icon)("iconSize",4),i.Ab(2),i.oc(" ",i.ac(3,4,i.ac(4,7,null==t.parsedWeatherDetail?null:t.parsedWeatherDetail.main.temp_max,"1.0-0"),"Celsius")," / ",i.ac(5,10,i.ac(6,13,null==t.parsedWeatherDetail?null:t.parsedWeatherDetail.main.temp_min,"1.0-0"),"Celsius"),"\n"))},directives:[b],pipes:[d,a.f],styles:[".avg-temperature[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;font-size:1.6rem;justify-content:space-evenly}.avg-temperature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:1rem 0}"]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["app-expansion-description"]],inputs:{parsedWeatherDetail:"parsedWeatherDetail"},decls:4,vars:2,consts:[[1,"description-container"],[3,"parsedWeatherDetail"],[1,"avg-temperature"]],template:function(e,t){1&e&&(i.Ob(0,"div",0),i.Mb(1,"app-expansion-additional-info",1),i.Ob(2,"div",2),i.Mb(3,"app-expansion-average-temperature",1),i.Nb(),i.Nb()),2&e&&(i.Ab(1),i.dc("parsedWeatherDetail",t.parsedWeatherDetail),i.Ab(2),i.dc("parsedWeatherDetail",t.parsedWeatherDetail))},directives:[h,m],styles:[".description-container[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}"]}),e})();var g=n("bTqV"),w=n("lJxs"),_=n("Wp6s");function O(e,t){if(1&e&&(i.Ob(0,"mat-card",1),i.Ob(1,"p",2),i.lc(2),i.Yb(3,"date"),i.Nb(),i.Ob(4,"p",3),i.lc(5),i.Yb(6,"temperature"),i.Yb(7,"number"),i.Nb(),i.Ob(8,"p",4),i.Ob(9,"mat-icon"),i.lc(10,"air"),i.Nb(),i.Ob(11,"span"),i.lc(12),i.Nb(),i.Nb(),i.Ob(13,"p",5),i.Mb(14,"app-weather-icon",6),i.Nb(),i.Nb()),2&e){const e=t.$implicit;i.Ab(2),i.nc(" ",i.ac(3,5,1e3*e.dt,"HH:mm a, dd-MMM")," "),i.Ab(3),i.nc(" ",i.Zb(6,8,i.ac(7,10,e.temp,"1.0-0"))," "),i.Ab(7),i.nc("",e.wind_speed," m/s"),i.Ab(2),i.dc("iconName",e.weather[0].icon)("iconSize",2)}}let y=(()=>{class e{constructor(e){this.weatherDetailsService=e}ngOnInit(){var e,t;this.hourlyWeather=this.weatherDetailsService.getHourlyInfoOfCity(null===(e=this.coord)||void 0===e?void 0:e.lat,null===(t=this.coord)||void 0===t?void 0:t.lon).pipe(function(...e){const t=e.length;if(0===t)throw new Error("list of properties cannot be empty.");return n=>Object(w.a)(function(e,t){return n=>{let a=n;for(let r=0;r<t;r++){const t=null!=a?a[e[r]]:void 0;if(void 0===t)return;a=t}return a}}(e,t))(n)}("hourly"))}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(o))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-weatherinfo-hourly-details"]],inputs:{coord:"coord"},decls:2,vars:3,consts:[["class","weather-hourly",4,"ngFor","ngForOf"],[1,"weather-hourly"],[1,"weather-hourly__time"],[1,"weather-hourly__temperature"],[1,"weather-hourly__wind-info"],[1,"weather-hourly__temp-type"],[3,"iconName","iconSize"]],template:function(e,t){1&e&&(i.kc(0,O,15,13,"mat-card",0),i.Yb(1,"async")),2&e&&i.dc("ngForOf",i.Zb(1,1,t.hourlyWeather))},directives:[a.k,_.a,p.a,b],pipes:[a.b,a.e,d,a.f],styles:[".weather-hourly[_ngcontent-%COMP%]{align-items:center;background-color:var(--grey-bg);border-bottom:1px solid #fff;color:#fff;display:flex;justify-content:space-between;padding:.8rem}.weather-hourly__temp-type[_ngcontent-%COMP%], .weather-hourly__temperature[_ngcontent-%COMP%], .weather-hourly__time[_ngcontent-%COMP%], .weather-hourly__wind-info[_ngcontent-%COMP%]{flex-basis:25%}.weather-hourly__wind-info[_ngcontent-%COMP%]{align-items:center;display:flex}.weather-hourly__wind-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.weather-hourly__temp-type[_ngcontent-%COMP%]{text-align:end}"]}),e})();function W(e,t){if(1&e&&(i.Ob(0,"div",9),i.Mb(1,"app-weatherinfo-hourly-details",10),i.Nb()),2&e){const e=i.Xb().$implicit;i.Ab(1),i.dc("coord",e.coord)}}function D(e,t){if(1&e){const e=i.Pb();i.Ob(0,"mat-expansion-panel",2),i.Vb("opened",function(){i.gc(e);const n=t.index;return i.Xb(2).setStep(n)}),i.Ob(1,"mat-expansion-panel-header",3),i.Ob(2,"mat-panel-title",4),i.Mb(3,"app-expansion-title",5),i.Nb(),i.Ob(4,"mat-panel-description",6),i.Mb(5,"app-expansion-description",5),i.Nb(),i.Nb(),i.kc(6,W,2,1,"ng-template",7),i.Ob(7,"mat-action-row"),i.Ob(8,"button",8),i.Vb("click",function(){return i.gc(e),i.Xb(2).nextStep()}),i.lc(9," Next "),i.Nb(),i.Nb(),i.Nb()}if(2&e){const e=t.$implicit,n=t.index,a=i.Xb(2);i.dc("id",n)("expanded",a.step===n),i.Ab(3),i.dc("parsedWeatherDetail",e),i.Ab(2),i.dc("parsedWeatherDetail",e)}}function M(e,t){if(1&e&&(i.Ob(0,"mat-accordion"),i.kc(1,D,10,4,"mat-expansion-panel",1),i.Nb()),2&e){const e=i.Xb();i.Ab(1),i.dc("ngForOf",e.parsedWeatherDetails)}}let v=(()=>{class e{constructor(){this.step=0}setStep(e){this.step=e}nextStep(){this.step++}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["app-weatherinfo-widget"]],inputs:{parsedWeatherDetails:"parsedWeatherDetails"},decls:1,vars:1,consts:[[4,"ngIf"],["hideToggle","","class","weather-card",3,"id","expanded","opened",4,"ngFor","ngForOf"],["hideToggle","",1,"weather-card",3,"id","expanded","opened"],[1,"weather-card__header"],[1,"title"],[3,"parsedWeatherDetail"],[1,"description"],["matExpansionPanelContent",""],["mat-raised-button","","color","accent",1,"action-next",3,"click"],[1,"hourly-details-container"],[3,"coord"]],template:function(e,t){1&e&&i.kc(0,M,2,1,"mat-accordion",0),2&e&&i.dc("ngIf",t.parsedWeatherDetails)},directives:[a.l,l.a,a.k,l.c,l.g,l.h,u,l.f,f,l.e,l.d,g.a,y],styles:[".weather-card[_ngcontent-%COMP%]{background-color:var(--grey-bg);margin:1rem auto;width:50%}@media screen and (max-width:60rem){.weather-card[_ngcontent-%COMP%]{width:100%}}.weather-card__header[_ngcontent-%COMP%]{height:20rem}.weather-card__header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#eee;flex-basis:15rem;flex-direction:column;justify-content:center}.weather-card__header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{align-items:center;color:#eee;font-size:1.8rem;justify-content:space-between}.weather-card__header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   app-expansion-description[_ngcontent-%COMP%]{width:100%}.weather-card[_ngcontent-%COMP%]   .hourly-details-container[_ngcontent-%COMP%]{max-height:25rem;overflow-y:scroll}"]}),e})();const C=[{path:"",component:(()=>{class e{constructor(e){this.weatherDetailsService=e,this.parsedWeatherDetails=[]}ngOnInit(){this.getWeatherDetails()}getWeatherDetails(){["Amsterdam","Rotterdam","Berlin","London","Spain"].forEach(e=>{this.weatherDetailsService.getWeatherInfoWithCity(e).subscribe(e=>{this.parsedWeatherDetails.push(e)})})}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(o))},e.\u0275cmp=i.Fb({type:e,selectors:[["app-weatherinfo-widget-list"]],decls:2,vars:1,consts:[[1,"weather-info-list"],[3,"parsedWeatherDetails"]],template:function(e,t){1&e&&(i.Ob(0,"div",0),i.Mb(1,"app-weatherinfo-widget",1),i.Nb()),2&e&&(i.Ab(1),i.dc("parsedWeatherDetails",t.parsedWeatherDetails))},directives:[v],styles:[".weather-info-list[_ngcontent-%COMP%]{padding:2rem}"]}),e})()}];let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({imports:[[r.a.forChild(C)],r.a]}),e})();var x=n("hctd");let P=(()=>{class e{static forRoot(){return{ngModule:e}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({}),e})(),A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({providers:[o],imports:[[a.c,s.b,N,P,x.a]]}),e})()}}]);