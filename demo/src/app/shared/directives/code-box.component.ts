import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'codebox',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="p-t-20 m-t-20 off-gutter-x border top p-h-25">
            <div class="text-right">
                <span class="code-action">
                    <a class="m-r-10" nz-tooltip nzTooltipTitle="{{copyCodeAction}}" *ngIf="nzExpanded" (click)="copyCode(codeContent)" value="click to copy" >
                        <i nz-icon nzType="copy" theme="outline"></i>
                    </a>
                    <a (click)="nzExpanded=!nzExpanded">
                        <span [class.d-inline-block]="nzExpanded" [class.d-none]="!nzExpanded">
                            <i  nz-icon nzType="up-square" theme="outline" class="m-r-5"></i>
                            <span>Hide Code</span>
                        </span>
                        <span [class.d-inline-block]="!nzExpanded" [class.d-none]="nzExpanded">
                            <i  nz-icon nzType="down-square" theme="outline" class="m-r-5"></i>
                            <span>Show Code</span>
                        </span>
                    </a>
                </span>
            </div>
            <section class="code-example" [ngClass]="{'code-example-expand':nzExpanded}">
                <pre><code highlight [textContent]="codeContent"></code></pre>
            </section>
        </div>
    `,
    styles: [
        `
        .code-action a {
            cursor: pointer;
            color: #999999;
            font-size: 15px;
        }

        .code-action a:hover,
        .code-action a:focus {
            color: #3a3a3a;
        }

        .code-example {
            display: none;
            margin-top: 25px;
        }

        .code-example.code-example-expand {
            display: block;
        }
        `
    ]
})   

export class CodeBoxComponent implements OnInit {

    constructor(private message: NzMessageService) {
    }

    @Input() codeContent: string | null = null;

    @Input() nzExpanded = false;

    copyCodeAction: string = "Copy Code";

    copyCode(val: string){
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.message.success('Copied');
    }
    
    ngOnInit() {
    }
}    