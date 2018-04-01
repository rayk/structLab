"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lens = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _main = require("./main.css");

var _main2 = _interopRequireDefault(_main);

require("rxjs-spy/operator/tag");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rxjs = require("rxjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable fp/no-mutation */
var rxSpy = require("rxjs-spy").create();


var initState = { value: "Initial Default Value" };
var action$ = new _rxjs.BehaviorSubject(initState).tag("action$");

// Reducer is included with the receiver of the action
var reducer = function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return _extends({}, state, { value: action.payload });
    default:
      return state;
  }
};

// Stream is independent
var stateStore$ = action$.scan(reducer);

// Generic for all action emitters to use.
var actionDispatcher = function actionDispatcher(func) {
  return function () {
    return action$.next(func.apply(undefined, arguments));
  };
};

// Specialised within a given emitter.
var clickHandler = actionDispatcher(function (payload) {
  return {
    type: "ADD",
    payload: payload
  };
});

// View element of the receiver.
var Lens = exports.Lens = function Lens(props) {
  var value = props.value;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      { style: _main2.default.header },
      "Value: ",
      value
    ),
    _react2.default.createElement(
      "button",
      { onClick: function onClick() {
          return clickHandler("First Payload Value");
        } },
      "First"
    ),
    _react2.default.createElement(
      "button",
      { onClick: function onClick() {
          return clickHandler("Second Payload Value");
        } },
      "Second"
    )
  );
};

Lens.propTypes = {
  value: _propTypes2.default.string
};

