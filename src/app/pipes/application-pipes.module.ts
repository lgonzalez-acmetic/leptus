import { NgModule } from '@angular/core';
import { ObjToArrayPipe } from 'src/app/pipes/objToArray.pipe';


@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [
    ObjToArrayPipe
  ],
  exports: [
    ObjToArrayPipe
  ]
})
export class ApplicationPipesModule {}
