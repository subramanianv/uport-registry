contract UportRegistryV2 {

  uint public version;
  address public previousPublishedVersion;

  struct AssociatedData {
    bytes ipfsHash;
    bytes signingPublicKey; //secp256k1 public key
    bytes32 encryptionPublicKey; //curve25519 public key
  }

  mapping(address => AssociatedData) public associatedDataLookup;

  // TODO: This maps a signing key to the corresponding identifier
  // Needed when we start using Proxy contracts
  //mapping(address => address) public keyToIdentifier;

  function UportRegistryV2(address _previousPublishedVersion) {
    version = 2;
    previousPublishedVersion = _previousPublishedVersion;
  }

  function setSigningKey(bytes _signingPublicKey) {

    // TODO: Should include a signature of something like
    // sha3(uport identifier, user-specified timestamp)
    // and a requirement is the block.timestamp is close to
    // the user-defined timestamp.

    //if (address(sha3(_signingPublicKey)) == msg.sender) {
      associatedDataLookup[msg.sender].signingPublicKey = _signingPublicKey;
    //}
  }

  function getSigningKey(address personaAddress) constant returns(bytes) {
    return associatedDataLookup[personaAddress].signingPublicKey;
  }

  function setEncryptionKey(bytes32 _encryptionPublicKey) {
    associatedDataLookup[msg.sender].encryptionPublicKey = _encryptionPublicKey;
  }

  function getEncryptionKey(address personaAddress) constant returns(bytes32) {
    return associatedDataLookup[personaAddress].encryptionPublicKey;
  }

  function setAttributes(bytes ipfsHash) {
    associatedDataLookup[msg.sender].ipfsHash = ipfsHash;
  }

  function getAttributes(address personaAddress) constant returns(bytes) {
    return associatedDataLookup[personaAddress].ipfsHash;
  }
}
