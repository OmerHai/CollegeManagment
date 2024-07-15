import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TableColumn } from '../../_models/gui/tableColumn';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent<T> implements OnInit
{
  @Input() columns: TableColumn<T>[] = [];
  @Input() data: T[] = []; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<T>(this.data);

  ngOnInit(): void {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  get displayedColumns() : string[] {
    return this.columns.map(x => x.columnId);
  }

  refresh() {
    const newData = [ ...this.dataSource.data ]; 
    newData.push(...this.data);
    this.dataSource.data = newData;
  }
}