import { Injectable } from "@angular/core";
import { threadArray } from "./fakeData";
import { replyArray } from "./replyData";
import { thread } from "../components/model/thread";
import { reply } from "../components/model/reply";

@Injectable({
  providedIn: "root"
})
export class ThreadService {
  threads = threadArray;
  replies = replyArray;
  constructor() {}

  getAllThreads() {
    return this.threads;
  }

  getThreadById(givenId): thread {
    return this.threads.filter(thread => thread.id === +givenId)[0]; // ! plus made the difference
  }
  // TODO
  getThreadReplies(givenId): reply {
    return this.replies.filter(reply => reply.threadId === +givenId)[0]; // ! Not working the planned way
  }

  addThread(thread: thread) {
    return this.threads.push(thread);
  }
  // TODO
  addReply(packageIn) {
    return this.replies.push(packageIn);
  }
}
