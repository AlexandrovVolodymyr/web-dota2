// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyD9d1WPwF16yNqCxkDB5Msx13aRsnymslc',
    authDomain: 'web-dota2-367017.firebaseapp.com',
    projectId: 'web-dota2-367017',
    storageBucket: 'web-dota2-367017.appspot.com',
    messagingSenderId: '293796661410',
    appId: '1:293796661410:web:26fd6d4f63f662512baffb',
    measurementId: 'G-75VB5L70H9'
  },
  twitchConfig: {
    clientId: 'erq8dka4bi18meajzcd1r0888c6h8n',
    secretId: '3vjn13wzvntrdf42svb0wjdduw5l3n',
    url: 'https://id.twitch.tv/oauth2',
    helix: 'https://api.twitch.tv/helix',
    dota_id: '29595',
    redirect_uri: 'http://localhost:4200/home'
  },
  emailjs: {
    publicKey: 'AaRlFYEuEd9tC-hf-',
    serviceId: 'service_0wddr5i',
    templateId: 'template_ieksr9r'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
