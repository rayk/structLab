"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require("rxjs-spy/operator/tag");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rxjs = require("rxjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rxSpy = require("rxjs-spy").create();


var action$ = new _rxjs.Subject().tag("Action Subject");

var initState = { value: "Some Initial Value" };

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "SET":
      return _extends({}, state, { value: action.payload });
    default:
      return state;
  }
};

var store$ = action$.startWith(initState).scan(reducer);

var actionDispatcher = function actionDispatcher(func) {
  return function () {
    return action$.next(func.apply(undefined, arguments));
  };
};

var setValue = actionDispatcher(function (payload) {
  return { type: "SET", payload: payload };
});

var App = exports.App = function App(props) {
  var value = props.value;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "Counter"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Value: ",
      value
    ),
    _react2.default.createElement(
      "button",
      { onClick: function onClick() {
          return setValue("First Value");
        } },
      "First"
    ),
    _react2.default.createElement(
      "button",
      { onClick: function onClick() {
          return setValue("Second Value");
        } },
      "Second"
    )
  );
};

store$.subscribe(function (state) {
  return _reactDom2.default.render(_react2.default.createElement(App, state), document.getElementById("app"));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAuanMiXSwibmFtZXMiOlsicnhTcHkiLCJyZXF1aXJlIiwiY3JlYXRlIiwiYWN0aW9uJCIsInRhZyIsImluaXRTdGF0ZSIsInZhbHVlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJzdG9yZSQiLCJzdGFydFdpdGgiLCJzY2FuIiwiYWN0aW9uRGlzcGF0Y2hlciIsIm5leHQiLCJmdW5jIiwic2V0VmFsdWUiLCJBcHAiLCJwcm9wcyIsInN1YnNjcmliZSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUpBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixFQUFvQkMsTUFBcEIsRUFBZDs7O0FBTUEsSUFBTUMsVUFBVSxvQkFBY0MsR0FBZCxDQUFrQixnQkFBbEIsQ0FBaEI7O0FBRUEsSUFBTUMsWUFBWSxFQUFFQyxPQUFPLG9CQUFULEVBQWxCOztBQUVBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakMsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUssS0FBTDtBQUNFLDBCQUFZRixLQUFaLElBQW1CRixPQUFPRyxPQUFPRSxPQUFqQztBQUNGO0FBQ0UsYUFBT0gsS0FBUDtBQUpKO0FBTUQsQ0FQRDs7QUFTQSxJQUFNSSxTQUFTVCxRQUFRVSxTQUFSLENBQWtCUixTQUFsQixFQUE2QlMsSUFBN0IsQ0FBa0NQLE9BQWxDLENBQWY7O0FBRUEsSUFBTVEsbUJBQW1CLFNBQW5CQSxnQkFBbUI7QUFBQSxTQUFRO0FBQUEsV0FBYVosUUFBUWEsSUFBUixDQUFhQyxnQ0FBYixDQUFiO0FBQUEsR0FBUjtBQUFBLENBQXpCOztBQUVBLElBQU1DLFdBQVdILGlCQUFpQjtBQUFBLFNBQVksRUFBRUwsTUFBTSxLQUFSLEVBQWVDLGdCQUFmLEVBQVo7QUFBQSxDQUFqQixDQUFqQjs7QUFFTyxJQUFNUSxvQkFBTSxTQUFOQSxHQUFNLFFBQVM7QUFBQSxNQUNsQmIsS0FEa0IsR0FDUmMsS0FEUSxDQUNsQmQsS0FEa0I7O0FBRTFCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBV0E7QUFBWCxLQUZGO0FBR0U7QUFBQTtBQUFBLFFBQVEsU0FBUztBQUFBLGlCQUFNWSxTQUFTLGFBQVQsQ0FBTjtBQUFBLFNBQWpCO0FBQUE7QUFBQSxLQUhGO0FBSUU7QUFBQTtBQUFBLFFBQVEsU0FBUztBQUFBLGlCQUFNQSxTQUFTLGNBQVQsQ0FBTjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUpGLEdBREY7QUFRRCxDQVZNOztBQVlQTixPQUFPUyxTQUFQLENBQWlCO0FBQUEsU0FDZixtQkFBU0MsTUFBVCxDQUFnQiw4QkFBQyxHQUFELEVBQVNkLEtBQVQsQ0FBaEIsRUFBb0NlLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBcEMsQ0FEZTtBQUFBLENBQWpCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJ4U3B5ID0gcmVxdWlyZShcInJ4anMtc3B5XCIpLmNyZWF0ZSgpO1xuaW1wb3J0IFwicnhqcy1zcHkvb3BlcmF0b3IvdGFnXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5cbmNvbnN0IGFjdGlvbiQgPSBuZXcgU3ViamVjdCgpLnRhZyhcIkFjdGlvbiBTdWJqZWN0XCIpO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7IHZhbHVlOiBcIlNvbWUgSW5pdGlhbCBWYWx1ZVwiIH07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlNFVFwiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZhbHVlOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHN0b3JlJCA9IGFjdGlvbiQuc3RhcnRXaXRoKGluaXRTdGF0ZSkuc2NhbihyZWR1Y2VyKTtcblxuY29uc3QgYWN0aW9uRGlzcGF0Y2hlciA9IGZ1bmMgPT4gKC4uLmFyZ3MpID0+IGFjdGlvbiQubmV4dChmdW5jKC4uLmFyZ3MpKTtcblxuY29uc3Qgc2V0VmFsdWUgPSBhY3Rpb25EaXNwYXRjaGVyKHBheWxvYWQgPT4gKHsgdHlwZTogXCJTRVRcIiwgcGF5bG9hZCB9KSk7XG5cbmV4cG9ydCBjb25zdCBBcHAgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Q291bnRlcjwvaDE+XG4gICAgICA8cD5WYWx1ZToge3ZhbHVlfTwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VmFsdWUoXCJGaXJzdCBWYWx1ZVwiKX0+Rmlyc3Q8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VmFsdWUoXCJTZWNvbmQgVmFsdWVcIil9PlNlY29uZDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuc3RvcmUkLnN1YnNjcmliZShzdGF0ZSA9PlxuICBSZWFjdERPTS5yZW5kZXIoPEFwcCB7Li4uc3RhdGV9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSlcbik7XG4iXX0=