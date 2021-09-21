(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./el.json": [
		3580,
		580
	],
	"./en.json": [
		7161,
		161
	],
	"./tr.json": [
		2079,
		79
	],
	"./zh_CN.json": [
		1655,
		655
	],
	"./zh_TW.json": [
		7344,
		344
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5356;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 6635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SUMMONERS),
/* harmony export */   "P": () => (/* binding */ GLOBAL_DATA)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8074);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const SUMMONERS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query getSummoners($owner: String!) {
        summoners(first: 1000, where: { owner: $owner }) {
            id
        }
    }
`;
const GLOBAL_DATA = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query data {
        globals {
            summoners
            owners
        }
        classes {
            id
            count
        }
        levels {
            id
            count
        }
    }
`;

/***/ }),

/***/ 7306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

;// CONCATENATED MODULE: external "make-plural/plurals"
const plurals_namespaceObject = require("make-plural/plurals");
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
;// CONCATENATED MODULE: external "react-ga4"
const external_react_ga4_namespaceObject = require("react-ga4");
var external_react_ga4_default = /*#__PURE__*/__webpack_require__.n(external_react_ga4_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
// EXTERNAL MODULE: external "@lingui/react"
var react_ = __webpack_require__(2339);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Footer/index.tsx




const Footer = () => {
  const {
    i18n
  } = (0,react_.useLingui)();
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "flex-shrink-0 w-full text-xs pb-14 -my-1 mt-5 md:pb-1",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full p-5",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-4 w-full lg:w-6/12 xl:w-5/12 p-1 md:divide-x-2 md:divide-white gap-1",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
            children: [i18n._(
            /*i18n*/
            i18n._("CREATED BY")), ":"]
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            target: "_blank",
            rel: "noreferrer",
            href: "https://twitter.com/AndreCronjeTech",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "@ANDRECRONJE"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-span-2",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
            className: "md:ml-4",
            children: [i18n._(
            /*i18n*/
            i18n._("BUILT BY")), ":"]
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "md:ml-4",
            target: "_blank",
            rel: "noreferrer",
            href: "https://twitter.com/0xchronos",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "@0xCHRONOS "
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "md:mx-2",
            children: "and"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            target: "_blank",
            rel: "noreferrer",
            href: "https://twitter.com/mat_nadler",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: " @MAT_NADLER"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
            className: "md:ml-4",
            children: [i18n._(
            /*i18n*/
            i18n._("DESIGNED BY")), ":"]
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "md:ml-4",
            target: "_blank",
            rel: "noreferrer",
            href: "https://twitter.com/0xlucid",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "@0xLUCID"
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: external "@headlessui/react"
var external_headlessui_react_ = __webpack_require__(4025);
// EXTERNAL MODULE: ./constants/index.ts
var constants = __webpack_require__(7687);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(417);
// EXTERNAL MODULE: ./hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(9851);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./state/application/actions.ts

let actions_ApplicationModal;

(function (ApplicationModal) {
  ApplicationModal[ApplicationModal["WALLET"] = 0] = "WALLET";
  ApplicationModal[ApplicationModal["SETTINGS"] = 1] = "SETTINGS";
  ApplicationModal[ApplicationModal["SELF_CLAIM"] = 2] = "SELF_CLAIM";
  ApplicationModal[ApplicationModal["CLAIM_POPUP"] = 3] = "CLAIM_POPUP";
  ApplicationModal[ApplicationModal["DELEGATE"] = 4] = "DELEGATE";
  ApplicationModal[ApplicationModal["VOTE"] = 5] = "VOTE";
  ApplicationModal[ApplicationModal["NETWORK"] = 6] = "NETWORK";
})(actions_ApplicationModal || (actions_ApplicationModal = {}));

const updateBlockNumber = (0,toolkit_namespaceObject.createAction)('application/updateBlockNumber');
const actions_setOpenModal = (0,toolkit_namespaceObject.createAction)('application/setOpenModal');
const actions_addPopup = (0,toolkit_namespaceObject.createAction)('application/addPopup');
const actions_removePopup = (0,toolkit_namespaceObject.createAction)('application/removePopup');
;// CONCATENATED MODULE: ./state/application/hooks.ts




function hooks_useBlockNumber() {
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  return (0,external_react_redux_.useSelector)(state => state.application.blockNumber[chainId !== null && chainId !== void 0 ? chainId : -1]);
}
function useModalOpen(modal) {
  const openModal = (0,external_react_redux_.useSelector)(state => state.application.openModal);
  return openModal === modal;
}
function useToggleModal(modal) {
  const open = useModalOpen(modal);
  const dispatch = (0,external_react_redux_.useDispatch)();
  return (0,external_react_.useCallback)(() => dispatch(actions_setOpenModal(open ? null : modal)), [dispatch, modal, open]);
}
function useOpenModal(modal) {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(setOpenModal(modal)), [dispatch, modal]);
}
function useCloseModals() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(setOpenModal(null)), [dispatch]);
}
function useWalletModalToggle() {
  return useToggleModal(actions_ApplicationModal.WALLET);
}
function useNetworkModalToggle() {
  return useToggleModal(ApplicationModal.NETWORK);
}
function useToggleSettingsMenu() {
  return useToggleModal(ApplicationModal.SETTINGS);
}
function useShowClaimPopup() {
  return useModalOpen(ApplicationModal.CLAIM_POPUP);
}
function useToggleShowClaimPopup() {
  return useToggleModal(ApplicationModal.CLAIM_POPUP);
}
function useToggleSelfClaimModal() {
  return useToggleModal(ApplicationModal.SELF_CLAIM);
}
function useToggleDelegateModal() {
  return useToggleModal(ApplicationModal.DELEGATE);
}
function useToggleVoteModal() {
  return useToggleModal(ApplicationModal.VOTE);
} // returns a function that allows adding a popup

function useAddPopup() {
  const dispatch = useDispatch();
  return useCallback((content, key) => {
    dispatch(addPopup({
      content,
      key
    }));
  }, [dispatch]);
} // returns a function that allows removing a popup via its key

function useRemovePopup() {
  const dispatch = useDispatch();
  return useCallback(key => {
    dispatch(removePopup({
      key
    }));
  }, [dispatch]);
} // get the list of active popups

function useActivePopups() {
  const list = useSelector(state => state.application.popupList);
  return useMemo(() => list.filter(item => item.show), [list]);
}
;// CONCATENATED MODULE: ./components/Web3Connect/index.tsx




function Web3Connect() {
  const toggleWalletModal = useWalletModalToggle();
  const {
    error
  } = (0,core_.useWeb3React)();
  return error ? /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex items-center justify-center px-4 py-2 font-semibold text-white border rounded bg-opacity-80 border-red bg-red hover:bg-opacity-100",
    onClick: toggleWalletModal,
    children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: error instanceof core_.UnsupportedChainIdError ? 'You are on the wrong network' : 'Error'
    })
  }) : /*#__PURE__*/jsx_runtime_.jsx("button", {
    onClick: toggleWalletModal,
    className: "uppercase tracking-normal text-lg py-1 px-4 border-2 border-white rounded-2xl",
    children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Connect wallet"
    })
  });
}
;// CONCATENATED MODULE: external "@ethersproject/units"
const units_namespaceObject = require("@ethersproject/units");
;// CONCATENATED MODULE: external "numeral"
const external_numeral_namespaceObject = require("numeral");
// EXTERNAL MODULE: external "@ethersproject/address"
var address_ = __webpack_require__(7398);
;// CONCATENATED MODULE: ./functions/format.ts



const capitalize = s => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const formatK = value => {
  return Numeral(value).format('0.[00]a');
}; // shorten the checksummed version of the input address to have 0x + 4 characters at start and end

function shortenAddress(address, chars = 4) {
  try {
    const parsed = (0,address_.getAddress)(address);
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
  } catch (error) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
} // shorten string to its maximum length using three dots

