"use strict";
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 4849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useRarityCellar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9641);


function useRarityCellar() {
  const cellar = (0,_useContract__WEBPACK_IMPORTED_MODULE_1__/* .useRarityCellarContract */ .zx)();
  const adventure_cellar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async id => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (cellar === null || cellar === void 0 ? void 0 : cellar.adventure(id));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [cellar]);
  const material_allowance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (from, spender) => {
    return new Promise(async (resolve, reject) => {
      try {
        const allowance = await (cellar === null || cellar === void 0 ? void 0 : cellar.allowance(from, spender));
        resolve(parseInt(allowance.toString()));
      } catch (e) {
        reject();
      }
    });
  }, [cellar]);
  const material_approve = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (from, spender, amount) => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (cellar === null || cellar === void 0 ? void 0 : cellar.approve(from, spender, amount));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [cellar]);
  return {
    adventure_cellar,
    material_allowance,
    material_approve
  };
}

/***/ }),

/***/ 7410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useSummoners)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

function useSummoners() {
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => {
    return state.summoners.data;
  });
}

/***/ })

};
;