stateStore$.subscribe(function (state) {
  return _reactDom2.default.render(_react2.default.createElement(Lens, state), document.getElementById("app"));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MZW5zLmpzIl0sIm5hbWVzIjpbInJ4U3B5IiwicmVxdWlyZSIsImNyZWF0ZSIsImluaXRTdGF0ZSIsInZhbHVlIiwiYWN0aW9uJCIsInRhZyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwic3RhdGVTdG9yZSQiLCJzY2FuIiwiYWN0aW9uRGlzcGF0Y2hlciIsIm5leHQiLCJmdW5jIiwiY2xpY2tIYW5kbGVyIiwiTGVucyIsInByb3BzIiwiaGVhZGVyIiwicHJvcFR5cGVzIiwic3RyaW5nIiwic3Vic2NyaWJlIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQVBBO0FBQ0EsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLEVBQW9CQyxNQUFwQixFQUFkOzs7QUFRQSxJQUFNQyxZQUFZLEVBQUVDLE9BQU8sdUJBQVQsRUFBbEI7QUFDQSxJQUFNQyxVQUFVLDBCQUFvQkYsU0FBcEIsRUFBK0JHLEdBQS9CLENBQW1DLFNBQW5DLENBQWhCOztBQUVBO0FBQ0EsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFRQSxPQUFPQyxJQUFmO0FBQ0UsU0FBSyxLQUFMO0FBQ0UsMEJBQVlGLEtBQVosSUFBbUJKLE9BQU9LLE9BQU9FLE9BQWpDO0FBQ0Y7QUFDRSxhQUFPSCxLQUFQO0FBSko7QUFNRCxDQVBEOztBQVNBO0FBQ0EsSUFBTUksY0FBY1AsUUFBUVEsSUFBUixDQUFhTixPQUFiLENBQXBCOztBQUVBO0FBQ0EsSUFBTU8sbUJBQW1CLFNBQW5CQSxnQkFBbUI7QUFBQSxTQUFRO0FBQUEsV0FBYVQsUUFBUVUsSUFBUixDQUFhQyxnQ0FBYixDQUFiO0FBQUEsR0FBUjtBQUFBLENBQXpCOztBQUVBO0FBQ0EsSUFBTUMsZUFBZUgsaUJBQWlCO0FBQUEsU0FBWTtBQUNoREosVUFBTSxLQUQwQztBQUVoREM7QUFGZ0QsR0FBWjtBQUFBLENBQWpCLENBQXJCOztBQUtBO0FBQ08sSUFBTU8sc0JBQU8sU0FBUEEsSUFBTyxRQUFTO0FBQUEsTUFDbkJkLEtBRG1CLEdBQ1RlLEtBRFMsQ0FDbkJmLEtBRG1COztBQUUzQixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFJLE9BQU8sZUFBTWdCLE1BQWpCO0FBQUE7QUFBaUNoQjtBQUFqQyxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQVEsU0FBUztBQUFBLGlCQUFNYSxhQUFhLHFCQUFiLENBQU47QUFBQSxTQUFqQjtBQUFBO0FBQUEsS0FGRjtBQUdFO0FBQUE7QUFBQSxRQUFRLFNBQVM7QUFBQSxpQkFBTUEsYUFBYSxzQkFBYixDQUFOO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBSEYsR0FERjtBQVNELENBWE07O0FBYVBDLEtBQUtHLFNBQUwsR0FBaUI7QUFDZmpCLFNBQU8sb0JBQVVrQjtBQURGLENBQWpCOztBQUlBVixZQUFZVyxTQUFaLENBQXNCO0FBQUEsU0FDcEIsbUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsSUFBRCxFQUFVaEIsS0FBVixDQUFoQixFQUFxQ2lCLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBckMsQ0FEb0I7QUFBQSxDQUF0QiIsImZpbGUiOiJMZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgZnAvbm8tbXV0YXRpb24gKi9cbmNvbnN0IHJ4U3B5ID0gcmVxdWlyZShcInJ4anMtc3B5XCIpLmNyZWF0ZSgpO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL21haW4uY3NzXCI7XG5pbXBvcnQgXCJyeGpzLXNweS9vcGVyYXRvci90YWdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7IHZhbHVlOiBcIkluaXRpYWwgRGVmYXVsdCBWYWx1ZVwiIH07XG5jb25zdCBhY3Rpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdChpbml0U3RhdGUpLnRhZyhcImFjdGlvbiRcIik7XG5cbi8vIFJlZHVjZXIgaXMgaW5jbHVkZWQgd2l0aCB0aGUgcmVjZWl2ZXIgb2YgdGhlIGFjdGlvblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQUREXCI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmFsdWU6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuLy8gU3RyZWFtIGlzIGluZGVwZW5kZW50XG5jb25zdCBzdGF0ZVN0b3JlJCA9IGFjdGlvbiQuc2NhbihyZWR1Y2VyKTtcblxuLy8gR2VuZXJpYyBmb3IgYWxsIGFjdGlvbiBlbWl0dGVycyB0byB1c2UuXG5jb25zdCBhY3Rpb25EaXNwYXRjaGVyID0gZnVuYyA9PiAoLi4uYXJncykgPT4gYWN0aW9uJC5uZXh0KGZ1bmMoLi4uYXJncykpO1xuXG4vLyBTcGVjaWFsaXNlZCB3aXRoaW4gYSBnaXZlbiBlbWl0dGVyLlxuY29uc3QgY2xpY2tIYW5kbGVyID0gYWN0aW9uRGlzcGF0Y2hlcihwYXlsb2FkID0+ICh7XG4gIHR5cGU6IFwiQUREXCIsXG4gIHBheWxvYWRcbn0pKTtcblxuLy8gVmlldyBlbGVtZW50IG9mIHRoZSByZWNlaXZlci5cbmV4cG9ydCBjb25zdCBMZW5zID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIHN0eWxlPXtzdHlsZS5oZWFkZXJ9PlZhbHVlOiB7dmFsdWV9PC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2xpY2tIYW5kbGVyKFwiRmlyc3QgUGF5bG9hZCBWYWx1ZVwiKX0+Rmlyc3Q8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2xpY2tIYW5kbGVyKFwiU2Vjb25kIFBheWxvYWQgVmFsdWVcIil9PlxuICAgICAgICBTZWNvbmRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTGVucy5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5zdGF0ZVN0b3JlJC5zdWJzY3JpYmUoc3RhdGUgPT5cbiAgUmVhY3RET00ucmVuZGVyKDxMZW5zIHsuLi5zdGF0ZX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKVxuKTtcbiJdfQ==