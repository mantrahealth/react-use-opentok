'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var OT = _interopDefault(require('@opentok/client'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var initialState = {
  // connection info
  isSessionInitialized: false,
  connectionId: undefined,
  isSessionConnected: false,
  // connected data
  session: undefined,
  connections: [],
  streams: [],
  subscribers: [],
  publisher: {}
}; // ACTION TYPE

var UPDATE = 'UPDATE';
var ADD_CONNECTION = 'ADD_CONNECTION';
var REMOVE_CONNECTION = 'REMOVE_CONNECTION';
var ADD_STREAM = 'ADD_STREAM';
var REMOVE_STREAM = 'REMOVE_STREAM';
var SET_PUBLISHER = 'SET_PUBLISHER';
var REMOVE_PUBLISHER = 'REMOVE_PUBLISHER';
var ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
var REMOVE_SUBSCRIBER = 'REMOVE_SUBSCRIBER';

var reducer = function reducer(state, action) {
  var type = action.type,
      payload = action.payload;

  switch (type) {
    // CONNECT_SUCCESS
    case UPDATE:
      {
        return _objectSpread2({}, state, {}, payload);
      }

    case ADD_CONNECTION:
      {
        return _objectSpread2({}, state, {
          connections: [].concat(_toConsumableArray(state.connections), [payload])
        });
      }

    case REMOVE_CONNECTION:
      {
        return _objectSpread2({}, state, {
          connections: _toConsumableArray(state.connections.filter(function (c) {
            return c.connectionId !== payload.connectionId;
          }))
        });
      }

    case ADD_STREAM:
      {
        return _objectSpread2({}, state, {
          streams: [].concat(_toConsumableArray(state.streams), [payload])
        });
      }

    case REMOVE_STREAM:
      {
        return _objectSpread2({}, state, {
          streams: _toConsumableArray(state.streams.filter(function (s) {
            return s.streamId !== payload.streamId;
          }))
        });
      }

    case SET_PUBLISHER:
      {
        var name = payload.name,
            publisher = payload.publisher;
        return _objectSpread2({}, state, {
          publisher: _objectSpread2({}, state.publisher, _defineProperty({}, name, publisher))
        });
      }

    case REMOVE_PUBLISHER:
      {
        var _name = payload.name;
        return _objectSpread2({}, state, {
          publisher: _objectSpread2({}, state.publisher, _defineProperty({}, _name, null))
        });
      }

    case ADD_SUBSCRIBER:
      {
        return _objectSpread2({}, state, {
          subscribers: [].concat(_toConsumableArray(state.subscribers), [payload])
        });
      }

    case REMOVE_SUBSCRIBER:
      {
        return _objectSpread2({}, state, {
          subscribers: _toConsumableArray(state.subscribers.filter(function (s) {
            return s.streamId !== payload.streamId;
          }))
        });
      }

    default:
      return state;
  }
};

var useOpenTokReducer = function useOpenTokReducer() {
  var _useReducer = react.useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var action = react.useMemo(function () {
    return {
      update: function update(payload) {
        dispatch({
          type: UPDATE,
          payload: payload
        });
      },
      addConnection: function addConnection(connection) {
        dispatch({
          type: ADD_CONNECTION,
          payload: connection
        });
      },
      removeConnection: function removeConnection(connection) {
        dispatch({
          type: REMOVE_CONNECTION,
          payload: connection
        });
      },
      addStream: function addStream(stream) {
        dispatch({
          type: ADD_STREAM,
          payload: stream
        });
      },
      removeStream: function removeStream(stream) {
        dispatch({
          type: REMOVE_STREAM,
          payload: stream
        });
      },
      setPublisher: function setPublisher(_ref) {
        var name = _ref.name,
            publisher = _ref.publisher;
        dispatch({
          type: SET_PUBLISHER,
          payload: {
            name: name,
            publisher: publisher
          }
        });
      },
      removePublisher: function removePublisher(_ref2) {
        var name = _ref2.name;
        dispatch({
          type: REMOVE_PUBLISHER,
          payload: {
            name: name
          }
        });
      },
      addSubscriber: function addSubscriber(subscriber) {
        dispatch({
          type: ADD_SUBSCRIBER,
          payload: subscriber
        });
      },
      removeSubscriber: function removeSubscriber(subscriber) {
        dispatch({
          type: REMOVE_SUBSCRIBER,
          payload: subscriber
        });
      }
    };
  }, []);
  return [state, action];
};

var events = ['archiveStarted', 'archiveStopped', 'connectionCreated', 'connectionDestroyed', 'sessionConnected', 'sessionDisconnected', 'sessionReconnected', 'sessionReconnecting', 'signal', 'streamCreated', 'streamDestroyed', 'streamPropertyChanged'];
var useSessionEventHandler = (function (type, callback, session) {
  var isEventTypeSupported = events.some(function (e) {
    return type.startsWith(e);
  });

  if (!isEventTypeSupported) {
    throw new Error('The event type is NOT supported');
  }

  if (typeof callback !== 'function') {
    throw new Error('Incorrect value or type of callback');
  }

  react.useEffect(function () {
    var _ref = session || {},
        sessionId = _ref.sessionId;

    if (typeof sessionId !== 'string') {
      return;
    }

    session.on(type, callback);
    return function () {
      session.off(type, callback);
    };
  }, [session, type, callback]);
});

var defaultOptions = {
  insertMode: 'append',
  width: '100%',
  height: '100%'
};

