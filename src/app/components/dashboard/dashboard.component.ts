import { Component, OnInit } from "@angular/core";
import { ThreadService } from "src/app/services/thread.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"]
})
export class DashboardComponent implements OnInit {
  hotArray = [];
  tempArr = [];
  constructor(private ts: ThreadService) {}

  ngOnInit(): void {
    this.tempArr = this.ts.getAllThreads();
    this.tempArr = this.tempArr.sort((a, b) => {
      const numberA = a.views;
      const numberB = b.views;
      return numberB - numberA;
    });
    for (let i = 0; i < 4; i++) {
      this.hotArray.push(this.tempArr[i]);
    }
  }
}
