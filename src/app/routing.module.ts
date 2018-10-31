import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ProductListSidebarComponent } from "./product-list-sidebar/product-list-sidebar.component";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
  { path: "",component: SidebarComponent },
  {
    path: "products",
    component: ProductListSidebarComponent,
    outlet: "page1"
  },
  {
    path: "products",
    component: ProductListComponent,
    outlet: "page2"
  },
  { path: 'page3',component: ProductDetailComponent, children:[
    { path: ':index', component: ProductListSidebarComponent},
    { path: ':index/edit', component: ProductListComponent, outlet:'editsection'}
  ]}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
