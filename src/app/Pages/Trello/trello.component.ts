import { Component, OnInit } from '@angular/core';
import { Board } from '../../Services/Trello/TrelloModels';
import { TrelloService } from '../../Services/Trello/trello.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
})
export class TrelloComponent implements OnInit {
  loading: boolean = false;

  projectBoards: Board[] = [];
  selectedBoard?: Board;
  selectedBoardSubject?: Subject<Board>;

  constructor(private trelloService: TrelloService) {
    this.selectedBoardSubject?.subscribe((board) => {
      this.selectedBoard = board;
    });
    this.trelloService.getActiveProjectBoards().subscribe((boards) => {
      this.projectBoards = boards;
      this.selectedBoardSubject = new Subject<Board>();
      this.selectedBoardSubject.next(boards[0]);
    });
  }

  ngOnInit() {}
  async addBoard() {
    this.loading = true;
    this.trelloService
      .addBoard({
        title: 'New Board',
        description: 'New Board Description',
      })
      .subscribe((board) => {
        this.projectBoards.push(board);
        this.selectedBoardSubject?.next(board);
        this.loading = false;
      });
  }

  onBoardChange(event: any) {
    this.selectedBoardSubject?.next(event.value);
  }
  async editBoard() {}
  async deleteBoard() {}
}
