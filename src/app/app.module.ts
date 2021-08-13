import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './core/component/index/index.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutUsComponent } from './core/component/about-us/about-us.component';
import { BlogComponent } from './core/component/blog/blog.component';
import { ClientComponent } from './core/component/client/client.component';
import { ContactUsComponent } from './core/component/contact-us/contact-us.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './shared/header/header.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ServicesComponent } from './core/component/services/services.component';

import { PortfolioComponent } from './core/component/portfolio/portfolio.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WebDevelopmentComponent } from './core/component/web-development/web-development.component';
import { QueryFormComponent } from './shared/query-form/query-form.component';
import { MobileDevelopmentComponent } from './core/component/mobile-development/mobile-development.component';
import { CmsDevelopmentComponent } from './core/component/cms-development/cms-development.component';
import { SoftwareDevelopmentComponent } from './core/component/software-development/software-development.component';
import { CloudComputingComponent } from './core/component/cloud-computing/cloud-computing.component';
import { DigitalMarketingComponent } from './core/component/digital-marketing/digital-marketing.component';
import { MobilePortfolioComponent } from './core/component/mobile-portfolio/mobile-portfolio.component';
import { WebsitePortfolioComponent } from './core/component/website-portfolio/website-portfolio.component';
import { WebappPortfolioComponent } from './core/component/webapp-portfolio/webapp-portfolio.component';

import { QuotationComponent } from './shared/quotation/quotation.component';

import { TeamComponent } from './core/component/team/team.component';
import { TermConditionComponent } from './core/component/term-condition/term-condition.component';
import { TrainingComponent } from './core/component/training/training.component';
import { SkyLiveComponent } from './core/component/sky-live/sky-live.component';


import { PrivacyPolicyComponent } from './core/component/privacy-policy/privacy-policy.component';

import { CareerComponent } from './core/component/career/career.component';
import { ClientCaseStudyComponent } from './core/component/client-case-study/client-case-study.component';
import { JobDetailComponent } from './core/component/job-detail/job-detail.component';
import { RegistrationComponent } from './core/component/registration/registration.component';
import { IotDevelopmentComponent } from './core/component/iot/iot-development.component';
import { AstrobazarComponent } from './core/component/astrobazar/astrobazar.component';
import { EvergreenkartComponent } from './core/component/evergreenkart/evergreenkart.component';
import { StylehouseComponent } from './core/component/stylehouse/stylehouse.component';
import { TarotReadComponent } from './core/component/tarot/tarot-read/tarot-read.component';
import { TarotTellerComponent } from './core/component/tarot/tarot-teller/tarot-teller.component';
import { FreeHoroComponent } from './core/component/tarot/free-horo/free-horo.component';
import { ErrorComponent } from './shared/error/error.component';
import { QuotationFormComponent } from './core/component/quotation-form/quotation-form.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoanpemoneyComponent } from './core/component/loanpemoney/loanpemoney.component';
import { DreamteamComponent } from './core/component/dreamteam/dreamteam.component';
import { BrandwingsComponent } from './core/component/brandwings/brandwings.component';
import { RatiramchanderComponent } from './core/component/ratiramchander/ratiramchander.component';
import { AuditassistComponent } from './core/component/auditassist/auditassist.component';

import { WebBlogComponent } from './core/component/web-blog/web-blog.component';

import { NijomeeBlogComponent } from './core/component/nijomee-blog/nijomee-blog.component';
import { SideBlogComponent } from './core/component/side-blog/side-blog.component';
import { HallBookComponent } from './core/component/hall-book/hall-book.component';
import { FlyzerComponent } from './core/component/flyzer/flyzer.component';
import { PaisarupeeComponent } from './core/component/paisarupee/paisarupee.component';
import { CricteamComponent } from './core/component/cricteam/cricteam.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    BlogComponent,
    ClientComponent,
    ContactUsComponent,
    ServicesComponent,
    PortfolioComponent,
    WebDevelopmentComponent,
    QueryFormComponent,
    MobileDevelopmentComponent,
    CmsDevelopmentComponent,
    SoftwareDevelopmentComponent,
    CloudComputingComponent,
    DigitalMarketingComponent,
    MobilePortfolioComponent,
    WebsitePortfolioComponent,
    WebappPortfolioComponent,
    QuotationFormComponent,
    QuotationComponent,
    TeamComponent,
    TermConditionComponent,
    TrainingComponent,
    SkyLiveComponent,
    PrivacyPolicyComponent,
    CareerComponent,
    ClientCaseStudyComponent,
    JobDetailComponent,
    RegistrationComponent,
    IotDevelopmentComponent,
    AstrobazarComponent,
    EvergreenkartComponent,
    StylehouseComponent,
    TarotReadComponent,
    TarotTellerComponent,
    FreeHoroComponent,
    ErrorComponent,
    LoanpemoneyComponent,
    DreamteamComponent,
    BrandwingsComponent,
    RatiramchanderComponent,
    AuditassistComponent,
    WebBlogComponent,
    NijomeeBlogComponent,
    SideBlogComponent,
    HallBookComponent,
    FlyzerComponent,
    PaisarupeeComponent,
    CricteamComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
