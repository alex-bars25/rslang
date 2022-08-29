import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextbookComponent } from './textbook.component';
import {HeaderModule} from "../homepage/components/header/header.module";
import {FooterBlockModule} from "../homepage/components/footer-block/footer-block.module";
import { PageContainerModule } from '../../shared/page-container/page-container.module';

@NgModule({
  declarations: [
    TextbookComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterBlockModule,
    PageContainerModule
  ],
  exports: [
    TextbookComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TextbookModule { }
