import { Component, OnInit, inject } from '@angular/core';
import { TableComponent } from '../../gui/table/table.component';
import { User } from '../../_models/users/user';
import { TableColumn } from '../../_models/gui/tableColumn';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonComponent } from '../../gui/button/button.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../gui/dialog/dialog.component';
import { DialogData } from '../../_models/gui/dialogData';
import { UserService } from '../../_services/users/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [TableComponent, CommonModule, ButtonComponent, TranslateModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  private translate = inject(TranslateService);
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);
  private userService = inject(UserService);
  private toastr = inject(ToastrService);


  addButtonLabel: string = '';
  addDialogData: DialogData = {
    title: '',
    formGroup: this.fb.group({}),
    controls: []
  };
  users: User[] = [];
  columns: TableColumn<User>[] = [
    { columnId: 'id', header: 'ID', cell: (user: User) => `${user.id}` },
    { columnId: 'email', header: 'Email', cell: (user: User) => `${user.email}` },
    { columnId: 'password', header: 'Password', cell: (user: User) => `${user.password}` }
  ];
  
  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.setAddUserText();
    });
    this.setAddUserText();
    this.userService.getUsers().subscribe({
      next: users => this.users = users,
      error: () => this.toastr.error()
    });
  }

  setAddUserText(): void {
    this.translate.get('USERS.ADD_USER').subscribe((translation: string) => {
      this.addButtonLabel = translation;
      this.addDialogData.title = translation;
    });
  }
  
  openAddUserDialog(): void {
    this.setAddDialogData();
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: this.addDialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Dialog closed with result:", result);
        this.users.push(result);
      }
    });
  }

  setAddDialogData() {
    this.setAddUserText();
    this.addDialogData.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    this.addDialogData.controls = [
      { label: 'Name', name: 'name', type: 'input' },
      { label: 'Email', name: 'email', type: 'input' },
    ];
  }
}
