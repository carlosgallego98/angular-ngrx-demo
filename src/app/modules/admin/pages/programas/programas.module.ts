import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgramasPage} from './programas.page';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ProgramasRoutingModule} from './programas-routing.module';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {BadgeModule} from 'primeng/badge'
import {RippleModule} from "~/primeng/ripple";
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ProgramaDialogComponent} from './components/programa-dialog/programa-dialog.component';
import {StoreModule} from "@ngrx/store";
import {programasState} from "@modules/admin/pages/programas/state/programas.reducers";
import { EffectsModule } from '@ngrx/effects';
import { LoadingProgramasEffects } from './state/effects/loading-programas.effects';
import {InputTextModule} from "~/primeng/inputtext";
import {InputTextareaModule} from "~/primeng/inputtextarea";
import {DropdownModule} from "~/primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProgramasPage,
    ProgramaDialogComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TableModule,
    ToolbarModule,
    CardModule,
    BadgeModule,
    ButtonModule,
    ProgramasRoutingModule,
    RippleModule,
    DynamicDialogModule,
    StoreModule.forFeature('programasFeature', programasState),
    EffectsModule.forFeature([LoadingProgramasEffects]),
    InputTextModule,
    InputTextareaModule,
    DropdownModule
  ],
  entryComponents: [
    ProgramaDialogComponent
  ]
})
export class ProgramasModule {
}
