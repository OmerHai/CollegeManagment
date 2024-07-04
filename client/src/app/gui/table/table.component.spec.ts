import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TableComponent } from "./table.component";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

/**
 * Tests list:
 * 1. Created.
 * 2. Render table headers.
 * 3. Render table cells.
 * 4. Paginate data works.
 */

describe('TableComponent', () => {
    let component: TableComponent<any>;
    let fixture: ComponentFixture<TableComponent<any>>;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            imports: [
                MatTableModule,
                MatPaginator,
                NoopAnimationsModule
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Created', () => {
        expect(component).toBeTruthy();
    })

    it('Render table headers', () => {
        component.columns = [
            { columnId: 'id', header: 'ID', cell: (element: any) => `${element.id}` },
            { columnId: 'name', header: 'Name', cell: (element: any) => `${element.name}` }
        ];
        component.dataSource = new MatTableDataSource([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]);

        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement;
        const headers = compiled.querySelectorAll('th');

        expect(headers.length).toBe(2);
        expect(headers[0].textContent?.trim()).toBe('ID');
        expect(headers[1].textContent?.trim()).toBe('Name');
    });

    it('Render table cells', () => {
        component.columns = [
            { columnId: 'id', header: 'ID', cell: (element: any) => `${element.id}` },
            { columnId: 'name', header: 'Name', cell: (element: any) => `${element.name}` }
        ];
        component.dataSource = new MatTableDataSource([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]);

        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement;
        const rows = compiled.querySelectorAll('tr');

        expect(rows.length).toBe(3);
        expect(rows[1].firstElementChild?.textContent?.trim()).toBe('1');
        expect(rows[1].lastElementChild?.textContent?.trim()).toBe('John');
        expect(rows[2].firstElementChild?.textContent?.trim()).toBe('2');
        expect(rows[2].lastElementChild?.textContent?.trim()).toBe('Jane');
    });

    it('Paginate data works', () => {
        const paginator = fixture.nativeElement.querySelector('mat-paginator');
        
        expect(paginator).toBeTruthy();
      });
});