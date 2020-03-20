import { Component, OnInit } from "@angular/core";
import { thread } from "../model/thread";
import { ThreadService } from "../../services/thread.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-forum-new-thread",
  templateUrl: "./forum-new-thread.component.html",
  styleUrls: ["./forum-new-thread.component.sass"]
})
export class ForumNewThreadComponent implements OnInit {
  currentThread = <thread>{};
  newThreadBool = false;
  constructor(private ts: ThreadService, private router: Router) {
    this.currentThread = {
      id: 0,
      author: "",
      publishDate: "",
      title: "",
      content: "",
      category: "",
      views: ""
    };
  }

  ngOnInit(): void {}

  addNewThread() {
    console.log(this.currentThread);
    this.ts.addThread(this.currentThread);
    this.router.navigate(["/forum-thread", this.currentThread.id]);
  }

  showNewThread() {
    this.newThreadBool = true;
  }
}
