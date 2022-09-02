import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {AudioGameComponent} from "./pages/audio-game/audio-game.component";
import { SprintGameComponent } from './pages/sprint-game/sprint-game.component';
import { TextbookComponent } from './pages/textbook/textbook.component';

const routes: Routes = [
  { path: '', redirectTo: 'authorization', pathMatch: 'full' },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'audio_game', component: AudioGameComponent},
  { path: 'textbook', component: TextbookComponent }
  { path: 'textbook', component: TextbookComponent },
  { path: 'sprint', component: SprintGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
