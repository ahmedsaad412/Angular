import { TodosComponent } from './Components/todos/todos.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { TodoDetailsComponent } from './Components/todo-details/todo-details.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'aboutus', component: AboutUsComponent, title: 'AboutUs' },
  { path: 'contactus', component: ContactUsComponent, title: 'ContactUS' },
  { path: 'todos', component: TodosComponent, title: 'Todos' },
  { path: 'todos/:id', component: TodoDetailsComponent, title: 'Todo Details' },
  { path: '**', component: NotfoundComponent, title: 'Home' },
];
