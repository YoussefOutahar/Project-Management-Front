import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../Auth/auth.service';
import { ProjectService } from '../../../Services/Projects/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = true;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  me: any | undefined;

  handleProfileClick() {
    this.authService.me().subscribe((data: any) => {
      this.me = data;
      console.log(this.me);
    });
  }

  handleTasksClick() {}

  handleProjectsClick() {
    this.router.navigate(['/projects/all-projects']);
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
