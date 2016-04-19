"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var UportRegistryV2 = (function (_Pudding) {
    _inherits(UportRegistryV2, _Pudding);

    function UportRegistryV2() {
      _classCallCheck(this, UportRegistryV2);

      _get(Object.getPrototypeOf(UportRegistryV2.prototype), "constructor", this).apply(this, arguments);
    }

    return UportRegistryV2;
  })(Pudding);

  ;

  // Set up specific data for this class.
  UportRegistryV2.abi = [{ "constant": false, "inputs": [{ "name": "_encryptionPublicKey", "type": "bytes32" }], "name": "setEncryptionKey", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "personaAddress", "type": "address" }], "name": "getAttributes", "outputs": [{ "name": "", "type": "bytes" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "personaAddress", "type": "address" }], "name": "getEncryptionKey", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": true, "inputs": [], "name": "version", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "previousPublishedVersion", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "ipfsHash", "type": "bytes" }], "name": "setAttributes", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_signingPublicKey", "type": "bytes" }], "name": "setSigningKey", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "associatedDataLookup", "outputs": [{ "name": "ipfsHash", "type": "bytes" }, { "name": "signingPublicKey", "type": "bytes" }, { "name": "encryptionPublicKey", "type": "bytes32" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "personaAddress", "type": "address" }], "name": "getSigningKey", "outputs": [{ "name": "", "type": "bytes" }], "type": "function" }, { "inputs": [{ "name": "_previousPublishedVersion", "type": "address" }], "type": "constructor" }];
  UportRegistryV2.binary = "60606040526040516020806105c7833950608060405251600260005560018054600160a060020a031916821790555061058b8061003c6000396000f3606060405236156100775760e060020a600035046305c0ea298114610079578063446d5aa41461009f5780635284a82e1461011e57806354fd4d50146101475780636104464f146101505780636737c877146101625780638c59702014610207578063a14baca1146102ca578063d12b2039146102ed575b005b33600160a060020a03166000908152600260208190526040909120600435910155610077565b61037260043560408051602081810183526000808352600160a060020a038516815260028083528451918590208054600181161561010002600019011691909104601f8101849004840283018401909552848252929390929183018282801561057f5780601f106105545761010080835404028352916020019161057f565b6103e0600435600160a060020a038116600090815260026020819052604090912001545b919050565b6103e060005481565b6103f2600154600160a060020a031681565b6040805160206004803580820135601f810184900484028501840190955284845261007794919360249390929184019190819084018382808284375094965050505050505033600160a060020a03166000908152600260208181526040832084518154828652948390209194600181161561010002600019011693909304601f9081018390048201939286019083901061051b57805160ff19168380011785556102ae565b6040805160206004803580820135601f810184900484028501840190955284845261007794919360249390929184019190819084018382808284375094965050505050505033600160a060020a03166000908152600260208181526040832084516001918201805481875295849020909592831615610100026000190190921693909304601f9081018390048201939286019083901061051b57805160ff19168380011785555b5061054b9291505b8082111561055057600081556001016102b6565b61040f600435600260208190526000918252604090912090810154600182019083565b61037260043560408051602081810183526000808352600160a060020a038516815260028083528451918590206001908101805491821615610100026000190190911691909104601f8101849004840283018401909552848252929390929183018282801561057f5780601f106105545761010080835404028352916020019161057f565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103d25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b604080519081018290526060808252845460026001821615610100026000190190911604908201819052819060208201906080830190879080156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b5050838103825285546002600182161561010002600019019091160480825260209190910190869080156105095780601f106104de57610100808354040283529160200191610509565b820191906000526020600020905b8154815290600101906020018083116104ec57829003601f168201915b50509550505050505060405180910390f35b828001600101855582156102ae579182015b828111156102ae57825182600050559160200191906001019061052d565b505050565b5090565b820191906000526020600020905b81548152906001019060200180831161056257829003601f168201915b5050505050905061014256";

  if ("" != "") {
    UportRegistryV2.address = "";

    // Backward compatibility; Deprecated.
    UportRegistryV2.deployed_address = "";
  }

  UportRegistryV2.generated_with = "1.0.3";
  UportRegistryV2.contract_name = "UportRegistryV2";

  return UportRegistryV2;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.UportRegistryV2 = factory;
}