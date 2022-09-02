import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {AudioGameComponent} from "./pages/audio-game/audio-game.component";

const routes: Routes = [
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'audio_game', component: AudioGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
