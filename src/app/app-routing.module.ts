import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ForumThreadComponent } from "./components/forum-thread/forum-thread.component";
import { ForumNewThreadComponent } from "./components/forum-new-thread/forum-new-thread.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "forum-thread/:id",
    component: ForumThreadComponent
  },
  {
    path: "forum-thread/:id",
    component: ForumNewThreadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
