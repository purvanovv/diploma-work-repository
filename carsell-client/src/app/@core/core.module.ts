import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { RouteReusableStrategy } from './route-reusable-strategy';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { HttpAuthenticateInterceptor } from './http/http-authenticate.interceptor';
import { HttpService } from './http/http.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
    {
      provide: HttpClient,
      useClass: HttpService,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
