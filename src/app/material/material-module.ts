import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


const MaterialComponents = [
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatFormFieldModule,
  MatSortModule,
  MatPaginatorModule,
  MatButton,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})

export class MaterialModule { }
