Cr.img=function(e){events_key=!1,load_event_key=!1;for(i in e)"event"==i.substring(0,5)?events_key=i:"loadevent"==i.substring(0,9)&&(load_event_key=i);if(!events_key)return this.elm("img",e);load_event_key||(load_event_key="loadevents",e[load_event_key]=[]),events_key||(events_key="events",e[events_key]=[]),"string"==typeof e[load_event_key][0]&&(e[load_event_key]=[e[load_event_key]]),"string"==typeof e[events_key][0]&&(e[events_key]=[e[events_key]]);var n=[];for(i in e[events_key])"load"==e[events_key][i][0]?e[load_event_key].push(e[events_key][i]):n.push(e[events_key][i]);e[events_key]=n;var t={loadevents:e[load_event_key],events:e[events_key]};for(i in e)i!=load_event_key&&i!=events_key&&(t[i]=e[i]);return e=t,this.elm("img",e)};
//# sourceMappingURL=Cr-img_min.js.map