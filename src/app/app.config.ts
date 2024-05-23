import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: 'AIzaSyC6fV1YQRa0oDkHtcQXHUMC4WrALDg6d80',
          authDomain: 'lab4-ejercicios-9dc29.firebaseapp.com',
          projectId: 'lab4-ejercicios-9dc29',
          storageBucket: 'lab4-ejercicios-9dc29.appspot.com',
          messagingSenderId: '341745439943',
          appId: '1:341745439943:web:daa91dac8d0f24d453dae2',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
