import { Component, OnInit } from "@angular/core";
import { ThreadService } from "../../services/thread.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-forum-thread-list",
  templateUrl: "./forum-thread-list.component.html",
  styleUrls: ["./forum-thread-list.component.sass"]
})
export class ForumThreadListComponent implements OnInit {
  tempArr = [];

  constructor(private ts: ThreadService) {}

  ngOnInit(): void {
    this.tempArr = this.ts.getAllThreads();
    // ! Since I sort the hottest threads, the catalog threads were also sorted by views
    this.tempArr = this.tempArr.sort((a, b) => {
      const numberA = a.id;
      const numberB = b.id;
      return numberA - numberB;
    });
  }
}
