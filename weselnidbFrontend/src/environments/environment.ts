// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  host : '/api/driver/api',
  clientHost : '/api/client/api',
  mapBoxKey : 'pk.eyJ1IjoidnZvb3giLCJhIjoiY2tnYnV4dmFvMDBicDMycDhoMjdlbTFzciJ9.IGwX4WBr4qxtJP4TY1xmPQ',
  mapBoxContainer : 'sk.eyJ1IjoidnZvb3giLCJhIjoiY2tnYnV6a2szMGg1aTJxcWF6eW1iOGVvbiJ9.og41XADM6DI0fWJbUBxfIQ',
  // loginHost : '/api/api/auth',
  // refreshHost : '/api/api/refresh',
  // BASEURL : 'http://localhost:8080/api'
  BASEURL : 'http://localhost:8080/api',
  BASE: 'http://localhost:8080/',
  WebSocket : 'http://localhost:8080/chat'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
