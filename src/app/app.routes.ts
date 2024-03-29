import { Routes } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {ObservableExampleComponent} from './observable-example/observable-example.component';
import {ObservableSubscribeComponent} from './observable-subscribe/observable-subscribe.component';
import {ObservableUnsubscribeComponent} from './observable-unsubscribe/observable-unsubscribe.component';
import {ObservableOperatorComponent} from './observable-operator/observable-operator.component';
import {ObservableOperatorsComponent} from './observable-operators/observable-operators.component';
import {SubjectExampleComponent} from './subject-example/subject-example.component';
import {PromiseExampleComponent} from './promise-example/promise-example.component';
import {ListPostsComponent} from './observable-example/list-posts/list-posts.component';
import {TwoWayDataBindingExampleComponent} from './two-way-data-binding-example/two-way-data-binding-example.component';
import {TemplateDrivenFormComponent} from './forms/template-driven-form.component';
import {ReactiveFormComponent} from './forms/reactive-form.component';
import {HidingComponent} from './hiding/hiding.component';
import {ModelComponent} from './model/model.component';
import {NgforComponent} from './ngfor/ngfor.component';
import {NgClassComponent} from './ngclass/ng-class.component';
import {NgSwitchComponent} from './ngswitch/ng-switch.component';
import {WrapperComponent} from './spinner/wrapper.component';
import {StateFilterComponent} from './state-filter/state-filter.component';
import {BindingsComponent} from './bindings/bindings.component';


export const routes: Routes = [
  {
    path: '', component: MenuComponent
  }, {
    path: 'observable-example', component: ObservableExampleComponent
  }, {
    path: 'observable-subscribe', component: ObservableSubscribeComponent
  }, {
    path: 'observable-unsubscribe', component: ObservableUnsubscribeComponent
  }, {
    path: 'observable-operator', component: ObservableOperatorComponent
  }, {
    path: 'observable-operators', component: ObservableOperatorsComponent
  }, {
    path: 'subject-example', component: SubjectExampleComponent
  }, {
    path: 'promise-example', component: PromiseExampleComponent
  }, {
    path: 'list-posts', component: ListPostsComponent
  }, {
    path: '2-way-data-binding', component: TwoWayDataBindingExampleComponent
  }, {
    path: 'bindings', component: BindingsComponent
  }, {
    path: 'template-driven-form', component: TemplateDrivenFormComponent
  }, {
    path: 'reactive-form', component: ReactiveFormComponent
  }, {
    path: 'ngif', component: HidingComponent
  }, {
    path: 'ngmodel', component: ModelComponent
  }, {
    path: 'ngfor', component: NgforComponent
  }, {
    path: 'ngclass', component: NgClassComponent
  }, {
    path: 'ngswitch', component: NgSwitchComponent
  }, {
    path: 'spinner', component: WrapperComponent
  }, {
    path: 'state-filter', component: StateFilterComponent
  }
];
