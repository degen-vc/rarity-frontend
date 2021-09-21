"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./config/rpc.ts":
/*!***********************!*\
  !*** ./config/rpc.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var rpc = (0,D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, _constants__WEBPACK_IMPORTED_MODULE_1__.ChainId.MAINNET, 'https://matic-mainnet.chainstacklabs.com');

/* harmony default export */ __webpack_exports__["default"] = (rpc);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./config/wallets.ts":
/*!***************************!*\
  !*** ./config/wallets.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "network": function() { return /* binding */ network; },
/* harmony export */   "injected": function() { return /* binding */ injected; },
/* harmony export */   "SUPPORTED_WALLETS": function() { return /* binding */ SUPPORTED_WALLETS; }
/* harmony export */ });
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/injected-connector */ "./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js");
/* harmony import */ var _entities_NetworkConnector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/NetworkConnector */ "./entities/NetworkConnector.tsx");
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rpc */ "./config/rpc.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);






var network = new _entities_NetworkConnector__WEBPACK_IMPORTED_MODULE_3__.NetworkConnector({
  defaultChainId: 137,
  urls: _rpc__WEBPACK_IMPORTED_MODULE_4__.default
});
var supportedChainIds = Object.values(_constants__WEBPACK_IMPORTED_MODULE_5__.ChainId);
var injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__.InjectedConnector({
  supportedChainIds: supportedChainIds
});
var SUPPORTED_WALLETS = {
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: function () {
      var _connector = (0,D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var WalletConnectConnector;
        return D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @web3-react/walletconnect-connector */ "./node_modules/@web3-react/walletconnect-connector/dist/walletconnect-connector.esm.js"));

              case 2:
                WalletConnectConnector = _context.sent.WalletConnectConnector;
                return _context.abrupt("return", new WalletConnectConnector({
                  rpc: _rpc__WEBPACK_IMPORTED_MODULE_4__.default,
                  bridge: 'https://bridge.walletconnect.org',
                  qrcode: true,
                  supportedChainIds: [137 // Matic
                  ]
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function connector() {
        return _connector.apply(this, arguments);
      }

      return connector;
    }(),
    name: 'WalletConnect',
    iconName: 'wallet-connect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./constants/index.ts":
/*!****************************!*\
  !*** ./constants/index.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkContextName": function() { return /* binding */ NetworkContextName; },
/* harmony export */   "ChainId": function() { return /* binding */ ChainId; },
/* harmony export */   "MULTICALL2_ADDRESS": function() { return /* binding */ MULTICALL2_ADDRESS; },
/* harmony export */   "RARITY_ADDRESS": function() { return /* binding */ RARITY_ADDRESS; },
/* harmony export */   "RARITY_GOLD_ADDRESS": function() { return /* binding */ RARITY_GOLD_ADDRESS; },
/* harmony export */   "RARITY_ATTRIBUTES_ADDRESS": function() { return /* binding */ RARITY_ATTRIBUTES_ADDRESS; },
/* harmony export */   "RARITY_HELPER_ADDRESS": function() { return /* binding */ RARITY_HELPER_ADDRESS; },
/* harmony export */   "RARITY_SKILLS_ADDRESS": function() { return /* binding */ RARITY_SKILLS_ADDRESS; },
/* harmony export */   "RARITY_DAYCARE_ADDRESS": function() { return /* binding */ RARITY_DAYCARE_ADDRESS; },
/* harmony export */   "RARITY_LIB": function() { return /* binding */ RARITY_LIB; },
/* harmony export */   "RARITY_CELLAR_ADDRESS": function() { return /* binding */ RARITY_CELLAR_ADDRESS; },
/* harmony export */   "RARITY_CRAFTING_ADDRESS": function() { return /* binding */ RARITY_CRAFTING_ADDRESS; },
/* harmony export */   "RARITY_CRAFTING_SUMMONER": function() { return /* binding */ RARITY_CRAFTING_SUMMONER; },
/* harmony export */   "CRAFTING_ALLOWANCE": function() { return /* binding */ CRAFTING_ALLOWANCE; },
/* harmony export */   "BURN_ADDRESS": function() { return /* binding */ BURN_ADDRESS; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var NetworkContextName = 'NETWORK';
var ChainId;

(function (ChainId) {
  ChainId[ChainId["MAINNET"] = 137] = "MAINNET";
})(ChainId || (ChainId = {}));

var MULTICALL2_ADDRESS = '0x557fD25F9169247000F9D866704b4Bc12680CE5f';
var RARITY_ADDRESS = '0x4fb729bdb96d735692dcacd9640cf7e3aa859b25';
var RARITY_GOLD_ADDRESS = '0x7303e7a860daffe4d0b33615479648cb3496903b';
var RARITY_ATTRIBUTES_ADDRESS = '0x3a7c6a0e65480eb32a0ddf1cc2db6563aaed03ce';
var RARITY_HELPER_ADDRESS = '0x985b95D7936681CC39e960B8B5d2d7B1b33C3fD7';
var RARITY_SKILLS_ADDRESS = '0xf740103f4edb85609292472048dc823b5417d9a6';
var RARITY_DAYCARE_ADDRESS = '0xEDB8B4B6c0223dC91326f0F886CCc7FF6f5135a3';
var RARITY_LIB = '0x71FC6e16C23De00A3097DCF63319341733C05c85';
var RARITY_CELLAR_ADDRESS = '0xEF4C8E18c831cB7C937A0D17809102208570eC8F';
var RARITY_CRAFTING_ADDRESS = '0x7d022B9b34eaDC5E7507823EDe459347220EdA5D';
var RARITY_CRAFTING_SUMMONER = 1758709;
var CRAFTING_ALLOWANCE = 100000;
var BURN_ADDRESS = '0x000000000000000000000000000000000000dEaD';

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./hooks/useRarityLibrary.ts":
/*!***********************************!*\
  !*** ./hooks/useRarityLibrary.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useRarityLibrary; }
/* harmony export */ });
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useContract */ "./hooks/useContract.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$();





function useRarityLibrary() {
  _s();

  var lib = (0,_useContract__WEBPACK_IMPORTED_MODULE_2__.useRarityLibContract)();
  var summoners_full = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/function () {
    var _ref = (0,D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(ids) {
      return D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref2 = (0,D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(resolve, reject) {
                  var summoners;
                  return D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return lib === null || lib === void 0 ? void 0 : lib.summoners_full(ids);

                        case 3:
                          summoners = _context.sent;
                          console.log(111111111, summoners);
                          resolve(summoners.map(function (value, i) {
                            return {
                              id: parseInt(ids[i], 16),
                              ability_scores: {
                                attributes: {
                                  _cha: value.ability_scores.attributes._cha === 0 ? 8 : value.ability_scores.attributes._cha,
                                  _con: value.ability_scores.attributes._con === 0 ? 8 : value.ability_scores.attributes._con,
                                  _dex: value.ability_scores.attributes._dex === 0 ? 8 : value.ability_scores.attributes._dex,
                                  _int: value.ability_scores.attributes._int === 0 ? 8 : value.ability_scores.attributes._int,
                                  _str: value.ability_scores.attributes._str === 0 ? 8 : value.ability_scores.attributes._str,
                                  _wis: value.ability_scores.attributes._wis === 0 ? 8 : value.ability_scores.attributes._wis
                                },
                                created: value.ability_scores.created,
                                modifiers: {
                                  _cha: value.ability_scores.modifiers._cha,
                                  _con: value.ability_scores.modifiers._con,
                                  _dex: value.ability_scores.modifiers._dex,
                                  _int: value.ability_scores.modifiers._int,
                                  _str: value.ability_scores.modifiers._str,
                                  _wis: value.ability_scores.modifiers._wis
                                },
                                spent_points: parseInt(value.ability_scores.spent_points.toString()),
                                total_points: parseInt(value.ability_scores.total_points.toString())
                              },
                              base: {
                                _class: parseInt(value.base["class"].toString()),
                                _level: parseInt(value.base.level.toString()),
                                _log: parseInt(value.base.log.toString()),
                                _name: value.base.name,
                                _xp: parseInt(ethers__WEBPACK_IMPORTED_MODULE_4__.utils.formatUnits(value.base.xp.toString(), 'ether'))
                              },
                              gold: {
                                balance: parseInt(ethers__WEBPACK_IMPORTED_MODULE_4__.utils.formatUnits(value.gold.balance, 'ether')),
                                claimable: parseInt(ethers__WEBPACK_IMPORTED_MODULE_4__.utils.formatUnits(value.gold.claimable, 'ether')),
                                claimed: parseInt(ethers__WEBPACK_IMPORTED_MODULE_4__.utils.formatUnits(value.gold.claimed, 'ether'))
                              },
                              materials: {
                                balance: parseInt(value.materials[0].balance),
                                scout: parseInt(value.materials[0].scout.toString()),
                                log: parseInt(value.materials[0].log.toString())
                              },
                              skills: {
                                class_skills: value.skills.class_skills,
                                skills: value.skills.skills,
                                spent_points: parseInt(value.skills.spent_points.toString()),
                                total_points: parseInt(value.skills.total_points.toString())
                              },
                              misc: {
                                daycare_days_paid: 0
                              }
                            };
                          }));
                          _context.next = 12;
                          break;

                        case 8:
                          _context.prev = 8;
                          _context.t0 = _context["catch"](0);
                          console.log('e', _context.t0);
                          reject();

                        case 12:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 8]]);
                }));

                return function (_x2, _x3) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [lib]);
  return {
    summoners_full: summoners_full
  };
}

_s(useRarityLibrary, "/nTnLz1LyAAmtAPzwqthMvEv9Is=", false, function () {
  return [_useContract__WEBPACK_IMPORTED_MODULE_2__.useRarityLibContract];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var make_plural_plurals__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! make-plural/plurals */ "./node_modules/make-plural/plurals.mjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ga4 */ "./node_modules/react-ga4/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var _layouts_Default__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/Default */ "./layouts/Default/index.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../state */ "./state/index.ts");
/* harmony import */ var _components_Web3ReactManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Web3ReactManager */ "./components/Web3ReactManager/index.tsx");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _functions_getLibrary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../functions/getLibrary */ "./functions/getLibrary.ts");
/* harmony import */ var _components_Dots__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Dots */ "./components/Dots/index.tsx");
/* harmony import */ var _state_application_updater__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../state/application/updater */ "./state/application/updater.ts");
/* harmony import */ var _state_multicall_updater__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../state/multicall/updater */ "./state/multicall/updater.tsx");
/* harmony import */ var _state_summoners_updater__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../state/summoners/updater */ "./state/summoners/updater.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @lingui/react */ "./node_modules/@lingui/react/esm/index.js");
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @lingui/core */ "./node_modules/@lingui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");



var _jsxFileName = "D:\\Programming\\projects\\scarcity_frontend\\pages\\_app.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


























var Web3ProviderNetwork = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "components_Web3ProviderNetwork_index_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Web3ProviderNetwork */ "./components/Web3ProviderNetwork/index.tsx"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/Web3ProviderNetwork */ "./components/Web3ProviderNetwork/index.tsx")];
    },
    modules: ["_app.tsx -> " + '../components/Web3ProviderNetwork']
  }
});
_c2 = Web3ProviderNetwork;
var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_21__.ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/ytumanov/scarcity',
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_21__.InMemoryCache()
});

