import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './core/component/about-us/about-us.component';
import { AstrobazarComponent } from './core/component/astrobazar/astrobazar.component';
import { AuditassistComponent } from './core/component/auditassist/auditassist.component';

import { BlogComponent } from './core/component/blog/blog.component';
import { BrandwingsComponent } from './core/component/brandwings/brandwings.component';
import { CareerComponent } from './core/component/career/career.component';
import { ClientCaseStudyComponent } from './core/component/client-case-study/client-case-study.component';
import { ClientComponent } from './core/component/client/client.component';
import { CloudComputingComponent } from './core/component/cloud-computing/cloud-computing.component';
import { CmsDevelopmentComponent } from './core/component/cms-development/cms-development.component';
import { ContactUsComponent } from './core/component/contact-us/contact-us.component';
import { CricteamComponent } from './core/component/cricteam/cricteam.component';
import { DigitalMarketingComponent } from './core/component/digital-marketing/digital-marketing.component';
import { DreamteamComponent } from './core/component/dreamteam/dreamteam.component';
import { EvergreenkartComponent } from './core/component/evergreenkart/evergreenkart.component';
import { FlyzerComponent } from './core/component/flyzer/flyzer.component';
import { HallBookComponent } from './core/component/hall-book/hall-book.component';

import { IndexComponent } from './core/component/index/index.component';
import { IotDevelopmentComponent } from './core/component/iot/iot-development.component';
import { JobDetailComponent } from './core/component/job-detail/job-detail.component';
import { LoanpemoneyComponent } from './core/component/loanpemoney/loanpemoney.component';
import { MobileDevelopmentComponent } from './core/component/mobile-development/mobile-development.component';
import { MoneyReelComponent } from './core/component/money-reel/money-reel.component';
import { NijomeeBlogComponent } from './core/component/nijomee-blog/nijomee-blog.component';
import { PaisarupeeComponent } from './core/component/paisarupee/paisarupee.component';

import { PortfolioComponent } from './core/component/portfolio/portfolio.component';
import { PrivacyPolicyComponent } from './core/component/privacy-policy/privacy-policy.component';
import { QuotationFormComponent } from './core/component/quotation-form/quotation-form.component';
import { RatiramchanderComponent } from './core/component/ratiramchander/ratiramchander.component';
import { RegistrationComponent } from './core/component/registration/registration.component';

import { ServicesComponent } from './core/component/services/services.component';
import { SitemapComponent } from './core/component/sitemap/sitemap.component';
import { SkyLiveComponent } from './core/component/sky-live/sky-live.component';
import { SoftwareDevelopmentComponent } from './core/component/software-development/software-development.component';
import { StylehouseComponent } from './core/component/stylehouse/stylehouse.component';
import { FreeHoroComponent } from './core/component/tarot/free-horo/free-horo.component';
import { TarotReadComponent } from './core/component/tarot/tarot-read/tarot-read.component';
import { TarotTellerComponent } from './core/component/tarot/tarot-teller/tarot-teller.component';

import { TeamComponent } from './core/component/team/team.component';
import { TermConditionComponent } from './core/component/term-condition/term-condition.component';

import { TrainingComponent } from './core/component/training/training.component';
import { UiUxComponent } from './core/component/ui-ux/ui-ux.component';
import { WebDevelopmentComponent } from './core/component/web-development/web-development.component';
import { DevopsComponent } from './devops/devops.component';
import { IosDevelopmentComponent } from './ios-development/ios-development.component';
import { ErrorComponent } from './shared/error/error.component';
import { blogTitle } from './utils/blogs';
import { jobDetails } from './utils/job-details';

import { allCities } from './utils/Seolist';

