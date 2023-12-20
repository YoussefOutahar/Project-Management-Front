import { Component, Input, OnInit } from '@angular/core';
import { Card, List } from '../../../../Services/Trello/TrelloModels';
import { TrelloService } from '../../../../Services/Trello/trello.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() list?: List;

  cards: Card[] = [];
  constructor(private trelloService: TrelloService) {
    this.trelloService.getListsCards(this.list?.id ?? 0).subscribe((cards) => {
      this.cards = cards;
    });
  }

  ngOnInit(): void {}

  addCard() {
    this.trelloService
      .addCard(
        {
          title: 'New Card',
          description: 'New Card Description',
          boardId: this.list?.boardId ?? 0,
        },
        this.list?.id ?? 0
      )
      .subscribe((card) => {
        this.cards.push(card);
      });
  }
}
