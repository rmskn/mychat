import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreadsComponent } from './pages/chat-page/threads/threads.component';
import { ChatBoxComponent } from './pages/chat-page/chat-box/chat-box.component';
import { ThreadsHeaderComponent } from './pages/chat-page/threads/threads-header/threads-header.component';
import { ThreadsListComponent } from './pages/chat-page/threads/threads-list/threads-list.component';
import { UserInfoComponent } from './pages/chat-page/threads/threads-header/user-info/user-info.component';
import { SettingsPopupComponent } from './pages/chat-page/threads/threads-header/settings-popup/settings-popup.component';
import { FindPanelComponent } from './pages/chat-page/threads/threads-header/find-panel/find-panel.component';
import { ThreadComponent } from './pages/chat-page/threads/thread/thread.component';
import { ChatHeaderComponent } from './pages/chat-page/chat-box/chat-header/chat-header.component';
import { MessagesListComponent } from './pages/chat-page/chat-box/messages-list/messages-list.component';
import { MessageComponent } from './pages/chat-page/chat-box/messages-list/message/message.component';
import { ChatFooterComponent } from './pages/chat-page/chat-box/chat-footer/chat-footer.component';
import { SendMessageFormComponent } from './pages/chat-page/chat-box/chat-footer/send-message-form/send-message-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    ChatBoxComponent,
    ThreadsHeaderComponent,
    ThreadsListComponent,
    UserInfoComponent,
    SettingsPopupComponent,
    FindPanelComponent,
    ThreadComponent,
    ChatHeaderComponent,
    MessagesListComponent,
    MessageComponent,
    ChatFooterComponent,
    SendMessageFormComponent,
    LoginPageComponent,
    ChatPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
