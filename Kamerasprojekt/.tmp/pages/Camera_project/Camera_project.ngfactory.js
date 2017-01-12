/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './Camera_project';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/http/src/http';
import * as import9 from 'ionic-angular/components/alert/alert';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/navigation/view-controller';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from 'ionic-angular/navigation/nav-controller';
import * as import26 from 'ionic-angular/components/menu/menu-controller';
import * as import27 from 'ionic-angular/components/toolbar/toolbar';
import * as import28 from 'ionic-angular/util/keyboard';
import * as import29 from '@angular/core/src/zone/ng_zone';
import * as import30 from 'ionic-angular/components/tabs/tabs';
import * as import31 from 'ionic-angular/components/icon/icon';
import * as import32 from 'ionic-angular/components/button/button';
import * as import33 from 'ionic-angular/components/menu/menu-toggle';
import * as import34 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import35 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import36 from 'ionic-angular/components/navbar/navbar';
import * as import37 from 'ionic-angular/components/content/content';
export var Wrapper_Camera_project = (function () {
    function Wrapper_Camera_project(p0, p1) {
        this.changed = false;
        this.context = new import0.Camera_project(p0, p1);
    }
    Wrapper_Camera_project.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_Camera_project;
}());
var renderType_Camera_project_Host = null;
var _View_Camera_project_Host0 = (function (_super) {
    __extends(_View_Camera_project_Host0, _super);
    function _View_Camera_project_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Camera_project_Host0, renderType_Camera_project_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Camera_project_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Camera_project0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Camera_project_0_4 = new Wrapper_Camera_project(this.parentInjector.get(import8.Http), this.parentInjector.get(import9.AlertController));
        this._appEl_0.initComponent(this._Camera_project_0_4.context, [], compView_0);
        compView_0.create(this._Camera_project_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Camera_project_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Camera_project) && (0 === requestNodeIndex))) {
            return this._Camera_project_0_4.context;
        }
        return notFoundResult;
    };
    _View_Camera_project_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Camera_project_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Camera_project_Host0;
}(import1.AppView));
function viewFactory_Camera_project_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Camera_project_Host === null)) {
        (renderType_Camera_project_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_Camera_project_Host0(viewUtils, parentInjector, declarationEl);
}
export var Camera_projectNgFactory = new import11.ComponentFactory('ng-component', viewFactory_Camera_project_Host0, import0.Camera_project);
var styles_Camera_project = [];
var renderType_Camera_project = null;
var _View_Camera_project0 = (function (_super) {
    __extends(_View_Camera_project0, _super);
    function _View_Camera_project0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Camera_project0, renderType_Camera_project, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Camera_project0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import12.Wrapper_Header(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import23.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import13.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import24.App), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import25.NavController, null), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_4, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_4, 'menuToggle', '');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import14.viewFactory_Button0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Button_4_4 = new import14.Wrapper_Button('', '', this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_4), this.renderer);
        this._MenuToggle_4_5 = new import15.Wrapper_MenuToggle(this.parentInjector.get(import26.MenuController), new import22.ElementRef(this._el_4), this.parentInjector.get(import23.ViewController, null), this._Navbar_2_4.context);
        this._ToolbarItem_4_6 = new import16.Wrapper_ToolbarItem(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import27.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_4_0 = new import17.QueryList();
        this._appEl_4.initComponent(this._Button_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_6, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_6, 'role', 'img');
        this._Icon_6_3 = new import18.Wrapper_Icon(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Button_4_4.context, [[].concat([
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        this._el_9 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_9 = new import3.AppElement(9, 2, this, this._el_9);
        var compView_9 = import19.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(9), this._appEl_9);
        this._ToolbarTitle_9_4 = new import19.Wrapper_ToolbarTitle(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import27.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_9.initComponent(this._ToolbarTitle_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, 'Kamera_projekt', null);
        compView_9.create(this._ToolbarTitle_9_4.context, [[].concat([this._text_10])], null);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [].concat([this._el_4]),
            [],
            [],
            [].concat([
                this._text_3,
                this._text_8,
                this._el_9,
                this._text_11
            ])
        ], null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_14 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_14, 'padding', '');
        this._appEl_14 = new import3.AppElement(14, null, this, this._el_14);
        var compView_14 = import20.viewFactory_Content0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Content_14_4 = new import20.Wrapper_Content(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import28.Keyboard), this.parentInjector.get(import29.NgZone), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import30.Tabs, null));
        this._appEl_14.initComponent(this._Content_14_4.context, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n\n  ', null);
        this._el_16 = this.renderer.createElement(null, 'h3', null);
        this._text_17 = this.renderer.createText(this._el_16, 'Ez egy kamerás app', null);
        this._text_18 = this.renderer.createText(null, '\n\n  ', null);
        this._el_19 = this.renderer.createElement(null, 'p', null);
        this._text_20 = this.renderer.createText(this._el_19, '\n    Start gomb lenyomásával elindul a kamera\n  ', null);
        this._text_21 = this.renderer.createText(null, '\n  \n  ', null);
        this._el_22 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_22, 'class', 'enjoy-css');
        this._text_23 = this.renderer.createText(this._el_22, 'Start camera', null);
        this._text_24 = this.renderer.createText(null, '\n  \n  ', null);
        this._el_25 = this.renderer.createElement(null, 'p', null);
        this._text_26 = this.renderer.createText(this._el_25, '', null);
        this._text_27 = this.renderer.createText(null, '\n\n', null);
        compView_14.create(this._Content_14_4.context, [
            [],
            [].concat([
                this._text_15,
                this._el_16,
                this._text_18,
                this._el_19,
                this._text_21,
                this._el_22,
                this._text_24,
                this._el_25,
                this._text_27
            ]),
            []
        ], null);
        this._text_28 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_22, 'click', this.eventHandler(this._handle_click_22_0.bind(this)));
        this._expr_9 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_Camera_project0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import31.Icon) && (6 === requestNodeIndex))) {
            return this._Icon_6_3.context;
        }
        if (((token === import32.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_4_4.context;
        }
        if (((token === import33.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._MenuToggle_4_5.context;
        }
        if (((token === import34.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarItem_4_6.context;
        }
        if (((token === import35.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarTitle_9_4.context;
        }
        if (((token === import36.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import27.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Header_0_3.context;
        }
        if (((token === import37.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Content_14_4.context;
        }
        return notFoundResult;
    };
    _View_Camera_project0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._Button_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        var currVal_3 = '';
        this._MenuToggle_4_5.check_menuToggle(currVal_3, throwOnChange, false);
        this._MenuToggle_4_5.detectChangesInternal(this, this._el_4, throwOnChange);
        this._ToolbarItem_4_6.detectChangesInternal(this, this._el_4, throwOnChange);
        var currVal_5 = 'menu';
        this._Icon_6_3.check_name(currVal_5, throwOnChange, false);
        this._Icon_6_3.detectChangesInternal(this, this._el_6, throwOnChange);
        if (this._ToolbarTitle_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        if (this._Content_14_4.detectChangesInternal(this, this._el_14, throwOnChange)) {
            this._appEl_14.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_4_4.context]);
                this._ToolbarItem_4_6.context._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_4_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._MenuToggle_4_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_4, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_6_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_6, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Content_14_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_14, 'statusbar-padding', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_9 = import4.interpolate(1, '', this.context.text, '');
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_26, currVal_9);
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_Camera_project0.prototype.destroyInternal = function () {
        this._Icon_6_3.context.ngOnDestroy();
        this._Content_14_4.context.ngOnDestroy();
    };
    _View_Camera_project0.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_4_5.context.toggle() !== false);
        return (true && pd_0);
    };
    _View_Camera_project0.prototype._handle_click_22_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.Start() !== false);
        return (true && pd_0);
    };
    return _View_Camera_project0;
}(import1.AppView));
export function viewFactory_Camera_project0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Camera_project === null)) {
        (renderType_Camera_project = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_Camera_project, {}));
    }
    return new _View_Camera_project0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=Camera_project.ngfactory.js.map