if ( true && !!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_19__.useRouter)(),
      locale = _useRouter.locale;

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    function load(_x) {
      return _load.apply(this, arguments);
    }

    function _load() {
      _load = (0,D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(locale) {
        var _yield$import, messages;

        return D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _lingui_core__WEBPACK_IMPORTED_MODULE_22__.i18n.loadLocaleData(locale, {
                  plurals: make_plural_plurals__WEBPACK_IMPORTED_MODULE_23__[locale.split('_')[0]]
                }); // Load fallback messages

                _context.next = 3;
                return __webpack_require__("./locale lazy recursive ./node_modules/@lingui/loader/index.js! ^\\.\\/.*\\.json$")("./".concat(locale, ".json"));

              case 3:
                _yield$import = _context.sent;
                messages = _yield$import.messages;
                _lingui_core__WEBPACK_IMPORTED_MODULE_22__.i18n.load(locale, messages);
                _lingui_core__WEBPACK_IMPORTED_MODULE_22__.i18n.activate(locale);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _load.apply(this, arguments);
    }

    load(locale); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      react_ga4__WEBPACK_IMPORTED_MODULE_4__.default.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
    }
  }, []); // Allows for conditionally setting a provider to be hoisted per page

  var Provider = Component.Provider || react__WEBPACK_IMPORTED_MODULE_5__.Fragment; // Allows for conditionally setting a layout to be hoisted per page

  var Layout = Component.Layout || _layouts_Default__WEBPACK_IMPORTED_MODULE_8__.default; // Allows for conditionally setting a guard to be hoisted per page

  var Guard = Component.Guard || react__WEBPACK_IMPORTED_MODULE_5__.Fragment;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_18___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("title", {
        children: "Rarity Game | Free to mint D&D blockchain based game"
      }, "title", false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "description",
        content: "Free to mint D&D blockchain based game"
      }, "description", false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "application-name",
        content: "Rarity Game | Free to mint D&D blockchain based game"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "apple-mobile-web-app-title",
        content: "Rarity Game | Free to mint D&D blockchain based game"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "format-detection",
        content: "telephone=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "mobile-web-app-capable",
        content: "yes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "msapplication-tap-highlight",
        content: "no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "theme-color",
        content: "#3E4A94"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "app"
      }, "twitter:card", false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "Rarity Game | Free to mint D&D blockchain based game"
      }, "twitter:title", false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "twitter:url",
        content: "https://rarity.game"
      }, "twitter:url", false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "twitter:description",
        content: "Free to mint D&D blockchain based game"
      }, "twitter:description", false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "twitter:image",
        content: "https://rarity.game/manifest-icon-192.png"
      }, "twitter:image", false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "twitter:creator",
        content: "@RarityGame"
      }, "twitter:creator", false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        property: "og:type",
        content: "website"
      }, "og:type", false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        property: "og:site_name",
        content: "Rarity Game | Free to mint D&D blockchain based game"
      }, "og:site_name", false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        property: "og:url",
        content: "https://rarity.game"
      }, "og:url", false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        property: "og:image",
        content: "https://rarity.game/apple-icon-180.png"
      }, "og:image", false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        property: "og:description",
        content: "Free to mint D&D blockchain based game"
      }, "og:description", false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_lingui_react__WEBPACK_IMPORTED_MODULE_24__.I18nProvider, {
      i18n: _lingui_core__WEBPACK_IMPORTED_MODULE_22__.i18n,
      forceRenderOnLocaleChange: false,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_21__.ApolloProvider, {
        client: client,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_web3_react_core__WEBPACK_IMPORTED_MODULE_11__.Web3ReactProvider, {
          getLibrary: _functions_getLibrary__WEBPACK_IMPORTED_MODULE_13__.default,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(Web3ProviderNetwork, {
            getLibrary: _functions_getLibrary__WEBPACK_IMPORTED_MODULE_13__.default,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_Web3ReactManager__WEBPACK_IMPORTED_MODULE_10__.default, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
                store: _state__WEBPACK_IMPORTED_MODULE_9__.default,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__.PersistGate, {
                  loading: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_Dots__WEBPACK_IMPORTED_MODULE_14__.default, {
                    children: "loading"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 59
                  }, this),
                  persistor: _state__WEBPACK_IMPORTED_MODULE_9__.persistor,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_state_application_updater__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_state_multicall_updater__WEBPACK_IMPORTED_MODULE_16__.default, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_state_summoners_updater__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(Provider, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(Layout, {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(Guard, {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 144,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }, this);
}

_s(MyApp, "LCPyoB2ZBZe6Qruh6SFJsKwVDlM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_19__.useRouter];
});

_c3 = MyApp;

var _c, _c2, _c3;

$RefreshReg$(_c, "Web3ProviderNetwork$dynamic");
$RefreshReg$(_c2, "Web3ProviderNetwork");
$RefreshReg$(_c3, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./state/multicall/updater.tsx":
/*!*************************************!*\
  !*** ./state/multicall/updater.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeListeningKeys": function() { return /* binding */ activeListeningKeys; },
/* harmony export */   "outdatedListeningKeys": function() { return /* binding */ outdatedListeningKeys; },
/* harmony export */   "default": function() { return /* binding */ Updater; }
/* harmony export */ });
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./state/multicall/utils.ts");
/* harmony import */ var _functions_retry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/retry */ "./functions/retry.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./state/multicall/actions.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks */ "./state/hooks.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/array */ "./functions/array/index.ts");
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useActiveWeb3React */ "./hooks/useActiveWeb3React.ts");
/* harmony import */ var _application_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../application/hooks */ "./state/application/hooks.ts");
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useDebounce */ "./hooks/useDebounce.ts");
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useContract */ "./hooks/useContract.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$();












var DEFAULT_GAS_REQUIRED = 1000000;
/**
 * Fetches a chunk of calls, enforcing a minimum block number constraint
 * @param multicall multicall contract to fetch against
 * @param chunk chunk of calls to make
 * @param minBlockNumber minimum block number of the result set
 */

function fetchChunk(_x, _x2, _x3) {
  return _fetchChunk.apply(this, arguments);
}
/**
 * From the current all listeners state, return each call key mapped to the
 * minimum number of blocks per fetch. This is how often each key must be fetched.
 * @param allListeners the all listeners state
 * @param chainId the current chain id
 */


function _fetchChunk() {
  _fetchChunk = (0,D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(multicall, chunk, blockNumber) {
    var _yield$multicall$call, returnData, _error$message;

    return D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.debug('Fetching chunk', chunk, blockNumber);
            console.log('33333333');
            _context.prev = 2;
            console.log('22222222222');
            _context.next = 6;
            return multicall.callStatic.tryBlockAndAggregate(false, chunk.map(function (obj) {
              var _obj$gasRequired;

              return {
                target: obj.address,
                callData: obj.callData,
                gasLimit: (_obj$gasRequired = obj.gasRequired) !== null && _obj$gasRequired !== void 0 ? _obj$gasRequired : 1000000
              };
            }), {
              blockTag: blockNumber
            });

          case 6:
            _yield$multicall$call = _context.sent;
            returnData = _yield$multicall$call.returnData;
            console.log('111111111111111');

            if (true) {
              returnData.forEach(function (_ref, i) {
                var _chunk$i$gasRequired;

                var gasUsed = _ref.gasUsed,
                    returnData = _ref.returnData,
                    success = _ref.success;

                if (!success && returnData.length === 2 && gasUsed.gte(Math.floor(((_chunk$i$gasRequired = chunk[i].gasRequired) !== null && _chunk$i$gasRequired !== void 0 ? _chunk$i$gasRequired : DEFAULT_GAS_REQUIRED) * 0.95))) {
                  var _chunk$i$gasRequired2;

                  console.warn("A call failed due to requiring ".concat(gasUsed.toString(), " vs. allowed ").concat((_chunk$i$gasRequired2 = chunk[i].gasRequired) !== null && _chunk$i$gasRequired2 !== void 0 ? _chunk$i$gasRequired2 : DEFAULT_GAS_REQUIRED), chunk[i]);
                }
              });
            }

            return _context.abrupt("return", returnData);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);

            if (!(_context.t0.code === -32000 || ((_error$message = _context.t0.message) === null || _error$message === void 0 ? void 0 : _error$message.indexOf('header not found')) !== -1)) {
              _context.next = 17;
              break;
            }

            throw new _functions_retry__WEBPACK_IMPORTED_MODULE_3__.RetryableError("header not found for block number ".concat(blockNumber));

          case 17:
            console.error('Failed to fetch chunk', _context.t0);
            throw _context.t0;

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13]]);
  }));
  return _fetchChunk.apply(this, arguments);
}

function activeListeningKeys(allListeners, chainId) {
  if (!allListeners || !chainId) return {};
  var listeners = allListeners[chainId];
  if (!listeners) return {};
  return Object.keys(listeners).reduce(function (memo, callKey) {
    var keyListeners = listeners[callKey];
    memo[callKey] = Object.keys(keyListeners).filter(function (key) {
      var blocksPerFetch = parseInt(key);
      if (blocksPerFetch <= 0) return false;
      return keyListeners[blocksPerFetch] > 0;
    }).reduce(function (previousMin, current) {
      return Math.min(previousMin, parseInt(current));
    }, Infinity);
    return memo;
  }, {});
}
/**
 * Return the keys that need to be refetched
 * @param callResults current call result state
 * @param listeningKeys each call key mapped to how old the data can be in blocks
 * @param chainId the current chain id
 * @param latestBlockNumber the latest block number
 */

function outdatedListeningKeys(callResults, listeningKeys, chainId, latestBlockNumber) {
  if (!chainId || !latestBlockNumber) return [];
  var results = callResults[chainId]; // no results at all, load everything

  if (!results) return Object.keys(listeningKeys);
  return Object.keys(listeningKeys).filter(function (callKey) {
    var blocksPerFetch = listeningKeys[callKey];
    var data = callResults[chainId][callKey]; // no data, must fetch

    if (!data) return true;
    var minDataBlockNumber = latestBlockNumber - (blocksPerFetch - 1); // already fetching it for a recent enough block, don't refetch it

    if (data.fetchingBlockNumber && data.fetchingBlockNumber >= minDataBlockNumber) return false; // if data is older than minDataBlockNumber, fetch it

    return !data.blockNumber || data.blockNumber < minDataBlockNumber;
  });
}
function Updater() {
  _s();

  var dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
  var state = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(function (state) {
    return state.multicall;
  }); // wait for listeners to settle before triggering updates

  var debouncedListeners = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_10__.default)(state.callListeners, 100);
  var latestBlockNumber = (0,_application_hooks__WEBPACK_IMPORTED_MODULE_9__.useBlockNumber)();

  var _useActiveWeb3React = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_8__.useActiveWeb3React)(),
      chainId = _useActiveWeb3React.chainId;

  var multicall2Contract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_11__.useMulticall2Contract)();
  var cancellations = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
  var listeningKeys = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return activeListeningKeys(debouncedListeners, chainId);
  }, [debouncedListeners, chainId]);
  var unserializedOutdatedCallKeys = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return outdatedListeningKeys(state.callResults, listeningKeys, chainId, latestBlockNumber);
  }, [chainId, state.callResults, listeningKeys, latestBlockNumber]);
  var serializedOutdatedCallKeys = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return JSON.stringify(unserializedOutdatedCallKeys.sort());
  }, [unserializedOutdatedCallKeys]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (!latestBlockNumber || !chainId || !multicall2Contract) return;
    var outdatedCallKeys = JSON.parse(serializedOutdatedCallKeys);
    if (outdatedCallKeys.length === 0) return;
    var calls = outdatedCallKeys.map(function (key) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.parseCallKey)(key);
    });
    var chunkedCalls = (0,_functions_array__WEBPACK_IMPORTED_MODULE_7__.chunkArray)(calls);

    if (cancellations.current && cancellations.current.blockNumber !== latestBlockNumber) {
      cancellations.current.cancellations.forEach(function (c) {
        return c();
      });
    }

    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.fetchingMulticallResults)({
      calls: calls,
      chainId: chainId,
      fetchingBlockNumber: latestBlockNumber
    }));
    cancellations.current = {
      blockNumber: latestBlockNumber,
      cancellations: chunkedCalls.map(function (chunk, index) {
        var _retry = (0,_functions_retry__WEBPACK_IMPORTED_MODULE_3__.retry)(function () {
          return fetchChunk(multicall2Contract, chunk, latestBlockNumber);
        }, {
          n: Infinity,
          minWait: 1000,
          maxWait: 2500
        }),
            cancel = _retry.cancel,
            promise = _retry.promise;

        promise.then(function (returnData) {
          // accumulates the length of all previous indices
          var firstCallKeyIndex = chunkedCalls.slice(0, index).reduce(function (memo, curr) {
            return memo + curr.length;
          }, 0);
          var lastCallKeyIndex = firstCallKeyIndex + returnData.length;
          var slice = outdatedCallKeys.slice(firstCallKeyIndex, lastCallKeyIndex); // split the returned slice into errors and success

          var _slice$reduce = slice.reduce(function (memo, callKey, i) {
            if (returnData[i].success) {
              var _returnData$i$returnD;

              memo.results[callKey] = (_returnData$i$returnD = returnData[i].returnData) !== null && _returnData$i$returnD !== void 0 ? _returnData$i$returnD : null;
            } else {
              memo.erroredCalls.push((0,_utils__WEBPACK_IMPORTED_MODULE_2__.parseCallKey)(callKey));
            }

            return memo;
          }, {
            erroredCalls: [],
            results: {}
          }),
              erroredCalls = _slice$reduce.erroredCalls,
              results = _slice$reduce.results; // dispatch any new results


          if (Object.keys(results).length > 0) dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.updateMulticallResults)({
            chainId: chainId,
            results: results,
            blockNumber: latestBlockNumber
          })); // dispatch any errored calls

          if (erroredCalls.length > 0) {
            console.debug('Calls errored in fetch', erroredCalls);
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.errorFetchingMulticallResults)({
              calls: erroredCalls,
              chainId: chainId,
              fetchingBlockNumber: latestBlockNumber
            }));
          }
        })["catch"](function (error) {
          if (error.isCancelledError) {
            console.debug('Cancelled fetch for blockNumber', latestBlockNumber, chunk, chainId);
            return;
          }

          console.error('Failed to fetch multicall chunk', chunk, chainId, error);
          dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.errorFetchingMulticallResults)({
            calls: chunk,
            chainId: chainId,
            fetchingBlockNumber: latestBlockNumber
          }));
        });
        return cancel;
      })
    };
  }, [chainId, multicall2Contract, dispatch, serializedOutdatedCallKeys, latestBlockNumber]);
  return null;
}

