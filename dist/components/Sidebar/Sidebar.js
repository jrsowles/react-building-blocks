'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SidebarHeader = require('../SidebarHeader/SidebarHeader');

var _SidebarHeader2 = _interopRequireDefault(_SidebarHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
    _inherits(Sidebar, _Component);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

        _this.baseStyles = {
            display: 'inline-block'
        };
        return _this;
    }

    _createClass(Sidebar, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                header = _props.header,
                height = _props.height,
                style = _props.style,
                width = _props.width,
                props = _objectWithoutProperties(_props, ['children', 'className', 'header', 'height', 'style', 'width']);

            if (height && !style.height) {
                style.height = height;
            }

            if (width && !style.width) {
                style.width = width;
            }

            return _react2.default.createElement(
                'aside',
                _extends({
                    className: ('sidebar ' + className).trim(),
                    style: _extends({}, this.baseStyles, style)
                }, props),
                header ? _react2.default.createElement(
                    _SidebarHeader2.default,
                    null,
                    header
                ) : null,
                children
            );
        }
    }]);

    return Sidebar;
}(_react.Component);

Sidebar.propTypes = {
    children: function children(props, propName, componentName) {
        var prop = props[propName];
        var result = void 0;

        _react2.default.Children.forEach(prop, function (child) {
            if (child.type.name !== 'SidebarModule') {
                result = new Error('`' + componentName + '` only accepts children of type `SidebarModule`.');
            }
        });

        return result;
    },

    className: _react.PropTypes.string,
    header: _react.PropTypes.node,
    height: _react.PropTypes.string,
    style: _react.PropTypes.object,
    width: _react.PropTypes.string
};

Sidebar.defaultProps = {
    className: '',
    style: {}
};

module.exports = Sidebar;