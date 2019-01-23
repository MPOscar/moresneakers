(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ms-style-ms-style-module"],{

/***/ "./node_modules/primeng/components/common/treedragdropservice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/primeng/components/common/treedragdropservice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var TreeDragDropService = /** @class */ (function () {
    function TreeDragDropService() {
        this.dragStartSource = new rxjs_1.Subject();
        this.dragStopSource = new rxjs_1.Subject();
        this.dragStart$ = this.dragStartSource.asObservable();
        this.dragStop$ = this.dragStopSource.asObservable();
    }
    TreeDragDropService.prototype.startDrag = function (event) {
        this.dragStartSource.next(event);
    };
    TreeDragDropService.prototype.stopDrag = function (event) {
        this.dragStopSource.next(event);
    };
    TreeDragDropService = __decorate([
        core_1.Injectable()
    ], TreeDragDropService);
    return TreeDragDropService;
}());
exports.TreeDragDropService = TreeDragDropService;
//# sourceMappingURL=treedragdropservice.js.map

/***/ }),

/***/ "./node_modules/primeng/components/tree/tree.js":
/*!******************************************************!*\
  !*** ./node_modules/primeng/components/tree/tree.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var core_2 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var shared_2 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var treedragdropservice_1 = __webpack_require__(/*! ../common/treedragdropservice */ "./node_modules/primeng/components/common/treedragdropservice.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var UITreeNode = /** @class */ (function () {
    function UITreeNode(tree, domHandler) {
        this.tree = tree;
        this.domHandler = domHandler;
    }
    UITreeNode_1 = UITreeNode;
    UITreeNode.prototype.ngOnInit = function () {
        this.node.parent = this.parentNode;
    };
    UITreeNode.prototype.getIcon = function () {
        var icon;
        if (this.node.icon)
            icon = this.node.icon;
        else
            icon = this.node.expanded && this.node.children && this.node.children.length ? this.node.expandedIcon : this.node.collapsedIcon;
        return UITreeNode_1.ICON_CLASS + ' ' + icon;
    };
    UITreeNode.prototype.isLeaf = function () {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    };
    UITreeNode.prototype.toggle = function (event) {
        if (this.node.expanded)
            this.collapse(event);
        else
            this.expand(event);
    };
    UITreeNode.prototype.expand = function (event) {
        this.node.expanded = true;
        this.tree.onNodeExpand.emit({ originalEvent: event, node: this.node });
    };
    UITreeNode.prototype.collapse = function (event) {
        this.node.expanded = false;
        this.tree.onNodeCollapse.emit({ originalEvent: event, node: this.node });
    };
    UITreeNode.prototype.onNodeClick = function (event) {
        this.tree.onNodeClick(event, this.node);
    };
    UITreeNode.prototype.onNodeTouchEnd = function () {
        this.tree.onNodeTouchEnd();
    };
    UITreeNode.prototype.onNodeRightClick = function (event) {
        this.tree.onNodeRightClick(event, this.node);
    };
    UITreeNode.prototype.isSelected = function () {
        return this.tree.isSelected(this.node);
    };
    UITreeNode.prototype.onDropPoint = function (event, position) {
        event.preventDefault();
        var dragNode = this.tree.dragNode;
        var dragNodeIndex = this.tree.dragNodeIndex;
        var dragNodeScope = this.tree.dragNodeScope;
        var isValidDropPointIndex = this.tree.dragNodeTree === this.tree ? (position === 1 || dragNodeIndex !== this.index - 1) : true;
        if (this.tree.allowDrop(dragNode, this.node, dragNodeScope) && isValidDropPointIndex) {
            var newNodeList = this.node.parent ? this.node.parent.children : this.tree.value;
            this.tree.dragNodeSubNodes.splice(dragNodeIndex, 1);
            var dropIndex = this.index;
            if (position < 0) {
                dropIndex = (this.tree.dragNodeSubNodes === newNodeList) ? ((this.tree.dragNodeIndex > this.index) ? this.index : this.index - 1) : this.index;
                newNodeList.splice(dropIndex, 0, dragNode);
            }
            else {
                dropIndex = newNodeList.length;
                newNodeList.push(dragNode);
            }
            this.tree.dragDropService.stopDrag({
                node: dragNode,
                subNodes: this.node.parent ? this.node.parent.children : this.tree.value,
                index: dragNodeIndex
            });
            this.tree.onNodeDrop.emit({
                originalEvent: event,
                dragNode: dragNode,
                dropNode: this.node,
                dropIndex: dropIndex
            });
        }
        this.draghoverPrev = false;
        this.draghoverNext = false;
    };
    UITreeNode.prototype.onDropPointDragOver = function (event) {
        event.dataTransfer.dropEffect = 'move';
        event.preventDefault();
    };
    UITreeNode.prototype.onDropPointDragEnter = function (event, position) {
        if (this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
            if (position < 0)
                this.draghoverPrev = true;
            else
                this.draghoverNext = true;
        }
    };
    UITreeNode.prototype.onDropPointDragLeave = function (event) {
        this.draghoverPrev = false;
        this.draghoverNext = false;
    };
    UITreeNode.prototype.onDragStart = function (event) {
        if (this.tree.draggableNodes && this.node.draggable !== false) {
            event.dataTransfer.setData("text", "data");
            this.tree.dragDropService.startDrag({
                tree: this,
                node: this.node,
                subNodes: this.node.parent ? this.node.parent.children : this.tree.value,
                index: this.index,
                scope: this.tree.draggableScope
            });
        }
        else {
            event.preventDefault();
        }
    };
    UITreeNode.prototype.onDragStop = function (event) {
        this.tree.dragDropService.stopDrag({
            node: this.node,
            subNodes: this.node.parent ? this.node.parent.children : this.tree.value,
            index: this.index
        });
    };
    UITreeNode.prototype.onDropNodeDragOver = function (event) {
        event.dataTransfer.dropEffect = 'move';
        if (this.tree.droppableNodes) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    UITreeNode.prototype.onDropNode = function (event) {
        if (this.tree.droppableNodes && this.node.droppable !== false) {
            event.preventDefault();
            event.stopPropagation();
            var dragNode = this.tree.dragNode;
            if (this.tree.allowDrop(dragNode, this.node, this.tree.dragNodeScope)) {
                var dragNodeIndex = this.tree.dragNodeIndex;
                this.tree.dragNodeSubNodes.splice(dragNodeIndex, 1);
                if (this.node.children)
                    this.node.children.push(dragNode);
                else
                    this.node.children = [dragNode];
                this.tree.dragDropService.stopDrag({
                    node: dragNode,
                    subNodes: this.node.parent ? this.node.parent.children : this.tree.value,
                    index: this.tree.dragNodeIndex
                });
                this.tree.onNodeDrop.emit({
                    originalEvent: event,
                    dragNode: dragNode,
                    dropNode: this.node,
                    index: this.index
                });
            }
        }
        this.draghoverNode = false;
    };
    UITreeNode.prototype.onDropNodeDragEnter = function (event) {
        if (this.tree.droppableNodes && this.node.droppable !== false && this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
            this.draghoverNode = true;
        }
    };
    UITreeNode.prototype.onDropNodeDragLeave = function (event) {
        if (this.tree.droppableNodes) {
            var rect = event.currentTarget.getBoundingClientRect();
            if (event.x > rect.left + rect.width || event.x < rect.left || event.y >= Math.floor(rect.top + rect.height) || event.y < rect.top) {
                this.draghoverNode = false;
            }
        }
    };
    UITreeNode.prototype.onKeyDown = function (event) {
        var nodeElement = event.target.parentElement.parentElement;
        switch (event.which) {
            //down arrow
            case 40:
                var listElement = nodeElement.children[0].children[1];
                if (listElement) {
                    this.focusNode(listElement.children[0]);
                }
                else {
                    var nextNodeElement = nodeElement.nextElementSibling;
                    if (nextNodeElement) {
                        this.focusNode(nextNodeElement);
                    }
                    else {
                        var nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);
                        if (nextSiblingAncestor) {
                            this.focusNode(nextSiblingAncestor);
                        }
                    }
                }
                event.preventDefault();
                break;
            //up arrow
            case 38:
                if (nodeElement.previousElementSibling) {
                    this.focusNode(this.findLastVisibleDescendant(nodeElement.previousElementSibling));
                }
                else {
                    var parentNodeElement = this.getParentNodeElement(nodeElement);
                    if (parentNodeElement) {
                        this.focusNode(parentNodeElement);
                    }
                }
                event.preventDefault();
                break;
            //right arrow
            case 39:
                if (!this.node.expanded) {
                    this.expand(event);
                }
                event.preventDefault();
                break;
            //left arrow
            case 37:
                if (this.node.expanded) {
                    this.collapse(event);
                }
                event.preventDefault();
                break;
            case 13:
                this.tree.onNodeClick(event, this.node);
                event.preventDefault();
                break;
            default:
                //no op
                break;
        }
    };
    UITreeNode.prototype.findNextSiblingOfAncestor = function (nodeElement) {
        var parentNodeElement = this.getParentNodeElement(nodeElement);
        if (parentNodeElement) {
            if (parentNodeElement.nextElementSibling)
                return parentNodeElement.nextElementSibling;
            else
                return this.findNextSiblingOfAncestor(parentNodeElement);
        }
        else {
            return null;
        }
    };
    UITreeNode.prototype.findLastVisibleDescendant = function (nodeElement) {
        var childrenListElement = nodeElement.children[0].children[1];
        if (childrenListElement) {
            var lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
            return this.findLastVisibleDescendant(lastChildElement);
        }
        else {
            return nodeElement;
        }
    };
    UITreeNode.prototype.getParentNodeElement = function (nodeElement) {
        var parentNodeElement = nodeElement.parentElement.parentElement.parentElement;
        return parentNodeElement.tagName === 'P-TREENODE' ? parentNodeElement : null;
    };
    UITreeNode.prototype.focusNode = function (element) {
        element.children[0].children[0].focus();
    };
    UITreeNode.ICON_CLASS = 'ui-treenode-icon ';
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UITreeNode.prototype, "node", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UITreeNode.prototype, "parentNode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], UITreeNode.prototype, "root", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], UITreeNode.prototype, "index", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], UITreeNode.prototype, "firstChild", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], UITreeNode.prototype, "lastChild", void 0);
    UITreeNode = UITreeNode_1 = __decorate([
        core_1.Component({
            selector: 'p-treeNode',
            template: "\n        <ng-template [ngIf]=\"node\">\n            <li *ngIf=\"tree.droppableNodes\" class=\"ui-treenode-droppoint\" [ngClass]=\"{'ui-treenode-droppoint-active ui-state-highlight':draghoverPrev}\"\n            (drop)=\"onDropPoint($event,-1)\" (dragover)=\"onDropPointDragOver($event)\" (dragenter)=\"onDropPointDragEnter($event,-1)\" (dragleave)=\"onDropPointDragLeave($event)\"></li>\n            <li *ngIf=\"!tree.horizontal\" [ngClass]=\"['ui-treenode',node.styleClass||'', isLeaf() ? 'ui-treenode-leaf': '']\">\n                <div class=\"ui-treenode-content\" role=\"treeitem\" (click)=\"onNodeClick($event)\" (contextmenu)=\"onNodeRightClick($event)\" (touchend)=\"onNodeTouchEnd()\"\n                    (drop)=\"onDropNode($event)\" (dragover)=\"onDropNodeDragOver($event)\" (dragenter)=\"onDropNodeDragEnter($event)\" (dragleave)=\"onDropNodeDragLeave($event)\"\n                    [draggable]=\"tree.draggableNodes\" (dragstart)=\"onDragStart($event)\" (dragend)=\"onDragStop($event)\" tabIndex=\"0\"\n                    [ngClass]=\"{'ui-treenode-selectable':tree.selectionMode && node.selectable !== false,'ui-treenode-dragover':draghoverNode, 'ui-treenode-content-selected':isSelected()}\" \n                    (keydown)=\"onKeyDown($event)\" [attr.aria-posinset]=\"this.index + 1\" [attr.aria-expanded]=\"this.node.expanded\" [attr.aria-selected]=\"isSelected()\">\n                    <span class=\"ui-tree-toggler pi pi-fw\" [ngClass]=\"{'pi-caret-right':!node.expanded,'pi-caret-down':node.expanded}\"\n                            (click)=\"toggle($event)\"></span\n                    ><div class=\"ui-chkbox\" *ngIf=\"tree.selectionMode == 'checkbox' && node.selectable !== false\"><div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\">\n                        <span class=\"ui-chkbox-icon ui-clickable pi\"\n                            [ngClass]=\"{'pi-check':isSelected(),'pi-minus':node.partialSelected}\"></span></div></div\n                    ><span [class]=\"getIcon()\" *ngIf=\"node.icon||node.expandedIcon||node.collapsedIcon\"></span\n                    ><span class=\"ui-treenode-label ui-corner-all\"\n                        [ngClass]=\"{'ui-state-highlight':isSelected()}\">\n                            <span *ngIf=\"!tree.getTemplateForNode(node)\">{{node.label}}</span>\n                            <span *ngIf=\"tree.getTemplateForNode(node)\">\n                                <ng-container *ngTemplateOutlet=\"tree.getTemplateForNode(node); context: {$implicit: node}\"></ng-container>\n                            </span>\n                    </span>\n                </div>\n                <ul class=\"ui-treenode-children\" style=\"display: none;\" *ngIf=\"node.children && node.expanded\" [style.display]=\"node.expanded ? 'block' : 'none'\" role=\"group\">\n                    <p-treeNode *ngFor=\"let childNode of node.children;let firstChild=first;let lastChild=last; let index=index; trackBy: tree.nodeTrackBy\" [node]=\"childNode\" [parentNode]=\"node\"\n                        [firstChild]=\"firstChild\" [lastChild]=\"lastChild\" [index]=\"index\"></p-treeNode>\n                </ul>\n            </li>\n            <li *ngIf=\"tree.droppableNodes&&lastChild\" class=\"ui-treenode-droppoint\" [ngClass]=\"{'ui-treenode-droppoint-active ui-state-highlight':draghoverNext}\"\n            (drop)=\"onDropPoint($event,1)\" (dragover)=\"onDropPointDragOver($event)\" (dragenter)=\"onDropPointDragEnter($event,1)\" (dragleave)=\"onDropPointDragLeave($event)\"></li>\n            <table *ngIf=\"tree.horizontal\" [class]=\"node.styleClass\">\n                <tbody>\n                    <tr>\n                        <td class=\"ui-treenode-connector\" *ngIf=\"!root\">\n                            <table class=\"ui-treenode-connector-table\">\n                                <tbody>\n                                    <tr>\n                                        <td [ngClass]=\"{'ui-treenode-connector-line':!firstChild}\"></td>\n                                    </tr>\n                                    <tr>\n                                        <td [ngClass]=\"{'ui-treenode-connector-line':!lastChild}\"></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </td>\n                        <td class=\"ui-treenode\" [ngClass]=\"{'ui-treenode-collapsed':!node.expanded}\">\n                            <div class=\"ui-treenode-content ui-state-default ui-corner-all\"\n                                [ngClass]=\"{'ui-treenode-selectable':tree.selectionMode,'ui-state-highlight':isSelected()}\" (click)=\"onNodeClick($event)\" (contextmenu)=\"onNodeRightClick($event)\"\n                                (touchend)=\"onNodeTouchEnd()\">\n                                <span class=\"ui-tree-toggler pi pi-fw\" [ngClass]=\"{'pi-plus':!node.expanded,'pi-minus':node.expanded}\" *ngIf=\"!isLeaf()\"\n                                        (click)=\"toggle($event)\"></span\n                                ><span [class]=\"getIcon()\" *ngIf=\"node.icon||node.expandedIcon||node.collapsedIcon\"></span\n                                ><span class=\"ui-treenode-label ui-corner-all\">\n                                        <span *ngIf=\"!tree.getTemplateForNode(node)\">{{node.label}}</span>\n                                        <span *ngIf=\"tree.getTemplateForNode(node)\">\n                                        <ng-container *ngTemplateOutlet=\"tree.getTemplateForNode(node); context: {$implicit: node}\"></ng-container>\n                                        </span>\n                                </span>\n                            </div>\n                        </td>\n                        <td class=\"ui-treenode-children-container\" *ngIf=\"node.children && node.expanded\" [style.display]=\"node.expanded ? 'table-cell' : 'none'\">\n                            <div class=\"ui-treenode-children\">\n                                <p-treeNode *ngFor=\"let childNode of node.children;let firstChild=first;let lastChild=last; trackBy: tree.nodeTrackBy\" [node]=\"childNode\"\n                                        [firstChild]=\"firstChild\" [lastChild]=\"lastChild\"></p-treeNode>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </ng-template>\n    ",
            providers: [domhandler_1.DomHandler]
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return Tree; }))),
        __metadata("design:paramtypes", [Tree, domhandler_1.DomHandler])
    ], UITreeNode);
    return UITreeNode;
    var UITreeNode_1;
}());
exports.UITreeNode = UITreeNode;
var Tree = /** @class */ (function () {
    function Tree(el, dragDropService) {
        this.el = el;
        this.dragDropService = dragDropService;
        this.selectionChange = new core_1.EventEmitter();
        this.onNodeSelect = new core_1.EventEmitter();
        this.onNodeUnselect = new core_1.EventEmitter();
        this.onNodeExpand = new core_1.EventEmitter();
        this.onNodeCollapse = new core_1.EventEmitter();
        this.onNodeContextMenuSelect = new core_1.EventEmitter();
        this.onNodeDrop = new core_1.EventEmitter();
        this.layout = 'vertical';
        this.metaKeySelection = true;
        this.propagateSelectionUp = true;
        this.propagateSelectionDown = true;
        this.loadingIcon = 'pi pi-spinner';
        this.emptyMessage = 'No records found';
        this.nodeTrackBy = function (index, item) { return item; };
    }
    Tree.prototype.ngOnInit = function () {
        var _this = this;
        if (this.droppableNodes) {
            this.dragStartSubscription = this.dragDropService.dragStart$.subscribe(function (event) {
                _this.dragNodeTree = event.tree;
                _this.dragNode = event.node;
                _this.dragNodeSubNodes = event.subNodes;
                _this.dragNodeIndex = event.index;
                _this.dragNodeScope = event.scope;
            });
            this.dragStopSubscription = this.dragDropService.dragStop$.subscribe(function (event) {
                _this.dragNodeTree = null;
                _this.dragNode = null;
                _this.dragNodeSubNodes = null;
                _this.dragNodeIndex = null;
                _this.dragNodeScope = null;
                _this.dragHover = false;
            });
        }
    };
    Object.defineProperty(Tree.prototype, "horizontal", {
        get: function () {
            return this.layout == 'horizontal';
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.templates.length) {
            this.templateMap = {};
        }
        this.templates.forEach(function (item) {
            _this.templateMap[item.name] = item.template;
        });
    };
    Tree.prototype.onNodeClick = function (event, node) {
        var eventTarget = event.target;
        if (eventTarget.className && eventTarget.className.indexOf('ui-tree-toggler') === 0) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            var index_1 = this.findIndexInSelection(node);
            var selected = (index_1 >= 0);
            if (this.isCheckboxSelectionMode()) {
                if (selected) {
                    if (this.propagateSelectionDown)
                        this.propagateDown(node, false);
                    else
                        this.selection = this.selection.filter(function (val, i) { return i != index_1; });
                    if (this.propagateSelectionUp && node.parent) {
                        this.propagateUp(node.parent, false);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    if (this.propagateSelectionDown)
                        this.propagateDown(node, true);
                    else
                        this.selection = (this.selection || []).concat([node]);
                    if (this.propagateSelectionUp && node.parent) {
                        this.propagateUp(node.parent, true);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else {
                var metaSelection = this.nodeTouched ? false : this.metaKeySelection;
                if (metaSelection) {
                    var metaKey = (event.metaKey || event.ctrlKey);
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(null);
                        }
                        else {
                            this.selection = this.selection.filter(function (val, i) { return i != index_1; });
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeUnselect.emit({ originalEvent: event, node: node });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(node);
                        }
                        else if (this.isMultipleSelectionMode()) {
                            this.selection = (!metaKey) ? [] : this.selection || [];
                            this.selection = this.selection.concat([node]);
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeSelect.emit({ originalEvent: event, node: node });
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        if (selected) {
                            this.selection = null;
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = node;
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    else {
                        if (selected) {
                            this.selection = this.selection.filter(function (val, i) { return i != index_1; });
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = (this.selection || []).concat([node]);
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    this.selectionChange.emit(this.selection);
                }
            }
        }
        this.nodeTouched = false;
    };
    Tree.prototype.onNodeTouchEnd = function () {
        this.nodeTouched = true;
    };
    Tree.prototype.onNodeRightClick = function (event, node) {
        if (this.contextMenu) {
            var eventTarget = event.target;
            if (eventTarget.className && eventTarget.className.indexOf('ui-tree-toggler') === 0) {
                return;
            }
            else {
                var index = this.findIndexInSelection(node);
                var selected = (index >= 0);
                if (!selected) {
                    if (this.isSingleSelectionMode())
                        this.selectionChange.emit(node);
                    else
                        this.selectionChange.emit([node]);
                }
                this.contextMenu.show(event);
                this.onNodeContextMenuSelect.emit({ originalEvent: event, node: node });
            }
        }
    };
    Tree.prototype.findIndexInSelection = function (node) {
        var index = -1;
        if (this.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (this.selection == node) ? 0 : -1;
            }
            else {
                for (var i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    };
    Tree.prototype.propagateUp = function (node, select) {
        if (node.children && node.children.length) {
            var selectedCount = 0;
            var childPartialSelected = false;
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (this.isSelected(child)) {
                    selectedCount++;
                }
                else if (child.partialSelected) {
                    childPartialSelected = true;
                }
            }
            if (select && selectedCount == node.children.length) {
                this.selection = (this.selection || []).concat([node]);
                node.partialSelected = false;
            }
            else {
                if (!select) {
                    var index_2 = this.findIndexInSelection(node);
                    if (index_2 >= 0) {
                        this.selection = this.selection.filter(function (val, i) { return i != index_2; });
                    }
                }
                if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length)
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }
        var parent = node.parent;
        if (parent) {
            this.propagateUp(parent, select);
        }
    };
    Tree.prototype.propagateDown = function (node, select) {
        var index = this.findIndexInSelection(node);
        if (select && index == -1) {
            this.selection = (this.selection || []).concat([node]);
        }
        else if (!select && index > -1) {
            this.selection = this.selection.filter(function (val, i) { return i != index; });
        }
        node.partialSelected = false;
        if (node.children && node.children.length) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.propagateDown(child, select);
            }
        }
    };
    Tree.prototype.isSelected = function (node) {
        return this.findIndexInSelection(node) != -1;
    };
    Tree.prototype.isSingleSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'single';
    };
    Tree.prototype.isMultipleSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'multiple';
    };
    Tree.prototype.isCheckboxSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'checkbox';
    };
    Tree.prototype.getTemplateForNode = function (node) {
        if (this.templateMap)
            return node.type ? this.templateMap[node.type] : this.templateMap['default'];
        else
            return null;
    };
    Tree.prototype.onDragOver = function (event) {
        if (this.droppableNodes && (!this.value || this.value.length === 0)) {
            event.dataTransfer.dropEffect = 'move';
            event.preventDefault();
        }
    };
    Tree.prototype.onDrop = function (event) {
        if (this.droppableNodes && (!this.value || this.value.length === 0)) {
            event.preventDefault();
            var dragNode = this.dragNode;
            if (this.allowDrop(dragNode, null, this.dragNodeScope)) {
                var dragNodeIndex = this.dragNodeIndex;
                this.dragNodeSubNodes.splice(dragNodeIndex, 1);
                this.value = this.value || [];
                this.value.push(dragNode);
                this.dragDropService.stopDrag({
                    node: dragNode
                });
            }
        }
    };
    Tree.prototype.onDragEnter = function (event) {
        if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
            this.dragHover = true;
        }
    };
    Tree.prototype.onDragLeave = function (event) {
        if (this.droppableNodes) {
            var rect = event.currentTarget.getBoundingClientRect();
            if (event.x > rect.left + rect.width || event.x < rect.left || event.y > rect.top + rect.height || event.y < rect.top) {
                this.dragHover = false;
            }
        }
    };
    Tree.prototype.allowDrop = function (dragNode, dropNode, dragNodeScope) {
        if (!dragNode) {
            //prevent random html elements to be dragged
            return false;
        }
        else if (this.isValidDragScope(dragNodeScope)) {
            var allow = true;
            if (dropNode) {
                if (dragNode === dropNode) {
                    allow = false;
                }
                else {
                    var parent_1 = dropNode.parent;
                    while (parent_1 != null) {
                        if (parent_1 === dragNode) {
                            allow = false;
                            break;
                        }
                        parent_1 = parent_1.parent;
                    }
                }
            }
            return allow;
        }
        else {
            return false;
        }
    };
    Tree.prototype.isValidDragScope = function (dragScope) {
        var dropScope = this.droppableScope;
        if (dropScope) {
            if (typeof dropScope === 'string') {
                if (typeof dragScope === 'string')
                    return dropScope === dragScope;
                else if (dragScope instanceof Array)
                    return dragScope.indexOf(dropScope) != -1;
            }
            else if (dropScope instanceof Array) {
                if (typeof dragScope === 'string') {
                    return dropScope.indexOf(dragScope) != -1;
                }
                else if (dragScope instanceof Array) {
                    for (var _i = 0, dropScope_1 = dropScope; _i < dropScope_1.length; _i++) {
                        var s = dropScope_1[_i];
                        for (var _a = 0, dragScope_1 = dragScope; _a < dragScope_1.length; _a++) {
                            var ds = dragScope_1[_a];
                            if (s === ds) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        }
        else {
            return true;
        }
    };
    Tree.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Tree.prototype.ngOnDestroy = function () {
        if (this.dragStartSubscription) {
            this.dragStartSubscription.unsubscribe();
        }
        if (this.dragStopSubscription) {
            this.dragStopSubscription.unsubscribe();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Tree.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Tree.prototype, "selectionMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Tree.prototype, "selection", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Tree.prototype, "selectionChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Tree.prototype, "onNodeSelect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Tree.prototype, "onNodeUnselect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Tree.prototype, "onNodeExpand", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Tree.prototype, "onNodeCollapse", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Tree.prototype, "onNodeContextMenuSelect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Tree.prototype, "onNodeDrop", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Tree.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Tree.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Tree.prototype, "contextMenu", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Tree.prototype, "layout", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Tree.prototype, "draggableScope", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Tree.prototype, "droppableScope", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Tree.prototype, "draggableNodes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Tree.prototype, "droppableNodes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Tree.prototype, "metaKeySelection", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Tree.prototype, "propagateSelectionUp", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Tree.prototype, "propagateSelectionDown", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Tree.prototype, "loading", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Tree.prototype, "loadingIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Tree.prototype, "emptyMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Tree.prototype, "ariaLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Tree.prototype, "ariaLabelledBy", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], Tree.prototype, "nodeTrackBy", void 0);
    __decorate([
        core_1.ContentChildren(shared_2.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], Tree.prototype, "templates", void 0);
    Tree = __decorate([
        core_1.Component({
            selector: 'p-tree',
            template: "\n        <div [ngClass]=\"{'ui-tree ui-widget ui-widget-content ui-corner-all':true,'ui-tree-selectable':selectionMode,'ui-treenode-dragover':dragHover,'ui-tree-loading': loading}\" [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"!horizontal\"\n            (drop)=\"onDrop($event)\" (dragover)=\"onDragOver($event)\" (dragenter)=\"onDragEnter($event)\" (dragleave)=\"onDragLeave($event)\">\n            <div class=\"ui-tree-loading-mask ui-widget-overlay\" *ngIf=\"loading\"></div>\n            <div class=\"ui-tree-loading-content\" *ngIf=\"loading\">\n                <i [class]=\"'ui-tree-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <ul class=\"ui-tree-container\" *ngIf=\"value\" role=\"tree\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledBy\">\n                <p-treeNode *ngFor=\"let node of value;let firstChild=first;let lastChild=last; let index=index; trackBy: nodeTrackBy\" [node]=\"node\"\n                [firstChild]=\"firstChild\" [lastChild]=\"lastChild\" [index]=\"index\"></p-treeNode>\n            </ul>\n            <div class=\"ui-tree-empty-message\" *ngIf=\"!loading && !value\">{{emptyMessage}}</div>\n        </div>\n        <div [ngClass]=\"{'ui-tree ui-tree-horizontal ui-widget ui-widget-content ui-corner-all':true,'ui-tree-selectable':selectionMode}\"  [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"horizontal\">\n            <div class=\"ui-tree-loading ui-widget-overlay\" *ngIf=\"loading\"></div>\n            <div class=\"ui-tree-loading-content\" *ngIf=\"loading\">\n                <i [class]=\"'ui-tree-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <table *ngIf=\"value&&value[0]\">\n                <p-treeNode [node]=\"value[0]\" [root]=\"true\"></p-treeNode>\n            </table>\n            <div class=\"ui-tree-empty-message\" *ngIf=\"!loading && !value\">{{emptyMessage}}</div>\n        </div>\n    "
        }),
        __param(1, core_2.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, treedragdropservice_1.TreeDragDropService])
    ], Tree);
    return Tree;
}());
exports.Tree = Tree;
var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Tree, shared_1.SharedModule],
            declarations: [Tree, UITreeNode]
        })
    ], TreeModule);
    return TreeModule;
}());
exports.TreeModule = TreeModule;
//# sourceMappingURL=tree.js.map

