"use strict";
exports.id = 892;
exports.ids = [892];
exports.modules = {

/***/ 7683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "An": () => (/* binding */ CLASSES_NAMES),
/* harmony export */   "qe": () => (/* binding */ CLASSES_IMAGES),
/* harmony export */   "sC": () => (/* binding */ CLASS_SKILLS)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const img_path = name => '/img/classes/' + name + '.png';

const CLASSES_NAMES = {
  '1': 'barbarian',
  '2': 'bard',
  '3': 'cleric',
  '4': 'druid',
  '5': 'fighter',
  '6': 'monk',
  '7': 'paladin',
  '8': 'ranger',
  '9': 'rogue',
  '10': 'sorcerer',
  '11': 'wizard'
};
const CLASSES_IMAGES = {
  '1': /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
    src: "/img/classes/barbarian.png",
    width: 106,
    height: 176,
    alt: 'barbarian'
  }),
  '2': /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
    src: "/img/classes/bard.png",
    width: 105,
    height: 176,
    alt: 'bard'
  }),
  '3': /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
    src: "/img/classes/cleric.png",
    width: 97,
    height: 176,
    alt: 'cleric'
  }),
  '4': /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
    src: "/img/classes/druid.png",
    width: 110,
    height: 176,
    alt: 'druid'
  }),
  '5': /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
    src: "/img/classes/fighter.png",
    width: 107,
    height: 176,
    alt: 'fighter'
  }),
  '6': /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
    src: "/img/classes/monk.png",
    width: 113,
    height: 176,
    alt: 'monk'
  }),
  '7': /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
    src: "/img/classes/paladin.png",
    width: 107,
    height: 176,
    alt: 'paladin'
  }),
  '8': /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
    src: "/img/classes/ranger.png",
    width: 107,
    height: 176,
    alt: 'ranger'
  }),
  '9': /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
    src: "/img/classes/rogue.png",
    width: 103,
    height: 176,
    alt: 'rogue'
  }),
  '10': /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
    src: "/img/classes/sorcerer.png",
    width: 110,
    height: 176,
    alt: 'sorcerer'
  }),
  '11': /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
    src: "/img/classes/wizard.png",
    width: 103,
    height: 176,
    alt: 'wizard'
  })
};
const CLASS_SKILLS = {
  '1': [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, true, false, false, false, false, true, false, false, false, false, false, false, true, true, false, false, false],
  '2': [true, true, true, true, true, true, true, true, false, true, true, false, true, false, false, true, false, true, true, true, true, false, true, true, false, false, true, true, true, true, false, false, true, true, true, false],
  '3': [false, false, false, false, true, true, false, true, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false],
  '4': [false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, false, true, true, true, true, false, false, false],
  '5': [false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
  '6': [false, true, false, true, true, true, false, true, false, false, true, false, false, false, false, true, false, true, true, true, true, false, true, true, false, false, true, false, false, false, true, false, true, true, false, false],
  '7': [false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, true, false, false, false, false, true, true, false, true, false, false, false, false, false, false, false, false, false],
  '8': [false, false, false, true, true, true, false, false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, true, true, false, false, false, false, true, true, true, false, false, true],
  '9': [true, true, true, true, false, true, true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, false, true, true, true, false, false, true, false, true, true, true, true],
  '10': [false, false, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false],
  '11': [false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false]
};

/***/ }),

/***/ 3245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useRarity)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9641);


function useRarity() {
  const rarity = (0,_useContract__WEBPACK_IMPORTED_MODULE_1__/* .useRarityContract */ .pn)();
  const summon = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async _class => {
    return new Promise(async (resolve, reject) => {
      try {
        const selectedClass = _class ? _class : rand();
        const tx = await (rarity === null || rarity === void 0 ? void 0 : rarity.summon(selectedClass));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [rarity]);
  const adventure = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async id => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (rarity === null || rarity === void 0 ? void 0 : rarity.adventure(id));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [rarity]);
  const level_up = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async id => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (rarity === null || rarity === void 0 ? void 0 : rarity.level_up(id));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [rarity]);
  const transferFrom = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (from, to, id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (rarity === null || rarity === void 0 ? void 0 : rarity.transferFrom(from, to, id));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [rarity]);
  const isApprovedForAll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (owner, operator) => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await (rarity === null || rarity === void 0 ? void 0 : rarity.isApprovedForAll(owner, operator)));
      } catch (e) {
        reject(false);
      }
    });
  }, [rarity]);
  const setApprovalForAll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async from => {
    return new Promise(async (resolve, reject) => {
      try {
        const tx = await (rarity === null || rarity === void 0 ? void 0 : rarity.setApprovalForAll(from, true));
        await tx.wait();
        resolve();
      } catch (e) {
        reject();
      }
    });
  }, [rarity]);
  return {
    summon,
    adventure,
    level_up,
    transferFrom,
    isApprovedForAll,
    setApprovalForAll
  };
}

function rand() {
  return Math.floor(Math.random() * 11) + 1;
}

/***/ })

};
;