import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Board } from '../../Services/Trello/TrelloModels';
import { TrelloService } from '../../Services/Trello/trello.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
})
export class TrelloComponent implements OnInit {
  home: MenuItem | undefined;
  toolBarItems: MenuItem[] | undefined;

  boardActions: { label?: string; icon?: string; separator?: boolean }[] = [];

  loading: boolean = false;

  projectBoards: Board[] = [];
  selectedBoard?: Board;

  constructor(private trelloService: TrelloService) {
    this.trelloService.getActiveProjectBoards().subscribe((boards) => {
      this.projectBoards = boards;
      this.selectedBoard = boards[0];
      this.toolBarItems = this.projectBoards.map((board) => {
        return {
          label: board.title,
        };
      });
    });
  }

  ngOnInit() {
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.boardActions = [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
      },
      {
        separator: true,
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
  }
  async addBoard() {
    this.loading = true;
    this.trelloService
      .addBoard({
        title: 'New Board',
        description: 'New Board Description',
      })
      .subscribe((board) => {
        this.projectBoards.push(board);
        this.loading = false;
      });
  }
}
