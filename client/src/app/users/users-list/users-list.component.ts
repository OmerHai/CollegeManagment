import { Component } from '@angular/core';
import { TableComponent } from '../../gui/table/table.component';
import { User } from '../../_models/users/user';
import { TableColumn } from '../../_models/gui/tableColumn';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [TableComponent, TranslateModule, CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
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
