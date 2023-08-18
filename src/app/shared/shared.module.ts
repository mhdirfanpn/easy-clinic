import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthService } from './service/auth.service';
import { AppointmentTableComponent } from './componet/appointment-table/appointment-table.component';
import { FirstNamePipe } from './pipe/first-name.pipe';
import { ChatComponent } from './componet/chat/chat.component';
import { ConversationComponent } from './componet/conversation/conversation.component';
import { MessageComponent } from './componet/message/message.component';
import { SocketService } from './service/socket.service';
import { FormsModule } from '@angular/forms';
import { ActiveConverasationComponent } from './componet/active-converasation/active-converasation.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SearchComponent } from './componet/search/search.component';

@NgModule({
  declarations: [AppointmentTableComponent, FirstNamePipe, ChatComponent, ConversationComponent, MessageComponent, ActiveConverasationComponent, FilterPipe, SearchComponent],
  imports: [CommonModule, HttpClientModule,FormsModule],
  exports: [AppointmentTableComponent, ChatComponent, FirstNamePipe,FilterPipe,SearchComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService,
    SocketService
  ],
})
export class SharedModule {}