_s(Updater, "GFL/asg++fnDn9xreOiqOR6tB6Q=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch, _hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector, _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_10__.default, _application_hooks__WEBPACK_IMPORTED_MODULE_9__.useBlockNumber, _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_8__.useActiveWeb3React, _hooks_useContract__WEBPACK_IMPORTED_MODULE_11__.useMulticall2Contract];
});

_c = Updater;

var _c;

$RefreshReg$(_c, "Updater");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./state/summoners/updater.ts":
/*!************************************!*\
  !*** ./state/summoners/updater.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Updater; }
/* harmony export */ });
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useActiveWeb3React */ "./hooks/useActiveWeb3React.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useIsWindowVisible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useIsWindowVisible */ "./hooks/useIsWindowVisible.ts");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apollo */ "./apollo/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/array */ "./functions/array/index.ts");
/* harmony import */ var _hooks_useRarityLibrary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useRarityLibrary */ "./hooks/useRarityLibrary.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions */ "./state/summoners/actions.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$();



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










function Updater() {
  _s();

  var _useActiveWeb3React = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__.default)(),
      library = _useActiveWeb3React.library,
      chainId = _useActiveWeb3React.chainId,
      account = _useActiveWeb3React.account;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var windowVisible = (0,_hooks_useIsWindowVisible__WEBPACK_IMPORTED_MODULE_4__.default)();

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery)(_apollo__WEBPACK_IMPORTED_MODULE_5__.SUMMONERS, {
    variables: {
      owner: account ? account.toString().toLowerCase() : ''
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      summoners = _useState[0],
      setSummoners = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (!library || !chainId || !account || loading || error || !windowVisible) return;
    var summoners = data.summoners.map(function (s) {
      return s.id;
    });
    setSummoners(summoners);
  }, [library, chainId, account, loading, error, windowVisible]);

  var _useRarityLibrary = (0,_hooks_useRarityLibrary__WEBPACK_IMPORTED_MODULE_8__.default)(),
      summoners_full = _useRarityLibrary.summoners_full;

  var fetch_summoners_data = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)( /*#__PURE__*/(0,D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var full_data, chunks, _full_data, _iterator, _step, chunk, chunk_data;

    return D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(summoners.length <= 50)) {
              _context.next = 8;
              break;
            }

            _context.next = 3;
            return summoners_full(summoners);

          case 3:
            full_data = _context.sent;
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_9__.updateSummoners)(full_data));
            return _context.abrupt("return");

          case 8:
            chunks = (0,_functions_array__WEBPACK_IMPORTED_MODULE_7__.chunkArrayByNumber)(summoners, 50);
            _full_data = [];
            _iterator = _createForOfIteratorHelper(chunks);
            _context.prev = 11;

            _iterator.s();

          case 13:
            if ((_step = _iterator.n()).done) {
              _context.next = 21;
              break;
            }

            chunk = _step.value;
            _context.next = 17;
            return summoners_full(chunk);

          case 17:
            chunk_data = _context.sent;
            _full_data = _full_data.concat(chunk_data);

          case 19:
            _context.next = 13;
            break;

          case 21:
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](11);

            _iterator.e(_context.t0);

          case 26:
            _context.prev = 26;

            _iterator.f();

            return _context.finish(26);

          case 29:
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_9__.updateSummoners)(_full_data));
            return _context.abrupt("return");

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 23, 26, 29]]);
  })), [summoners_full, summoners]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (!library || !chainId || !account || !windowVisible) return;
    fetch_summoners_data();
  }, [summoners, windowVisible, fetch_summoners_data, library, chainId, account]);
  return null;
}

_s(Updater, "JJmaqgXqUHE+8zeM5NfVDOupKpc=", false, function () {
  return [_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__.default, react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, _hooks_useIsWindowVisible__WEBPACK_IMPORTED_MODULE_4__.default, _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery, _hooks_useRarityLibrary__WEBPACK_IMPORTED_MODULE_8__.default];
});

_c = Updater;

var _c;

