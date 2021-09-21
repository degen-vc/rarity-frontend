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



var rpc = (0,D_Programming_projects_scarcity_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, _constants__WEBPACK_IMPORTED_MODULE_1__.ChainId.MAINNET, 'https://rpcapi.fantom.network');

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
  defaultChainId: 250,
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
                  supportedChainIds: [250 // Fantom
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
  ChainId[ChainId["MAINNET"] = 250] = "MAINNET";
})(ChainId || (ChainId = {}));

var MULTICALL2_ADDRESS = '0x5f28e9fca1c34b2dd44630df26fc7aa3d3f35eb9';
var RARITY_ADDRESS = '0xce761D788DF608BD21bdd59d6f4B54b2e27F25Bb';
var RARITY_GOLD_ADDRESS = '0x2069B76Afe6b734Fb65D1d099E7ec64ee9CC76B2';
var RARITY_ATTRIBUTES_ADDRESS = '0xB5F5AF1087A8DA62A23b08C00C6ec9af21F397a1';
var RARITY_HELPER_ADDRESS = '0x56a20B765bf7FF0edf67aB2752E3c8703821fE2E';
var RARITY_SKILLS_ADDRESS = '0x51C0B29A1d84611373BA301706c6B4b72283C80F';
var RARITY_DAYCARE_ADDRESS = '0xf1bf34E46ECf465591B7a7fA9635E4C583174fa3';
var RARITY_LIB = '0xA4d271d3022Cf3174437cF2C159cBdBa74C4857a';
var RARITY_CELLAR_ADDRESS = '0x2A0F1cB17680161cF255348dDFDeE94ea8Ca196A';
var RARITY_CRAFTING_ADDRESS = '0xf41270836dF4Db1D28F7fd0935270e3A603e78cC';
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
                                daycare_days_paid: parseInt(value.misc.daycare_days_paid.toString())
                              }
                            };
                          }));
                          _context.next = 10;
                          break;

                        case 7:
                          _context.prev = 7;
                          _context.t0 = _context["catch"](0);
                          reject();

                        case 10:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 7]]);
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
  uri: 'https://api.rarity.game/subgraphs/name/rarity-adventure/rarity',
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
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("title", {
        children: "Rarity Game | Free to mint D&D blockchain based game"
      }, "title", false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "description",
        content: "Free to mint D&D blockchain based game"
      }, "description", false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "application-name",
        content: "Rarity Game | Free to mint D&D blockchain based game"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "apple-mobile-web-app-title",
        content: "Rarity Game | Free to mint D&D blockchain based game"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "format-detection",
        content: "telephone=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "mobile-web-app-capable",
        content: "yes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "msapplication-tap-highlight",
        content: "no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "theme-color",
        content: "#3E4A94"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "app"
      }, "twitter:card", false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "Rarity Game | Free to mint D&D blockchain based game"
      }, "twitter:title", false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "twitter:url",
        content: "https://rarity.game"
      }, "twitter:url", false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "twitter:description",
        content: "Free to mint D&D blockchain based game"
      }, "twitter:description", false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "twitter:image",
        content: "https://rarity.game/manifest-icon-192.png"
      }, "twitter:image", false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        name: "twitter:creator",
        content: "@RarityGame"
      }, "twitter:creator", false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        property: "og:type",
        content: "website"
      }, "og:type", false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        property: "og:site_name",
        content: "Rarity Game | Free to mint D&D blockchain based game"
      }, "og:site_name", false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        property: "og:url",
        content: "https://rarity.game"
      }, "og:url", false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        property: "og:image",
        content: "https://rarity.game/apple-icon-180.png"
      }, "og:image", false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("meta", {
        property: "og:description",
        content: "Free to mint D&D blockchain based game"
      }, "og:description", false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
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
                    lineNumber: 137,
                    columnNumber: 59
                  }, this),
                  persistor: _state__WEBPACK_IMPORTED_MODULE_9__.persistor,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_state_application_updater__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_state_multicall_updater__WEBPACK_IMPORTED_MODULE_16__.default, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_state_summoners_updater__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(Provider, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(Layout, {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(Guard, {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 146,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
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
            _context.prev = 1;
            _context.next = 4;
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

          case 4:
            _yield$multicall$call = _context.sent;
            returnData = _yield$multicall$call.returnData;

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

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);

            if (!(_context.t0.code === -32000 || ((_error$message = _context.t0.message) === null || _error$message === void 0 ? void 0 : _error$message.indexOf('header not found')) !== -1)) {
              _context.next = 14;
              break;
            }

            throw new _functions_retry__WEBPACK_IMPORTED_MODULE_3__.RetryableError("header not found for block number ".concat(blockNumber));

          case 14:
            console.error('Failed to fetch chunk', _context.t0);
            throw _context.t0;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
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

module.exports = JSON.parse('[{"inputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"adventure","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"approve_all","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_delvers","type":"uint256[]"},{"internalType":"uint256[]","name":"_need_approval","type":"uint256[]"}],"name":"cellar","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_claimers","type":"uint256[]"},{"internalType":"uint256[]","name":"_need_approval","type":"uint256[]"}],"name":"claim_gold","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"is_approved","outputs":[{"internalType":"bool[]","name":"_is_approved","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"level_up","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"transfer_tips","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');

/***/ }),

/***/ "./constants/abis/rarity_library.json":
/*!********************************************!*\
  !*** ./constants/abis/rarity_library.json ***!
  \********************************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"inputs":[],"name":"_attr","outputs":[{"internalType":"contract rarity_attributes","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_daycare","outputs":[{"internalType":"contract rarity_daycare","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_gold","outputs":[{"internalType":"contract rarity_gold","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_items1","outputs":[{"internalType":"contract rarity_item1","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_mat1","outputs":[{"internalType":"contract rarity_mat1","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_names","outputs":[{"internalType":"contract rarity_names","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_skills","outputs":[{"internalType":"contract rarity_skills","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"ability_modifiers","outputs":[{"components":[{"internalType":"int32","name":"_str","type":"int32"},{"internalType":"int32","name":"_dex","type":"int32"},{"internalType":"int32","name":"_con","type":"int32"},{"internalType":"int32","name":"_int","type":"int32"},{"internalType":"int32","name":"_wis","type":"int32"},{"internalType":"int32","name":"_cha","type":"int32"}],"internalType":"struct rl._ability_modifiers","name":"modifiers","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"ability_scores","outputs":[{"components":[{"internalType":"uint32","name":"_str","type":"uint32"},{"internalType":"uint32","name":"_dex","type":"uint32"},{"internalType":"uint32","name":"_con","type":"uint32"},{"internalType":"uint32","name":"_int","type":"uint32"},{"internalType":"uint32","name":"_wis","type":"uint32"},{"internalType":"uint32","name":"_cha","type":"uint32"}],"internalType":"struct rl._ability_scores","name":"scores","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"ability_scores_full","outputs":[{"components":[{"components":[{"internalType":"uint32","name":"_str","type":"uint32"},{"internalType":"uint32","name":"_dex","type":"uint32"},{"internalType":"uint32","name":"_con","type":"uint32"},{"internalType":"uint32","name":"_int","type":"uint32"},{"internalType":"uint32","name":"_wis","type":"uint32"},{"internalType":"uint32","name":"_cha","type":"uint32"}],"internalType":"struct rl._ability_scores","name":"attributes","type":"tuple"},{"components":[{"internalType":"int32","name":"_str","type":"int32"},{"internalType":"int32","name":"_dex","type":"int32"},{"internalType":"int32","name":"_con","type":"int32"},{"internalType":"int32","name":"_int","type":"int32"},{"internalType":"int32","name":"_wis","type":"int32"},{"internalType":"int32","name":"_cha","type":"int32"}],"internalType":"struct rl._ability_modifiers","name":"modifiers","type":"tuple"},{"internalType":"uint256","name":"total_points","type":"uint256"},{"internalType":"uint256","name":"spent_points","type":"uint256"},{"internalType":"bool","name":"created","type":"bool"}],"internalType":"struct rl._ability_scores_full","name":"scores_full","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"base","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"xp","type":"uint256"},{"internalType":"uint256","name":"log","type":"uint256"},{"internalType":"uint256","name":"class","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"}],"internalType":"struct rl._base","name":"c","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"description","outputs":[{"internalType":"string","name":"full_name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"gold","outputs":[{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"uint256","name":"claimable","type":"uint256"}],"internalType":"struct rl._gold","name":"g","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"items1","outputs":[{"components":[{"internalType":"uint256","name":"token_id","type":"uint256"},{"internalType":"uint8","name":"base_type","type":"uint8"},{"internalType":"uint8","name":"item_type","type":"uint8"},{"internalType":"uint32","name":"crafted","type":"uint32"},{"internalType":"uint256","name":"crafter","type":"uint256"}],"internalType":"struct rl._item1[]","name":"items","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"materials","outputs":[{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"scout","type":"uint256"},{"internalType":"uint256","name":"log","type":"uint256"}],"internalType":"struct rl._material[]","name":"mats","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"misc","outputs":[{"components":[{"internalType":"uint256","name":"daycare_days_paid","type":"uint256"}],"internalType":"struct rl._misc","name":"m","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"name","outputs":[{"internalType":"string","name":"summoner_name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"skills","outputs":[{"components":[{"internalType":"uint8[36]","name":"skills","type":"uint8[36]"},{"internalType":"bool[36]","name":"class_skills","type":"bool[36]"},{"internalType":"uint256","name":"total_points","type":"uint256"},{"internalType":"uint256","name":"spent_points","type":"uint256"}],"internalType":"struct rl._skills","name":"s","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_s","type":"uint256"}],"name":"summoner_full","outputs":[{"components":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"xp","type":"uint256"},{"internalType":"uint256","name":"log","type":"uint256"},{"internalType":"uint256","name":"class","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"}],"internalType":"struct rl._base","name":"base","type":"tuple"},{"components":[{"components":[{"internalType":"uint32","name":"_str","type":"uint32"},{"internalType":"uint32","name":"_dex","type":"uint32"},{"internalType":"uint32","name":"_con","type":"uint32"},{"internalType":"uint32","name":"_int","type":"uint32"},{"internalType":"uint32","name":"_wis","type":"uint32"},{"internalType":"uint32","name":"_cha","type":"uint32"}],"internalType":"struct rl._ability_scores","name":"attributes","type":"tuple"},{"components":[{"internalType":"int32","name":"_str","type":"int32"},{"internalType":"int32","name":"_dex","type":"int32"},{"internalType":"int32","name":"_con","type":"int32"},{"internalType":"int32","name":"_int","type":"int32"},{"internalType":"int32","name":"_wis","type":"int32"},{"internalType":"int32","name":"_cha","type":"int32"}],"internalType":"struct rl._ability_modifiers","name":"modifiers","type":"tuple"},{"internalType":"uint256","name":"total_points","type":"uint256"},{"internalType":"uint256","name":"spent_points","type":"uint256"},{"internalType":"bool","name":"created","type":"bool"}],"internalType":"struct rl._ability_scores_full","name":"ability_scores","type":"tuple"},{"components":[{"internalType":"uint8[36]","name":"skills","type":"uint8[36]"},{"internalType":"bool[36]","name":"class_skills","type":"bool[36]"},{"internalType":"uint256","name":"total_points","type":"uint256"},{"internalType":"uint256","name":"spent_points","type":"uint256"}],"internalType":"struct rl._skills","name":"skills","type":"tuple"},{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"uint256","name":"claimable","type":"uint256"}],"internalType":"struct rl._gold","name":"gold","type":"tuple"},{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"scout","type":"uint256"},{"internalType":"uint256","name":"log","type":"uint256"}],"internalType":"struct rl._material[]","name":"materials","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"daycare_days_paid","type":"uint256"}],"internalType":"struct rl._misc","name":"misc","type":"tuple"}],"internalType":"struct rl._summoner","name":"s","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_s","type":"uint256[]"}],"name":"summoners_full","outputs":[{"components":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"xp","type":"uint256"},{"internalType":"uint256","name":"log","type":"uint256"},{"internalType":"uint256","name":"class","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"}],"internalType":"struct rl._base","name":"base","type":"tuple"},{"components":[{"components":[{"internalType":"uint32","name":"_str","type":"uint32"},{"internalType":"uint32","name":"_dex","type":"uint32"},{"internalType":"uint32","name":"_con","type":"uint32"},{"internalType":"uint32","name":"_int","type":"uint32"},{"internalType":"uint32","name":"_wis","type":"uint32"},{"internalType":"uint32","name":"_cha","type":"uint32"}],"internalType":"struct rl._ability_scores","name":"attributes","type":"tuple"},{"components":[{"internalType":"int32","name":"_str","type":"int32"},{"internalType":"int32","name":"_dex","type":"int32"},{"internalType":"int32","name":"_con","type":"int32"},{"internalType":"int32","name":"_int","type":"int32"},{"internalType":"int32","name":"_wis","type":"int32"},{"internalType":"int32","name":"_cha","type":"int32"}],"internalType":"struct rl._ability_modifiers","name":"modifiers","type":"tuple"},{"internalType":"uint256","name":"total_points","type":"uint256"},{"internalType":"uint256","name":"spent_points","type":"uint256"},{"internalType":"bool","name":"created","type":"bool"}],"internalType":"struct rl._ability_scores_full","name":"ability_scores","type":"tuple"},{"components":[{"internalType":"uint8[36]","name":"skills","type":"uint8[36]"},{"internalType":"bool[36]","name":"class_skills","type":"bool[36]"},{"internalType":"uint256","name":"total_points","type":"uint256"},{"internalType":"uint256","name":"spent_points","type":"uint256"}],"internalType":"struct rl._skills","name":"skills","type":"tuple"},{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"uint256","name":"claimable","type":"uint256"}],"internalType":"struct rl._gold","name":"gold","type":"tuple"},{"components":[{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"scout","type":"uint256"},{"internalType":"uint256","name":"log","type":"uint256"}],"internalType":"struct rl._material[]","name":"materials","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"daycare_days_paid","type":"uint256"}],"internalType":"struct rl._misc","name":"misc","type":"tuple"}],"internalType":"struct rl._summoner[]","name":"s","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"}],"name":"wealth_by_level","outputs":[{"internalType":"uint256","name":"wealth","type":"uint256"}],"stateMutability":"pure","type":"function"}]');

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZjFkZmYwYTY1MWJiYWJhNWUwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLDhKQUNQRCx1REFESSxFQUNjLCtCQURkLENBQVQ7O0FBSUEsK0RBQWVDLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1LLE9BQU8sR0FBRyxJQUFJRix3RUFBSixDQUFxQjtBQUN4Q0csRUFBQUEsY0FBYyxFQUFFLEdBRHdCO0FBRXhDQyxFQUFBQSxJQUFJLEVBQUVILHlDQUFHQTtBQUYrQixDQUFyQixDQUFoQjtBQUtQLElBQU1JLGlCQUFpQixHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsK0NBQWQsQ0FBMUI7QUFFTyxJQUFNWSxRQUFRLEdBQUcsSUFBSVQsNkVBQUosQ0FBc0I7QUFDMUNNLEVBQUFBLGlCQUFpQixFQUFqQkE7QUFEMEMsQ0FBdEIsQ0FBakI7QUFnQkEsSUFBTUksaUJBQWdELEdBQUc7QUFDNURDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxTQUFTLEVBQUVILFFBREw7QUFFTkksSUFBQUEsSUFBSSxFQUFFLFVBRkE7QUFHTkMsSUFBQUEsUUFBUSxFQUFFLGNBSEo7QUFJTkMsSUFBQUEsV0FBVyxFQUFFLGdDQUpQO0FBS05DLElBQUFBLElBQUksRUFBRSxJQUxBO0FBTU5DLElBQUFBLEtBQUssRUFBRTtBQU5ELEdBRGtEO0FBUzVEQyxFQUFBQSxjQUFjLEVBQUU7QUFDWk4sSUFBQUEsU0FBUztBQUFBLCtVQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQytCLHlOQUQvQjs7QUFBQTtBQUNETyxnQkFBQUEsc0JBREMsaUJBQzhFQSxzQkFEOUU7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QUFDSDs7R0FoRHVCdkM7VUFDa0J6RCxnRUFFckJ3RixzREFFS0MsZ0VBRVdDLHVEQWNObk07OztLQXJCUGtLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbmZpZy9ycGMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbmZpZy93YWxsZXRzLnRzIiwid2VicGFjazovL19OX0UvLi9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVJhcml0eUxpYnJhcnkudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL19OX0UvLi9zdGF0ZS9tdWx0aWNhbGwvdXBkYXRlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0YXRlL3N1bW1vbmVycy91cGRhdGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWluSWQgfSBmcm9tICcuLi9jb25zdGFudHMnXHJcblxyXG5jb25zdCBycGMgPSB7XHJcbiAgICBbQ2hhaW5JZC5NQUlOTkVUXTogJ2h0dHBzOi8vcnBjYXBpLmZhbnRvbS5uZXR3b3JrJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcnBjXHJcbiIsImltcG9ydCB7IEFic3RyYWN0Q29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvYWJzdHJhY3QtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgTmV0d29ya0Nvbm5lY3RvciB9IGZyb20gJy4uL2VudGl0aWVzL05ldHdvcmtDb25uZWN0b3InXHJcbmltcG9ydCBSUEMgZnJvbSAnLi9ycGMnXHJcbmltcG9ydCB7IENoYWluSWQgfSBmcm9tICcuLi9jb25zdGFudHMnXHJcblxyXG5leHBvcnQgY29uc3QgbmV0d29yayA9IG5ldyBOZXR3b3JrQ29ubmVjdG9yKHtcclxuICAgIGRlZmF1bHRDaGFpbklkOiAyNTAsXHJcbiAgICB1cmxzOiBSUEMsXHJcbn0pXHJcblxyXG5jb25zdCBzdXBwb3J0ZWRDaGFpbklkcyA9IE9iamVjdC52YWx1ZXMoQ2hhaW5JZCkgYXMgbnVtYmVyW11cclxuXHJcbmV4cG9ydCBjb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3Rvcih7XHJcbiAgICBzdXBwb3J0ZWRDaGFpbklkcyxcclxufSlcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2FsbGV0SW5mbyB7XHJcbiAgICBjb25uZWN0b3I/OiAoKCkgPT4gUHJvbWlzZTxBYnN0cmFjdENvbm5lY3Rvcj4pIHwgQWJzdHJhY3RDb25uZWN0b3JcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgaWNvbk5hbWU6IHN0cmluZ1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1xyXG4gICAgaHJlZjogc3RyaW5nIHwgbnVsbFxyXG4gICAgY29sb3I6IHN0cmluZ1xyXG4gICAgcHJpbWFyeT86IHRydWVcclxuICAgIG1vYmlsZT86IHRydWVcclxuICAgIG1vYmlsZU9ubHk/OiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTVVBQT1JURURfV0FMTEVUUzogeyBba2V5OiBzdHJpbmddOiBXYWxsZXRJbmZvIH0gPSB7XHJcbiAgICBNRVRBTUFTSzoge1xyXG4gICAgICAgIGNvbm5lY3RvcjogaW5qZWN0ZWQsXHJcbiAgICAgICAgbmFtZTogJ01ldGFNYXNrJyxcclxuICAgICAgICBpY29uTmFtZTogJ21ldGFtYXNrLnBuZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdFYXN5LXRvLXVzZSBicm93c2VyIGV4dGVuc2lvbi4nLFxyXG4gICAgICAgIGhyZWY6IG51bGwsXHJcbiAgICAgICAgY29sb3I6ICcjRTg4MzFEJyxcclxuICAgIH0sXHJcbiAgICBXQUxMRVRfQ09OTkVDVDoge1xyXG4gICAgICAgIGNvbm5lY3RvcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBXYWxsZXRDb25uZWN0Q29ubmVjdG9yID0gKGF3YWl0IGltcG9ydCgnQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3InKSkuV2FsbGV0Q29ubmVjdENvbm5lY3RvclxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFdhbGxldENvbm5lY3RDb25uZWN0b3Ioe1xyXG4gICAgICAgICAgICAgICAgcnBjOiBSUEMsXHJcbiAgICAgICAgICAgICAgICBicmlkZ2U6ICdodHRwczovL2JyaWRnZS53YWxsZXRjb25uZWN0Lm9yZycsXHJcbiAgICAgICAgICAgICAgICBxcmNvZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWRDaGFpbklkczogW1xyXG4gICAgICAgICAgICAgICAgICAgIDI1MCwgLy8gRmFudG9tXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmFtZTogJ1dhbGxldENvbm5lY3QnLFxyXG4gICAgICAgIGljb25OYW1lOiAnd2FsbGV0LWNvbm5lY3Quc3ZnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Nvbm5lY3QgdG8gVHJ1c3QgV2FsbGV0LCBSYWluYm93IFdhbGxldCBhbmQgbW9yZS4uLicsXHJcbiAgICAgICAgaHJlZjogbnVsbCxcclxuICAgICAgICBjb2xvcjogJyM0MTk2RkMnLFxyXG4gICAgICAgIG1vYmlsZTogdHJ1ZSxcclxuICAgIH0sXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IE5ldHdvcmtDb250ZXh0TmFtZSA9ICdORVRXT1JLJ1xyXG5cclxuZXhwb3J0IGVudW0gQ2hhaW5JZCB7XHJcbiAgICBNQUlOTkVUID0gMjUwLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTVVMVElDQUxMMl9BRERSRVNTID0gJzB4NWYyOGU5ZmNhMWMzNGIyZGQ0NDYzMGRmMjZmYzdhYTNkM2YzNWViOSdcclxuXHJcbmV4cG9ydCBjb25zdCBSQVJJVFlfQUREUkVTUyA9ICcweGNlNzYxRDc4OERGNjA4QkQyMWJkZDU5ZDZmNEI1NGIyZTI3RjI1QmInXHJcblxyXG5leHBvcnQgY29uc3QgUkFSSVRZX0dPTERfQUREUkVTUyA9ICcweDIwNjlCNzZBZmU2YjczNEZiNjVEMWQwOTlFN2VjNjRlZTlDQzc2QjInXHJcblxyXG5leHBvcnQgY29uc3QgUkFSSVRZX0FUVFJJQlVURVNfQUREUkVTUyA9ICcweEI1RjVBRjEwODdBOERBNjJBMjNiMDhDMDBDNmVjOWFmMjFGMzk3YTEnXHJcblxyXG5leHBvcnQgY29uc3QgUkFSSVRZX0hFTFBFUl9BRERSRVNTID0gJzB4NTZhMjBCNzY1YmY3RkYwZWRmNjdhQjI3NTJFM2M4NzAzODIxZkUyRSdcclxuXHJcbmV4cG9ydCBjb25zdCBSQVJJVFlfU0tJTExTX0FERFJFU1MgPSAnMHg1MUMwQjI5QTFkODQ2MTEzNzNCQTMwMTcwNmM2QjRiNzIyODNDODBGJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBUklUWV9EQVlDQVJFX0FERFJFU1MgPSAnMHhmMWJmMzRFNDZFQ2Y0NjU1OTFCN2E3ZkE5NjM1RTRDNTgzMTc0ZmEzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBUklUWV9MSUIgPSAnMHhBNGQyNzFkMzAyMkNmMzE3NDQzN2NGMkMxNTljQmRCYTc0QzQ4NTdhJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBUklUWV9DRUxMQVJfQUREUkVTUyA9ICcweDJBMEYxY0IxNzY4MDE2MWNGMjU1MzQ4ZERGRGVFOTRlYThDYTE5NkEnXHJcblxyXG5leHBvcnQgY29uc3QgUkFSSVRZX0NSQUZUSU5HX0FERFJFU1MgPSAnMHhmNDEyNzA4MzZkRjREYjFEMjhGN2ZkMDkzNTI3MGUzQTYwM2U3OGNDJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBUklUWV9DUkFGVElOR19TVU1NT05FUiA9IDE3NTg3MDlcclxuXHJcbmV4cG9ydCBjb25zdCBDUkFGVElOR19BTExPV0FOQ0UgPSAxMDAwMDBcclxuXHJcbmV4cG9ydCBjb25zdCBCVVJOX0FERFJFU1MgPSAnMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkRWFEJ1xyXG4iLCJpbXBvcnQgeyB1c2VSYXJpdHlMaWJDb250cmFjdCB9IGZyb20gJy4vdXNlQ29udHJhY3QnXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSAnZXRoZXJzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdW1tb25lckZ1bGxEYXRhIHtcclxuICAgIGlkOiBudW1iZXJcclxuICAgIGFiaWxpdHlfc2NvcmVzOiB7XHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICBfY2hhOiBudW1iZXJcclxuICAgICAgICAgICAgX2NvbjogbnVtYmVyXHJcbiAgICAgICAgICAgIF9kZXg6IG51bWJlclxyXG4gICAgICAgICAgICBfaW50OiBudW1iZXJcclxuICAgICAgICAgICAgX3N0cjogbnVtYmVyXHJcbiAgICAgICAgICAgIF93aXM6IG51bWJlclxyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVkOiBib29sZWFuXHJcbiAgICAgICAgbW9kaWZpZXJzOiB7XHJcbiAgICAgICAgICAgIF9jaGE6IG51bWJlclxyXG4gICAgICAgICAgICBfY29uOiBudW1iZXJcclxuICAgICAgICAgICAgX2RleDogbnVtYmVyXHJcbiAgICAgICAgICAgIF9pbnQ6IG51bWJlclxyXG4gICAgICAgICAgICBfc3RyOiBudW1iZXJcclxuICAgICAgICAgICAgX3dpczogbnVtYmVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwZW50X3BvaW50czogbnVtYmVyXHJcbiAgICAgICAgdG90YWxfcG9pbnRzOiBudW1iZXJcclxuICAgIH1cclxuICAgIGJhc2U6IHtcclxuICAgICAgICBfY2xhc3M6IG51bWJlclxyXG4gICAgICAgIF9sZXZlbDogbnVtYmVyXHJcbiAgICAgICAgX2xvZzogbnVtYmVyXHJcbiAgICAgICAgX25hbWU6IHN0cmluZ1xyXG4gICAgICAgIF94cDogbnVtYmVyXHJcbiAgICB9XHJcbiAgICBnb2xkOiB7XHJcbiAgICAgICAgYmFsYW5jZTogbnVtYmVyXHJcbiAgICAgICAgY2xhaW1hYmxlOiBudW1iZXJcclxuICAgICAgICBjbGFpbWVkOiBudW1iZXJcclxuICAgIH1cclxuICAgIG1hdGVyaWFsczoge1xyXG4gICAgICAgIGxvZzogbnVtYmVyXHJcbiAgICAgICAgYmFsYW5jZTogbnVtYmVyXHJcbiAgICAgICAgc2NvdXQ6IG51bWJlclxyXG4gICAgfVxyXG4gICAgc2tpbGxzOiB7XHJcbiAgICAgICAgY2xhc3Nfc2tpbGxzOiBib29sZWFuW11cclxuICAgICAgICBza2lsbHM6IG51bWJlcltdXHJcbiAgICAgICAgc3BlbnRfcG9pbnRzOiBudW1iZXJcclxuICAgICAgICB0b3RhbF9wb2ludHM6IG51bWJlclxyXG4gICAgfVxyXG4gICAgbWlzYzoge1xyXG4gICAgICAgIGRheWNhcmVfZGF5c19wYWlkOiBudW1iZXJcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIExpYnJhcnlJbnRlcmZhY2Uge1xyXG4gICAgc3VtbW9uZXJzX2Z1bGw6IChpZHM6IHN0cmluZ1tdKSA9PiBQcm9taXNlPFN1bW1vbmVyRnVsbERhdGFbXT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUmFyaXR5TGlicmFyeSgpOiBMaWJyYXJ5SW50ZXJmYWNlIHtcclxuICAgIGNvbnN0IGxpYiA9IHVzZVJhcml0eUxpYkNvbnRyYWN0KClcclxuXHJcbiAgICBjb25zdCBzdW1tb25lcnNfZnVsbCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIGFzeW5jIChpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxTdW1tb25lckZ1bGxEYXRhW10+ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbW9uZXJzID0gYXdhaXQgbGliPy5zdW1tb25lcnNfZnVsbChpZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtbW9uZXJzLm1hcCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBhcnNlSW50KGlkc1tpXSwgMTYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFiaWxpdHlfc2NvcmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jaGE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYWJpbGl0eV9zY29yZXMuYXR0cmlidXRlcy5fY2hhID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLmF0dHJpYnV0ZXMuX2NoYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYWJpbGl0eV9zY29yZXMuYXR0cmlidXRlcy5fY29uID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLmF0dHJpYnV0ZXMuX2NvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kZXg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYWJpbGl0eV9zY29yZXMuYXR0cmlidXRlcy5fZGV4ID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLmF0dHJpYnV0ZXMuX2RleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYWJpbGl0eV9zY29yZXMuYXR0cmlidXRlcy5faW50ID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLmF0dHJpYnV0ZXMuX2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdHI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYWJpbGl0eV9zY29yZXMuYXR0cmlidXRlcy5fc3RyID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLmF0dHJpYnV0ZXMuX3N0cixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF93aXM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuYWJpbGl0eV9zY29yZXMuYXR0cmlidXRlcy5fd2lzID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLmF0dHJpYnV0ZXMuX3dpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZDogdmFsdWUuYWJpbGl0eV9zY29yZXMuY3JlYXRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY2hhOiB2YWx1ZS5hYmlsaXR5X3Njb3Jlcy5tb2RpZmllcnMuX2NoYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb246IHZhbHVlLmFiaWxpdHlfc2NvcmVzLm1vZGlmaWVycy5fY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RleDogdmFsdWUuYWJpbGl0eV9zY29yZXMubW9kaWZpZXJzLl9kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW50OiB2YWx1ZS5hYmlsaXR5X3Njb3Jlcy5tb2RpZmllcnMuX2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdHI6IHZhbHVlLmFiaWxpdHlfc2NvcmVzLm1vZGlmaWVycy5fc3RyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3dpczogdmFsdWUuYWJpbGl0eV9zY29yZXMubW9kaWZpZXJzLl93aXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZW50X3BvaW50czogcGFyc2VJbnQodmFsdWUuYWJpbGl0eV9zY29yZXMuc3BlbnRfcG9pbnRzLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9wb2ludHM6IHBhcnNlSW50KHZhbHVlLmFiaWxpdHlfc2NvcmVzLnRvdGFsX3BvaW50cy50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NsYXNzOiBwYXJzZUludCh2YWx1ZS5iYXNlLmNsYXNzLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbGV2ZWw6IHBhcnNlSW50KHZhbHVlLmJhc2UubGV2ZWwudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9sb2c6IHBhcnNlSW50KHZhbHVlLmJhc2UubG9nLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbmFtZTogdmFsdWUuYmFzZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfeHA6IHBhcnNlSW50KHV0aWxzLmZvcm1hdFVuaXRzKHZhbHVlLmJhc2UueHAudG9TdHJpbmcoKSwgJ2V0aGVyJykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29sZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBwYXJzZUludCh1dGlscy5mb3JtYXRVbml0cyh2YWx1ZS5nb2xkLmJhbGFuY2UsICdldGhlcicpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhaW1hYmxlOiBwYXJzZUludCh1dGlscy5mb3JtYXRVbml0cyh2YWx1ZS5nb2xkLmNsYWltYWJsZSwgJ2V0aGVyJykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFpbWVkOiBwYXJzZUludCh1dGlscy5mb3JtYXRVbml0cyh2YWx1ZS5nb2xkLmNsYWltZWQsICdldGhlcicpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBwYXJzZUludCh2YWx1ZS5tYXRlcmlhbHNbMF0uYmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3V0OiBwYXJzZUludCh2YWx1ZS5tYXRlcmlhbHNbMF0uc2NvdXQudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZzogcGFyc2VJbnQodmFsdWUubWF0ZXJpYWxzWzBdLmxvZy50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc19za2lsbHM6IHZhbHVlLnNraWxscy5jbGFzc19za2lsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsczogdmFsdWUuc2tpbGxzLnNraWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlbnRfcG9pbnRzOiBwYXJzZUludCh2YWx1ZS5za2lsbHMuc3BlbnRfcG9pbnRzLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9wb2ludHM6IHBhcnNlSW50KHZhbHVlLnNraWxscy50b3RhbF9wb2ludHMudG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXNjOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheWNhcmVfZGF5c19wYWlkOiBwYXJzZUludCh2YWx1ZS5taXNjLmRheWNhcmVfZGF5c19wYWlkLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbbGliXVxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiB7IHN1bW1vbmVyc19mdWxsIH1cclxufVxyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuXHJcbmltcG9ydCAqIGFzIHBsdXJhbHMgZnJvbSAnbWFrZS1wbHVyYWwvcGx1cmFscydcclxuXHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9Qcm92aWRlciwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYTQnXHJcbmltcG9ydCB7IENvbXBvbmVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFJlZHV4UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0J1xyXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICcuLi9sYXlvdXRzL0RlZmF1bHQnXHJcbmltcG9ydCBzdG9yZSwgeyBwZXJzaXN0b3IgfSBmcm9tICcuLi9zdGF0ZSdcclxuaW1wb3J0IHsgRnJhZ21lbnQsIEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXZWIzUmVhY3RNYW5hZ2VyIGZyb20gJy4uL2NvbXBvbmVudHMvV2ViM1JlYWN0TWFuYWdlcidcclxuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgZ2V0TGlicmFyeSBmcm9tICcuLi9mdW5jdGlvbnMvZ2V0TGlicmFyeSdcclxuaW1wb3J0IERvdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Eb3RzJ1xyXG5pbXBvcnQgQXBwbGljYXRpb25VcGRhdGVyIGZyb20gJy4uL3N0YXRlL2FwcGxpY2F0aW9uL3VwZGF0ZXInXHJcbmltcG9ydCBNdWx0aWNhbGxVcGRhdGVyIGZyb20gJy4uL3N0YXRlL211bHRpY2FsbC91cGRhdGVyJ1xyXG5pbXBvcnQgU3VtbW9uZXJzVXBkYXRlciBmcm9tICcuLi9zdGF0ZS9zdW1tb25lcnMvdXBkYXRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBJMThuUHJvdmlkZXIgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xyXG5pbXBvcnQgeyBpMThuIH0gZnJvbSAnQGxpbmd1aS9jb3JlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuY29uc3QgV2ViM1Byb3ZpZGVyTmV0d29yayA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL1dlYjNQcm92aWRlck5ldHdvcmsnKSwgeyBzc3I6IGZhbHNlIH0pXHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogJ2h0dHBzOi8vYXBpLnJhcml0eS5nYW1lL3N1YmdyYXBocy9uYW1lL3Jhcml0eS1hZHZlbnR1cmUvcmFyaXR5JyxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG59KVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICEhd2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICB3aW5kb3cuZXRoZXJldW0uYXV0b1JlZnJlc2hPbk5ldHdvcmtDaGFuZ2UgPSBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBwYWdlUHJvcHMsXHJcbn06IEFwcFByb3BzICYge1xyXG4gICAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+ICYge1xyXG4gICAgICAgIEd1YXJkOiBGdW5jdGlvbkNvbXBvbmVudFxyXG4gICAgICAgIExheW91dDogRnVuY3Rpb25Db21wb25lbnRcclxuICAgICAgICBQcm92aWRlcjogRnVuY3Rpb25Db21wb25lbnRcclxuICAgIH1cclxufSkge1xyXG4gICAgY29uc3QgeyBsb2NhbGUgfSA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBsb2FkKGxvY2FsZSkge1xyXG4gICAgICAgICAgICBpMThuLmxvYWRMb2NhbGVEYXRhKGxvY2FsZSwgeyBwbHVyYWxzOiBwbHVyYWxzW2xvY2FsZS5zcGxpdCgnXycpWzBdXSB9KVxyXG5cclxuICAgICAgICAgICAgLy8gTG9hZCBmYWxsYmFjayBtZXNzYWdlc1xyXG4gICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBhd2FpdCBpbXBvcnQoYEBsaW5ndWkvbG9hZGVyIS4vLi4vbG9jYWxlLyR7bG9jYWxlfS5qc29uP3Jhdy1saW5ndWlgKVxyXG4gICAgICAgICAgICBpMThuLmxvYWQobG9jYWxlLCBtZXNzYWdlcylcclxuXHJcbiAgICAgICAgICAgIGkxOG4uYWN0aXZhdGUobG9jYWxlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZChsb2NhbGUpXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgfSwgW2xvY2FsZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUykge1xyXG4gICAgICAgICAgICBSZWFjdEdBLmluaXRpYWxpemUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUylcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvLyBBbGxvd3MgZm9yIGNvbmRpdGlvbmFsbHkgc2V0dGluZyBhIHByb3ZpZGVyIHRvIGJlIGhvaXN0ZWQgcGVyIHBhZ2VcclxuICAgIGNvbnN0IFByb3ZpZGVyID0gQ29tcG9uZW50LlByb3ZpZGVyIHx8IEZyYWdtZW50XHJcblxyXG4gICAgLy8gQWxsb3dzIGZvciBjb25kaXRpb25hbGx5IHNldHRpbmcgYSBsYXlvdXQgdG8gYmUgaG9pc3RlZCBwZXIgcGFnZVxyXG4gICAgY29uc3QgTGF5b3V0ID0gQ29tcG9uZW50LkxheW91dCB8fCBEZWZhdWx0TGF5b3V0XHJcblxyXG4gICAgLy8gQWxsb3dzIGZvciBjb25kaXRpb25hbGx5IHNldHRpbmcgYSBndWFyZCB0byBiZSBob2lzdGVkIHBlciBwYWdlXHJcbiAgICBjb25zdCBHdWFyZCA9IENvbXBvbmVudC5HdWFyZCB8fCBGcmFnbWVudFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLG1pbmltdW0tc2NhbGU9MSxtYXhpbXVtLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+UmFyaXR5IEdhbWUgfCBGcmVlIHRvIG1pbnQgRCZEIGJsb2NrY2hhaW4gYmFzZWQgZ2FtZTwvdGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1ldGEga2V5PVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRnJlZSB0byBtaW50IEQmRCBibG9ja2NoYWluIGJhc2VkIGdhbWVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsaWNhdGlvbi1uYW1lXCIgY29udGVudD1cIlJhcml0eSBHYW1lIHwgRnJlZSB0byBtaW50IEQmRCBibG9ja2NoYWluIGJhc2VkIGdhbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlXCIgY29udGVudD1cImJsYWNrLXRyYW5zbHVjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiUmFyaXR5IEdhbWUgfCBGcmVlIHRvIG1pbnQgRCZEIGJsb2NrY2hhaW4gYmFzZWQgZ2FtZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJmb3JtYXQtZGV0ZWN0aW9uXCIgY29udGVudD1cInRlbGVwaG9uZT1ub1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tdGFwLWhpZ2hsaWdodFwiIGNvbnRlbnQ9XCJub1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzNFNEE5NFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1ldGEga2V5PVwidHdpdHRlcjpjYXJkXCIgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJhcHBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJ0d2l0dGVyOnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHdpdHRlcjp0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIlJhcml0eSBHYW1lIHwgRnJlZSB0byBtaW50IEQmRCBibG9ja2NoYWluIGJhc2VkIGdhbWVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGtleT1cInR3aXR0ZXI6dXJsXCIgbmFtZT1cInR3aXR0ZXI6dXJsXCIgY29udGVudD1cImh0dHBzOi8vcmFyaXR5LmdhbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkZyZWUgdG8gbWludCBEJkQgYmxvY2tjaGFpbiBiYXNlZCBnYW1lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBrZXk9XCJ0d2l0dGVyOmltYWdlXCIgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9yYXJpdHkuZ2FtZS9tYW5pZmVzdC1pY29uLTE5Mi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEga2V5PVwidHdpdHRlcjpjcmVhdG9yXCIgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAUmFyaXR5R2FtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBrZXk9XCJvZzp0eXBlXCIgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJvZzpzaXRlX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiUmFyaXR5IEdhbWUgfCBGcmVlIHRvIG1pbnQgRCZEIGJsb2NrY2hhaW4gYmFzZWQgZ2FtZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEga2V5PVwib2c6dXJsXCIgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9yYXJpdHkuZ2FtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBrZXk9XCJvZzppbWFnZVwiIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9yYXJpdHkuZ2FtZS9hcHBsZS1pY29uLTE4MC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEga2V5PVwib2c6ZGVzY3JpcHRpb25cIiBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkZyZWUgdG8gbWludCBEJkQgYmxvY2tjaGFpbiBiYXNlZCBnYW1lXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8STE4blByb3ZpZGVyIGkxOG49e2kxOG59IGZvcmNlUmVuZGVyT25Mb2NhbGVDaGFuZ2U9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8V2ViM1Byb3ZpZGVyTmV0d29yayBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXZWIzUmVhY3RNYW5hZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWR1eFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXs8RG90cz5sb2FkaW5nPC9Eb3RzPn0gcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXBwbGljYXRpb25VcGRhdGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpY2FsbFVwZGF0ZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VtbW9uZXJzVXBkYXRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEd1YXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0d1YXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QZXJzaXN0R2F0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlZHV4UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dlYjNSZWFjdE1hbmFnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvV2ViM1Byb3ZpZGVyTmV0d29yaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9JMThuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBDYWxsLCBwYXJzZUNhbGxLZXkgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgeyBSZXRyeWFibGVFcnJvciwgcmV0cnkgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvcmV0cnknXHJcbmltcG9ydCB7IGVycm9yRmV0Y2hpbmdNdWx0aWNhbGxSZXN1bHRzLCBmZXRjaGluZ011bHRpY2FsbFJlc3VsdHMsIHVwZGF0ZU11bHRpY2FsbFJlc3VsdHMgfSBmcm9tICcuL2FjdGlvbnMnXHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uL2hvb2tzJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi9pbmRleCdcclxuaW1wb3J0IHsgQ29udHJhY3QgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9jb250cmFjdHMnXHJcbmltcG9ydCB7IGNodW5rQXJyYXkgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvYXJyYXknXHJcbmltcG9ydCB7IHVzZUFjdGl2ZVdlYjNSZWFjdCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUFjdGl2ZVdlYjNSZWFjdCdcclxuaW1wb3J0IHsgdXNlQmxvY2tOdW1iZXIgfSBmcm9tICcuLi9hcHBsaWNhdGlvbi9ob29rcydcclxuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gJy4uLy4uL2hvb2tzL3VzZURlYm91bmNlJ1xyXG5pbXBvcnQgeyB1c2VNdWx0aWNhbGwyQ29udHJhY3QgfSBmcm9tICcuLi8uLi9ob29rcy91c2VDb250cmFjdCdcclxuXHJcbmNvbnN0IERFRkFVTFRfR0FTX1JFUVVJUkVEID0gMV8wMDBfMDAwXHJcblxyXG4vKipcclxuICogRmV0Y2hlcyBhIGNodW5rIG9mIGNhbGxzLCBlbmZvcmNpbmcgYSBtaW5pbXVtIGJsb2NrIG51bWJlciBjb25zdHJhaW50XHJcbiAqIEBwYXJhbSBtdWx0aWNhbGwgbXVsdGljYWxsIGNvbnRyYWN0IHRvIGZldGNoIGFnYWluc3RcclxuICogQHBhcmFtIGNodW5rIGNodW5rIG9mIGNhbGxzIHRvIG1ha2VcclxuICogQHBhcmFtIG1pbkJsb2NrTnVtYmVyIG1pbmltdW0gYmxvY2sgbnVtYmVyIG9mIHRoZSByZXN1bHQgc2V0XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBmZXRjaENodW5rKFxyXG4gICAgbXVsdGljYWxsOiBDb250cmFjdCxcclxuICAgIGNodW5rOiBDYWxsW10sXHJcbiAgICBibG9ja051bWJlcjogbnVtYmVyXHJcbik6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuOyByZXR1cm5EYXRhOiBzdHJpbmcgfVtdPiB7XHJcbiAgICBjb25zb2xlLmRlYnVnKCdGZXRjaGluZyBjaHVuaycsIGNodW5rLCBibG9ja051bWJlcilcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyByZXR1cm5EYXRhIH0gPSBhd2FpdCBtdWx0aWNhbGwuY2FsbFN0YXRpYy50cnlCbG9ja0FuZEFnZ3JlZ2F0ZShcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGNodW5rLm1hcCgob2JqKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBvYmouYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGNhbGxEYXRhOiBvYmouY2FsbERhdGEsXHJcbiAgICAgICAgICAgICAgICBnYXNMaW1pdDogb2JqLmdhc1JlcXVpcmVkID8/IDFfMDAwXzAwMCxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB7IGJsb2NrVGFnOiBibG9ja051bWJlciB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuRGF0YS5mb3JFYWNoKCh7IGdhc1VzZWQsIHJldHVybkRhdGEsIHN1Y2Nlc3MgfSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICFzdWNjZXNzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuRGF0YS5sZW5ndGggPT09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICBnYXNVc2VkLmd0ZShNYXRoLmZsb29yKChjaHVua1tpXS5nYXNSZXF1aXJlZCA/PyBERUZBVUxUX0dBU19SRVFVSVJFRCkgKiAwLjk1KSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYEEgY2FsbCBmYWlsZWQgZHVlIHRvIHJlcXVpcmluZyAke2dhc1VzZWQudG9TdHJpbmcoKX0gdnMuIGFsbG93ZWQgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rW2ldLmdhc1JlcXVpcmVkID8/IERFRkFVTFRfR0FTX1JFUVVJUkVEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaHVua1tpXVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGFcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gLTMyMDAwIHx8IGVycm9yLm1lc3NhZ2U/LmluZGV4T2YoJ2hlYWRlciBub3QgZm91bmQnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJldHJ5YWJsZUVycm9yKGBoZWFkZXIgbm90IGZvdW5kIGZvciBibG9jayBudW1iZXIgJHtibG9ja051bWJlcn1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY2h1bmsnLCBlcnJvcilcclxuICAgICAgICB0aHJvdyBlcnJvclxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRnJvbSB0aGUgY3VycmVudCBhbGwgbGlzdGVuZXJzIHN0YXRlLCByZXR1cm4gZWFjaCBjYWxsIGtleSBtYXBwZWQgdG8gdGhlXHJcbiAqIG1pbmltdW0gbnVtYmVyIG9mIGJsb2NrcyBwZXIgZmV0Y2guIFRoaXMgaXMgaG93IG9mdGVuIGVhY2gga2V5IG11c3QgYmUgZmV0Y2hlZC5cclxuICogQHBhcmFtIGFsbExpc3RlbmVycyB0aGUgYWxsIGxpc3RlbmVycyBzdGF0ZVxyXG4gKiBAcGFyYW0gY2hhaW5JZCB0aGUgY3VycmVudCBjaGFpbiBpZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZUxpc3RlbmluZ0tleXMoXHJcbiAgICBhbGxMaXN0ZW5lcnM6IEFwcFN0YXRlWydtdWx0aWNhbGwnXVsnY2FsbExpc3RlbmVycyddLFxyXG4gICAgY2hhaW5JZD86IG51bWJlclxyXG4pOiB7IFtjYWxsS2V5OiBzdHJpbmddOiBudW1iZXIgfSB7XHJcbiAgICBpZiAoIWFsbExpc3RlbmVycyB8fCAhY2hhaW5JZCkgcmV0dXJuIHt9XHJcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSBhbGxMaXN0ZW5lcnNbY2hhaW5JZF1cclxuICAgIGlmICghbGlzdGVuZXJzKSByZXR1cm4ge31cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobGlzdGVuZXJzKS5yZWR1Y2U8eyBbY2FsbEtleTogc3RyaW5nXTogbnVtYmVyIH0+KChtZW1vLCBjYWxsS2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5TGlzdGVuZXJzID0gbGlzdGVuZXJzW2NhbGxLZXldXHJcblxyXG4gICAgICAgIG1lbW9bY2FsbEtleV0gPSBPYmplY3Qua2V5cyhrZXlMaXN0ZW5lcnMpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tzUGVyRmV0Y2ggPSBwYXJzZUludChrZXkpXHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tzUGVyRmV0Y2ggPD0gMCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5TGlzdGVuZXJzW2Jsb2Nrc1BlckZldGNoXSA+IDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnJlZHVjZSgocHJldmlvdXNNaW4sIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihwcmV2aW91c01pbiwgcGFyc2VJbnQoY3VycmVudCkpXHJcbiAgICAgICAgICAgIH0sIEluZmluaXR5KVxyXG4gICAgICAgIHJldHVybiBtZW1vXHJcbiAgICB9LCB7fSlcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUga2V5cyB0aGF0IG5lZWQgdG8gYmUgcmVmZXRjaGVkXHJcbiAqIEBwYXJhbSBjYWxsUmVzdWx0cyBjdXJyZW50IGNhbGwgcmVzdWx0IHN0YXRlXHJcbiAqIEBwYXJhbSBsaXN0ZW5pbmdLZXlzIGVhY2ggY2FsbCBrZXkgbWFwcGVkIHRvIGhvdyBvbGQgdGhlIGRhdGEgY2FuIGJlIGluIGJsb2Nrc1xyXG4gKiBAcGFyYW0gY2hhaW5JZCB0aGUgY3VycmVudCBjaGFpbiBpZFxyXG4gKiBAcGFyYW0gbGF0ZXN0QmxvY2tOdW1iZXIgdGhlIGxhdGVzdCBibG9jayBudW1iZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvdXRkYXRlZExpc3RlbmluZ0tleXMoXHJcbiAgICBjYWxsUmVzdWx0czogQXBwU3RhdGVbJ211bHRpY2FsbCddWydjYWxsUmVzdWx0cyddLFxyXG4gICAgbGlzdGVuaW5nS2V5czogeyBbY2FsbEtleTogc3RyaW5nXTogbnVtYmVyIH0sXHJcbiAgICBjaGFpbklkOiBudW1iZXIgfCB1bmRlZmluZWQsXHJcbiAgICBsYXRlc3RCbG9ja051bWJlcjogbnVtYmVyIHwgdW5kZWZpbmVkXHJcbik6IHN0cmluZ1tdIHtcclxuICAgIGlmICghY2hhaW5JZCB8fCAhbGF0ZXN0QmxvY2tOdW1iZXIpIHJldHVybiBbXVxyXG4gICAgY29uc3QgcmVzdWx0cyA9IGNhbGxSZXN1bHRzW2NoYWluSWRdXHJcbiAgICAvLyBubyByZXN1bHRzIGF0IGFsbCwgbG9hZCBldmVyeXRoaW5nXHJcbiAgICBpZiAoIXJlc3VsdHMpIHJldHVybiBPYmplY3Qua2V5cyhsaXN0ZW5pbmdLZXlzKVxyXG5cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhsaXN0ZW5pbmdLZXlzKS5maWx0ZXIoKGNhbGxLZXkpID0+IHtcclxuICAgICAgICBjb25zdCBibG9ja3NQZXJGZXRjaCA9IGxpc3RlbmluZ0tleXNbY2FsbEtleV1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGNhbGxSZXN1bHRzW2NoYWluSWRdW2NhbGxLZXldXHJcbiAgICAgICAgLy8gbm8gZGF0YSwgbXVzdCBmZXRjaFxyXG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuIHRydWVcclxuXHJcbiAgICAgICAgY29uc3QgbWluRGF0YUJsb2NrTnVtYmVyID0gbGF0ZXN0QmxvY2tOdW1iZXIgLSAoYmxvY2tzUGVyRmV0Y2ggLSAxKVxyXG5cclxuICAgICAgICAvLyBhbHJlYWR5IGZldGNoaW5nIGl0IGZvciBhIHJlY2VudCBlbm91Z2ggYmxvY2ssIGRvbid0IHJlZmV0Y2ggaXRcclxuICAgICAgICBpZiAoZGF0YS5mZXRjaGluZ0Jsb2NrTnVtYmVyICYmIGRhdGEuZmV0Y2hpbmdCbG9ja051bWJlciA+PSBtaW5EYXRhQmxvY2tOdW1iZXIpIHJldHVybiBmYWxzZVxyXG5cclxuICAgICAgICAvLyBpZiBkYXRhIGlzIG9sZGVyIHRoYW4gbWluRGF0YUJsb2NrTnVtYmVyLCBmZXRjaCBpdFxyXG4gICAgICAgIHJldHVybiAhZGF0YS5ibG9ja051bWJlciB8fCBkYXRhLmJsb2NrTnVtYmVyIDwgbWluRGF0YUJsb2NrTnVtYmVyXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVyKCk6IG51bGwge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBzdGF0ZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubXVsdGljYWxsKVxyXG4gICAgLy8gd2FpdCBmb3IgbGlzdGVuZXJzIHRvIHNldHRsZSBiZWZvcmUgdHJpZ2dlcmluZyB1cGRhdGVzXHJcbiAgICBjb25zdCBkZWJvdW5jZWRMaXN0ZW5lcnMgPSB1c2VEZWJvdW5jZShzdGF0ZS5jYWxsTGlzdGVuZXJzLCAxMDApXHJcbiAgICBjb25zdCBsYXRlc3RCbG9ja051bWJlciA9IHVzZUJsb2NrTnVtYmVyKClcclxuICAgIGNvbnN0IHsgY2hhaW5JZCB9ID0gdXNlQWN0aXZlV2ViM1JlYWN0KClcclxuICAgIGNvbnN0IG11bHRpY2FsbDJDb250cmFjdCA9IHVzZU11bHRpY2FsbDJDb250cmFjdCgpXHJcbiAgICBjb25zdCBjYW5jZWxsYXRpb25zID0gdXNlUmVmPHsgYmxvY2tOdW1iZXI6IG51bWJlcjsgY2FuY2VsbGF0aW9uczogKCgpID0+IHZvaWQpW10gfT4oKVxyXG5cclxuICAgIGNvbnN0IGxpc3RlbmluZ0tleXM6IHsgW2NhbGxLZXk6IHN0cmluZ106IG51bWJlciB9ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUxpc3RlbmluZ0tleXMoZGVib3VuY2VkTGlzdGVuZXJzLCBjaGFpbklkKVxyXG4gICAgfSwgW2RlYm91bmNlZExpc3RlbmVycywgY2hhaW5JZF0pXHJcblxyXG4gICAgY29uc3QgdW5zZXJpYWxpemVkT3V0ZGF0ZWRDYWxsS2V5cyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBvdXRkYXRlZExpc3RlbmluZ0tleXMoc3RhdGUuY2FsbFJlc3VsdHMsIGxpc3RlbmluZ0tleXMsIGNoYWluSWQsIGxhdGVzdEJsb2NrTnVtYmVyKVxyXG4gICAgfSwgW2NoYWluSWQsIHN0YXRlLmNhbGxSZXN1bHRzLCBsaXN0ZW5pbmdLZXlzLCBsYXRlc3RCbG9ja051bWJlcl0pXHJcblxyXG4gICAgY29uc3Qgc2VyaWFsaXplZE91dGRhdGVkQ2FsbEtleXMgPSB1c2VNZW1vKFxyXG4gICAgICAgICgpID0+IEpTT04uc3RyaW5naWZ5KHVuc2VyaWFsaXplZE91dGRhdGVkQ2FsbEtleXMuc29ydCgpKSxcclxuICAgICAgICBbdW5zZXJpYWxpemVkT3V0ZGF0ZWRDYWxsS2V5c11cclxuICAgIClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbGF0ZXN0QmxvY2tOdW1iZXIgfHwgIWNoYWluSWQgfHwgIW11bHRpY2FsbDJDb250cmFjdCkgcmV0dXJuXHJcblxyXG4gICAgICAgIGNvbnN0IG91dGRhdGVkQ2FsbEtleXM6IHN0cmluZ1tdID0gSlNPTi5wYXJzZShzZXJpYWxpemVkT3V0ZGF0ZWRDYWxsS2V5cylcclxuICAgICAgICBpZiAob3V0ZGF0ZWRDYWxsS2V5cy5sZW5ndGggPT09IDApIHJldHVyblxyXG4gICAgICAgIGNvbnN0IGNhbGxzID0gb3V0ZGF0ZWRDYWxsS2V5cy5tYXAoKGtleSkgPT4gcGFyc2VDYWxsS2V5KGtleSkpXHJcblxyXG4gICAgICAgIGNvbnN0IGNodW5rZWRDYWxscyA9IGNodW5rQXJyYXkoY2FsbHMpXHJcblxyXG4gICAgICAgIGlmIChjYW5jZWxsYXRpb25zLmN1cnJlbnQgJiYgY2FuY2VsbGF0aW9ucy5jdXJyZW50LmJsb2NrTnVtYmVyICE9PSBsYXRlc3RCbG9ja051bWJlcikge1xyXG4gICAgICAgICAgICBjYW5jZWxsYXRpb25zLmN1cnJlbnQuY2FuY2VsbGF0aW9ucy5mb3JFYWNoKChjKSA9PiBjKCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgZmV0Y2hpbmdNdWx0aWNhbGxSZXN1bHRzKHtcclxuICAgICAgICAgICAgICAgIGNhbGxzLFxyXG4gICAgICAgICAgICAgICAgY2hhaW5JZCxcclxuICAgICAgICAgICAgICAgIGZldGNoaW5nQmxvY2tOdW1iZXI6IGxhdGVzdEJsb2NrTnVtYmVyLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY2FuY2VsbGF0aW9ucy5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgICBibG9ja051bWJlcjogbGF0ZXN0QmxvY2tOdW1iZXIsXHJcbiAgICAgICAgICAgIGNhbmNlbGxhdGlvbnM6IGNodW5rZWRDYWxscy5tYXAoKGNodW5rLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBjYW5jZWwsIHByb21pc2UgfSA9IHJldHJ5KCgpID0+IGZldGNoQ2h1bmsobXVsdGljYWxsMkNvbnRyYWN0LCBjaHVuaywgbGF0ZXN0QmxvY2tOdW1iZXIpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbjogSW5maW5pdHksXHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2FpdDogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhXYWl0OiAyNTAwLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHByb21pc2VcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmV0dXJuRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhY2N1bXVsYXRlcyB0aGUgbGVuZ3RoIG9mIGFsbCBwcmV2aW91cyBpbmRpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0Q2FsbEtleUluZGV4ID0gY2h1bmtlZENhbGxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlPG51bWJlcj4oKG1lbW8sIGN1cnIpID0+IG1lbW8gKyBjdXJyLmxlbmd0aCwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdENhbGxLZXlJbmRleCA9IGZpcnN0Q2FsbEtleUluZGV4ICsgcmV0dXJuRGF0YS5sZW5ndGhcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNsaWNlID0gb3V0ZGF0ZWRDYWxsS2V5cy5zbGljZShmaXJzdENhbGxLZXlJbmRleCwgbGFzdENhbGxLZXlJbmRleClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNwbGl0IHRoZSByZXR1cm5lZCBzbGljZSBpbnRvIGVycm9ycyBhbmQgc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yZWRDYWxscywgcmVzdWx0cyB9ID0gc2xpY2UucmVkdWNlPHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yZWRDYWxsczogQ2FsbFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiB7IFtjYWxsS2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWVtbywgY2FsbEtleSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXR1cm5EYXRhW2ldLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtby5yZXN1bHRzW2NhbGxLZXldID0gcmV0dXJuRGF0YVtpXS5yZXR1cm5EYXRhID8/IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vLmVycm9yZWRDYWxscy5wdXNoKHBhcnNlQ2FsbEtleShjYWxsS2V5KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVycm9yZWRDYWxsczogW10sIHJlc3VsdHM6IHt9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2ggYW55IG5ldyByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhyZXN1bHRzKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTXVsdGljYWxsUmVzdWx0cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrTnVtYmVyOiBsYXRlc3RCbG9ja051bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2ggYW55IGVycm9yZWQgY2FsbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yZWRDYWxscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdDYWxscyBlcnJvcmVkIGluIGZldGNoJywgZXJyb3JlZENhbGxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JGZXRjaGluZ011bHRpY2FsbFJlc3VsdHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsczogZXJyb3JlZENhbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGluZ0Jsb2NrTnVtYmVyOiBsYXRlc3RCbG9ja051bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmlzQ2FuY2VsbGVkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ0NhbmNlbGxlZCBmZXRjaCBmb3IgYmxvY2tOdW1iZXInLCBsYXRlc3RCbG9ja051bWJlciwgY2h1bmssIGNoYWluSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggbXVsdGljYWxsIGNodW5rJywgY2h1bmssIGNoYWluSWQsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRmV0Y2hpbmdNdWx0aWNhbGxSZXN1bHRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsczogY2h1bmssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGluZ0Jsb2NrTnVtYmVyOiBsYXRlc3RCbG9ja051bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbmNlbFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9XHJcbiAgICB9LCBbY2hhaW5JZCwgbXVsdGljYWxsMkNvbnRyYWN0LCBkaXNwYXRjaCwgc2VyaWFsaXplZE91dGRhdGVkQ2FsbEtleXMsIGxhdGVzdEJsb2NrTnVtYmVyXSlcclxuXHJcbiAgICByZXR1cm4gbnVsbFxyXG59XHJcbiIsImltcG9ydCB1c2VBY3RpdmVXZWIzUmVhY3QgZnJvbSAnLi4vLi4vaG9va3MvdXNlQWN0aXZlV2ViM1JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgdXNlSXNXaW5kb3dWaXNpYmxlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUlzV2luZG93VmlzaWJsZSdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHsgU1VNTU9ORVJTIH0gZnJvbSAnLi4vLi4vYXBvbGxvJ1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjaHVua0FycmF5QnlOdW1iZXIgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvYXJyYXknXHJcbmltcG9ydCB1c2VSYXJpdHlMaWJyYXJ5IGZyb20gJy4uLy4uL2hvb2tzL3VzZVJhcml0eUxpYnJhcnknXHJcbmltcG9ydCB7IHVwZGF0ZVN1bW1vbmVycyB9IGZyb20gJy4vYWN0aW9ucydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZXIoKTogbnVsbCB7XHJcbiAgICBjb25zdCB7IGxpYnJhcnksIGNoYWluSWQsIGFjY291bnQgfSA9IHVzZUFjdGl2ZVdlYjNSZWFjdCgpXHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgY29uc3Qgd2luZG93VmlzaWJsZSA9IHVzZUlzV2luZG93VmlzaWJsZSgpXHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoU1VNTU9ORVJTLCB7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7IG93bmVyOiBhY2NvdW50ID8gYWNjb3VudC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgOiAnJyB9LFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBbc3VtbW9uZXJzLCBzZXRTdW1tb25lcnNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWxpYnJhcnkgfHwgIWNoYWluSWQgfHwgIWFjY291bnQgfHwgbG9hZGluZyB8fCBlcnJvciB8fCAhd2luZG93VmlzaWJsZSkgcmV0dXJuXHJcbiAgICAgICAgY29uc3Qgc3VtbW9uZXJzID0gZGF0YS5zdW1tb25lcnMubWFwKChzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzLmlkXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRTdW1tb25lcnMoc3VtbW9uZXJzKVxyXG4gICAgfSwgW2xpYnJhcnksIGNoYWluSWQsIGFjY291bnQsIGxvYWRpbmcsIGVycm9yLCB3aW5kb3dWaXNpYmxlXSlcclxuXHJcbiAgICBjb25zdCB7IHN1bW1vbmVyc19mdWxsIH0gPSB1c2VSYXJpdHlMaWJyYXJ5KClcclxuXHJcbiAgICBjb25zdCBmZXRjaF9zdW1tb25lcnNfZGF0YSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXMgbGVzdCB0aGFuIDUwIHN1bW1vbmVycyBmZXRjaCB0aGUgZGF0YSBhbmQgcmV0dXJuXHJcbiAgICAgICAgaWYgKHN1bW1vbmVycy5sZW5ndGggPD0gNTApIHtcclxuICAgICAgICAgICAgY29uc3QgZnVsbF9kYXRhID0gYXdhaXQgc3VtbW9uZXJzX2Z1bGwoc3VtbW9uZXJzKVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVTdW1tb25lcnMoZnVsbF9kYXRhKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY2h1bmtzID0gY2h1bmtBcnJheUJ5TnVtYmVyKHN1bW1vbmVycywgNTApXHJcbiAgICAgICAgICAgIGxldCBmdWxsX2RhdGEgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgY2h1bmsgb2YgY2h1bmtzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVua19kYXRhID0gYXdhaXQgc3VtbW9uZXJzX2Z1bGwoY2h1bmspXHJcbiAgICAgICAgICAgICAgICBmdWxsX2RhdGEgPSBmdWxsX2RhdGEuY29uY2F0KGNodW5rX2RhdGEpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVN1bW1vbmVycyhmdWxsX2RhdGEpKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICB9LCBbc3VtbW9uZXJzX2Z1bGwsIHN1bW1vbmVyc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWxpYnJhcnkgfHwgIWNoYWluSWQgfHwgIWFjY291bnQgfHwgIXdpbmRvd1Zpc2libGUpIHJldHVyblxyXG4gICAgICAgIGZldGNoX3N1bW1vbmVyc19kYXRhKClcclxuICAgIH0sIFtzdW1tb25lcnMsIHdpbmRvd1Zpc2libGUsIGZldGNoX3N1bW1vbmVyc19kYXRhLCBsaWJyYXJ5LCBjaGFpbklkLCBhY2NvdW50XSlcclxuICAgIHJldHVybiBudWxsXHJcbn1cclxuIl0sIm5hbWVzIjpbIkNoYWluSWQiLCJycGMiLCJNQUlOTkVUIiwiSW5qZWN0ZWRDb25uZWN0b3IiLCJOZXR3b3JrQ29ubmVjdG9yIiwiUlBDIiwibmV0d29yayIsImRlZmF1bHRDaGFpbklkIiwidXJscyIsInN1cHBvcnRlZENoYWluSWRzIiwiT2JqZWN0IiwidmFsdWVzIiwiaW5qZWN0ZWQiLCJTVVBQT1JURURfV0FMTEVUUyIsIk1FVEFNQVNLIiwiY29ubmVjdG9yIiwibmFtZSIsImljb25OYW1lIiwiZGVzY3JpcHRpb24iLCJocmVmIiwiY29sb3IiLCJXQUxMRVRfQ09OTkVDVCIsIldhbGxldENvbm5lY3RDb25uZWN0b3IiLCJicmlkZ2UiLCJxcmNvZGUiLCJtb2JpbGUiLCJOZXR3b3JrQ29udGV4dE5hbWUiLCJNVUxUSUNBTEwyX0FERFJFU1MiLCJSQVJJVFlfQUREUkVTUyIsIlJBUklUWV9HT0xEX0FERFJFU1MiLCJSQVJJVFlfQVRUUklCVVRFU19BRERSRVNTIiwiUkFSSVRZX0hFTFBFUl9BRERSRVNTIiwiUkFSSVRZX1NLSUxMU19BRERSRVNTIiwiUkFSSVRZX0RBWUNBUkVfQUREUkVTUyIsIlJBUklUWV9MSUIiLCJSQVJJVFlfQ0VMTEFSX0FERFJFU1MiLCJSQVJJVFlfQ1JBRlRJTkdfQUREUkVTUyIsIlJBUklUWV9DUkFGVElOR19TVU1NT05FUiIsIkNSQUZUSU5HX0FMTE9XQU5DRSIsIkJVUk5fQUREUkVTUyIsInVzZVJhcml0eUxpYkNvbnRyYWN0IiwidXNlQ2FsbGJhY2siLCJ1dGlscyIsInVzZVJhcml0eUxpYnJhcnkiLCJsaWIiLCJzdW1tb25lcnNfZnVsbCIsImlkcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VtbW9uZXJzIiwibWFwIiwidmFsdWUiLCJpIiwiaWQiLCJwYXJzZUludCIsImFiaWxpdHlfc2NvcmVzIiwiYXR0cmlidXRlcyIsIl9jaGEiLCJfY29uIiwiX2RleCIsIl9pbnQiLCJfc3RyIiwiX3dpcyIsImNyZWF0ZWQiLCJtb2RpZmllcnMiLCJzcGVudF9wb2ludHMiLCJ0b1N0cmluZyIsInRvdGFsX3BvaW50cyIsImJhc2UiLCJfY2xhc3MiLCJfbGV2ZWwiLCJsZXZlbCIsIl9sb2ciLCJsb2ciLCJfbmFtZSIsIl94cCIsImZvcm1hdFVuaXRzIiwieHAiLCJnb2xkIiwiYmFsYW5jZSIsImNsYWltYWJsZSIsImNsYWltZWQiLCJtYXRlcmlhbHMiLCJzY291dCIsInNraWxscyIsImNsYXNzX3NraWxscyIsIm1pc2MiLCJkYXljYXJlX2RheXNfcGFpZCIsInBsdXJhbHMiLCJBcG9sbG9DbGllbnQiLCJBcG9sbG9Qcm92aWRlciIsIkluTWVtb3J5Q2FjaGUiLCJSZWFjdEdBIiwidXNlRWZmZWN0IiwiUHJvdmlkZXIiLCJSZWR1eFByb3ZpZGVyIiwiUGVyc2lzdEdhdGUiLCJEZWZhdWx0TGF5b3V0Iiwic3RvcmUiLCJwZXJzaXN0b3IiLCJGcmFnbWVudCIsIldlYjNSZWFjdE1hbmFnZXIiLCJXZWIzUmVhY3RQcm92aWRlciIsImR5bmFtaWMiLCJnZXRMaWJyYXJ5IiwiRG90cyIsIkFwcGxpY2F0aW9uVXBkYXRlciIsIk11bHRpY2FsbFVwZGF0ZXIiLCJTdW1tb25lcnNVcGRhdGVyIiwiSGVhZCIsIkkxOG5Qcm92aWRlciIsImkxOG4iLCJ1c2VSb3V0ZXIiLCJXZWIzUHJvdmlkZXJOZXR3b3JrIiwic3NyIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImF1dG9SZWZyZXNoT25OZXR3b3JrQ2hhbmdlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2NhbGUiLCJsb2FkIiwibG9hZExvY2FsZURhdGEiLCJzcGxpdCIsIm1lc3NhZ2VzIiwiYWN0aXZhdGUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUyIsImluaXRpYWxpemUiLCJMYXlvdXQiLCJHdWFyZCIsInBhcnNlQ2FsbEtleSIsIlJldHJ5YWJsZUVycm9yIiwicmV0cnkiLCJlcnJvckZldGNoaW5nTXVsdGljYWxsUmVzdWx0cyIsImZldGNoaW5nTXVsdGljYWxsUmVzdWx0cyIsInVwZGF0ZU11bHRpY2FsbFJlc3VsdHMiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwidXNlTWVtbyIsInVzZVJlZiIsImNodW5rQXJyYXkiLCJ1c2VBY3RpdmVXZWIzUmVhY3QiLCJ1c2VCbG9ja051bWJlciIsInVzZURlYm91bmNlIiwidXNlTXVsdGljYWxsMkNvbnRyYWN0IiwiREVGQVVMVF9HQVNfUkVRVUlSRUQiLCJmZXRjaENodW5rIiwibXVsdGljYWxsIiwiY2h1bmsiLCJibG9ja051bWJlciIsImNvbnNvbGUiLCJkZWJ1ZyIsImNhbGxTdGF0aWMiLCJ0cnlCbG9ja0FuZEFnZ3JlZ2F0ZSIsIm9iaiIsInRhcmdldCIsImFkZHJlc3MiLCJjYWxsRGF0YSIsImdhc0xpbWl0IiwiZ2FzUmVxdWlyZWQiLCJibG9ja1RhZyIsInJldHVybkRhdGEiLCJmb3JFYWNoIiwiZ2FzVXNlZCIsInN1Y2Nlc3MiLCJsZW5ndGgiLCJndGUiLCJNYXRoIiwiZmxvb3IiLCJ3YXJuIiwiY29kZSIsIm1lc3NhZ2UiLCJpbmRleE9mIiwiZXJyb3IiLCJhY3RpdmVMaXN0ZW5pbmdLZXlzIiwiYWxsTGlzdGVuZXJzIiwiY2hhaW5JZCIsImxpc3RlbmVycyIsImtleXMiLCJyZWR1Y2UiLCJtZW1vIiwiY2FsbEtleSIsImtleUxpc3RlbmVycyIsImZpbHRlciIsImtleSIsImJsb2Nrc1BlckZldGNoIiwicHJldmlvdXNNaW4iLCJjdXJyZW50IiwibWluIiwiSW5maW5pdHkiLCJvdXRkYXRlZExpc3RlbmluZ0tleXMiLCJjYWxsUmVzdWx0cyIsImxpc3RlbmluZ0tleXMiLCJsYXRlc3RCbG9ja051bWJlciIsInJlc3VsdHMiLCJkYXRhIiwibWluRGF0YUJsb2NrTnVtYmVyIiwiZmV0Y2hpbmdCbG9ja051bWJlciIsIlVwZGF0ZXIiLCJkaXNwYXRjaCIsInN0YXRlIiwiZGVib3VuY2VkTGlzdGVuZXJzIiwiY2FsbExpc3RlbmVycyIsIm11bHRpY2FsbDJDb250cmFjdCIsImNhbmNlbGxhdGlvbnMiLCJ1bnNlcmlhbGl6ZWRPdXRkYXRlZENhbGxLZXlzIiwic2VyaWFsaXplZE91dGRhdGVkQ2FsbEtleXMiLCJKU09OIiwic3RyaW5naWZ5Iiwic29ydCIsIm91dGRhdGVkQ2FsbEtleXMiLCJwYXJzZSIsImNhbGxzIiwiY2h1bmtlZENhbGxzIiwiYyIsImluZGV4IiwibiIsIm1pbldhaXQiLCJtYXhXYWl0IiwiY2FuY2VsIiwicHJvbWlzZSIsInRoZW4iLCJmaXJzdENhbGxLZXlJbmRleCIsInNsaWNlIiwiY3VyciIsImxhc3RDYWxsS2V5SW5kZXgiLCJlcnJvcmVkQ2FsbHMiLCJwdXNoIiwiaXNDYW5jZWxsZWRFcnJvciIsInVzZURpc3BhdGNoIiwidXNlSXNXaW5kb3dWaXNpYmxlIiwidXNlUXVlcnkiLCJTVU1NT05FUlMiLCJ1c2VTdGF0ZSIsImNodW5rQXJyYXlCeU51bWJlciIsInVwZGF0ZVN1bW1vbmVycyIsImxpYnJhcnkiLCJhY2NvdW50Iiwid2luZG93VmlzaWJsZSIsInZhcmlhYmxlcyIsIm93bmVyIiwidG9Mb3dlckNhc2UiLCJsb2FkaW5nIiwic2V0U3VtbW9uZXJzIiwicyIsImZldGNoX3N1bW1vbmVyc19kYXRhIiwiZnVsbF9kYXRhIiwiY2h1bmtzIiwiY2h1bmtfZGF0YSIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=