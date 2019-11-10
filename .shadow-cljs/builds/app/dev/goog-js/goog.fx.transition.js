["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/fx/transition.js"],"~:js","goog.provide(\"goog.fx.Transition\");\ngoog.provide(\"goog.fx.Transition.EventType\");\n/** @interface */ goog.fx.Transition = function() {\n};\n/** @enum {string} */ goog.fx.Transition.EventType = {PLAY:\"play\", BEGIN:\"begin\", RESUME:\"resume\", END:\"end\", STOP:\"stop\", FINISH:\"finish\", PAUSE:\"pause\"};\n/** @type {function()} */ goog.fx.Transition.prototype.play;\n/** @type {function()} */ goog.fx.Transition.prototype.stop;\n","~:source","// Copyright 2011 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview An interface for transition animation. This is a simple\n * interface that allows for playing and stopping a transition. It adds\n * a simple event model with BEGIN and END event.\n *\n * @author chrishenry@google.com (Chris Henry)\n */\n\ngoog.provide('goog.fx.Transition');\ngoog.provide('goog.fx.Transition.EventType');\n\n\n\n/**\n * An interface for programmatic transition. Must extend\n * `goog.events.EventTarget`.\n * @interface\n */\ngoog.fx.Transition = function() {};\n\n\n/**\n * Transition event types.\n * @enum {string}\n */\ngoog.fx.Transition.EventType = {\n  /** Dispatched when played for the first time OR when it is resumed. */\n  PLAY: 'play',\n\n  /** Dispatched only when the animation starts from the beginning. */\n  BEGIN: 'begin',\n\n  /** Dispatched only when animation is restarted after a pause. */\n  RESUME: 'resume',\n\n  /**\n   * Dispatched when animation comes to the end of its duration OR stop\n   * is called.\n   */\n  END: 'end',\n\n  /** Dispatched only when stop is called. */\n  STOP: 'stop',\n\n  /** Dispatched only when animation comes to its end naturally. */\n  FINISH: 'finish',\n\n  /** Dispatched when an animation is paused. */\n  PAUSE: 'pause'\n};\n\n\n/**\n * @type {function()}\n * Plays the transition.\n */\ngoog.fx.Transition.prototype.play;\n\n\n/**\n * @type {function()}\n * Stops the transition.\n */\ngoog.fx.Transition.prototype.stop;\n","~:compiled-at",1573427564664,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.fx.transition.js\",\n\"lineCount\":8,\n\"mappings\":\"AAsBAA,IAAAC,QAAA,CAAa,oBAAb,CAAA;AACAD,IAAAC,QAAA,CAAa,8BAAb,CAAA;AASA,kBAAAD,IAAAE,GAAAC,WAAA,GAAqBC,QAAQ,EAAG;CAAhC;AAOA,sBAAAJ,IAAAE,GAAAC,WAAAE,UAAA,GAA+B,CAE7BC,KAAM,MAFuB,EAK7BC,MAAO,OALsB,EAQ7BC,OAAQ,QARqB,EAc7BC,IAAK,KAdwB,EAiB7BC,KAAM,MAjBuB,EAoB7BC,OAAQ,QApBqB,EAuB7BC,MAAO,OAvBsB,CAA/B;AA+BA,0BAAAZ,IAAAE,GAAAC,WAAAU,UAAAC,KAAA;AAOA,0BAAAd,IAAAE,GAAAC,WAAAU,UAAAE,KAAA;;\",\n\"sources\":[\"goog/fx/transition.js\"],\n\"sourcesContent\":[\"// Copyright 2011 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview An interface for transition animation. This is a simple\\n * interface that allows for playing and stopping a transition. It adds\\n * a simple event model with BEGIN and END event.\\n *\\n * @author chrishenry@google.com (Chris Henry)\\n */\\n\\ngoog.provide('goog.fx.Transition');\\ngoog.provide('goog.fx.Transition.EventType');\\n\\n\\n\\n/**\\n * An interface for programmatic transition. Must extend\\n * `goog.events.EventTarget`.\\n * @interface\\n */\\ngoog.fx.Transition = function() {};\\n\\n\\n/**\\n * Transition event types.\\n * @enum {string}\\n */\\ngoog.fx.Transition.EventType = {\\n  /** Dispatched when played for the first time OR when it is resumed. */\\n  PLAY: 'play',\\n\\n  /** Dispatched only when the animation starts from the beginning. */\\n  BEGIN: 'begin',\\n\\n  /** Dispatched only when animation is restarted after a pause. */\\n  RESUME: 'resume',\\n\\n  /**\\n   * Dispatched when animation comes to the end of its duration OR stop\\n   * is called.\\n   */\\n  END: 'end',\\n\\n  /** Dispatched only when stop is called. */\\n  STOP: 'stop',\\n\\n  /** Dispatched only when animation comes to its end naturally. */\\n  FINISH: 'finish',\\n\\n  /** Dispatched when an animation is paused. */\\n  PAUSE: 'pause'\\n};\\n\\n\\n/**\\n * @type {function()}\\n * Plays the transition.\\n */\\ngoog.fx.Transition.prototype.play;\\n\\n\\n/**\\n * @type {function()}\\n * Stops the transition.\\n */\\ngoog.fx.Transition.prototype.stop;\\n\"],\n\"names\":[\"goog\",\"provide\",\"fx\",\"Transition\",\"goog.fx.Transition\",\"EventType\",\"PLAY\",\"BEGIN\",\"RESUME\",\"END\",\"STOP\",\"FINISH\",\"PAUSE\",\"prototype\",\"play\",\"stop\"]\n}\n"]