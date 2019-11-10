["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/html/safescript.js"],"~:js","goog.provide(\"goog.html.SafeScript\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.html.trustedtypes\");\ngoog.require(\"goog.string.Const\");\ngoog.require(\"goog.string.TypedString\");\n/**\n * @final\n * @struct\n * @constructor\n * @implements {goog.string.TypedString}\n */\ngoog.html.SafeScript = function() {\n  /** @private @type {(!TrustedScript|string)} */ this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = \"\";\n  /** @private @const @type {!Object} */ this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;\n};\n/** @const @override */ goog.html.SafeScript.prototype.implementsGoogStringTypedString = true;\n/** @private @const @type {!Object} */ goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};\n/**\n * @param {!goog.string.Const} script\n * @return {!goog.html.SafeScript}\n */\ngoog.html.SafeScript.fromConstant = function(script) {\n  var scriptString = goog.string.Const.unwrap(script);\n  if (scriptString.length === 0) {\n    return goog.html.SafeScript.EMPTY;\n  }\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(scriptString);\n};\n/**\n * @param {!goog.string.Const} code\n * @param {...*} var_args\n * @return {!goog.html.SafeScript}\n */\ngoog.html.SafeScript.fromConstantAndArgs = function(code, var_args) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) {\n    args.push(goog.html.SafeScript.stringify_(arguments[i]));\n  }\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\"(\" + goog.string.Const.unwrap(code) + \")(\" + args.join(\", \") + \");\");\n};\n/**\n * @param {*} val\n * @return {!goog.html.SafeScript}\n */\ngoog.html.SafeScript.fromJson = function(val) {\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(val));\n};\n/** @override */ goog.html.SafeScript.prototype.getTypedStringValue = function() {\n  return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();\n};\nif (goog.DEBUG) {\n  /** @override */ goog.html.SafeScript.prototype.toString = function() {\n    return \"SafeScript{\" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + \"}\";\n  };\n}\n/**\n * @param {!goog.html.SafeScript} safeScript\n * @return {string}\n */\ngoog.html.SafeScript.unwrap = function(safeScript) {\n  return goog.html.SafeScript.unwrapTrustedScript(safeScript).toString();\n};\n/**\n * @param {!goog.html.SafeScript} safeScript\n * @return {(!TrustedScript|string)}\n */\ngoog.html.SafeScript.unwrapTrustedScript = function(safeScript) {\n  if (safeScript instanceof goog.html.SafeScript && safeScript.constructor === goog.html.SafeScript && safeScript.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {\n    return safeScript.privateDoNotAccessOrElseSafeScriptWrappedValue_;\n  } else {\n    goog.asserts.fail(\"expected object of type SafeScript, got '\" + safeScript + \"' of type \" + goog.typeOf(safeScript));\n    return \"type_error:SafeScript\";\n  }\n};\n/**\n * @private\n * @param {*} val\n * @return {string}\n */\ngoog.html.SafeScript.stringify_ = function(val) {\n  var json = JSON.stringify(val);\n  return json.replace(/</g, \"\\\\x3c\");\n};\n/**\n * @package\n * @param {string} script\n * @return {!goog.html.SafeScript}\n */\ngoog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(script) {\n  return (new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(script);\n};\n/**\n * @private\n * @param {string} script\n * @return {!goog.html.SafeScript}\n */\ngoog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(script) {\n  this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(script) : script;\n  return this;\n};\n/** @const @type {!goog.html.SafeScript} */ goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\"\");\n","~:source","// Copyright 2014 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview The SafeScript type and its builders.\n *\n * TODO(xtof): Link to document stating type contract.\n */\n\ngoog.provide('goog.html.SafeScript');\n\ngoog.require('goog.asserts');\ngoog.require('goog.html.trustedtypes');\ngoog.require('goog.string.Const');\ngoog.require('goog.string.TypedString');\n\n\n\n/**\n * A string-like object which represents JavaScript code and that carries the\n * security type contract that its value, as a string, will not cause execution\n * of unconstrained attacker controlled code (XSS) when evaluated as JavaScript\n * in a browser.\n *\n * Instances of this type must be created via the factory method\n * `goog.html.SafeScript.fromConstant` and not by invoking its\n * constructor. The constructor intentionally takes no parameters and the type\n * is immutable; hence only a default instance corresponding to the empty string\n * can be obtained via constructor invocation.\n *\n * A SafeScript's string representation can safely be interpolated as the\n * content of a script element within HTML. The SafeScript string should not be\n * escaped before interpolation.\n *\n * Note that the SafeScript might contain text that is attacker-controlled but\n * that text should have been interpolated with appropriate escaping,\n * sanitization and/or validation into the right location in the script, such\n * that it is highly constrained in its effect (for example, it had to match a\n * set of whitelisted words).\n *\n * A SafeScript can be constructed via security-reviewed unchecked\n * conversions. In this case producers of SafeScript must ensure themselves that\n * the SafeScript does not contain unsafe script. Note in particular that\n * {@code &lt;} is dangerous, even when inside JavaScript strings, and so should\n * always be forbidden or JavaScript escaped in user controlled input. For\n * example, if {@code &lt;/script&gt;&lt;script&gt;evil&lt;/script&gt;\"} were\n * interpolated inside a JavaScript string, it would break out of the context\n * of the original script element and `evil` would execute. Also note\n * that within an HTML script (raw text) element, HTML character references,\n * such as \"&lt;\" are not allowed. See\n * http://www.w3.org/TR/html5/scripting-1.html#restrictions-for-contents-of-script-elements.\n *\n * @see goog.html.SafeScript#fromConstant\n * @constructor\n * @final\n * @struct\n * @implements {goog.string.TypedString}\n */\ngoog.html.SafeScript = function() {\n  /**\n   * The contained value of this SafeScript.  The field has a purposely\n   * ugly name to make (non-compiled) code that attempts to directly access this\n   * field stand out.\n   * @private {!TrustedScript|string}\n   */\n  this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = '';\n\n  /**\n   * A type marker used to implement additional run-time type checking.\n   * @see goog.html.SafeScript#unwrap\n   * @const {!Object}\n   * @private\n   */\n  this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =\n      goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;\n};\n\n\n/**\n * @override\n * @const\n */\ngoog.html.SafeScript.prototype.implementsGoogStringTypedString = true;\n\n\n/**\n * Type marker for the SafeScript type, used to implement additional\n * run-time type checking.\n * @const {!Object}\n * @private\n */\ngoog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};\n\n\n/**\n * Creates a SafeScript object from a compile-time constant string.\n *\n * @param {!goog.string.Const} script A compile-time-constant string from which\n *     to create a SafeScript.\n * @return {!goog.html.SafeScript} A SafeScript object initialized to\n *     `script`.\n */\ngoog.html.SafeScript.fromConstant = function(script) {\n  var scriptString = goog.string.Const.unwrap(script);\n  if (scriptString.length === 0) {\n    return goog.html.SafeScript.EMPTY;\n  }\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\n      scriptString);\n};\n\n\n/**\n * Creates a SafeScript from a compile-time constant string but with arguments\n * that can vary at run-time. The code argument should be formatted as an\n * inline function (see example below). The arguments will be JSON-encoded and\n * provided as input to the function specified in code.\n *\n * Example Usage:\n *\n *     let safeScript = SafeScript.fromConstantAndArgs(\n *         Const.from('function(arg1, arg2) { doSomething(arg1, arg2); }'),\n *         arg1,\n *         arg2);\n *\n * This produces a SafeScript equivalent to the following:\n *\n *     (function(arg1, arg2) { doSomething(arg1, arg2); })(\"value1\", \"value2\");\n *\n * @param {!goog.string.Const} code\n * @param {...*} var_args\n * @return {!goog.html.SafeScript}\n */\ngoog.html.SafeScript.fromConstantAndArgs = function(code, var_args) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) {\n    args.push(goog.html.SafeScript.stringify_(arguments[i]));\n  }\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\n      '(' + goog.string.Const.unwrap(code) + ')(' + args.join(', ') + ');');\n};\n\n\n/**\n * Creates a SafeScript JSON representation from anything that could be passed\n * to JSON.stringify.\n * @param {*} val\n * @return {!goog.html.SafeScript}\n */\ngoog.html.SafeScript.fromJson = function(val) {\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\n      goog.html.SafeScript.stringify_(val));\n};\n\n\n/**\n * Returns this SafeScript's value as a string.\n *\n * IMPORTANT: In code where it is security relevant that an object's type is\n * indeed `SafeScript`, use `goog.html.SafeScript.unwrap` instead of\n * this method. If in doubt, assume that it's security relevant. In particular,\n * note that goog.html functions which return a goog.html type do not guarantee\n * the returned instance is of the right type. For example:\n *\n * <pre>\n * var fakeSafeHtml = new String('fake');\n * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;\n * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);\n * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by\n * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml\n * // instanceof goog.html.SafeHtml.\n * </pre>\n *\n * @see goog.html.SafeScript#unwrap\n * @override\n */\ngoog.html.SafeScript.prototype.getTypedStringValue = function() {\n  return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();\n};\n\n\nif (goog.DEBUG) {\n  /**\n   * Returns a debug string-representation of this value.\n   *\n   * To obtain the actual string value wrapped in a SafeScript, use\n   * `goog.html.SafeScript.unwrap`.\n   *\n   * @see goog.html.SafeScript#unwrap\n   * @override\n   */\n  goog.html.SafeScript.prototype.toString = function() {\n    return 'SafeScript{' +\n        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + '}';\n  };\n}\n\n\n/**\n * Performs a runtime check that the provided object is indeed a\n * SafeScript object, and returns its value.\n *\n * @param {!goog.html.SafeScript} safeScript The object to extract from.\n * @return {string} The safeScript object's contained string, unless\n *     the run-time type check fails. In that case, `unwrap` returns an\n *     innocuous string, or, if assertions are enabled, throws\n *     `goog.asserts.AssertionError`.\n */\ngoog.html.SafeScript.unwrap = function(safeScript) {\n  return goog.html.SafeScript.unwrapTrustedScript(safeScript).toString();\n};\n\n\n/**\n * Unwraps value as TrustedScript if supported or as a string if not.\n * @param {!goog.html.SafeScript} safeScript\n * @return {!TrustedScript|string}\n * @see goog.html.SafeScript.unwrap\n */\ngoog.html.SafeScript.unwrapTrustedScript = function(safeScript) {\n  // Perform additional Run-time type-checking to ensure that\n  // safeScript is indeed an instance of the expected type.  This\n  // provides some additional protection against security bugs due to\n  // application code that disables type checks.\n  // Specifically, the following checks are performed:\n  // 1. The object is an instance of the expected type.\n  // 2. The object is not an instance of a subclass.\n  // 3. The object carries a type marker for the expected type. \"Faking\" an\n  // object requires a reference to the type marker, which has names intended\n  // to stand out in code reviews.\n  if (safeScript instanceof goog.html.SafeScript &&\n      safeScript.constructor === goog.html.SafeScript &&\n      safeScript.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===\n          goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {\n    return safeScript.privateDoNotAccessOrElseSafeScriptWrappedValue_;\n  } else {\n    goog.asserts.fail('expected object of type SafeScript, got \\'' +\n        safeScript + '\\' of type ' + goog.typeOf(safeScript));\n    return 'type_error:SafeScript';\n  }\n};\n\n\n/**\n * Converts the given value to a embeddabel JSON string and returns it. The\n * resulting string can be embedded in HTML because the '<' character is\n * encoded.\n *\n * @param {*} val\n * @return {string}\n * @private\n */\ngoog.html.SafeScript.stringify_ = function(val) {\n  var json = JSON.stringify(val);\n  return json.replace(/</g, '\\\\x3c');\n};\n\n/**\n * Package-internal utility method to create SafeScript instances.\n *\n * @param {string} script The string to initialize the SafeScript object with.\n * @return {!goog.html.SafeScript} The initialized SafeScript object.\n * @package\n */\ngoog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse =\n    function(script) {\n  return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(\n      script);\n};\n\n\n/**\n * Called from createSafeScriptSecurityPrivateDoNotAccessOrElse(). This\n * method exists only so that the compiler can dead code eliminate static\n * fields (like EMPTY) when they're not accessed.\n * @param {string} script\n * @return {!goog.html.SafeScript}\n * @private\n */\ngoog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(\n    script) {\n  this.privateDoNotAccessOrElseSafeScriptWrappedValue_ =\n      goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ?\n      goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(\n          script) :\n      script;\n  return this;\n};\n\n\n/**\n * A SafeScript instance corresponding to the empty string.\n * @const {!goog.html.SafeScript}\n */\ngoog.html.SafeScript.EMPTY =\n    goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse('');\n","~:compiled-at",1573427564321,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.html.safescript.js\",\n\"lineCount\":102,\n\"mappings\":\"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\",\n\"sources\":[\"goog/html/safescript.js\"],\n\"sourcesContent\":[\"// Copyright 2014 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview The SafeScript type and its builders.\\n *\\n * TODO(xtof): Link to document stating type contract.\\n */\\n\\ngoog.provide('goog.html.SafeScript');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.html.trustedtypes');\\ngoog.require('goog.string.Const');\\ngoog.require('goog.string.TypedString');\\n\\n\\n\\n/**\\n * A string-like object which represents JavaScript code and that carries the\\n * security type contract that its value, as a string, will not cause execution\\n * of unconstrained attacker controlled code (XSS) when evaluated as JavaScript\\n * in a browser.\\n *\\n * Instances of this type must be created via the factory method\\n * `goog.html.SafeScript.fromConstant` and not by invoking its\\n * constructor. The constructor intentionally takes no parameters and the type\\n * is immutable; hence only a default instance corresponding to the empty string\\n * can be obtained via constructor invocation.\\n *\\n * A SafeScript's string representation can safely be interpolated as the\\n * content of a script element within HTML. The SafeScript string should not be\\n * escaped before interpolation.\\n *\\n * Note that the SafeScript might contain text that is attacker-controlled but\\n * that text should have been interpolated with appropriate escaping,\\n * sanitization and/or validation into the right location in the script, such\\n * that it is highly constrained in its effect (for example, it had to match a\\n * set of whitelisted words).\\n *\\n * A SafeScript can be constructed via security-reviewed unchecked\\n * conversions. In this case producers of SafeScript must ensure themselves that\\n * the SafeScript does not contain unsafe script. Note in particular that\\n * {@code &lt;} is dangerous, even when inside JavaScript strings, and so should\\n * always be forbidden or JavaScript escaped in user controlled input. For\\n * example, if {@code &lt;/script&gt;&lt;script&gt;evil&lt;/script&gt;\\\"} were\\n * interpolated inside a JavaScript string, it would break out of the context\\n * of the original script element and `evil` would execute. Also note\\n * that within an HTML script (raw text) element, HTML character references,\\n * such as \\\"&lt;\\\" are not allowed. See\\n * http://www.w3.org/TR/html5/scripting-1.html#restrictions-for-contents-of-script-elements.\\n *\\n * @see goog.html.SafeScript#fromConstant\\n * @constructor\\n * @final\\n * @struct\\n * @implements {goog.string.TypedString}\\n */\\ngoog.html.SafeScript = function() {\\n  /**\\n   * The contained value of this SafeScript.  The field has a purposely\\n   * ugly name to make (non-compiled) code that attempts to directly access this\\n   * field stand out.\\n   * @private {!TrustedScript|string}\\n   */\\n  this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = '';\\n\\n  /**\\n   * A type marker used to implement additional run-time type checking.\\n   * @see goog.html.SafeScript#unwrap\\n   * @const {!Object}\\n   * @private\\n   */\\n  this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =\\n      goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;\\n};\\n\\n\\n/**\\n * @override\\n * @const\\n */\\ngoog.html.SafeScript.prototype.implementsGoogStringTypedString = true;\\n\\n\\n/**\\n * Type marker for the SafeScript type, used to implement additional\\n * run-time type checking.\\n * @const {!Object}\\n * @private\\n */\\ngoog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};\\n\\n\\n/**\\n * Creates a SafeScript object from a compile-time constant string.\\n *\\n * @param {!goog.string.Const} script A compile-time-constant string from which\\n *     to create a SafeScript.\\n * @return {!goog.html.SafeScript} A SafeScript object initialized to\\n *     `script`.\\n */\\ngoog.html.SafeScript.fromConstant = function(script) {\\n  var scriptString = goog.string.Const.unwrap(script);\\n  if (scriptString.length === 0) {\\n    return goog.html.SafeScript.EMPTY;\\n  }\\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\\n      scriptString);\\n};\\n\\n\\n/**\\n * Creates a SafeScript from a compile-time constant string but with arguments\\n * that can vary at run-time. The code argument should be formatted as an\\n * inline function (see example below). The arguments will be JSON-encoded and\\n * provided as input to the function specified in code.\\n *\\n * Example Usage:\\n *\\n *     let safeScript = SafeScript.fromConstantAndArgs(\\n *         Const.from('function(arg1, arg2) { doSomething(arg1, arg2); }'),\\n *         arg1,\\n *         arg2);\\n *\\n * This produces a SafeScript equivalent to the following:\\n *\\n *     (function(arg1, arg2) { doSomething(arg1, arg2); })(\\\"value1\\\", \\\"value2\\\");\\n *\\n * @param {!goog.string.Const} code\\n * @param {...*} var_args\\n * @return {!goog.html.SafeScript}\\n */\\ngoog.html.SafeScript.fromConstantAndArgs = function(code, var_args) {\\n  var args = [];\\n  for (var i = 1; i < arguments.length; i++) {\\n    args.push(goog.html.SafeScript.stringify_(arguments[i]));\\n  }\\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\\n      '(' + goog.string.Const.unwrap(code) + ')(' + args.join(', ') + ');');\\n};\\n\\n\\n/**\\n * Creates a SafeScript JSON representation from anything that could be passed\\n * to JSON.stringify.\\n * @param {*} val\\n * @return {!goog.html.SafeScript}\\n */\\ngoog.html.SafeScript.fromJson = function(val) {\\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\\n      goog.html.SafeScript.stringify_(val));\\n};\\n\\n\\n/**\\n * Returns this SafeScript's value as a string.\\n *\\n * IMPORTANT: In code where it is security relevant that an object's type is\\n * indeed `SafeScript`, use `goog.html.SafeScript.unwrap` instead of\\n * this method. If in doubt, assume that it's security relevant. In particular,\\n * note that goog.html functions which return a goog.html type do not guarantee\\n * the returned instance is of the right type. For example:\\n *\\n * <pre>\\n * var fakeSafeHtml = new String('fake');\\n * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;\\n * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);\\n * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by\\n * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml\\n * // instanceof goog.html.SafeHtml.\\n * </pre>\\n *\\n * @see goog.html.SafeScript#unwrap\\n * @override\\n */\\ngoog.html.SafeScript.prototype.getTypedStringValue = function() {\\n  return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();\\n};\\n\\n\\nif (goog.DEBUG) {\\n  /**\\n   * Returns a debug string-representation of this value.\\n   *\\n   * To obtain the actual string value wrapped in a SafeScript, use\\n   * `goog.html.SafeScript.unwrap`.\\n   *\\n   * @see goog.html.SafeScript#unwrap\\n   * @override\\n   */\\n  goog.html.SafeScript.prototype.toString = function() {\\n    return 'SafeScript{' +\\n        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + '}';\\n  };\\n}\\n\\n\\n/**\\n * Performs a runtime check that the provided object is indeed a\\n * SafeScript object, and returns its value.\\n *\\n * @param {!goog.html.SafeScript} safeScript The object to extract from.\\n * @return {string} The safeScript object's contained string, unless\\n *     the run-time type check fails. In that case, `unwrap` returns an\\n *     innocuous string, or, if assertions are enabled, throws\\n *     `goog.asserts.AssertionError`.\\n */\\ngoog.html.SafeScript.unwrap = function(safeScript) {\\n  return goog.html.SafeScript.unwrapTrustedScript(safeScript).toString();\\n};\\n\\n\\n/**\\n * Unwraps value as TrustedScript if supported or as a string if not.\\n * @param {!goog.html.SafeScript} safeScript\\n * @return {!TrustedScript|string}\\n * @see goog.html.SafeScript.unwrap\\n */\\ngoog.html.SafeScript.unwrapTrustedScript = function(safeScript) {\\n  // Perform additional Run-time type-checking to ensure that\\n  // safeScript is indeed an instance of the expected type.  This\\n  // provides some additional protection against security bugs due to\\n  // application code that disables type checks.\\n  // Specifically, the following checks are performed:\\n  // 1. The object is an instance of the expected type.\\n  // 2. The object is not an instance of a subclass.\\n  // 3. The object carries a type marker for the expected type. \\\"Faking\\\" an\\n  // object requires a reference to the type marker, which has names intended\\n  // to stand out in code reviews.\\n  if (safeScript instanceof goog.html.SafeScript &&\\n      safeScript.constructor === goog.html.SafeScript &&\\n      safeScript.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===\\n          goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {\\n    return safeScript.privateDoNotAccessOrElseSafeScriptWrappedValue_;\\n  } else {\\n    goog.asserts.fail('expected object of type SafeScript, got \\\\'' +\\n        safeScript + '\\\\' of type ' + goog.typeOf(safeScript));\\n    return 'type_error:SafeScript';\\n  }\\n};\\n\\n\\n/**\\n * Converts the given value to a embeddabel JSON string and returns it. The\\n * resulting string can be embedded in HTML because the '<' character is\\n * encoded.\\n *\\n * @param {*} val\\n * @return {string}\\n * @private\\n */\\ngoog.html.SafeScript.stringify_ = function(val) {\\n  var json = JSON.stringify(val);\\n  return json.replace(/</g, '\\\\\\\\x3c');\\n};\\n\\n/**\\n * Package-internal utility method to create SafeScript instances.\\n *\\n * @param {string} script The string to initialize the SafeScript object with.\\n * @return {!goog.html.SafeScript} The initialized SafeScript object.\\n * @package\\n */\\ngoog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse =\\n    function(script) {\\n  return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(\\n      script);\\n};\\n\\n\\n/**\\n * Called from createSafeScriptSecurityPrivateDoNotAccessOrElse(). This\\n * method exists only so that the compiler can dead code eliminate static\\n * fields (like EMPTY) when they're not accessed.\\n * @param {string} script\\n * @return {!goog.html.SafeScript}\\n * @private\\n */\\ngoog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(\\n    script) {\\n  this.privateDoNotAccessOrElseSafeScriptWrappedValue_ =\\n      goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ?\\n      goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(\\n          script) :\\n      script;\\n  return this;\\n};\\n\\n\\n/**\\n * A SafeScript instance corresponding to the empty string.\\n * @const {!goog.html.SafeScript}\\n */\\ngoog.html.SafeScript.EMPTY =\\n    goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse('');\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"html\",\"SafeScript\",\"goog.html.SafeScript\",\"privateDoNotAccessOrElseSafeScriptWrappedValue_\",\"SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_\",\"TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_\",\"prototype\",\"implementsGoogStringTypedString\",\"fromConstant\",\"goog.html.SafeScript.fromConstant\",\"script\",\"scriptString\",\"string\",\"Const\",\"unwrap\",\"length\",\"EMPTY\",\"createSafeScriptSecurityPrivateDoNotAccessOrElse\",\"fromConstantAndArgs\",\"goog.html.SafeScript.fromConstantAndArgs\",\"code\",\"var_args\",\"args\",\"i\",\"arguments\",\"push\",\"stringify_\",\"join\",\"fromJson\",\"goog.html.SafeScript.fromJson\",\"val\",\"getTypedStringValue\",\"goog.html.SafeScript.prototype.getTypedStringValue\",\"toString\",\"DEBUG\",\"goog.html.SafeScript.prototype.toString\",\"goog.html.SafeScript.unwrap\",\"safeScript\",\"unwrapTrustedScript\",\"goog.html.SafeScript.unwrapTrustedScript\",\"constructor\",\"asserts\",\"fail\",\"typeOf\",\"goog.html.SafeScript.stringify_\",\"json\",\"JSON\",\"stringify\",\"replace\",\"goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse\",\"initSecurityPrivateDoNotAccessOrElse_\",\"goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_\",\"trustedtypes\",\"PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY\",\"createScript\"]\n}\n"]