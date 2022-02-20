import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
    templateUrl: './product.component.html'
})

export class ProductComponent  {

    isEdit: boolean = false;
    productEditForm: FormGroup;
    previewImage: string = '';
    previewVisible: boolean = false;

    fileList = [
        {
            uid: -1,
            name: 'product-1.jpg',
            status: 'done',
            url: 'assets/images/others/product-1.jpg'
        },
        {
            uid: 0,
            name: 'product-2.jpg',
            status: 'done',
            url: 'assets/images/others/product-2.jpg'
        },
        {
            uid: 1,
            name: 'product-3.jpg',
            status: 'done',
            url: 'assets/images/others/product-3.jpg'
        }
    ];

    productData = {
        productName: 'Skinny Men Blazer',
        price: 199,
        category: 'Cloths',
        brand: 'H&M',
        status: 'In Stock',
        size: ['S', ' M', ' L', ' XL'],
        colors: ['Dark Blue', 'Gray', 'Gray Blue'],
        fit: 'Skinny',
        material: ['Polyester'],
        shipFrom: 'Columbia',
        description: '<p><span style="color: rgb(114, 132, 154);">Special cloth alert. The key to more success is to have a lot of pillows. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. They will try to close the door on you, just open it. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. They key is to have every key, the key to open every door.</span></p><p><span style="color: rgb(114, 132, 154);">The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. Lion! I’m up to something. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.</span></p>'
    }

    constructor(private modalService: NzModalService, private fb: FormBuilder, private msg: NzMessageService) {
    }
    
    ngOnInit(): void {
        this.productEditForm = this.fb.group({
            productName:    [ this.productData.productName,     [ Validators.required ] ],
            price:          [ this.productData.price,           [ Validators.required ] ],
            category:       [ this.productData.category,        [ Validators.required ] ],
            brand:          [ this.productData.brand,           [ Validators.required ] ],
            status:         [ this.productData.status,          [ Validators.required ] ],
            size:           [ this.productData.size,            [ Validators.required ] ],
            colors:         [ this.productData.colors,          [ Validators.required ] ],
            fit:            [ this.productData.fit,             [ Validators.required ] ],
            material:       [ this.productData.material,        [ Validators.required ] ],
            shipFrom:       [ this.productData.shipFrom,        [ Validators.required ] ],
            description:    [ this.productData.description,     [ Validators.required ] ],
        });
    }

    submitForm(): void {
        for (const i in this.productEditForm.controls) {
            this.productEditForm.controls[ i ].markAsDirty();
            this.productEditForm.controls[ i ].updateValueAndValidity();
        }
    }

    edit() {
        this.isEdit = true;
    }

    editClose() {
        this.isEdit = false;
    }

    save() {
        this.modalService.confirm({
            nzTitle  : '<i>Do you want your changes?</i>',
            nzOnOk   : () => this.editClose()
        });
    }

    handlePreview = (file: NzUploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    }

    editorConfig = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],               
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],  
            [{ 'align': [] }],
            ['link', 'image']                        
        ]
    };
}