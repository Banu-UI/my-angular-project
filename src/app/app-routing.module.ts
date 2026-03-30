import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './flight/search-result/search-result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search-result', component: SearchResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}   // ✅ MUST be present