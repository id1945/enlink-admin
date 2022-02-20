export interface Chat {
    name: string;
    avatar: string;
    msg: Msg[];
    time: string;
}

export interface Msg {
    avatar: string;
    text: string;
    from: string;
    time: string;
    msgType: 'text' | 'date' | 'image' | 'file';
}
