import { Directive, TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appAppSpinner]'
})
export class AppSpinnerDirective {

  constructor(private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef) { }

    @Input() set appAppSpinner(condition:boolean){
      if(condition){
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else{
        this.viewContainer.clear();
      }
    }
}
