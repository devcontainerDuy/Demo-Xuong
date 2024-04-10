import { Routes } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TourtrongnuocComponent } from './tourtrongnuoc/tourtrongnuoc.component';
import { TourquocteComponent } from './tourquocte/tourquocte.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { TimkiemComponent } from './timkiem/timkiem.component';
import { GiohangComponent } from './giohang/giohang.component';

export const routes: Routes = [
    { path: '', component: TrangchuComponent },
    { path: 'trangchu', component: TrangchuComponent },
    { path: 'tourtrongnuoc', component: TourtrongnuocComponent },
    { path: 'tourquocte', component: TourquocteComponent },
    { path: 'lienhe', component: LienheComponent },
    { path: 'gioithieu', component: GioithieuComponent },
    { path: 'tintuc', component: TintucComponent },
    { path: 'chitietsanpham/:id', component: ChitietsanphamComponent },
    { path: 'timkiem', component: TimkiemComponent },
    { path: 'giohang', component: GiohangComponent }
];