function shortenString(string, length) {
  if (!string) return '';
  if (length < 5) return string;
  if (string.length <= length) return string;
  return string.slice(0, 4) + '...' + string.slice(string.length - length + 5, string.length);
} // using a currency library here in case we want to add more in future

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});
function formatPercent(percentString) {
  const percent = parseFloat(percentString);

  if (!percent || percent === Infinity || percent === 0) {
    return '0%';
  }

  if (percent < 0.0001 && percent > 0) {
    return '< 0.0001%';
  }

  if (percent < 0 && percent > -0.0001) {
    return '< 0.0001%';
  }

  const fixedPercent = percent.toFixed(2);

  if (fixedPercent === '0.00') {
    return '0%';
  }

  if (Number(fixedPercent) > 0) {
    if (Number(fixedPercent) > 100) {
      return `${percent === null || percent === void 0 ? void 0 : percent.toFixed(0).toLocaleString()}%`;
    } else {
      return `${fixedPercent}%`;
    }
  } else {
    return `${fixedPercent}%`;
  }
}
const formatNumber = (number, usd = false, scale = true, decimals = 0) => {
  if (isNaN(number) || number === '' || number === undefined) {
    return usd ? '$0.00' : '0';
  }

  const num = parseFloat(number);

  if (num > 500000000 && scale) {
    return (usd ? '$' : '') + formatK(num.toFixed(decimals));
  }

  if (num === 0) {
    if (usd) {
      return '$0.00';
    }

    return '0';
  }

  if (num < 0.0001 && num > 0) {
    return usd ? '< $0.0001' : '< 0.0001';
  }

  if (num > 1000 || num < -1000) {
    return (num > 1000 ? '' : '-') + (usd ? '$' : '') + Number(parseFloat(String(Math.abs(num))).toFixed(decimals)).toLocaleString();
  }

  if (usd) {
    if (num < 0.1) {
      return '$' + Number(parseFloat(String(num)).toFixed(4));
    } else {
      const usdString = priceFormatter.format(num);
      return '$' + usdString.slice(1, usdString.length);
    }
  }

  return parseFloat(String(num)).toPrecision(4);
};
function formatNumberScale(number, usd = false) {
  if (isNaN(number) || number === '' || number === undefined) {
    return usd ? '$0.00' : '0';
  }

  const num = parseFloat(number);
  const wholeNumberLength = String(Math.floor(num)).length;
  if (wholeNumberLength >= 13) return (usd ? '$' : '') + (num / Math.pow(10, 12)).toFixed(1) + 'T';
  if (wholeNumberLength >= 10) return (usd ? '$' : '') + (num / Math.pow(10, 9)).toFixed(1) + 'B';
  if (wholeNumberLength >= 7) return (usd ? '$' : '') + (num / Math.pow(10, 6)).toFixed(1) + 'M';
  if (wholeNumberLength >= 4) return (usd ? '$' : '') + (num / Math.pow(10, 3)).toFixed(1) + 'K';

  if (num < 0.0001 && num > 0) {
    return usd ? '< $0.0001' : '< 0.0001';
  }

  return (usd ? '$' : '') + num.toFixed(2);
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
const formatBalance = (value, decimals = 18, maxFraction = 0) => {
  const formatted = formatUnits(value, decimals);

  if (maxFraction > 0) {
    const split = formatted.split('.');

    if (split.length > 1) {
      return split[0] + '.' + split[1].substr(0, maxFraction);
    }
  }

  return formatted;
};
function formatDateAgo(date) {
  const currentDate = new Date();
  const secondsAgo = Math.floor((currentDate.getTime() - date.getTime()) / 1000);
  if (secondsAgo < 60) return `${secondsAgo} Second${secondsAgo === 1 ? '' : 's'} Ago`;
  if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} Minute${secondsAgo / 120 >= 1 ? 's' : ''} Ago`;
  if (secondsAgo < 86400) return `${Math.floor(secondsAgo / 3600)} Hour${secondsAgo / 7200 >= 1 ? 's' : ''} Ago`;
  if (secondsAgo < 2592000) return `${Math.floor(secondsAgo / 86400)} Day${secondsAgo / 172800 >= 1 ? 's' : ''} Ago`;
  if (secondsAgo < 31536000) return `${Math.floor(secondsAgo / 2592000)} Month${secondsAgo / 5184000 >= 1 ? 's' : ''} Ago`;
  return `${Math.floor(secondsAgo / 31536000)} Year${secondsAgo / 63072000 >= 1 ? 's' : ''} Ago`;
}
// EXTERNAL MODULE: ./components/Modal/HeadlessUIModal.tsx
var HeadlessUIModal = __webpack_require__(7698);
// EXTERNAL MODULE: ./components/Modal/ModalHeader.tsx
var ModalHeader = __webpack_require__(9224);
// EXTERNAL MODULE: external "@web3-react/walletconnect-connector"
var walletconnect_connector_ = __webpack_require__(9650);
;// CONCATENATED MODULE: external "@web3-react/injected-connector"
const injected_connector_namespaceObject = require("@web3-react/injected-connector");
;// CONCATENATED MODULE: external "@web3-react/abstract-connector"
const abstract_connector_namespaceObject = require("@web3-react/abstract-connector");
;// CONCATENATED MODULE: external "tiny-invariant"
const external_tiny_invariant_namespaceObject = require("tiny-invariant");
var external_tiny_invariant_default = /*#__PURE__*/__webpack_require__.n(external_tiny_invariant_namespaceObject);
;// CONCATENATED MODULE: ./entities/NetworkConnector.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class RequestError extends Error {
  constructor(message, code, data) {
    super(message);
    this.code = code;
    this.data = data;
  }

}

class MiniRpcProvider {
  constructor(chainId, url, batchWaitTimeMs) {
    _defineProperty(this, "isMetaMask", false);

    _defineProperty(this, "chainId", void 0);

    _defineProperty(this, "url", void 0);

    _defineProperty(this, "host", void 0);

    _defineProperty(this, "path", void 0);

    _defineProperty(this, "batchWaitTimeMs", void 0);

    _defineProperty(this, "nextId", 1);

    _defineProperty(this, "batchTimeoutId", null);

    _defineProperty(this, "batch", []);

    _defineProperty(this, "clearBatch", async () => {
      console.debug('Clearing batch', this.batch);
      const batch = this.batch;
      this.batch = [];
      this.batchTimeoutId = null;
      let response;

      try {
        response = await fetch(this.url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            accept: 'application/json'
          },
          body: JSON.stringify(batch.map(item => item.request))
        });
      } catch (error) {
        batch.forEach(({
          reject
        }) => reject(new Error('Failed to send batch call')));
        return;
      }

      if (!response.ok) {
        batch.forEach(({
          reject
        }) => reject(new RequestError(`${response.status}: ${response.statusText}`, -32000)));
        return;
      }

      let json;

      try {
        json = await response.json();
      } catch (error) {
        batch.forEach(({
          reject
        }) => reject(new Error('Failed to parse JSON response')));
        return;
      }

      const byKey = batch.reduce((memo, current) => {
        memo[current.request.id] = current;
        return memo;
      }, {});

      for (const result of json) {
        const {
          resolve,
          reject,
          request: {
            method
          }
        } = byKey[result.id];

        if (resolve && reject) {
          if ('error' in result) {
            var _result$error, _result$error2, _result$error3;

            reject(new RequestError(result === null || result === void 0 ? void 0 : (_result$error = result.error) === null || _result$error === void 0 ? void 0 : _result$error.message, result === null || result === void 0 ? void 0 : (_result$error2 = result.error) === null || _result$error2 === void 0 ? void 0 : _result$error2.code, result === null || result === void 0 ? void 0 : (_result$error3 = result.error) === null || _result$error3 === void 0 ? void 0 : _result$error3.data));
          } else if ('result' in result) {
            resolve(result.result);
          } else {
            reject(new RequestError(`Received unexpected JSON-RPC response to ${method} request.`, -32000, result));
          }
        }
      }
    });

    _defineProperty(this, "sendAsync", (request, callback) => {
      this.request(request.method, request.params).then(result => callback(null, {
        jsonrpc: '2.0',
        id: request.id,
        result
      })).catch(error => callback(error, null));
    });

    _defineProperty(this, "request", async (method, params) => {
      var _this$batchTimeoutId;

      if (typeof method !== 'string') {
        return this.request(method.method, method.params);
      }

      if (method === 'eth_chainId') {
        return `0x${this.chainId.toString(16)}`;
      }

      const promise = new Promise((resolve, reject) => {
        this.batch.push({
          request: {
            jsonrpc: '2.0',
            id: this.nextId++,
            method,
            params
          },
          resolve,
          reject
        });
      });
      this.batchTimeoutId = (_this$batchTimeoutId = this.batchTimeoutId) !== null && _this$batchTimeoutId !== void 0 ? _this$batchTimeoutId : setTimeout(this.clearBatch, this.batchWaitTimeMs);
      return promise;
    });

    this.chainId = chainId;
    this.url = url;
    const parsed = new URL(url);
    this.host = parsed.host;
    this.path = parsed.pathname; // how long to wait to batch calls

    this.batchWaitTimeMs = batchWaitTimeMs !== null && batchWaitTimeMs !== void 0 ? batchWaitTimeMs : 50;
  }

}

class NetworkConnector extends abstract_connector_namespaceObject.AbstractConnector {
  constructor({
    urls,
    defaultChainId
  }) {
    external_tiny_invariant_default()(defaultChainId || Object.keys(urls).length === 1, 'defaultChainId is a required argument with >1 url');
    super({
      supportedChainIds: Object.keys(urls).map(k => Number(k))
    });

    _defineProperty(this, "providers", void 0);

    _defineProperty(this, "currentChainId", void 0);

    this.currentChainId = defaultChainId || Number(Object.keys(urls)[0]);
    this.providers = Object.keys(urls).reduce((accumulator, chainId) => {
      accumulator[Number(chainId)] = new MiniRpcProvider(Number(chainId), urls[Number(chainId)]);
      return accumulator;
    }, {});
  }

  get provider() {
    return this.providers[this.currentChainId];
  }

  async activate() {
    return {
      provider: this.providers[this.currentChainId],
      chainId: this.currentChainId,
      account: null
    };
  }

  async getProvider() {
    return this.providers[this.currentChainId];
  }

  async getChainId() {
    return this.currentChainId;
  }

  async getAccount() {
    return null;
  }

  deactivate() {
    return;
  }

}
;// CONCATENATED MODULE: ./config/rpc.ts

const rpc = {
  [constants/* ChainId.MAINNET */.a_.MAINNET]: 'https://matic-mainnet.chainstacklabs.com'
};
/* harmony default export */ const config_rpc = (rpc);
;// CONCATENATED MODULE: ./config/wallets.ts




const network = new NetworkConnector({
  defaultChainId: 137,
  urls: config_rpc
});
const supportedChainIds = Object.values(constants/* ChainId */.a_);
const injected = new injected_connector_namespaceObject.InjectedConnector({
  supportedChainIds
});
const SUPPORTED_WALLETS = {
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: async () => {
      const WalletConnectConnector = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9650, 23))).WalletConnectConnector;
      return new WalletConnectConnector({
        rpc: config_rpc,
        bridge: 'https://bridge.walletconnect.org',
        qrcode: true,
        supportedChainIds: [137 // Matic
        ]
      });
    },
    name: 'WalletConnect',
    iconName: 'wallet-connect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  }
};
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Web3Status/index.tsx

















function Web3StatusInner() {
  const {
    account
  } = (0,core_.useWeb3React)();
  const toggleWalletModal = useWalletModalToggle();

  if (account) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "web3-status-connected",
      className: "flex items-center px-3 py-2 border-white border-2 rounded-lg text-sm rounded-lg text-secondary",
      onClick: toggleWalletModal,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mr-2 ",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: shortenAddress(account)
        })
      })
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx(Web3Connect, {});
  }
}

function Web3Status() {
  const {
    i18n
  } = (0,react_.useLingui)();
  const {
    active,
    account,
    connector,
    activate,
    error
  } = (0,core_.useWeb3React)();
  const open = useModalOpen(actions_ApplicationModal.WALLET);
  const toggleModal = useWalletModalToggle();
  const contextNetwork = (0,core_.useWeb3React)(constants/* NetworkContextName */.AQ);

  if (!contextNetwork.active && !active) {
    return null;
  }

  const tryActivation = async connector => {
    var _conn$walletConnectPr, _conn$walletConnectPr2;

    let name = '';
    let conn = typeof connector === 'function' ? await connector() : connector;
    Object.keys(SUPPORTED_WALLETS).map(key => {
      if (connector === SUPPORTED_WALLETS[key].connector) {
        return name = SUPPORTED_WALLETS[key].name;
      }

      return true;
    });

    if (conn instanceof walletconnect_connector_.WalletConnectConnector && (_conn$walletConnectPr = conn.walletConnectProvider) !== null && _conn$walletConnectPr !== void 0 && (_conn$walletConnectPr2 = _conn$walletConnectPr.wc) !== null && _conn$walletConnectPr2 !== void 0 && _conn$walletConnectPr2.uri) {
      conn.walletConnectProvider = undefined;
    }

    conn && activate(conn, undefined, true).then(toggleModal).catch(error => {
      if (error instanceof core_.UnsupportedChainIdError) {
        activate(conn);
      }
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Web3StatusInner, {}), account && /*#__PURE__*/jsx_runtime_.jsx("div", {}), !account && !error && /*#__PURE__*/jsx_runtime_.jsx(HeadlessUIModal/* default */.Z, {
      isOpen: open,
      onDismiss: toggleModal,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "bg-background-end rounded-lg border-2 border-white",
        children: [/*#__PURE__*/jsx_runtime_.jsx(ModalHeader/* default */.Z, {
          title: i18n._(
          /*i18n*/
          i18n._("choose a wallet")),
          onClose: toggleModal
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "grid grid-cols-1 text-white p-4 pb-8 gap-5",
          children: Object.keys(SUPPORTED_WALLETS).map(k => {
            const option = SUPPORTED_WALLETS[k];
            return /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => {
                if (option) {
                  option.connector !== connector && !option.href && option && tryActivation(option.connector);
                }
              },
              className: "uppercase border-2 border-white rounded-md mx-5 hover:bg-background-start",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row justify-between items-center p-2 md:mx-16",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                  children: option.name
                }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: '/img/wallets/' + option.iconName,
                  alt: option.name,
                  width: 48,
                  height: 48
                })]
              })
            }, option.name);
          })
        })]
      })
    })]
  });
}
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(4879);
// EXTERNAL MODULE: ./functions/validate.ts
var validate = __webpack_require__(6269);
// EXTERNAL MODULE: ./hooks/useContract.ts + 11 modules
var useContract = __webpack_require__(9641);
;// CONCATENATED MODULE: ./state/multicall/utils.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { utils_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function utils_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function toCallKey(call) {
  let key = `${call.address}-${call.callData}`;

  if (call.gasRequired) {
    if (!Number.isSafeInteger(call.gasRequired)) {
      throw new Error(`Invalid number: ${call.gasRequired}`);
    }

    key += `-${call.gasRequired}`;
  }

  return key;
}
function parseCallKey(callKey) {
  const pcs = callKey.split('-');

  if (![2, 3].includes(pcs.length)) {
    throw new Error(`Invalid call key: ${callKey}`);
  }

  return _objectSpread({
    address: pcs[0],
    callData: pcs[1]
  }, pcs[2] ? {
    gasRequired: Number.parseInt(pcs[2])
  } : {});
}
;// CONCATENATED MODULE: ./state/multicall/actions.ts

const addMulticallListeners = (0,toolkit_namespaceObject.createAction)('multicall/addMulticallListeners');
const removeMulticallListeners = (0,toolkit_namespaceObject.createAction)('multicall/removeMulticallListeners');
const fetchingMulticallResults = (0,toolkit_namespaceObject.createAction)('multicall/fetchingMulticallResults');
const errorFetchingMulticallResults = (0,toolkit_namespaceObject.createAction)('multicall/errorFetchingMulticallResults');
const updateMulticallResults = (0,toolkit_namespaceObject.createAction)('multicall/updateMulticallResults');
;// CONCATENATED MODULE: ./state/hooks.ts

const useAppDispatch = () => (0,external_react_redux_.useDispatch)();
const useAppSelector = external_react_redux_.useSelector;
// EXTERNAL MODULE: external "@ethersproject/bignumber"
var bignumber_ = __webpack_require__(1446);
;// CONCATENATED MODULE: ./state/multicall/hooks.ts
function hooks_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function hooks_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hooks_ownKeys(Object(source), true).forEach(function (key) { hooks_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hooks_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hooks_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function isMethodArg(x) {
  return bignumber_.BigNumber.isBigNumber(x) || ['string', 'number'].indexOf(typeof x) !== -1;
}

function isValidMethodArgs(x) {
  return x === undefined || Array.isArray(x) && x.every(xi => isMethodArg(xi) || Array.isArray(xi) && xi.every(isMethodArg));
}

const INVALID_RESULT = {
  valid: false,
  blockNumber: undefined,
  data: undefined
}; // use this options object

const NEVER_RELOAD = {
  blocksPerFetch: Infinity
}; // the lowest level call for subscribing to contract data

function useCallsData(calls, {
  blocksPerFetch
} = {
  blocksPerFetch: 1
}) {
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const callResults = useAppSelector(state => state.multicall.callResults);
  const dispatch = useAppDispatch();
  const serializedCallKeys = (0,external_react_.useMemo)(() => {
    var _calls$filter$map$sor, _calls$filter, _calls$filter$map;

    return JSON.stringify((_calls$filter$map$sor = calls === null || calls === void 0 ? void 0 : (_calls$filter = calls.filter(c => Boolean(c))) === null || _calls$filter === void 0 ? void 0 : (_calls$filter$map = _calls$filter.map(toCallKey)) === null || _calls$filter$map === void 0 ? void 0 : _calls$filter$map.sort()) !== null && _calls$filter$map$sor !== void 0 ? _calls$filter$map$sor : []);
  }, [calls]); // update listeners when there is an actual change that persists for at least 100ms

  (0,external_react_.useEffect)(() => {
    const callKeys = JSON.parse(serializedCallKeys);
    if (!chainId || callKeys.length === 0) return undefined;
    const calls = callKeys.map(key => parseCallKey(key));
    dispatch(addMulticallListeners({
      chainId,
      calls,
      options: {
        blocksPerFetch
      }
    }));
    return () => {
      dispatch(removeMulticallListeners({
        chainId,
        calls,
        options: {
          blocksPerFetch
        }
      }));
    };
  }, [chainId, dispatch, blocksPerFetch, serializedCallKeys]);
  return (0,external_react_.useMemo)(() => calls.map(call => {
    var _callResults$chainId;

    if (!chainId || !call) return INVALID_RESULT;
    const result = (_callResults$chainId = callResults[chainId]) === null || _callResults$chainId === void 0 ? void 0 : _callResults$chainId[toCallKey(call)];
    let data;

    if (result !== null && result !== void 0 && result.data && (result === null || result === void 0 ? void 0 : result.data) !== '0x') {
      data = result.data;
    }

    return {
      valid: true,
      data,
      blockNumber: result === null || result === void 0 ? void 0 : result.blockNumber
    };
  }), [callResults, calls, chainId]);
}

const INVALID_CALL_STATE = {
  valid: false,
  result: undefined,
  loading: false,
  syncing: false,
  error: false
};
const LOADING_CALL_STATE = {
  valid: true,
  result: undefined,
  loading: true,
  syncing: true,
  error: false
};

function toCallState(callResult, contractInterface, fragment, latestBlockNumber) {
  if (!callResult) return INVALID_CALL_STATE;
  const {
    valid,
    data,
    blockNumber
  } = callResult;
  if (!valid) return INVALID_CALL_STATE;
  if (valid && !blockNumber) return LOADING_CALL_STATE;
  if (!contractInterface || !fragment || !latestBlockNumber) return LOADING_CALL_STATE;
  const success = data && data.length > 2;
  const syncing = (blockNumber !== null && blockNumber !== void 0 ? blockNumber : 0) < latestBlockNumber;
  let result = undefined;

  if (success && data) {
    try {
      result = contractInterface.decodeFunctionResult(fragment, data);
    } catch (error) {
      console.debug('Result data parsing failed', fragment, data);
      return {
        valid: true,
        loading: false,
        error: true,
        syncing,
        result
      };
    }
  }

  return {
    valid: true,
    loading: false,
    syncing,
    result: result,
    error: !success
  };
}

function useSingleContractMultipleData(contract, methodName, callInputs, options, gasRequired) {
  const fragment = (0,external_react_.useMemo)(() => {
    var _contract$interface;

    return contract === null || contract === void 0 ? void 0 : (_contract$interface = contract.interface) === null || _contract$interface === void 0 ? void 0 : _contract$interface.getFunction(methodName);
  }, [contract, methodName]);
  const calls = (0,external_react_.useMemo)(() => contract && fragment && (callInputs === null || callInputs === void 0 ? void 0 : callInputs.length) > 0 && callInputs.every(inputs => isValidMethodArgs(inputs)) ? callInputs.map(inputs => {
    return hooks_objectSpread({
      address: contract.address,
      callData: contract.interface.encodeFunctionData(fragment, inputs)
    }, gasRequired ? {
      gasRequired
    } : {});
  }) : [], [contract, fragment, callInputs, gasRequired]);
  const results = useCallsData(calls, options);
  const latestBlockNumber = hooks_useBlockNumber();
  return (0,external_react_.useMemo)(() => {
    return results.map(result => toCallState(result, contract === null || contract === void 0 ? void 0 : contract.interface, fragment, latestBlockNumber));
  }, [fragment, contract, results, latestBlockNumber]);
}
function useMultipleContractSingleData(addresses, contractInterface, methodName, callInputs, options, gasRequired) {
  const fragment = useMemo(() => contractInterface.getFunction(methodName), [contractInterface, methodName]);
  const callData = useMemo(() => fragment && isValidMethodArgs(callInputs) ? contractInterface.encodeFunctionData(fragment, callInputs) : undefined, [callInputs, contractInterface, fragment]);
  const calls = useMemo(() => fragment && addresses && addresses.length > 0 && callData ? addresses.map(address => {
    return address && callData ? hooks_objectSpread({
      address,
      callData
    }, gasRequired ? {
      gasRequired
    } : {}) : undefined;
  }) : [], [addresses, callData, fragment, gasRequired]);
  const results = useCallsData(calls, options);
  const latestBlockNumber = useBlockNumber();
  return useMemo(() => {
    return results.map(result => toCallState(result, contractInterface, fragment, latestBlockNumber));
  }, [fragment, results, contractInterface, latestBlockNumber]);
}
function useSingleCallResult(contract, methodName, inputs, options, gasRequired) {
  const fragment = useMemo(() => {
    var _contract$interface2;

    return contract === null || contract === void 0 ? void 0 : (_contract$interface2 = contract.interface) === null || _contract$interface2 === void 0 ? void 0 : _contract$interface2.getFunction(methodName);
  }, [contract, methodName]);
  const calls = useMemo(() => {
    return contract && fragment && isValidMethodArgs(inputs) ? [hooks_objectSpread({
      address: contract.address,
      callData: contract.interface.encodeFunctionData(fragment, inputs)
    }, gasRequired ? {
      gasRequired
    } : {})] : [];
  }, [contract, fragment, inputs, gasRequired]);
  const result = useCallsData(calls, options)[0];
  const latestBlockNumber = useBlockNumber();
  return useMemo(() => {
    return toCallState(result, contract === null || contract === void 0 ? void 0 : contract.interface, fragment, latestBlockNumber);
  }, [result, contract, fragment, latestBlockNumber]);
}
;// CONCATENATED MODULE: ./state/wallet/hooks.ts






function useETHBalances(uncheckedAddresses) {
  const {
    chainId
  } = (0,useActiveWeb3React/* default */.Z)();
  const multicallContract = (0,useContract/* useMulticall2Contract */.JD)();
  const addresses = (0,external_react_.useMemo)(() => uncheckedAddresses ? uncheckedAddresses.map(validate/* isAddress */.UJ).filter(a => a !== false).sort() : [], [uncheckedAddresses]);
  const results = useSingleContractMultipleData(multicallContract, 'getEthBalance', addresses.map(address => [address]));
  return (0,external_react_.useMemo)(() => addresses.reduce((memo, address, i) => {
    var _results$i, _results$i$result;

    const value = results === null || results === void 0 ? void 0 : (_results$i = results[i]) === null || _results$i === void 0 ? void 0 : (_results$i$result = _results$i.result) === null || _results$i$result === void 0 ? void 0 : _results$i$result[0];

    if (value && chainId) {
      const balance = parseInt(external_ethers_.utils.formatUnits(value, 'ether'));
      memo[address] = balance.toFixed(4);
    }

    return memo;
  }, {}), [addresses, chainId, results]);
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "cookie-cutter"
const external_cookie_cutter_namespaceObject = require("cookie-cutter");
var external_cookie_cutter_default = /*#__PURE__*/__webpack_require__.n(external_cookie_cutter_namespaceObject);
// EXTERNAL MODULE: ./functions/classNames.ts
var classNames = __webpack_require__(2225);
;// CONCATENATED MODULE: ./components/LanguageSwitch/index.tsx









const LANG_TO_COUNTRY = {
  en: 'English',
  zh_CN: '简体中文',
  zh_TW: '繁體中文',
  tr: 'Türkçe',
  el: 'Ελληνικά'
};
function LangSwitcher() {
  const {
    locale,
    locales,
    asPath
  } = (0,router_namespaceObject.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(external_headlessui_react_.Menu, {
    as: "div",
    className: "relative inline-block text-right ml-3",
    children: ({
      open
    }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_headlessui_react_.Menu.Button, {
          className: "inline-flex justify-center w-full p-1.5 text-xs font-bold border rounded shadow-sm text-primary border-white",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: LANG_TO_COUNTRY[locale]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_headlessui_react_.Transition, {
        show: open,
        as: external_react_.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_headlessui_react_.Menu.Items, {
          className: "absolute right-0 w-36 mt-2 rounded shadow-lg bg-background-contrast",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "p-1",
            children: locales.map(locale => {
              return /*#__PURE__*/jsx_runtime_.jsx(external_headlessui_react_.Menu.Item, {
                children: ({
                  active
                }) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: asPath,
                  locale: locale,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    className: (0,classNames/* classNames */.A)(active ? 'bg-background-start text-high-emphesis' : 'text-primary', 'group flex items-center p-2 text-sm rounded font-bold'),
                    onClick: () => external_cookie_cutter_default().set('NEXT_LOCALE', locale),
                    children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                      className: "ml-2",
                      children: LANG_TO_COUNTRY[locale]
                    })
                  })
                })
              }, locale);
            })
          })
        })
      })]
    })
  });
}
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(6533);
var external_react_hot_toast_default = /*#__PURE__*/__webpack_require__.n(external_react_hot_toast_);
// EXTERNAL MODULE: ./hooks/useRarityHelper.ts
var useRarityHelper = __webpack_require__(4932);
;// CONCATENATED MODULE: ./components/Modal/modals/Donate.tsx









function DonateModal({
  open,
  closeFunction
}) {
  const {
    i18n
  } = (0,react_.useLingui)();
  const {
    0: amount,
    1: setAmount
  } = (0,external_react_.useState)('0');
  const {
    donate
  } = (0,useRarityHelper/* default */.Z)();

  async function submit() {
    const parsedAmount = external_ethers_.utils.parseUnits(amount.toString(), 'ether').toHexString();
    await external_react_hot_toast_default().promise(donate(parsedAmount.toString()), {
      loading: /*#__PURE__*/jsx_runtime_.jsx("b", {
        children: i18n._(
        /*i18n*/
        i18n._("Donating! Thanks!"))
      }),
      success: /*#__PURE__*/jsx_runtime_.jsx("b", {
        children: i18n._(
        /*i18n*/
        i18n._("Success"))
      }),
      error: /*#__PURE__*/jsx_runtime_.jsx("b", {
        children: i18n._(
        /*i18n*/
        i18n._("Failed"))
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(HeadlessUIModal/* default */.Z, {
    isOpen: open,
    onDismiss: closeFunction,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bg-background-end rounded-lg border-2 border-white",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ModalHeader/* default */.Z, {
        title: i18n._(
        /*i18n*/
        i18n._("donate")),
        onClose: closeFunction
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center text-white p-2 pb-4 gap-5",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: i18n._(
          /*i18n*/
          i18n._("Thanks for your donations!"))
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-center text-white pb-8 gap-5",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: i18n._(
          /*i18n*/
          i18n._("Set an amount (in FTM)"))
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "number",
          className: "p-2 mt-2 text-background-end rounded-lg text-center",
          onChange: v => setAmount(v.target.value)
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center text-white pb-8 gap-5",
        children: amount !== '0' ? /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "text-white bg-green border-white border-2 rounded-lg uppercase px-2 py-1",
          onClick: () => submit(),
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: i18n._(
            /*i18n*/
            i18n._("donate"))
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "opacity-50 text-white bg-green border-white border-2 rounded-lg uppercase px-2 py-1",
          onClick: () => submit(),
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: i18n._(
            /*i18n*/
            i18n._("donate"))
          })
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Header/index.tsx













function AppBar() {
  var _useETHBalances;

  const {
    i18n
  } = (0,react_.useLingui)();
  const {
    account,
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const userEthBalance = (_useETHBalances = useETHBalances(account ? [account] : [])) === null || _useETHBalances === void 0 ? void 0 : _useETHBalances[account !== null && account !== void 0 ? account : ''];

  function play() {
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/play",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "cursor-pointer hover:border-white border-transparent border-2 rounded-xl py-1 px-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: i18n._(
          /*i18n*/
          i18n._("Play"))
        })
      })
    });
  }

  function summoners() {
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/summoners",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "cursor-pointer hover:border-white border-transparent border-2 rounded-xl py-1 px-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: i18n._(
          /*i18n*/
          i18n._("Summoners"))
        })
      })
    });
  }

  function analytics() {
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/analytics",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "cursor-pointer hover:border-white border-transparent border-2 rounded-xl py-1 px-2 mx-1",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: i18n._(
          /*i18n*/
          i18n._("Analytics"))
        })
      })
    });
  }

  function names() {
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "https://names.rarity.game",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "cursor-pointer hover:border-white border-transparent border-2 rounded-xl py-1 px-2 mx-1",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: i18n._(
          /*i18n*/
          i18n._("names"))
        })
      })
    });
  }

  function market() {
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "https://paintswap.finance/nfts/collections/0xc73e1237a5a9ba5b0f790b6580f32d04a727dc19",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "cursor-pointer hover:border-white border-transparent border-2 rounded-xl py-1 px-2 mx-1",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: i18n._(
          /*i18n*/
          i18n._("market"))
        })
      })
    });
  }

  const {
    0: modal,
    1: setModal
  } = (0,external_react_.useState)(false);

  function close() {
    setModal(false);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "flex-shrink-0 w-full z-30",
    children: [/*#__PURE__*/jsx_runtime_.jsx(DonateModal, {
      open: modal,
      closeFunction: close
    }), /*#__PURE__*/jsx_runtime_.jsx(external_headlessui_react_.Popover, {
      as: "nav",
      className: "w-full bg-transparent header-border-b",
      children: ({
        open
      }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "px-4 py-4",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center z-10",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "uppercase cursor-pointer text-center tracking-widest text-xl",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                    children: "RARITY"
                  }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
                    children: "Adventure"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "hidden md:block sm:ml-2",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "flex uppercase",
                  children: [summoners(), play(), analytics(), names(), market(), account && /*#__PURE__*/jsx_runtime_.jsx("button", {
                    onClick: () => setModal(true),
                    className: "uppercase border-contrast border-transparent border-2 rounded-xl py-1 px-2 mx-1",
                    children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                      children: i18n._(
                      /*i18n*/
                      i18n._("Donate"))
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "fixed bottom-0 right-0 z-40 flex flex-row items-center justify-center w-full p-4 lg:w-auto bg-black lg:relative lg:p-0 lg:bg-transparent",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "flex items-center justify-between w-full space-x-2 sm:justify-end z-20",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "w-auto mx-auto flex items-center rounded p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto z-20",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "hidden md:inline-block mx-2",
                    children: /*#__PURE__*/jsx_runtime_.jsx(LangSwitcher, {})
                  }), account && chainId && userEthBalance && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "px-3 mx-3 py-2 text-primary text-bold border-white border-2 rounded-lg",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                        children: [userEthBalance, " FTM"]
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(Web3Status, {})]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex -mr-2 md:hidden",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_headlessui_react_.Popover.Button, {
                className: "inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-high-emphesis focus:outline-none",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "sr-only",
                  children: i18n._(
                  /*i18n*/
                  i18n._("Open Menu"))
                }), open ? /*#__PURE__*/jsx_runtime_.jsx("svg", {
                  className: "block w-6 h-6",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                }) : /*#__PURE__*/jsx_runtime_.jsx("svg", {
                  className: "block w-6 h-6",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M4 6h16M4 12h16M4 18h16"
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_headlessui_react_.Popover.Panel, {
          className: "sm:hidden uppercase",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col px-4 pt-2 pb-3 space-y-1 text-center",
            children: [summoners(), play(), analytics(), names(), market(), account && /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => setModal(true),
              className: "uppercase border-contrast border-transparent border-2 rounded-xl py-1 px-2 mx-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: i18n._(
                /*i18n*/
                i18n._("Donate"))
              })
            })]
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const Header = (AppBar);
;// CONCATENATED MODULE: ./components/Main/index.tsx


const Main = ({
  children
}) => /*#__PURE__*/jsx_runtime_.jsx("main", {
  className: 'flex flex-col items-center justify-start flex-grow w-full h-full',
  style: {
    height: 'max-content'
  },
  children: children
});

/* harmony default export */ const components_Main = (Main);
;// CONCATENATED MODULE: ./layouts/Default/index.tsx








const pixelmix_fonts = ["en", "zh_CN", "zh_TW"];

const Layout = ({
  children
}) => {
  const {
    locale
  } = (0,router_namespaceObject.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      fontFamily: pixelmix_fonts.indexOf(locale) !== -1 ? "pixelmix" : "Noto Mono"
    },
    className: "bg z-0 flex flex-col items-center w-full h-screen pb-16 lg:pb-0 text-white",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Main, {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_hot_toast_.Toaster, {
      containerClassName: "z-30"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
};

/* harmony default export */ const Default = (Layout);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: ./state/application/reducer.ts


const initialState = {
  blockNumber: {},
  popupList: [],
  openModal: null
};
/* harmony default export */ const reducer = ((0,toolkit_namespaceObject.createReducer)(initialState, builder => builder.addCase(updateBlockNumber, (state, action) => {
  const {
    chainId,
    blockNumber
  } = action.payload;

  if (typeof state.blockNumber[chainId] !== 'number') {
    state.blockNumber[chainId] = blockNumber;
  } else {
    state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId]);
  }
}).addCase(actions_setOpenModal, (state, action) => {
  state.openModal = action.payload;
}).addCase(actions_addPopup, (state, {
  payload: {
    content,
    key,
    removeAfterMs = 15000
  }
}) => {
  state.popupList = (key ? state.popupList.filter(popup => popup.key !== key) : state.popupList).concat([{
    key: key || (0,toolkit_namespaceObject.nanoid)(),
    show: true,
    content,
    removeAfterMs
  }]);
}).addCase(actions_removePopup, (state, {
  payload: {
    key
  }
}) => {
  state.popupList.forEach(p => {
    if (p.key === key) {
      p.show = false;
    }
  });
})));
;// CONCATENATED MODULE: ./state/multicall/reducer.ts



const reducer_initialState = {
  callResults: {}
};
/* harmony default export */ const multicall_reducer = ((0,toolkit_namespaceObject.createReducer)(reducer_initialState, builder => builder.addCase(addMulticallListeners, (state, {
  payload: {
    calls,
    chainId,
    options: {
      blocksPerFetch
    }
  }
}) => {
  var _listeners$chainId;

  const listeners = state.callListeners ? state.callListeners : state.callListeners = {};
  listeners[chainId] = (_listeners$chainId = listeners[chainId]) !== null && _listeners$chainId !== void 0 ? _listeners$chainId : {};
  calls.forEach(call => {
    var _listeners$chainId$ca, _listeners$chainId$ca2;

    const callKey = toCallKey(call);
    listeners[chainId][callKey] = (_listeners$chainId$ca = listeners[chainId][callKey]) !== null && _listeners$chainId$ca !== void 0 ? _listeners$chainId$ca : {};
    listeners[chainId][callKey][blocksPerFetch] = ((_listeners$chainId$ca2 = listeners[chainId][callKey][blocksPerFetch]) !== null && _listeners$chainId$ca2 !== void 0 ? _listeners$chainId$ca2 : 0) + 1;
  });
}).addCase(removeMulticallListeners, (state, {
  payload: {
    chainId,
    calls,
    options: {
      blocksPerFetch
    }
  }
}) => {
  const listeners = state.callListeners ? state.callListeners : state.callListeners = {};
  if (!listeners[chainId]) return;
  calls.forEach(call => {
    const callKey = toCallKey(call);
    if (!listeners[chainId][callKey]) return;
    if (!listeners[chainId][callKey][blocksPerFetch]) return;

    if (listeners[chainId][callKey][blocksPerFetch] === 1) {
      delete listeners[chainId][callKey][blocksPerFetch];
    } else {
      listeners[chainId][callKey][blocksPerFetch]--;
    }
  });
}).addCase(fetchingMulticallResults, (state, {
  payload: {
    chainId,
    fetchingBlockNumber,
    calls
  }
}) => {
  var _state$callResults$ch;

  state.callResults[chainId] = (_state$callResults$ch = state.callResults[chainId]) !== null && _state$callResults$ch !== void 0 ? _state$callResults$ch : {};
  calls.forEach(call => {
    const callKey = toCallKey(call);
    const current = state.callResults[chainId][callKey];

    if (!current) {
      state.callResults[chainId][callKey] = {
        fetchingBlockNumber
      };
    } else {
      var _current$fetchingBloc;

      if (((_current$fetchingBloc = current.fetchingBlockNumber) !== null && _current$fetchingBloc !== void 0 ? _current$fetchingBloc : 0) >= fetchingBlockNumber) return;
      state.callResults[chainId][callKey].fetchingBlockNumber = fetchingBlockNumber;
    }
  });
}).addCase(errorFetchingMulticallResults, (state, {
  payload: {
    fetchingBlockNumber,
    chainId,
    calls
  }
}) => {
  var _state$callResults$ch2;

  state.callResults[chainId] = (_state$callResults$ch2 = state.callResults[chainId]) !== null && _state$callResults$ch2 !== void 0 ? _state$callResults$ch2 : {};
  calls.forEach(call => {
    const callKey = toCallKey(call);
    const current = state.callResults[chainId][callKey];
    if (!current) return; // only should be dispatched if we are already fetching

    if (current.fetchingBlockNumber === fetchingBlockNumber) {
      delete current.fetchingBlockNumber;
      current.data = null;
      current.blockNumber = fetchingBlockNumber;
    }
  });
}).addCase(updateMulticallResults, (state, {
  payload: {
    chainId,
    results,
    blockNumber
  }
}) => {
  var _state$callResults$ch3;

  state.callResults[chainId] = (_state$callResults$ch3 = state.callResults[chainId]) !== null && _state$callResults$ch3 !== void 0 ? _state$callResults$ch3 : {};
  Object.keys(results).forEach(callKey => {
    var _current$blockNumber;

    const current = state.callResults[chainId][callKey];
    if (((_current$blockNumber = current === null || current === void 0 ? void 0 : current.blockNumber) !== null && _current$blockNumber !== void 0 ? _current$blockNumber : 0) > blockNumber) return;
    state.callResults[chainId][callKey] = {
      data: results[callKey],
      blockNumber
    };
  });
})));
;// CONCATENATED MODULE: ./state/summoners/actions.ts

const updateSummoners = (0,toolkit_namespaceObject.createAction)('summoners/updateSummoners');
;// CONCATENATED MODULE: ./state/summoners/reducer.ts


const summoners_reducer_initialState = {
  data: []
};
/* harmony default export */ const summoners_reducer = ((0,toolkit_namespaceObject.createReducer)(summoners_reducer_initialState, builder => builder.addCase(updateSummoners, (state, action) => {
  state.data = action.payload;
})));
;// CONCATENATED MODULE: ./state/reducer.ts




const reducer_reducer = (0,toolkit_namespaceObject.combineReducers)({
  application: reducer,
  multicall: multicall_reducer,
  summoners: summoners_reducer
});
/* harmony default export */ const state_reducer = (reducer_reducer);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: ./state/index.ts




let store;
const PERSISTED_KEYS = [];
const persistConfig = {
  key: 'root',
  whitelist: PERSISTED_KEYS,
  storage: (storage_default())
};
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, state_reducer);

function makeStore(preloadedState = undefined) {
  return (0,toolkit_namespaceObject.configureStore)({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: true,
      immutableCheck: true,
      serializableCheck: {
        ignoredActions: [external_redux_persist_namespaceObject.FLUSH, external_redux_persist_namespaceObject.REHYDRATE, external_redux_persist_namespaceObject.PAUSE, external_redux_persist_namespaceObject.PERSIST, external_redux_persist_namespaceObject.PURGE, external_redux_persist_namespaceObject.REGISTER]
      }
    }),
    devTools: false,
    preloadedState
  });
}

const getOrCreateStore = () => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : makeStore(undefined); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (store) {
    // Reset the current store
    store = makeStore(undefined);
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
store = getOrCreateStore(); // export function useStore(preloadedState) {
//   const store = useMemo(() => getOrCreateStore(preloadedState), [preloadedState])
//   return store
// }

/* harmony default export */ const state = (store);
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
// EXTERNAL MODULE: ./components/Loader/index.tsx
var Loader = __webpack_require__(1800);
// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(2047);
;// CONCATENATED MODULE: ./hooks/useEagerConnect.ts





function useEagerConnect() {
  const {
    activate,
    active
  } = (0,core_.useWeb3React)(); // specifically using useWeb3ReactCore because of what this hook does

  const {
    0: tried,
    1: setTried
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    injected.isAuthorized().then(isAuthorized => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        if (external_react_device_detect_.isMobile && window.ethereum) {
          activate(injected, undefined, true).catch(() => {
            setTried(true);
          });
        } else {
          setTried(true);
        }
      }
    });
  }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))
  // if the connection worked, wait until we get confirmation of that to flip the flag

  (0,external_react_.useEffect)(() => {
    if (active) {
      setTried(true);
    }
  }, [active]);
  return tried;
}

/* harmony default export */ const hooks_useEagerConnect = (useEagerConnect);
;// CONCATENATED MODULE: ./hooks/useInactiveListener.ts



/**
 * Use for network and injected - logs user in
 * and out after checking what network theyre on
 */

function useInactiveListener(suppress = false) {
  const {
    active,
    error,
    activate
  } = (0,core_.useWeb3React)(); // specifically using useWeb3React because of what this hook does

  (0,external_react_.useEffect)(() => {
    const {
      ethereum
    } = window;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = () => {
        // eat errors
        activate(injected, undefined, true).catch(error => {
          console.error('Failed to activate after chain changed', error);
        });
      };

      const handleAccountsChanged = accounts => {
        if (accounts.length > 0) {
          // eat errors
          activate(injected, undefined, true).catch(error => {
            console.error('Failed to activate after accounts changed', error);
          });
        }
      };

      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }

    return undefined;
  }, [active, error, suppress, activate]);
}

/* harmony default export */ const hooks_useInactiveListener = (useInactiveListener);
;// CONCATENATED MODULE: ./components/Web3ReactManager/index.tsx









function Web3ReactManager({
  children
}) {
  const {
    active
  } = (0,core_.useWeb3React)();
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork
  } = (0,core_.useWeb3React)(constants/* NetworkContextName */.AQ); // try to eagerly connect to an injected provider, if it exists and has granted access already

  const triedEager = hooks_useEagerConnect(); // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate itd

  (0,external_react_.useEffect)(() => {
    if (triedEager && !networkActive && !networkError && !active) {
      activateNetwork(network);
    }
  }, [triedEager, networkActive, networkError, activateNetwork, active]); // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists

  hooks_useInactiveListener(!triedEager); // handle delayed loader state

  const {
    0: showLoader,
    1: setShowLoader
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 600);
    return () => {
      clearTimeout(timeout);
    };
  }, []); // on page load, do nothing until we've tried to connect to the injected connector

  if (!triedEager) {
    return null;
  } // if the account context isn't active, and there's an error on the network context, it's an irrecoverable error


  if (!active && networkError) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-center h-80",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-secondary",
        children: "Oops! An unknown error occurred. Please refresh the page, or visit from another browser or device"
      })
    });
  } // if neither context is active, spin


  if (!active && !networkActive) {
    return showLoader ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-center h-80",
      children: /*#__PURE__*/jsx_runtime_.jsx(Loader/* default */.Z, {})
    }) : null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: children
  });
}
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: external "@ethersproject/providers"
const providers_namespaceObject = require("@ethersproject/providers");
;// CONCATENATED MODULE: ./functions/getLibrary.ts

function getLibrary(provider) {
  const library = new providers_namespaceObject.Web3Provider(provider, typeof provider.chainId === 'number' ? provider.chainId : typeof provider.chainId === 'string' ? parseInt(provider.chainId) : 'any');
  library.pollingInterval = 15000;
  return library;
}
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./components/Dots/index.tsx





function Dots({
  children = /*#__PURE__*/jsx_runtime_.jsx("span", {}),
  className
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "989976520",
      children: [".dots.jsx-989976520::after{content:'.';}"]
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "jsx-989976520" + " " + ((0,classNames/* classNames */.A)('after:inline-block dots after:animate-ellipsis after:w-4 after:text-left', className) || ""),
      children: children
    })]
  });
}
;// CONCATENATED MODULE: ./hooks/useDebounce.ts
 // modified from https://usehooks.com/useDebounce/

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = (0,external_react_.useState)(value);
  (0,external_react_.useEffect)(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
;// CONCATENATED MODULE: ./hooks/useIsWindowVisible.ts

const VISIBILITY_STATE_SUPPORTED = typeof document !== 'undefined' && 'visibilityState' in document;

function isWindowVisible() {
  return !VISIBILITY_STATE_SUPPORTED || document.visibilityState !== 'hidden';
}
/**
 * Returns whether the window is currently visible to the user.
 */


function useIsWindowVisible() {
  const {
    0: focused,
    1: setFocused
  } = (0,external_react_.useState)(isWindowVisible());
  const listener = (0,external_react_.useCallback)(() => {
    setFocused(isWindowVisible());
  }, [setFocused]);
  (0,external_react_.useEffect)(() => {
    if (!VISIBILITY_STATE_SUPPORTED) return undefined;
    document.addEventListener('visibilitychange', listener);
    return () => {
      document.removeEventListener('visibilitychange', listener);
    };
  }, [listener]);
  return focused;
}
;// CONCATENATED MODULE: ./state/application/updater.ts






function Updater() {
  const {
    library,
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const windowVisible = useIsWindowVisible();
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    chainId,
    blockNumber: null
  });
  const blockNumberCallback = (0,external_react_.useCallback)(blockNumber => {
    setState(state => {
      if (chainId === state.chainId) {
        if (typeof state.blockNumber !== 'number') return {
          chainId,
          blockNumber
        };
        return {
          chainId,
          blockNumber: Math.max(blockNumber, state.blockNumber)
        };
      }

      return state;
    });
  }, [chainId, setState]); // attach/detach listeners

  (0,external_react_.useEffect)(() => {
    if (!library || !chainId || !windowVisible) return undefined;
    setState({
      chainId,
      blockNumber: null
    });
    library.getBlockNumber().then(blockNumberCallback).catch(error => console.error(`Failed to get block number for chainId: ${chainId}`, error));
    library.on('block', blockNumberCallback);
    return () => {
      library.removeListener('block', blockNumberCallback);
    };
  }, [dispatch, chainId, library, blockNumberCallback, windowVisible]);
  const debouncedState = useDebounce(state, 100);
  (0,external_react_.useEffect)(() => {
    if (!debouncedState.chainId || !debouncedState.blockNumber || !windowVisible) return;
    dispatch(updateBlockNumber({
      chainId: debouncedState.chainId,
      blockNumber: debouncedState.blockNumber
    }));
  }, [windowVisible, dispatch, debouncedState.blockNumber, debouncedState.chainId]);
  return null;
}
;// CONCATENATED MODULE: ./functions/retry.ts
function retry_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function waitRandom(min, max) {
  return wait(min + Math.round(Math.random() * Math.max(0, max - min)));
}
/**
 * This error is thrown if the function is cancelled before completing
 */


class CancelledError extends Error {
  constructor() {
    super('Cancelled');

    retry_defineProperty(this, "isCancelledError", true);
  }

}
/**
 * Throw this error if the function should retry
 */

class RetryableError extends Error {
  constructor(...args) {
    super(...args);

    retry_defineProperty(this, "isRetryableError", true);
  }

}

/**
 * Retries the function that returns the promise until the promise successfully resolves up to n retries
 * @param fn function to retry
 * @param n how many times to retry
 * @param minWait min wait between retries in ms
 * @param maxWait max wait between retries in ms
 */
function retry(fn, {
  n,
  minWait,
  maxWait
}) {
  let completed = false;
  let rejectCancelled;
  const promise = new Promise(async (resolve, reject) => {
    rejectCancelled = reject;

    while (true) {
      let result;

      try {
        result = await fn();

        if (!completed) {
          resolve(result);
          completed = true;
        }

        break;
      } catch (error) {
        if (completed) {
          break;
        }

        if (n <= 0 || !error.isRetryableError) {
          reject(error);
          completed = true;
          break;
        }

        n--;
      }

      await waitRandom(minWait, maxWait);
    }
  });
  return {
    promise,
    cancel: () => {
      if (completed) return;
      completed = true;
      rejectCancelled(new CancelledError());
    }
  };
}
// EXTERNAL MODULE: ./functions/array/chunkArray.ts
var chunkArray = __webpack_require__(5145);
;// CONCATENATED MODULE: ./state/multicall/updater.tsx










const DEFAULT_GAS_REQUIRED = 1000000;
/**
 * Fetches a chunk of calls, enforcing a minimum block number constraint
 * @param multicall multicall contract to fetch against
 * @param chunk chunk of calls to make
 * @param minBlockNumber minimum block number of the result set
 */

async function fetchChunk(multicall, chunk, blockNumber) {
  console.debug('Fetching chunk', chunk, blockNumber);
  console.log('33333333');

  try {
    console.log('22222222222');
    const {
      returnData
    } = await multicall.callStatic.tryBlockAndAggregate(false, chunk.map(obj => {
      var _obj$gasRequired;

      return {
        target: obj.address,
        callData: obj.callData,
        gasLimit: (_obj$gasRequired = obj.gasRequired) !== null && _obj$gasRequired !== void 0 ? _obj$gasRequired : 1000000
      };
    }), {
      blockTag: blockNumber
    });
    console.log('111111111111111');

    if (false) {}

    return returnData;
  } catch (error) {
    var _error$message;

    if (error.code === -32000 || ((_error$message = error.message) === null || _error$message === void 0 ? void 0 : _error$message.indexOf('header not found')) !== -1) {
      throw new RetryableError(`header not found for block number ${blockNumber}`);
    }

    console.error('Failed to fetch chunk', error);
    throw error;
  }
}
/**
 * From the current all listeners state, return each call key mapped to the
 * minimum number of blocks per fetch. This is how often each key must be fetched.
 * @param allListeners the all listeners state
 * @param chainId the current chain id
 */


function activeListeningKeys(allListeners, chainId) {
  if (!allListeners || !chainId) return {};
  const listeners = allListeners[chainId];
  if (!listeners) return {};
  return Object.keys(listeners).reduce((memo, callKey) => {
    const keyListeners = listeners[callKey];
    memo[callKey] = Object.keys(keyListeners).filter(key => {
      const blocksPerFetch = parseInt(key);
      if (blocksPerFetch <= 0) return false;
      return keyListeners[blocksPerFetch] > 0;
    }).reduce((previousMin, current) => {
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
  const results = callResults[chainId]; // no results at all, load everything

  if (!results) return Object.keys(listeningKeys);
  return Object.keys(listeningKeys).filter(callKey => {
    const blocksPerFetch = listeningKeys[callKey];
    const data = callResults[chainId][callKey]; // no data, must fetch

    if (!data) return true;
    const minDataBlockNumber = latestBlockNumber - (blocksPerFetch - 1); // already fetching it for a recent enough block, don't refetch it

    if (data.fetchingBlockNumber && data.fetchingBlockNumber >= minDataBlockNumber) return false; // if data is older than minDataBlockNumber, fetch it

    return !data.blockNumber || data.blockNumber < minDataBlockNumber;
  });
}
function updater_Updater() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.multicall); // wait for listeners to settle before triggering updates

  const debouncedListeners = useDebounce(state.callListeners, 100);
  const latestBlockNumber = hooks_useBlockNumber();
  const {
    chainId
  } = (0,useActiveWeb3React/* useActiveWeb3React */.a)();
  const multicall2Contract = (0,useContract/* useMulticall2Contract */.JD)();
  const cancellations = (0,external_react_.useRef)();
  const listeningKeys = (0,external_react_.useMemo)(() => {
    return activeListeningKeys(debouncedListeners, chainId);
  }, [debouncedListeners, chainId]);
  const unserializedOutdatedCallKeys = (0,external_react_.useMemo)(() => {
    return outdatedListeningKeys(state.callResults, listeningKeys, chainId, latestBlockNumber);
  }, [chainId, state.callResults, listeningKeys, latestBlockNumber]);
  const serializedOutdatedCallKeys = (0,external_react_.useMemo)(() => JSON.stringify(unserializedOutdatedCallKeys.sort()), [unserializedOutdatedCallKeys]);
  (0,external_react_.useEffect)(() => {
    if (!latestBlockNumber || !chainId || !multicall2Contract) return;
    const outdatedCallKeys = JSON.parse(serializedOutdatedCallKeys);
    if (outdatedCallKeys.length === 0) return;
    const calls = outdatedCallKeys.map(key => parseCallKey(key));
    const chunkedCalls = (0,chunkArray/* chunkArray */.F3)(calls);

    if (cancellations.current && cancellations.current.blockNumber !== latestBlockNumber) {
      cancellations.current.cancellations.forEach(c => c());
    }

    dispatch(fetchingMulticallResults({
      calls,
      chainId,
      fetchingBlockNumber: latestBlockNumber
    }));
    cancellations.current = {
      blockNumber: latestBlockNumber,
      cancellations: chunkedCalls.map((chunk, index) => {
        const {
          cancel,
          promise
        } = retry(() => fetchChunk(multicall2Contract, chunk, latestBlockNumber), {
          n: Infinity,
          minWait: 1000,
          maxWait: 2500
        });
        promise.then(returnData => {
          // accumulates the length of all previous indices
          const firstCallKeyIndex = chunkedCalls.slice(0, index).reduce((memo, curr) => memo + curr.length, 0);
          const lastCallKeyIndex = firstCallKeyIndex + returnData.length;
          const slice = outdatedCallKeys.slice(firstCallKeyIndex, lastCallKeyIndex); // split the returned slice into errors and success

          const {
            erroredCalls,
            results
          } = slice.reduce((memo, callKey, i) => {
            if (returnData[i].success) {
              var _returnData$i$returnD;

              memo.results[callKey] = (_returnData$i$returnD = returnData[i].returnData) !== null && _returnData$i$returnD !== void 0 ? _returnData$i$returnD : null;
            } else {
              memo.erroredCalls.push(parseCallKey(callKey));
            }

            return memo;
          }, {
            erroredCalls: [],
            results: {}
          }); // dispatch any new results

          if (Object.keys(results).length > 0) dispatch(updateMulticallResults({
            chainId,
            results,
            blockNumber: latestBlockNumber
          })); // dispatch any errored calls

          if (erroredCalls.length > 0) {
            console.debug('Calls errored in fetch', erroredCalls);
            dispatch(errorFetchingMulticallResults({
              calls: erroredCalls,
              chainId,
              fetchingBlockNumber: latestBlockNumber
            }));
          }
        }).catch(error => {
          if (error.isCancelledError) {
            console.debug('Cancelled fetch for blockNumber', latestBlockNumber, chunk, chainId);
            return;
          }

          console.error('Failed to fetch multicall chunk', chunk, chainId, error);
          dispatch(errorFetchingMulticallResults({
            calls: chunk,
            chainId,
            fetchingBlockNumber: latestBlockNumber
          }));
        });
        return cancel;
      })
    };
  }, [chainId, multicall2Contract, dispatch, serializedOutdatedCallKeys, latestBlockNumber]);
  return null;
}
// EXTERNAL MODULE: ./apollo/index.ts
var apollo = __webpack_require__(6635);
;// CONCATENATED MODULE: ./hooks/useRarityLibrary.ts



function useRarityLibrary() {
  const lib = (0,useContract/* useRarityLibContract */.DN)();
  const summoners_full = (0,external_react_.useCallback)(async ids => {
    return new Promise(async (resolve, reject) => {
      try {
        const summoners = await (lib === null || lib === void 0 ? void 0 : lib.summoners_full(ids));
        resolve(summoners.map((value, i) => {
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
              _class: parseInt(value.base.class.toString()),
              _level: parseInt(value.base.level.toString()),
              _log: parseInt(value.base.log.toString()),
              _name: value.base.name,
              _xp: parseInt(external_ethers_.utils.formatUnits(value.base.xp.toString(), 'ether'))
            },
            gold: {
              balance: parseInt(external_ethers_.utils.formatUnits(value.gold.balance, 'ether')),
              claimable: parseInt(external_ethers_.utils.formatUnits(value.gold.claimable, 'ether')),
              claimed: parseInt(external_ethers_.utils.formatUnits(value.gold.claimed, 'ether'))
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
      } catch (e) {
        reject();
      }
    });
  }, [lib]);
  return {
    summoners_full
  };
}
;// CONCATENATED MODULE: ./state/summoners/updater.ts









function summoners_updater_Updater() {
  const {
    library,
    chainId,
    account
  } = (0,useActiveWeb3React/* default */.Z)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const windowVisible = useIsWindowVisible();
  const {
    data,
    loading,
    error
  } = (0,client_.useQuery)(apollo/* SUMMONERS */.t, {
    variables: {
      owner: account ? account.toString().toLowerCase() : ''
    }
  });
  const {
    0: summoners,
    1: setSummoners
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    if (!library || !chainId || !account || loading || error || !windowVisible) return;
    const summoners = data.summoners.map(s => {
      return s.id;
    });
    setSummoners(summoners);
  }, [library, chainId, account, loading, error, windowVisible]);
  const {
    summoners_full
  } = useRarityLibrary();
  const fetch_summoners_data = (0,external_react_.useCallback)(async () => {
    // If the user has lest than 50 summoners fetch the data and return
    if (summoners.length <= 50) {
      const full_data = await summoners_full(summoners);
      dispatch(updateSummoners(full_data));
      return;
    } else {
      const chunks = (0,chunkArray/* chunkArrayByNumber */.bX)(summoners, 50);
      let full_data = [];

      for (let chunk of chunks) {
        const chunk_data = await summoners_full(chunk);
        full_data = full_data.concat(chunk_data);
      }

      dispatch(updateSummoners(full_data));
      return;
    }
  }, [summoners_full, summoners]);
  (0,external_react_.useEffect)(() => {
    if (!library || !chainId || !account || !windowVisible) return;
    fetch_summoners_data();
  }, [summoners, windowVisible, fetch_summoners_data, library, chainId, account]);
  return null;
}
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "@lingui/core"
const external_lingui_core_namespaceObject = require("@lingui/core");
;// CONCATENATED MODULE: ./pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























const Web3ProviderNetwork = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 838).then(__webpack_require__.bind(__webpack_require__, 8838)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8838)],
    modules: ["_app.tsx -> " + '../components/Web3ProviderNetwork']
  }
});
const client = new client_.ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/ytumanov/scarcity',
  cache: new client_.InMemoryCache()
});

if (false) {}

function MyApp({
  Component,
  pageProps
}) {
  const {
    locale
  } = (0,router_namespaceObject.useRouter)();
  (0,external_react_.useEffect)(() => {
    async function load(locale) {
      external_lingui_core_namespaceObject.i18n.loadLocaleData(locale, {
        plurals: plurals_namespaceObject[locale.split('_')[0]]
      }); // Load fallback messages

      const {
        messages
      } = await __webpack_require__(5356)(`./${locale}.json`);
      external_lingui_core_namespaceObject.i18n.load(locale, messages);
      external_lingui_core_namespaceObject.i18n.activate(locale);
    }

    load(locale); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);
  (0,external_react_.useEffect)(() => {
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      external_react_ga4_default().initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
    }
  }, []); // Allows for conditionally setting a provider to be hoisted per page

  const Provider = Component.Provider || external_react_.Fragment; // Allows for conditionally setting a layout to be hoisted per page

  const Layout = Component.Layout || Default; // Allows for conditionally setting a guard to be hoisted per page

  const Guard = Component.Guard || external_react_.Fragment;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Rarity Game | Free to mint D&D blockchain based game"
      }, "title"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Free to mint D&D blockchain based game"
      }, "description"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "application-name",
        content: "Rarity Game | Free to mint D&D blockchain based game"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "apple-mobile-web-app-title",
        content: "Rarity Game | Free to mint D&D blockchain based game"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "format-detection",
        content: "telephone=no"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "mobile-web-app-capable",
        content: "yes"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-tap-highlight",
        content: "no"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#3E4A94"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "app"
      }, "twitter:card"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:title",
        content: "Rarity Game | Free to mint D&D blockchain based game"
      }, "twitter:title"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:url",
        content: "https://rarity.game"
      }, "twitter:url"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:description",
        content: "Free to mint D&D blockchain based game"
      }, "twitter:description"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:image",
        content: "https://rarity.game/manifest-icon-192.png"
      }, "twitter:image"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:creator",
        content: "@RarityGame"
      }, "twitter:creator"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }, "og:type"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: "Rarity Game | Free to mint D&D blockchain based game"
      }, "og:site_name"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: "https://rarity.game"
      }, "og:url"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "https://rarity.game/apple-icon-180.png"
      }, "og:image"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: "Free to mint D&D blockchain based game"
      }, "og:description")]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.I18nProvider, {
      i18n: external_lingui_core_namespaceObject.i18n,
      forceRenderOnLocaleChange: false,
      children: /*#__PURE__*/jsx_runtime_.jsx(client_.ApolloProvider, {
        client: client,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Web3ReactProvider, {
          getLibrary: getLibrary,
          children: /*#__PURE__*/jsx_runtime_.jsx(Web3ProviderNetwork, {
            getLibrary: getLibrary,
            children: /*#__PURE__*/jsx_runtime_.jsx(Web3ReactManager, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
                store: state,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.PersistGate, {
                  loading: /*#__PURE__*/jsx_runtime_.jsx(Dots, {
                    children: "loading"
                  }),
                  persistor: persistor,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [/*#__PURE__*/jsx_runtime_.jsx(Updater, {}), /*#__PURE__*/jsx_runtime_.jsx(updater_Updater, {}), /*#__PURE__*/jsx_runtime_.jsx(summoners_updater_Updater, {})]
                  }), /*#__PURE__*/jsx_runtime_.jsx(Provider, {
                    children: /*#__PURE__*/jsx_runtime_.jsx(Layout, {
                      children: /*#__PURE__*/jsx_runtime_.jsx(Guard, {
                        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
                      })
                    })
                  })]
                })
              })
            })
          })
        })
      })
    })]
  });
}

/***/ }),

/***/ 8074:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 7398:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/address");

/***/ }),

/***/ 1446:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ 6148:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/constants");

/***/ }),

/***/ 4440:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ 4025:
/***/ ((module) => {

"use strict";
module.exports = require("@headlessui/react");

/***/ }),

/***/ 2339:
/***/ ((module) => {

"use strict";
module.exports = require("@lingui/react");

/***/ }),

/***/ 417:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/core");

/***/ }),

/***/ 9650:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/walletconnect-connector");

/***/ }),

/***/ 4879:
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2047:
/***/ ((module) => {

"use strict";
module.exports = require("react-device-detect");

/***/ }),

/***/ 6533:
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,142,641,800,590,698], () => (__webpack_exec__(7306)));
module.exports = __webpack_exports__;

})();