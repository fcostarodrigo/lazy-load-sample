import { Compiler, Component, Injector, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private compiler: Compiler, private injector: Injector, private viewContainerRef: ViewContainerRef) {}

  async ngOnInit(): Promise<void> {
    const { LazyModule, LazyComponent } = await import('./lazy');
    const moduleFactory = await this.compiler.compileModuleAsync(LazyModule);
    const moduleInstance = moduleFactory.create(this.injector);
    const componentFactory = moduleInstance.componentFactoryResolver.resolveComponentFactory(LazyComponent);

    this.viewContainerRef.createComponent(componentFactory);
  }
}
