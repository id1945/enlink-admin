import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoUploadAvatarComponent } from './avatar';
import { NzDemoUploadBasicComponent } from './basic';
import { NzDemoUploadDefaultFileListComponent } from './default-file-list';
import { NzDemoUploadDirectoryComponent } from './directory';
import { NzDemoUploadDragComponent } from './drag';
import { NzDemoUploadFileListComponent } from './file-list';
import { NzDemoUploadPictureCardComponent } from './picture-card';
import { NzDemoUploadPictureStyleComponent } from './picture-style';
import { NzDemoUploadPreviewFileComponent } from './preview-file';
import { NzDemoUploadTransformFileComponent } from './transform-file';
import { NzDemoUploadUploadManuallyComponent } from './upload-manually';
import { NzDemoUploadUploadWithAliyunOssComponent } from './upload-with-aliyun-oss';
import { NzDemoUploadZhComponent } from './zh.component';
import { NzDemoUploadEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoUploadEnComponent },
      { path: 'zh', component: NzDemoUploadZhComponent }
    ])
  ],
  declarations: [
		NzDemoUploadAvatarComponent,
		NzDemoUploadBasicComponent,
		NzDemoUploadDefaultFileListComponent,
		NzDemoUploadDirectoryComponent,
		NzDemoUploadDragComponent,
		NzDemoUploadFileListComponent,
		NzDemoUploadPictureCardComponent,
		NzDemoUploadPictureStyleComponent,
		NzDemoUploadPreviewFileComponent,
		NzDemoUploadTransformFileComponent,
		NzDemoUploadUploadManuallyComponent,
		NzDemoUploadUploadWithAliyunOssComponent,
		NzDemoUploadZhComponent,
		NzDemoUploadEnComponent,

  ],
entryComponents: [
  
]
})
export class NzDemoUploadModule {

}
