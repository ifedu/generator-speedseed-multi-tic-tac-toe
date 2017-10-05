import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'

import { AppView } from './app.view'
import { AppRouter } from './app.router'

import { ConfigModule } from './config/config.module'
import { GameModule } from './game/game.module'
import { LoginModule } from './login/login.module'
import { ScoreModule } from './score/score.module'

@NgModule({
    bootstrap: [AppView],

    declarations: [
        AppView
    ],

    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,

        AppRouter,
        ConfigModule,
        GameModule,
        LoginModule,
        ScoreModule
    ]
})
export class AppModule {}
