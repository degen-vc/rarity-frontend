"use strict";
self["webpackHotUpdate_N_E"]("pages/summoners",{

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

/***/ "./state/summoners/hooks.ts":
/*!**********************************!*\
  !*** ./state/summoners/hooks.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSummoners": function() { return /* binding */ useSummoners; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();


function useSummoners() {
  _s();

  return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.summoners.data;
  });
}

_s(useSummoners, "nKHvd/QB6hocKEk0fSJoSYcCyR8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3VtbW9uZXJzLmViMDlhODhjNjRlZWIwZjlmNWFlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGtCQUFrQixHQUFHLFNBQTNCO0FBRUEsSUFBS0MsT0FBWjs7V0FBWUE7QUFBQUEsRUFBQUEsUUFBQUE7R0FBQUEsWUFBQUE7O0FBSUwsSUFBTUMsa0JBQWtCLEdBQUcsNENBQTNCO0FBRUEsSUFBTUMsY0FBYyxHQUFHLDRDQUF2QjtBQUVBLElBQU1DLG1CQUFtQixHQUFHLDRDQUE1QjtBQUVBLElBQU1DLHlCQUF5QixHQUFHLDRDQUFsQztBQUVBLElBQU1DLHFCQUFxQixHQUFHLDRDQUE5QjtBQUVBLElBQU1DLHFCQUFxQixHQUFHLDRDQUE5QjtBQUVBLElBQU1DLHNCQUFzQixHQUFHLDRDQUEvQjtBQUdBLElBQU1DLFVBQVUsR0FBRyw0Q0FBbkI7QUFFQSxJQUFNQyxxQkFBcUIsR0FBRyw0Q0FBOUI7QUFFQSxJQUFNQyx1QkFBdUIsR0FBRyw0Q0FBaEM7QUFFQSxJQUFNQyx3QkFBd0IsR0FBRyxPQUFqQztBQUVBLElBQU1DLGtCQUFrQixHQUFHLE1BQTNCO0FBRUEsSUFBTUMsWUFBWSxHQUFHLDRDQUFyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQlA7QUFJTyxTQUFTRSxZQUFULEdBQTRDO0FBQUE7O0FBQy9DLFNBQU9ELHdEQUFXLENBQUMsVUFBQ0UsS0FBRCxFQUFxQjtBQUNwQyxXQUFPQSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLElBQXZCO0FBQ0gsR0FGaUIsQ0FBbEI7QUFHSDs7R0FKZUg7VUFDTEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2luZGV4LnRzIiwid2VicGFjazovL19OX0UvLi9zdGF0ZS9zdW1tb25lcnMvaG9va3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE5ldHdvcmtDb250ZXh0TmFtZSA9ICdORVRXT1JLJ1xyXG5cclxuZXhwb3J0IGVudW0gQ2hhaW5JZCB7XHJcbiAgICBNQUlOTkVUID0gMTM3LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTVVMVElDQUxMMl9BRERSRVNTID0gJzB4NTU3ZkQyNUY5MTY5MjQ3MDAwRjlEODY2NzA0YjRCYzEyNjgwQ0U1ZidcclxuXHJcbmV4cG9ydCBjb25zdCBSQVJJVFlfQUREUkVTUyA9ICcweDRmYjcyOWJkYjk2ZDczNTY5MmRjYWNkOTY0MGNmN2UzYWE4NTliMjUnXHJcblxyXG5leHBvcnQgY29uc3QgUkFSSVRZX0dPTERfQUREUkVTUyA9ICcweDczMDNlN2E4NjBkYWZmZTRkMGIzMzYxNTQ3OTY0OGNiMzQ5NjkwM2InXHJcblxyXG5leHBvcnQgY29uc3QgUkFSSVRZX0FUVFJJQlVURVNfQUREUkVTUyA9ICcweDNhN2M2YTBlNjU0ODBlYjMyYTBkZGYxY2MyZGI2NTYzYWFlZDAzY2UnXHJcblxyXG5leHBvcnQgY29uc3QgUkFSSVRZX0hFTFBFUl9BRERSRVNTID0gJzB4OTg1Yjk1RDc5MzY2ODFDQzM5ZTk2MEI4QjVkMmQ3QjFiMzNDM2ZENydcclxuXHJcbmV4cG9ydCBjb25zdCBSQVJJVFlfU0tJTExTX0FERFJFU1MgPSAnMHhmNzQwMTAzZjRlZGI4NTYwOTI5MjQ3MjA0OGRjODIzYjU0MTdkOWE2J1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBUklUWV9EQVlDQVJFX0FERFJFU1MgPSAnMHhFREI4QjRCNmMwMjIzZEM5MTMyNmYwRjg4NkNDYzdGRjZmNTEzNWEzJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBSQVJJVFlfTElCID0gJzB4NzFGQzZlMTZDMjNEZTAwQTMwOTdEQ0Y2MzMxOTM0MTczM0MwNWM4NSdcclxuXHJcbmV4cG9ydCBjb25zdCBSQVJJVFlfQ0VMTEFSX0FERFJFU1MgPSAnMHhFRjRDOEUxOGM4MzFjQjdDOTM3QTBEMTc4MDkxMDIyMDg1NzBlQzhGJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBUklUWV9DUkFGVElOR19BRERSRVNTID0gJzB4N2QwMjJCOWIzNGVhREM1RTc1MDc4MjNFRGU0NTkzNDcyMjBFZEE1RCdcclxuXHJcbmV4cG9ydCBjb25zdCBSQVJJVFlfQ1JBRlRJTkdfU1VNTU9ORVIgPSAxNzU4NzA5XHJcblxyXG5leHBvcnQgY29uc3QgQ1JBRlRJTkdfQUxMT1dBTkNFID0gMTAwMDAwXHJcblxyXG5leHBvcnQgY29uc3QgQlVSTl9BRERSRVNTID0gJzB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZEVhRCdcclxuIiwiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi9pbmRleCdcclxuaW1wb3J0IHsgU3VtbW9uZXJGdWxsRGF0YSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVJhcml0eUxpYnJhcnknXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3VtbW9uZXJzKCk6IFN1bW1vbmVyRnVsbERhdGFbXSB7XHJcbiAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZS5zdW1tb25lcnMuZGF0YVxyXG4gICAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsiTmV0d29ya0NvbnRleHROYW1lIiwiQ2hhaW5JZCIsIk1VTFRJQ0FMTDJfQUREUkVTUyIsIlJBUklUWV9BRERSRVNTIiwiUkFSSVRZX0dPTERfQUREUkVTUyIsIlJBUklUWV9BVFRSSUJVVEVTX0FERFJFU1MiLCJSQVJJVFlfSEVMUEVSX0FERFJFU1MiLCJSQVJJVFlfU0tJTExTX0FERFJFU1MiLCJSQVJJVFlfREFZQ0FSRV9BRERSRVNTIiwiUkFSSVRZX0xJQiIsIlJBUklUWV9DRUxMQVJfQUREUkVTUyIsIlJBUklUWV9DUkFGVElOR19BRERSRVNTIiwiUkFSSVRZX0NSQUZUSU5HX1NVTU1PTkVSIiwiQ1JBRlRJTkdfQUxMT1dBTkNFIiwiQlVSTl9BRERSRVNTIiwidXNlU2VsZWN0b3IiLCJ1c2VTdW1tb25lcnMiLCJzdGF0ZSIsInN1bW1vbmVycyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9