/***/ }),

/***/ "./node_modules/primeng/tree.js":
/*!**************************************!*\
  !*** ./node_modules/primeng/tree.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/tree/tree */ "./node_modules/primeng/components/tree/tree.js"));

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc3R5bGUvY29tcG9uZW50cy9kZWxldGUtc3R5bGUvZGVsZXRlLXN0eWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DeleteStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteStyleComponent", function() { return DeleteStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//


//




var titleKey = 'Delete';
var deleteBtnKey = 'Delete';
var messageKey = 'Are you sure you want to delete this Style?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var DeleteStyleComponent = /** @class */ (function () {
    function DeleteStyleComponent(activatedRoute, dialog, stylesService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.stylesService = stylesService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteStyleComponent.prototype.ngAfterViewInit = function () {
        this.getShop();
    };
    DeleteStyleComponent.prototype.ngOnInit = function () {
        this.styleId = this.activatedRoute.snapshot.data.styleId;
    };
    DeleteStyleComponent.prototype.getShop = function () {
        var _this = this;
        this.stylesService.getStyle(this.styleId).subscribe(function (response) {
            _this.data = response.data;
            _this.confirmDeleteStyle();
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DeleteStyleComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteStyleComponent.prototype.confirmDeleteStyle = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            data: {
                titleKey: titleKey,
                okBtnKey: deleteBtnKey,
                messageKey: messageKey,
                messageParam: { param: this.data.name }
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteStyle();
            }
            else {
                _this.close();
            }
        });
    };
    DeleteStyleComponent.prototype.deleteStyle = function () {
        var _this = this;
        this.stylesService.deleteStyle(this.data.id).subscribe(function (response) {
            _this.stylesService.reloadStyles().subscribe(function (response) {
                _this.stylesService.stylesList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.close();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.close();
        });
    };
    DeleteStyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-style',
            template: __webpack_require__(/*! ./delete-style.component.html */ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.html"),
            styles: [__webpack_require__(/*! ./delete-style.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_7__["StylesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteStyleComponent);
    return DeleteStyleComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT STYLE</h1>\n<style-form *ngIf=\"data\"\n    [data]=\"data\"\n    [brands]=\"brands\"\n    [styles]=\"styles\"\n    [styleId]=\"styleId\"\n    [shops]=\"shops\"\n    [categories]=\"categories\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</style-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL2VkaXQtc3R5bGUvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtc3R5bGVcXGNvbXBvbmVudHNcXGVkaXQtc3R5bGVcXGVkaXQtc3R5bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc3R5bGUvY29tcG9uZW50cy9lZGl0LXN0eWxlL2VkaXQtc3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EditStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStyleComponent", function() { return EditStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//





//import { setTranslations } from '@c/ngx-translate';
var errorKey = 'Error';
var updatedGroupMessageKey = 'Updated';
var EditStyleComponent = /** @class */ (function () {
    function EditStyleComponent(activatedRoute, dialog, stylesService, errorHandlingService, router, snackBar, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.stylesService = stylesService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.toastr = toastr;
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditStyleComponent.prototype.ngOnInit = function () {
        this.styleId = this.activatedRoute.snapshot.data.styleId;
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.styles = this.activatedRoute.snapshot.data.styles;
        this.shops = this.activatedRoute.snapshot.data.shops;
    };
    EditStyleComponent.prototype.ngAfterViewInit = function () {
        this.getStyle();
    };
    EditStyleComponent.prototype.getStyle = function () {
        var _this = this;
        this.stylesService.getStyle(this.styleId).subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditStyleComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.updateStyle(data);
    };
    EditStyleComponent.prototype.cancel = function () {
        this.close();
    };
    EditStyleComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    EditStyleComponent.prototype.updateStyle = function (data) {
        var _this = this;
        this.stylesService.putStyle(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedGroupMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    EditStyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-style',
            template: __webpack_require__(/*! ./edit-style.component.html */ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.html"),
            styles: [__webpack_require__(/*! ./edit-style.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_8__["StylesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], EditStyleComponent);
    return EditStyleComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>ADD PARENT</h1>\n<style-parent-form class=\"flex-grow-1\"\n    [brands]=\"dialogData.brands\"\n    [categories]=\"dialogData.categories\"\n    [styles]=\"dialogData.styles\"\n    [data]=\"data\"        \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</style-parent-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL25ldy1wYXJlbnQvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtc3R5bGVcXGNvbXBvbmVudHNcXG5ldy1wYXJlbnRcXG5ldy1wYXJlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc3R5bGUvY29tcG9uZW50cy9uZXctcGFyZW50L25ldy1wYXJlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NewParentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewParentModalComponent", function() { return NewParentModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
/* harmony import */ var _ms_brands_models_brand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ms-brands/models/brand */ "./src/app/ms-back-office/modules/ms-brands/models/brand.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//


//






var errorKey = 'Error';
var savedUserMessageKey = 'Saved';
var NewParentModalComponent = /** @class */ (function () {
    //@Input() brands: Array<Brand>;TODO
    //@Output() close = new EventEmitter();TODO
    function NewParentModalComponent(activatedRoute, dialogRef, dialog, errorHandlingService, router, stylesService, toastr, translate, dialogData) {
        this.activatedRoute = activatedRoute;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.stylesService = stylesService;
        this.toastr = toastr;
        this.translate = translate;
        this.dialogData = dialogData;
        this.data = {
            name: "",
            description: "",
            brand: "",
            category: "",
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    NewParentModalComponent.prototype.ngOnInit = function () {
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.styles = this.activatedRoute.snapshot.data.styles;
    };
    NewParentModalComponent.prototype.submit = function (data) {
        this.createStyle(data);
    };
    NewParentModalComponent.prototype.cancel = function () {
        //this.close.emit();TODO
        this.close();
    };
    NewParentModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    NewParentModalComponent.prototype.createStyle = function (data) {
        var _this = this;
        data.isParent = true;
        this.stylesService.postStyle(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(savedUserMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error, 'style');
            _this.validationErrors = error.formErrors;
        });
    };
    NewParentModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-parent',
            template: __webpack_require__(/*! ./new-parent.component.html */ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.html"),
            styles: [__webpack_require__(/*! ./new-parent.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_8__["StylesService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ms_brands_models_brand__WEBPACK_IMPORTED_MODULE_9__["Brand"]])
    ], NewParentModalComponent);
    return NewParentModalComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>STYLE CREATOR</h1>\n<style-form class=\"flex-grow-1\"\n    [brands]=\"brands\"\n    [categories]=\"categories\"\n    [shops]=\"shops\"\n    [styles]=\"styles\"\n    [data]=\"data\"        \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</style-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL25ldy1zdHlsZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1zdHlsZVxcY29tcG9uZW50c1xcbmV3LXN0eWxlXFxuZXctc3R5bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc3R5bGUvY29tcG9uZW50cy9uZXctc3R5bGUvbmV3LXN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NewStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewStyleComponent", function() { return NewStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//







var errorKey = 'Error';
var savedUserMessageKey = 'Saved';
var NewStyleComponent = /** @class */ (function () {
    //@Input() brands: Array<Brand>;TODO
    //@Output() close = new EventEmitter();TODO
    function NewStyleComponent(activatedRoute, stylesService, errorHandlingService, router, translate, toastr, dialog) {
        this.activatedRoute = activatedRoute;
        this.stylesService = stylesService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.data = {
            name: "",
            description: "",
            brand: "",
            category: "",
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    NewStyleComponent.prototype.ngOnInit = function () {
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.styles = this.activatedRoute.snapshot.data.styles;
        this.shops = this.activatedRoute.snapshot.data.shops;
    };
    NewStyleComponent.prototype.submit = function (data) {
        this.createStyle(data);
    };
    NewStyleComponent.prototype.cancel = function () {
        //this.close.emit();TODO
        this.close();
    };
    NewStyleComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    NewStyleComponent.prototype.createStyle = function (data) {
        var _this = this;
        this.stylesService.postStyle(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.stylesService.postStyleLinkedShops(response.data.id, data.linkedShops).subscribe(function (response) {
            }, function (error) {
                _this.errorHandlingService.handleUiError(errorKey, error);
            });
            if (!data.createRelease) {
                _this.close();
            }
            else {
                _this.router.navigate(['../../releases/create'], { relativeTo: _this.activatedRoute, queryParams: { styleId: response.data.id } });
            }
            _this.toastr.success(savedUserMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error, 'style');
            _this.validationErrors = error.formErrors;
        });
    };
    NewStyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-style',
            template: __webpack_require__(/*! ./new-style.component.html */ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.html"),
            styles: [__webpack_require__(/*! ./new-style.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_8__["StylesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], NewStyleComponent);
    return NewStyleComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"margin-right-25px max-width-1000px\" [fxFlex]=\"50\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n        <div class=\"margin-right-25px\" [fxFlex]=\"80\" fxLayout.lt-md=\"column\">\n\n          <mat-form-field class=\"margin-left-16px width-100pct customized\" appearance=\"fill\">\n\n            <mat-label>Description</mat-label>\n\n            <textarea matInput formControlName=\"description\" class=\"min-height-100px\" readonly></textarea>\n\n          </mat-form-field>\n\n        </div>\n\n        <div class=\"margin-right-25px\" [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n          <div [fxFlex]=\"50\" fxLayout=\"column\" class=\"margin-right-25px\">\n\n            <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n              <mat-label>Style Name</mat-label>\n\n              <input matInput type=\"text\" formControlName=\"name\" required readonly>\n\n            </mat-form-field>\n\n            <mat-form-field class=\"padding-top-5px max-width-480px\">\n              <mat-label>Category</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"category\" [disabled]=\"true\" required>\n                <mat-option>...</mat-option>\n                <mat-option *ngFor=\"let category of dialogData.categories\" [value]=\"category.id\">\n                  {{category.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field class=\"max-width-480px\">\n              <mat-label>Parent</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"parent\" [disabled]=\"true\">\n                <mat-option>...</mat-option>\n                <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\">\n                  {{style.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n          </div>\n\n          <div class=\"\" [fxFlex]=\"50\" fxLayout=\"column\">\n\n            <mat-form-field class=\"width-100pc max-width-480px\">\n\n              <mat-label>BRAND</mat-label>\n\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brand\" panelOpen=\"true\" [disabled]=\"true\" required>\n\n                <mat-option (click)=\"selectParent('')\">...</mat-option>\n\n                <mat-option *ngFor=\"let brand of dialogData.brands\" [value]=\"brand.id\" (click)=\"selectParent(brand.id)\">\n                  {{brand.name}}\n                </mat-option>\n\n              </mat-select>\n\n            </mat-form-field>\n\n            <div>\n\n              <div *ngIf=\"formGroup.get('isParent').value\" class=\"display-flex\">\n\n                <span class=\"padding-top-25px\">Is Parent</span>\n\n              </div>\n\n            </div>\n\n          </div>\n\n\n        </div>\n\n\n\n      </div>\n\n\n\n    </div>\n\n  </div>\n\n\n\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n\n    <button mat-raised-button type=\"button\" (click)=\"close()\">{{'Close' | translate}}</button>\n\n\n\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n:host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1 !important; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n.max-width-480px {\n  max-width: 480px !important; }\n\n.margin-bottom-10px {\n  margin-bottom: 10px !important; }\n\ntextarea {\n  height: 43px; }\n\nmat-form-field {\n  max-width: 100% !important; }\n\n.max-width-1000px {\n  max-width: 1000px !important; }\n\n@media screen and (max-width: 959px) {\n  .customized {\n    max-width: 480px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3NlZS1zdHlsZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1zdHlsZVxcY29tcG9uZW50c1xcc2VlLXN0eWxlXFxzZWUtc3R5bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSx3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSwrQkFBOEIsRUFDakM7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSw2QkFBNEIsRUFDL0I7O0FBRUQ7RUFDSTtJQUNJLDRCQUEyQixFQUM5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3NlZS1zdHlsZS9zZWUtc3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJVxyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXgtd2lkdGgtNjAtcGN0e1xyXG4gICAgbWF4LXdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLm1hdC1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0zNHB4e1xyXG4gICAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0xMDBwY3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTQ4MHB4e1xyXG4gICAgbWF4LXdpZHRoOiA0ODBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbS0xMHB4e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuICAgIGhlaWdodDogNDNweDtcclxufVxyXG5cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTEwMDBweHtcclxuICAgIG1heC13aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAuY3VzdG9taXplZCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SeeStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeStyleComponent", function() { return SeeStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ms-brands/services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



//


//




var errorKey = 'Error';
var SeeStyleComponent = /** @class */ (function (_super) {
    __extends(SeeStyleComponent, _super);
    function SeeStyleComponent(dialog, location, brandsService, stylesService, errorHandlingService, translateService, dialogRef, dialogData) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.location = location;
        _this.brandsService = brandsService;
        _this.stylesService = stylesService;
        _this.errorHandlingService = errorHandlingService;
        _this.dialogRef = dialogRef;
        _this.dialogData = dialogData;
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    SeeStyleComponent.prototype.ngOnInit = function () {
        this.styles = this.dialogData.styles.filter(function (style) {
            return style.isParent;
        });
        this.createFormGroup();
        var validationsErrors = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.validationErrorMessages = validationsErrors;
        this.allStyles = this.styles;
    };
    SeeStyleComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.description),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.parent),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.category, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            isParent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.isParent)
        });
    };
    SeeStyleComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeStyleComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeStyleComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeStyleComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SeeStyleComponent.prototype, "styleId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeStyleComponent.prototype, "shops", void 0);
    SeeStyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'see-style',
            template: __webpack_require__(/*! ./see-style.component.html */ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./see-style.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.scss")]
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_7__["BrandsService"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_8__["StylesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], SeeStyleComponent);
    return SeeStyleComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"margin-right-25px\" [fxFlex]=\"50\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n        <div class=\"margin-right-25px\" [fxFlex]=\"80\" fxLayout.lt-md=\"column\">\n\n          <mat-form-field class=\"margin-left-16px width-100pct customized\" appearance=\"fill\">\n\n            <mat-label>Description</mat-label>\n\n            <textarea matInput formControlName=\"description\" class=\"min-height-100px\"></textarea>\n\n          </mat-form-field>\n\n        </div>\n\n        <div class=\"margin-right-25px\" [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n          <div [fxFlex]=\"50\" fxLayout=\"column\" class=\"margin-right-25px\">\n\n            <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n              <mat-label>Style Name</mat-label>\n\n              <input matInput type=\"text\" formControlName=\"name\" required>\n\n            </mat-form-field>\n\n            <mat-form-field class=\"padding-top-5px max-width-480px\">\n              <mat-label>Category</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"category\" required>\n                <mat-option>...</mat-option>\n                <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\n                  {{category.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <div>\n              <!--styles-parent [styleId]=\"styleId\"></styles-parent-->\n              <p-tree [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile\" (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\"></p-tree>\n            </div>\n            <!--mat-form-field class=\"max-width-480px\">\n              <mat-label>Slect Parent</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"parent\">\n                <mat-option>...</mat-option>\n                <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\">\n                  {{style.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field-->\n\n          </div>\n\n          <div class=\"margin-top-10px margin-right-25px\" [fxFlex]=\"50\" fxLayout=\"column\">\n\n            <button class=\"margin-bottom-25px max-width-480px\" mat-stroked-button type=\"button\" (click)=\"showModalAddNewBrand()\">Add a new Brand</button>\n\n            <mat-form-field class=\"width-100pc max-width-480px\">\n\n              <mat-label>SELECT BRAND</mat-label>\n\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brand\" panelOpen=\"true\" required>\n\n                <mat-option (click)=\"selectParent('')\">...</mat-option>\n\n                <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\" (click)=\"selectParent(brand.id)\">\n                  {{brand.name}}\n                </mat-option>\n\n              </mat-select>\n\n            </mat-form-field>\n\n            <div>\n              <!--mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"isParent\">Is Parent</mat-slide-toggle-->\n            </div>\n\n          </div>\n\n          <div class=\"margin-top-10px\" [fxFlex]=\"30\" fxLayout=\"column\">\n            <button class=\"margin-bottom-25px max-width-480px\" mat-stroked-button type=\"button\" (click)=\"showModalAddNewParent()\">Add a new Parent</button>\n\n            <mat-form-field class=\"width-100pc max-width-480px\">\n\n              <mat-label>SELECT PARENT</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"parent\">\n                <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\">\n                  {{style.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n\n\n\n      </div>\n\n      <div class=\"display-flex padding-bottom-10px padding-top-25px justify-content-center\">\n        <button mat-stroked-button type=\"button\" class=\"max-width-480px\" (click)=\"showModalStoresSelling()\">See Stores Selling this Style</button>\n        <button *ngIf=\"styleId\" mat-stroked-button type=\"button\" class=\"margin-left-25px max-width-480px\" [routerLink]=\"['../../../releases/create']\"\n          [queryParams]=\"{styleId: styleId, returnUrl: location.path()}\">Create a Release</button>\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button (click)=\"submitClicked()\" color=\"primary\">{{'Accept' | translate}}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{'Cancel' | translate}}</button>\n\n    <span class=\"display-flex flex-grow-1\"></span>\n\n    <button mat-stroked-button type=\"buttom\" (click)=\"submitClickedCreateRelease()\" class=\"margin-left-25px max-width-480px\">Create a Release</button>\n\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1 !important; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n.max-width-480px {\n  max-width: 480px !important; }\n\n.margin-bottom-10px {\n  margin-bottom: 10px !important; }\n\ntextarea {\n  height: 43px; }\n\nmat-form-field {\n  max-width: 100% !important; }\n\n.max-width-1000px {\n  max-width: 1000px !important; }\n\n@media screen and (max-width: 959px) {\n  .customized {\n    max-width: 480px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3N0eWxlLWZvcm0vRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtc3R5bGVcXGNvbXBvbmVudHNcXHN0eWxlLWZvcm1cXHN0eWxlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLCtCQUE4QixFQUNqQzs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFHRDtFQUNJLDJCQUEwQixFQUM3Qjs7QUFFRDtFQUNJLDZCQUE0QixFQUMvQjs7QUFFRDtFQUNJO0lBQ0ksNEJBQTJCLEVBQzlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXN0eWxlL2NvbXBvbmVudHMvc3R5bGUtZm9ybS9zdHlsZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0zNHB4e1xyXG4gICAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0xMDBwY3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTQ4MHB4e1xyXG4gICAgbWF4LXdpZHRoOiA0ODBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbS0xMHB4e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuICAgIGhlaWdodDogNDNweDtcclxufVxyXG5cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTEwMDBweHtcclxuICAgIG1heC13aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAuY3VzdG9taXplZCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: StyleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleFormComponent", function() { return StyleFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ms-brands/services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
/* harmony import */ var _new_parent_new_parent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../new-parent/new-parent.component */ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.ts");
/* harmony import */ var _ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ms-brands/components/new-brand/new-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.ts");
/* harmony import */ var _ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
/* harmony import */ var _ms_shops_services_shops_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ms-shops/services/shops.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//








var StyleFormComponent = /** @class */ (function (_super) {
    __extends(StyleFormComponent, _super);
    function StyleFormComponent(dialog, location, brandsService, stylesService, shopsService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.location = location;
        _this.brandsService = brandsService;
        _this.stylesService = stylesService;
        _this.shopsService = shopsService;
        _this.linkedShops = [];
        _this.createRelease = false;
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    StyleFormComponent.prototype.ngOnInit = function () {
        this.styles.forEach(function (element) {
            var file;
            file['label'] = element.name;
            file['collapsedIcon'] = 'fa-folder';
            file['expandedIcon'] = 'fa-folder-open';
            //this.filesStyles['children'] = element.name;
        });
        this.files = [
            {
                label: 'Folder 1',
                collapsedIcon: 'fa-folder',
                expandedIcon: 'fa-folder-open',
                children: [
                    {
                        label: 'Folder 2',
                        collapsedIcon: 'fa-folder',
                        expandedIcon: 'fa-folder-open',
                        children: [
                            {
                                label: 'File 2',
                                icon: 'fa-file-o'
                            }
                        ]
                    },
                    {
                        label: 'Folder 2',
                        collapsedIcon: 'fa-folder',
                        expandedIcon: 'fa-folder-open'
                    },
                    {
                        label: 'File 1',
                        icon: 'fa-file-o'
                    }
                ]
            }
        ];
        var validationsErrors = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.validationErrorMessages = validationsErrors;
        this.createFormGroup();
        this.allStyles = this.styles;
    };
    StyleFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.parent),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            isParent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.isParent)
        });
    };
    StyleFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.data.createRelease = false;
            this.data.linkedShops = this.linkedShops;
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    StyleFormComponent.prototype.submitClickedCreateRelease = function () {
        if (this.formGroup.valid) {
            this.data.createRelease = true;
            this.data.linkedShops = this.linkedShops;
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    StyleFormComponent.prototype.showModalStoresSelling = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_9__["ShopsSellingStyleModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                brands: this.brands,
                categories: this.categories,
                linkedShops: this.linkedShops,
                styleId: this.styleId,
                shops: this.shops,
            }
        });
        this.modalRef.afterClosed().subscribe(function (results) {
            _this.linkedShops = results;
            _this.shopsService.getAllShops().subscribe(function (response) {
                _this.shops = response;
            });
        });
    };
    StyleFormComponent.prototype.showModalAddNewBrand = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_8__["NewBrandComponent"], {
            height: '90%',
            data: { face: this.shop }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.brandsService.getAllBrands().subscribe(function (response) {
                _this.brands = response;
            });
        });
    };
    StyleFormComponent.prototype.showModalAddNewParent = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_parent_new_parent_component__WEBPACK_IMPORTED_MODULE_7__["NewParentModalComponent"], {
            data: {
                brands: this.brands,
                categories: this.categories,
                face: this.shop,
                styles: this.styles,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.stylesService.getAllStyles().subscribe(function (response) {
                _this.styles = response;
            });
        });
    };
    StyleFormComponent.prototype.selectParent = function (brandId) {
        var _this = this;
        this.stylesService.getAllStyles().subscribe(function (response) {
            if (brandId) {
                _this.styles = response.filter(function (style) {
                    return (style.brand === brandId) && style.isParent;
                });
            }
            else {
                _this.styles = response;
            }
        });
    };
    StyleFormComponent.prototype.selectBrand = function (brandId) {
        var _this = this;
        this.brandsService.getAllBrands().subscribe(function (response) {
            if (brandId) {
                _this.brands = response.filter(function (brand) {
                    return brand.id === brandId;
                });
            }
            else {
                _this.brands = response;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleFormComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StyleFormComponent.prototype, "styleId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleFormComponent.prototype, "shops", void 0);
    StyleFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'style-form',
            template: __webpack_require__(/*! ./style-form.component.html */ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./style-form.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_5__["BrandsService"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_6__["StylesService"],
            _ms_shops_services_shops_service__WEBPACK_IMPORTED_MODULE_10__["ShopsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], StyleFormComponent);
    return StyleFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"margin-right-25px\" [fxFlex]=\"50\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n        <div class=\"margin-right-25px\" [fxFlex]=\"80\" fxLayout.lt-md=\"column\">\n\n          <mat-form-field class=\"margin-left-16px width-100pct customized\"  appearance=\"fill\">\n\n            <mat-label>Description</mat-label>\n\n            <textarea matInput formControlName=\"description\" class=\"min-height-100px\"></textarea>\n\n          </mat-form-field>\n\n        </div>\n\n        <div class=\"margin-right-25px\" [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n          <div [fxFlex]=\"50\" fxLayout=\"column\" class=\"margin-right-25px\">\n\n            <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n              <mat-label>Style Name</mat-label>\n\n              <input matInput type=\"text\" formControlName=\"name\" required>\n\n            </mat-form-field>\n\n            <mat-form-field class=\"padding-top-5px max-width-480px\">\n              <mat-label>Category</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"category\" required>\n                <mat-option>...</mat-option>\n                <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\n                  {{category.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <!--mat-form-field class=\"max-width-480px\">\n              <mat-label>Slect Parent</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"parent\">\n                <mat-option>...</mat-option>\n                <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\">\n                  {{style.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field-->\n\n          </div>\n\n          <div class=\"\" [fxFlex]=\"50\" fxLayout=\"column\">\n\n            <mat-form-field class=\"width-100pc max-width-480px\">\n\n              <mat-label>SELECT BRAND</mat-label>\n\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brand\" panelOpen=\"true\" required>\n\n                <mat-option (click)=\"selectParent('')\">...</mat-option>\n\n                <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\" (click)=\"selectParent(brand.id)\">\n                  {{brand.name}}\n                </mat-option>\n\n              </mat-select>\n\n            </mat-form-field>\n\n            <div>\n\n              <mat-slide-toggle [disabled]=\"true\" class=\"padding-top-15px padding-bottom-15px\" formControlName=\"isParent\">Is Parent</mat-slide-toggle>\n            \n            </div>\n\n          </div>\n\n          <!--div class=\"margin-top-10px\" [fxFlex]=\"30\" fxLayout=\"column\">\n          <button class=\"margin-bottom-25px max-width-480px\" mat-stroked-button type=\"button\">Add a new Parent</button>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-label>SELECT PARENT</mat-label>\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"parent\">\n              <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\">\n                {{style.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div-->\n        </div>\n\n\n\n      </div>\n\n      <div *ngIf=\"styleId\" class=\"display-flex padding-bottom-10px justify-content-center\">\n        <button mat-stroked-button type=\"button\" class=\"max-width-480px\" (click)=\"showModalStoresSelling()\">See Stores Selling this Style</button>\n        <button mat-stroked-button type=\"button\" class=\"margin-left-25px max-width-480px\" [routerLink]=\"['../../../releases/create']\"\n          [queryParams]=\"{styleId: styleId, returnUrl: location.path()}\">Create a Release</button>\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div class=\"margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{'Accept' | translate}}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{'Cancel' | translate}}</button>\n\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1 !important; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n.max-width-480px {\n  max-width: 480px !important; }\n\n.margin-bottom-10px {\n  margin-bottom: 10px !important; }\n\ntextarea {\n  height: 43px; }\n\nmat-form-field {\n  max-width: 100% !important; }\n\n.max-width-1000px {\n  max-width: 1000px !important; }\n\n@media screen and (max-width: 959px) {\n  .customized {\n    max-width: 480px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3N0eWxlLXBhcmVudC1mb3JtL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXN0eWxlXFxjb21wb25lbnRzXFxzdHlsZS1wYXJlbnQtZm9ybVxcc3R5bGUtcGFyZW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLCtCQUE4QixFQUNqQzs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFHRDtFQUNJLDJCQUEwQixFQUM3Qjs7QUFFRDtFQUNJLDZCQUE0QixFQUMvQjs7QUFFRDtFQUNJO0lBQ0ksNEJBQTJCLEVBQzlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXN0eWxlL2NvbXBvbmVudHMvc3R5bGUtcGFyZW50LWZvcm0vc3R5bGUtcGFyZW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LTM0cHh7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTEwMHBje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXgtd2lkdGgtNDgwcHh7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLTEwcHh7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRleHRhcmVhe1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG59XHJcblxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXgtd2lkdGgtMTAwMHB4e1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgIC5jdXN0b21pemVkIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: StyleParentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleParentFormComponent", function() { return StyleParentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ms-brands/services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
/* harmony import */ var _ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ms-brands/components/new-brand/new-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.ts");
/* harmony import */ var _ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//

//






var StyleParentFormComponent = /** @class */ (function (_super) {
    __extends(StyleParentFormComponent, _super);
    function StyleParentFormComponent(dialog, location, brandsService, stylesService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.location = location;
        _this.brandsService = brandsService;
        _this.stylesService = stylesService;
        _this.isParent = false;
        _this.createRelease = false;
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    StyleParentFormComponent.prototype.ngOnInit = function () {
        this.styles = this.styles.filter(function (style) {
            return style.isParent;
        });
        var validationsErrors = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.validationErrorMessages = validationsErrors;
        this.createFormGroup();
        this.allStyles = this.styles;
    };
    StyleParentFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            //parent: new FormControl(this.data.parent),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            isParent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true)
        });
    };
    StyleParentFormComponent.prototype.submitClicked = function () {
        console.log(this.createRelease);
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            console.log("invalid");
            this.triggerValidation();
        }
    };
    StyleParentFormComponent.prototype.showModalStoresSelling = function () {
        this.modalRef = this.dialog.open(_ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_8__["ShopsSellingStyleModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                styleId: this.styleId,
                shops: this.shops,
            }
        });
    };
    StyleParentFormComponent.prototype.showModalAddNewBrand = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_7__["NewBrandComponent"], {
            height: '90%',
            width: '90%',
            data: { face: this.shop }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.brandsService.getAllBrands().subscribe(function (response) {
                _this.brands = response;
            });
        });
    };
    StyleParentFormComponent.prototype.selectParent = function (brandId) {
        var _this = this;
        this.stylesService.getAllStyles().subscribe(function (response) {
            if (brandId) {
                _this.styles = response.filter(function (style) {
                    return (style.brand === brandId) && style.isParent;
                });
            }
            else {
                _this.styles = response;
            }
        });
    };
    StyleParentFormComponent.prototype.selectBrand = function (brandId) {
        var _this = this;
        this.brandsService.getAllBrands().subscribe(function (response) {
            if (brandId) {
                _this.brands = response.filter(function (brand) {
                    return brand.id === brandId;
                });
            }
            else {
                _this.brands = response;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleParentFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleParentFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StyleParentFormComponent.prototype, "isParent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleParentFormComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StyleParentFormComponent.prototype, "styleId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleParentFormComponent.prototype, "shops", void 0);
    StyleParentFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'style-parent-form',
            template: __webpack_require__(/*! ./style-parent-form.component.html */ "./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./style-parent-form.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_5__["BrandsService"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_6__["StylesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], StyleParentFormComponent);
    return StyleParentFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/styles-parent/styles-parent.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/styles-parent/styles-parent.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-panel-red.mat-select-panel {\r\n  background: rgba(255, 0, 0, 0.5);\r\n}\r\n\r\n.example-panel-green.mat-select-panel {\r\n  /*background: rgba(0, 255, 0, 0.5);*/\r\n  background-color:transparent;\r\n  box-shadow: none !important;\r\n  align-items: flex-end;\r\n}\r\n\r\n.example-panel-blue.mat-select-panel {\r\n  background: rgba(0, 0, 255, 0.5);\r\n}\r\n\r\n.possition-absolute-bottom{\r\n    position: absolute;\r\n    left: 300px;\r\n    bottom: 0;\r\n}\r\n\r\n.mat-menu-item{\r\n  height: 58px !important;\r\n  padding: 0px !important;\r\n}\r\n\r\n.margin-top-10px{\r\n  margin-top: 10px;\r\n}\r\n\r\n.mat-menu-panel{\r\n  background-color:transparent !important;\r\n  box-shadow: none !important;\r\n  min-width: 0px !important;\r\n  padding-bottom: 64px !important;\r\n}\r\n\r\n.margin-right-10px{\r\n  margin-right: 10px;\r\n}\r\n\r\n.mat-fab{\r\n  box-shadow: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3N0eWxlcy1wYXJlbnQvc3R5bGVzLXBhcmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsaUNBQWlDO0NBQ2xDOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVO0NBQ2I7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usd0NBQXdDO0VBQ3hDLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0NBQ2pDOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsNEJBQTRCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3N0eWxlcy1wYXJlbnQvc3R5bGVzLXBhcmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcGFuZWwtcmVkLm1hdC1zZWxlY3QtcGFuZWwge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1wYW5lbC1ncmVlbi5tYXQtc2VsZWN0LXBhbmVsIHtcclxuICAvKmJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAwLCAwLjUpOyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZXhhbXBsZS1wYW5lbC1ibHVlLm1hdC1zZWxlY3QtcGFuZWwge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjUpO1xyXG59XHJcblxyXG4ucG9zc2l0aW9uLWFic29sdXRlLWJvdHRvbXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDMwMHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubWF0LW1lbnUtaXRlbXtcclxuICBoZWlnaHQ6IDU4cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hcmdpbi10b3AtMTBweHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LW1lbnUtcGFuZWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBtaW4td2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2NHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXJnaW4tcmlnaHQtMTBweHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZmFie1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/styles-parent/styles-parent.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/styles-parent/styles-parent.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n                  [checked]=\"checklistSelection.isSelected(node)\"\n                  (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-form-field>\n      <input matInput #itemValue placeholder=\"New item...\">\n    </mat-form-field>\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/styles-parent/styles-parent.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/styles-parent/styles-parent.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TodoItemNode, TodoItemFlatNode, ChecklistDatabase, TreeChecklistExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function() { return ChecklistDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeChecklistExample", function() { return TreeChecklistExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Node for to-do item
 */
var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());

/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());

/**
 * The Json object for to-do list data.
 */
var TREE_DATA = {
    Groceries: {
        'Almond Meal flour': null,
        'Organic eggs': null,
        'Protein Powder': null,
        Fruits: {
            Apple: null,
            Berries: ['Blueberry', 'Raspberry'],
            Orange: null
        }
    },
    Reminders: [
        'Cook dinner',
        'Read the Material Design spec',
        'Upgrade Application to Angular'
    ]
};
var TREE_DATA_MORE = {
    Groceries: {
        'Almonda Meal flour': null,
        'Organice eggs': null,
        'Proteinn Powder': null,
        Fruits: {
            Apple: null,
            Berries: ['Blueberrrrrry', 'Raspberrrrrrrry'],
            Orange: null
        }
    },
    Reminders: [
        'Cook dinner',
        'Read the Material Design spec',
        'Upgrade Applicccccccation to Angular'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.initialize(TREE_DATA);
    }
    Object.defineProperty(ChecklistDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase.prototype.initialize = function (tree_data) {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(tree_data, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    /** Add an item to to-do list */
    ChecklistDatabase.prototype.insertItem = function (parent, name) {
        if (parent.children) {
            parent.children.push({ item: name });
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChecklistDatabase);
    return ChecklistDatabase;
}());

/**
 * @title Tree with checkboxes
 */
var TreeChecklistExample = /** @class */ (function () {
    function TreeChecklistExample(database) {
        var _this = this;
        this.database = database;
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true /* multiple */);
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) { return node.children; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var existingNode = _this.nestedNodeMap.get(node);
            var flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.dataSource.data = data;
        });
    }
    /** Whether all the descendants of the node are selected. */
    TreeChecklistExample.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var descAllSelected = descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        return descAllSelected;
    };
    /** Whether part of the descendants are selected */
    TreeChecklistExample.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    TreeChecklistExample.prototype.todoItemSelectionToggle = function (node) {
        var _this = this;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
        // Force update for the parent
        descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        this.checkAllParentsSelection(node);
        var _a, _b;
    };
    /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
    TreeChecklistExample.prototype.todoLeafItemSelectionToggle = function (node) {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    };
    /* Checks all the parents when a leaf node is selected/unselected */
    TreeChecklistExample.prototype.checkAllParentsSelection = function (node) {
        var parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    };
    /** Check root node checked state and change it accordingly */
    TreeChecklistExample.prototype.checkRootNodeSelection = function (node) {
        var _this = this;
        var nodeSelected = this.checklistSelection.isSelected(node);
        var descendants = this.treeControl.getDescendants(node);
        var descAllSelected = descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    };
    /* Get the parent node of a node */
    TreeChecklistExample.prototype.getParentNode = function (node) {
        var currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (var i = startIndex; i >= 0; i--) {
            var currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    };
    /** Select the category so we can insert the new item. */
    TreeChecklistExample.prototype.addNewItem = function (node) {
        var parentNode = this.flatNodeMap.get(node);
        this.database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    TreeChecklistExample.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(nestedNode, itemValue);
    };
    TreeChecklistExample.prototype.ngOnInit = function () {
        this.dataSource.data = this.buildFileTree(TREE_DATA_MORE, 0);
    };
    /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
    TreeChecklistExample.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TreeChecklistExample.prototype, "styleId", void 0);
    TreeChecklistExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'styles-parent',
            template: __webpack_require__(/*! ./styles-parent.component.html */ "./src/app/ms-back-office/modules/ms-style/components/styles-parent/styles-parent.component.html"),
            providers: [ChecklistDatabase],
            styles: [__webpack_require__(/*! ./styles-parent.component.css */ "./src/app/ms-back-office/modules/ms-style/components/styles-parent/styles-parent.component.css")]
        }),
        __metadata("design:paramtypes", [ChecklistDatabase])
    ], TreeChecklistExample);
    return TreeChecklistExample;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Style Table</h1>\r\n\r\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\r\n  [formGroup]=\"filter\">\r\n\r\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\r\n\r\n  <mat-form-field>\r\n    <input matInput formControlName=\"name\" placeholder=\"Name\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Brand</mat-label>\r\n    <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brand\">\r\n      <mat-option>...</mat-option>\r\n      <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\r\n        {{brand.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Category</mat-label>\r\n    <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"category\">\r\n      <mat-option>...</mat-option>\r\n      <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\r\n        {{category.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <span class=\"flex-grow-1\"></span>\r\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['../create']\">CREATE A NEW STYLE</button>\r\n</mat-toolbar>\r\n\r\n<div class=\"flex-grow-1 overflow-auto display-flex\">\r\n\r\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"styles\" matSort [matSortActive]=\"stylesService.previousSortColumn\"\r\n    [matSortDirection]=\"stylesService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        NAME\r\n        <td mat-cell *matCellDef=\"let element\"> {{ element.name }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"parent\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        PARENT\r\n        <td mat-cell *matCellDef=\"let element\"> {{ getParent(element.parent) }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"brand\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        BRAND\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ getBrand(element.brand) }} </td>\r\n    </ng-container>\r\n\r\n    <!--ng-container matColumnDef=\"collection\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        COLLECTION\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ element.description }} </td>\r\n    </ng-container-->\r\n\r\n    <ng-container matColumnDef=\"category\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        CATEGORY\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ getCategory(element.category) }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"updatedAt\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        LAST UPDATE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ element.updatedAt | date: 'MM/dd/yyyy HH:mm:ss': timeZoneOffset.toString() }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"min-width-80px\">\r\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Edit\" class=\"min-width-80px\" (click)=\"seeStyleModal(element.id)\">\r\n          <mat-icon>remove_red_eye</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../delete', element.id]\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n    </tr>\r\n\r\n  </table>\r\n\r\n</div>\r\n\r\n<div class=\"margin-right-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n  <span class=\"flex-grow-1\"></span>\r\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\r\n    (page)=\"onPage()\">\r\n  </mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\nbutton {\n  height: 34px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3N0eWxlcy10YWJsZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1zdHlsZVxcY29tcG9uZW50c1xcc3R5bGVzLXRhYmxlXFxzdHlsZXMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3N0eWxlcy10YWJsZS9zdHlsZXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJvdHRvbS0xMHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: StyleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleTableComponent", function() { return StyleTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _see_style_see_style_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../see-style/see-style.component */ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//



//

//


var errorKey = 'Error';
var timeZoneOffset = new Date().getTimezoneOffset();
var StyleTableComponent = /** @class */ (function () {
    function StyleTableComponent(dialog, activatedRoute, stylesService, errorHandlingService) {
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.stylesService = stylesService;
        this.errorHandlingService = errorHandlingService;
        this.displayedColumns = [
            'name',
            'parent',
            'brand',
            //'collection',
            'category',
            'updatedAt',
            'actions'
        ];
        this.totalLength = 0;
        this.styles = [];
        this.timeZoneOffset = 60;
    }
    StyleTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.styless = this.activatedRoute.snapshot.data.styles;
        // Begin observing style list changes.
        this.stylesList = this.stylesService.stylesList.subscribe(function (stylesList) {
            _this.totalLength = stylesList.dataCount;
            _this.styles = stylesList.data;
            if (_this.styles.length === 0 && _this.totalLength > 0 && _this.stylesService.previousPageSize > 0) {
                _this.stylesService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.stylesService.previousPageSize) - 1;
                _this.stylesService.reloadStyles().subscribe(function (response) {
                    _this.stylesService.stylesList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    StyleTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    StyleTableComponent.prototype.ngOnDestroy = function () {
        this.stylesList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    StyleTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['name'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['brand'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['category'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    StyleTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.stylesService.getStyles(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.stylesService.stylesList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    StyleTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    StyleTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    StyleTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    StyleTableComponent.prototype.getBrand = function (id) {
        try {
            return this.brands.find(function (brand) {
                return brand.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    StyleTableComponent.prototype.getCategory = function (id) {
        try {
            return this.categories.find(function (category) {
                return category.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    StyleTableComponent.prototype.getParent = function (id) {
        try {
            return this.styles.find(function (style) {
                return style.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    StyleTableComponent.prototype.seeStyleModal = function (id) {
        var _this = this;
        this.stylesService.getStyle(id).subscribe(function (response) {
            _this.modalRef = _this.dialog.open(_see_style_see_style_component__WEBPACK_IMPORTED_MODULE_6__["SeeStyleComponent"], {
                height: '90%',
                width: '90%',
                data: {
                    id: id,
                    styles: _this.styless,
                    brands: _this.brands,
                    categories: _this.categories,
                    data: response.data
                }
            });
        });
        /*this.modalRef.afterClosed().subscribe(() => {
            this.brandsService.getAllBrands().subscribe((response) => {
                this.brands = response;
            });
        });*/
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], StyleTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], StyleTableComponent.prototype, "sort", void 0);
    StyleTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'styles-table',
            template: __webpack_require__(/*! ./styles-table.component.html */ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.html"),
            styles: [__webpack_require__(/*! ./styles-table.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_7__["StylesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"]])
    ], StyleTableComponent);
    return StyleTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/ms-style-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/ms-style-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: MsStyleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsStyleRoutingModule", function() { return MsStyleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_styles_table_styles_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/styles-table/styles-table.component */ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.ts");
/* harmony import */ var _components_new_style_new_style_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/new-style/new-style.component */ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.ts");
/* harmony import */ var _components_edit_style_edit_style_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-style/edit-style.component */ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.ts");
/* harmony import */ var _components_delete_style_delete_style_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/delete-style/delete-style.component */ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-brands/services/brands-resolve.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts");
/* harmony import */ var _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-categories/services/categories-resolve.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts");
/* harmony import */ var _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ms-style/services/styles-resolve.service */ "./src/app/ms-back-office/modules/ms-style/services/styles-resolve.service.ts");
/* harmony import */ var _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../routing/services/id-resolve.service */ "./src/app/routing/services/id-resolve.service.ts");
/* harmony import */ var _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ms-shops/services/shops-resolve.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-resolve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//






var routes = [
    {
        path: '',
        component: _components_styles_table_styles_table_component__WEBPACK_IMPORTED_MODULE_2__["StyleTableComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CategoriesResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_9__["StylesResolveService"],
        }
    },
    {
        path: 'create',
        component: _components_new_style_new_style_component__WEBPACK_IMPORTED_MODULE_3__["NewStyleComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CategoriesResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_9__["StylesResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__["ShopsResolveService"],
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_style_edit_style_component__WEBPACK_IMPORTED_MODULE_4__["EditStyleComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            styleId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__["IdResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CategoriesResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_9__["StylesResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__["ShopsResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_style_delete_style_component__WEBPACK_IMPORTED_MODULE_5__["DeleteStyleComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            styleId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    }
];
var MsStyleRoutingModule = /** @class */ (function () {
    function MsStyleRoutingModule() {
    }
    MsStyleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsStyleRoutingModule);
    return MsStyleRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/ms-style.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/ms-style.module.ts ***!
  \********************************************************************/
/*! exports provided: MsStyleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsStyleModule", function() { return MsStyleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/tree.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_tree__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/modules/ask-before-refresh/ask-before-refresh.module */ "./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts");
/* harmony import */ var _components_styles_table_styles_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/styles-table/styles-table.component */ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.ts");
/* harmony import */ var _ms_style_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ms-style-routing.module */ "./src/app/ms-back-office/modules/ms-style/ms-style-routing.module.ts");
/* harmony import */ var _components_style_form_style_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/style-form/style-form.component */ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.ts");
/* harmony import */ var _components_style_parent_form_style_parent_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/style-parent-form/style-parent-form.component */ "./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.ts");
/* harmony import */ var _components_styles_parent_styles_parent_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/styles-parent/styles-parent.component */ "./src/app/ms-back-office/modules/ms-style/components/styles-parent/styles-parent.component.ts");
/* harmony import */ var _components_see_style_see_style_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/see-style/see-style.component */ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.ts");
/* harmony import */ var _components_new_style_new_style_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/new-style/new-style.component */ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.ts");
/* harmony import */ var _components_new_parent_new_parent_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/new-parent/new-parent.component */ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.ts");
/* harmony import */ var _components_edit_style_edit_style_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/edit-style/edit-style.component */ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.ts");
/* harmony import */ var _components_delete_style_delete_style_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/delete-style/delete-style.component */ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.ts");
/* harmony import */ var _ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../ms-brands/components/new-brand/new-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.ts");
/* harmony import */ var _ms_brands_ms_brands_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../ms-brands/ms-brands.module */ "./src/app/ms-back-office/modules/ms-brands/ms-brands.module.ts");
/* harmony import */ var _ms_shops_ms_shops_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../ms-shops/ms-shops.module */ "./src/app/ms-back-office/modules/ms-shops/ms-shops.module.ts");
/* harmony import */ var _ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//
















//















var MsStyleModule = /** @class */ (function () {
    function MsStyleModule() {
    }
    MsStyleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"],
                primeng_tree__WEBPACK_IMPORTED_MODULE_14__["TreeModule"],
                _ms_style_routing_module__WEBPACK_IMPORTED_MODULE_18__["MsStyleRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_16__["AskBeforeRefreshModule"],
                _ms_brands_ms_brands_module__WEBPACK_IMPORTED_MODULE_28__["MsBrandsModule"],
                _ms_shops_ms_shops_module__WEBPACK_IMPORTED_MODULE_29__["MsShopsModule"],
            ],
            declarations: [
                _components_styles_table_styles_table_component__WEBPACK_IMPORTED_MODULE_17__["StyleTableComponent"],
                _components_style_form_style_form_component__WEBPACK_IMPORTED_MODULE_19__["StyleFormComponent"],
                _components_style_parent_form_style_parent_form_component__WEBPACK_IMPORTED_MODULE_20__["StyleParentFormComponent"],
                _components_new_style_new_style_component__WEBPACK_IMPORTED_MODULE_23__["NewStyleComponent"],
                _components_edit_style_edit_style_component__WEBPACK_IMPORTED_MODULE_25__["EditStyleComponent"],
                _components_delete_style_delete_style_component__WEBPACK_IMPORTED_MODULE_26__["DeleteStyleComponent"],
                _components_new_parent_new_parent_component__WEBPACK_IMPORTED_MODULE_24__["NewParentModalComponent"],
                _components_see_style_see_style_component__WEBPACK_IMPORTED_MODULE_22__["SeeStyleComponent"],
                _components_styles_parent_styles_parent_component__WEBPACK_IMPORTED_MODULE_21__["TreeChecklistExample"]
            ],
            entryComponents: [
                _ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_30__["ShopsSellingStyleModalComponent"],
                _ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_27__["NewBrandComponent"],
                _components_new_parent_new_parent_component__WEBPACK_IMPORTED_MODULE_24__["NewParentModalComponent"],
                _components_see_style_see_style_component__WEBPACK_IMPORTED_MODULE_22__["SeeStyleComponent"]
            ]
        })
    ], MsStyleModule);
    return MsStyleModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/services/styles-resolve.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/services/styles-resolve.service.ts ***!
  \************************************************************************************/
/*! exports provided: StylesResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesResolveService", function() { return StylesResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _styles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//



//


//import { setTranslationsstyles.service
var errorKey = 'Error';
var StylesResolveService = /** @class */ (function () {
    function StylesResolveService(stylesService, translate, errorHandlingService) {
        this.stylesService = stylesService;
        this.translate = translate;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    StylesResolveService.prototype.resolve = function (route) {
        var _this = this;
        return this.stylesService.getAllStyles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (brands) { return brands; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    };
    StylesResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_styles_service__WEBPACK_IMPORTED_MODULE_5__["StylesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], StylesResolveService);
    return StylesResolveService;
}());



/***/ })

}]);
//# sourceMappingURL=ms-style-ms-style-module.js.map