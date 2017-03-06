import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './_app.component'
import { AppRoutes } from './_app.routes'

import { ConfigModule } from './config/_config.module'
import { GameModule } from './game/_game.module'
import { LoginModule } from './login/_login.module'
import { ScoreModule } from './score/_score.module'

@NgModule({
    bootstrap: [AppComponent],

    declarations: [
        AppComponent
    ],

    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,

        AppRoutes,
        ConfigModule,
        GameModule,
        LoginModule,
        ScoreModule
    ]
})
export class AppModule {}