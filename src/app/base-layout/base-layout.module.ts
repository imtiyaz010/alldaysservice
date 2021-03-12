import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { BaseLayoutComponent } from './base-layout.component';
import { HomePageComponent } from '../homepage/homepage.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutUsPageComponent } from '../aboutus/aboutus.component';
import { ContactUsPageComponent } from '../contactus/contactus.component';

const broutes:Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            {
                path: '',
                component: HomePageComponent,
            },
            {
                path: 'about-us',
                component: AboutUsPageComponent
            },
            {
                path: 'contact-us',
                component: ContactUsPageComponent
            }
        ]
    }
] 
@NgModule({
  declarations: [
    BaseLayoutComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsPageComponent,
    ContactUsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(broutes),
  ],
})
export class BaseLayoutModule { }
