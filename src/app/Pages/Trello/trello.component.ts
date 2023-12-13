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
  breadCrumbItems: MenuItem[] | undefined;
  home: MenuItem | undefined;
  toolBarItems: MenuItem[] | undefined;

  constructor(private trelloService: TrelloService) {
    this.trelloService.getProjectBoards(1).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  projectBoards: Board[] = [
    {
      createdAt: new Date(),
      description: 'Description',
      id: 1,
      title: 'Title',
    },
    {
      createdAt: new Date(),
      description: 'Description',
      id: 2,
      title: 'zwin hadchi',
    },
    {
      createdAt: new Date(),
      description: 'Description',
      id: 3,
      title: 'Title',
    },
    {
      createdAt: new Date(),
      description: 'Description',
      id: 4,
      title: 'Title',
    },
    {
      createdAt: new Date(),
      description: 'Description',
      id: 5,
      title: 'Title',
    },
    {
      createdAt: new Date(),
      description: 'Description',
      id: 6,
      title: 'Title',
    },
    {
      createdAt: new Date(),
      description: 'Description',
      id: 7,
      title: 'Title',
    },
    {
      createdAt: new Date(),
      description: 'Description',
      id: 8,
      title: 'Title',
    },
    {
      createdAt: new Date(),
      description: 'Description',
      id: 9,
      title: 'Title',
    },
  ];

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Dashboard' }, { label: 'Computer' }];
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
  }
}
