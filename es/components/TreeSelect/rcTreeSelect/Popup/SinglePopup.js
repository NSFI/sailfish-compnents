"use strict";

exports.__esModule = true;
exports.default = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BasePopup = _interopRequireDefault(require("../Base/BasePopup"));

var _SearchInput = _interopRequireDefault(require("../SearchInput"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SinglePopup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SinglePopup, _React$Component);

  function SinglePopup() {
    var _this;

    _this = _React$Component.call(this) || this;

    _defineProperty(_assertThisInitialized(_this), "onPlaceholderClick", function () {
      _this.inputRef.current.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "renderPlaceholder", function () {
      var _this$props = _this.props,
          searchPlaceholder = _this$props.searchPlaceholder,
          searchValue = _this$props.searchValue,
          prefixCls = _this$props.prefixCls;

      if (!searchPlaceholder) {
        return null;
      }

      return _react.default.createElement("span", {
        style: {
          display: searchValue ? 'none' : 'block'
        },
        onClick: _this.onPlaceholderClick,
        className: prefixCls + "-search__field__placeholder"
      }, searchPlaceholder);
    });

    _defineProperty(_assertThisInitialized(_this), "renderSearch", function () {
      var _this$props2 = _this.props,
          showSearch = _this$props2.showSearch,
          dropdownPrefixCls = _this$props2.dropdownPrefixCls;

      if (!showSearch) {
        return null;
      }

      return _react.default.createElement("span", {
        className: dropdownPrefixCls + "-search"
      }, _react.default.createElement(_SearchInput.default, _extends({}, _this.props, {
        ref: _this.inputRef,
        renderPlaceholder: _this.renderPlaceholder
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderResetItem", function () {
      var _this$props3 = _this.props,
          dropdownPrefixCls = _this$props3.dropdownPrefixCls,
          treeNodeResetTitle = _this$props3.treeNodeResetTitle,
          resetSelect = _this$props3.resetSelect;
      return _react.default.createElement("span", {
        className: dropdownPrefixCls + "-reset",
        onClick: resetSelect
      }, treeNodeResetTitle);
    });

    _this.inputRef = (0, _util.createRef)();
    return _this;
  }

  var _proto = SinglePopup.prototype;

  _proto.render = function render() {
    var required = this.props.required;
    return _react.default.createElement(_BasePopup.default, _extends({}, this.props, {
      renderSearch: this.renderSearch,
      renderResetItem: required ? null : this.renderResetItem
    }));
  };

  return SinglePopup;
}(_react.default.Component);

_defineProperty(SinglePopup, "propTypes", Object.assign({}, _BasePopup.default.propTypes, {
  searchValue: _propTypes.default.string,
  showSearch: _propTypes.default.bool,
  dropdownPrefixCls: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  searchPlaceholder: _propTypes.default.string,
  treeNodeResetTitle: _propTypes.default.string,
  resetSelect: _propTypes.default.func
}));

var _default = SinglePopup;
exports.default = _default;