const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },
  {
    path:"index",
    component:IndexComponent
  },
  {
    path:"about-us",
    component:AboutUsComponent
  },
  {
    path:"blogs",
    component:BlogComponent
  },
  ...blogTitle.map(e=>({
    path:`nijomee-blogs/${e}`,
    component:NijomeeBlogComponent,
  })),
  {
    path:"career",
    component:CareerComponent
  },
  ...jobDetails.map(e=>({
    path:`job-details-${e}`,
    component:JobDetailComponent,
  })),
  {
    path:"cloud-computing",
    component:CloudComputingComponent
  },
  {
    path:"cms-development",
    component:CmsDevelopmentComponent
  },
  {
    path:"contact",
    component:ContactUsComponent
  },
  {
    path:"clients",
    component:ClientComponent
  },
  {
    path:"client-case-study",
    component:ClientCaseStudyComponent
  },
  {
    path:"digital-marketing",
    component:DigitalMarketingComponent
  },
  {
    path:"mobile-development",
    component:MobileDevelopmentComponent
  },
  {
    path:"ios-development",
    component:IosDevelopmentComponent
  },
  {
    path:"devops",
    component:DevopsComponent
  },
  {
    path:"portfolio",
    component:PortfolioComponent
  },
  {
    path:"privacy-policy",
    component:PrivacyPolicyComponent
  },
  {
    path:"services",
    component:ServicesComponent
  },
  {
    path:"sky-live",
    component:SkyLiveComponent
  },
  {
    path:"software-development",
    component:SoftwareDevelopmentComponent
  },
  {
    path:"team",
    component:TeamComponent
  },
  {
    path:"terms-and-conditions",
    component:TermConditionComponent
  },
  {
    path:"nijomee-training-cum-workshop-program",
    component:TrainingComponent
  },
  {
    path:"nijomee-internship-program-wings-for-kings",
    component:RegistrationComponent
  },
  {
    path:"web-development",
    component:WebDevelopmentComponent
  },
  {
    path:"iot-development",
    component:IotDevelopmentComponent
  },
  {
    path:"sitemap",
    component:SitemapComponent
  },
  {
    path:"uiux-designer",
    component:UiUxComponent
  },
  //Designer Development
...allCities.map(e=>({
  path:`uiux-designer-company-in-${e}`,
  component:UiUxComponent
})),
...allCities.map(e=>({
  path:`top-uiux-designer-company-in-${e}`,
  component:UiUxComponent

})),
...allCities.map(e=>({
  path:`best-uiux-designer-company-in-${e}`,
  component:UiUxComponent
})),
//IOt Development
...allCities.map(e=>({
  path:`iot-development-company-in-${e}`,
  component:IotDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-iot-development-company-in-${e}`,
  component:IotDevelopmentComponent
})),
...allCities.map(e=>({
  path:`top-iot-development-company-in-${e}`,
  component:IotDevelopmentComponent
})),
//App Development
...allCities.map(e=>({
  path:`app-development-company-in-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`top-app-development-company-in-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-app-development-company-in-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`mobile-app-development-company-in-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-mobile-app-development-company-in-${e}`,
  component:MobileDevelopmentComponent
})),

...allCities.map(e=>({
  path:`top-mobile-app-development-company-in-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`android-app-development-company-in-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`top-android-app-development-company-in-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-android-app-development-company-in-${e}`,
  component:MobileDevelopmentComponent
})),

...allCities.map(e=>({
  path:`mobile-development-company-in-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-mobile-development-company-in-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`top-mobile-development-company-in-${e}`,
  component:MobileDevelopmentComponent
})),

//IOS Development
...allCities.map(e=>({
  path:`ios-app-development-company-in-${e}`,
  component:IosDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-ios-app-development-company-in-${e}`,
  component:IosDevelopmentComponent
})),
...allCities.map(e=>({
  path:`top-ios-app-development-company-in-${e}`,
  component:IosDevelopmentComponent
})),
//Developer
...allCities.map(e=>({
  path:`top-mobile-app-developers-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-mobile-app-developers-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`mobile-app-developers-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`top-app-developers-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-app-developers-${e}`,
  component:MobileDevelopmentComponent
})),
...allCities.map(e=>({
  path:`app-developers-${e}`,
  component:MobileDevelopmentComponent
})),

//cms Development
...allCities.map(e=>({
  path:`cms-development-company-in-${e}`,
  component:CmsDevelopmentComponent
})),
...allCities.map(e=>({
  path:`top-cms-development-company-in-${e}`,
  component:CmsDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-cms-development-company-in-${e}`,
  component:CmsDevelopmentComponent
})),
//Web Development

