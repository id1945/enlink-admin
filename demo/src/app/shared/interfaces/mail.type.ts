export interface Mail {
    name: string;
    avatar: string;
    title: string;
    date: string;
    to: string;
    content: string;
    checked : boolean,
    attachment: Attachment[];
}
  
export interface Attachment {
    file: string;
    size: string;
    type: 'pdf' | 'doc' | 'xls' | 'ppt' | 'txt' | 'folder' | 'image';
}