import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ThreadService } from "../../services/thread.service";
import { thread } from "../model/thread";
import { reply } from "../model/reply";
import { replyArray } from "../../services/replyData";

@Component({
  selector: "app-forum-thread",
  templateUrl: "./forum-thread.component.html",
  styleUrls: ["./forum-thread.component.sass"]
})
export class ForumThreadComponent implements OnInit {
  singleThread: thread;
  currentReply: reply;
  tempArr = [];
  constructor(private route: ActivatedRoute, private ts: ThreadService) {
    this.route.paramMap.subscribe(params => {
      const givenId = +params.get("id");
      this.currentReply = {
        threadId: givenId,
        author: "",
        reply: ""
      };
    });
    this.tempArr = replyArray;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const givenId = +params.get("id");
      this.singleThread = this.ts.getThreadById(givenId);
    });
  }
  // ! FIX REPLIES, obvious issue with code, don't say it.
  addReply() {
    console.log(this.currentReply);
    this.ts.addReply(this.currentReply);
    console.log(replyArray);
  }
}
