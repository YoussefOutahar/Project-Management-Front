import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Board, List } from '../../../../Services/Trello/TrelloModels';
import { TrelloService } from '../../../../Services/Trello/trello.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit, OnDestroy {
  @Input()
  board!: Observable<Board>;

  boardValue: Board | undefined;
  boardSubscription?: Subscription;
  boardLists: List[] = [];
  constructor(private trelloService: TrelloService) {}

  ngOnInit() {
    this.boardSubscription = this.board.subscribe((value: Board) => {
      this.boardValue = value;
      this.trelloService
        .getBoardLists(this.boardValue?.id ?? 0)
        .subscribe((lists) => {
          this.boardLists = lists;
          console.log(lists);
        });
    });
  }

  ngOnDestroy() {
    this.boardSubscription?.unsubscribe();
  }

  async addList() {
    this.trelloService
      .addList(
        {
          title: 'New List',
          description: 'New List Description',
          boardId: this.boardValue?.id,
          // get the biggest position and add 1
          position: Math.max.apply(
            Math,
            this.boardLists.map((list) => list.position ?? 0)
          ),
        },
        this.boardValue?.id ?? 0
      )
      .subscribe((list) => {
        this.boardLists.push(list);
      });
  }
}
