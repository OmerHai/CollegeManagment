export interface TableColumn<T> {
    columnId: string;
    header: string;
    cell: (element: T) => string;
}