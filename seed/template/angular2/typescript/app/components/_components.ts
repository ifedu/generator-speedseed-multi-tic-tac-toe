import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { SSTable } from './table/_table.ts'
import { SSLine } from './table/line/_line.ts'
import { SSBox } from './table/line/box/_box.ts'

@NgModule({
    imports: [BrowserModule],
    declarations: [SSTable, SSLine, SSBox],
    bootstrap: [SSTable]
})

export class ComponentsModule {}