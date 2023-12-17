import { Component, Input, OnInit } from '@angular/core';
import { Board, List } from '../../../../Services/Trello/TrelloModels';
import { TrelloService } from '../../../../Services/Trello/trello.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  @Input()
  board!: Board;
  boardLists: List[] = [];
  constructor(private trelloService: TrelloService) {}

  ngOnInit() {
    this.trelloService.getBoardLists(this.board.id ?? 0).subscribe((lists) => {
      this.boardLists = lists;
      console.log(lists);
    });
  }
}
