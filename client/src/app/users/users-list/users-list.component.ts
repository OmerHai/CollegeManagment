import { Component, OnInit, inject } from '@angular/core';
import { TableComponent } from '../../gui/table/table.component';
import { User } from '../../_models/users/user';
import { TableColumn } from '../../_models/gui/tableColumn';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonComponent } from '../../gui/button/button.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [TableComponent, CommonModule, ButtonComponent, TranslateModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
  private translate = inject(TranslateService);

  addButtonLabel: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.setAddButtonLabel();
    });
    this.setAddButtonLabel();
  }

  setAddButtonLabel(): void {
    this.translate.get('USERS.ADD_USER').subscribe((translation: string) => {
      this.addButtonLabel = translation;
    });
  }

  users: User[] = [
    { id: 1, email: 'John Doe', password: 'Computer Science' },
    { id: 2, email: 'Jane Smith', password: 'Mathematics' }
  ];

  columns: TableColumn<User>[] = [
    { columnId: 'id', header: 'ID', cell: (user: User) => `${user.id}` },
    { columnId: 'email', header: 'Email', cell: (user: User) => `${user.email}` },
    { columnId: 'password', header: 'Password', cell: (user: User) => `${user.password}` }
  ];
}
