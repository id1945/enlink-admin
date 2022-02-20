export interface Files {
    name: string;
    type: 'pdf' | 'doc' | 'xls' | 'ppt' | 'txt' | 'folder' | 'image';
    url: string;
    size: string;
    date: string;
    modifiedDate: string;
    author: string;
    activity: Activity[];
}

export interface Activity {
    avatar: string;
    name: string;
    text: string;
    action: string;
    time: string;
    files: string[];
}
