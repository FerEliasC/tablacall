// data-sharing.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private selectedRow: any;

  setSelectedRow(row: any) {
    this.selectedRow = row;
  }

  getSelectedRow(): any {
    return this.selectedRow;
  }
}
