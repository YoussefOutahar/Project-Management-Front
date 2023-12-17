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

  projectBoards: Board[] = [];
  loading: boolean = false;

  constructor(private trelloService: TrelloService) {}

  ngOnInit() {
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.toolBarItems = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload',
      },
    ];
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

    this.trelloService.getActiveProjectBoards().subscribe((boards) => {
      console.log(boards);
      this.projectBoards = boards;
    });
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