$RefreshReg$(_c, "Updater");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./constants/abis/helper.json":
/*!************************************!*\
  !*** ./constants/abis/helper.json ***!
  \************************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"inputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"adventure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"approve_all","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_delvers","type":"uint256[]"},{"internalType":"uint256[]","name":"_need_approval","type":"uint256[]"}],"name":"cellar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_claimers","type":"uint256[]"},{"internalType":"uint256[]","name":"_need_approval","type":"uint256[]"}],"name":"claim_gold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"is_approved","outputs":[{"internalType":"bool[]","name":"_is_approved","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"level_up","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ "./constants/abis/rarity_library.json":
/*!********************************************!*\
  !*** ./constants/abis/rarity_library.json ***!
  \********************************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"inputs":[],"name":"_attr","outputs":[{"internalType":"contract rarity_attributes","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_gold","outputs":[{"internalType":"contract rarity_gold","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_items1","outputs":[{"internalType":"contract rarity_item1","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_mat1","outputs":[{"internalType":"contract rarity_mat1","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_skills","outputs":[{"internalType":"contract rarity_skills","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"ability_modifiers","outputs":[{"components":[{"internalType":"int32","name":"_str","type":"int32"},{"internalType":"int32","name":"_dex","type":"int32"},{"internalType":"int32","name":"_con","type":"int32"},{"internalType":"int32","name":"_int","type":"int32"},{"internalType":"int32","name":"_wis","type":"int32"},{"internalType":"int32","name":"_cha","type":"int32"}],"internalType":"struct rl._ability_modifiers","name":"modifiers","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"ability_scores","outputs":[{"components":[{"internalType":"uint32","name":"_str","type":"uint32"},{"internalType":"uint32","name":"_dex","type":"uint32"},{"internalType":"uint32","name":"_con","type":"uint32"},{"internalType":"uint32","name":"_int","type":"uint32"},{"internalType":"uint32","name":"_wis","type":"uint32"},{"internalType":"uint32","name":"_cha","type":"uint32"}],"internalType":"struct rl._ability_scores","name":"scores","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"ability_scores_full","outputs":[{"components":[{"components":[{"internalType":"uint32","name":"_str","type":"uint32"},{"internalType":"uint32","name":"_dex","type":"uint32"},{"internalType":"uint32","name":"_con","type":"uint32"},{"internalType":"uint32","name":"_int","type":"uint32"},{"internalType":"uint32","name":"_wis","type":"uint32"},{"internalType":"uint32","name":"_cha","type":"uint32"}],"internalType":"struct rl._ability_scores","name":"attributes","type":"tuple"},{"components":[{"internalType":"int32","name":"_str","type":"int32"},{"internalType":"int32","name":"_dex","type":"int32"},{"internalType":"int32","name":"_con","type":"int32"},{"internalType":"int32","name":"_int","type":"int32"},{"internalType":"int32","name":"_wis","type":"int32"},{"internalType":"int32","name":"_cha","type":"int32"}],"internalType":"struct rl._ability_modifiers","name":"modifiers","type":"tuple"},{"internalType":"uint256","name":"total_points","type":"uint256"},{"internalType":"uint256","name":"spent_points","type":"uint256"},{"internalType":"bool","name":"created","type":"bool"}],"internalType":"struct rl._ability_scores_full","name":"scores_full","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"base","outputs":[{"components":[{"internalType":"uint256","name":"xp","type":"uint256"},{"internalType":"uint256","name":"log","type":"uint256"},{"internalType":"uint256","name":"class","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"}],"internalType":"struct rl._base","name":"c","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"description","outputs":[{"internalType":"string","name":"full_name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"gold","outputs":[{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"uint256","name":"claimable","type":"uint256"}],"internalType":"struct rl._gold","name":"g","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"items1","outputs":[{"components":[{"internalType":"uint8","name":"base_type","type":"uint8"},{"internalType":"uint8","name":"item_type","type":"uint8"},{"internalType":"uint32","name":"crafted","type":"uint32"},{"internalType":"uint256","name":"crafter","type":"uint256"}],"internalType":"struct rl._item1[]","name":"items","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"materials","outputs":[{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"scout","type":"uint256"},{"internalType":"uint256","name":"log","type":"uint256"}],"internalType":"struct rl._material[]","name":"mats","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"skills","outputs":[{"components":[{"internalType":"uint8[36]","name":"skills","type":"uint8[36]"},{"internalType":"bool[36]","name":"class_skills","type":"bool[36]"},{"internalType":"uint256","name":"total_points","type":"uint256"},{"internalType":"uint256","name":"spent_points","type":"uint256"}],"internalType":"struct rl._skills","name":"s","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"summoner_full","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"xp","type":"uint256"},{"internalType":"uint256","name":"log","type":"uint256"},{"internalType":"uint256","name":"class","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"}],"internalType":"struct rl._base","name":"base","type":"tuple"},{"components":[{"components":[{"internalType":"uint32","name":"_str","type":"uint32"},{"internalType":"uint32","name":"_dex","type":"uint32"},{"internalType":"uint32","name":"_con","type":"uint32"},{"internalType":"uint32","name":"_int","type":"uint32"},{"internalType":"uint32","name":"_wis","type":"uint32"},{"internalType":"uint32","name":"_cha","type":"uint32"}],"internalType":"struct rl._ability_scores","name":"attributes","type":"tuple"},{"components":[{"internalType":"int32","name":"_str","type":"int32"},{"internalType":"int32","name":"_dex","type":"int32"},{"internalType":"int32","name":"_con","type":"int32"},{"internalType":"int32","name":"_int","type":"int32"},{"internalType":"int32","name":"_wis","type":"int32"},{"internalType":"int32","name":"_cha","type":"int32"}],"internalType":"struct rl._ability_modifiers","name":"modifiers","type":"tuple"},{"internalType":"uint256","name":"total_points","type":"uint256"},{"internalType":"uint256","name":"spent_points","type":"uint256"},{"internalType":"bool","name":"created","type":"bool"}],"internalType":"struct rl._ability_scores_full","name":"ability_scores","type":"tuple"},{"components":[{"internalType":"uint8[36]","name":"skills","type":"uint8[36]"},{"internalType":"bool[36]","name":"class_skills","type":"bool[36]"},{"internalType":"uint256","name":"total_points","type":"uint256"},{"internalType":"uint256","name":"spent_points","type":"uint256"}],"internalType":"struct rl._skills","name":"skills","type":"tuple"},{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"uint256","name":"claimable","type":"uint256"}],"internalType":"struct rl._gold","name":"gold","type":"tuple"},{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"scout","type":"uint256"},{"internalType":"uint256","name":"log","type":"uint256"}],"internalType":"struct rl._material[]","name":"materials","type":"tuple[]"}],"internalType":"struct rl._summoner","name":"s","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_s","type":"uint256[]"}],"name":"summoners_full","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"xp","type":"uint256"},{"internalType":"uint256","name":"log","type":"uint256"},{"internalType":"uint256","name":"class","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"}],"internalType":"struct rl._base","name":"base","type":"tuple"},{"components":[{"components":[{"internalType":"uint32","name":"_str","type":"uint32"},{"internalType":"uint32","name":"_dex","type":"uint32"},{"internalType":"uint32","name":"_con","type":"uint32"},{"internalType":"uint32","name":"_int","type":"uint32"},{"internalType":"uint32","name":"_wis","type":"uint32"},{"internalType":"uint32","name":"_cha","type":"uint32"}],"internalType":"struct rl._ability_scores","name":"attributes","type":"tuple"},{"components":[{"internalType":"int32","name":"_str","type":"int32"},{"internalType":"int32","name":"_dex","type":"int32"},{"internalType":"int32","name":"_con","type":"int32"},{"internalType":"int32","name":"_int","type":"int32"},{"internalType":"int32","name":"_wis","type":"int32"},{"internalType":"int32","name":"_cha","type":"int32"}],"internalType":"struct rl._ability_modifiers","name":"modifiers","type":"tuple"},{"internalType":"uint256","name":"total_points","type":"uint256"},{"internalType":"uint256","name":"spent_points","type":"uint256"},{"internalType":"bool","name":"created","type":"bool"}],"internalType":"struct rl._ability_scores_full","name":"ability_scores","type":"tuple"},{"components":[{"internalType":"uint8[36]","name":"skills","type":"uint8[36]"},{"internalType":"bool[36]","name":"class_skills","type":"bool[36]"},{"internalType":"uint256","name":"total_points","type":"uint256"},{"internalType":"uint256","name":"spent_points","type":"uint256"}],"internalType":"struct rl._skills","name":"skills","type":"tuple"},{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"uint256","name":"claimable","type":"uint256"}],"internalType":"struct rl._gold","name":"gold","type":"tuple"},{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"scout","type":"uint256"},{"internalType":"uint256","name":"log","type":"uint256"}],"internalType":"struct rl._material[]","name":"materials","type":"tuple[]"}],"internalType":"struct rl._summoner[]","name":"s","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"}],"name":"wealth_by_level","outputs":[{"internalType":"uint256","name":"wealth","type":"uint256"}],"stateMutability":"pure","type":"function"}]');

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lYjA5YTg4YzY0ZWViMGY5ZjVhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLDhKQUNQRCx1REFESSxFQUNjLDBDQURkLENBQVQ7O0FBSUEsK0RBQWVDLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1LLE9BQU8sR0FBRyxJQUFJRix3RUFBSixDQUFxQjtBQUN4Q0csRUFBQUEsY0FBYyxFQUFFLEdBRHdCO0FBRXhDQyxFQUFBQSxJQUFJLEVBQUVILHlDQUFHQTtBQUYrQixDQUFyQixDQUFoQjtBQUtQLElBQU1JLGlCQUFpQixHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsK0NBQWQsQ0FBMUI7QUFFTyxJQUFNWSxRQUFRLEdBQUcsSUFBSVQsNkVBQUosQ0FBc0I7QUFDMUNNLEVBQUFBLGlCQUFpQixFQUFqQkE7QUFEMEMsQ0FBdEIsQ0FBakI7QUFnQkEsSUFBTUksaUJBQWdELEdBQUc7QUFDNURDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxTQUFTLEVBQUVILFFBREw7QUFFTkksSUFBQUEsSUFBSSxFQUFFLFVBRkE7QUFHTkMsSUFBQUEsUUFBUSxFQUFFLGNBSEo7QUFJTkMsSUFBQUEsV0FBVyxFQUFFLGdDQUpQO0FBS05DLElBQUFBLElBQUksRUFBRSxJQUxBO0FBTU5DLElBQUFBLEtBQUssRUFBRTtBQU5ELEdBRGtEO0FBUzVEQyxFQUFBQSxjQUFjLEVBQUU7QUFDWk4sSUFBQUEsU0FBUztBQUFBLCtVQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQytCLHlOQUQvQjs7QUFBQTtBQUNETyxnQkFBQUEsc0JBREMsaUJBQzhFQSxzQkFEOUU7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QyxDQUFDQyxhQUF6QyxFQUF3RDtBQUN4RE8sSUFBQUEsb0JBQW9CO0FBQ3ZCLEdBSFEsRUFHTixDQUFDMU0sU0FBRCxFQUFZbU0sYUFBWixFQUEyQk8sb0JBQTNCLEVBQWlEVCxPQUFqRCxFQUEwRDVELE9BQTFELEVBQW1FNkQsT0FBbkUsQ0FITSxDQUFUO0FBSUEsU0FBTyxJQUFQO0FBQ0g7O0dBOUN1QnZDO1VBQ2tCeEQsZ0VBRXJCdUYsc0RBRUtDLGdFQUVXQyx1REFjTm5NOzs7S0FyQlBrSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25maWcvcnBjLnRzIiwid2VicGFjazovL19OX0UvLi9jb25maWcvd2FsbGV0cy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2luZGV4LnRzIiwid2VicGFjazovL19OX0UvLi9ob29rcy91c2VSYXJpdHlMaWJyYXJ5LnRzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvbXVsdGljYWxsL3VwZGF0ZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9zdGF0ZS9zdW1tb25lcnMvdXBkYXRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFpbklkIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xyXG5cclxuY29uc3QgcnBjID0ge1xyXG4gICAgW0NoYWluSWQuTUFJTk5FVF06ICdodHRwczovL21hdGljLW1haW5uZXQuY2hhaW5zdGFja2xhYnMuY29tJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcnBjXHJcbiIsImltcG9ydCB7IEFic3RyYWN0Q29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvYWJzdHJhY3QtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgTmV0d29ya0Nvbm5lY3RvciB9IGZyb20gJy4uL2VudGl0aWVzL05ldHdvcmtDb25uZWN0b3InXHJcbmltcG9ydCBSUEMgZnJvbSAnLi9ycGMnXHJcbmltcG9ydCB7IENoYWluSWQgfSBmcm9tICcuLi9jb25zdGFudHMnXHJcblxyXG5leHBvcnQgY29uc3QgbmV0d29yayA9IG5ldyBOZXR3b3JrQ29ubmVjdG9yKHtcclxuICAgIGRlZmF1bHRDaGFpbklkOiAxMzcsXHJcbiAgICB1cmxzOiBSUEMsXHJcbn0pXHJcblxyXG5jb25zdCBzdXBwb3J0ZWRDaGFpbklkcyA9IE9iamVjdC52YWx1ZXMoQ2hhaW5JZCkgYXMgbnVtYmVyW11cclxuXHJcbmV4cG9ydCBjb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3Rvcih7XHJcbiAgICBzdXBwb3J0ZWRDaGFpbklkcyxcclxufSlcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2FsbGV0SW5mbyB7XHJcbiAgICBjb25uZWN0b3I/OiAoKCkgPT4gUHJvbWlzZTxBYnN0cmFjdENvbm5lY3Rvcj4pIHwgQWJzdHJhY3RDb25uZWN0b3JcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgaWNvbk5hbWU6IHN0cmluZ1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1xyXG4gICAgaHJlZjogc3RyaW5nIHwgbnVsbFxyXG4gICAgY29sb3I6IHN0cmluZ1xyXG4gICAgcHJpbWFyeT86IHRydWVcclxuICAgIG1vYmlsZT86IHRydWVcclxuICAgIG1vYmlsZU9ubHk/OiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTVVBQT1JURURfV0FMTEVUUzogeyBba2V5OiBzdHJpbmddOiBXYWxsZXRJbmZvIH0gPSB7XHJcbiAgICBNRVRBTUFTSzoge1xyXG4gICAgICAgIGNvbm5lY3RvcjogaW5qZWN0ZWQsXHJcbiAgICAgICAgbmFtZTogJ01ldGFNYXNrJyxcclxuICAgICAgICBpY29uTmFtZTogJ21ldGFtYXNrLnBuZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdFYXN5LXRvLXVzZSBicm93c2VyIGV4dGVuc2lvbi4nLFxyXG4gICAgICAgIGhyZWY6IG51bGwsXHJcbiAgICAgICAgY29sb3I6ICcjRTg4MzFEJyxcclxuICAgIH0sXHJcbiAgICBXQUxMRVRfQ09OTkVDVDoge1xyXG4gICAgICAgIGNvbm5lY3RvcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBXYWxsZXRDb25uZWN0Q29ubmVjdG9yID0gKGF3YWl0IGltcG9ydCgnQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3InKSkuV2FsbGV0Q29ubmVjdENvbm5lY3RvclxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFdhbGxldENvbm5lY3RDb25uZWN0b3Ioe1xyXG4gICAgICAgICAgICAgICAgcnBjOiBSUEMsXHJcbiAgICAgICAgICAgICAgICBicmlkZ2U6ICdodHRwczovL2JyaWRnZS53YWxsZXRjb25uZWN0Lm9yZycsXHJcbiAgICAgICAgICAgICAgICBxcmNvZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWRDaGFpbklkczogW1xyXG4gICAgICAgICAgICAgICAgICAgIDEzNywgLy8gTWF0aWNcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYW1lOiAnV2FsbGV0Q29ubmVjdCcsXHJcbiAgICAgICAgaWNvbk5hbWU6ICd3YWxsZXQtY29ubmVjdC5zdmcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ29ubmVjdCB0byBUcnVzdCBXYWxsZXQsIFJhaW5ib3cgV2FsbGV0IGFuZCBtb3JlLi4uJyxcclxuICAgICAgICBocmVmOiBudWxsLFxyXG4gICAgICAgIGNvbG9yOiAnIzQxOTZGQycsXHJcbiAgICAgICAgbW9iaWxlOiB0cnVlLFxyXG4gICAgfSxcclxufVxyXG4iLCJleHBvcnQgY29uc3QgTmV0d29ya0NvbnRleHROYW1lID0gJ05FVFdPUksnXHJcblxyXG5leHBvcnQgZW51bSBDaGFpbklkIHtcclxuICAgIE1BSU5ORVQgPSAxMzcsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNVUxUSUNBTEwyX0FERFJFU1MgPSAnMHg1NTdmRDI1RjkxNjkyNDcwMDBGOUQ4NjY3MDRiNEJjMTI2ODBDRTVmJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBUklUWV9BRERSRVNTID0gJzB4NGZiNzI5YmRiOTZkNzM1NjkyZGNhY2Q5NjQwY2Y3ZTNhYTg1OWIyNSdcclxuXHJcbmV4cG9ydCBjb25zdCBSQVJJVFlfR09MRF9BRERSRVNTID0gJzB4NzMwM2U3YTg2MGRhZmZlNGQwYjMzNjE1NDc5NjQ4Y2IzNDk2OTAzYidcclxuXHJcbmV4cG9ydCBjb25zdCBSQVJJVFlfQVRUUklCVVRFU19BRERSRVNTID0gJzB4M2E3YzZhMGU2NTQ4MGViMzJhMGRkZjFjYzJkYjY1NjNhYWVkMDNjZSdcclxuXHJcbmV4cG9ydCBjb25zdCBSQVJJVFlfSEVMUEVSX0FERFJFU1MgPSAnMHg5ODViOTVENzkzNjY4MUNDMzllOTYwQjhCNWQyZDdCMWIzM0MzZkQ3J1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBUklUWV9TS0lMTFNfQUREUkVTUyA9ICcweGY3NDAxMDNmNGVkYjg1NjA5MjkyNDcyMDQ4ZGM4MjNiNTQxN2Q5YTYnXHJcblxyXG5leHBvcnQgY29uc3QgUkFSSVRZX0RBWUNBUkVfQUREUkVTUyA9ICcweEVEQjhCNEI2YzAyMjNkQzkxMzI2ZjBGODg2Q0NjN0ZGNmY1MTM1YTMnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJBUklUWV9MSUIgPSAnMHg3MUZDNmUxNkMyM0RlMDBBMzA5N0RDRjYzMzE5MzQxNzMzQzA1Yzg1J1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBUklUWV9DRUxMQVJfQUREUkVTUyA9ICcweEVGNEM4RTE4YzgzMWNCN0M5MzdBMEQxNzgwOTEwMjIwODU3MGVDOEYnXHJcblxyXG5leHBvcnQgY29uc3QgUkFSSVRZX0NSQUZUSU5HX0FERFJFU1MgPSAnMHg3ZDAyMkI5YjM0ZWFEQzVFNzUwNzgyM0VEZTQ1OTM0NzIyMEVkQTVEJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBUklUWV9DUkFGVElOR19TVU1NT05FUiA9IDE3NTg3MDlcclxuXHJcbmV4cG9ydCBjb25zdCBDUkFGVElOR19BTExPV0FOQ0UgPSAxMDAwMDBcclxuXHJcbmV4cG9ydCBjb25zdCBCVVJOX0FERFJFU1MgPSAnMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkRWFEJ1xyXG4iLCJpbXBvcnQgeyB1c2VSYXJpdHlMaWJDb250cmFjdCB9IGZyb20gJy4vdXNlQ29udHJhY3QnXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSAnZXRoZXJzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdW1tb25lckZ1bGxEYXRhIHtcclxuICAgIGlkOiBudW1iZXJcclxuICAgIGFiaWxpdHlfc2NvcmVzOiB7XHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICBfY2hhOiBudW1iZXJcclxuICAgICAgICAgICAgX2NvbjogbnVtYmVyXHJcbiAgICAgICAgICAgIF9kZXg6IG51bWJlclxyXG4gICAgICAgICAgICBfaW50OiBudW1iZXJcclxuICAgICAgICAgICAgX3N0cjogbnVtYmVyXHJcbiAgICAgICAgICAgIF93aXM6IG51bWJlclxyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVkOiBib29sZWFuXHJcbiAgICAgICAgbW9kaWZpZXJzOiB7XHJcbiAgICAgICAgICAgIF9jaGE6IG51bWJlclxyXG4gICAgICAgICAgICBfY29uOiBudW1iZXJcclxuICAgICAgICAgICAgX2RleDogbnVtYmVyXHJcbiAgICAgICAgICAgIF9pbnQ6IG51bWJlclxyXG4gICAgICAgICAgICBfc3RyOiBudW1iZXJcclxuICAgICAgICAgICAgX3dpczogbnVtYmVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwZW50X3BvaW50czogbnVtYmVyXHJcbiAgICAgICAgdG90YWxfcG9pbnRzOiBudW1iZXJcclxuICAgIH1cclxuICAgIGJhc2U6IHtcclxuICAgICAgICBfY2xhc3M6IG51bWJlclxyXG4gICAgICAgIF9sZXZlbDogbnVtYmVyXHJcbiAgICAgICAgX2xvZzogbnVtYmVyXHJcbiAgICAgICAgX25hbWU6IHN0cmluZ1xyXG4gICAgICAgIF94cDogbnVtYmVyXHJcbiAgICB9XHJcbiAgICBnb2xkOiB7XHJcbiAgICAgICAgYmFsYW5jZTogbnVtYmVyXHJcbiAgICAgICAgY2xhaW1hYmxlOiBudW1iZXJcclxuICAgICAgICBjbGFpbWVkOiBudW1iZXJcclxuICAgIH1cclxuICAgIG1hdGVyaWFsczoge1xyXG4gICAgICAgIGxvZzogbnVtYmVyXHJcbiAgICAgICAgYmFsYW5jZTogbnVtYmVyXHJcbiAgICAgICAgc2NvdXQ6IG51bWJlclxyXG4gICAgfVxyXG4gICAgc2tpbGxzOiB7XHJcbiAgICAgICAgY2xhc3Nfc2tpbGxzOiBib29sZWFuW11cclxuICAgICAgICBza2lsbHM6IG51bWJlcltdXHJcbiAgICAgICAgc3BlbnRfcG9pbnRzOiBudW1iZXJcclxuICAgICAgICB0b3RhbF9wb2ludHM6IG51bWJlclxyXG4gICAgfVxyXG4gICAgbWlzYzoge1xyXG4gICAgICAgIGRheWNhcmVfZGF5c19wYWlkOiBudW1iZXJcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIExpYnJhcnlJbnRlcmZhY2Uge1xyXG4gICAgc3VtbW9uZXJzX2Z1bGw6IChpZHM6IHN0cmluZ1tdKSA9PiBQcm9taXNlPFN1bW1vbmVyRnVsbERhdGFbXT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUmFyaXR5TGlicmFyeSgpOiBMaWJyYXJ5SW50ZXJmYWNlIHtcclxuICAgIGNvbnN0IGxpYiA9IHVzZVJhcml0eUxpYkNvbnRyYWN0KClcclxuXHJcbiAgICBjb25zdCBzdW1tb25lcnNfZnVsbCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIGFzeW5jIChpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxTdW1tb25lckZ1bGxEYXRhW10+ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbW9uZXJzID0gYXdhaXQgbGliPy5zdW1tb25lcnNfZnVsbChpZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMTExMTExMTExLCBzdW1tb25lcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtbW9uZXJzLm1hcCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBhcnNlSW50KGlkc1tpXSwgMTYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFiaWxpdHlfc2NvcmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jaGE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYWJpbGl0eV9zY29yZXMuYXR0cmlidXRlcy5fY2hhID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLmF0dHJpYnV0ZXMuX2NoYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYWJpbGl0eV9zY29yZXMuYXR0cmlidXRlcy5fY29uID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLmF0dHJpYnV0ZXMuX2NvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kZXg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYWJpbGl0eV9zY29yZXMuYXR0cmlidXRlcy5fZGV4ID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLmF0dHJpYnV0ZXMuX2RleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYWJpbGl0eV9zY29yZXMuYXR0cmlidXRlcy5faW50ID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLmF0dHJpYnV0ZXMuX2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdHI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYWJpbGl0eV9zY29yZXMuYXR0cmlidXRlcy5fc3RyID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLmF0dHJpYnV0ZXMuX3N0cixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF93aXM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYWJpbGl0eV9zY29yZXMuYXR0cmlidXRlcy5fd2lzID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLmF0dHJpYnV0ZXMuX3dpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZDogdmFsdWUuYWJpbGl0eV9zY29yZXMuY3JlYXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY2hhOiB2YWx1ZS5hYmlsaXR5X3Njb3Jlcy5tb2RpZmllcnMuX2NoYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb246IHZhbHVlLmFiaWxpdHlfc2NvcmVzLm1vZGlmaWVycy5fY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RleDogdmFsdWUuYWJpbGl0eV9zY29yZXMubW9kaWZpZXJzLl9kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW50OiB2YWx1ZS5hYmlsaXR5X3Njb3Jlcy5tb2RpZmllcnMuX2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdHI6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLm1vZGlmaWVycy5fc3RyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3dpczogdmFsdWUuYWJpbGl0eV9zY29yZXMubW9kaWZpZXJzLl93aXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZW50X3BvaW50czogcGFyc2VJbnQodmFsdWUuYWJpbGl0eV9zY29yZXMuc3BlbnRfcG9pbnRzLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9wb2ludHM6IHBhcnNlSW50KHZhbHVlLmFiaWxpdHlfc2NvcmVzLnRvdGFsX3BvaW50cy50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NsYXNzOiBwYXJzZUludCh2YWx1ZS5iYXNlLmNsYXNzLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbGV2ZWw6IHBhcnNlSW50KHZhbHVlLmJhc2UubGV2ZWwudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9sb2c6IHBhcnNlSW50KHZhbHVlLmJhc2UubG9nLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbmFtZTogdmFsdWUuYmFzZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfeHA6IHBhcnNlSW50KHV0aWxzLmZvcm1hdFVuaXRzKHZhbHVlLmJhc2UueHAudG9TdHJpbmcoKSwgJ2V0aGVyJykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29sZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBwYXJzZUludCh1dGlscy5mb3JtYXRVbml0cyh2YWx1ZS5nb2xkLmJhbGFuY2UsICdldGhlcicpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhaW1hYmxlOiBwYXJzZUludCh1dGlscy5mb3JtYXRVbml0cyh2YWx1ZS5nb2xkLmNsYWltYWJsZSwgJ2V0aGVyJykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFpbWVkOiBwYXJzZUludCh1dGlscy5mb3JtYXRVbml0cyh2YWx1ZS5nb2xkLmNsYWltZWQsICdldGhlcicpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBwYXJzZUludCh2YWx1ZS5tYXRlcmlhbHNbMF0uYmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3V0OiBwYXJzZUludCh2YWx1ZS5tYXRlcmlhbHNbMF0uc2NvdXQudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZzogcGFyc2VJbnQodmFsdWUubWF0ZXJpYWxzWzBdLmxvZy50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc19za2lsbHM6IHZhbHVlLnNraWxscy5jbGFzc19za2lsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsczogdmFsdWUuc2tpbGxzLnNraWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlbnRfcG9pbnRzOiBwYXJzZUludCh2YWx1ZS5za2lsbHMuc3BlbnRfcG9pbnRzLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9wb2ludHM6IHBhcnNlSW50KHZhbHVlLnNraWxscy50b3RhbF9wb2ludHMudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXNjOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheWNhcmVfZGF5c19wYWlkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlJywgZSlcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2xpYl1cclxuICAgIClcclxuXHJcbiAgICByZXR1cm4geyBzdW1tb25lcnNfZnVsbCB9XHJcbn1cclxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcblxyXG5pbXBvcnQgKiBhcyBwbHVyYWxzIGZyb20gJ21ha2UtcGx1cmFsL3BsdXJhbHMnXHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9Qcm92aWRlciwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYTQnXHJcbmltcG9ydCB7IENvbXBvbmVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFJlZHV4UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0J1xyXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICcuLi9sYXlvdXRzL0RlZmF1bHQnXHJcbmltcG9ydCBzdG9yZSwgeyBwZXJzaXN0b3IgfSBmcm9tICcuLi9zdGF0ZSdcclxuaW1wb3J0IHsgRnJhZ21lbnQsIEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXZWIzUmVhY3RNYW5hZ2VyIGZyb20gJy4uL2NvbXBvbmVudHMvV2ViM1JlYWN0TWFuYWdlcidcclxuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgZ2V0TGlicmFyeSBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0TGlicmFyeSdcclxuaW1wb3J0IERvdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Eb3RzJ1xyXG5pbXBvcnQgQXBwbGljYXRpb25VcGRhdGVyIGZyb20gJy4uL3N0YXRlL2FwcGxpY2F0aW9uL3VwZGF0ZXInXHJcbmltcG9ydCBNdWx0aWNhbGxVcGRhdGVyIGZyb20gJy4uL3N0YXRlL211bHRpY2FsbC91cGRhdGVyJ1xyXG5pbXBvcnQgU3VtbW9uZXJzVXBkYXRlciBmcm9tICcuLi9zdGF0ZS9zdW1tb25lcnMvdXBkYXRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBJMThuUHJvdmlkZXIgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xyXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnQGxpbmd1aS9jb3JlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuY29uc3QgV2ViM1Byb3ZpZGVyTmV0d29yayA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL1dlYjNQcm92aWRlck5ldHdvcmsnKSwgeyBzc3I6IGZhbHNlIH0pXHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogJ2h0dHBzOi8vYXBpLnRoZWdyYXBoLmNvbS9zdWJncmFwaHMvbmFtZS95dHVtYW5vdi9zY2FyY2l0eScsXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxufSlcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICEhd2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICB3aW5kb3cuZXRoZXJldW0uYXV0b1JlZnJlc2hPbk5ldHdvcmtDaGFuZ2UgPSBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBwYWdlUHJvcHMsXHJcbn06IEFwcFByb3BzICYge1xyXG4gICAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+ICYge1xyXG4gICAgICAgIEd1YXJkOiBGdW5jdGlvbkNvbXBvbmVudFxyXG4gICAgICAgIExheW91dDogRnVuY3Rpb25Db21wb25lbnRcclxuICAgICAgICBQcm92aWRlcjogRnVuY3Rpb25Db21wb25lbnRcclxuICAgIH1cclxufSkge1xyXG4gICAgY29uc3QgeyBsb2NhbGUgfSA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBsb2FkKGxvY2FsZSkge1xyXG4gICAgICAgICAgICBpMThuLmxvYWRMb2NhbGVEYXRhKGxvY2FsZSwgeyBwbHVyYWxzOiBwbHVyYWxzW2xvY2FsZS5zcGxpdCgnXycpWzBdXSB9KVxyXG5cclxuICAgICAgICAgICAgLy8gTG9hZCBmYWxsYmFjayBtZXNzYWdlc1xyXG4gICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBhd2FpdCBpbXBvcnQoYEBsaW5ndWkvbG9hZGVyIS4vLi4vbG9jYWxlLyR7bG9jYWxlfS5qc29uP3Jhdy1saW5ndWlgKVxyXG4gICAgICAgICAgICBpMThuLmxvYWQobG9jYWxlLCBtZXNzYWdlcylcclxuXHJcbiAgICAgICAgICAgIGkxOG4uYWN0aXZhdGUobG9jYWxlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZChsb2NhbGUpXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgfSwgW2xvY2FsZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUykge1xyXG4gICAgICAgICAgICBSZWFjdEdBLmluaXRpYWxpemUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUylcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvLyBBbGxvd3MgZm9yIGNvbmRpdGlvbmFsbHkgc2V0dGluZyBhIHByb3ZpZGVyIHRvIGJlIGhvaXN0ZWQgcGVyIHBhZ2VcclxuICAgIGNvbnN0IFByb3ZpZGVyID0gQ29tcG9uZW50LlByb3ZpZGVyIHx8IEZyYWdtZW50XHJcblxyXG4gICAgLy8gQWxsb3dzIGZvciBjb25kaXRpb25hbGx5IHNldHRpbmcgYSBsYXlvdXQgdG8gYmUgaG9pc3RlZCBwZXIgcGFnZVxyXG4gICAgY29uc3QgTGF5b3V0ID0gQ29tcG9uZW50LkxheW91dCB8fCBEZWZhdWx0TGF5b3V0XHJcblxyXG4gICAgLy8gQWxsb3dzIGZvciBjb25kaXRpb25hbGx5IHNldHRpbmcgYSBndWFyZCB0byBiZSBob2lzdGVkIHBlciBwYWdlXHJcbiAgICBjb25zdCBHdWFyZCA9IENvbXBvbmVudC5HdWFyZCB8fCBGcmFnbWVudFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLG1pbmltdW0tc2NhbGU9MSxtYXhpbXVtLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+UmFyaXR5IEdhbWUgfCBGcmVlIHRvIG1pbnQgRCZEIGJsb2NrY2hhaW4gYmFzZWQgZ2FtZTwvdGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1ldGEga2V5PVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRnJlZSB0byBtaW50IEQmRCBibG9ja2NoYWluIGJhc2VkIGdhbWVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsaWNhdGlvbi1uYW1lXCIgY29udGVudD1cIlJhcml0eSBHYW1lIHwgRnJlZSB0byBtaW50IEQmRCBibG9ja2NoYWluIGJhc2VkIGdhbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlXCIgY29udGVudD1cImJsYWNrLXRyYW5zbHVjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiUmFyaXR5IEdhbWUgfCBGcmVlIHRvIG1pbnQgRCZEIGJsb2NrY2hhaW4gYmFzZWQgZ2FtZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJmb3JtYXQtZGV0ZWN0aW9uXCIgY29udGVudD1cInRlbGVwaG9uZT1ub1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tdGFwLWhpZ2hsaWdodFwiIGNvbnRlbnQ9XCJub1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzNFNEE5NFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1ldGEga2V5PVwidHdpdHRlcjpjYXJkXCIgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJhcHBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJ0d2l0dGVyOnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHdpdHRlcjp0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIlJhcml0eSBHYW1lIHwgRnJlZSB0byBtaW50IEQmRCBibG9ja2NoYWluIGJhc2VkIGdhbWVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGtleT1cInR3aXR0ZXI6dXJsXCIgbmFtZT1cInR3aXR0ZXI6dXJsXCIgY29udGVudD1cImh0dHBzOi8vcmFyaXR5LmdhbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkZyZWUgdG8gbWludCBEJkQgYmxvY2tjaGFpbiBiYXNlZCBnYW1lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBrZXk9XCJ0d2l0dGVyOmltYWdlXCIgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9yYXJpdHkuZ2FtZS9tYW5pZmVzdC1pY29uLTE5Mi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEga2V5PVwidHdpdHRlcjpjcmVhdG9yXCIgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAUmFyaXR5R2FtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBrZXk9XCJvZzp0eXBlXCIgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJvZzpzaXRlX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiUmFyaXR5IEdhbWUgfCBGcmVlIHRvIG1pbnQgRCZEIGJsb2NrY2hhaW4gYmFzZWQgZ2FtZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEga2V5PVwib2c6dXJsXCIgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9yYXJpdHkuZ2FtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBrZXk9XCJvZzppbWFnZVwiIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9yYXJpdHkuZ2FtZS9hcHBsZS1pY29uLTE4MC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEga2V5PVwib2c6ZGVzY3JpcHRpb25cIiBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkZyZWUgdG8gbWludCBEJkQgYmxvY2tjaGFpbiBiYXNlZCBnYW1lXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8STE4blByb3ZpZGVyIGkxOG49e2kxOG59IGZvcmNlUmVuZGVyT25Mb2NhbGVDaGFuZ2U9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8V2ViM1Byb3ZpZGVyTmV0d29yayBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXZWIzUmVhY3RNYW5hZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWR1eFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXs8RG90cz5sb2FkaW5nPC9Eb3RzPn0gcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXBwbGljYXRpb25VcGRhdGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpY2FsbFVwZGF0ZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VtbW9uZXJzVXBkYXRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEd1YXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0d1YXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QZXJzaXN0R2F0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlZHV4UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dlYjNSZWFjdE1hbmFnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvV2ViM1Byb3ZpZGVyTmV0d29yaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9JMThuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBDYWxsLCBwYXJzZUNhbGxLZXkgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgeyBSZXRyeWFibGVFcnJvciwgcmV0cnkgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvcmV0cnknXHJcbmltcG9ydCB7IGVycm9yRmV0Y2hpbmdNdWx0aWNhbGxSZXN1bHRzLCBmZXRjaGluZ011bHRpY2FsbFJlc3VsdHMsIHVwZGF0ZU11bHRpY2FsbFJlc3VsdHMgfSBmcm9tICcuL2FjdGlvbnMnXHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uL2hvb2tzJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi9pbmRleCdcclxuaW1wb3J0IHsgQ29udHJhY3QgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9jb250cmFjdHMnXHJcbmltcG9ydCB7IGNodW5rQXJyYXkgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvYXJyYXknXHJcbmltcG9ydCB7IHVzZUFjdGl2ZVdlYjNSZWFjdCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUFjdGl2ZVdlYjNSZWFjdCdcclxuaW1wb3J0IHsgdXNlQmxvY2tOdW1iZXIgfSBmcm9tICcuLi9hcHBsaWNhdGlvbi9ob29rcydcclxuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gJy4uLy4uL2hvb2tzL3VzZURlYm91bmNlJ1xyXG5pbXBvcnQgeyB1c2VNdWx0aWNhbGwyQ29udHJhY3QgfSBmcm9tICcuLi8uLi9ob29rcy91c2VDb250cmFjdCdcclxuXHJcbmNvbnN0IERFRkFVTFRfR0FTX1JFUVVJUkVEID0gMV8wMDBfMDAwXHJcblxyXG4vKipcclxuICogRmV0Y2hlcyBhIGNodW5rIG9mIGNhbGxzLCBlbmZvcmNpbmcgYSBtaW5pbXVtIGJsb2NrIG51bWJlciBjb25zdHJhaW50XHJcbiAqIEBwYXJhbSBtdWx0aWNhbGwgbXVsdGljYWxsIGNvbnRyYWN0IHRvIGZldGNoIGFnYWluc3RcclxuICogQHBhcmFtIGNodW5rIGNodW5rIG9mIGNhbGxzIHRvIG1ha2VcclxuICogQHBhcmFtIG1pbkJsb2NrTnVtYmVyIG1pbmltdW0gYmxvY2sgbnVtYmVyIG9mIHRoZSByZXN1bHQgc2V0XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBmZXRjaENodW5rKFxyXG4gICAgbXVsdGljYWxsOiBDb250cmFjdCxcclxuICAgIGNodW5rOiBDYWxsW10sXHJcbiAgICBibG9ja051bWJlcjogbnVtYmVyXHJcbik6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuOyByZXR1cm5EYXRhOiBzdHJpbmcgfVtdPiB7XHJcbiAgICBjb25zb2xlLmRlYnVnKCdGZXRjaGluZyBjaHVuaycsIGNodW5rLCBibG9ja051bWJlcilcclxuICAgIGNvbnNvbGUubG9nKCczMzMzMzMzMycpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcyMjIyMjIyMjIyMicpXHJcbiAgICAgICAgY29uc3QgeyByZXR1cm5EYXRhIH0gPSBhd2FpdCBtdWx0aWNhbGwuY2FsbFN0YXRpYy50cnlCbG9ja0FuZEFnZ3JlZ2F0ZShcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGNodW5rLm1hcCgob2JqKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBvYmouYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGNhbGxEYXRhOiBvYmouY2FsbERhdGEsXHJcbiAgICAgICAgICAgICAgICBnYXNMaW1pdDogb2JqLmdhc1JlcXVpcmVkID8/IDFfMDAwXzAwMCxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB7IGJsb2NrVGFnOiBibG9ja051bWJlciB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcxMTExMTExMTExMTExMTEnKVxyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgICAgICByZXR1cm5EYXRhLmZvckVhY2goKHsgZ2FzVXNlZCwgcmV0dXJuRGF0YSwgc3VjY2VzcyB9LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIXN1Y2Nlc3MgJiZcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5EYXRhLmxlbmd0aCA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGdhc1VzZWQuZ3RlKE1hdGguZmxvb3IoKGNodW5rW2ldLmdhc1JlcXVpcmVkID8/IERFRkFVTFRfR0FTX1JFUVVJUkVEKSAqIDAuOTUpKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgQSBjYWxsIGZhaWxlZCBkdWUgdG8gcmVxdWlyaW5nICR7Z2FzVXNlZC50b1N0cmluZygpfSB2cy4gYWxsb3dlZCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtbaV0uZ2FzUmVxdWlyZWQgPz8gREVGQVVMVF9HQVNfUkVRVUlSRURcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuRGF0YVxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGlmIChlcnJvci5jb2RlID09PSAtMzIwMDAgfHwgZXJyb3IubWVzc2FnZT8uaW5kZXhPZignaGVhZGVyIG5vdCBmb3VuZCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmV0cnlhYmxlRXJyb3IoYGhlYWRlciBub3QgZm91bmQgZm9yIGJsb2NrIG51bWJlciAke2Jsb2NrTnVtYmVyfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBjaHVuaycsIGVycm9yKVxyXG4gICAgICAgIHRocm93IGVycm9yXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGcm9tIHRoZSBjdXJyZW50IGFsbCBsaXN0ZW5lcnMgc3RhdGUsIHJldHVybiBlYWNoIGNhbGwga2V5IG1hcHBlZCB0byB0aGVcclxuICogbWluaW11bSBudW1iZXIgb2YgYmxvY2tzIHBlciBmZXRjaC4gVGhpcyBpcyBob3cgb2Z0ZW4gZWFjaCBrZXkgbXVzdCBiZSBmZXRjaGVkLlxyXG4gKiBAcGFyYW0gYWxsTGlzdGVuZXJzIHRoZSBhbGwgbGlzdGVuZXJzIHN0YXRlXHJcbiAqIEBwYXJhbSBjaGFpbklkIHRoZSBjdXJyZW50IGNoYWluIGlkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZlTGlzdGVuaW5nS2V5cyhcclxuICAgIGFsbExpc3RlbmVyczogQXBwU3RhdGVbJ211bHRpY2FsbCddWydjYWxsTGlzdGVuZXJzJ10sXHJcbiAgICBjaGFpbklkPzogbnVtYmVyXHJcbik6IHsgW2NhbGxLZXk6IHN0cmluZ106IG51bWJlciB9IHtcclxuICAgIGlmICghYWxsTGlzdGVuZXJzIHx8ICFjaGFpbklkKSByZXR1cm4ge31cclxuICAgIGNvbnN0IGxpc3RlbmVycyA9IGFsbExpc3RlbmVyc1tjaGFpbklkXVxyXG4gICAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybiB7fVxyXG5cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhsaXN0ZW5lcnMpLnJlZHVjZTx7IFtjYWxsS2V5OiBzdHJpbmddOiBudW1iZXIgfT4oKG1lbW8sIGNhbGxLZXkpID0+IHtcclxuICAgICAgICBjb25zdCBrZXlMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbY2FsbEtleV1cclxuXHJcbiAgICAgICAgbWVtb1tjYWxsS2V5XSA9IE9iamVjdC5rZXlzKGtleUxpc3RlbmVycylcclxuICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja3NQZXJGZXRjaCA9IHBhcnNlSW50KGtleSlcclxuICAgICAgICAgICAgICAgIGlmIChibG9ja3NQZXJGZXRjaCA8PSAwKSByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXlMaXN0ZW5lcnNbYmxvY2tzUGVyRmV0Y2hdID4gMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAucmVkdWNlKChwcmV2aW91c01pbiwgY3VycmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKHByZXZpb3VzTWluLCBwYXJzZUludChjdXJyZW50KSlcclxuICAgICAgICAgICAgfSwgSW5maW5pdHkpXHJcbiAgICAgICAgcmV0dXJuIG1lbW9cclxuICAgIH0sIHt9KVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSBrZXlzIHRoYXQgbmVlZCB0byBiZSByZWZldGNoZWRcclxuICogQHBhcmFtIGNhbGxSZXN1bHRzIGN1cnJlbnQgY2FsbCByZXN1bHQgc3RhdGVcclxuICogQHBhcmFtIGxpc3RlbmluZ0tleXMgZWFjaCBjYWxsIGtleSBtYXBwZWQgdG8gaG93IG9sZCB0aGUgZGF0YSBjYW4gYmUgaW4gYmxvY2tzXHJcbiAqIEBwYXJhbSBjaGFpbklkIHRoZSBjdXJyZW50IGNoYWluIGlkXHJcbiAqIEBwYXJhbSBsYXRlc3RCbG9ja051bWJlciB0aGUgbGF0ZXN0IGJsb2NrIG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG91dGRhdGVkTGlzdGVuaW5nS2V5cyhcclxuICAgIGNhbGxSZXN1bHRzOiBBcHBTdGF0ZVsnbXVsdGljYWxsJ11bJ2NhbGxSZXN1bHRzJ10sXHJcbiAgICBsaXN0ZW5pbmdLZXlzOiB7IFtjYWxsS2V5OiBzdHJpbmddOiBudW1iZXIgfSxcclxuICAgIGNoYWluSWQ6IG51bWJlciB8IHVuZGVmaW5lZCxcclxuICAgIGxhdGVzdEJsb2NrTnVtYmVyOiBudW1iZXIgfCB1bmRlZmluZWRcclxuKTogc3RyaW5nW10ge1xyXG4gICAgaWYgKCFjaGFpbklkIHx8ICFsYXRlc3RCbG9ja051bWJlcikgcmV0dXJuIFtdXHJcbiAgICBjb25zdCByZXN1bHRzID0gY2FsbFJlc3VsdHNbY2hhaW5JZF1cclxuICAgIC8vIG5vIHJlc3VsdHMgYXQgYWxsLCBsb2FkIGV2ZXJ5dGhpbmdcclxuICAgIGlmICghcmVzdWx0cykgcmV0dXJuIE9iamVjdC5rZXlzKGxpc3RlbmluZ0tleXMpXHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGxpc3RlbmluZ0tleXMpLmZpbHRlcigoY2FsbEtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJsb2Nrc1BlckZldGNoID0gbGlzdGVuaW5nS2V5c1tjYWxsS2V5XVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gY2FsbFJlc3VsdHNbY2hhaW5JZF1bY2FsbEtleV1cclxuICAgICAgICAvLyBubyBkYXRhLCBtdXN0IGZldGNoXHJcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gdHJ1ZVxyXG5cclxuICAgICAgICBjb25zdCBtaW5EYXRhQmxvY2tOdW1iZXIgPSBsYXRlc3RCbG9ja051bWJlciAtIChibG9ja3NQZXJGZXRjaCAtIDEpXHJcblxyXG4gICAgICAgIC8vIGFscmVhZHkgZmV0Y2hpbmcgaXQgZm9yIGEgcmVjZW50IGVub3VnaCBibG9jaywgZG9uJ3QgcmVmZXRjaCBpdFxyXG4gICAgICAgIGlmIChkYXRhLmZldGNoaW5nQmxvY2tOdW1iZXIgJiYgZGF0YS5mZXRjaGluZ0Jsb2NrTnVtYmVyID49IG1pbkRhdGFCbG9ja051bWJlcikgcmV0dXJuIGZhbHNlXHJcblxyXG4gICAgICAgIC8vIGlmIGRhdGEgaXMgb2xkZXIgdGhhbiBtaW5EYXRhQmxvY2tOdW1iZXIsIGZldGNoIGl0XHJcbiAgICAgICAgcmV0dXJuICFkYXRhLmJsb2NrTnVtYmVyIHx8IGRhdGEuYmxvY2tOdW1iZXIgPCBtaW5EYXRhQmxvY2tOdW1iZXJcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZXIoKTogbnVsbCB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcclxuICAgIGNvbnN0IHN0YXRlID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tdWx0aWNhbGwpXHJcbiAgICAvLyB3YWl0IGZvciBsaXN0ZW5lcnMgdG8gc2V0dGxlIGJlZm9yZSB0cmlnZ2VyaW5nIHVwZGF0ZXNcclxuICAgIGNvbnN0IGRlYm91bmNlZExpc3RlbmVycyA9IHVzZURlYm91bmNlKHN0YXRlLmNhbGxMaXN0ZW5lcnMsIDEwMClcclxuICAgIGNvbnN0IGxhdGVzdEJsb2NrTnVtYmVyID0gdXNlQmxvY2tOdW1iZXIoKVxyXG4gICAgY29uc3QgeyBjaGFpbklkIH0gPSB1c2VBY3RpdmVXZWIzUmVhY3QoKVxyXG4gICAgY29uc3QgbXVsdGljYWxsMkNvbnRyYWN0ID0gdXNlTXVsdGljYWxsMkNvbnRyYWN0KClcclxuICAgIGNvbnN0IGNhbmNlbGxhdGlvbnMgPSB1c2VSZWY8eyBibG9ja051bWJlcjogbnVtYmVyOyBjYW5jZWxsYXRpb25zOiAoKCkgPT4gdm9pZClbXSB9PigpXHJcblxyXG4gICAgY29uc3QgbGlzdGVuaW5nS2V5czogeyBbY2FsbEtleTogc3RyaW5nXTogbnVtYmVyIH0gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gYWN0aXZlTGlzdGVuaW5nS2V5cyhkZWJvdW5jZWRMaXN0ZW5lcnMsIGNoYWluSWQpXHJcbiAgICB9LCBbZGVib3VuY2VkTGlzdGVuZXJzLCBjaGFpbklkXSlcclxuXHJcbiAgICBjb25zdCB1bnNlcmlhbGl6ZWRPdXRkYXRlZENhbGxLZXlzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG91dGRhdGVkTGlzdGVuaW5nS2V5cyhzdGF0ZS5jYWxsUmVzdWx0cywgbGlzdGVuaW5nS2V5cywgY2hhaW5JZCwgbGF0ZXN0QmxvY2tOdW1iZXIpXHJcbiAgICB9LCBbY2hhaW5JZCwgc3RhdGUuY2FsbFJlc3VsdHMsIGxpc3RlbmluZ0tleXMsIGxhdGVzdEJsb2NrTnVtYmVyXSlcclxuXHJcbiAgICBjb25zdCBzZXJpYWxpemVkT3V0ZGF0ZWRDYWxsS2V5cyA9IHVzZU1lbW8oXHJcbiAgICAgICAgKCkgPT4gSlNPTi5zdHJpbmdpZnkodW5zZXJpYWxpemVkT3V0ZGF0ZWRDYWxsS2V5cy5zb3J0KCkpLFxyXG4gICAgICAgIFt1bnNlcmlhbGl6ZWRPdXRkYXRlZENhbGxLZXlzXVxyXG4gICAgKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFsYXRlc3RCbG9ja051bWJlciB8fCAhY2hhaW5JZCB8fCAhbXVsdGljYWxsMkNvbnRyYWN0KSByZXR1cm5cclxuXHJcbiAgICAgICAgY29uc3Qgb3V0ZGF0ZWRDYWxsS2V5czogc3RyaW5nW10gPSBKU09OLnBhcnNlKHNlcmlhbGl6ZWRPdXRkYXRlZENhbGxLZXlzKVxyXG4gICAgICAgIGlmIChvdXRkYXRlZENhbGxLZXlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgY2FsbHMgPSBvdXRkYXRlZENhbGxLZXlzLm1hcCgoa2V5KSA9PiBwYXJzZUNhbGxLZXkoa2V5KSlcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmtlZENhbGxzID0gY2h1bmtBcnJheShjYWxscylcclxuXHJcbiAgICAgICAgaWYgKGNhbmNlbGxhdGlvbnMuY3VycmVudCAmJiBjYW5jZWxsYXRpb25zLmN1cnJlbnQuYmxvY2tOdW1iZXIgIT09IGxhdGVzdEJsb2NrTnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbGxhdGlvbnMuY3VycmVudC5jYW5jZWxsYXRpb25zLmZvckVhY2goKGMpID0+IGMoKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICBmZXRjaGluZ011bHRpY2FsbFJlc3VsdHMoe1xyXG4gICAgICAgICAgICAgICAgY2FsbHMsXHJcbiAgICAgICAgICAgICAgICBjaGFpbklkLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2hpbmdCbG9ja051bWJlcjogbGF0ZXN0QmxvY2tOdW1iZXIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBjYW5jZWxsYXRpb25zLmN1cnJlbnQgPSB7XHJcbiAgICAgICAgICAgIGJsb2NrTnVtYmVyOiBsYXRlc3RCbG9ja051bWJlcixcclxuICAgICAgICAgICAgY2FuY2VsbGF0aW9uczogY2h1bmtlZENhbGxzLm1hcCgoY2h1bmssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGNhbmNlbCwgcHJvbWlzZSB9ID0gcmV0cnkoKCkgPT4gZmV0Y2hDaHVuayhtdWx0aWNhbGwyQ29udHJhY3QsIGNodW5rLCBsYXRlc3RCbG9ja051bWJlciksIHtcclxuICAgICAgICAgICAgICAgICAgICBuOiBJbmZpbml0eSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5XYWl0OiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdhaXQ6IDI1MDAsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXR1cm5EYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFjY3VtdWxhdGVzIHRoZSBsZW5ndGggb2YgYWxsIHByZXZpb3VzIGluZGljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RDYWxsS2V5SW5kZXggPSBjaHVua2VkQ2FsbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2U8bnVtYmVyPigobWVtbywgY3VycikgPT4gbWVtbyArIGN1cnIubGVuZ3RoLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0Q2FsbEtleUluZGV4ID0gZmlyc3RDYWxsS2V5SW5kZXggKyByZXR1cm5EYXRhLmxlbmd0aFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xpY2UgPSBvdXRkYXRlZENhbGxLZXlzLnNsaWNlKGZpcnN0Q2FsbEtleUluZGV4LCBsYXN0Q2FsbEtleUluZGV4KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3BsaXQgdGhlIHJldHVybmVkIHNsaWNlIGludG8gZXJyb3JzIGFuZCBzdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JlZENhbGxzLCByZXN1bHRzIH0gPSBzbGljZS5yZWR1Y2U8e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JlZENhbGxzOiBDYWxsW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IHsgW2NhbGxLZXk6IHN0cmluZ106IHN0cmluZyB8IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtZW1vLCBjYWxsS2V5LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVybkRhdGFbaV0uc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vLnJlc3VsdHNbY2FsbEtleV0gPSByZXR1cm5EYXRhW2ldLnJldHVybkRhdGEgPz8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW8uZXJyb3JlZENhbGxzLnB1c2gocGFyc2VDYWxsS2V5KGNhbGxLZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVtb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3JlZENhbGxzOiBbXSwgcmVzdWx0czoge30gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCBhbnkgbmV3IHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHJlc3VsdHMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVNdWx0aWNhbGxSZXN1bHRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tOdW1iZXI6IGxhdGVzdEJsb2NrTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCBhbnkgZXJyb3JlZCBjYWxsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JlZENhbGxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ0NhbGxzIGVycm9yZWQgaW4gZmV0Y2gnLCBlcnJvcmVkQ2FsbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZldGNoaW5nTXVsdGljYWxsUmVzdWx0cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxzOiBlcnJvcmVkQ2FsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoaW5nQmxvY2tOdW1iZXI6IGxhdGVzdEJsb2NrTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuaXNDYW5jZWxsZWRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnQ2FuY2VsbGVkIGZldGNoIGZvciBibG9ja051bWJlcicsIGxhdGVzdEJsb2NrTnVtYmVyLCBjaHVuaywgY2hhaW5JZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBtdWx0aWNhbGwgY2h1bmsnLCBjaHVuaywgY2hhaW5JZCwgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JGZXRjaGluZ011bHRpY2FsbFJlc3VsdHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxzOiBjaHVuayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoaW5nQmxvY2tOdW1iZXI6IGxhdGVzdEJsb2NrTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FuY2VsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH1cclxuICAgIH0sIFtjaGFpbklkLCBtdWx0aWNhbGwyQ29udHJhY3QsIGRpc3BhdGNoLCBzZXJpYWxpemVkT3V0ZGF0ZWRDYWxsS2V5cywgbGF0ZXN0QmxvY2tOdW1iZXJdKVxyXG5cclxuICAgIHJldHVybiBudWxsXHJcbn1cclxuIiwiaW1wb3J0IHVzZUFjdGl2ZVdlYjNSZWFjdCBmcm9tICcuLi8uLi9ob29rcy91c2VBY3RpdmVXZWIzUmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB1c2VJc1dpbmRvd1Zpc2libGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNXaW5kb3dWaXNpYmxlJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgeyBTVU1NT05FUlMgfSBmcm9tICcuLi8uLi9hcG9sbG8nXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNodW5rQXJyYXlCeU51bWJlciB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9hcnJheSdcclxuaW1wb3J0IHVzZVJhcml0eUxpYnJhcnkgZnJvbSAnLi4vLi4vaG9va3MvdXNlUmFyaXR5TGlicmFyeSdcclxuaW1wb3J0IHsgdXBkYXRlU3VtbW9uZXJzIH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlcigpOiBudWxsIHtcclxuICAgIGNvbnN0IHsgbGlicmFyeSwgY2hhaW5JZCwgYWNjb3VudCB9ID0gdXNlQWN0aXZlV2ViM1JlYWN0KClcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgICBjb25zdCB3aW5kb3dWaXNpYmxlID0gdXNlSXNXaW5kb3dWaXNpYmxlKClcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShTVU1NT05FUlMsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHsgb3duZXI6IGFjY291bnQgPyBhY2NvdW50LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA6ICcnIH0sXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3N1bW1vbmVycywgc2V0U3VtbW9uZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFsaWJyYXJ5IHx8ICFjaGFpbklkIHx8ICFhY2NvdW50IHx8IGxvYWRpbmcgfHwgZXJyb3IgfHwgIXdpbmRvd1Zpc2libGUpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IHN1bW1vbmVycyA9IGRhdGEuc3VtbW9uZXJzLm1hcCgocykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcy5pZFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldFN1bW1vbmVycyhzdW1tb25lcnMpXHJcbiAgICB9LCBbbGlicmFyeSwgY2hhaW5JZCwgYWNjb3VudCwgbG9hZGluZywgZXJyb3IsIHdpbmRvd1Zpc2libGVdKVxyXG5cclxuICAgIGNvbnN0IHsgc3VtbW9uZXJzX2Z1bGwgfSA9IHVzZVJhcml0eUxpYnJhcnkoKVxyXG5cclxuICAgIGNvbnN0IGZldGNoX3N1bW1vbmVyc19kYXRhID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGhhcyBsZXN0IHRoYW4gNTAgc3VtbW9uZXJzIGZldGNoIHRoZSBkYXRhIGFuZCByZXR1cm5cclxuICAgICAgICBpZiAoc3VtbW9uZXJzLmxlbmd0aCA8PSA1MCkge1xyXG4gICAgICAgICAgICBjb25zdCBmdWxsX2RhdGEgPSBhd2FpdCBzdW1tb25lcnNfZnVsbChzdW1tb25lcnMpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVN1bW1vbmVycyhmdWxsX2RhdGEpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjaHVua3MgPSBjaHVua0FycmF5QnlOdW1iZXIoc3VtbW9uZXJzLCA1MClcclxuICAgICAgICAgICAgbGV0IGZ1bGxfZGF0YSA9IFtdXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNodW5rIG9mIGNodW5rcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmtfZGF0YSA9IGF3YWl0IHN1bW1vbmVyc19mdWxsKGNodW5rKVxyXG4gICAgICAgICAgICAgICAgZnVsbF9kYXRhID0gZnVsbF9kYXRhLmNvbmNhdChjaHVua19kYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVN1bW1vbmVycyhmdWxsX2RhdGEpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICB9LCBbc3VtbW9uZXJzX2Z1bGwsIHN1bW1vbmVyc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWxpYnJhcnkgfHwgIWNoYWluSWQgfHwgIWFjY291bnQgfHwgIXdpbmRvd1Zpc2libGUpIHJldHVyblxyXG4gICAgICAgIGZldGNoX3N1bW1vbmVyc19kYXRhKClcclxuICAgIH0sIFtzdW1tb25lcnMsIHdpbmRvd1Zpc2libGUsIGZldGNoX3N1bW1vbmVyc19kYXRhLCBsaWJyYXJ5LCBjaGFpbklkLCBhY2NvdW50XSlcclxuICAgIHJldHVybiBudWxsXHJcbn1cclxuIl0sIm5hbWVzIjpbIkNoYWluSWQiLCJycGMiLCJNQUlOTkVUIiwiSW5qZWN0ZWRDb25uZWN0b3IiLCJOZXR3b3JrQ29ubmVjdG9yIiwiUlBDIiwibmV0d29yayIsImRlZmF1bHRDaGFpbklkIiwidXJscyIsInN1cHBvcnRlZENoYWluSWRzIiwiT2JqZWN0IiwidmFsdWVzIiwiaW5qZWN0ZWQiLCJTVVBQT1JURURfV0FMTEVUUyIsIk1FVEFNQVNLIiwiY29ubmVjdG9yIiwibmFtZSIsImljb25OYW1lIiwiZGVzY3JpcHRpb24iLCJocmVmIiwiY29sb3IiLCJXQUxMRVRfQ09OTkVDVCIsIldhbGxldENvbm5lY3RDb25uZWN0b3IiLCJicmlkZ2UiLCJxcmNvZGUiLCJtb2JpbGUiLCJOZXR3b3JrQ29udGV4dE5hbWUiLCJNVUxUSUNBTEwyX0FERFJFU1MiLCJSQVJJVFlfQUREUkVTUyIsIlJBUklUWV9HT0xEX0FERFJFU1MiLCJSQVJJVFlfQVRUUklCVVRFU19BRERSRVNTIiwiUkFSSVRZX0hFTFBFUl9BRERSRVNTIiwiUkFSSVRZX1NLSUxMU19BRERSRVNTIiwiUkFSSVRZX0RBWUNBUkVfQUREUkVTUyIsIlJBUklUWV9MSUIiLCJSQVJJVFlfQ0VMTEFSX0FERFJFU1MiLCJSQVJJVFlfQ1JBRlRJTkdfQUREUkVTUyIsIlJBUklUWV9DUkFGVElOR19TVU1NT05FUiIsIkNSQUZUSU5HX0FMTE9XQU5DRSIsIkJVUk5fQUREUkVTUyIsInVzZVJhcml0eUxpYkNvbnRyYWN0IiwidXNlQ2FsbGJhY2siLCJ1dGlscyIsInVzZVJhcml0eUxpYnJhcnkiLCJsaWIiLCJzdW1tb25lcnNfZnVsbCIsImlkcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VtbW9uZXJzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInZhbHVlIiwiaSIsImlkIiwicGFyc2VJbnQiLCJhYmlsaXR5X3Njb3JlcyIsImF0dHJpYnV0ZXMiLCJfY2hhIiwiX2NvbiIsIl9kZXgiLCJfaW50IiwiX3N0ciIsIl93aXMiLCJjcmVhdGVkIiwibW9kaWZpZXJzIiwic3BlbnRfcG9pbnRzIiwidG9TdHJpbmciLCJ0b3RhbF9wb2ludHMiLCJiYXNlIiwiX2NsYXNzIiwiX2xldmVsIiwibGV2ZWwiLCJfbG9nIiwiX25hbWUiLCJfeHAiLCJmb3JtYXRVbml0cyIsInhwIiwiZ29sZCIsImJhbGFuY2UiLCJjbGFpbWFibGUiLCJjbGFpbWVkIiwibWF0ZXJpYWxzIiwic2NvdXQiLCJza2lsbHMiLCJjbGFzc19za2lsbHMiLCJtaXNjIiwiZGF5Y2FyZV9kYXlzX3BhaWQiLCJwbHVyYWxzIiwiQXBvbGxvQ2xpZW50IiwiQXBvbGxvUHJvdmlkZXIiLCJJbk1lbW9yeUNhY2hlIiwiUmVhY3RHQSIsInVzZUVmZmVjdCIsIlByb3ZpZGVyIiwiUmVkdXhQcm92aWRlciIsIlBlcnNpc3RHYXRlIiwiRGVmYXVsdExheW91dCIsInN0b3JlIiwicGVyc2lzdG9yIiwiRnJhZ21lbnQiLCJXZWIzUmVhY3RNYW5hZ2VyIiwiV2ViM1JlYWN0UHJvdmlkZXIiLCJkeW5hbWljIiwiZ2V0TGlicmFyeSIsIkRvdHMiLCJBcHBsaWNhdGlvblVwZGF0ZXIiLCJNdWx0aWNhbGxVcGRhdGVyIiwiU3VtbW9uZXJzVXBkYXRlciIsIkhlYWQiLCJJMThuUHJvdmlkZXIiLCJpMThuIiwidXNlUm91dGVyIiwiV2ViM1Byb3ZpZGVyTmV0d29yayIsInNzciIsImNsaWVudCIsInVyaSIsImNhY2hlIiwid2luZG93IiwiZXRoZXJldW0iLCJhdXRvUmVmcmVzaE9uTmV0d29ya0NoYW5nZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9jYWxlIiwibG9hZCIsImxvYWRMb2NhbGVEYXRhIiwic3BsaXQiLCJtZXNzYWdlcyIsImFjdGl2YXRlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MiLCJpbml0aWFsaXplIiwiTGF5b3V0IiwiR3VhcmQiLCJwYXJzZUNhbGxLZXkiLCJSZXRyeWFibGVFcnJvciIsInJldHJ5IiwiZXJyb3JGZXRjaGluZ011bHRpY2FsbFJlc3VsdHMiLCJmZXRjaGluZ011bHRpY2FsbFJlc3VsdHMiLCJ1cGRhdGVNdWx0aWNhbGxSZXN1bHRzIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInVzZU1lbW8iLCJ1c2VSZWYiLCJjaHVua0FycmF5IiwidXNlQWN0aXZlV2ViM1JlYWN0IiwidXNlQmxvY2tOdW1iZXIiLCJ1c2VEZWJvdW5jZSIsInVzZU11bHRpY2FsbDJDb250cmFjdCIsIkRFRkFVTFRfR0FTX1JFUVVJUkVEIiwiZmV0Y2hDaHVuayIsIm11bHRpY2FsbCIsImNodW5rIiwiYmxvY2tOdW1iZXIiLCJkZWJ1ZyIsImNhbGxTdGF0aWMiLCJ0cnlCbG9ja0FuZEFnZ3JlZ2F0ZSIsIm9iaiIsInRhcmdldCIsImFkZHJlc3MiLCJjYWxsRGF0YSIsImdhc0xpbWl0IiwiZ2FzUmVxdWlyZWQiLCJibG9ja1RhZyIsInJldHVybkRhdGEiLCJmb3JFYWNoIiwiZ2FzVXNlZCIsInN1Y2Nlc3MiLCJsZW5ndGgiLCJndGUiLCJNYXRoIiwiZmxvb3IiLCJ3YXJuIiwiY29kZSIsIm1lc3NhZ2UiLCJpbmRleE9mIiwiZXJyb3IiLCJhY3RpdmVMaXN0ZW5pbmdLZXlzIiwiYWxsTGlzdGVuZXJzIiwiY2hhaW5JZCIsImxpc3RlbmVycyIsImtleXMiLCJyZWR1Y2UiLCJtZW1vIiwiY2FsbEtleSIsImtleUxpc3RlbmVycyIsImZpbHRlciIsImtleSIsImJsb2Nrc1BlckZldGNoIiwicHJldmlvdXNNaW4iLCJjdXJyZW50IiwibWluIiwiSW5maW5pdHkiLCJvdXRkYXRlZExpc3RlbmluZ0tleXMiLCJjYWxsUmVzdWx0cyIsImxpc3RlbmluZ0tleXMiLCJsYXRlc3RCbG9ja051bWJlciIsInJlc3VsdHMiLCJkYXRhIiwibWluRGF0YUJsb2NrTnVtYmVyIiwiZmV0Y2hpbmdCbG9ja051bWJlciIsIlVwZGF0ZXIiLCJkaXNwYXRjaCIsInN0YXRlIiwiZGVib3VuY2VkTGlzdGVuZXJzIiwiY2FsbExpc3RlbmVycyIsIm11bHRpY2FsbDJDb250cmFjdCIsImNhbmNlbGxhdGlvbnMiLCJ1bnNlcmlhbGl6ZWRPdXRkYXRlZENhbGxLZXlzIiwic2VyaWFsaXplZE91dGRhdGVkQ2FsbEtleXMiLCJKU09OIiwic3RyaW5naWZ5Iiwic29ydCIsIm91dGRhdGVkQ2FsbEtleXMiLCJwYXJzZSIsImNhbGxzIiwiY2h1bmtlZENhbGxzIiwiYyIsImluZGV4IiwibiIsIm1pbldhaXQiLCJtYXhXYWl0IiwiY2FuY2VsIiwicHJvbWlzZSIsInRoZW4iLCJmaXJzdENhbGxLZXlJbmRleCIsInNsaWNlIiwiY3VyciIsImxhc3RDYWxsS2V5SW5kZXgiLCJlcnJvcmVkQ2FsbHMiLCJwdXNoIiwiaXNDYW5jZWxsZWRFcnJvciIsInVzZURpc3BhdGNoIiwidXNlSXNXaW5kb3dWaXNpYmxlIiwidXNlUXVlcnkiLCJTVU1NT05FUlMiLCJ1c2VTdGF0ZSIsImNodW5rQXJyYXlCeU51bWJlciIsInVwZGF0ZVN1bW1vbmVycyIsImxpYnJhcnkiLCJhY2NvdW50Iiwid2luZG93VmlzaWJsZSIsInZhcmlhYmxlcyIsIm93bmVyIiwidG9Mb3dlckNhc2UiLCJsb2FkaW5nIiwic2V0U3VtbW9uZXJzIiwicyIsImZldGNoX3N1bW1vbmVyc19kYXRhIiwiZnVsbF9kYXRhIiwiY2h1bmtzIiwiY2h1bmtfZGF0YSIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=