...allCities.map(e=>({
  path:`web-development-company-in-${e}`,
  component:WebDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-web-development-company-in-${e}`,
  component:WebDevelopmentComponent
})),
...allCities.map(e=>({
  path:`top-web-development-company-in-${e}`,
  component:WebDevelopmentComponent
})),
...allCities.map(e=>({
  path:`web-app-company-in-${e}`,
  component:WebDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-web-app-company-in-${e}`,
  component:WebDevelopmentComponent
})),
...allCities.map(e=>({
  path:`top-web-app-company-in-${e}`,
  component:WebDevelopmentComponent
})),
...allCities.map(e=>({
  path:`web-app-development-company-in-${e}`,
  component:WebDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-web-app-development-company-in-${e}`,
  component:WebDevelopmentComponent
})),
...allCities.map(e=>({
  path:`top-web-app-development-company-in-${e}`,
  component:WebDevelopmentComponent
})),

//web Development
//Software Development
...allCities.map(e=>({
  path:`Software-development-company-in-${e}`,
  component:SoftwareDevelopmentComponent
})),
...allCities.map(e=>({
  path:`top-Software-development-company-in-${e}`,
  component:SoftwareDevelopmentComponent
})),
...allCities.map(e=>({
  path:`best-Software-development-company-in-${e}`,
  component:SoftwareDevelopmentComponent
})),
//cloud Computing
...allCities.map(e=>({
  path:`cloud-computing-company-in-${e}`,
  component:CloudComputingComponent
})),
...allCities.map(e=>({
  path:`best-cloud-computing-company-in-${e}`,
  component:CloudComputingComponent

})),
...allCities.map(e=>({
  path:`top-cloud-computing-company-in-${e}`,
  component:CloudComputingComponent
})),
//Digital Marketing
...allCities.map(e=>({
  path:`digital-marketing-company-in-${e}`,
  component:DigitalMarketingComponent
})),
...allCities.map(e=>({
  path:`top-digital-marketing-company-in-${e}`,
  component:DigitalMarketingComponent
})),
...allCities.map(e=>({
  path:`best-digital-marketing-company-in-${e}`,
  component:DigitalMarketingComponent
})),
//Training
...allCities.map(e=>({
  path:`industrial-trainning-and-internship-in-${e}`,
  component:RegistrationComponent
})),
...allCities.map(e=>({
  path:`best-industrial-trainning-and-internship-in-${e}`,
  component:RegistrationComponent
})),
...allCities.map(e=>({
  path:`top-industrial-trainning-and-internship-in-${e}`,
  component:RegistrationComponent
})),
{
  path:"astro-bazar",
  component:AstrobazarComponent
},
{
  path:"evergreenkart",
  component:EvergreenkartComponent
},
{
  path:"style-house",
  component:StylehouseComponent
},
{
  path:"tarot-read",
  component:TarotReadComponent
},
{
  path:"tarot-teller",
  component:TarotTellerComponent
},
{
  path:"free-horo",
  component:FreeHoroComponent
},
{
  path:"get-quotation",
  component:QuotationFormComponent
},
{
  path:"loanpemoney",
  component:LoanpemoneyComponent
},
{
  path:"dreamteam",
  component:DreamteamComponent
},
{
  path:"cricteam",
  component:CricteamComponent
},
{
  path:"audit-assist",
  component:AuditassistComponent
},
{
  path:"brandwings",
  component:BrandwingsComponent
},
{
  path:"flyzer",
  component:FlyzerComponent
},
{
  path:"book-my-place",
  component:HallBookComponent
},
{
  path:"sky-live",
  component:SkyLiveComponent
},
{
  path:"paisarupee",
  component:PaisarupeeComponent
},
{
  path:"ratiramchander",
  component:RatiramchanderComponent
},
{
  path:"moneyreel",
  component:MoneyReelComponent
},
{
  path:"**",
  component:ErrorComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
