import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'contact',component:ContactComponent,title:'Contact'},
  {path:'about',component:AboutComponent,title:'About'},
  {path:'portfolio',component:PortfolioComponent,title:'Portfolio'},
  {path:'**',component:NotFoundComponent,title:'Not Found'},
];
