import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ThreadsHeaderComponent } from './threads-header/threads-header.component';
import { ThreadsListComponent } from './threads-list/threads-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { SettingsPopupComponent } from './settings-popup/settings-popup.component';
import { FindPanelComponent } from './find-panel/find-panel.component';
import { ThreadComponent } from './thread/thread.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageComponent } from './message/message.component';
import { ChatFooterComponent } from './chat-footer/chat-footer.component';
import { SendMessageFormComponent } from './send-message-form/send-message-form.component';

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
    SendMessageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
