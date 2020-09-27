var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.message = (function() {

        /**
         * Namespace message.
         * @memberof com
         * @namespace
         */
        var message = {};

        message.S_EXCEPTION_MSG = (function() {

            /**
             * Properties of a S_EXCEPTION_MSG.
             * @memberof com.message
             * @interface IS_EXCEPTION_MSG
             * @property {number|null} [code] S_EXCEPTION_MSG code
             */

            /**
             * Constructs a new S_EXCEPTION_MSG.
             * @memberof com.message
             * @classdesc Represents a S_EXCEPTION_MSG.
             * @implements IS_EXCEPTION_MSG
             * @constructor
             * @param {com.message.IS_EXCEPTION_MSG=} [properties] Properties to set
             */
            function S_EXCEPTION_MSG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_EXCEPTION_MSG code.
             * @member {number} code
             * @memberof com.message.S_EXCEPTION_MSG
             * @instance
             */
            S_EXCEPTION_MSG.prototype.code = 0;

            /**
             * Encodes the specified S_EXCEPTION_MSG message. Does not implicitly {@link com.message.S_EXCEPTION_MSG.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_EXCEPTION_MSG
             * @static
             * @param {com.message.IS_EXCEPTION_MSG} message S_EXCEPTION_MSG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_EXCEPTION_MSG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                return writer;
            };

            /**
             * Decodes a S_EXCEPTION_MSG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_EXCEPTION_MSG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_EXCEPTION_MSG} S_EXCEPTION_MSG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_EXCEPTION_MSG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_EXCEPTION_MSG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_EXCEPTION_MSG;
        })();

        message.CROSS_S_EXCEPTION_MSG = (function() {

            /**
             * Properties of a CROSS_S_EXCEPTION_MSG.
             * @memberof com.message
             * @interface ICROSS_S_EXCEPTION_MSG
             * @property {number|Long|null} [playerId] CROSS_S_EXCEPTION_MSG playerId
             * @property {number|null} [code] CROSS_S_EXCEPTION_MSG code
             */

            /**
             * Constructs a new CROSS_S_EXCEPTION_MSG.
             * @memberof com.message
             * @classdesc Represents a CROSS_S_EXCEPTION_MSG.
             * @implements ICROSS_S_EXCEPTION_MSG
             * @constructor
             * @param {com.message.ICROSS_S_EXCEPTION_MSG=} [properties] Properties to set
             */
            function CROSS_S_EXCEPTION_MSG(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CROSS_S_EXCEPTION_MSG playerId.
             * @member {number|Long} playerId
             * @memberof com.message.CROSS_S_EXCEPTION_MSG
             * @instance
             */
            CROSS_S_EXCEPTION_MSG.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * CROSS_S_EXCEPTION_MSG code.
             * @member {number} code
             * @memberof com.message.CROSS_S_EXCEPTION_MSG
             * @instance
             */
            CROSS_S_EXCEPTION_MSG.prototype.code = 0;

            /**
             * Encodes the specified CROSS_S_EXCEPTION_MSG message. Does not implicitly {@link com.message.CROSS_S_EXCEPTION_MSG.verify|verify} messages.
             * @function encode
             * @memberof com.message.CROSS_S_EXCEPTION_MSG
             * @static
             * @param {com.message.ICROSS_S_EXCEPTION_MSG} message CROSS_S_EXCEPTION_MSG message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CROSS_S_EXCEPTION_MSG.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
                return writer;
            };

            /**
             * Decodes a CROSS_S_EXCEPTION_MSG message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.CROSS_S_EXCEPTION_MSG
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.CROSS_S_EXCEPTION_MSG} CROSS_S_EXCEPTION_MSG
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CROSS_S_EXCEPTION_MSG.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.CROSS_S_EXCEPTION_MSG();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.code = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CROSS_S_EXCEPTION_MSG;
        })();

        message.C_USER_LOGIN = (function() {

            /**
             * Properties of a C_USER_LOGIN.
             * @memberof com.message
             * @interface IC_USER_LOGIN
             * @property {string|null} [mobile] C_USER_LOGIN mobile
             * @property {string|null} [password] C_USER_LOGIN password
             * @property {string|null} [sparam] C_USER_LOGIN sparam
             * @property {number|null} [fromGame] C_USER_LOGIN fromGame
             */

            /**
             * Constructs a new C_USER_LOGIN.
             * @memberof com.message
             * @classdesc Represents a C_USER_LOGIN.
             * @implements IC_USER_LOGIN
             * @constructor
             * @param {com.message.IC_USER_LOGIN=} [properties] Properties to set
             */
            function C_USER_LOGIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_USER_LOGIN mobile.
             * @member {string} mobile
             * @memberof com.message.C_USER_LOGIN
             * @instance
             */
            C_USER_LOGIN.prototype.mobile = "";

            /**
             * C_USER_LOGIN password.
             * @member {string} password
             * @memberof com.message.C_USER_LOGIN
             * @instance
             */
            C_USER_LOGIN.prototype.password = "";

            /**
             * C_USER_LOGIN sparam.
             * @member {string} sparam
             * @memberof com.message.C_USER_LOGIN
             * @instance
             */
            C_USER_LOGIN.prototype.sparam = "";

            /**
             * C_USER_LOGIN fromGame.
             * @member {number} fromGame
             * @memberof com.message.C_USER_LOGIN
             * @instance
             */
            C_USER_LOGIN.prototype.fromGame = 0;

            /**
             * Encodes the specified C_USER_LOGIN message. Does not implicitly {@link com.message.C_USER_LOGIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_USER_LOGIN
             * @static
             * @param {com.message.IC_USER_LOGIN} message C_USER_LOGIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_USER_LOGIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.password != null && message.hasOwnProperty("password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                if (message.sparam != null && message.hasOwnProperty("sparam"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.sparam);
                if (message.fromGame != null && message.hasOwnProperty("fromGame"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fromGame);
                return writer;
            };

            /**
             * Decodes a C_USER_LOGIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_USER_LOGIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_USER_LOGIN} C_USER_LOGIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_USER_LOGIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_USER_LOGIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.password = reader.string();
                        break;
                    case 3:
                        message.sparam = reader.string();
                        break;
                    case 4:
                        message.fromGame = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_USER_LOGIN;
        })();

        message.C_USER_LOGIN_VERIFY_CODE = (function() {

            /**
             * Properties of a C_USER_LOGIN_VERIFY_CODE.
             * @memberof com.message
             * @interface IC_USER_LOGIN_VERIFY_CODE
             * @property {string|null} [mobile] C_USER_LOGIN_VERIFY_CODE mobile
             * @property {string|null} [verifyCode] C_USER_LOGIN_VERIFY_CODE verifyCode
             * @property {string|null} [sparam] C_USER_LOGIN_VERIFY_CODE sparam
             * @property {number|null} [fromGame] C_USER_LOGIN_VERIFY_CODE fromGame
             */

            /**
             * Constructs a new C_USER_LOGIN_VERIFY_CODE.
             * @memberof com.message
             * @classdesc Represents a C_USER_LOGIN_VERIFY_CODE.
             * @implements IC_USER_LOGIN_VERIFY_CODE
             * @constructor
             * @param {com.message.IC_USER_LOGIN_VERIFY_CODE=} [properties] Properties to set
             */
            function C_USER_LOGIN_VERIFY_CODE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_USER_LOGIN_VERIFY_CODE mobile.
             * @member {string} mobile
             * @memberof com.message.C_USER_LOGIN_VERIFY_CODE
             * @instance
             */
            C_USER_LOGIN_VERIFY_CODE.prototype.mobile = "";

            /**
             * C_USER_LOGIN_VERIFY_CODE verifyCode.
             * @member {string} verifyCode
             * @memberof com.message.C_USER_LOGIN_VERIFY_CODE
             * @instance
             */
            C_USER_LOGIN_VERIFY_CODE.prototype.verifyCode = "";

            /**
             * C_USER_LOGIN_VERIFY_CODE sparam.
             * @member {string} sparam
             * @memberof com.message.C_USER_LOGIN_VERIFY_CODE
             * @instance
             */
            C_USER_LOGIN_VERIFY_CODE.prototype.sparam = "";

            /**
             * C_USER_LOGIN_VERIFY_CODE fromGame.
             * @member {number} fromGame
             * @memberof com.message.C_USER_LOGIN_VERIFY_CODE
             * @instance
             */
            C_USER_LOGIN_VERIFY_CODE.prototype.fromGame = 0;

            /**
             * Encodes the specified C_USER_LOGIN_VERIFY_CODE message. Does not implicitly {@link com.message.C_USER_LOGIN_VERIFY_CODE.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_USER_LOGIN_VERIFY_CODE
             * @static
             * @param {com.message.IC_USER_LOGIN_VERIFY_CODE} message C_USER_LOGIN_VERIFY_CODE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_USER_LOGIN_VERIFY_CODE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.verifyCode != null && message.hasOwnProperty("verifyCode"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.verifyCode);
                if (message.sparam != null && message.hasOwnProperty("sparam"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.sparam);
                if (message.fromGame != null && message.hasOwnProperty("fromGame"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fromGame);
                return writer;
            };

            /**
             * Decodes a C_USER_LOGIN_VERIFY_CODE message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_USER_LOGIN_VERIFY_CODE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_USER_LOGIN_VERIFY_CODE} C_USER_LOGIN_VERIFY_CODE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_USER_LOGIN_VERIFY_CODE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_USER_LOGIN_VERIFY_CODE();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.verifyCode = reader.string();
                        break;
                    case 3:
                        message.sparam = reader.string();
                        break;
                    case 4:
                        message.fromGame = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_USER_LOGIN_VERIFY_CODE;
        })();

        message.S_USER_LOGIN = (function() {

            /**
             * Properties of a S_USER_LOGIN.
             * @memberof com.message
             * @interface IS_USER_LOGIN
             * @property {number|Long|null} [playerId] S_USER_LOGIN playerId
             * @property {number|null} [fromGame] S_USER_LOGIN fromGame
             */

            /**
             * Constructs a new S_USER_LOGIN.
             * @memberof com.message
             * @classdesc Represents a S_USER_LOGIN.
             * @implements IS_USER_LOGIN
             * @constructor
             * @param {com.message.IS_USER_LOGIN=} [properties] Properties to set
             */
            function S_USER_LOGIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_USER_LOGIN playerId.
             * @member {number|Long} playerId
             * @memberof com.message.S_USER_LOGIN
             * @instance
             */
            S_USER_LOGIN.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * S_USER_LOGIN fromGame.
             * @member {number} fromGame
             * @memberof com.message.S_USER_LOGIN
             * @instance
             */
            S_USER_LOGIN.prototype.fromGame = 0;

            /**
             * Encodes the specified S_USER_LOGIN message. Does not implicitly {@link com.message.S_USER_LOGIN.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_USER_LOGIN
             * @static
             * @param {com.message.IS_USER_LOGIN} message S_USER_LOGIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_USER_LOGIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.fromGame != null && message.hasOwnProperty("fromGame"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fromGame);
                return writer;
            };

            /**
             * Decodes a S_USER_LOGIN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_USER_LOGIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_USER_LOGIN} S_USER_LOGIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_USER_LOGIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_USER_LOGIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.fromGame = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_USER_LOGIN;
        })();

        message.C_LOGIN_REGISTER = (function() {

            /**
             * Properties of a C_LOGIN_REGISTER.
             * @memberof com.message
             * @interface IC_LOGIN_REGISTER
             * @property {string|null} [mobile] C_LOGIN_REGISTER mobile
             * @property {string|null} [inviteCode] C_LOGIN_REGISTER inviteCode
             * @property {string|null} [password] C_LOGIN_REGISTER password
             * @property {string|null} [rePassword] C_LOGIN_REGISTER rePassword
             * @property {string|null} [verifyCode] C_LOGIN_REGISTER verifyCode
             * @property {string|null} [sparam] C_LOGIN_REGISTER sparam
             * @property {number|null} [fromGame] C_LOGIN_REGISTER fromGame
             */

            /**
             * Constructs a new C_LOGIN_REGISTER.
             * @memberof com.message
             * @classdesc Represents a C_LOGIN_REGISTER.
             * @implements IC_LOGIN_REGISTER
             * @constructor
             * @param {com.message.IC_LOGIN_REGISTER=} [properties] Properties to set
             */
            function C_LOGIN_REGISTER(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_LOGIN_REGISTER mobile.
             * @member {string} mobile
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.mobile = "";

            /**
             * C_LOGIN_REGISTER inviteCode.
             * @member {string} inviteCode
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.inviteCode = "";

            /**
             * C_LOGIN_REGISTER password.
             * @member {string} password
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.password = "";

            /**
             * C_LOGIN_REGISTER rePassword.
             * @member {string} rePassword
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.rePassword = "";

            /**
             * C_LOGIN_REGISTER verifyCode.
             * @member {string} verifyCode
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.verifyCode = "";

            /**
             * C_LOGIN_REGISTER sparam.
             * @member {string} sparam
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.sparam = "";

            /**
             * C_LOGIN_REGISTER fromGame.
             * @member {number} fromGame
             * @memberof com.message.C_LOGIN_REGISTER
             * @instance
             */
            C_LOGIN_REGISTER.prototype.fromGame = 0;

            /**
             * Encodes the specified C_LOGIN_REGISTER message. Does not implicitly {@link com.message.C_LOGIN_REGISTER.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_LOGIN_REGISTER
             * @static
             * @param {com.message.IC_LOGIN_REGISTER} message C_LOGIN_REGISTER message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_LOGIN_REGISTER.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.inviteCode != null && message.hasOwnProperty("inviteCode"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inviteCode);
                if (message.password != null && message.hasOwnProperty("password"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
                if (message.rePassword != null && message.hasOwnProperty("rePassword"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.rePassword);
                if (message.verifyCode != null && message.hasOwnProperty("verifyCode"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.verifyCode);
                if (message.sparam != null && message.hasOwnProperty("sparam"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.sparam);
                if (message.fromGame != null && message.hasOwnProperty("fromGame"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.fromGame);
                return writer;
            };

            /**
             * Decodes a C_LOGIN_REGISTER message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_LOGIN_REGISTER
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_LOGIN_REGISTER} C_LOGIN_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_LOGIN_REGISTER.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_LOGIN_REGISTER();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.inviteCode = reader.string();
                        break;
                    case 3:
                        message.password = reader.string();
                        break;
                    case 4:
                        message.rePassword = reader.string();
                        break;
                    case 5:
                        message.verifyCode = reader.string();
                        break;
                    case 6:
                        message.sparam = reader.string();
                        break;
                    case 7:
                        message.fromGame = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_LOGIN_REGISTER;
        })();

        message.S_LOGIN_REGISTER = (function() {

            /**
             * Properties of a S_LOGIN_REGISTER.
             * @memberof com.message
             * @interface IS_LOGIN_REGISTER
             * @property {number|Long|null} [playerId] S_LOGIN_REGISTER playerId
             * @property {number|null} [fromGame] S_LOGIN_REGISTER fromGame
             */

            /**
             * Constructs a new S_LOGIN_REGISTER.
             * @memberof com.message
             * @classdesc Represents a S_LOGIN_REGISTER.
             * @implements IS_LOGIN_REGISTER
             * @constructor
             * @param {com.message.IS_LOGIN_REGISTER=} [properties] Properties to set
             */
            function S_LOGIN_REGISTER(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_LOGIN_REGISTER playerId.
             * @member {number|Long} playerId
             * @memberof com.message.S_LOGIN_REGISTER
             * @instance
             */
            S_LOGIN_REGISTER.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * S_LOGIN_REGISTER fromGame.
             * @member {number} fromGame
             * @memberof com.message.S_LOGIN_REGISTER
             * @instance
             */
            S_LOGIN_REGISTER.prototype.fromGame = 0;

            /**
             * Encodes the specified S_LOGIN_REGISTER message. Does not implicitly {@link com.message.S_LOGIN_REGISTER.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_LOGIN_REGISTER
             * @static
             * @param {com.message.IS_LOGIN_REGISTER} message S_LOGIN_REGISTER message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_LOGIN_REGISTER.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.fromGame != null && message.hasOwnProperty("fromGame"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fromGame);
                return writer;
            };

            /**
             * Decodes a S_LOGIN_REGISTER message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_LOGIN_REGISTER
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_LOGIN_REGISTER} S_LOGIN_REGISTER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_LOGIN_REGISTER.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_LOGIN_REGISTER();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 4:
                        message.fromGame = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_LOGIN_REGISTER;
        })();

        message.C_SEND_VERIFY_CODE = (function() {

            /**
             * Properties of a C_SEND_VERIFY_CODE.
             * @memberof com.message
             * @interface IC_SEND_VERIFY_CODE
             * @property {string|null} [mobile] C_SEND_VERIFY_CODE mobile
             * @property {number|null} [type] C_SEND_VERIFY_CODE type
             */

            /**
             * Constructs a new C_SEND_VERIFY_CODE.
             * @memberof com.message
             * @classdesc Represents a C_SEND_VERIFY_CODE.
             * @implements IC_SEND_VERIFY_CODE
             * @constructor
             * @param {com.message.IC_SEND_VERIFY_CODE=} [properties] Properties to set
             */
            function C_SEND_VERIFY_CODE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_SEND_VERIFY_CODE mobile.
             * @member {string} mobile
             * @memberof com.message.C_SEND_VERIFY_CODE
             * @instance
             */
            C_SEND_VERIFY_CODE.prototype.mobile = "";

            /**
             * C_SEND_VERIFY_CODE type.
             * @member {number} type
             * @memberof com.message.C_SEND_VERIFY_CODE
             * @instance
             */
            C_SEND_VERIFY_CODE.prototype.type = 0;

            /**
             * Encodes the specified C_SEND_VERIFY_CODE message. Does not implicitly {@link com.message.C_SEND_VERIFY_CODE.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_SEND_VERIFY_CODE
             * @static
             * @param {com.message.IC_SEND_VERIFY_CODE} message C_SEND_VERIFY_CODE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_SEND_VERIFY_CODE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                return writer;
            };

            /**
             * Decodes a C_SEND_VERIFY_CODE message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_SEND_VERIFY_CODE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_SEND_VERIFY_CODE} C_SEND_VERIFY_CODE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_SEND_VERIFY_CODE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_SEND_VERIFY_CODE();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_SEND_VERIFY_CODE;
        })();

        message.S_SEND_VERIFY_CODE = (function() {

            /**
             * Properties of a S_SEND_VERIFY_CODE.
             * @memberof com.message
             * @interface IS_SEND_VERIFY_CODE
             * @property {string|null} [mobile] S_SEND_VERIFY_CODE mobile
             * @property {number|null} [state] S_SEND_VERIFY_CODE state
             */

            /**
             * Constructs a new S_SEND_VERIFY_CODE.
             * @memberof com.message
             * @classdesc Represents a S_SEND_VERIFY_CODE.
             * @implements IS_SEND_VERIFY_CODE
             * @constructor
             * @param {com.message.IS_SEND_VERIFY_CODE=} [properties] Properties to set
             */
            function S_SEND_VERIFY_CODE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SEND_VERIFY_CODE mobile.
             * @member {string} mobile
             * @memberof com.message.S_SEND_VERIFY_CODE
             * @instance
             */
            S_SEND_VERIFY_CODE.prototype.mobile = "";

            /**
             * S_SEND_VERIFY_CODE state.
             * @member {number} state
             * @memberof com.message.S_SEND_VERIFY_CODE
             * @instance
             */
            S_SEND_VERIFY_CODE.prototype.state = 0;

            /**
             * Encodes the specified S_SEND_VERIFY_CODE message. Does not implicitly {@link com.message.S_SEND_VERIFY_CODE.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SEND_VERIFY_CODE
             * @static
             * @param {com.message.IS_SEND_VERIFY_CODE} message S_SEND_VERIFY_CODE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SEND_VERIFY_CODE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mobile != null && message.hasOwnProperty("mobile"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.mobile);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
                return writer;
            };

            /**
             * Decodes a S_SEND_VERIFY_CODE message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SEND_VERIFY_CODE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SEND_VERIFY_CODE} S_SEND_VERIFY_CODE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SEND_VERIFY_CODE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SEND_VERIFY_CODE();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.mobile = reader.string();
                        break;
                    case 2:
                        message.state = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SEND_VERIFY_CODE;
        })();

        message.C_USER_LOGOUT = (function() {

            /**
             * Properties of a C_USER_LOGOUT.
             * @memberof com.message
             * @interface IC_USER_LOGOUT
             * @property {number|Long|null} [playerId] C_USER_LOGOUT playerId
             */

            /**
             * Constructs a new C_USER_LOGOUT.
             * @memberof com.message
             * @classdesc Represents a C_USER_LOGOUT.
             * @implements IC_USER_LOGOUT
             * @constructor
             * @param {com.message.IC_USER_LOGOUT=} [properties] Properties to set
             */
            function C_USER_LOGOUT(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * C_USER_LOGOUT playerId.
             * @member {number|Long} playerId
             * @memberof com.message.C_USER_LOGOUT
             * @instance
             */
            C_USER_LOGOUT.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified C_USER_LOGOUT message. Does not implicitly {@link com.message.C_USER_LOGOUT.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_USER_LOGOUT
             * @static
             * @param {com.message.IC_USER_LOGOUT} message C_USER_LOGOUT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_USER_LOGOUT.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                return writer;
            };

            /**
             * Decodes a C_USER_LOGOUT message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_USER_LOGOUT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_USER_LOGOUT} C_USER_LOGOUT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_USER_LOGOUT.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_USER_LOGOUT();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_USER_LOGOUT;
        })();

        message.S_USER_LOGOUT = (function() {

            /**
             * Properties of a S_USER_LOGOUT.
             * @memberof com.message
             * @interface IS_USER_LOGOUT
             * @property {number|Long|null} [playerId] S_USER_LOGOUT playerId
             * @property {boolean|null} [beKickOut] S_USER_LOGOUT beKickOut
             */

            /**
             * Constructs a new S_USER_LOGOUT.
             * @memberof com.message
             * @classdesc Represents a S_USER_LOGOUT.
             * @implements IS_USER_LOGOUT
             * @constructor
             * @param {com.message.IS_USER_LOGOUT=} [properties] Properties to set
             */
            function S_USER_LOGOUT(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_USER_LOGOUT playerId.
             * @member {number|Long} playerId
             * @memberof com.message.S_USER_LOGOUT
             * @instance
             */
            S_USER_LOGOUT.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * S_USER_LOGOUT beKickOut.
             * @member {boolean} beKickOut
             * @memberof com.message.S_USER_LOGOUT
             * @instance
             */
            S_USER_LOGOUT.prototype.beKickOut = false;

            /**
             * Encodes the specified S_USER_LOGOUT message. Does not implicitly {@link com.message.S_USER_LOGOUT.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_USER_LOGOUT
             * @static
             * @param {com.message.IS_USER_LOGOUT} message S_USER_LOGOUT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_USER_LOGOUT.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
                if (message.beKickOut != null && message.hasOwnProperty("beKickOut"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.beKickOut);
                return writer;
            };

            /**
             * Decodes a S_USER_LOGOUT message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_USER_LOGOUT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_USER_LOGOUT} S_USER_LOGOUT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_USER_LOGOUT.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_USER_LOGOUT();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.beKickOut = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_USER_LOGOUT;
        })();

        message.S_USER_LOGIN_BAN = (function() {

            /**
             * Properties of a S_USER_LOGIN_BAN.
             * @memberof com.message
             * @interface IS_USER_LOGIN_BAN
             */

            /**
             * Constructs a new S_USER_LOGIN_BAN.
             * @memberof com.message
             * @classdesc Represents a S_USER_LOGIN_BAN.
             * @implements IS_USER_LOGIN_BAN
             * @constructor
             * @param {com.message.IS_USER_LOGIN_BAN=} [properties] Properties to set
             */
            function S_USER_LOGIN_BAN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified S_USER_LOGIN_BAN message. Does not implicitly {@link com.message.S_USER_LOGIN_BAN.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_USER_LOGIN_BAN
             * @static
             * @param {com.message.IS_USER_LOGIN_BAN} message S_USER_LOGIN_BAN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_USER_LOGIN_BAN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a S_USER_LOGIN_BAN message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_USER_LOGIN_BAN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_USER_LOGIN_BAN} S_USER_LOGIN_BAN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_USER_LOGIN_BAN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_USER_LOGIN_BAN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_USER_LOGIN_BAN;
        })();

        message.C_SYNC_TIME = (function() {

            /**
             * Properties of a C_SYNC_TIME.
             * @memberof com.message
             * @interface IC_SYNC_TIME
             */

            /**
             * Constructs a new C_SYNC_TIME.
             * @memberof com.message
             * @classdesc Represents a C_SYNC_TIME.
             * @implements IC_SYNC_TIME
             * @constructor
             * @param {com.message.IC_SYNC_TIME=} [properties] Properties to set
             */
            function C_SYNC_TIME(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Encodes the specified C_SYNC_TIME message. Does not implicitly {@link com.message.C_SYNC_TIME.verify|verify} messages.
             * @function encode
             * @memberof com.message.C_SYNC_TIME
             * @static
             * @param {com.message.IC_SYNC_TIME} message C_SYNC_TIME message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_SYNC_TIME.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Decodes a C_SYNC_TIME message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.C_SYNC_TIME
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.C_SYNC_TIME} C_SYNC_TIME
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_SYNC_TIME.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.C_SYNC_TIME();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return C_SYNC_TIME;
        })();

        message.S_SYNC_TIME = (function() {

            /**
             * Properties of a S_SYNC_TIME.
             * @memberof com.message
             * @interface IS_SYNC_TIME
             * @property {number|Long|null} [time] S_SYNC_TIME time
             */

            /**
             * Constructs a new S_SYNC_TIME.
             * @memberof com.message
             * @classdesc Represents a S_SYNC_TIME.
             * @implements IS_SYNC_TIME
             * @constructor
             * @param {com.message.IS_SYNC_TIME=} [properties] Properties to set
             */
            function S_SYNC_TIME(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * S_SYNC_TIME time.
             * @member {number|Long} time
             * @memberof com.message.S_SYNC_TIME
             * @instance
             */
            S_SYNC_TIME.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified S_SYNC_TIME message. Does not implicitly {@link com.message.S_SYNC_TIME.verify|verify} messages.
             * @function encode
             * @memberof com.message.S_SYNC_TIME
             * @static
             * @param {com.message.IS_SYNC_TIME} message S_SYNC_TIME message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            S_SYNC_TIME.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
                return writer;
            };

            /**
             * Decodes a S_SYNC_TIME message from the specified reader or buffer.
             * @function decode
             * @memberof com.message.S_SYNC_TIME
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.message.S_SYNC_TIME} S_SYNC_TIME
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            S_SYNC_TIME.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.message.S_SYNC_TIME();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.time = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return S_SYNC_TIME;
        })();

        return message;
    })();

    return com;
})();