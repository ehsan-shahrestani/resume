
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig
// {
//     providers: [
//         importProvidersFrom(BrowserModule, AppRoutingModule, ToastrModule.forRoot(), ServiceWorkerModule.register('ngsw-worker.js', {
//             enabled: !isDevMode(),
//             // Register the ServiceWorker as soon as the application is stable
//             // or after 30 seconds (whichever comes first).
//             registrationStrategy: 'registerWhenStable:30000'
//         })),
//         provideAnimations()
//     ]
// }
)
  .catch(err => console.error(err));
