import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ForumThreadComponent } from "./components/forum-thread/forum-thread.component";
import { ForumThreadListComponent } from "./components/forum-thread-list/forum-thread-list.component";
import { ForumNewThreadComponent } from "./components/forum-new-thread/forum-new-thread.component";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    ForumThreadComponent,
    ForumThreadListComponent,
    ForumNewThreadComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
