import { TabsPage } from './tabs.page';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'zorro',
        loadChildren: async () => import('../../pages/zorro/zorro.module').then(z => z.ZorroPageModule)
      },
      {
        path: 'food',
        loadChildren: async () => import('../../pages/food/food.module').then(f => f.FoodPageModule)
      },
      {
        path: '',
        redirectTo: 'zorro' ,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
