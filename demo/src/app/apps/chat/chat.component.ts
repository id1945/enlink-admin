import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core'
import { Chat } from '../../shared/interfaces/chat.type';
import { AppsService } from '../../shared/services/apps.service';

@Component({
    templateUrl: './chat.component.html'
})

export class ChatComponent implements OnInit, AfterViewChecked {

    @ViewChild('scrollBottom', { static: true }) private scrollContainer: ElementRef;
    isContentOpen: boolean = false;
    chatId: string;
    msg: string;
    chatList: Chat[];

    constructor( private chatSvc : AppsService) { }

    ngOnInit(){
        this.chatSvc.getChatJSON().subscribe(data => {
            this.chatList = data;
        });
        this.chatId = 'Erin Gonzales'
        this.scrollToBottom();
    }

    ngAfterViewChecked() {        
        this.scrollToBottom();        
    } 

    selectChat(index: string){
        this.chatId = index;
        this.isContentOpen = true;
    };

    closeChatContent() {
        this.isContentOpen = false;
    }

    sendMsg(msg: string) {
        for (let i = 0; i < this.chatList.length; i++) {
            if(this.chatId == this.chatList[i].name && this.msg.length > 1){
                this.chatList[i].msg.push(
                    {
                        avatar: '',
                        text: msg,
                        from: 'me',
                        time: '',
                        msgType: 'text'
                    }
                ) 
            }
        } 
        this.msg = '';   
    }

    scrollToBottom(): void {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }
}  