var useOpenTok = function useOpenTok() {
  var _useOpenTokReducer = useOpenTokReducer(),
      _useOpenTokReducer2 = _slicedToArray(_useOpenTokReducer, 2),
      state = _useOpenTokReducer2[0],
      action = _useOpenTokReducer2[1];

  var isSessionConnected = state.isSessionConnected,
      session = state.session,
      subscribers = state.subscribers,
      publisher = state.publisher,
      streams = state.streams;
  var handleConnectionCreated = react.useCallback(function (event) {
    action.addConnection(event.connection);
  }, [action]);
  var handleConnectionDestroyed = react.useCallback(function (event) {
    action.removeConnection(event.connection);
  }, [action]);
  var handleStreamCreated = react.useCallback(function (event) {
    action.addStream(event.stream);
  }, [action]);
  var handleStreamDestroyed = react.useCallback(function (event) {
    action.removeStream(event.stream);
  }, [action]);
  var initSession = react.useCallback(function (_ref) {
    var apiKey = _ref.apiKey,
        sessionId = _ref.sessionId,
        sessionOptions = _ref.sessionOptions;
    return new Promise(function (resolve) {
      var session = OT.initSession(apiKey, sessionId, sessionOptions);
      action.update({
        session: session,
        isSessionInitialized: true
      });
      resolve(session);
    });
  }, [action]);
  var connectSession = react.useCallback(function (token, sessionToConnect) {
    return new Promise(function (resolve, reject) {
      if (!token) {
        return reject('[react-use-opentok] token does not exist.');
      }

      if (!sessionToConnect) {
        return reject('[react-use-opentok] session does not exist.');
      }

      sessionToConnect.connect(token, function (error) {
        if (error) {
          reject(error);
        } else {
          var connectionId = sessionToConnect.connection.connectionId;
          action.update({
            connectionId: connectionId,
            isSessionConnected: true
          });
          resolve(connectionId);
        }
      });
    });
  }, [action]);
  var initSessionAndConnect = react.useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref3) {
      var apiKey, sessionId, token, sessionOptions, newSession;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              apiKey = _ref3.apiKey, sessionId = _ref3.sessionId, token = _ref3.token, sessionOptions = _ref3.sessionOptions;
              _context.next = 3;
              return initSession({
                apiKey: apiKey,
                sessionId: sessionId,
                sessionOptions: sessionOptions
              });

            case 3:
              newSession = _context.sent;
              _context.next = 6;
              return connectSession(token, newSession);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [connectSession, initSession]);
  var disconnectSession = react.useCallback(function () {
    session.disconnect();
    action.update({
      connectionId: null,
      isSessionConnected: false
    });
  }, [action, session]);
  var publish = react.useCallback(function (_ref4) {
    var name = _ref4.name,
        element = _ref4.element,
        options = _ref4.options;

    if (publisher[name]) {
      throw new Error("The publisher(".concat(name, ") is already existed"));
    }

    return new Promise(function (resolve, reject) {
      var newPublisher = OT.initPublisher(element, _objectSpread2({}, defaultOptions, {}, options), function (error) {
        if (error) {
          reject(error);
        }
      });
      resolve(newPublisher);
    }).then(function (newPublisher) {
      return new Promise(function (resolve, reject) {
        session.publish(newPublisher, function (error) {
          if (error) {
            reject(error);
          } else {
            action.setPublisher({
              name: name,
              publisher: newPublisher
            });
            action.addStream(newPublisher.stream);
            resolve(newPublisher.stream);
          }
        });
      });
    });
  }, [action, publisher, session]);
  var unpublish = react.useCallback(function (_ref5) {
    var name = _ref5.name;

    if (!(publisher && publisher[name])) {
      throw new Error("[unpublish] publisher[".concat(name, "] is undefined"));
    }

    var stream = publisher && publisher[name] && publisher[name].stream;
    session.unpublish(publisher[name]);
    action.removePublisher({
      name: name
    });
    action.removeStream(stream);
  }, [action, publisher, session]);
  var subscribe = react.useCallback(function (_ref6) {
    var stream = _ref6.stream,
        element = _ref6.element,
        options = _ref6.options;
    var streamId = stream.streamId;
    var pickedStream = streams.find(function (s) {
      return s.streamId === streamId;
    });
    var subscriber = session.subscribe(pickedStream, element, _objectSpread2({}, defaultOptions, {}, options));
    action.addSubscriber(subscriber);
  }, [action, session, streams]);
  var unsubscribe = react.useCallback(function (_ref7) {
    var stream = _ref7.stream;
    var streamId = stream.streamId;
    var subscriber = subscribers.find(function (subscriber) {
      return subscriber.streamId === streamId;
    });
    session.unsubscribe(subscriber);
    action.removeSubscriber(subscriber);
  }, [action, session, subscribers]);
  var sendSignal = react.useCallback(function (_ref8) {
    var type = _ref8.type,
        data = _ref8.data,
        completionHandler = _ref8.completionHandler;

    if (!isSessionConnected) {
      throw new Error('Session is not connected');
    }

    var signal = {
      data: data
    };

    if (typeof type === 'string' && type.length > 0) {
      signal.type = type;
    }

    session.signal(signal, function (error) {
      if (error) {
        console.warn('signal error: ' + error.message);
      } else if (typeof completionHandler === 'function') {
        completionHandler();
      }
    });
  }, [isSessionConnected, session]);
  useSessionEventHandler('connectionCreated', handleConnectionCreated, session);
  useSessionEventHandler('connectionDestroyed', handleConnectionDestroyed, session);
  useSessionEventHandler('streamCreated', handleStreamCreated, session);
  useSessionEventHandler('streamDestroyed', handleStreamDestroyed, session);
  return [state, {
    initSessionAndConnect: initSessionAndConnect,
    initSession: initSession,
    connectSession: connectSession,
    disconnectSession: disconnectSession,
    publish: publish,
    unpublish: unpublish,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    sendSignal: sendSignal
  }];
};

module.exports = useOpenTok;
//# sourceMappingURL=react-use-opentok.cjs.js.map
