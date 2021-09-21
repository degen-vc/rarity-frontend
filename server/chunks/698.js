"use strict";
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 5145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F3": () => (/* binding */ chunkArray),
/* harmony export */   "bX": () => (/* binding */ chunkArrayByNumber)
/* harmony export */ });
/* unused harmony export DEFAULT_GAS_REQUIRED */
const CONSERVATIVE_BLOCK_GAS_LIMIT = 10000000; // conservative, hard-coded estimate of the current block gas limit

const DEFAULT_GAS_REQUIRED = 200000; // the default value for calls that don't specify gasRequired
// chunks array into chunks
// evenly distributes items among the chunks

function chunkArray(items, gasLimit = CONSERVATIVE_BLOCK_GAS_LIMIT * 10) {
  const chunks = [];
  let currentChunk = [];
  let currentChunkCumulativeGas = 0;

  for (let i = 0; i < items.length; i++) {
    var _gasRequired;

    const item = items[i]; // calculate the gas required by the current item

    const gasRequired = (_gasRequired = item === null || item === void 0 ? void 0 : item.gasRequired) !== null && _gasRequired !== void 0 ? _gasRequired : DEFAULT_GAS_REQUIRED; // if the current chunk is empty, or the current item wouldn't push it over the gas limit,
    // append the current item and increment the cumulative gas

    if (currentChunk.length === 0 || currentChunkCumulativeGas + gasRequired < gasLimit) {
      currentChunk.push(item);
      currentChunkCumulativeGas += gasRequired;
    } else {
      // otherwise, push the current chunk and create a new chunk
      chunks.push(currentChunk);
      currentChunk = [item];
      currentChunkCumulativeGas = gasRequired;
    }
  }

  if (currentChunk.length > 0) chunks.push(currentChunk);
  return chunks;
}
function chunkArrayByNumber(items, elements) {
  const res = [];

  for (let i = 0; i < items.length; i += elements) {
    const chunk = items.slice(i, i + elements);
    res.push(chunk);
  }

  return res;
}

/***/ }),

/***/ 2225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ classNames)
/* harmony export */ });
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

/***/ }),

/***/ 4932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useRarityHelper)
/* harmony export */ });
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9641);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4879);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9851);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7687);





function useRarityHelper() {
  const helper = (0,_useContract__WEBPACK_IMPORTED_MODULE_0__/* .useRarityHelperContract */ .N1)();
  const {
    library,
    account
  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
  const adventure = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ids => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (helper === null || helper === void 0 ? void 0 : helper.adventure(ids));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [helper]);
  const adventure_donate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ids => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (helper === null || helper === void 0 ? void 0 : helper.adventure(ids, {
          value: ethers__WEBPACK_IMPORTED_MODULE_2__.utils.parseUnits('0.1', 'ether')
        }));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [helper]);
  const cellar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (ids, approval) => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (helper === null || helper === void 0 ? void 0 : helper.cellar(ids, approval));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [helper]);
  const cellar_donate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (ids, approval) => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (helper === null || helper === void 0 ? void 0 : helper.cellar(ids, approval, {
          value: ethers__WEBPACK_IMPORTED_MODULE_2__.utils.parseUnits('0.1', 'ether')
        }));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [helper]);
  const claim_gold = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (ids, approval) => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (helper === null || helper === void 0 ? void 0 : helper.claim_gold(ids, approval));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [helper]);
  const claim_gold_donate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (ids, approval) => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (helper === null || helper === void 0 ? void 0 : helper.claim_gold(ids, approval, {
          value: ethers__WEBPACK_IMPORTED_MODULE_2__.utils.parseUnits('0.1', 'ether')
        }));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [helper]);
  const level_up = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ids => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (helper === null || helper === void 0 ? void 0 : helper.level_up(ids));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [helper]);
  const level_up_donate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ids => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (helper === null || helper === void 0 ? void 0 : helper.level_up(ids, {
          value: ethers__WEBPACK_IMPORTED_MODULE_2__.utils.parseUnits('0.1', 'ether')
        }));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [helper]);
  const donate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async amount => {
    return new Promise(async (resolve, reject) => {
      try {
        const signer = await library.getSigner(account);
        const s = await signer.sendTransaction({
          to: _constants__WEBPACK_IMPORTED_MODULE_4__/* .RARITY_HELPER_ADDRESS */ .bI,
          value: amount
        });
        await s.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [helper]);
  const is_approved = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ids => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await (helper === null || helper === void 0 ? void 0 : helper.is_approved(ids)));
      } catch (e) {
        reject();
      }
    });
  }, [helper]);
  return {
    adventure,
    adventure_donate,
    cellar,
    cellar_donate,
    claim_gold,
    claim_gold_donate,
    level_up,
    level_up_donate,
    donate,
    is_approved
  };
}

/***/ })

};
;