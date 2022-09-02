import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryComponent } from './dictionary.component';
import {HeaderModule} from "../homepage/components/header/header.module";
import {FooterBlockModule} from "../homepage/components/footer-block/footer-block.module";
import { PageContainerModule } from '../../shared/page-container/page-container.module';
import { DictionaryNavModule } from './components/dictionary-nav/dictionary-nav.module';
import { DiffWordBlockModule } from './components/diff-word-block/diff-word-block.module';
import { SimpleWordBlockModule } from './components/simple-word-block/simple-word-block.module';

@NgModule({
  declarations: [
    DictionaryComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterBlockModule,
    PageContainerModule,
    DictionaryNavModule,
    DiffWordBlockModule,
    SimpleWordBlockModule
  ],
  exports: [
    DictionaryComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DictionaryModule { }
