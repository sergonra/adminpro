import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    AccountsettingsComponent,
  ],
   exports: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
   ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
  ]

})
export class PagesModule { }
