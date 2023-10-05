import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/template/header/header.component';
import { MenuComponent } from './componets/menu/menu.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApresentacaoComponent } from './componets/apresentacao/apresentacao.component';
import { SobreMinComponent } from './componets/Template/sobre-min/sobre-min.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ApresentacaoComponent,
    SobreMinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
