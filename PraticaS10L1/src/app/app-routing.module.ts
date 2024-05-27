import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',//redireziona l'utente
    pathMatch: 'full'//per far si che il path vuoto venga riconosciuto correttamente
  },
  {
    path:'home',
    component: HomeComponent,
    title:'Home'
  },
  {
    path:"inactive-posts",
    component:InactivePostsComponent,
    title:'Inactive Posts'
  },
  {
    path:"active-posts",
    component:ActivePostsComponent,
    title:'Active Posts'
  },
  {
    path:'post/:id',
    component: PostDetailComponent,
    title:'Post Detail'
  },
  {
    //questo path va messo alla fine della lista delle rotte
    path:'**',//pagina 404
    component: Page404Component,
    title:'Not Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
