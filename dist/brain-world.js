var wt = Object.defineProperty;
var Lt = (r, e, t) => e in r ? wt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var be = (r, e, t) => Lt(r, typeof e != "symbol" ? e + "" : e, t);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = "174", CullFaceNone = 0, CullFaceBack = 1, CullFaceFront = 2, PCFShadowMap = 1, PCFSoftShadowMap = 2, VSMShadowMap = 3, FrontSide = 0, BackSide = 1, DoubleSide = 2, NoBlending = 0, NormalBlending = 1, AdditiveBlending = 2, SubtractiveBlending = 3, MultiplyBlending = 4, CustomBlending = 5, AddEquation = 100, SubtractEquation = 101, ReverseSubtractEquation = 102, MinEquation = 103, MaxEquation = 104, ZeroFactor = 200, OneFactor = 201, SrcColorFactor = 202, OneMinusSrcColorFactor = 203, SrcAlphaFactor = 204, OneMinusSrcAlphaFactor = 205, DstAlphaFactor = 206, OneMinusDstAlphaFactor = 207, DstColorFactor = 208, OneMinusDstColorFactor = 209, SrcAlphaSaturateFactor = 210, ConstantColorFactor = 211, OneMinusConstantColorFactor = 212, ConstantAlphaFactor = 213, OneMinusConstantAlphaFactor = 214, NeverDepth = 0, AlwaysDepth = 1, LessDepth = 2, LessEqualDepth = 3, EqualDepth = 4, GreaterEqualDepth = 5, GreaterDepth = 6, NotEqualDepth = 7, MultiplyOperation = 0, MixOperation = 1, AddOperation = 2, NoToneMapping = 0, LinearToneMapping = 1, ReinhardToneMapping = 2, CineonToneMapping = 3, ACESFilmicToneMapping = 4, CustomToneMapping = 5, AgXToneMapping = 6, NeutralToneMapping = 7, AttachedBindMode = "attached", DetachedBindMode = "detached", UVMapping = 300, CubeReflectionMapping = 301, CubeRefractionMapping = 302, EquirectangularReflectionMapping = 303, EquirectangularRefractionMapping = 304, CubeUVReflectionMapping = 306, RepeatWrapping = 1e3, ClampToEdgeWrapping = 1001, MirroredRepeatWrapping = 1002, NearestFilter = 1003, NearestMipmapNearestFilter = 1004, NearestMipmapLinearFilter = 1005, LinearFilter = 1006, LinearMipmapNearestFilter = 1007, LinearMipmapLinearFilter = 1008, UnsignedByteType = 1009, ByteType = 1010, ShortType = 1011, UnsignedShortType = 1012, IntType = 1013, UnsignedIntType = 1014, FloatType = 1015, HalfFloatType = 1016, UnsignedShort4444Type = 1017, UnsignedShort5551Type = 1018, UnsignedInt248Type = 1020, UnsignedInt5999Type = 35902, AlphaFormat = 1021, RGBFormat = 1022, RGBAFormat = 1023, LuminanceFormat = 1024, LuminanceAlphaFormat = 1025, DepthFormat = 1026, DepthStencilFormat = 1027, RedFormat = 1028, RedIntegerFormat = 1029, RGFormat = 1030, RGIntegerFormat = 1031, RGBAIntegerFormat = 1033, RGB_S3TC_DXT1_Format = 33776, RGBA_S3TC_DXT1_Format = 33777, RGBA_S3TC_DXT3_Format = 33778, RGBA_S3TC_DXT5_Format = 33779, RGB_PVRTC_4BPPV1_Format = 35840, RGB_PVRTC_2BPPV1_Format = 35841, RGBA_PVRTC_4BPPV1_Format = 35842, RGBA_PVRTC_2BPPV1_Format = 35843, RGB_ETC1_Format = 36196, RGB_ETC2_Format = 37492, RGBA_ETC2_EAC_Format = 37496, RGBA_ASTC_4x4_Format = 37808, RGBA_ASTC_5x4_Format = 37809, RGBA_ASTC_5x5_Format = 37810, RGBA_ASTC_6x5_Format = 37811, RGBA_ASTC_6x6_Format = 37812, RGBA_ASTC_8x5_Format = 37813, RGBA_ASTC_8x6_Format = 37814, RGBA_ASTC_8x8_Format = 37815, RGBA_ASTC_10x5_Format = 37816, RGBA_ASTC_10x6_Format = 37817, RGBA_ASTC_10x8_Format = 37818, RGBA_ASTC_10x10_Format = 37819, RGBA_ASTC_12x10_Format = 37820, RGBA_ASTC_12x12_Format = 37821, RGBA_BPTC_Format = 36492, RGB_BPTC_SIGNED_Format = 36494, RGB_BPTC_UNSIGNED_Format = 36495, RED_RGTC1_Format = 36283, SIGNED_RED_RGTC1_Format = 36284, RED_GREEN_RGTC2_Format = 36285, SIGNED_RED_GREEN_RGTC2_Format = 36286, InterpolateDiscrete = 2300, InterpolateLinear = 2301, InterpolateSmooth = 2302, ZeroCurvatureEnding = 2400, ZeroSlopeEnding = 2401, WrapAroundEnding = 2402, NormalAnimationBlendMode = 2500, TrianglesDrawMode = 0, TriangleStripDrawMode = 1, TriangleFanDrawMode = 2, BasicDepthPacking = 3200, RGBADepthPacking = 3201, TangentSpaceNormalMap = 0, ObjectSpaceNormalMap = 1, NoColorSpace = "", SRGBColorSpace = "srgb", LinearSRGBColorSpace = "srgb-linear", LinearTransfer = "linear", SRGBTransfer = "srgb", KeepStencilOp = 7680, AlwaysStencilFunc = 519, NeverCompare = 512, LessCompare = 513, EqualCompare = 514, LessEqualCompare = 515, GreaterCompare = 516, NotEqualCompare = 517, GreaterEqualCompare = 518, AlwaysCompare = 519, StaticDrawUsage = 35044, GLSL3 = "300 es", WebGLCoordinateSystem = 2e3, WebGPUCoordinateSystem = 2001;
class EventDispatcher {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const i = n[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const _lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let _seed = 1234567;
const DEG2RAD = Math.PI / 180, RAD2DEG = 180 / Math.PI;
function generateUUID() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (_lut[r & 255] + _lut[r >> 8 & 255] + _lut[r >> 16 & 255] + _lut[r >> 24 & 255] + "-" + _lut[e & 255] + _lut[e >> 8 & 255] + "-" + _lut[e >> 16 & 15 | 64] + _lut[e >> 24 & 255] + "-" + _lut[t & 63 | 128] + _lut[t >> 8 & 255] + "-" + _lut[t >> 16 & 255] + _lut[t >> 24 & 255] + _lut[n & 255] + _lut[n >> 8 & 255] + _lut[n >> 16 & 255] + _lut[n >> 24 & 255]).toLowerCase();
}
function clamp(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function euclideanModulo(r, e) {
  return (r % e + e) % e;
}
function mapLinear(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function inverseLerp(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function lerp(r, e, t) {
  return (1 - t) * r + t * e;
}
function damp(r, e, t, n) {
  return lerp(r, e, 1 - Math.exp(-t * n));
}
function pingpong(r, e = 1) {
  return e - Math.abs(euclideanModulo(r, e * 2) - e);
}
function smoothstep(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function smootherstep(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function randInt(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function randFloat(r, e) {
  return r + Math.random() * (e - r);
}
function randFloatSpread(r) {
  return r * (0.5 - Math.random());
}
function seededRandom(r) {
  r !== void 0 && (_seed = r);
  let e = _seed += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function degToRad(r) {
  return r * DEG2RAD;
}
function radToDeg(r) {
  return r * RAD2DEG;
}
function isPowerOfTwo(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function ceilPowerOfTwo(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function floorPowerOfTwo(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function setQuaternionFromProperEuler(r, e, t, n, i) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), l = a(t / 2), c = s((e + n) / 2), u = a((e + n) / 2), h = s((e - n) / 2), d = a((e - n) / 2), p = s((n - e) / 2), _ = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * u, l * h, l * d, o * c);
      break;
    case "YZY":
      r.set(l * d, o * u, l * h, o * c);
      break;
    case "ZXZ":
      r.set(l * h, l * d, o * u, o * c);
      break;
    case "XZX":
      r.set(o * u, l * _, l * p, o * c);
      break;
    case "YXY":
      r.set(l * p, o * u, l * _, o * c);
      break;
    case "ZYZ":
      r.set(l * _, l * p, o * u, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function denormalize(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function normalize(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const MathUtils = {
  DEG2RAD,
  RAD2DEG,
  generateUUID,
  clamp,
  euclideanModulo,
  mapLinear,
  inverseLerp,
  lerp,
  damp,
  pingpong,
  smoothstep,
  smootherstep,
  randInt,
  randFloat,
  randFloatSpread,
  seededRandom,
  degToRad,
  radToDeg,
  isPowerOfTwo,
  ceilPowerOfTwo,
  floorPowerOfTwo,
  setQuaternionFromProperEuler,
  normalize,
  denormalize
};
class Vector2 {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    Vector2.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = clamp(this.x, e.x, t.x), this.y = clamp(this.y, e.y, t.y), this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = clamp(this.x, e, t), this.y = clamp(this.y, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(clamp(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(clamp(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Matrix3 {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(e, t, n, i, s, a, o, l, c) {
    Matrix3.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, l, c);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(e, t, n, i, s, a, o, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = i, u[2] = o, u[3] = t, u[4] = s, u[5] = l, u[6] = n, u[7] = a, u[8] = c, this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], u = n[4], h = n[7], d = n[2], p = n[5], _ = n[8], g = i[0], m = i[3], f = i[6], C = i[1], T = i[4], S = i[7], y = i[2], A = i[5], b = i[8];
    return s[0] = a * g + o * C + l * y, s[3] = a * m + o * T + l * A, s[6] = a * f + o * S + l * b, s[1] = c * g + u * C + h * y, s[4] = c * m + u * T + h * A, s[7] = c * f + u * S + h * b, s[2] = d * g + p * C + _ * y, s[5] = d * m + p * T + _ * A, s[8] = d * f + p * S + _ * b, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8];
    return t * a * u - t * o * c - n * s * u + n * o * l + i * s * c - i * a * l;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], h = u * a - o * c, d = o * l - u * s, p = c * s - a * l, _ = t * h + n * d + i * p;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return e[0] = h * g, e[1] = (i * c - u * n) * g, e[2] = (o * n - i * a) * g, e[3] = d * g, e[4] = (u * t - i * l) * g, e[5] = (i * s - o * t) * g, e[6] = p * g, e[7] = (n * l - c * t) * g, e[8] = (a * t - n * s) * g, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(e, t, n, i, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + e,
      -i * c,
      i * l,
      -i * (-c * a + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(e, t) {
    return this.premultiply(_m3.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(_m3.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(_m3.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const _m3 = /* @__PURE__ */ new Matrix3();
function arrayNeedsUint32(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535) return !0;
  return !1;
}
function createElementNS(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function createCanvasElement() {
  const r = createElementNS("canvas");
  return r.style.display = "block", r;
}
const _cache = {};
function warnOnce(r) {
  r in _cache || (_cache[r] = !0, console.warn(r));
}
function probeAsync(r, e, t) {
  return new Promise(function(n, i) {
    function s() {
      switch (r.clientWaitSync(e, r.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case r.WAIT_FAILED:
          i();
          break;
        case r.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function toNormalizedProjectionMatrix(r) {
  const e = r.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function toReversedProjectionMatrix(r) {
  const e = r.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const LINEAR_REC709_TO_XYZ = /* @__PURE__ */ new Matrix3().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), XYZ_TO_LINEAR_REC709 = /* @__PURE__ */ new Matrix3().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function createColorManagement() {
  const r = {
    enabled: !0,
    workingColorSpace: LinearSRGBColorSpace,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(i, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === SRGBTransfer && (i.r = SRGBToLinear(i.r), i.g = SRGBToLinear(i.g), i.b = SRGBToLinear(i.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (i.applyMatrix3(this.spaces[s].toXYZ), i.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === SRGBTransfer && (i.r = LinearToSRGB(i.r), i.g = LinearToSRGB(i.g), i.b = LinearToSRGB(i.b))), i;
    },
    fromWorkingColorSpace: function(i, s) {
      return this.convert(i, this.workingColorSpace, s);
    },
    toWorkingColorSpace: function(i, s) {
      return this.convert(i, s, this.workingColorSpace);
    },
    getPrimaries: function(i) {
      return this.spaces[i].primaries;
    },
    getTransfer: function(i) {
      return i === NoColorSpace ? LinearTransfer : this.spaces[i].transfer;
    },
    getLuminanceCoefficients: function(i, s = this.workingColorSpace) {
      return i.fromArray(this.spaces[s].luminanceCoefficients);
    },
    define: function(i) {
      Object.assign(this.spaces, i);
    },
    // Internal APIs
    _getMatrix: function(i, s, a) {
      return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(i) {
      return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(i = this.workingColorSpace) {
      return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return r.define({
    [LinearSRGBColorSpace]: {
      primaries: e,
      whitePoint: n,
      transfer: LinearTransfer,
      toXYZ: LINEAR_REC709_TO_XYZ,
      fromXYZ: XYZ_TO_LINEAR_REC709,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: SRGBColorSpace },
      outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
    },
    [SRGBColorSpace]: {
      primaries: e,
      whitePoint: n,
      transfer: SRGBTransfer,
      toXYZ: LINEAR_REC709_TO_XYZ,
      fromXYZ: XYZ_TO_LINEAR_REC709,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
    }
  }), r;
}
const ColorManagement = /* @__PURE__ */ createColorManagement();
function SRGBToLinear(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function LinearToSRGB(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let _canvas;
class ImageUtils {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @return {string} The data URI.
   */
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      _canvas === void 0 && (_canvas = createElementNS("canvas")), _canvas.width = e.width, _canvas.height = e.height;
      const n = _canvas.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = _canvas;
    }
    return t.toDataURL("image/png");
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = createElementNS("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let a = 0; a < s.length; a++)
        s[a] = SRGBToLinear(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(SRGBToLinear(t[n] / 255) * 255) : t[n] = SRGBToLinear(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let _sourceId = 0;
class Source {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: _sourceId++ }), this.uuid = generateUUID(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push(serializeImage(i[a].image)) : s.push(serializeImage(i[a]));
      } else
        s = serializeImage(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function serializeImage(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? ImageUtils.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let _textureId = 0;
class Texture extends EventDispatcher {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The min filter value.
   * @param {number} [type=UnsignedByteType] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The min filter value.
   * @param {string} [colorSpace=NoColorSpace] - The min filter value.
   */
  constructor(e = Texture.DEFAULT_IMAGE, t = Texture.DEFAULT_MAPPING, n = 1001, i = 1001, s = 1006, a = 1008, o = 1023, l = 1009, c = Texture.DEFAULT_ANISOTROPY, u = NoColorSpace) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: _textureId++ }), this.uuid = generateUUID(), this.name = "", this.source = new Source(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Vector2(0, 0), this.repeat = new Vector2(1, 1), this.center = new Vector2(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Matrix3(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  /**
   * Updates the texture transformation matrix from the from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = 300;
Texture.DEFAULT_ANISOTROPY = 1;
class Vector4 {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Vector4.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(e) {
    return this.w = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements, c = l[0], u = l[4], h = l[8], d = l[1], p = l[5], _ = l[9], g = l[2], m = l[6], f = l[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(h - g) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(h + g) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + p + f - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const T = (c + 1) / 2, S = (p + 1) / 2, y = (f + 1) / 2, A = (u + d) / 4, b = (h + g) / 4, w = (_ + m) / 4;
      return T > S && T > y ? T < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(T), i = A / n, s = b / n) : S > y ? S < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(S), n = A / i, s = w / i) : y < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(y), n = b / s, i = w / s), this.set(n, i, s, t), this;
    }
    let C = Math.sqrt((m - _) * (m - _) + (h - g) * (h - g) + (d - u) * (d - u));
    return Math.abs(C) < 1e-3 && (C = 1), this.x = (m - _) / C, this.y = (h - g) / C, this.z = (d - u) / C, this.w = Math.acos((c + p + f - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = clamp(this.x, e.x, t.x), this.y = clamp(this.y, e.y, t.y), this.z = clamp(this.z, e.z, t.z), this.w = clamp(this.w, e.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = clamp(this.x, e, t), this.y = clamp(this.y, e, t), this.z = clamp(this.z, e, t), this.w = clamp(this.w, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(clamp(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class RenderTarget extends EventDispatcher {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Vector4(0, 0, e, t), this.scissorTest = !1, this.viewport = new Vector4(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new Texture(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, s = this.textures.length; i < s; i++)
        this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const i = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new Source(i);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class WebGLRenderTarget extends RenderTarget {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class DataArrayTexture extends Texture {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Data3DTexture extends Texture {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Quaternion {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed  in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor in the range `[0,1]`.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(e, t, n, i, s, a, o) {
    let l = n[i + 0], c = n[i + 1], u = n[i + 2], h = n[i + 3];
    const d = s[a + 0], p = s[a + 1], _ = s[a + 2], g = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = _, e[t + 3] = g;
      return;
    }
    if (h !== g || l !== d || c !== p || u !== _) {
      let m = 1 - o;
      const f = l * d + c * p + u * _ + h * g, C = f >= 0 ? 1 : -1, T = 1 - f * f;
      if (T > Number.EPSILON) {
        const y = Math.sqrt(T), A = Math.atan2(y, f * C);
        m = Math.sin(m * A) / y, o = Math.sin(o * A) / y;
      }
      const S = o * C;
      if (l = l * m + d * S, c = c * m + p * S, u = u * m + _ * S, h = h * m + g * S, m === 1 - o) {
        const y = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= y, c *= y, u *= y, h *= y;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], u = n[i + 3], h = s[a], d = s[a + 1], p = s[a + 2], _ = s[a + 3];
    return e[t] = o * _ + u * h + l * p - c * d, e[t + 1] = l * _ + u * d + c * h - o * p, e[t + 2] = c * _ + u * p + o * d - l * h, e[t + 3] = u * _ - o * h - l * d - c * p, e;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(i / 2), h = o(s / 2), d = l(n / 2), p = l(i / 2), _ = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = d * u * h + c * p * _, this._y = c * p * h - d * u * _, this._z = c * u * _ + d * p * h, this._w = c * u * h - d * p * _;
        break;
      case "YXZ":
        this._x = d * u * h + c * p * _, this._y = c * p * h - d * u * _, this._z = c * u * _ - d * p * h, this._w = c * u * h + d * p * _;
        break;
      case "ZXY":
        this._x = d * u * h - c * p * _, this._y = c * p * h + d * u * _, this._z = c * u * _ + d * p * h, this._w = c * u * h - d * p * _;
        break;
      case "ZYX":
        this._x = d * u * h - c * p * _, this._y = c * p * h + d * u * _, this._z = c * u * _ - d * p * h, this._w = c * u * h + d * p * _;
        break;
      case "YZX":
        this._x = d * u * h + c * p * _, this._y = c * p * h + d * u * _, this._z = c * u * _ - d * p * h, this._w = c * u * h - d * p * _;
        break;
      case "XZY":
        this._x = d * u * h - c * p * _, this._y = c * p * h - d * u * _, this._z = c * u * _ + d * p * h, this._w = c * u * h + d * p * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], u = t[6], h = t[10], d = n + o + h;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (u - l) * p, this._y = (s - c) * p, this._z = (a - i) * p;
    } else if (n > o && n > h) {
      const p = 2 * Math.sqrt(1 + n - o - h);
      this._w = (u - l) / p, this._x = 0.25 * p, this._y = (i + a) / p, this._z = (s + c) / p;
    } else if (o > h) {
      const p = 2 * Math.sqrt(1 + o - n - h);
      this._w = (s - c) / p, this._x = (i + a) / p, this._y = 0.25 * p, this._z = (l + u) / p;
    } else {
      const p = 2 * Math.sqrt(1 + h - n - o);
      this._w = (a - i) / p, this._x = (s + c) / p, this._y = (l + u) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    return 2 * Math.acos(Math.abs(clamp(this.dot(e), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + a * o + i * c - s * l, this._y = i * u + a * l + s * o - n * c, this._z = s * u + a * c + n * l - i * o, this._w = a * u - n * o - i * l - s * c, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between quaternions.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, o), h = Math.sin((1 - t) * u) / c, d = Math.sin(t * u) / c;
    return this._w = a * h + this._w * d, this._x = n * h + this._x * d, this._y = i * h + this._y * d, this._z = s * h + this._z * d, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class Vector3 {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(e = 0, t = 0, n = 0) {
    Vector3.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(e) {
    return this.applyQuaternion(_quaternion$4.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e, t));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * i - o * n), u = 2 * (o * t - s * i), h = 2 * (s * n - a * t);
    return this.x = t + l * c + a * h - o * u, this.y = n + l * u + o * c - s * h, this.z = i + l * h + s * u - a * c, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = clamp(this.x, e.x, t.x), this.y = clamp(this.y, e.y, t.y), this.z = clamp(this.z, e.z, t.z), this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = clamp(this.x, e, t), this.y = clamp(this.y, e, t), this.z = clamp(this.z, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(clamp(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(e) {
    return this.crossVectors(this, e);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = i * l - s * o, this.y = s * a - n * l, this.z = n * o - i * a, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(e) {
    return _vector$c.copy(this).projectOnVector(e), this.sub(_vector$c);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(_vector$c.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(clamp(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const _vector$c = /* @__PURE__ */ new Vector3(), _quaternion$4 = /* @__PURE__ */ new Quaternion();
class Box3 {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new Vector3(1 / 0, 1 / 0, 1 / 0), t = new Vector3(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(_vector$b.fromArray(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(_vector$b.fromBufferAttribute(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(e, t) {
    const n = _vector$b.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, _vector$b) : _vector$b.fromBufferAttribute(s, a), _vector$b.applyMatrix4(e.matrixWorld), this.expandByPoint(_vector$b);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), _box$4.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), _box$4.copy(n.boundingBox)), _box$4.applyMatrix4(e.matrixWorld), this.union(_box$4);
    }
    const i = e.children;
    for (let s = 0, a = i.length; s < a; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(e) {
    return this.clampPoint(e.center, _vector$b), _vector$b.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(_center), _extents.subVectors(this.max, _center), _v0$2.subVectors(e.a, _center), _v1$7.subVectors(e.b, _center), _v2$4.subVectors(e.c, _center), _f0.subVectors(_v1$7, _v0$2), _f1.subVectors(_v2$4, _v1$7), _f2.subVectors(_v0$2, _v2$4);
    let t = [
      0,
      -_f0.z,
      _f0.y,
      0,
      -_f1.z,
      _f1.y,
      0,
      -_f2.z,
      _f2.y,
      _f0.z,
      0,
      -_f0.x,
      _f1.z,
      0,
      -_f1.x,
      _f2.z,
      0,
      -_f2.x,
      -_f0.y,
      _f0.x,
      0,
      -_f1.y,
      _f1.x,
      0,
      -_f2.y,
      _f2.x,
      0
    ];
    return !satForAxes(t, _v0$2, _v1$7, _v2$4, _extents) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !satForAxes(t, _v0$2, _v1$7, _v2$4, _extents)) ? !1 : (_triangleNormal.crossVectors(_f0, _f1), t = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z], satForAxes(t, _v0$2, _v1$7, _v2$4, _extents));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(e) {
    return this.clampPoint(e, _vector$b).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(_vector$b).length() * 0.5), e;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(e) {
    return this.isEmpty() ? this : (_points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(_points), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const _points = [
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3()
], _vector$b = /* @__PURE__ */ new Vector3(), _box$4 = /* @__PURE__ */ new Box3(), _v0$2 = /* @__PURE__ */ new Vector3(), _v1$7 = /* @__PURE__ */ new Vector3(), _v2$4 = /* @__PURE__ */ new Vector3(), _f0 = /* @__PURE__ */ new Vector3(), _f1 = /* @__PURE__ */ new Vector3(), _f2 = /* @__PURE__ */ new Vector3(), _center = /* @__PURE__ */ new Vector3(), _extents = /* @__PURE__ */ new Vector3(), _triangleNormal = /* @__PURE__ */ new Vector3(), _testAxis = /* @__PURE__ */ new Vector3();
function satForAxes(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    _testAxis.fromArray(r, s);
    const o = i.x * Math.abs(_testAxis.x) + i.y * Math.abs(_testAxis.y) + i.z * Math.abs(_testAxis.z), l = e.dot(_testAxis), c = t.dot(_testAxis), u = n.dot(_testAxis);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
const _box$3 = /* @__PURE__ */ new Box3(), _v1$6 = /* @__PURE__ */ new Vector3(), _v2$3 = /* @__PURE__ */ new Vector3();
class Sphere {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new Vector3(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : _box$3.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(e) {
    return this.center.add(e), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    _v1$6.subVectors(e, this.center);
    const t = _v1$6.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(_v1$6, i / n), this.radius += i;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (_v2$3.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)), this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const _vector$a = /* @__PURE__ */ new Vector3(), _segCenter = /* @__PURE__ */ new Vector3(), _segDir = /* @__PURE__ */ new Vector3(), _diff = /* @__PURE__ */ new Vector3(), _edge1 = /* @__PURE__ */ new Vector3(), _edge2 = /* @__PURE__ */ new Vector3(), _normal$1 = /* @__PURE__ */ new Vector3();
class Ray {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new Vector3(), t = new Vector3(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(e) {
    return this.origin.copy(this.at(e, _vector$a)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(e) {
    const t = _vector$a.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (_vector$a.copy(this.origin).addScaledVector(this.direction, t), _vector$a.distanceToSquared(e));
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(e, t, n, i) {
    _segCenter.copy(e).add(t).multiplyScalar(0.5), _segDir.copy(t).sub(e).normalize(), _diff.copy(this.origin).sub(_segCenter);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(_segDir), o = _diff.dot(this.direction), l = -_diff.dot(_segDir), c = _diff.lengthSq(), u = Math.abs(1 - a * a);
    let h, d, p, _;
    if (u > 0)
      if (h = a * l - o, d = a * o - l, _ = s * u, h >= 0)
        if (d >= -_)
          if (d <= _) {
            const g = 1 / u;
            h *= g, d *= g, p = h * (h + a * d + 2 * o) + d * (a * h + d + 2 * l) + c;
          } else
            d = s, h = Math.max(0, -(a * d + o)), p = -h * h + d * (d + 2 * l) + c;
        else
          d = -s, h = Math.max(0, -(a * d + o)), p = -h * h + d * (d + 2 * l) + c;
      else
        d <= -_ ? (h = Math.max(0, -(-a * s + o)), d = h > 0 ? -s : Math.min(Math.max(-s, -l), s), p = -h * h + d * (d + 2 * l) + c) : d <= _ ? (h = 0, d = Math.min(Math.max(-s, -l), s), p = d * (d + 2 * l) + c) : (h = Math.max(0, -(a * s + o)), d = h > 0 ? s : Math.min(Math.max(-s, -l), s), p = -h * h + d * (d + 2 * l) + c);
    else
      d = a > 0 ? -s : s, h = Math.max(0, -(a * d + o)), p = -h * h + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(_segCenter).addScaledVector(_segDir, d), p;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(e, t) {
    _vector$a.subVectors(e.center, this.origin);
    const n = _vector$a.dot(this.direction), i = _vector$a.dot(_vector$a) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(e, t) {
    let n, i, s, a, o, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), u >= 0 ? (s = (e.min.y - d.y) * u, a = (e.max.y - d.y) * u) : (s = (e.max.y - d.y) * u, a = (e.min.y - d.y) * u), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), h >= 0 ? (o = (e.min.z - d.z) * h, l = (e.max.z - d.z) * h) : (o = (e.max.z - d.z) * h, l = (e.min.z - d.z) * h), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, _vector$a) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(e, t, n, i, s) {
    _edge1.subVectors(t, e), _edge2.subVectors(n, e), _normal$1.crossVectors(_edge1, _edge2);
    let a = this.direction.dot(_normal$1), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    _diff.subVectors(this.origin, e);
    const l = o * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(_edge1.cross(_diff));
    if (c < 0 || l + c > a)
      return null;
    const u = -o * _diff.dot(_normal$1);
    return u < 0 ? null : this.at(u / a, s);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class Matrix4 {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(e, t, n, i, s, a, o, l, c, u, h, d, p, _, g, m) {
    Matrix4.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, l, c, u, h, d, p, _, g, m);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(e, t, n, i, s, a, o, l, c, u, h, d, p, _, g, m) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = i, f[1] = s, f[5] = a, f[9] = o, f[13] = l, f[2] = c, f[6] = u, f[10] = h, f[14] = d, f[3] = p, f[7] = _, f[11] = g, f[15] = m, this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new Matrix4().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / _v1$5.setFromMatrixColumn(e, 0).length(), s = 1 / _v1$5.setFromMatrixColumn(e, 1).length(), a = 1 / _v1$5.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page]{@link https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix}
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(s), h = Math.sin(s);
    if (e.order === "XYZ") {
      const d = a * u, p = a * h, _ = o * u, g = o * h;
      t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = p + _ * c, t[5] = d - g * c, t[9] = -o * l, t[2] = g - d * c, t[6] = _ + p * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const d = l * u, p = l * h, _ = c * u, g = c * h;
      t[0] = d + g * o, t[4] = _ * o - p, t[8] = a * c, t[1] = a * h, t[5] = a * u, t[9] = -o, t[2] = p * o - _, t[6] = g + d * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const d = l * u, p = l * h, _ = c * u, g = c * h;
      t[0] = d - g * o, t[4] = -a * h, t[8] = _ + p * o, t[1] = p + _ * o, t[5] = a * u, t[9] = g - d * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const d = a * u, p = a * h, _ = o * u, g = o * h;
      t[0] = l * u, t[4] = _ * c - p, t[8] = d * c + g, t[1] = l * h, t[5] = g * c + d, t[9] = p * c - _, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const d = a * l, p = a * c, _ = o * l, g = o * c;
      t[0] = l * u, t[4] = g - d * h, t[8] = _ * h + p, t[1] = h, t[5] = a * u, t[9] = -o * u, t[2] = -c * u, t[6] = p * h + _, t[10] = d - g * h;
    } else if (e.order === "XZY") {
      const d = a * l, p = a * c, _ = o * l, g = o * c;
      t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = d * h + g, t[5] = a * u, t[9] = p * h - _, t[2] = _ * h - p, t[6] = o * u, t[10] = g * h + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here]{@link https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion}
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(e) {
    return this.compose(_zero, e, _one);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(e, t, n) {
    const i = this.elements;
    return _z.subVectors(e, t), _z.lengthSq() === 0 && (_z.z = 1), _z.normalize(), _x.crossVectors(n, _z), _x.lengthSq() === 0 && (Math.abs(n.z) === 1 ? _z.x += 1e-4 : _z.z += 1e-4, _z.normalize(), _x.crossVectors(n, _z)), _x.normalize(), _y.crossVectors(_z, _x), i[0] = _x.x, i[4] = _y.x, i[8] = _z.x, i[1] = _x.y, i[5] = _y.y, i[9] = _z.y, i[2] = _x.z, i[6] = _y.z, i[10] = _z.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], u = n[1], h = n[5], d = n[9], p = n[13], _ = n[2], g = n[6], m = n[10], f = n[14], C = n[3], T = n[7], S = n[11], y = n[15], A = i[0], b = i[4], w = i[8], E = i[12], M = i[1], P = i[5], V = i[9], N = i[13], z = i[2], K = i[6], H = i[10], J = i[14], k = i[3], ie = i[7], ce = i[11], ge = i[15];
    return s[0] = a * A + o * M + l * z + c * k, s[4] = a * b + o * P + l * K + c * ie, s[8] = a * w + o * V + l * H + c * ce, s[12] = a * E + o * N + l * J + c * ge, s[1] = u * A + h * M + d * z + p * k, s[5] = u * b + h * P + d * K + p * ie, s[9] = u * w + h * V + d * H + p * ce, s[13] = u * E + h * N + d * J + p * ge, s[2] = _ * A + g * M + m * z + f * k, s[6] = _ * b + g * P + m * K + f * ie, s[10] = _ * w + g * V + m * H + f * ce, s[14] = _ * E + g * N + m * J + f * ge, s[3] = C * A + T * M + S * z + y * k, s[7] = C * b + T * P + S * K + y * ie, s[11] = C * w + T * V + S * H + y * ce, s[15] = C * E + T * N + S * J + y * ge, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here]{@link http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html}.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], u = e[2], h = e[6], d = e[10], p = e[14], _ = e[3], g = e[7], m = e[11], f = e[15];
    return _ * (+s * l * h - i * c * h - s * o * d + n * c * d + i * o * p - n * l * p) + g * (+t * l * p - t * c * d + s * a * d - i * a * p + i * c * u - s * l * u) + m * (+t * c * h - t * o * p - s * a * h + n * a * p + s * o * u - n * c * u) + f * (-i * o * u - t * l * h + t * o * d + i * a * h - n * a * d + n * l * u);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], h = e[9], d = e[10], p = e[11], _ = e[12], g = e[13], m = e[14], f = e[15], C = h * m * c - g * d * c + g * l * p - o * m * p - h * l * f + o * d * f, T = _ * d * c - u * m * c - _ * l * p + a * m * p + u * l * f - a * d * f, S = u * g * c - _ * h * c + _ * o * p - a * g * p - u * o * f + a * h * f, y = _ * h * l - u * g * l - _ * o * d + a * g * d + u * o * m - a * h * m, A = t * C + n * T + i * S + s * y;
    if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / A;
    return e[0] = C * b, e[1] = (g * d * s - h * m * s - g * i * p + n * m * p + h * i * f - n * d * f) * b, e[2] = (o * m * s - g * l * s + g * i * c - n * m * c - o * i * f + n * l * f) * b, e[3] = (h * l * s - o * d * s - h * i * c + n * d * c + o * i * p - n * l * p) * b, e[4] = T * b, e[5] = (u * m * s - _ * d * s + _ * i * p - t * m * p - u * i * f + t * d * f) * b, e[6] = (_ * l * s - a * m * s - _ * i * c + t * m * c + a * i * f - t * l * f) * b, e[7] = (a * d * s - u * l * s + u * i * c - t * d * c - a * i * p + t * l * p) * b, e[8] = S * b, e[9] = (_ * h * s - u * g * s - _ * n * p + t * g * p + u * n * f - t * h * f) * b, e[10] = (a * g * s - _ * o * s + _ * n * c - t * g * c - a * n * f + t * o * f) * b, e[11] = (u * o * s - a * h * s - u * n * c + t * h * c + a * n * p - t * o * p) * b, e[12] = y * b, e[13] = (u * g * i - _ * h * i + _ * n * d - t * g * d - u * n * m + t * h * m) * b, e[14] = (_ * o * i - a * g * i - _ * n * l + t * g * l + a * n * m - t * o * m) * b, e[15] = (a * h * i - u * o * i + u * n * l - t * h * l - a * n * d + t * o * d) * b, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here]{@link https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199}.
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, u = s * o;
    return this.set(
      c * a + n,
      c * o - i * l,
      c * l + i * o,
      0,
      c * o + i * l,
      u * o + n,
      u * l - i * a,
      0,
      c * l - i * o,
      u * l + i * a,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(e, t, n, i, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(e, t, n) {
    const i = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, u = a + a, h = o + o, d = s * c, p = s * u, _ = s * h, g = a * u, m = a * h, f = o * h, C = l * c, T = l * u, S = l * h, y = n.x, A = n.y, b = n.z;
    return i[0] = (1 - (g + f)) * y, i[1] = (p + S) * y, i[2] = (_ - T) * y, i[3] = 0, i[4] = (p - S) * A, i[5] = (1 - (d + f)) * A, i[6] = (m + C) * A, i[7] = 0, i[8] = (_ + T) * b, i[9] = (m - C) * b, i[10] = (1 - (d + g)) * b, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(e, t, n) {
    const i = this.elements;
    let s = _v1$5.set(i[0], i[1], i[2]).length();
    const a = _v1$5.set(i[4], i[5], i[6]).length(), o = _v1$5.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], _m1$2.copy(this);
    const c = 1 / s, u = 1 / a, h = 1 / o;
    return _m1$2.elements[0] *= c, _m1$2.elements[1] *= c, _m1$2.elements[2] *= c, _m1$2.elements[4] *= u, _m1$2.elements[5] *= u, _m1$2.elements[6] *= u, _m1$2.elements[8] *= h, _m1$2.elements[9] *= h, _m1$2.elements[10] *= h, t.setFromRotationMatrix(_m1$2), n.x = s, n.y = a, n.z = o, this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(e, t, n, i, s, a, o = 2e3) {
    const l = this.elements, c = 2 * s / (t - e), u = 2 * s / (n - i), h = (t + e) / (t - e), d = (n + i) / (n - i);
    let p, _;
    if (o === 2e3)
      p = -(a + s) / (a - s), _ = -2 * a * s / (a - s);
    else if (o === 2001)
      p = -a / (a - s), _ = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = u, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(e, t, n, i, s, a, o = 2e3) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - i), h = 1 / (a - s), d = (t + e) * c, p = (n + i) * u;
    let _, g;
    if (o === 2e3)
      _ = (a + s) * h, g = -2 * h;
    else if (o === 2001)
      _ = s * h, g = -1 * h;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = g, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const _v1$5 = /* @__PURE__ */ new Vector3(), _m1$2 = /* @__PURE__ */ new Matrix4(), _zero = /* @__PURE__ */ new Vector3(0, 0, 0), _one = /* @__PURE__ */ new Vector3(1, 1, 1), _x = /* @__PURE__ */ new Vector3(), _y = /* @__PURE__ */ new Vector3(), _z = /* @__PURE__ */ new Vector3(), _matrix$2 = /* @__PURE__ */ new Matrix4(), _quaternion$3 = /* @__PURE__ */ new Quaternion();
class Euler {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, i = Euler.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], a = i[4], o = i[8], l = i[1], c = i[5], u = i[9], h = i[2], d = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(clamp(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-clamp(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(clamp(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-h, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-clamp(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(clamp(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-clamp(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(e, t, n) {
    return _matrix$2.makeRotationFromQuaternion(e), this.setFromRotationMatrix(_matrix$2, t, n);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(e) {
    return _quaternion$3.setFromEuler(this), this.setFromQuaternion(_quaternion$3, e);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Euler.DEFAULT_ORDER = "XYZ";
class Layers {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let _object3DId = 0;
const _v1$4 = /* @__PURE__ */ new Vector3(), _q1 = /* @__PURE__ */ new Quaternion(), _m1$1$1 = /* @__PURE__ */ new Matrix4(), _target = /* @__PURE__ */ new Vector3(), _position$3 = /* @__PURE__ */ new Vector3(), _scale$2 = /* @__PURE__ */ new Vector3(), _quaternion$2 = /* @__PURE__ */ new Quaternion(), _xAxis = /* @__PURE__ */ new Vector3(1, 0, 0), _yAxis = /* @__PURE__ */ new Vector3(0, 1, 0), _zAxis = /* @__PURE__ */ new Vector3(0, 0, 1), _addedEvent = { type: "added" }, _removedEvent = { type: "removed" }, _childaddedEvent = { type: "childadded", child: null }, _childremovedEvent = { type: "childremoved", child: null };
class Object3D extends EventDispatcher {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: _object3DId++ }), this.uuid = generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Object3D.DEFAULT_UP.clone();
    const e = new Vector3(), t = new Euler(), n = new Quaternion(), i = new Vector3(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new Matrix4()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Matrix3()
      }
    }), this.matrix = new Matrix4(), this.matrixWorld = new Matrix4(), this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Layers(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(e, t) {
    return _q1.setFromAxisAngle(e, t), this.quaternion.multiply(_q1), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return _q1.setFromAxisAngle(e, t), this.quaternion.premultiply(_q1), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(_xAxis, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(_yAxis, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(_zAxis, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return _v1$4.copy(e).applyQuaternion(this.quaternion), this.position.add(_v1$4.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(_xAxis, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(_yAxis, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(_zAxis, e);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's word space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(_m1$1$1.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(e, t, n) {
    e.isVector3 ? _target.copy(e) : _target.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), _position$3.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? _m1$1$1.lookAt(_position$3, _target, this.up) : _m1$1$1.lookAt(_target, _position$3, this.up), this.quaternion.setFromRotationMatrix(_m1$1$1), i && (_m1$1$1.extractRotation(i.matrixWorld), _q1.setFromRotationMatrix(_m1$1$1), this.quaternion.premultiply(_q1.invert()));
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(_addedEvent), _childaddedEvent.child = e, this.dispatchEvent(_childaddedEvent), _childaddedEvent.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(_removedEvent), _childremovedEvent.child = e, this.dispatchEvent(_childremovedEvent), _childremovedEvent.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(e) {
    return this.updateWorldMatrix(!0, !1), _m1$1$1.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), _m1$1$1.multiply(e.parent.matrixWorld)), e.applyMatrix4(_m1$1$1), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(_addedEvent), _childaddedEvent.child = e, this.dispatchEvent(_childaddedEvent), _childaddedEvent.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let s = 0, a = i.length; s < a; s++)
      i[s].getObjectsByProperty(e, t, n);
    return n;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_position$3, e, _scale$2), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_position$3, _quaternion$2, e), e;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldAutoUpdate} is set to `false`.
   */
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].updateMatrixWorld(e);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++)
        i[s].updateWorldMatrix(!1, !0);
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            s(e.shapes, h);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        i.material = o;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), u = a(e.images), h = a(e.shapes), d = a(e.skeletons), p = a(e.animations), _ = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), _.length > 0 && (n.nodes = _);
    }
    return n.object = i, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Object3D.DEFAULT_UP = /* @__PURE__ */ new Vector3(0, 1, 0);
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const _v0$1 = /* @__PURE__ */ new Vector3(), _v1$3 = /* @__PURE__ */ new Vector3(), _v2$2 = /* @__PURE__ */ new Vector3(), _v3$2 = /* @__PURE__ */ new Vector3(), _vab = /* @__PURE__ */ new Vector3(), _vac = /* @__PURE__ */ new Vector3(), _vbc = /* @__PURE__ */ new Vector3(), _vap = /* @__PURE__ */ new Vector3(), _vbp = /* @__PURE__ */ new Vector3(), _vcp = /* @__PURE__ */ new Vector3(), _v40 = /* @__PURE__ */ new Vector4(), _v41 = /* @__PURE__ */ new Vector4(), _v42 = /* @__PURE__ */ new Vector4();
class Triangle {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new Vector3(), t = new Vector3(), n = new Vector3()) {
    this.a = e, this.b = t, this.c = n;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), _v0$1.subVectors(e, t), i.cross(_v0$1);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(e, t, n, i, s) {
    _v0$1.subVectors(i, t), _v1$3.subVectors(n, t), _v2$2.subVectors(e, t);
    const a = _v0$1.dot(_v0$1), o = _v0$1.dot(_v1$3), l = _v0$1.dot(_v2$2), c = _v1$3.dot(_v1$3), u = _v1$3.dot(_v2$2), h = a * c - o * o;
    if (h === 0)
      return s.set(0, 0, 0), null;
    const d = 1 / h, p = (c * l - o * u) * d, _ = (a * u - o * l) * d;
    return s.set(1 - p - _, _, p);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, _v3$2) === null ? !1 : _v3$2.x >= 0 && _v3$2.y >= 0 && _v3$2.x + _v3$2.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(e, t, n, i, s, a, o, l) {
    return this.getBarycoord(e, t, n, i, _v3$2) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, _v3$2.x), l.addScaledVector(a, _v3$2.y), l.addScaledVector(o, _v3$2.z), l);
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(e, t, n, i, s, a) {
    return _v40.setScalar(0), _v41.setScalar(0), _v42.setScalar(0), _v40.fromBufferAttribute(e, t), _v41.fromBufferAttribute(e, n), _v42.fromBufferAttribute(e, i), a.setScalar(0), a.addScaledVector(_v40, s.x), a.addScaledVector(_v41, s.y), a.addScaledVector(_v42, s.z), a;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(e, t, n, i) {
    return _v0$1.subVectors(n, t), _v1$3.subVectors(e, t), _v0$1.cross(_v1$3).dot(i) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return _v0$1.subVectors(this.c, this.b), _v1$3.subVectors(this.a, this.b), _v0$1.cross(_v1$3).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(e) {
    return Triangle.getNormal(this.a, this.b, this.c, e);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(e, t) {
    return Triangle.getBarycoord(e, this.a, this.b, this.c, t);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(e, t, n, i, s) {
    return Triangle.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(e) {
    return Triangle.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return Triangle.isFrontFacing(this.a, this.b, this.c, e);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    _vab.subVectors(i, n), _vac.subVectors(s, n), _vap.subVectors(e, n);
    const l = _vab.dot(_vap), c = _vac.dot(_vap);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    _vbp.subVectors(e, i);
    const u = _vab.dot(_vbp), h = _vac.dot(_vbp);
    if (u >= 0 && h <= u)
      return t.copy(i);
    const d = l * h - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return a = l / (l - u), t.copy(n).addScaledVector(_vab, a);
    _vcp.subVectors(e, s);
    const p = _vab.dot(_vcp), _ = _vac.dot(_vcp);
    if (_ >= 0 && p <= _)
      return t.copy(s);
    const g = p * c - l * _;
    if (g <= 0 && c >= 0 && _ <= 0)
      return o = c / (c - _), t.copy(n).addScaledVector(_vac, o);
    const m = u * _ - p * h;
    if (m <= 0 && h - u >= 0 && p - _ >= 0)
      return _vbc.subVectors(s, i), o = (h - u) / (h - u + (p - _)), t.copy(i).addScaledVector(_vbc, o);
    const f = 1 / (m + g + d);
    return a = g * f, o = d * f, t.copy(n).addScaledVector(_vab, a).addScaledVector(_vac, o);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const _colorKeywords = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, _hslA = { h: 0, s: 0, l: 0 }, _hslB = { h: 0, s: 0, l: 0 };
function hue2rgb(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class Color {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(e, t = SRGBColorSpace) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ColorManagement.toWorkingColorSpace(this, t), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(e, t, n, i = ColorManagement.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, ColorManagement.toWorkingColorSpace(this, i), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(e, t, n, i = ColorManagement.workingColorSpace) {
    if (e = euclideanModulo(e, 1), t = clamp(t, 0, 1), n = clamp(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = hue2rgb(a, s, e + 1 / 3), this.g = hue2rgb(a, s, e), this.b = hue2rgb(a, s, e - 1 / 3);
    }
    return ColorManagement.toWorkingColorSpace(this, i), this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name]{@link https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart} -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(e, t = SRGBColorSpace) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(e, t = SRGBColorSpace) {
    const n = _colorKeywords[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(e) {
    return this.r = SRGBToLinear(e.r), this.g = SRGBToLinear(e.g), this.b = SRGBToLinear(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = LinearToSRGB(e.r), this.g = LinearToSRGB(e.g), this.b = LinearToSRGB(e.b), this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(e = SRGBColorSpace) {
    return ColorManagement.fromWorkingColorSpace(_color.copy(this), e), Math.round(clamp(_color.r * 255, 0, 255)) * 65536 + Math.round(clamp(_color.g * 255, 0, 255)) * 256 + Math.round(clamp(_color.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = SRGBColorSpace) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:0,s:0,l:0}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(e, t = ColorManagement.workingColorSpace) {
    ColorManagement.fromWorkingColorSpace(_color.copy(this), t);
    const n = _color.r, i = _color.g, s = _color.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const h = a - o;
      switch (c = u <= 0.5 ? h / (a + o) : h / (2 - a - o), a) {
        case n:
          l = (i - s) / h + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / h + 2;
          break;
        case s:
          l = (n - i) / h + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = ColorManagement.workingColorSpace) {
    return ColorManagement.fromWorkingColorSpace(_color.copy(this), t), e.r = _color.r, e.g = _color.g, e.b = _color.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = SRGBColorSpace) {
    ColorManagement.fromWorkingColorSpace(_color.copy(this), e);
    const t = _color.r, n = _color.g, i = _color.b;
    return e !== SRGBColorSpace ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(e, t, n) {
    return this.getHSL(_hslA), this.setHSL(_hslA.h + e, _hslA.s + t, _hslA.l + n);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(e, t) {
    this.getHSL(_hslA), e.getHSL(_hslB);
    const n = lerp(_hslA.h, _hslB.h, t), i = lerp(_hslA.s, _hslB.s, t), s = lerp(_hslA.l, _hslB.l, t);
    return this.setHSL(n, i, s), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const _color = /* @__PURE__ */ new Color();
Color.NAMES = _colorKeywords;
let _materialId = 0;
class Material extends EventDispatcher {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: _materialId++ }), this.uuid = generateUUID(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Color(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL]{@link https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language}.
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures), a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class MeshBasicMaterial extends Material {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Color(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Euler(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const _vector$9 = /* @__PURE__ */ new Vector3(), _vector2$1 = /* @__PURE__ */ new Vector2();
let _id$2 = 0;
class BufferAttribute {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: _id$2++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        _vector2$1.fromBufferAttribute(this, t), _vector2$1.applyMatrix3(e), this.setXY(t, _vector2$1.x, _vector2$1.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        _vector$9.fromBufferAttribute(this, t), _vector$9.applyMatrix3(e), this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _vector$9.fromBufferAttribute(this, t), _vector$9.applyMatrix4(e), this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _vector$9.fromBufferAttribute(this, t), _vector$9.applyNormalMatrix(e), this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _vector$9.fromBufferAttribute(this, t), _vector$9.transformDirection(e), this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = denormalize(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = normalize(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = denormalize(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = normalize(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = denormalize(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = normalize(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = denormalize(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = normalize(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = denormalize(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = normalize(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = normalize(t, this.array), n = normalize(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = normalize(t, this.array), n = normalize(n, this.array), i = normalize(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = normalize(t, this.array), n = normalize(n, this.array), i = normalize(i, this.array), s = normalize(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
}
class Uint16BufferAttribute extends BufferAttribute {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Uint32BufferAttribute extends BufferAttribute {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Float32BufferAttribute extends BufferAttribute {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let _id$1 = 0;
const _m1$3 = /* @__PURE__ */ new Matrix4(), _obj = /* @__PURE__ */ new Object3D(), _offset = /* @__PURE__ */ new Vector3(), _box$2 = /* @__PURE__ */ new Box3(), _boxMorphTargets = /* @__PURE__ */ new Box3(), _vector$8 = /* @__PURE__ */ new Vector3();
class BufferGeometry extends EventDispatcher {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: _id$1++ }), this.uuid = generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (arrayNeedsUint32(e) ? Uint32BufferAttribute : Uint16BufferAttribute)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Matrix3().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return _m1$3.makeRotationFromQuaternion(e), this.applyMatrix4(_m1$3), this;
  }
  rotateX(e) {
    return _m1$3.makeRotationX(e), this.applyMatrix4(_m1$3), this;
  }
  rotateY(e) {
    return _m1$3.makeRotationY(e), this.applyMatrix4(_m1$3), this;
  }
  rotateZ(e) {
    return _m1$3.makeRotationZ(e), this.applyMatrix4(_m1$3), this;
  }
  translate(e, t, n) {
    return _m1$3.makeTranslation(e, t, n), this.applyMatrix4(_m1$3), this;
  }
  scale(e, t, n) {
    return _m1$3.makeScale(e, t, n), this.applyMatrix4(_m1$3), this;
  }
  lookAt(e) {
    return _obj.lookAt(e), _obj.updateMatrix(), this.applyMatrix4(_obj.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(_offset).negate(), this.translate(_offset.x, _offset.y, _offset.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let i = 0, s = e.length; i < s; i++) {
        const a = e[i];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Float32BufferAttribute(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let i = 0; i < n; i++) {
        const s = e[i];
        t.setXYZ(i, s.x, s.y, s.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Box3());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new Vector3(-1 / 0, -1 / 0, -1 / 0),
        new Vector3(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          _box$2.setFromBufferAttribute(s), this.morphTargetsRelative ? (_vector$8.addVectors(this.boundingBox.min, _box$2.min), this.boundingBox.expandByPoint(_vector$8), _vector$8.addVectors(this.boundingBox.max, _box$2.max), this.boundingBox.expandByPoint(_vector$8)) : (this.boundingBox.expandByPoint(_box$2.min), this.boundingBox.expandByPoint(_box$2.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Sphere());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new Vector3(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (_box$2.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          _boxMorphTargets.setFromBufferAttribute(o), this.morphTargetsRelative ? (_vector$8.addVectors(_box$2.min, _boxMorphTargets.min), _box$2.expandByPoint(_vector$8), _vector$8.addVectors(_box$2.max, _boxMorphTargets.max), _box$2.expandByPoint(_vector$8)) : (_box$2.expandByPoint(_boxMorphTargets.min), _box$2.expandByPoint(_boxMorphTargets.max));
        }
      _box$2.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        _vector$8.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(_vector$8));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            _vector$8.fromBufferAttribute(o, c), l && (_offset.fromBufferAttribute(e, c), _vector$8.add(_offset)), i = Math.max(i, n.distanceToSquared(_vector$8));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, i = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new BufferAttribute(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let w = 0; w < n.count; w++)
      o[w] = new Vector3(), l[w] = new Vector3();
    const c = new Vector3(), u = new Vector3(), h = new Vector3(), d = new Vector2(), p = new Vector2(), _ = new Vector2(), g = new Vector3(), m = new Vector3();
    function f(w, E, M) {
      c.fromBufferAttribute(n, w), u.fromBufferAttribute(n, E), h.fromBufferAttribute(n, M), d.fromBufferAttribute(s, w), p.fromBufferAttribute(s, E), _.fromBufferAttribute(s, M), u.sub(c), h.sub(c), p.sub(d), _.sub(d);
      const P = 1 / (p.x * _.y - _.x * p.y);
      isFinite(P) && (g.copy(u).multiplyScalar(_.y).addScaledVector(h, -p.y).multiplyScalar(P), m.copy(h).multiplyScalar(p.x).addScaledVector(u, -_.x).multiplyScalar(P), o[w].add(g), o[E].add(g), o[M].add(g), l[w].add(m), l[E].add(m), l[M].add(m));
    }
    let C = this.groups;
    C.length === 0 && (C = [{
      start: 0,
      count: e.count
    }]);
    for (let w = 0, E = C.length; w < E; ++w) {
      const M = C[w], P = M.start, V = M.count;
      for (let N = P, z = P + V; N < z; N += 3)
        f(
          e.getX(N + 0),
          e.getX(N + 1),
          e.getX(N + 2)
        );
    }
    const T = new Vector3(), S = new Vector3(), y = new Vector3(), A = new Vector3();
    function b(w) {
      y.fromBufferAttribute(i, w), A.copy(y);
      const E = o[w];
      T.copy(E), T.sub(y.multiplyScalar(y.dot(E))).normalize(), S.crossVectors(A, E);
      const P = S.dot(l[w]) < 0 ? -1 : 1;
      a.setXYZW(w, T.x, T.y, T.z, P);
    }
    for (let w = 0, E = C.length; w < E; ++w) {
      const M = C[w], P = M.start, V = M.count;
      for (let N = P, z = P + V; N < z; N += 3)
        b(e.getX(N + 0)), b(e.getX(N + 1)), b(e.getX(N + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new BufferAttribute(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, p = n.count; d < p; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new Vector3(), s = new Vector3(), a = new Vector3(), o = new Vector3(), l = new Vector3(), c = new Vector3(), u = new Vector3(), h = new Vector3();
      if (e)
        for (let d = 0, p = e.count; d < p; d += 3) {
          const _ = e.getX(d + 0), g = e.getX(d + 1), m = e.getX(d + 2);
          i.fromBufferAttribute(t, _), s.fromBufferAttribute(t, g), a.fromBufferAttribute(t, m), u.subVectors(a, s), h.subVectors(i, s), u.cross(h), o.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), c.fromBufferAttribute(n, m), o.add(u), l.add(u), c.add(u), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(g, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let d = 0, p = t.count; d < p; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), u.subVectors(a, s), h.subVectors(i, s), u.cross(h), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      _vector$8.fromBufferAttribute(e, t), _vector$8.normalize(), e.setXYZ(t, _vector$8.x, _vector$8.y, _vector$8.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, u = o.itemSize, h = o.normalized, d = new c.constructor(l.length * u);
      let p = 0, _ = 0;
      for (let g = 0, m = l.length; g < m; g++) {
        o.isInterleavedBufferAttribute ? p = l[g] * o.data.stride + o.offset : p = l[g] * u;
        for (let f = 0; f < u; f++)
          d[_++] = c[p++];
      }
      return new BufferAttribute(d, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new BufferGeometry(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let u = 0, h = c.length; u < h; u++) {
        const d = c[u], p = e(d, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let h = 0, d = c.length; h < d; h++) {
        const p = c[h];
        u.push(p.toJSON(e.data));
      }
      u.length > 0 && (i[l] = u, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [], h = s[c];
      for (let d = 0, p = h.length; d < p; d++)
        u.push(h[d].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const h = a[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const _inverseMatrix$3 = /* @__PURE__ */ new Matrix4(), _ray$3 = /* @__PURE__ */ new Ray(), _sphere$6 = /* @__PURE__ */ new Sphere(), _sphereHitAt = /* @__PURE__ */ new Vector3(), _vA$1 = /* @__PURE__ */ new Vector3(), _vB$1 = /* @__PURE__ */ new Vector3(), _vC$1 = /* @__PURE__ */ new Vector3(), _tempA = /* @__PURE__ */ new Vector3(), _morphA = /* @__PURE__ */ new Vector3(), _intersectionPoint = /* @__PURE__ */ new Vector3(), _intersectionPointWorld = /* @__PURE__ */ new Vector3();
class Mesh extends Object3D {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new BufferGeometry(), t = new MeshBasicMaterial()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      _morphA.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l], h = s[l];
        u !== 0 && (_tempA.fromBufferAttribute(h, e), a ? _morphA.addScaledVector(_tempA, u) : _morphA.addScaledVector(_tempA.sub(t), u));
      }
      t.add(_morphA);
    }
    return t;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), _sphere$6.copy(n.boundingSphere), _sphere$6.applyMatrix4(s), _ray$3.copy(e.ray).recast(e.near), !(_sphere$6.containsPoint(_ray$3.origin) === !1 && (_ray$3.intersectSphere(_sphere$6, _sphereHitAt) === null || _ray$3.origin.distanceToSquared(_sphereHitAt) > (e.far - e.near) ** 2)) && (_inverseMatrix$3.copy(s).invert(), _ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3), !(n.boundingBox !== null && _ray$3.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, _ray$3)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, h = s.attributes.normal, d = s.groups, p = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let _ = 0, g = d.length; _ < g; _++) {
          const m = d[_], f = a[m.materialIndex], C = Math.max(m.start, p.start), T = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
          for (let S = C, y = T; S < y; S += 3) {
            const A = o.getX(S), b = o.getX(S + 1), w = o.getX(S + 2);
            i = checkGeometryIntersection(this, f, e, n, c, u, h, A, b, w), i && (i.faceIndex = Math.floor(S / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const _ = Math.max(0, p.start), g = Math.min(o.count, p.start + p.count);
        for (let m = _, f = g; m < f; m += 3) {
          const C = o.getX(m), T = o.getX(m + 1), S = o.getX(m + 2);
          i = checkGeometryIntersection(this, a, e, n, c, u, h, C, T, S), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let _ = 0, g = d.length; _ < g; _++) {
          const m = d[_], f = a[m.materialIndex], C = Math.max(m.start, p.start), T = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
          for (let S = C, y = T; S < y; S += 3) {
            const A = S, b = S + 1, w = S + 2;
            i = checkGeometryIntersection(this, f, e, n, c, u, h, A, b, w), i && (i.faceIndex = Math.floor(S / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const _ = Math.max(0, p.start), g = Math.min(l.count, p.start + p.count);
        for (let m = _, f = g; m < f; m += 3) {
          const C = m, T = m + 1, S = m + 2;
          i = checkGeometryIntersection(this, a, e, n, c, u, h, C, T, S), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
  }
}
function checkIntersection$1(r, e, t, n, i, s, a, o) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(a, s, i, !0, o) : l = n.intersectTriangle(i, s, a, e.side === 0, o), l === null) return null;
  _intersectionPointWorld.copy(o), _intersectionPointWorld.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(_intersectionPointWorld);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: _intersectionPointWorld.clone(),
    object: r
  };
}
function checkGeometryIntersection(r, e, t, n, i, s, a, o, l, c) {
  r.getVertexPosition(o, _vA$1), r.getVertexPosition(l, _vB$1), r.getVertexPosition(c, _vC$1);
  const u = checkIntersection$1(r, e, t, n, _vA$1, _vB$1, _vC$1, _intersectionPoint);
  if (u) {
    const h = new Vector3();
    Triangle.getBarycoord(_intersectionPoint, _vA$1, _vB$1, _vC$1, h), i && (u.uv = Triangle.getInterpolatedAttribute(i, o, l, c, h, new Vector2())), s && (u.uv1 = Triangle.getInterpolatedAttribute(s, o, l, c, h, new Vector2())), a && (u.normal = Triangle.getInterpolatedAttribute(a, o, l, c, h, new Vector3()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = {
      a: o,
      b: l,
      c,
      normal: new Vector3(),
      materialIndex: 0
    };
    Triangle.getNormal(_vA$1, _vB$1, _vC$1, d.normal), u.face = d, u.barycoord = h;
  }
  return u;
}
class BoxGeometry extends BufferGeometry {
  /**
   * Constructs a new box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular faces along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular faces along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular faces along the depth of the sides.
   */
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], u = [], h = [];
    let d = 0, p = 0;
    _("z", "y", "x", -1, -1, n, t, e, a, s, 0), _("z", "y", "x", 1, -1, n, t, -e, a, s, 1), _("x", "z", "y", 1, 1, e, n, t, i, a, 2), _("x", "z", "y", 1, -1, e, n, -t, i, a, 3), _("x", "y", "z", 1, -1, e, t, n, i, s, 4), _("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new Float32BufferAttribute(c, 3)), this.setAttribute("normal", new Float32BufferAttribute(u, 3)), this.setAttribute("uv", new Float32BufferAttribute(h, 2));
    function _(g, m, f, C, T, S, y, A, b, w, E) {
      const M = S / b, P = y / w, V = S / 2, N = y / 2, z = A / 2, K = b + 1, H = w + 1;
      let J = 0, k = 0;
      const ie = new Vector3();
      for (let ce = 0; ce < H; ce++) {
        const ge = ce * P - N;
        for (let Le = 0; Le < K; Le++) {
          const ze = Le * M - V;
          ie[g] = ze * C, ie[m] = ge * T, ie[f] = z, c.push(ie.x, ie.y, ie.z), ie[g] = 0, ie[m] = 0, ie[f] = A > 0 ? 1 : -1, u.push(ie.x, ie.y, ie.z), h.push(Le / b), h.push(1 - ce / w), J += 1;
        }
      }
      for (let ce = 0; ce < w; ce++)
        for (let ge = 0; ge < b; ge++) {
          const Le = d + ge + K * ce, ze = d + ge + K * (ce + 1), X = d + (ge + 1) + K * (ce + 1), Q = d + (ge + 1) + K * ce;
          l.push(Le, ze, Q), l.push(ze, X, Q), k += 6;
        }
      o.addGroup(p, k, E), p += k, d += J;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(e) {
    return new BoxGeometry(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function cloneUniforms(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function mergeUniforms(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = cloneUniforms(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function cloneUniformsGroups(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function getUnlitUniformColorSpace(r) {
  const e = r.getRenderTarget();
  return e === null ? r.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : ColorManagement.workingColorSpace;
}
const UniformsUtils = { clone: cloneUniforms, merge: mergeUniforms };
var default_vertex = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, default_fragment = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ShaderMaterial extends Material {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = default_vertex, this.fragmentShader = default_fragment, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = cloneUniforms(e.uniforms), this.uniformsGroups = cloneUniformsGroups(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Camera extends Object3D {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Matrix4(), this.projectionMatrix = new Matrix4(), this.projectionMatrixInverse = new Matrix4(), this.coordinateSystem = 2e3;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * This method is overwritten since cameras have a different forward vector compared to other
   * 3D objects. A camera looks down its local, negative z-axis by default.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _v3$1 = /* @__PURE__ */ new Vector3(), _minTarget = /* @__PURE__ */ new Vector2(), _maxTarget = /* @__PURE__ */ new Vector2();
class PerspectiveCamera extends Camera {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = RAD2DEG * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(DEG2RAD * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return RAD2DEG * 2 * Math.atan(
      Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom
    );
  }
  /**
   * Returns the width of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  /**
   * Returns the height of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} minTarget - The lower-left corner of the view rectangle is written into this vector.
   * @param {Vector2} maxTarget - The upper-right corner of the view rectangle is written into this vector.
   */
  getViewBounds(e, t, n) {
    _v3$1.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(_v3$1.x, _v3$1.y).multiplyScalar(-e / _v3$1.z), _v3$1.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(_v3$1.x, _v3$1.y).multiplyScalar(-e / _v3$1.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, _minTarget, _maxTarget), t.subVectors(_maxTarget, _minTarget);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *```
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *```
   * then for each monitor you would call it like this:
   *```js
   * const w = 1920;
   * const h = 1080;
   * const fullWidth = w * 3;
   * const fullHeight = h * 2;
   *
   * // --A--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   * // --B--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   * // --C--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   * // --D--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   * // --E--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   * // --F--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   * ```
   *
   * Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   */
  setViewOffset(e, t, n, i, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * i / l, t -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const fov = -90, aspect = 1;
class CubeCamera extends Object3D {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new PerspectiveCamera(fov, aspect, e, t);
    i.layers = this.layers, this.add(i);
    const s = new PerspectiveCamera(fov, aspect, e, t);
    s.layers = this.layers, this.add(s);
    const a = new PerspectiveCamera(fov, aspect, e, t);
    a.layers = this.layers, this.add(a);
    const o = new PerspectiveCamera(fov, aspect, e, t);
    o.layers = this.layers, this.add(o);
    const l = new PerspectiveCamera(fov, aspect, e, t);
    l.layers = this.layers, this.add(l);
    const c = new PerspectiveCamera(fov, aspect, e, t);
    c.layers = this.layers, this.add(c);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  /**
   * Calling this method will render the given scene with the given renderer
   * into the cube render target of the camera.
   *
   * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
   * @param {Scene} scene - The scene to render.
   */
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, u] = this.children, h = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = !1;
    const g = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5, i), e.render(t, u), e.setRenderTarget(h, d, p), e.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class CubeTexture extends Texture {
  constructor(e, t, n, i, s, a, o, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, i, s, a, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class WebGLCubeRenderTarget extends WebGLRenderTarget {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new CubeTexture(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new BoxGeometry(5, 5, 5), s = new ShaderMaterial({
      name: "CubemapFromEquirect",
      uniforms: cloneUniforms(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const a = new Mesh(i, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new CubeCamera(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
class Group extends Object3D {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const _moveEvent = { type: "move" };
class WebXRController {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Group(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Group(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new Vector3(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new Vector3()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Group(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new Vector3(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new Vector3()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const g of e.hand.values()) {
          const m = t.getJointPose(g, n), f = this._getHandJoint(c, g);
          m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = !0, f.jointRadius = m.radius), f.visible = m !== null;
        }
        const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], d = u.position.distanceTo(h.position), p = 0.02, _ = 5e-3;
        c.inputState.pinching && d > p + _ ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= p - _ && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(_moveEvent)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Group();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Scene extends Object3D {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Euler(), this.environmentIntensity = 1, this.environmentRotation = new Euler(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class InterleavedBuffer {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRanges = [], this.version = 0, this.uuid = generateUUID();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = generateUUID()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = generateUUID()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const _vector$7 = /* @__PURE__ */ new Vector3();
class InterleavedBufferAttribute {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      _vector$7.fromBufferAttribute(this, t), _vector$7.applyMatrix4(e), this.setXYZ(t, _vector$7.x, _vector$7.y, _vector$7.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _vector$7.fromBufferAttribute(this, t), _vector$7.applyNormalMatrix(e), this.setXYZ(t, _vector$7.x, _vector$7.y, _vector$7.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _vector$7.fromBufferAttribute(this, t), _vector$7.transformDirection(e), this.setXYZ(t, _vector$7.x, _vector$7.y, _vector$7.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = denormalize(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = normalize(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = normalize(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = normalize(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = normalize(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = normalize(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = denormalize(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = denormalize(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = denormalize(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = denormalize(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = normalize(t, this.array), n = normalize(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = normalize(t, this.array), n = normalize(n, this.array), i = normalize(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = normalize(t, this.array), n = normalize(n, this.array), i = normalize(i, this.array), s = normalize(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new BufferAttribute(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new InterleavedBufferAttribute(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const _basePosition = /* @__PURE__ */ new Vector3(), _skinIndex = /* @__PURE__ */ new Vector4(), _skinWeight = /* @__PURE__ */ new Vector4(), _vector3 = /* @__PURE__ */ new Vector3(), _matrix4 = /* @__PURE__ */ new Matrix4(), _vertex = /* @__PURE__ */ new Vector3(), _sphere$5 = /* @__PURE__ */ new Sphere(), _inverseMatrix$2 = /* @__PURE__ */ new Matrix4(), _ray$2 = /* @__PURE__ */ new Ray();
class SkinnedMesh extends Mesh {
  /**
   * Constructs a new skinned mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = AttachedBindMode, this.bindMatrix = new Matrix4(), this.bindMatrixInverse = new Matrix4(), this.boundingBox = null, this.boundingSphere = null;
  }
  /**
   * Computes the bounding box of the skinned mesh, and updates {@link SkinnedMesh#boundingBox}.
   * The bounding box is not automatically computed by the engine; this method must be called by your app.
   * If the skinned mesh is animated, the bounding box should be recomputed per frame in order to reflect
   * the current animation state.
   */
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Box3()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, _vertex), this.boundingBox.expandByPoint(_vertex);
  }
  /**
   * Computes the bounding sphere of the skinned mesh, and updates {@link SkinnedMesh#boundingSphere}.
   * The bounding sphere is automatically computed by the engine once when it is needed, e.g., for ray casting
   * and view frustum culling. If the skinned mesh is animated, the bounding sphere should be recomputed
   * per frame in order to reflect the current animation state.
   */
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Sphere()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, _vertex), this.boundingSphere.expandByPoint(_vertex);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), _sphere$5.copy(this.boundingSphere), _sphere$5.applyMatrix4(i), e.ray.intersectsSphere(_sphere$5) !== !1 && (_inverseMatrix$2.copy(i).invert(), _ray$2.copy(e.ray).applyMatrix4(_inverseMatrix$2), !(this.boundingBox !== null && _ray$2.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, _ray$2)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  /**
   * Binds the given skeleton to the skinned mesh.
   *
   * @param {Skeleton} skeleton - The skeleton to bind.
   * @param {Matrix4} [bindMatrix] - The bind matrix. If no bind matrix is provided,
   * the skinned mesh's world matrix will be used instead.
   */
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  /**
   * This method sets the skinned mesh in the rest pose).
   */
  pose() {
    this.skeleton.pose();
  }
  /**
   * Normalizes the skin weights which are defined as a buffer attribute
   * in the skinned mesh's geometry.
   */
  normalizeSkinWeights() {
    const e = new Vector4(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === AttachedBindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === DetachedBindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  /**
   * Applies the bone transform associated with the given index to the given
   * vertex position. Returns the updated vector.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * the skinned mesh's world matrix will be used instead.
   * @return {Vector3} The updated vertex position.
   */
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    _skinIndex.fromBufferAttribute(i.attributes.skinIndex, e), _skinWeight.fromBufferAttribute(i.attributes.skinWeight, e), _basePosition.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = _skinWeight.getComponent(s);
      if (a !== 0) {
        const o = _skinIndex.getComponent(s);
        _matrix4.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(_vector3.copy(_basePosition).applyMatrix4(_matrix4), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Bone extends Object3D {
  /**
   * Constructs a new bone.
   */
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class DataTexture extends Texture {
  constructor(e = null, t = 1, n = 1, i, s, a, o, l, c = 1003, u = 1003, h, d) {
    super(null, a, o, l, c, u, i, s, h, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const _offsetMatrix = /* @__PURE__ */ new Matrix4(), _identityMatrix$1 = /* @__PURE__ */ new Matrix4();
class Skeleton {
  /**
   * Constructs a new skeleton.
   *
   * @param {Array<Bone>} [bones] - An array of bones.
   * @param {Array<Matrix4>} [boneInverses] - An array of bone inverse matrices.
   * If not provided, these matrices will be computed automatically via {@link Skeleton#calculateInverses}.
   */
  constructor(e = [], t = []) {
    this.uuid = generateUUID(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  /**
   * Initializes the skeleton. This method gets automatically called by the constructor
   * but depending on how the skeleton is created it might be necessary to call this method
   * manually.
   */
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Matrix4());
    }
  }
  /**
   * Computes the bone inverse matrices. This method resets {@link Skeleton#boneInverses}
   * and fills it with new matrices.
   */
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Matrix4();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  /**
   * Resets the skeleton to the base pose.
   */
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  /**
   * Resets the skeleton to the base pose.
   */
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : _identityMatrix$1;
      _offsetMatrix.multiplyMatrices(o, t[s]), _offsetMatrix.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  /**
   * Returns a new skeleton with copied values from this instance.
   *
   * @return {Skeleton} A clone of this instance.
   */
  clone() {
    return new Skeleton(this.bones, this.boneInverses);
  }
  /**
   * Computes a data texture for passing bone data to the vertex shader.
   *
   * @return {Skeleton} A reference of this instance.
   */
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new DataTexture(t, e, e, 1023, 1015);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  /**
   * Searches through the skeleton's bone array and returns the first with a
   * matching name.
   *
   * @param {string} name - The name of the bone.
   * @return {Bone|undefined} The found bone. `undefined` if no bone has been found.
   */
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  /**
   * Setups the skeleton by the given JSON and bones.
   *
   * @param {Object} json - The skeleton as serialized JSON.
   * @param {Array<Bone>} bones - An array of bones.
   * @return {Skeleton} A reference of this instance.
   */
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let a = t[s];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new Bone()), this.bones.push(a), this.boneInverses.push(new Matrix4().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  /**
   * Serializes the skeleton into JSON.
   *
   * @return {Object} A JSON object representing the serialized skeleton.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class InstancedBufferAttribute extends BufferAttribute {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const _instanceLocalMatrix = /* @__PURE__ */ new Matrix4(), _instanceWorldMatrix = /* @__PURE__ */ new Matrix4(), _instanceIntersects = [], _box3 = /* @__PURE__ */ new Box3(), _identity = /* @__PURE__ */ new Matrix4(), _mesh$1 = /* @__PURE__ */ new Mesh(), _sphere$4 = /* @__PURE__ */ new Sphere();
class InstancedMesh extends Mesh {
  /**
   * Constructs a new instanced mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   * @param {number} count - The number of instances.
   */
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new InstancedBufferAttribute(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, _identity);
  }
  /**
   * Computes the bounding box of the instanced mesh, and updates {@link InstancedMesh#boundingBox}.
   * The bounding box is not automatically computed by the engine; this method must be called by your app.
   * You may need to recompute the bounding box if an instance is transformed via {@link InstancedMesh#setMatrixAt}.
   */
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Box3()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, _instanceLocalMatrix), _box3.copy(e.boundingBox).applyMatrix4(_instanceLocalMatrix), this.boundingBox.union(_box3);
  }
  /**
   * Computes the bounding sphere of the instanced mesh, and updates {@link InstancedMesh#boundingSphere}
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if an instance is transformed via {@link InstancedMesh#setMatrixAt}.
   */
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Sphere()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, _instanceLocalMatrix), _sphere$4.copy(e.boundingSphere).applyMatrix4(_instanceLocalMatrix), this.boundingSphere.union(_sphere$4);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  /**
   * Gets the color of the defined instance.
   *
   * @param {number} index - The instance index.
   * @param {Color} color - The target object that is used to store the method's result.
   */
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  /**
   * Gets the local transformation matrix of the defined instance.
   *
   * @param {number} index - The instance index.
   * @param {Matrix4} matrix - The target object that is used to store the method's result.
   */
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  /**
   * Gets the morph target weights of the defined instance.
   *
   * @param {number} index - The instance index.
   * @param {Mesh} object - The target object that is used to store the method's result.
   */
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, s = n.length + 1, a = e * s + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (_mesh$1.geometry = this.geometry, _mesh$1.material = this.material, _mesh$1.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), _sphere$4.copy(this.boundingSphere), _sphere$4.applyMatrix4(n), e.ray.intersectsSphere(_sphere$4) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, _instanceLocalMatrix), _instanceWorldMatrix.multiplyMatrices(n, _instanceLocalMatrix), _mesh$1.matrixWorld = _instanceWorldMatrix, _mesh$1.raycast(e, _instanceIntersects);
        for (let a = 0, o = _instanceIntersects.length; a < o; a++) {
          const l = _instanceIntersects[a];
          l.instanceId = s, l.object = this, t.push(l);
        }
        _instanceIntersects.length = 0;
      }
  }
  /**
   * Sets the given color to the defined instance. Make sure you set the `needsUpdate` flag of
   * {@link InstancedMesh#instanceColor} to `true` after updating all the colors.
   *
   * @param {number} index - The instance index.
   * @param {Color} color - The instance color.
   */
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  /**
   * Sets the given local transformation matrix to the defined instance. Make sure you set the `needsUpdate` flag of
   * {@link InstancedMesh#instanceMatrix} to `true` after updating all the colors.
   *
   * @param {number} index - The instance index.
   * @param {Matrix4} matrix - The the local transformation.
   */
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  /**
   * Sets the morph target weights to the defined instance. Make sure you set the `needsUpdate` flag of
   * {@link InstancedMesh#morphTexture} to `true` after updating all the influences.
   *
   * @param {number} index - The instance index.
   * @param {Mesh} object -  A mesh which `morphTargetInfluences` property containing the morph target weights
   * of a single instance.
   */
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new DataTexture(new Float32Array(i * this.count), i, this.count, 1028, 1015));
    const s = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++)
      a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = i * e;
    s[l] = o, s.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const _vector1 = /* @__PURE__ */ new Vector3(), _vector2 = /* @__PURE__ */ new Vector3(), _normalMatrix = /* @__PURE__ */ new Matrix3();
class Plane {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new Vector3(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  /**
   * Sets the plane components by copying the given values.
   *
   * @param {Vector3} normal - The normal.
   * @param {number} constant - The constant.
   * @return {Plane} A reference to this plane.
   */
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  /**
   * Sets the plane components by defining `x`, `y`, `z` as the
   * plane normal and `w` as the constant.
   *
   * @param {number} x - The value for the normal's x component.
   * @param {number} y - The value for the normal's y component.
   * @param {number} z - The value for the normal's z component.
   * @param {number} w - The constant value.
   * @return {Plane} A reference to this plane.
   */
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  /**
   * Sets the plane from the given normal and coplanar point (that is a point
   * that lies onto the plane).
   *
   * @param {Vector3} normal - The normal.
   * @param {Vector3} point - A coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  /**
   * Sets the plane from three coplanar points. The winding order is
   * assumed to be counter-clockwise, and determines the direction of
   * the plane normal.
   *
   * @param {Vector3} a - The first coplanar point.
   * @param {Vector3} b - The second coplanar point.
   * @param {Vector3} c - The third coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromCoplanarPoints(e, t, n) {
    const i = _vector1.subVectors(n, t).cross(_vector2.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  /**
   * Copies the values of the given plane to this instance.
   *
   * @param {Plane} plane - The plane to copy.
   * @return {Plane} A reference to this plane.
   */
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  /**
   * Normalizes the plane normal and adjusts the constant accordingly.
   *
   * @return {Plane} A reference to this plane.
   */
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  /**
   * Negates both the plane normal and the constant.
   *
   * @return {Plane} A reference to this plane.
   */
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  /**
   * Returns the signed distance from the given point to this plane.
   *
   * @param {Vector3} point - The point to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  /**
   * Returns the signed distance from the given sphere to this plane.
   *
   * @param {Sphere} sphere - The sphere to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  /**
   * Projects a the given point onto the plane.
   *
   * @param {Vector3} point - The point to project.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The projected point on the plane.
   */
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  /**
   * Returns the intersection point of the passed line and the plane. Returns
   * `null` if the line does not intersect. Returns the line's starting point if
   * the line is coplanar with the plane.
   *
   * @param {Line3} line - The line to compute the intersection for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectLine(e, t) {
    const n = e.delta(_vector1), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  /**
   * Returns `true` if the given line segment intersects with (passes through) the plane.
   *
   * @param {Line3} line - The line to test.
   * @return {boolean} Whether the given line segment intersects with the plane or not.
   */
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  /**
   * Returns `true` if the given bounding box intersects with the plane.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with the plane or not.
   */
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns `true` if the given bounding sphere intersects with the plane.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with the plane or not.
   */
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns a coplanar vector to the plane, by calculating the
   * projection of the normal at the origin onto the plane.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The coplanar point.
   */
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  /**
   * Apply a 4x4 matrix to the plane. The matrix must be an affine, homogeneous transform.
   *
   * The optional normal matrix can be pre-computed like so:
   * ```js
   * const optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );
   * ```
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @param {Matrix4} [optionalNormalMatrix] - A pre-computed normal matrix.
   * @return {Plane} A reference to this plane.
   */
  applyMatrix4(e, t) {
    const n = t || _normalMatrix.getNormalMatrix(e), i = this.coplanarPoint(_vector1).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  /**
   * Translates the plane by the distance defined by the given offset vector.
   * Note that this only affects the plane constant and will not affect the normal vector.
   *
   * @param {Vector3} offset - The offset vector.
   * @return {Plane} A reference to this plane.
   */
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  /**
   * Returns `true` if this plane is equal with the given one.
   *
   * @param {Plane} plane - The plane to test for equality.
   * @return {boolean} Whether this plane is equal with the given one.
   */
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  /**
   * Returns a new plane with copied values from this instance.
   *
   * @return {Plane} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const _sphere$3 = /* @__PURE__ */ new Sphere(), _vector$6 = /* @__PURE__ */ new Vector3();
class Frustum {
  /**
   * Constructs a new frustum.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   */
  constructor(e = new Plane(), t = new Plane(), n = new Plane(), i = new Plane(), s = new Plane(), a = new Plane()) {
    this.planes = [e, t, n, i, s, a];
  }
  /**
   * Sets the frustum planes by copying the given planes.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   * @return {Frustum} A reference to this frustum.
   */
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  /**
   * Copies the values of the given frustum to this instance.
   *
   * @param {Frustum} frustum - The frustum to copy.
   * @return {Frustum} A reference to this frustum.
   */
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  /**
   * Sets the frustum planes from the given projection matrix.
   *
   * @param {Matrix4} m - The projection matrix.
   * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} coordinateSystem - The coordinate system.
   * @return {Frustum} A reference to this frustum.
   */
  setFromProjectionMatrix(e, t = 2e3) {
    const n = this.planes, i = e.elements, s = i[0], a = i[1], o = i[2], l = i[3], c = i[4], u = i[5], h = i[6], d = i[7], p = i[8], _ = i[9], g = i[10], m = i[11], f = i[12], C = i[13], T = i[14], S = i[15];
    if (n[0].setComponents(l - s, d - c, m - p, S - f).normalize(), n[1].setComponents(l + s, d + c, m + p, S + f).normalize(), n[2].setComponents(l + a, d + u, m + _, S + C).normalize(), n[3].setComponents(l - a, d - u, m - _, S - C).normalize(), n[4].setComponents(l - o, d - h, m - g, S - T).normalize(), t === 2e3)
      n[5].setComponents(l + o, d + h, m + g, S + T).normalize();
    else if (t === 2001)
      n[5].setComponents(o, h, g, T).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  /**
   * Returns `true` if the 3D object's bounding sphere is intersecting this frustum.
   *
   * Note that the 3D object must have a geometry so that the bounding sphere can be calculated.
   *
   * @param {Object3D} object - The 3D object to test.
   * @return {boolean} Whether the 3D object's bounding sphere is intersecting this frustum or not.
   */
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), _sphere$3.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), _sphere$3.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(_sphere$3);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    return _sphere$3.center.set(0, 0, 0), _sphere$3.radius = 0.7071067811865476, _sphere$3.applyMatrix4(e.matrixWorld), this.intersectsSphere(_sphere$3);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  /**
   * Returns `true` if the given bounding box is intersecting this frustum.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box is intersecting this frustum or not.
   */
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (_vector$6.x = i.normal.x > 0 ? e.max.x : e.min.x, _vector$6.y = i.normal.y > 0 ? e.max.y : e.min.y, _vector$6.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(_vector$6) < 0)
        return !1;
    }
    return !0;
  }
  /**
   * Returns `true` if the given point lies within the frustum.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the point lies within this frustum or not.
   */
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  /**
   * Returns a new frustum with copied values from this instance.
   *
   * @return {Frustum} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class LineBasicMaterial extends Material {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Color(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const _vStart = /* @__PURE__ */ new Vector3(), _vEnd = /* @__PURE__ */ new Vector3(), _inverseMatrix$1 = /* @__PURE__ */ new Matrix4(), _ray$1 = /* @__PURE__ */ new Ray(), _sphere$1 = /* @__PURE__ */ new Sphere(), _intersectPointOnRay = /* @__PURE__ */ new Vector3(), _intersectPointOnSegment = /* @__PURE__ */ new Vector3();
class Line extends Object3D {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e = new BufferGeometry(), t = new LineBasicMaterial()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Computes an array of distance values which are necessary for rendering dashed lines.
   * For each vertex in the geometry, the method calculates the cumulative length from the
   * current point to the very beginning of the line.
   *
   * @return {Line} A reference to this line.
   */
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        _vStart.fromBufferAttribute(t, i - 1), _vEnd.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += _vStart.distanceTo(_vEnd);
      e.setAttribute("lineDistance", new Float32BufferAttribute(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), _sphere$1.copy(n.boundingSphere), _sphere$1.applyMatrix4(i), _sphere$1.radius += s, e.ray.intersectsSphere(_sphere$1) === !1) return;
    _inverseMatrix$1.copy(i).invert(), _ray$1.copy(e.ray).applyMatrix4(_inverseMatrix$1);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, u = n.index, d = n.attributes.position;
    if (u !== null) {
      const p = Math.max(0, a.start), _ = Math.min(u.count, a.start + a.count);
      for (let g = p, m = _ - 1; g < m; g += c) {
        const f = u.getX(g), C = u.getX(g + 1), T = checkIntersection(this, e, _ray$1, l, f, C, g);
        T && t.push(T);
      }
      if (this.isLineLoop) {
        const g = u.getX(_ - 1), m = u.getX(p), f = checkIntersection(this, e, _ray$1, l, g, m, _ - 1);
        f && t.push(f);
      }
    } else {
      const p = Math.max(0, a.start), _ = Math.min(d.count, a.start + a.count);
      for (let g = p, m = _ - 1; g < m; g += c) {
        const f = checkIntersection(this, e, _ray$1, l, g, g + 1, g);
        f && t.push(f);
      }
      if (this.isLineLoop) {
        const g = checkIntersection(this, e, _ray$1, l, _ - 1, p, _ - 1);
        g && t.push(g);
      }
    }
  }
  /**
   * Sets the values of {@link Line#morphTargetDictionary} and {@link Line#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function checkIntersection(r, e, t, n, i, s, a) {
  const o = r.geometry.attributes.position;
  if (_vStart.fromBufferAttribute(o, i), _vEnd.fromBufferAttribute(o, s), t.distanceSqToSegment(_vStart, _vEnd, _intersectPointOnRay, _intersectPointOnSegment) > n) return;
  _intersectPointOnRay.applyMatrix4(r.matrixWorld);
  const c = e.ray.origin.distanceTo(_intersectPointOnRay);
  if (!(c < e.near || c > e.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: _intersectPointOnSegment.clone().applyMatrix4(r.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: r
    };
}
const _start = /* @__PURE__ */ new Vector3(), _end = /* @__PURE__ */ new Vector3();
class LineSegments extends Line {
  /**
   * Constructs a new line segments.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        _start.fromBufferAttribute(t, i), _end.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + _start.distanceTo(_end);
      e.setAttribute("lineDistance", new Float32BufferAttribute(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class LineLoop extends Line {
  /**
   * Constructs a new line loop.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class PointsMaterial extends Material {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Color(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const _inverseMatrix = /* @__PURE__ */ new Matrix4(), _ray = /* @__PURE__ */ new Ray(), _sphere = /* @__PURE__ */ new Sphere(), _position$2 = /* @__PURE__ */ new Vector3();
class Points extends Object3D {
  /**
   * Constructs a new point cloud.
   *
   * @param {BufferGeometry} [geometry] - The points geometry.
   * @param {Material|Array<Material>} [material] - The points material.
   */
  constructor(e = new BufferGeometry(), t = new PointsMaterial()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Computes intersection points between a casted ray and this point cloud.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), _sphere.copy(n.boundingSphere), _sphere.applyMatrix4(i), _sphere.radius += s, e.ray.intersectsSphere(_sphere) === !1) return;
    _inverseMatrix.copy(i).invert(), _ray.copy(e.ray).applyMatrix4(_inverseMatrix);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, h = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, a.start), p = Math.min(c.count, a.start + a.count);
      for (let _ = d, g = p; _ < g; _++) {
        const m = c.getX(_);
        _position$2.fromBufferAttribute(h, m), testPoint(_position$2, m, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), p = Math.min(h.count, a.start + a.count);
      for (let _ = d, g = p; _ < g; _++)
        _position$2.fromBufferAttribute(h, _), testPoint(_position$2, _, l, i, e, t, this);
    }
  }
  /**
   * Sets the values of {@link Points#morphTargetDictionary} and {@link Points#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function testPoint(r, e, t, n, i, s, a) {
  const o = _ray.distanceSqToPoint(r);
  if (o < t) {
    const l = new Vector3();
    _ray.closestPointToPoint(r, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class DepthTexture extends Texture {
  constructor(e, t, n, i, s, a, o, l, c, u = 1026) {
    if (u !== 1026 && u !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === 1026 && (n = 1014), n === void 0 && u === 1027 && (n = 1020), super(null, i, s, a, o, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Source(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class PlaneGeometry extends BufferGeometry {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, u = l + 1, h = e / o, d = t / l, p = [], _ = [], g = [], m = [];
    for (let f = 0; f < u; f++) {
      const C = f * d - a;
      for (let T = 0; T < c; T++) {
        const S = T * h - s;
        _.push(S, -C, 0), g.push(0, 0, 1), m.push(T / o), m.push(1 - f / l);
      }
    }
    for (let f = 0; f < l; f++)
      for (let C = 0; C < o; C++) {
        const T = C + c * f, S = C + c * (f + 1), y = C + 1 + c * (f + 1), A = C + 1 + c * f;
        p.push(T, S, A), p.push(S, y, A);
      }
    this.setIndex(p), this.setAttribute("position", new Float32BufferAttribute(_, 3)), this.setAttribute("normal", new Float32BufferAttribute(g, 3)), this.setAttribute("uv", new Float32BufferAttribute(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(e) {
    return new PlaneGeometry(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class MeshStandardMaterial extends Material {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Color(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Euler(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class MeshPhysicalMaterial extends MeshStandardMaterial {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Vector2(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return clamp(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Color(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Color(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Color(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class MeshPhongMaterial extends Material {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Color(16777215), this.specular = new Color(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Euler(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class MeshDepthMaterial extends Material {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class MeshDistanceMaterial extends Material {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
function convertArray(r, e, t) {
  return !r || // let 'undefined' and 'null' pass
  !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function isTypedArray(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function getKeyframeOrder(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function sortedArray(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let l = 0; l !== e; ++l)
      i[a++] = r[o + l];
  }
  return i;
}
function flattenJSON(r, e, t, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = r[i++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push(...a)), s = r[i++];
      while (s !== void 0);
    else if (a.toArray !== void 0)
      do
        a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++];
      while (s !== void 0);
    else
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++];
      while (s !== void 0);
}
class Interpolant {
  /**
   * Constructs a new interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  /**
   * Evaluate the interpolant at position `t`.
   *
   * @param {number} t - The interpolation factor.
   * @return {TypedArray} The result buffer.
   */
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (s = i, i = t[++n], e < i)
                break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = s, s = t[--n - 1], e >= s)
                break e;
            }
            a = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  /**
   * Returns the interpolation settings.
   *
   * @return {Object} The interpolation settings.
   */
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  /**
   * Copies a sample value to the result buffer.
   *
   * @param {number} index - An index into the sample value buffer.
   * @return {TypedArray} The result buffer.
   */
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let a = 0; a !== i; ++a)
      t[a] = n[s + a];
    return t;
  }
  /**
   * Copies a sample value to the result buffer.
   *
   * @abstract
   * @param {number} i1 - An index into the sample value buffer.
   * @param {number} t0 - The previous interpolation factor.
   * @param {number} t - The current interpolation factor.
   * @param {number} t1 - The next interpolation factor.
   * @return {TypedArray} The result buffer.
   */
  interpolate_() {
    throw new Error("call to abstract method");
  }
  /**
   * Optional method that is executed when the interval has changed.
   *
   * @param {number} i1 - An index into the sample value buffer.
   * @param {number} t0 - The previous interpolation factor.
   * @param {number} t - The current interpolation factor.
   */
  intervalChanged_() {
  }
}
class CubicInterpolant extends Interpolant {
  /**
   * Constructs a new cubic interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: 2400,
      endingEnd: 2400
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, a = e + 1, o = i[s], l = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case 2401:
          s = e, o = 2 * t - n;
          break;
        case 2402:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case 2401:
          a = e, l = 2 * n - t;
          break;
        case 2402:
          a = 1, l = n + i[1] - i[0];
          break;
        default:
          a = e - 1, l = t;
      }
    const c = (n - t) * 0.5, u = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = s * u, this._offsetNext = a * u;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, u = this._offsetPrev, h = this._offsetNext, d = this._weightPrev, p = this._weightNext, _ = (n - t) / (i - t), g = _ * _, m = g * _, f = -d * m + 2 * d * g - d * _, C = (1 + d) * m + (-1.5 - 2 * d) * g + (-0.5 + d) * _ + 1, T = (-1 - p) * m + (1.5 + p) * g + 0.5 * _, S = p * m - p * g;
    for (let y = 0; y !== o; ++y)
      s[y] = f * a[u + y] + C * a[c + y] + T * a[l + y] + S * a[h + y];
    return s;
  }
}
class LinearInterpolant extends Interpolant {
  /**
   * Constructs a new linear interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, u = (n - t) / (i - t), h = 1 - u;
    for (let d = 0; d !== o; ++d)
      s[d] = a[c + d] * h + a[l + d] * u;
    return s;
  }
}
class DiscreteInterpolant extends Interpolant {
  /**
   * Constructs a new discrete interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class KeyframeTrack {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = convertArray(t, this.TimeBufferType), this.values = convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: convertArray(e.times, Array),
        values: convertArray(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new DiscreteInterpolant(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new LinearInterpolant(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new CubicInterpolant(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case 2300:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, a = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, s !== 0 || a !== i) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let a = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = !1;
        break;
      }
      a = l;
    }
    if (i !== void 0 && isTypedArray(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === 2302, s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let l = !1;
      const c = e[o], u = e[o + 1];
      if (c !== u && (o !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const h = o * n, d = h - n, p = h + n;
          for (let _ = 0; _ !== n; ++_) {
            const g = t[h + _];
            if (g !== t[d + _] || g !== t[p + _]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const h = o * n, d = a * n;
          for (let p = 0; p !== n; ++p)
            t[d + p] = t[h + p];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, l = a * n, c = 0; c !== n; ++c)
        t[l + c] = t[o + c];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
KeyframeTrack.prototype.TimeBufferType = Float32Array;
KeyframeTrack.prototype.ValueBufferType = Float32Array;
KeyframeTrack.prototype.DefaultInterpolation = 2301;
class BooleanKeyframeTrack extends KeyframeTrack {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
BooleanKeyframeTrack.prototype.ValueTypeName = "bool";
BooleanKeyframeTrack.prototype.ValueBufferType = Array;
BooleanKeyframeTrack.prototype.DefaultInterpolation = 2300;
BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0;
BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
class ColorKeyframeTrack extends KeyframeTrack {
}
ColorKeyframeTrack.prototype.ValueTypeName = "color";
class NumberKeyframeTrack extends KeyframeTrack {
}
NumberKeyframeTrack.prototype.ValueTypeName = "number";
class QuaternionLinearInterpolant extends Interpolant {
  /**
   * Constructs a new SLERP interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let u = c + o; c !== u; c += 4)
      Quaternion.slerpFlat(s, 0, a, c - o, a, c, l);
    return s;
  }
}
class QuaternionKeyframeTrack extends KeyframeTrack {
  InterpolantFactoryMethodLinear(e) {
    return new QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), e);
  }
}
QuaternionKeyframeTrack.prototype.ValueTypeName = "quaternion";
QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
class StringKeyframeTrack extends KeyframeTrack {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
StringKeyframeTrack.prototype.ValueTypeName = "string";
StringKeyframeTrack.prototype.ValueBufferType = Array;
StringKeyframeTrack.prototype.DefaultInterpolation = 2300;
StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0;
StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
class VectorKeyframeTrack extends KeyframeTrack {
}
VectorKeyframeTrack.prototype.ValueTypeName = "vector";
class AnimationClip {
  constructor(e = "", t = -1, n = [], i = 2500) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = generateUUID(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(parseKeyframeTrack(n[a]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, a = n.length; s !== a; ++s)
      t.push(KeyframeTrack.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, a = [];
    for (let o = 0; o < s; o++) {
      let l = [], c = [];
      l.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), c.push(0, 1, 0);
      const u = getKeyframeOrder(l);
      l = sortedArray(l, 1, u), c = sortedArray(c, 1, u), !i && l[0] === 0 && (l.push(s), c.push(c[0])), a.push(
        new NumberKeyframeTrack(
          ".morphTargetInfluences[" + t[o].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], u = c.name.match(s);
      if (u && u.length > 1) {
        const h = u[1];
        let d = i[h];
        d || (i[h] = d = []), d.push(c);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(h, d, p, _, g) {
      if (p.length !== 0) {
        const m = [], f = [];
        flattenJSON(p, m, f, _), m.length !== 0 && g.push(new h(d, m, f));
      }
    }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let h = 0; h < c.length; h++) {
      const d = c[h].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const p = {};
          let _;
          for (_ = 0; _ < d.length; _++)
            if (d[_].morphTargets)
              for (let g = 0; g < d[_].morphTargets.length; g++)
                p[d[_].morphTargets[g]] = -1;
          for (const g in p) {
            const m = [], f = [];
            for (let C = 0; C !== d[_].morphTargets.length; ++C) {
              const T = d[_];
              m.push(T.time), f.push(T.morphTarget === g ? 1 : 0);
            }
            i.push(new NumberKeyframeTrack(".morphTargetInfluence[" + g + "]", m, f));
          }
          l = p.length * a;
        } else {
          const p = ".bones[" + t[h].name + "]";
          n(
            VectorKeyframeTrack,
            p + ".position",
            d,
            "pos",
            i
          ), n(
            QuaternionKeyframeTrack,
            p + ".quaternion",
            d,
            "rot",
            i
          ), n(
            VectorKeyframeTrack,
            p + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function getTrackTypeForValueTypeName(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return NumberKeyframeTrack;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return VectorKeyframeTrack;
    case "color":
      return ColorKeyframeTrack;
    case "quaternion":
      return QuaternionKeyframeTrack;
    case "bool":
    case "boolean":
      return BooleanKeyframeTrack;
    case "string":
      return StringKeyframeTrack;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function parseKeyframeTrack(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = getTrackTypeForValueTypeName(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    flattenJSON(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const Cache = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class LoadingManager {
  constructor(e, t, n) {
    const i = this;
    let s = !1, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(u, a, o), s = !0;
    }, this.itemEnd = function(u) {
      a++, i.onProgress !== void 0 && i.onProgress(u, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(u) {
      i.onError !== void 0 && i.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, h) {
      return c.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = c.indexOf(u);
      return h !== -1 && c.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, d = c.length; h < d; h += 2) {
        const p = c[h], _ = c[h + 1];
        if (p.global && (p.lastIndex = 0), p.test(u))
          return _;
      }
      return null;
    };
  }
}
const DefaultLoadingManager = /* @__PURE__ */ new LoadingManager();
class Loader {
  /**
   * Constructs a new loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    this.manager = e !== void 0 ? e : DefaultLoadingManager, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for loading assets from the backend.
   *
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {Function} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load() {
  }
  /**
   * A async version of {@link Loader#load}.
   *
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @return {Promise} A Promise that resolves when the asset has been loaded.
   */
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for parsing the asset into three.js entities.
   *
   * @param {any} data - The data to parse.
   */
  parse() {
  }
  /**
   * Sets the `crossOrigin` String to implement CORS for loading the URL
   * from a different domain that allows CORS.
   *
   * @param {string} crossOrigin - The `crossOrigin` value.
   * @return {Loader} A reference to this instance.
   */
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  /**
   * Whether the XMLHttpRequest uses credentials such as cookies, authorization
   * headers or TLS client certificates, see [XMLHttpRequest.withCredentials]{@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials}.
   *
   * Note: This setting has no effect if you are loading files locally or from the same domain.
   *
   * @param {boolean} value - The `withCredentials` value.
   * @return {Loader} A reference to this instance.
   */
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  /**
   * Sets the base path for the asset.
   *
   * @param {string} path - The base path.
   * @return {Loader} A reference to this instance.
   */
  setPath(e) {
    return this.path = e, this;
  }
  /**
   * Sets the base path for dependent resources like textures.
   *
   * @param {string} resourcePath - The resource path.
   * @return {Loader} A reference to this instance.
   */
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  /**
   * Sets the given request header.
   *
   * @param {Object} requestHeader - A [request header]{@link https://developer.mozilla.org/en-US/docs/Glossary/Request_header}
   * for configuring the HTTP request.
   * @return {Loader} A reference to this instance.
   */
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
Loader.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const loading = {};
class HttpError extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class FileLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = Cache.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (loading[e] !== void 0) {
      loading[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    loading[e] = [], loading[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, l = this.responseType;
    fetch(a).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const u = loading[e], h = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), p = d ? parseInt(d) : 0, _ = p !== 0;
        let g = 0;
        const m = new ReadableStream({
          start(f) {
            C();
            function C() {
              h.read().then(({ done: T, value: S }) => {
                if (T)
                  f.close();
                else {
                  g += S.byteLength;
                  const y = new ProgressEvent("progress", { lengthComputable: _, loaded: g, total: p });
                  for (let A = 0, b = u.length; A < b; A++) {
                    const w = u[A];
                    w.onProgress && w.onProgress(y);
                  }
                  f.enqueue(S), C();
                }
              }, (T) => {
                f.error(T);
              });
            }
          }
        });
        return new Response(m);
      } else
        throw new HttpError(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((u) => new DOMParser().parseFromString(u, o));
        case "json":
          return c.json();
        default:
          if (o === void 0)
            return c.text();
          {
            const h = /charset="?([^;"\s]*)"?/i.exec(o), d = h && h[1] ? h[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return c.arrayBuffer().then((_) => p.decode(_));
          }
      }
    }).then((c) => {
      Cache.add(e, c);
      const u = loading[e];
      delete loading[e];
      for (let h = 0, d = u.length; h < d; h++) {
        const p = u[h];
        p.onLoad && p.onLoad(c);
      }
    }).catch((c) => {
      const u = loading[e];
      if (u === void 0)
        throw this.manager.itemError(e), c;
      delete loading[e];
      for (let h = 0, d = u.length; h < d; h++) {
        const p = u[h];
        p.onError && p.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class ImageLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Cache.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = createElementNS("img");
    function l() {
      u(), Cache.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(h) {
      u(), i && i(h), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class TextureLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new Texture(), a = new ImageLoader(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class Light extends Object3D {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Color(e), this.intensity = t;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
const _projScreenMatrix$1 = /* @__PURE__ */ new Matrix4(), _lightPositionWorld$1 = /* @__PURE__ */ new Vector3(), _lookTarget$1 = /* @__PURE__ */ new Vector3();
class LightShadow {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Vector2(512, 512), this.map = null, this.mapPass = null, this.matrix = new Matrix4(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Frustum(), this._frameExtents = new Vector2(1, 1), this._viewportCount = 1, this._viewports = [
      new Vector4(0, 0, 1, 1)
    ];
  }
  /**
   * Used internally by the renderer to get the number of viewports that need
   * to be rendered for this shadow.
   *
   * @return {number} The viewport count.
   */
  getViewportCount() {
    return this._viewportCount;
  }
  /**
   * Gets the shadow cameras frustum. Used internally by the renderer to cull objects.
   *
   * @return {Frustum} The shadow camera frustum.
   */
  getFrustum() {
    return this._frustum;
  }
  /**
   * Update the matrices for the camera and shadow, used internally by the renderer.
   *
   * @param {Light} light - The light for which the shadow is being rendered.
   */
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    _lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld), t.position.copy(_lightPositionWorld$1), _lookTarget$1.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(_lookTarget$1), t.updateMatrixWorld(), _projScreenMatrix$1.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(_projScreenMatrix$1), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(_projScreenMatrix$1);
  }
  /**
   * Returns a viewport definition for the given viewport index.
   *
   * @param {number} viewportIndex - The viewport index.
   * @return {Vector4} The viewport.
   */
  getViewport(e) {
    return this._viewports[e];
  }
  /**
   * Returns the frame extends.
   *
   * @return {Vector2} The frame extends.
   */
  getFrameExtents() {
    return this._frameExtents;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  /**
   * Copies the values of the given light shadow instance to this instance.
   *
   * @param {LightShadow} source - The light shadow to copy.
   * @return {LightShadow} A reference to this light shadow instance.
   */
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  /**
   * Returns a new light shadow instance with copied values from this instance.
   *
   * @return {LightShadow} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Serializes the light shadow into JSON.
   *
   * @return {Object} A JSON object representing the serialized light shadow.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class SpotLightShadow extends LightShadow {
  /**
   * Constructs a new spot light shadow.
   */
  constructor() {
    super(new PerspectiveCamera(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = RAD2DEG * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class SpotLight extends Light {
  /**
   * Constructs a new spot light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity measured in candela (cd).
   * @param {number} [distance=0] - Maximum range of the light. `0` means no limit.
   * @param {number} [angle=Math.PI/3] - Maximum angle of light dispersion from its direction whose upper bound is `Math.PI/2`.
   * @param {number} [penumbra=0] - Percent of the spotlight cone that is attenuated due to penumbra. Value range is `[0,1]`.
   * @param {number} [decay=2] - The amount the light dims along the distance of the light.
   */
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(Object3D.DEFAULT_UP), this.updateMatrix(), this.target = new Object3D(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new SpotLightShadow();
  }
  /**
   * The light's power. Power is the luminous power of the light measured in lumens (lm).
   *  Changing the power will also change the light's intensity.
   *
   * @type {number}
   */
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const _projScreenMatrix = /* @__PURE__ */ new Matrix4(), _lightPositionWorld = /* @__PURE__ */ new Vector3(), _lookTarget = /* @__PURE__ */ new Vector3();
class PointLightShadow extends LightShadow {
  /**
   * Constructs a new point light shadow.
   */
  constructor() {
    super(new PerspectiveCamera(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Vector2(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new Vector4(2, 1, 1, 1),
      // negative X
      new Vector4(0, 1, 1, 1),
      // positive Z
      new Vector4(3, 1, 1, 1),
      // negative Z
      new Vector4(1, 1, 1, 1),
      // positive Y
      new Vector4(3, 0, 1, 1),
      // negative Y
      new Vector4(1, 0, 1, 1)
    ], this._cubeDirections = [
      new Vector3(1, 0, 0),
      new Vector3(-1, 0, 0),
      new Vector3(0, 0, 1),
      new Vector3(0, 0, -1),
      new Vector3(0, 1, 0),
      new Vector3(0, -1, 0)
    ], this._cubeUps = [
      new Vector3(0, 1, 0),
      new Vector3(0, 1, 0),
      new Vector3(0, 1, 0),
      new Vector3(0, 1, 0),
      new Vector3(0, 0, 1),
      new Vector3(0, 0, -1)
    ];
  }
  /**
   * Update the matrices for the camera and shadow, used internally by the renderer.
   *
   * @param {Light} light - The light for which the shadow is being rendered.
   * @param {number} [viewportIndex=0] - The viewport index.
   */
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), _lightPositionWorld.setFromMatrixPosition(e.matrixWorld), n.position.copy(_lightPositionWorld), _lookTarget.copy(n.position), _lookTarget.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(_lookTarget), n.updateMatrixWorld(), i.makeTranslation(-_lightPositionWorld.x, -_lightPositionWorld.y, -_lightPositionWorld.z), _projScreenMatrix.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(_projScreenMatrix);
  }
}
class PointLight extends Light {
  /**
   * Constructs a new point light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity measured in candela (cd).
   * @param {number} [distance=0] - Maximum range of the light. `0` means no limit.
   * @param {number} [decay=2] - The amount the light dims along the distance of the light.
   */
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new PointLightShadow();
  }
  /**
   * The light's power. Power is the luminous power of the light measured in lumens (lm).
   * Changing the power will also change the light's intensity.
   *
   * @type {number}
   */
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class OrthographicCamera extends Camera {
  /**
   * Constructs a new orthographic camera.
   *
   * @param {number} [left=-1] - The left plane of the camera's frustum.
   * @param {number} [right=1] - The right plane of the camera's frustum.
   * @param {number} [top=1] - The top plane of the camera's frustum.
   * @param {number} [bottom=-1] - The bottom plane of the camera's frustum.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   * @see {@link PerspectiveCamera#setViewOffset}
   */
  setViewOffset(e, t, n, i, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class DirectionalLightShadow extends LightShadow {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new OrthographicCamera(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class DirectionalLight extends Light {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Object3D.DEFAULT_UP), this.updateMatrix(), this.target = new Object3D(), this.shadow = new DirectionalLightShadow();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class LoaderUtils {
  static decodeText(e) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class ImageBitmapLoader extends Loader {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Cache.get(e);
    if (a !== void 0) {
      if (s.manager.itemStart(e), a.then) {
        a.then((c) => {
          t && t(c), s.manager.itemEnd(e);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const l = fetch(e, o).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return Cache.add(e, c), t && t(c), s.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), Cache.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
    });
    Cache.add(e, l), s.manager.itemStart(e);
  }
}
class ArrayCamera extends PerspectiveCamera {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e, this.index = 0;
  }
}
const _RESERVED_CHARS_RE = "\\[\\]\\.:\\/", _reservedRe = new RegExp("[" + _RESERVED_CHARS_RE + "]", "g"), _wordChar = "[^" + _RESERVED_CHARS_RE + "]", _wordCharOrDot = "[^" + _RESERVED_CHARS_RE.replace("\\.", "") + "]", _directoryRe = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", _wordChar), _nodeRe = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", _wordCharOrDot), _objectRe = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _wordChar), _propertyRe = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _wordChar), _trackRe = new RegExp(
  "^" + _directoryRe + _nodeRe + _objectRe + _propertyRe + "$"
), _supportedObjectNames = ["material", "materials", "bones", "map"];
class Composite {
  constructor(e, t, n) {
    const i = n || PropertyBinding.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class PropertyBinding {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || PropertyBinding.parseTrackName(t), this.node = PropertyBinding.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new PropertyBinding.Composite(e, t, n) : new PropertyBinding(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(_reservedRe, "");
  }
  static parseTrackName(e) {
    const t = _trackRe.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      _supportedObjectNames.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === t || o.uuid === t)
            return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = PropertyBinding.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let u = 0; u < e.length; u++)
            if (e[u].name === c) {
              c = u;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.isMaterial === !0 ? o = this.Versioning.NeedsUpdate : e.isObject3D === !0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
PropertyBinding.Composite = Composite;
PropertyBinding.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
PropertyBinding.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
PropertyBinding.prototype.GetterByBindingType = [
  PropertyBinding.prototype._getValue_direct,
  PropertyBinding.prototype._getValue_array,
  PropertyBinding.prototype._getValue_arrayElement,
  PropertyBinding.prototype._getValue_toArray
];
PropertyBinding.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    PropertyBinding.prototype._setValue_direct,
    PropertyBinding.prototype._setValue_direct_setNeedsUpdate,
    PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    PropertyBinding.prototype._setValue_array,
    PropertyBinding.prototype._setValue_array_setNeedsUpdate,
    PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    PropertyBinding.prototype._setValue_arrayElement,
    PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,
    PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    PropertyBinding.prototype._setValue_fromArray,
    PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,
    PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
function getByteLength(r, e, t, n) {
  const i = getTextureTypeByteLength(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case 1021:
      return r * e;
    case 1024:
      return r * e;
    case 1025:
      return r * e * 2;
    case 1028:
      return r * e / i.components * i.byteLength;
    case 1029:
      return r * e / i.components * i.byteLength;
    case 1030:
      return r * e * 2 / i.components * i.byteLength;
    case 1031:
      return r * e * 2 / i.components * i.byteLength;
    case 1022:
      return r * e * 3 / i.components * i.byteLength;
    case 1023:
      return r * e * 4 / i.components * i.byteLength;
    case 1033:
      return r * e * 4 / i.components * i.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case 33776:
    case 33777:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case 35841:
    case 35843:
      return Math.max(r, 16) * Math.max(e, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(r, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case 36196:
    case 37492:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case 37808:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((r + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((r + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((r + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((r + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((r + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((r + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((r + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((r + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((r + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((r + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((r + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((r + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((r + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case 36283:
    case 36284:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function getTextureTypeByteLength(r) {
  switch (r) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${r}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: REVISION
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = REVISION);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function WebGLAnimation() {
  let r = null, e = !1, t = null, n = null;
  function i(s, a) {
    t(s, a), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function WebGLAttributes(r) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, u = o.usage, h = c.byteLength, d = r.createBuffer();
    r.bindBuffer(l, d), r.bufferData(l, c, u), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array)
      p = r.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = r.HALF_FLOAT : p = r.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      p = r.SHORT;
    else if (c instanceof Uint32Array)
      p = r.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      p = r.INT;
    else if (c instanceof Int8Array)
      p = r.BYTE;
    else if (c instanceof Uint8Array)
      p = r.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      p = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: d,
      type: p,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: h
    };
  }
  function n(o, l, c) {
    const u = l.array, h = l.updateRanges;
    if (r.bindBuffer(c, o), h.length === 0)
      r.bufferSubData(c, 0, u);
    else {
      h.sort((p, _) => p.start - _.start);
      let d = 0;
      for (let p = 1; p < h.length; p++) {
        const _ = h[d], g = h[p];
        g.start <= _.start + _.count + 1 ? _.count = Math.max(
          _.count,
          g.start + g.count - _.start
        ) : (++d, h[d] = g);
      }
      h.length = d + 1;
      for (let p = 0, _ = h.length; p < _; p++) {
        const g = h[p];
        r.bufferSubData(
          c,
          g.start * u.BYTES_PER_ELEMENT,
          u,
          g.start,
          g.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (r.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const u = e.get(o);
      (!u || u.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = e.get(o);
    if (c === void 0)
      e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: i,
    remove: s,
    update: a
  };
}
var alphahash_fragment = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, alphahash_pars_fragment = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, alphamap_fragment = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, alphamap_pars_fragment = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, alphatest_fragment = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, alphatest_pars_fragment = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, aomap_fragment = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, aomap_pars_fragment = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, batching_pars_vertex = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, batching_vertex = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, begin_vertex = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, beginnormal_vertex = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, bsdfs = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, iridescence_fragment = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, bumpmap_pars_fragment = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, clipping_planes_fragment = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, clipping_planes_pars_fragment = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, clipping_planes_pars_vertex = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, clipping_planes_vertex = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, color_fragment = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, color_pars_fragment = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, color_pars_vertex = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, color_vertex = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, common = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, cube_uv_reflection_fragment = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, defaultnormal_vertex = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, displacementmap_pars_vertex = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, displacementmap_vertex = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, emissivemap_fragment = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, emissivemap_pars_fragment = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, colorspace_fragment = "gl_FragColor = linearToOutputTexel( gl_FragColor );", colorspace_pars_fragment = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, envmap_fragment = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, envmap_common_pars_fragment = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, envmap_pars_fragment = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, envmap_pars_vertex = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, envmap_vertex = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, fog_vertex = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, fog_pars_vertex = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, fog_fragment = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, fog_pars_fragment = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, gradientmap_pars_fragment = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, lightmap_pars_fragment = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, lights_lambert_fragment = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, lights_lambert_pars_fragment = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, lights_pars_begin = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, envmap_physical_pars_fragment = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, lights_toon_fragment = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, lights_toon_pars_fragment = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, lights_phong_fragment = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, lights_phong_pars_fragment = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, lights_physical_fragment = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, lights_physical_pars_fragment = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, lights_fragment_begin = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, lights_fragment_maps = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, lights_fragment_end = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, logdepthbuf_fragment = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, logdepthbuf_pars_fragment = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, logdepthbuf_pars_vertex = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, logdepthbuf_vertex = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, map_fragment = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, map_pars_fragment = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, map_particle_fragment = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, map_particle_pars_fragment = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, metalnessmap_fragment = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, metalnessmap_pars_fragment = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, morphinstance_vertex = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, morphcolor_vertex = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, morphnormal_vertex = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, morphtarget_pars_vertex = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, morphtarget_vertex = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, normal_fragment_begin = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, normal_fragment_maps = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, normal_pars_fragment = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, normal_pars_vertex = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, normal_vertex = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, normalmap_pars_fragment = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, clearcoat_normal_fragment_begin = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, clearcoat_normal_fragment_maps = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, clearcoat_pars_fragment = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, iridescence_pars_fragment = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, opaque_fragment = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, packing = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, premultiplied_alpha_fragment = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, project_vertex = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, dithering_fragment = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, dithering_pars_fragment = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, roughnessmap_fragment = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, roughnessmap_pars_fragment = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, shadowmap_pars_fragment = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, shadowmap_pars_vertex = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, shadowmap_vertex = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, shadowmask_pars_fragment = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, skinbase_vertex = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, skinning_pars_vertex = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, skinning_vertex = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, skinnormal_vertex = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, specularmap_fragment = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, specularmap_pars_fragment = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, tonemapping_fragment = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, tonemapping_pars_fragment = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, transmission_fragment = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, transmission_pars_fragment = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, uv_pars_fragment = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, uv_pars_vertex = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, uv_vertex = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, worldpos_vertex = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const vertex$h = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, fragment$h = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, vertex$g = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, fragment$g = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, vertex$f = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, fragment$f = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, vertex$e = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, fragment$e = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, vertex$d = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, fragment$d = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, vertex$c = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, fragment$c = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, vertex$b = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, fragment$b = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, vertex$a = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, fragment$a = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, vertex$9 = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, fragment$9 = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, vertex$8 = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, fragment$8 = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, vertex$7 = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, fragment$7 = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, vertex$6 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, fragment$6 = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, vertex$5 = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, fragment$5 = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, vertex$4 = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, fragment$4 = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, vertex$3 = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, fragment$3 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, vertex$2 = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, fragment$2 = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, vertex$1 = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, fragment$1 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, ShaderChunk = {
  alphahash_fragment,
  alphahash_pars_fragment,
  alphamap_fragment,
  alphamap_pars_fragment,
  alphatest_fragment,
  alphatest_pars_fragment,
  aomap_fragment,
  aomap_pars_fragment,
  batching_pars_vertex,
  batching_vertex,
  begin_vertex,
  beginnormal_vertex,
  bsdfs,
  iridescence_fragment,
  bumpmap_pars_fragment,
  clipping_planes_fragment,
  clipping_planes_pars_fragment,
  clipping_planes_pars_vertex,
  clipping_planes_vertex,
  color_fragment,
  color_pars_fragment,
  color_pars_vertex,
  color_vertex,
  common,
  cube_uv_reflection_fragment,
  defaultnormal_vertex,
  displacementmap_pars_vertex,
  displacementmap_vertex,
  emissivemap_fragment,
  emissivemap_pars_fragment,
  colorspace_fragment,
  colorspace_pars_fragment,
  envmap_fragment,
  envmap_common_pars_fragment,
  envmap_pars_fragment,
  envmap_pars_vertex,
  envmap_physical_pars_fragment,
  envmap_vertex,
  fog_vertex,
  fog_pars_vertex,
  fog_fragment,
  fog_pars_fragment,
  gradientmap_pars_fragment,
  lightmap_pars_fragment,
  lights_lambert_fragment,
  lights_lambert_pars_fragment,
  lights_pars_begin,
  lights_toon_fragment,
  lights_toon_pars_fragment,
  lights_phong_fragment,
  lights_phong_pars_fragment,
  lights_physical_fragment,
  lights_physical_pars_fragment,
  lights_fragment_begin,
  lights_fragment_maps,
  lights_fragment_end,
  logdepthbuf_fragment,
  logdepthbuf_pars_fragment,
  logdepthbuf_pars_vertex,
  logdepthbuf_vertex,
  map_fragment,
  map_pars_fragment,
  map_particle_fragment,
  map_particle_pars_fragment,
  metalnessmap_fragment,
  metalnessmap_pars_fragment,
  morphinstance_vertex,
  morphcolor_vertex,
  morphnormal_vertex,
  morphtarget_pars_vertex,
  morphtarget_vertex,
  normal_fragment_begin,
  normal_fragment_maps,
  normal_pars_fragment,
  normal_pars_vertex,
  normal_vertex,
  normalmap_pars_fragment,
  clearcoat_normal_fragment_begin,
  clearcoat_normal_fragment_maps,
  clearcoat_pars_fragment,
  iridescence_pars_fragment,
  opaque_fragment,
  packing,
  premultiplied_alpha_fragment,
  project_vertex,
  dithering_fragment,
  dithering_pars_fragment,
  roughnessmap_fragment,
  roughnessmap_pars_fragment,
  shadowmap_pars_fragment,
  shadowmap_pars_vertex,
  shadowmap_vertex,
  shadowmask_pars_fragment,
  skinbase_vertex,
  skinning_pars_vertex,
  skinning_vertex,
  skinnormal_vertex,
  specularmap_fragment,
  specularmap_pars_fragment,
  tonemapping_fragment,
  tonemapping_pars_fragment,
  transmission_fragment,
  transmission_pars_fragment,
  uv_pars_fragment,
  uv_pars_vertex,
  uv_vertex,
  worldpos_vertex,
  background_vert: vertex$h,
  background_frag: fragment$h,
  backgroundCube_vert: vertex$g,
  backgroundCube_frag: fragment$g,
  cube_vert: vertex$f,
  cube_frag: fragment$f,
  depth_vert: vertex$e,
  depth_frag: fragment$e,
  distanceRGBA_vert: vertex$d,
  distanceRGBA_frag: fragment$d,
  equirect_vert: vertex$c,
  equirect_frag: fragment$c,
  linedashed_vert: vertex$b,
  linedashed_frag: fragment$b,
  meshbasic_vert: vertex$a,
  meshbasic_frag: fragment$a,
  meshlambert_vert: vertex$9,
  meshlambert_frag: fragment$9,
  meshmatcap_vert: vertex$8,
  meshmatcap_frag: fragment$8,
  meshnormal_vert: vertex$7,
  meshnormal_frag: fragment$7,
  meshphong_vert: vertex$6,
  meshphong_frag: fragment$6,
  meshphysical_vert: vertex$5,
  meshphysical_frag: fragment$5,
  meshtoon_vert: vertex$4,
  meshtoon_frag: fragment$4,
  points_vert: vertex$3,
  points_frag: fragment$3,
  shadow_vert: vertex$2,
  shadow_frag: fragment$2,
  sprite_vert: vertex$1,
  sprite_frag: fragment$1
}, UniformsLib = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Color(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Matrix3() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    normalScale: { value: /* @__PURE__ */ new Vector2(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Color(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Color(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Color(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Vector2(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaTest: { value: 0 }
  }
}, ShaderLib = {
  basic: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.meshbasic_vert,
    fragmentShader: ShaderChunk.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) }
      }
    ]),
    vertexShader: ShaderChunk.meshlambert_vert,
    fragmentShader: ShaderChunk.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) },
        specular: { value: /* @__PURE__ */ new Color(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: ShaderChunk.meshphong_vert,
    fragmentShader: ShaderChunk.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.roughnessmap,
      UniformsLib.metalnessmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshphysical_vert,
    fragmentShader: ShaderChunk.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.gradientmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) }
      }
    ]),
    vertexShader: ShaderChunk.meshtoon_vert,
    fragmentShader: ShaderChunk.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: ShaderChunk.meshmatcap_vert,
    fragmentShader: ShaderChunk.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.points,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.points_vert,
    fragmentShader: ShaderChunk.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: ShaderChunk.linedashed_vert,
    fragmentShader: ShaderChunk.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.displacementmap
    ]),
    vertexShader: ShaderChunk.depth_vert,
    fragmentShader: ShaderChunk.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshnormal_vert,
    fragmentShader: ShaderChunk.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.sprite,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.sprite_vert,
    fragmentShader: ShaderChunk.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Matrix3() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: ShaderChunk.background_vert,
    fragmentShader: ShaderChunk.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Matrix3() }
    },
    vertexShader: ShaderChunk.backgroundCube_vert,
    fragmentShader: ShaderChunk.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: ShaderChunk.cube_vert,
    fragmentShader: ShaderChunk.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: ShaderChunk.equirect_vert,
    fragmentShader: ShaderChunk.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new Vector3() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: ShaderChunk.distanceRGBA_vert,
    fragmentShader: ShaderChunk.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.lights,
      UniformsLib.fog,
      {
        color: { value: /* @__PURE__ */ new Color(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.shadow_vert,
    fragmentShader: ShaderChunk.shadow_frag
  }
};
ShaderLib.physical = {
  uniforms: /* @__PURE__ */ mergeUniforms([
    ShaderLib.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Vector2(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Color(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Vector2() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Color(0) },
      specularColor: { value: /* @__PURE__ */ new Color(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      anisotropyVector: { value: /* @__PURE__ */ new Vector2() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Matrix3() }
    }
  ]),
  vertexShader: ShaderChunk.meshphysical_vert,
  fragmentShader: ShaderChunk.meshphysical_frag
};
const _rgb = { r: 0, b: 0, g: 0 }, _e1$1 = /* @__PURE__ */ new Euler(), _m1$1 = /* @__PURE__ */ new Matrix4();
function WebGLBackground(r, e, t, n, i, s, a) {
  const o = new Color(0);
  let l = s === !0 ? 0 : 1, c, u, h = null, d = 0, p = null;
  function _(T) {
    let S = T.isScene === !0 ? T.background : null;
    return S && S.isTexture && (S = (T.backgroundBlurriness > 0 ? t : e).get(S)), S;
  }
  function g(T) {
    let S = !1;
    const y = _(T);
    y === null ? f(o, l) : y && y.isColor && (f(y, 1), S = !0);
    const A = r.xr.getEnvironmentBlendMode();
    A === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : A === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || S) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil));
  }
  function m(T, S) {
    const y = _(S);
    y && (y.isCubeTexture || y.mapping === 306) ? (u === void 0 && (u = new Mesh(
      new BoxGeometry(1, 1, 1),
      new ShaderMaterial({
        name: "BackgroundCubeMaterial",
        uniforms: cloneUniforms(ShaderLib.backgroundCube.uniforms),
        vertexShader: ShaderLib.backgroundCube.vertexShader,
        fragmentShader: ShaderLib.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(A, b, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(u)), _e1$1.copy(S.backgroundRotation), _e1$1.x *= -1, _e1$1.y *= -1, _e1$1.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === !1 && (_e1$1.y *= -1, _e1$1.z *= -1), u.material.uniforms.envMap.value = y, u.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(_e1$1)), u.material.toneMapped = ColorManagement.getTransfer(y.colorSpace) !== SRGBTransfer, (h !== y || d !== y.version || p !== r.toneMapping) && (u.material.needsUpdate = !0, h = y, d = y.version, p = r.toneMapping), u.layers.enableAll(), T.unshift(u, u.geometry, u.material, 0, 0, null)) : y && y.isTexture && (c === void 0 && (c = new Mesh(
      new PlaneGeometry(2, 2),
      new ShaderMaterial({
        name: "BackgroundMaterial",
        uniforms: cloneUniforms(ShaderLib.background.uniforms),
        vertexShader: ShaderLib.background.vertexShader,
        fragmentShader: ShaderLib.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = y, c.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, c.material.toneMapped = ColorManagement.getTransfer(y.colorSpace) !== SRGBTransfer, y.matrixAutoUpdate === !0 && y.updateMatrix(), c.material.uniforms.uvTransform.value.copy(y.matrix), (h !== y || d !== y.version || p !== r.toneMapping) && (c.material.needsUpdate = !0, h = y, d = y.version, p = r.toneMapping), c.layers.enableAll(), T.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function f(T, S) {
    T.getRGB(_rgb, getUnlitUniformColorSpace(r)), n.buffers.color.setClear(_rgb.r, _rgb.g, _rgb.b, S, a);
  }
  function C() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(T, S = 1) {
      o.set(T), l = S, f(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(T) {
      l = T, f(o, l);
    },
    render: g,
    addToRenderList: m,
    dispose: C
  };
}
function WebGLBindingStates(r, e) {
  const t = r.getParameter(r.MAX_VERTEX_ATTRIBS), n = {}, i = d(null);
  let s = i, a = !1;
  function o(M, P, V, N, z) {
    let K = !1;
    const H = h(N, V, P);
    s !== H && (s = H, c(s.object)), K = p(M, N, V, z), K && _(M, N, V, z), z !== null && e.update(z, r.ELEMENT_ARRAY_BUFFER), (K || a) && (a = !1, S(M, P, V, N), z !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(z).buffer));
  }
  function l() {
    return r.createVertexArray();
  }
  function c(M) {
    return r.bindVertexArray(M);
  }
  function u(M) {
    return r.deleteVertexArray(M);
  }
  function h(M, P, V) {
    const N = V.wireframe === !0;
    let z = n[M.id];
    z === void 0 && (z = {}, n[M.id] = z);
    let K = z[P.id];
    K === void 0 && (K = {}, z[P.id] = K);
    let H = K[N];
    return H === void 0 && (H = d(l()), K[N] = H), H;
  }
  function d(M) {
    const P = [], V = [], N = [];
    for (let z = 0; z < t; z++)
      P[z] = 0, V[z] = 0, N[z] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: V,
      attributeDivisors: N,
      object: M,
      attributes: {},
      index: null
    };
  }
  function p(M, P, V, N) {
    const z = s.attributes, K = P.attributes;
    let H = 0;
    const J = V.getAttributes();
    for (const k in J)
      if (J[k].location >= 0) {
        const ce = z[k];
        let ge = K[k];
        if (ge === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (ge = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (ge = M.instanceColor)), ce === void 0 || ce.attribute !== ge || ge && ce.data !== ge.data) return !0;
        H++;
      }
    return s.attributesNum !== H || s.index !== N;
  }
  function _(M, P, V, N) {
    const z = {}, K = P.attributes;
    let H = 0;
    const J = V.getAttributes();
    for (const k in J)
      if (J[k].location >= 0) {
        let ce = K[k];
        ce === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (ce = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (ce = M.instanceColor));
        const ge = {};
        ge.attribute = ce, ce && ce.data && (ge.data = ce.data), z[k] = ge, H++;
      }
    s.attributes = z, s.attributesNum = H, s.index = N;
  }
  function g() {
    const M = s.newAttributes;
    for (let P = 0, V = M.length; P < V; P++)
      M[P] = 0;
  }
  function m(M) {
    f(M, 0);
  }
  function f(M, P) {
    const V = s.newAttributes, N = s.enabledAttributes, z = s.attributeDivisors;
    V[M] = 1, N[M] === 0 && (r.enableVertexAttribArray(M), N[M] = 1), z[M] !== P && (r.vertexAttribDivisor(M, P), z[M] = P);
  }
  function C() {
    const M = s.newAttributes, P = s.enabledAttributes;
    for (let V = 0, N = P.length; V < N; V++)
      P[V] !== M[V] && (r.disableVertexAttribArray(V), P[V] = 0);
  }
  function T(M, P, V, N, z, K, H) {
    H === !0 ? r.vertexAttribIPointer(M, P, V, z, K) : r.vertexAttribPointer(M, P, V, N, z, K);
  }
  function S(M, P, V, N) {
    g();
    const z = N.attributes, K = V.getAttributes(), H = P.defaultAttributeValues;
    for (const J in K) {
      const k = K[J];
      if (k.location >= 0) {
        let ie = z[J];
        if (ie === void 0 && (J === "instanceMatrix" && M.instanceMatrix && (ie = M.instanceMatrix), J === "instanceColor" && M.instanceColor && (ie = M.instanceColor)), ie !== void 0) {
          const ce = ie.normalized, ge = ie.itemSize, Le = e.get(ie);
          if (Le === void 0) continue;
          const ze = Le.buffer, X = Le.type, Q = Le.bytesPerElement, pe = X === r.INT || X === r.UNSIGNED_INT || ie.gpuType === 1013;
          if (ie.isInterleavedBufferAttribute) {
            const re = ie.data, Se = re.stride, Oe = ie.offset;
            if (re.isInstancedInterleavedBuffer) {
              for (let Ee = 0; Ee < k.locationSize; Ee++)
                f(k.location + Ee, re.meshPerAttribute);
              M.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = re.meshPerAttribute * re.count);
            } else
              for (let Ee = 0; Ee < k.locationSize; Ee++)
                m(k.location + Ee);
            r.bindBuffer(r.ARRAY_BUFFER, ze);
            for (let Ee = 0; Ee < k.locationSize; Ee++)
              T(
                k.location + Ee,
                ge / k.locationSize,
                X,
                ce,
                Se * Q,
                (Oe + ge / k.locationSize * Ee) * Q,
                pe
              );
          } else {
            if (ie.isInstancedBufferAttribute) {
              for (let re = 0; re < k.locationSize; re++)
                f(k.location + re, ie.meshPerAttribute);
              M.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = ie.meshPerAttribute * ie.count);
            } else
              for (let re = 0; re < k.locationSize; re++)
                m(k.location + re);
            r.bindBuffer(r.ARRAY_BUFFER, ze);
            for (let re = 0; re < k.locationSize; re++)
              T(
                k.location + re,
                ge / k.locationSize,
                X,
                ce,
                ge * Q,
                ge / k.locationSize * re * Q,
                pe
              );
          }
        } else if (H !== void 0) {
          const ce = H[J];
          if (ce !== void 0)
            switch (ce.length) {
              case 2:
                r.vertexAttrib2fv(k.location, ce);
                break;
              case 3:
                r.vertexAttrib3fv(k.location, ce);
                break;
              case 4:
                r.vertexAttrib4fv(k.location, ce);
                break;
              default:
                r.vertexAttrib1fv(k.location, ce);
            }
        }
      }
    }
    C();
  }
  function y() {
    w();
    for (const M in n) {
      const P = n[M];
      for (const V in P) {
        const N = P[V];
        for (const z in N)
          u(N[z].object), delete N[z];
        delete P[V];
      }
      delete n[M];
    }
  }
  function A(M) {
    if (n[M.id] === void 0) return;
    const P = n[M.id];
    for (const V in P) {
      const N = P[V];
      for (const z in N)
        u(N[z].object), delete N[z];
      delete P[V];
    }
    delete n[M.id];
  }
  function b(M) {
    for (const P in n) {
      const V = n[P];
      if (V[M.id] === void 0) continue;
      const N = V[M.id];
      for (const z in N)
        u(N[z].object), delete N[z];
      delete V[M.id];
    }
  }
  function w() {
    E(), a = !0, s !== i && (s = i, c(s.object));
  }
  function E() {
    i.geometry = null, i.program = null, i.wireframe = !1;
  }
  return {
    setup: o,
    reset: w,
    resetDefaultState: E,
    dispose: y,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: b,
    initAttributes: g,
    enableAttribute: m,
    disableUnusedAttributes: C
  };
}
function WebGLBufferRenderer(r, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function s(c, u) {
    r.drawArrays(n, c, u), t.update(u, n, 1);
  }
  function a(c, u, h) {
    h !== 0 && (r.drawArraysInstanced(n, c, u, h), t.update(u, n, h));
  }
  function o(c, u, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, h);
    let p = 0;
    for (let _ = 0; _ < h; _++)
      p += u[_];
    t.update(p, n, 1);
  }
  function l(c, u, h, d) {
    if (h === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let _ = 0; _ < c.length; _++)
        a(c[_], u[_], d[_]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, d, 0, h);
      let _ = 0;
      for (let g = 0; g < h; g++)
        _ += u[g] * d[g];
      t.update(_, n, 1);
    }
  }
  this.setMode = i, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function WebGLCapabilities(r, e, t, n) {
  let i;
  function s() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const b = e.get("EXT_texture_filter_anisotropic");
      i = r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function a(b) {
    return !(b !== 1023 && n.convert(b) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(b) {
    const w = b === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(b !== 1009 && n.convert(b) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    b !== 1015 && !w);
  }
  function l(b) {
    if (b === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      b = "mediump";
    }
    return b === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const h = t.logarithmicDepthBuffer === !0, d = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"), p = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), _ = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = r.getParameter(r.MAX_TEXTURE_SIZE), m = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), f = r.getParameter(r.MAX_VERTEX_ATTRIBS), C = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), T = r.getParameter(r.MAX_VARYING_VECTORS), S = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), y = _ > 0, A = r.getParameter(r.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: h,
    reverseDepthBuffer: d,
    maxTextures: p,
    maxVertexTextures: _,
    maxTextureSize: g,
    maxCubemapSize: m,
    maxAttributes: f,
    maxVertexUniforms: C,
    maxVaryings: T,
    maxFragmentUniforms: S,
    vertexTextures: y,
    maxSamples: A
  };
}
function WebGLClipping(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const a = new Plane(), o = new Matrix3(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d) {
    const p = h.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = h.length, p;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(h, d) {
    t = u(h, d, 0);
  }, this.setState = function(h, d, p) {
    const _ = h.clippingPlanes, g = h.clipIntersection, m = h.clipShadows, f = r.get(h);
    if (!i || _ === null || _.length === 0 || s && !m)
      s ? u(null) : c();
    else {
      const C = s ? 0 : n, T = C * 4;
      let S = f.clippingState || null;
      l.value = S, S = u(_, d, T, p);
      for (let y = 0; y !== T; ++y)
        S[y] = t[y];
      f.clippingState = S, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += C;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(h, d, p, _) {
    const g = h !== null ? h.length : 0;
    let m = null;
    if (g !== 0) {
      if (m = l.value, _ !== !0 || m === null) {
        const f = p + g * 4, C = d.matrixWorldInverse;
        o.getNormalMatrix(C), (m === null || m.length < f) && (m = new Float32Array(f));
        for (let T = 0, S = p; T !== g; ++T, S += 4)
          a.copy(h[T]).applyMatrix4(C, o), a.normal.toArray(m, S), m[S + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return e.numPlanes = g, e.numIntersection = 0, m;
  }
}
function WebGLCubeMaps(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === 303 ? a.mapping = 301 : o === 304 && (a.mapping = 302), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === 303 || o === 304)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new WebGLCubeRenderTarget(l.height);
            return c.fromEquirectangularTexture(r, a), e.set(a, c), a.addEventListener("dispose", i), t(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
const LOD_MIN = 4, EXTRA_LOD_SIGMA = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], MAX_SAMPLES = 20, _flatCamera = /* @__PURE__ */ new OrthographicCamera(), _clearColor = /* @__PURE__ */ new Color();
let _oldTarget = null, _oldActiveCubeFace = 0, _oldActiveMipmapLevel = 0, _oldXrEnabled = !1;
const PHI = (1 + Math.sqrt(5)) / 2, INV_PHI = 1 / PHI, _axisDirections = [
  /* @__PURE__ */ new Vector3(-PHI, INV_PHI, 0),
  /* @__PURE__ */ new Vector3(PHI, INV_PHI, 0),
  /* @__PURE__ */ new Vector3(-INV_PHI, 0, PHI),
  /* @__PURE__ */ new Vector3(INV_PHI, 0, PHI),
  /* @__PURE__ */ new Vector3(0, PHI, -INV_PHI),
  /* @__PURE__ */ new Vector3(0, PHI, INV_PHI),
  /* @__PURE__ */ new Vector3(-1, 1, -1),
  /* @__PURE__ */ new Vector3(1, 1, -1),
  /* @__PURE__ */ new Vector3(-1, 1, 1),
  /* @__PURE__ */ new Vector3(1, 1, 1)
], _origin = /* @__PURE__ */ new Vector3();
class PMREMGenerator {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety.
   *
   * @param {Scene} scene
   * @param {number} sigma
   * @param {number} near
   * @param {number} far
   * @param {Object} [options={}]
   * @return {WebGLRenderTarget}
   */
  fromScene(e, t = 0, n = 0.1, i = 100, s = {}) {
    const {
      size: a = 256,
      position: o = _origin
    } = s;
    _oldTarget = this._renderer.getRenderTarget(), _oldActiveCubeFace = this._renderer.getActiveCubeFace(), _oldActiveMipmapLevel = this._renderer.getActiveMipmapLevel(), _oldXrEnabled = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
    const l = this._allocateTargets();
    return l.depthBuffer = !0, this._sceneToCubeUV(e, n, i, l, o), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   *
   * @param {Texture} equirectangular
   * @param {?WebGLRenderTarget} [renderTarget=null] - Optional render target.
   * @return {WebGLRenderTarget}
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   *
   * @param {Texture} cubemap
   * @param {null} [renderTarget=null] - Optional render target.
   * @return {WebGLRenderTarget}
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = _getCubemapMaterial(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = _getEquirectMaterial(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(_oldTarget, _oldActiveCubeFace, _oldActiveMipmapLevel), this._renderer.xr.enabled = _oldXrEnabled, e.scissorTest = !1, _setViewport(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), _oldTarget = this._renderer.getRenderTarget(), _oldActiveCubeFace = this._renderer.getActiveCubeFace(), _oldActiveMipmapLevel = this._renderer.getActiveMipmapLevel(), _oldXrEnabled = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: LinearSRGBColorSpace,
      depthBuffer: !1
    }, i = _createRenderTarget(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = _createRenderTarget(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = _createPlanes(s)), this._blurMaterial = _getBlurShader(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Mesh(this._lodPlanes[0], e);
    this._renderer.compile(t, _flatCamera);
  }
  _sceneToCubeUV(e, t, n, i, s) {
    const l = new PerspectiveCamera(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], h = this._renderer, d = h.autoClear, p = h.toneMapping;
    h.getClearColor(_clearColor), h.toneMapping = 0, h.autoClear = !1;
    const _ = new MeshBasicMaterial({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new Mesh(new BoxGeometry(), _);
    let m = !1;
    const f = e.background;
    f ? f.isColor && (_.color.copy(f), e.background = null, m = !0) : (_.color.copy(_clearColor), m = !0);
    for (let C = 0; C < 6; C++) {
      const T = C % 3;
      T === 0 ? (l.up.set(0, c[C], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x + u[C], s.y, s.z)) : T === 1 ? (l.up.set(0, 0, c[C]), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y + u[C], s.z)) : (l.up.set(0, c[C], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y, s.z + u[C]));
      const S = this._cubeSize;
      _setViewport(i, T * S, C > 2 ? S : 0, S, S), h.setRenderTarget(i), m && h.render(g, l), h.render(e, l);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = p, h.autoClear = d, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = _getCubemapMaterial()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = _getEquirectMaterial());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new Mesh(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    _setViewport(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, _flatCamera);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let s = 1; s < i; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = _axisDirections[(i - s - 1) % _axisDirections.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   *
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn
   * @param {number} lodOut
   * @param {number} sigma
   * @param {Vector3} [poleAxis]
   */
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, h = new Mesh(this._lodPlanes[i], c), d = c.uniforms, p = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * MAX_SAMPLES - 1), g = s / _, m = isFinite(s) ? 1 + Math.floor(u * g) : MAX_SAMPLES;
    m > MAX_SAMPLES && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${MAX_SAMPLES}`);
    const f = [];
    let C = 0;
    for (let b = 0; b < MAX_SAMPLES; ++b) {
      const w = b / g, E = Math.exp(-w * w / 2);
      f.push(E), b === 0 ? C += E : b < m && (C += 2 * E);
    }
    for (let b = 0; b < f.length; b++)
      f[b] = f[b] / C;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: T } = this;
    d.dTheta.value = _, d.mipInt.value = T - n;
    const S = this._sizeLods[i], y = 3 * S * (i > T - LOD_MIN ? i - T + LOD_MIN : 0), A = 4 * (this._cubeSize - S);
    _setViewport(t, y, A, 3 * S, 2 * S), l.setRenderTarget(t), l.render(h, _flatCamera);
  }
}
function _createPlanes(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - LOD_MIN + 1 + EXTRA_LOD_SIGMA.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > r - LOD_MIN ? l = EXTRA_LOD_SIGMA[a - r + LOD_MIN - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, h = 1 + c, d = [u, u, h, u, h, h, u, u, h, h, u, h], p = 6, _ = 6, g = 3, m = 2, f = 1, C = new Float32Array(g * _ * p), T = new Float32Array(m * _ * p), S = new Float32Array(f * _ * p);
    for (let A = 0; A < p; A++) {
      const b = A % 3 * 2 / 3 - 1, w = A > 2 ? 0 : -1, E = [
        b,
        w,
        0,
        b + 2 / 3,
        w,
        0,
        b + 2 / 3,
        w + 1,
        0,
        b,
        w,
        0,
        b + 2 / 3,
        w + 1,
        0,
        b,
        w + 1,
        0
      ];
      C.set(E, g * _ * A), T.set(d, m * _ * A);
      const M = [A, A, A, A, A, A];
      S.set(M, f * _ * A);
    }
    const y = new BufferGeometry();
    y.setAttribute("position", new BufferAttribute(C, g)), y.setAttribute("uv", new BufferAttribute(T, m)), y.setAttribute("faceIndex", new BufferAttribute(S, f)), e.push(y), i > LOD_MIN && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function _createRenderTarget(r, e, t) {
  const n = new WebGLRenderTarget(r, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function _setViewport(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function _getBlurShader(r, e, t) {
  const n = new Float32Array(MAX_SAMPLES), i = new Vector3(0, 1, 0);
  return new ShaderMaterial({
    name: "SphericalGaussianBlur",
    defines: {
      n: MAX_SAMPLES,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function _getEquirectMaterial() {
  return new ShaderMaterial({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function _getCubemapMaterial() {
  return new ShaderMaterial({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function _getCommonVertexShader() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function WebGLCubeUVMaps(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === 303 || l === 304, u = l === 301 || l === 302;
      if (c || u) {
        let h = e.get(o);
        const d = h !== void 0 ? h.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d)
          return t === null && (t = new PMREMGenerator(r)), h = c ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h), h.texture.pmremVersion = o.pmremVersion, e.set(o, h), h.texture;
        if (h !== void 0)
          return h.texture;
        {
          const p = o.image;
          return c && p && p.height > 0 || u && p && i(p) ? (t === null && (t = new PMREMGenerator(r)), h = c ? t.fromEquirectangular(o) : t.fromCubemap(o), h.texture.pmremVersion = o.pmremVersion, e.set(o, h), o.addEventListener("dispose", s), h.texture) : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function WebGLExtensions(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const i = t(n);
      return i === null && warnOnce("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function WebGLGeometries(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(h) {
    const d = h.target;
    d.index !== null && e.remove(d.index);
    for (const _ in d.attributes)
      e.remove(d.attributes[_]);
    d.removeEventListener("dispose", a), delete i[d.id];
    const p = s.get(d);
    p && (e.remove(p), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(h, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, t.memory.geometries++), d;
  }
  function l(h) {
    const d = h.attributes;
    for (const p in d)
      e.update(d[p], r.ARRAY_BUFFER);
  }
  function c(h) {
    const d = [], p = h.index, _ = h.attributes.position;
    let g = 0;
    if (p !== null) {
      const C = p.array;
      g = p.version;
      for (let T = 0, S = C.length; T < S; T += 3) {
        const y = C[T + 0], A = C[T + 1], b = C[T + 2];
        d.push(y, A, A, b, b, y);
      }
    } else if (_ !== void 0) {
      const C = _.array;
      g = _.version;
      for (let T = 0, S = C.length / 3 - 1; T < S; T += 3) {
        const y = T + 0, A = T + 1, b = T + 2;
        d.push(y, A, A, b, b, y);
      }
    } else
      return;
    const m = new (arrayNeedsUint32(d) ? Uint32BufferAttribute : Uint16BufferAttribute)(d, 1);
    m.version = g;
    const f = s.get(h);
    f && e.remove(f), s.set(h, m);
  }
  function u(h) {
    const d = s.get(h);
    if (d) {
      const p = h.index;
      p !== null && d.version < p.version && c(h);
    } else
      c(h);
    return s.get(h);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: u
  };
}
function WebGLIndexedBufferRenderer(r, e, t) {
  let n;
  function i(d) {
    n = d;
  }
  let s, a;
  function o(d) {
    s = d.type, a = d.bytesPerElement;
  }
  function l(d, p) {
    r.drawElements(n, p, s, d * a), t.update(p, n, 1);
  }
  function c(d, p, _) {
    _ !== 0 && (r.drawElementsInstanced(n, p, s, d * a, _), t.update(p, n, _));
  }
  function u(d, p, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, s, d, 0, _);
    let m = 0;
    for (let f = 0; f < _; f++)
      m += p[f];
    t.update(m, n, 1);
  }
  function h(d, p, _, g) {
    if (_ === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let f = 0; f < d.length; f++)
        c(d[f] / a, p[f], g[f]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, s, d, 0, g, 0, _);
      let f = 0;
      for (let C = 0; C < _; C++)
        f += p[C] * g[C];
      t.update(f, n, 1);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = h;
}
function WebGLInfo(r) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case r.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case r.LINES:
        t.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += o * s;
        break;
      case r.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function WebGLMorphtargets(r, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Vector4();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, h = u !== void 0 ? u.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== h) {
      let E = function() {
        b.dispose(), n.delete(o), o.removeEventListener("dispose", E);
      };
      d !== void 0 && d.texture.dispose();
      const p = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, g = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], f = o.morphAttributes.normal || [], C = o.morphAttributes.color || [];
      let T = 0;
      p === !0 && (T = 1), _ === !0 && (T = 2), g === !0 && (T = 3);
      let S = o.attributes.position.count * T, y = 1;
      S > e.maxTextureSize && (y = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
      const A = new Float32Array(S * y * 4 * h), b = new DataArrayTexture(A, S, y, h);
      b.type = 1015, b.needsUpdate = !0;
      const w = T * 4;
      for (let M = 0; M < h; M++) {
        const P = m[M], V = f[M], N = C[M], z = S * y * 4 * M;
        for (let K = 0; K < P.count; K++) {
          const H = K * w;
          p === !0 && (i.fromBufferAttribute(P, K), A[z + H + 0] = i.x, A[z + H + 1] = i.y, A[z + H + 2] = i.z, A[z + H + 3] = 0), _ === !0 && (i.fromBufferAttribute(V, K), A[z + H + 4] = i.x, A[z + H + 5] = i.y, A[z + H + 6] = i.z, A[z + H + 7] = 0), g === !0 && (i.fromBufferAttribute(N, K), A[z + H + 8] = i.x, A[z + H + 9] = i.y, A[z + H + 10] = i.z, A[z + H + 11] = N.itemSize === 4 ? i.w : 1);
        }
      }
      d = {
        count: h,
        texture: b,
        size: new Vector2(S, y)
      }, n.set(o, d), o.addEventListener("dispose", E);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(r, "morphTexture", a.morphTexture, t);
    else {
      let p = 0;
      for (let g = 0; g < c.length; g++)
        p += c[g];
      const _ = o.morphTargetsRelative ? 1 : 1 - p;
      l.getUniforms().setValue(r, "morphTargetBaseInfluence", _), l.getUniforms().setValue(r, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(r, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(r, "morphTargetsTextureSize", d.size);
  }
  return {
    update: s
  };
}
function WebGLObjects(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, u = l.geometry, h = e.get(l, u);
    if (i.get(h) !== c && (e.update(h), i.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), i.get(l) !== c && (t.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      i.get(d) !== c && (d.update(), i.set(d, c));
    }
    return h;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
const emptyTexture = /* @__PURE__ */ new Texture(), emptyShadowTexture = /* @__PURE__ */ new DepthTexture(1, 1), emptyArrayTexture = /* @__PURE__ */ new DataArrayTexture(), empty3dTexture = /* @__PURE__ */ new Data3DTexture(), emptyCubeTexture = /* @__PURE__ */ new CubeTexture(), arrayCacheF32 = [], arrayCacheI32 = [], mat4array = new Float32Array(16), mat3array = new Float32Array(9), mat2array = new Float32Array(4);
function flatten(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = arrayCacheF32[i];
  if (s === void 0 && (s = new Float32Array(i), arrayCacheF32[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, r[a].toArray(s, o);
  }
  return s;
}
function arraysEqual(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t]) return !1;
  return !0;
}
function copyArray(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function allocTexUnits(r, e) {
  let t = arrayCacheI32[e];
  t === void 0 && (t = new Int32Array(e), arrayCacheI32[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function setValueV1f(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function setValueV2f(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (arraysEqual(t, e)) return;
    r.uniform2fv(this.addr, e), copyArray(t, e);
  }
}
function setValueV3f(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (arraysEqual(t, e)) return;
    r.uniform3fv(this.addr, e), copyArray(t, e);
  }
}
function setValueV4f(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (arraysEqual(t, e)) return;
    r.uniform4fv(this.addr, e), copyArray(t, e);
  }
}
function setValueM2(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (arraysEqual(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), copyArray(t, e);
  } else {
    if (arraysEqual(t, n)) return;
    mat2array.set(n), r.uniformMatrix2fv(this.addr, !1, mat2array), copyArray(t, n);
  }
}
function setValueM3(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (arraysEqual(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), copyArray(t, e);
  } else {
    if (arraysEqual(t, n)) return;
    mat3array.set(n), r.uniformMatrix3fv(this.addr, !1, mat3array), copyArray(t, n);
  }
}
function setValueM4(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (arraysEqual(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), copyArray(t, e);
  } else {
    if (arraysEqual(t, n)) return;
    mat4array.set(n), r.uniformMatrix4fv(this.addr, !1, mat4array), copyArray(t, n);
  }
}
function setValueV1i(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function setValueV2i(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (arraysEqual(t, e)) return;
    r.uniform2iv(this.addr, e), copyArray(t, e);
  }
}
function setValueV3i(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (arraysEqual(t, e)) return;
    r.uniform3iv(this.addr, e), copyArray(t, e);
  }
}
function setValueV4i(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (arraysEqual(t, e)) return;
    r.uniform4iv(this.addr, e), copyArray(t, e);
  }
}
function setValueV1ui(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function setValueV2ui(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (arraysEqual(t, e)) return;
    r.uniform2uiv(this.addr, e), copyArray(t, e);
  }
}
function setValueV3ui(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (arraysEqual(t, e)) return;
    r.uniform3uiv(this.addr, e), copyArray(t, e);
  }
}
function setValueV4ui(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (arraysEqual(t, e)) return;
    r.uniform4uiv(this.addr, e), copyArray(t, e);
  }
}
function setValueT1(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
  let s;
  this.type === r.SAMPLER_2D_SHADOW ? (emptyShadowTexture.compareFunction = 515, s = emptyShadowTexture) : s = emptyTexture, t.setTexture2D(e || s, i);
}
function setValueT3D1(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || empty3dTexture, i);
}
function setValueT6(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || emptyCubeTexture, i);
}
function setValueT2DArray1(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || emptyArrayTexture, i);
}
function getSingularSetter(r) {
  switch (r) {
    case 5126:
      return setValueV1f;
    // FLOAT
    case 35664:
      return setValueV2f;
    // _VEC2
    case 35665:
      return setValueV3f;
    // _VEC3
    case 35666:
      return setValueV4f;
    // _VEC4
    case 35674:
      return setValueM2;
    // _MAT2
    case 35675:
      return setValueM3;
    // _MAT3
    case 35676:
      return setValueM4;
    // _MAT4
    case 5124:
    case 35670:
      return setValueV1i;
    // INT, BOOL
    case 35667:
    case 35671:
      return setValueV2i;
    // _VEC2
    case 35668:
    case 35672:
      return setValueV3i;
    // _VEC3
    case 35669:
    case 35673:
      return setValueV4i;
    // _VEC4
    case 5125:
      return setValueV1ui;
    // UINT
    case 36294:
      return setValueV2ui;
    // _VEC2
    case 36295:
      return setValueV3ui;
    // _VEC3
    case 36296:
      return setValueV4ui;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return setValueT1;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return setValueT3D1;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return setValueT6;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return setValueT2DArray1;
  }
}
function setValueV1fArray(r, e) {
  r.uniform1fv(this.addr, e);
}
function setValueV2fArray(r, e) {
  const t = flatten(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function setValueV3fArray(r, e) {
  const t = flatten(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function setValueV4fArray(r, e) {
  const t = flatten(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function setValueM2Array(r, e) {
  const t = flatten(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function setValueM3Array(r, e) {
  const t = flatten(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function setValueM4Array(r, e) {
  const t = flatten(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function setValueV1iArray(r, e) {
  r.uniform1iv(this.addr, e);
}
function setValueV2iArray(r, e) {
  r.uniform2iv(this.addr, e);
}
function setValueV3iArray(r, e) {
  r.uniform3iv(this.addr, e);
}
function setValueV4iArray(r, e) {
  r.uniform4iv(this.addr, e);
}
function setValueV1uiArray(r, e) {
  r.uniform1uiv(this.addr, e);
}
function setValueV2uiArray(r, e) {
  r.uniform2uiv(this.addr, e);
}
function setValueV3uiArray(r, e) {
  r.uniform3uiv(this.addr, e);
}
function setValueV4uiArray(r, e) {
  r.uniform4uiv(this.addr, e);
}
function setValueT1Array(r, e, t) {
  const n = this.cache, i = e.length, s = allocTexUnits(t, i);
  arraysEqual(n, s) || (r.uniform1iv(this.addr, s), copyArray(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || emptyTexture, s[a]);
}
function setValueT3DArray(r, e, t) {
  const n = this.cache, i = e.length, s = allocTexUnits(t, i);
  arraysEqual(n, s) || (r.uniform1iv(this.addr, s), copyArray(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || empty3dTexture, s[a]);
}
function setValueT6Array(r, e, t) {
  const n = this.cache, i = e.length, s = allocTexUnits(t, i);
  arraysEqual(n, s) || (r.uniform1iv(this.addr, s), copyArray(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || emptyCubeTexture, s[a]);
}
function setValueT2DArrayArray(r, e, t) {
  const n = this.cache, i = e.length, s = allocTexUnits(t, i);
  arraysEqual(n, s) || (r.uniform1iv(this.addr, s), copyArray(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || emptyArrayTexture, s[a]);
}
function getPureArraySetter(r) {
  switch (r) {
    case 5126:
      return setValueV1fArray;
    // FLOAT
    case 35664:
      return setValueV2fArray;
    // _VEC2
    case 35665:
      return setValueV3fArray;
    // _VEC3
    case 35666:
      return setValueV4fArray;
    // _VEC4
    case 35674:
      return setValueM2Array;
    // _MAT2
    case 35675:
      return setValueM3Array;
    // _MAT3
    case 35676:
      return setValueM4Array;
    // _MAT4
    case 5124:
    case 35670:
      return setValueV1iArray;
    // INT, BOOL
    case 35667:
    case 35671:
      return setValueV2iArray;
    // _VEC2
    case 35668:
    case 35672:
      return setValueV3iArray;
    // _VEC3
    case 35669:
    case 35673:
      return setValueV4iArray;
    // _VEC4
    case 5125:
      return setValueV1uiArray;
    // UINT
    case 36294:
      return setValueV2uiArray;
    // _VEC2
    case 36295:
      return setValueV3uiArray;
    // _VEC3
    case 36296:
      return setValueV4uiArray;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return setValueT1Array;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return setValueT3DArray;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return setValueT6Array;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return setValueT2DArrayArray;
  }
}
class SingleUniform {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = getSingularSetter(t.type);
  }
}
class PureArrayUniform {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = getPureArraySetter(t.type);
  }
}
class StructuredUniform {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const RePathPart = /(\w+)(\])?(\[|\.)?/g;
function addUniform(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function parseUniform(r, e, t) {
  const n = r.name, i = n.length;
  for (RePathPart.lastIndex = 0; ; ) {
    const s = RePathPart.exec(n), a = RePathPart.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      addUniform(t, c === void 0 ? new SingleUniform(o, r, e) : new PureArrayUniform(o, r, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && (h = new StructuredUniform(o), addUniform(t, h)), t = h;
    }
  }
}
class WebGLUniforms {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name);
      parseUniform(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function WebGLShader(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
const COMPLETION_STATUS_KHR = 37297;
let programIdCount = 0;
function handleSource(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const _m0 = /* @__PURE__ */ new Matrix3();
function getEncodingComponents(r) {
  ColorManagement._getMatrix(_m0, ColorManagement.workingColorSpace, r);
  const e = `mat3( ${_m0.elements.map((t) => t.toFixed(4))} )`;
  switch (ColorManagement.getTransfer(r)) {
    case LinearTransfer:
      return [e, "LinearTransferOETF"];
    case SRGBTransfer:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", r), [e, "LinearTransferOETF"];
  }
}
function getShaderErrors(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + handleSource(r.getShaderSource(e), a);
  } else
    return i;
}
function getTexelEncodingFunction(r, e) {
  const t = getEncodingComponents(e);
  return [
    `vec4 ${r}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function getToneMappingFunction(r, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "Cineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 6:
      t = "AgX";
      break;
    case 7:
      t = "Neutral";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const _v0 = /* @__PURE__ */ new Vector3();
function getLuminanceFunction() {
  ColorManagement.getLuminanceCoefficients(_v0);
  const r = _v0.x.toFixed(4), e = _v0.y.toFixed(4), t = _v0.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function generateVertexExtensions(r) {
  return [
    r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(filterEmptyLine).join(`
`);
}
function generateDefines(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function fetchAttributeLocations(r, e) {
  const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: r.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function filterEmptyLine(r) {
  return r !== "";
}
function replaceLightNums(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function replaceClippingPlaneNums(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
function resolveIncludes(r) {
  return r.replace(includePattern, includeReplacer);
}
const shaderChunkMap = /* @__PURE__ */ new Map();
function includeReplacer(r, e) {
  let t = ShaderChunk[e];
  if (t === void 0) {
    const n = shaderChunkMap.get(e);
    if (n !== void 0)
      t = ShaderChunk[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return resolveIncludes(t);
}
const unrollLoopPattern = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function unrollLoops(r) {
  return r.replace(unrollLoopPattern, loopReplacer);
}
function loopReplacer(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function generatePrecision(r) {
  let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function generateShadowMapTypeDefine(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function generateEnvMapTypeDefine(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function generateEnvMapModeDefine(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function generateEnvMapBlendingDefine(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function generateCubeUVSize(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function WebGLProgram(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = generateShadowMapTypeDefine(t), c = generateEnvMapTypeDefine(t), u = generateEnvMapModeDefine(t), h = generateEnvMapBlendingDefine(t), d = generateCubeUVSize(t), p = generateVertexExtensions(t), _ = generateDefines(s), g = i.createProgram();
  let m, f, C = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(filterEmptyLine).join(`
`), m.length > 0 && (m += `
`), f = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(filterEmptyLine).join(`
`), f.length > 0 && (f += `
`)) : (m = [
    generatePrecision(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(filterEmptyLine).join(`
`), f = [
    generatePrecision(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + h : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? ShaderChunk.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? getToneMappingFunction("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    ShaderChunk.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    getTexelEncodingFunction("linearToOutputTexel", t.outputColorSpace),
    getLuminanceFunction(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(filterEmptyLine).join(`
`)), a = resolveIncludes(a), a = replaceLightNums(a, t), a = replaceClippingPlaneNums(a, t), o = resolveIncludes(o), o = replaceLightNums(o, t), o = replaceClippingPlaneNums(o, t), a = unrollLoops(a), o = unrollLoops(o), t.isRawShaderMaterial !== !0 && (C = `#version 300 es
`, m = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, f = [
    "#define varying in",
    t.glslVersion === GLSL3 ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === GLSL3 ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + f);
  const T = C + m + a, S = C + f + o, y = WebGLShader(i, i.VERTEX_SHADER, T), A = WebGLShader(i, i.FRAGMENT_SHADER, S);
  i.attachShader(g, y), i.attachShader(g, A), t.index0AttributeName !== void 0 ? i.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(g, 0, "position"), i.linkProgram(g);
  function b(P) {
    if (r.debug.checkShaderErrors) {
      const V = i.getProgramInfoLog(g).trim(), N = i.getShaderInfoLog(y).trim(), z = i.getShaderInfoLog(A).trim();
      let K = !0, H = !0;
      if (i.getProgramParameter(g, i.LINK_STATUS) === !1)
        if (K = !1, typeof r.debug.onShaderError == "function")
          r.debug.onShaderError(i, g, y, A);
        else {
          const J = getShaderErrors(i, y, "vertex"), k = getShaderErrors(i, A, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(g, i.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + V + `
` + J + `
` + k
          );
        }
      else V !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", V) : (N === "" || z === "") && (H = !1);
      H && (P.diagnostics = {
        runnable: K,
        programLog: V,
        vertexShader: {
          log: N,
          prefix: m
        },
        fragmentShader: {
          log: z,
          prefix: f
        }
      });
    }
    i.deleteShader(y), i.deleteShader(A), w = new WebGLUniforms(i, g), E = fetchAttributeLocations(i, g);
  }
  let w;
  this.getUniforms = function() {
    return w === void 0 && b(this), w;
  };
  let E;
  this.getAttributes = function() {
    return E === void 0 && b(this), E;
  };
  let M = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return M === !1 && (M = i.getProgramParameter(g, COMPLETION_STATUS_KHR)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(g), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = programIdCount++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = y, this.fragmentShader = A, this;
}
let _id = 0;
class WebGLShaderCache {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new WebGLShaderStage(e), t.set(e, n)), n;
  }
}
class WebGLShaderStage {
  constructor(e) {
    this.id = _id++, this.code = e, this.usedTimes = 0;
  }
}
function WebGLPrograms(r, e, t, n, i, s, a) {
  const o = new Layers(), l = new WebGLShaderCache(), c = /* @__PURE__ */ new Set(), u = [], h = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let p = i.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function g(E) {
    return c.add(E), E === 0 ? "uv" : `uv${E}`;
  }
  function m(E, M, P, V, N) {
    const z = V.fog, K = N.geometry, H = E.isMeshStandardMaterial ? V.environment : null, J = (E.isMeshStandardMaterial ? t : e).get(E.envMap || H), k = J && J.mapping === 306 ? J.image.height : null, ie = _[E.type];
    E.precision !== null && (p = i.getMaxPrecision(E.precision), p !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", p, "instead."));
    const ce = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, ge = ce !== void 0 ? ce.length : 0;
    let Le = 0;
    K.morphAttributes.position !== void 0 && (Le = 1), K.morphAttributes.normal !== void 0 && (Le = 2), K.morphAttributes.color !== void 0 && (Le = 3);
    let ze, X, Q, pe;
    if (ie) {
      const ke = ShaderLib[ie];
      ze = ke.vertexShader, X = ke.fragmentShader;
    } else
      ze = E.vertexShader, X = E.fragmentShader, l.update(E), Q = l.getVertexShaderID(E), pe = l.getFragmentShaderID(E);
    const re = r.getRenderTarget(), Se = r.state.buffers.depth.getReversed(), Oe = N.isInstancedMesh === !0, Ee = N.isBatchedMesh === !0, Ye = !!E.map, $e = !!E.matcap, Pe = !!J, L = !!E.aoMap, nt = !!E.lightMap, De = !!E.bumpMap, Ie = !!E.normalMap, ve = !!E.displacementMap, We = !!E.emissiveMap, _e = !!E.metalnessMap, R = !!E.roughnessMap, v = E.anisotropy > 0, F = E.clearcoat > 0, $ = E.dispersion > 0, Y = E.iridescence > 0, W = E.sheen > 0, me = E.transmission > 0, se = v && !!E.anisotropyMap, ue = F && !!E.clearcoatMap, Ne = F && !!E.clearcoatNormalMap, Z = F && !!E.clearcoatRoughnessMap, he = Y && !!E.iridescenceMap, ye = Y && !!E.iridescenceThicknessMap, Te = W && !!E.sheenColorMap, de = W && !!E.sheenRoughnessMap, Ue = !!E.specularMap, we = !!E.specularColorMap, He = !!E.specularIntensityMap, D = me && !!E.transmissionMap, te = me && !!E.thicknessMap, G = !!E.gradientMap, q = !!E.alphaMap, oe = E.alphaTest > 0, ae = !!E.alphaHash, Ce = !!E.extensions;
    let qe = 0;
    E.toneMapped && (re === null || re.isXRRenderTarget === !0) && (qe = r.toneMapping);
    const Je = {
      shaderID: ie,
      shaderType: E.type,
      shaderName: E.name,
      vertexShader: ze,
      fragmentShader: X,
      defines: E.defines,
      customVertexShaderID: Q,
      customFragmentShaderID: pe,
      isRawShaderMaterial: E.isRawShaderMaterial === !0,
      glslVersion: E.glslVersion,
      precision: p,
      batching: Ee,
      batchingColor: Ee && N._colorsTexture !== null,
      instancing: Oe,
      instancingColor: Oe && N.instanceColor !== null,
      instancingMorph: Oe && N.morphTexture !== null,
      supportsVertexTextures: d,
      outputColorSpace: re === null ? r.outputColorSpace : re.isXRRenderTarget === !0 ? re.texture.colorSpace : LinearSRGBColorSpace,
      alphaToCoverage: !!E.alphaToCoverage,
      map: Ye,
      matcap: $e,
      envMap: Pe,
      envMapMode: Pe && J.mapping,
      envMapCubeUVHeight: k,
      aoMap: L,
      lightMap: nt,
      bumpMap: De,
      normalMap: Ie,
      displacementMap: d && ve,
      emissiveMap: We,
      normalMapObjectSpace: Ie && E.normalMapType === 1,
      normalMapTangentSpace: Ie && E.normalMapType === 0,
      metalnessMap: _e,
      roughnessMap: R,
      anisotropy: v,
      anisotropyMap: se,
      clearcoat: F,
      clearcoatMap: ue,
      clearcoatNormalMap: Ne,
      clearcoatRoughnessMap: Z,
      dispersion: $,
      iridescence: Y,
      iridescenceMap: he,
      iridescenceThicknessMap: ye,
      sheen: W,
      sheenColorMap: Te,
      sheenRoughnessMap: de,
      specularMap: Ue,
      specularColorMap: we,
      specularIntensityMap: He,
      transmission: me,
      transmissionMap: D,
      thicknessMap: te,
      gradientMap: G,
      opaque: E.transparent === !1 && E.blending === 1 && E.alphaToCoverage === !1,
      alphaMap: q,
      alphaTest: oe,
      alphaHash: ae,
      combine: E.combine,
      //
      mapUv: Ye && g(E.map.channel),
      aoMapUv: L && g(E.aoMap.channel),
      lightMapUv: nt && g(E.lightMap.channel),
      bumpMapUv: De && g(E.bumpMap.channel),
      normalMapUv: Ie && g(E.normalMap.channel),
      displacementMapUv: ve && g(E.displacementMap.channel),
      emissiveMapUv: We && g(E.emissiveMap.channel),
      metalnessMapUv: _e && g(E.metalnessMap.channel),
      roughnessMapUv: R && g(E.roughnessMap.channel),
      anisotropyMapUv: se && g(E.anisotropyMap.channel),
      clearcoatMapUv: ue && g(E.clearcoatMap.channel),
      clearcoatNormalMapUv: Ne && g(E.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Z && g(E.clearcoatRoughnessMap.channel),
      iridescenceMapUv: he && g(E.iridescenceMap.channel),
      iridescenceThicknessMapUv: ye && g(E.iridescenceThicknessMap.channel),
      sheenColorMapUv: Te && g(E.sheenColorMap.channel),
      sheenRoughnessMapUv: de && g(E.sheenRoughnessMap.channel),
      specularMapUv: Ue && g(E.specularMap.channel),
      specularColorMapUv: we && g(E.specularColorMap.channel),
      specularIntensityMapUv: He && g(E.specularIntensityMap.channel),
      transmissionMapUv: D && g(E.transmissionMap.channel),
      thicknessMapUv: te && g(E.thicknessMap.channel),
      alphaMapUv: q && g(E.alphaMap.channel),
      //
      vertexTangents: !!K.attributes.tangent && (Ie || v),
      vertexColors: E.vertexColors,
      vertexAlphas: E.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4,
      pointsUvs: N.isPoints === !0 && !!K.attributes.uv && (Ye || q),
      fog: !!z,
      useFog: E.fog === !0,
      fogExp2: !!z && z.isFogExp2,
      flatShading: E.flatShading === !0,
      sizeAttenuation: E.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      reverseDepthBuffer: Se,
      skinning: N.isSkinnedMesh === !0,
      morphTargets: K.morphAttributes.position !== void 0,
      morphNormals: K.morphAttributes.normal !== void 0,
      morphColors: K.morphAttributes.color !== void 0,
      morphTargetsCount: ge,
      morphTextureStride: Le,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: E.dithering,
      shadowMapEnabled: r.shadowMap.enabled && P.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: qe,
      decodeVideoTexture: Ye && E.map.isVideoTexture === !0 && ColorManagement.getTransfer(E.map.colorSpace) === SRGBTransfer,
      decodeVideoTextureEmissive: We && E.emissiveMap.isVideoTexture === !0 && ColorManagement.getTransfer(E.emissiveMap.colorSpace) === SRGBTransfer,
      premultipliedAlpha: E.premultipliedAlpha,
      doubleSided: E.side === 2,
      flipSided: E.side === 1,
      useDepthPacking: E.depthPacking >= 0,
      depthPacking: E.depthPacking || 0,
      index0AttributeName: E.index0AttributeName,
      extensionClipCullDistance: Ce && E.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Ce && E.extensions.multiDraw === !0 || Ee) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: E.customProgramCacheKey()
    };
    return Je.vertexUv1s = c.has(1), Je.vertexUv2s = c.has(2), Je.vertexUv3s = c.has(3), c.clear(), Je;
  }
  function f(E) {
    const M = [];
    if (E.shaderID ? M.push(E.shaderID) : (M.push(E.customVertexShaderID), M.push(E.customFragmentShaderID)), E.defines !== void 0)
      for (const P in E.defines)
        M.push(P), M.push(E.defines[P]);
    return E.isRawShaderMaterial === !1 && (C(M, E), T(M, E), M.push(r.outputColorSpace)), M.push(E.customProgramCacheKey), M.join();
  }
  function C(E, M) {
    E.push(M.precision), E.push(M.outputColorSpace), E.push(M.envMapMode), E.push(M.envMapCubeUVHeight), E.push(M.mapUv), E.push(M.alphaMapUv), E.push(M.lightMapUv), E.push(M.aoMapUv), E.push(M.bumpMapUv), E.push(M.normalMapUv), E.push(M.displacementMapUv), E.push(M.emissiveMapUv), E.push(M.metalnessMapUv), E.push(M.roughnessMapUv), E.push(M.anisotropyMapUv), E.push(M.clearcoatMapUv), E.push(M.clearcoatNormalMapUv), E.push(M.clearcoatRoughnessMapUv), E.push(M.iridescenceMapUv), E.push(M.iridescenceThicknessMapUv), E.push(M.sheenColorMapUv), E.push(M.sheenRoughnessMapUv), E.push(M.specularMapUv), E.push(M.specularColorMapUv), E.push(M.specularIntensityMapUv), E.push(M.transmissionMapUv), E.push(M.thicknessMapUv), E.push(M.combine), E.push(M.fogExp2), E.push(M.sizeAttenuation), E.push(M.morphTargetsCount), E.push(M.morphAttributeCount), E.push(M.numDirLights), E.push(M.numPointLights), E.push(M.numSpotLights), E.push(M.numSpotLightMaps), E.push(M.numHemiLights), E.push(M.numRectAreaLights), E.push(M.numDirLightShadows), E.push(M.numPointLightShadows), E.push(M.numSpotLightShadows), E.push(M.numSpotLightShadowsWithMaps), E.push(M.numLightProbes), E.push(M.shadowMapType), E.push(M.toneMapping), E.push(M.numClippingPlanes), E.push(M.numClipIntersection), E.push(M.depthPacking);
  }
  function T(E, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), E.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reverseDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), E.push(o.mask);
  }
  function S(E) {
    const M = _[E.type];
    let P;
    if (M) {
      const V = ShaderLib[M];
      P = UniformsUtils.clone(V.uniforms);
    } else
      P = E.uniforms;
    return P;
  }
  function y(E, M) {
    let P;
    for (let V = 0, N = u.length; V < N; V++) {
      const z = u[V];
      if (z.cacheKey === M) {
        P = z, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new WebGLProgram(r, M, E, s), u.push(P)), P;
  }
  function A(E) {
    if (--E.usedTimes === 0) {
      const M = u.indexOf(E);
      u[M] = u[u.length - 1], u.pop(), E.destroy();
    }
  }
  function b(E) {
    l.remove(E);
  }
  function w() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: f,
    getUniforms: S,
    acquireProgram: y,
    releaseProgram: A,
    releaseShaderCache: b,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: w
  };
}
function WebGLProperties() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return r.has(a);
  }
  function t(a) {
    let o = r.get(a);
    return o === void 0 && (o = {}, r.set(a, o)), o;
  }
  function n(a) {
    r.delete(a);
  }
  function i(a, o, l) {
    r.get(a)[o] = l;
  }
  function s() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: i,
    dispose: s
  };
}
function painterSortStable(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function reversePainterSortStable(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function WebGLRenderList() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(h, d, p, _, g, m) {
    let f = r[e];
    return f === void 0 ? (f = {
      id: h.id,
      object: h,
      geometry: d,
      material: p,
      groupOrder: _,
      renderOrder: h.renderOrder,
      z: g,
      group: m
    }, r[e] = f) : (f.id = h.id, f.object = h, f.geometry = d, f.material = p, f.groupOrder = _, f.renderOrder = h.renderOrder, f.z = g, f.group = m), e++, f;
  }
  function o(h, d, p, _, g, m) {
    const f = a(h, d, p, _, g, m);
    p.transmission > 0 ? n.push(f) : p.transparent === !0 ? i.push(f) : t.push(f);
  }
  function l(h, d, p, _, g, m) {
    const f = a(h, d, p, _, g, m);
    p.transmission > 0 ? n.unshift(f) : p.transparent === !0 ? i.unshift(f) : t.unshift(f);
  }
  function c(h, d) {
    t.length > 1 && t.sort(h || painterSortStable), n.length > 1 && n.sort(d || reversePainterSortStable), i.length > 1 && i.sort(d || reversePainterSortStable);
  }
  function u() {
    for (let h = e, d = r.length; h < d; h++) {
      const p = r[h];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c
  };
}
function WebGLRenderLists() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new WebGLRenderList(), r.set(n, [a])) : i >= s.length ? (a = new WebGLRenderList(), s.push(a)) : a = s[i], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function UniformsCache() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new Vector3(),
            color: new Color()
          };
          break;
        case "SpotLight":
          t = {
            position: new Vector3(),
            direction: new Vector3(),
            color: new Color(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new Vector3(),
            color: new Color(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new Vector3(),
            skyColor: new Color(),
            groundColor: new Color()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Color(),
            position: new Vector3(),
            halfWidth: new Vector3(),
            halfHeight: new Vector3()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function ShadowUniformsCache() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let nextVersion = 0;
function shadowCastingAndTexturingLightsFirst(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function WebGLLights(r) {
  const e = new UniformsCache(), t = ShadowUniformsCache(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new Vector3());
  const i = new Vector3(), s = new Matrix4(), a = new Matrix4();
  function o(c) {
    let u = 0, h = 0, d = 0;
    for (let E = 0; E < 9; E++) n.probe[E].set(0, 0, 0);
    let p = 0, _ = 0, g = 0, m = 0, f = 0, C = 0, T = 0, S = 0, y = 0, A = 0, b = 0;
    c.sort(shadowCastingAndTexturingLightsFirst);
    for (let E = 0, M = c.length; E < M; E++) {
      const P = c[E], V = P.color, N = P.intensity, z = P.distance, K = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        u += V.r * N, h += V.g * N, d += V.b * N;
      else if (P.isLightProbe) {
        for (let H = 0; H < 9; H++)
          n.probe[H].addScaledVector(P.sh.coefficients[H], N);
        b++;
      } else if (P.isDirectionalLight) {
        const H = e.get(P);
        if (H.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const J = P.shadow, k = t.get(P);
          k.shadowIntensity = J.intensity, k.shadowBias = J.bias, k.shadowNormalBias = J.normalBias, k.shadowRadius = J.radius, k.shadowMapSize = J.mapSize, n.directionalShadow[p] = k, n.directionalShadowMap[p] = K, n.directionalShadowMatrix[p] = P.shadow.matrix, C++;
        }
        n.directional[p] = H, p++;
      } else if (P.isSpotLight) {
        const H = e.get(P);
        H.position.setFromMatrixPosition(P.matrixWorld), H.color.copy(V).multiplyScalar(N), H.distance = z, H.coneCos = Math.cos(P.angle), H.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), H.decay = P.decay, n.spot[g] = H;
        const J = P.shadow;
        if (P.map && (n.spotLightMap[y] = P.map, y++, J.updateMatrices(P), P.castShadow && A++), n.spotLightMatrix[g] = J.matrix, P.castShadow) {
          const k = t.get(P);
          k.shadowIntensity = J.intensity, k.shadowBias = J.bias, k.shadowNormalBias = J.normalBias, k.shadowRadius = J.radius, k.shadowMapSize = J.mapSize, n.spotShadow[g] = k, n.spotShadowMap[g] = K, S++;
        }
        g++;
      } else if (P.isRectAreaLight) {
        const H = e.get(P);
        H.color.copy(V).multiplyScalar(N), H.halfWidth.set(P.width * 0.5, 0, 0), H.halfHeight.set(0, P.height * 0.5, 0), n.rectArea[m] = H, m++;
      } else if (P.isPointLight) {
        const H = e.get(P);
        if (H.color.copy(P.color).multiplyScalar(P.intensity), H.distance = P.distance, H.decay = P.decay, P.castShadow) {
          const J = P.shadow, k = t.get(P);
          k.shadowIntensity = J.intensity, k.shadowBias = J.bias, k.shadowNormalBias = J.normalBias, k.shadowRadius = J.radius, k.shadowMapSize = J.mapSize, k.shadowCameraNear = J.camera.near, k.shadowCameraFar = J.camera.far, n.pointShadow[_] = k, n.pointShadowMap[_] = K, n.pointShadowMatrix[_] = P.shadow.matrix, T++;
        }
        n.point[_] = H, _++;
      } else if (P.isHemisphereLight) {
        const H = e.get(P);
        H.skyColor.copy(P.color).multiplyScalar(N), H.groundColor.copy(P.groundColor).multiplyScalar(N), n.hemi[f] = H, f++;
      }
    }
    m > 0 && (r.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1, n.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2) : (n.rectAreaLTC1 = UniformsLib.LTC_HALF_1, n.rectAreaLTC2 = UniformsLib.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = h, n.ambient[2] = d;
    const w = n.hash;
    (w.directionalLength !== p || w.pointLength !== _ || w.spotLength !== g || w.rectAreaLength !== m || w.hemiLength !== f || w.numDirectionalShadows !== C || w.numPointShadows !== T || w.numSpotShadows !== S || w.numSpotMaps !== y || w.numLightProbes !== b) && (n.directional.length = p, n.spot.length = g, n.rectArea.length = m, n.point.length = _, n.hemi.length = f, n.directionalShadow.length = C, n.directionalShadowMap.length = C, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = C, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = S + y - A, n.spotLightMap.length = y, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = b, w.directionalLength = p, w.pointLength = _, w.spotLength = g, w.rectAreaLength = m, w.hemiLength = f, w.numDirectionalShadows = C, w.numPointShadows = T, w.numSpotShadows = S, w.numSpotMaps = y, w.numLightProbes = b, n.version = nextVersion++);
  }
  function l(c, u) {
    let h = 0, d = 0, p = 0, _ = 0, g = 0;
    const m = u.matrixWorldInverse;
    for (let f = 0, C = c.length; f < C; f++) {
      const T = c[f];
      if (T.isDirectionalLight) {
        const S = n.directional[h];
        S.direction.setFromMatrixPosition(T.matrixWorld), i.setFromMatrixPosition(T.target.matrixWorld), S.direction.sub(i), S.direction.transformDirection(m), h++;
      } else if (T.isSpotLight) {
        const S = n.spot[p];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(m), S.direction.setFromMatrixPosition(T.matrixWorld), i.setFromMatrixPosition(T.target.matrixWorld), S.direction.sub(i), S.direction.transformDirection(m), p++;
      } else if (T.isRectAreaLight) {
        const S = n.rectArea[_];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(m), a.identity(), s.copy(T.matrixWorld), s.premultiply(m), a.extractRotation(s), S.halfWidth.set(T.width * 0.5, 0, 0), S.halfHeight.set(0, T.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), _++;
      } else if (T.isPointLight) {
        const S = n.point[d];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(m), d++;
      } else if (T.isHemisphereLight) {
        const S = n.hemi[g];
        S.direction.setFromMatrixPosition(T.matrixWorld), S.direction.transformDirection(m), g++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function WebGLRenderState(r) {
  const e = new WebGLLights(r), t = [], n = [];
  function i(u) {
    c.camera = u, t.length = 0, n.length = 0;
  }
  function s(u) {
    t.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: i,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a
  };
}
function WebGLRenderStates(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, s = 0) {
    const a = e.get(i);
    let o;
    return a === void 0 ? (o = new WebGLRenderState(r), e.set(i, [o])) : s >= a.length ? (o = new WebGLRenderState(r), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const vertex = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, fragment = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function WebGLShadowMap(r, e, t) {
  let n = new Frustum();
  const i = new Vector2(), s = new Vector2(), a = new Vector4(), o = new MeshDepthMaterial({ depthPacking: 3201 }), l = new MeshDistanceMaterial(), c = {}, u = t.maxTextureSize, h = { 0: 1, 1: 0, 2: 2 }, d = new ShaderMaterial({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Vector2() },
      radius: { value: 4 }
    },
    vertexShader: vertex,
    fragmentShader: fragment
  }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const _ = new BufferGeometry();
  _.setAttribute(
    "position",
    new BufferAttribute(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const g = new Mesh(_, d), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let f = this.type;
  this.render = function(A, b, w) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || A.length === 0) return;
    const E = r.getRenderTarget(), M = r.getActiveCubeFace(), P = r.getActiveMipmapLevel(), V = r.state;
    V.setBlending(0), V.buffers.color.setClear(1, 1, 1, 1), V.buffers.depth.setTest(!0), V.setScissorTest(!1);
    const N = f !== 3 && this.type === 3, z = f === 3 && this.type !== 3;
    for (let K = 0, H = A.length; K < H; K++) {
      const J = A[K], k = J.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", J, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue;
      i.copy(k.mapSize);
      const ie = k.getFrameExtents();
      if (i.multiply(ie), s.copy(k.mapSize), (i.x > u || i.y > u) && (i.x > u && (s.x = Math.floor(u / ie.x), i.x = s.x * ie.x, k.mapSize.x = s.x), i.y > u && (s.y = Math.floor(u / ie.y), i.y = s.y * ie.y, k.mapSize.y = s.y)), k.map === null || N === !0 || z === !0) {
        const ge = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        k.map !== null && k.map.dispose(), k.map = new WebGLRenderTarget(i.x, i.y, ge), k.map.texture.name = J.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(k.map), r.clear();
      const ce = k.getViewportCount();
      for (let ge = 0; ge < ce; ge++) {
        const Le = k.getViewport(ge);
        a.set(
          s.x * Le.x,
          s.y * Le.y,
          s.x * Le.z,
          s.y * Le.w
        ), V.viewport(a), k.updateMatrices(J, ge), n = k.getFrustum(), S(b, w, k.camera, J, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === 3 && C(k, w), k.needsUpdate = !1;
    }
    f = this.type, m.needsUpdate = !1, r.setRenderTarget(E, M, P);
  };
  function C(A, b) {
    const w = e.update(g);
    d.defines.VSM_SAMPLES !== A.blurSamples && (d.defines.VSM_SAMPLES = A.blurSamples, p.defines.VSM_SAMPLES = A.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), A.mapPass === null && (A.mapPass = new WebGLRenderTarget(i.x, i.y)), d.uniforms.shadow_pass.value = A.map.texture, d.uniforms.resolution.value = A.mapSize, d.uniforms.radius.value = A.radius, r.setRenderTarget(A.mapPass), r.clear(), r.renderBufferDirect(b, null, w, d, g, null), p.uniforms.shadow_pass.value = A.mapPass.texture, p.uniforms.resolution.value = A.mapSize, p.uniforms.radius.value = A.radius, r.setRenderTarget(A.map), r.clear(), r.renderBufferDirect(b, null, w, p, g, null);
  }
  function T(A, b, w, E) {
    let M = null;
    const P = w.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (P !== void 0)
      M = P;
    else if (M = w.isPointLight === !0 ? l : o, r.localClippingEnabled && b.clipShadows === !0 && Array.isArray(b.clippingPlanes) && b.clippingPlanes.length !== 0 || b.displacementMap && b.displacementScale !== 0 || b.alphaMap && b.alphaTest > 0 || b.map && b.alphaTest > 0) {
      const V = M.uuid, N = b.uuid;
      let z = c[V];
      z === void 0 && (z = {}, c[V] = z);
      let K = z[N];
      K === void 0 && (K = M.clone(), z[N] = K, b.addEventListener("dispose", y)), M = K;
    }
    if (M.visible = b.visible, M.wireframe = b.wireframe, E === 3 ? M.side = b.shadowSide !== null ? b.shadowSide : b.side : M.side = b.shadowSide !== null ? b.shadowSide : h[b.side], M.alphaMap = b.alphaMap, M.alphaTest = b.alphaTest, M.map = b.map, M.clipShadows = b.clipShadows, M.clippingPlanes = b.clippingPlanes, M.clipIntersection = b.clipIntersection, M.displacementMap = b.displacementMap, M.displacementScale = b.displacementScale, M.displacementBias = b.displacementBias, M.wireframeLinewidth = b.wireframeLinewidth, M.linewidth = b.linewidth, w.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const V = r.properties.get(M);
      V.light = w;
    }
    return M;
  }
  function S(A, b, w, E, M) {
    if (A.visible === !1) return;
    if (A.layers.test(b.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && M === 3) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse, A.matrixWorld);
      const N = e.update(A), z = A.material;
      if (Array.isArray(z)) {
        const K = N.groups;
        for (let H = 0, J = K.length; H < J; H++) {
          const k = K[H], ie = z[k.materialIndex];
          if (ie && ie.visible) {
            const ce = T(A, ie, E, M);
            A.onBeforeShadow(r, A, b, w, N, ce, k), r.renderBufferDirect(w, null, N, ce, A, k), A.onAfterShadow(r, A, b, w, N, ce, k);
          }
        }
      } else if (z.visible) {
        const K = T(A, z, E, M);
        A.onBeforeShadow(r, A, b, w, N, K, null), r.renderBufferDirect(w, null, N, K, A, null), A.onAfterShadow(r, A, b, w, N, K, null);
      }
    }
    const V = A.children;
    for (let N = 0, z = V.length; N < z; N++)
      S(V[N], b, w, E, M);
  }
  function y(A) {
    A.target.removeEventListener("dispose", y);
    for (const w in c) {
      const E = c[w], M = A.target.uuid;
      M in E && (E[M].dispose(), delete E[M]);
    }
  }
}
const reversedFuncs = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
function WebGLState(r, e) {
  function t() {
    let D = !1;
    const te = new Vector4();
    let G = null;
    const q = new Vector4(0, 0, 0, 0);
    return {
      setMask: function(oe) {
        G !== oe && !D && (r.colorMask(oe, oe, oe, oe), G = oe);
      },
      setLocked: function(oe) {
        D = oe;
      },
      setClear: function(oe, ae, Ce, qe, Je) {
        Je === !0 && (oe *= qe, ae *= qe, Ce *= qe), te.set(oe, ae, Ce, qe), q.equals(te) === !1 && (r.clearColor(oe, ae, Ce, qe), q.copy(te));
      },
      reset: function() {
        D = !1, G = null, q.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let D = !1, te = !1, G = null, q = null, oe = null;
    return {
      setReversed: function(ae) {
        if (te !== ae) {
          const Ce = e.get("EXT_clip_control");
          te ? Ce.clipControlEXT(Ce.LOWER_LEFT_EXT, Ce.ZERO_TO_ONE_EXT) : Ce.clipControlEXT(Ce.LOWER_LEFT_EXT, Ce.NEGATIVE_ONE_TO_ONE_EXT);
          const qe = oe;
          oe = null, this.setClear(qe);
        }
        te = ae;
      },
      getReversed: function() {
        return te;
      },
      setTest: function(ae) {
        ae ? re(r.DEPTH_TEST) : Se(r.DEPTH_TEST);
      },
      setMask: function(ae) {
        G !== ae && !D && (r.depthMask(ae), G = ae);
      },
      setFunc: function(ae) {
        if (te && (ae = reversedFuncs[ae]), q !== ae) {
          switch (ae) {
            case 0:
              r.depthFunc(r.NEVER);
              break;
            case 1:
              r.depthFunc(r.ALWAYS);
              break;
            case 2:
              r.depthFunc(r.LESS);
              break;
            case 3:
              r.depthFunc(r.LEQUAL);
              break;
            case 4:
              r.depthFunc(r.EQUAL);
              break;
            case 5:
              r.depthFunc(r.GEQUAL);
              break;
            case 6:
              r.depthFunc(r.GREATER);
              break;
            case 7:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          q = ae;
        }
      },
      setLocked: function(ae) {
        D = ae;
      },
      setClear: function(ae) {
        oe !== ae && (te && (ae = 1 - ae), r.clearDepth(ae), oe = ae);
      },
      reset: function() {
        D = !1, G = null, q = null, oe = null, te = !1;
      }
    };
  }
  function i() {
    let D = !1, te = null, G = null, q = null, oe = null, ae = null, Ce = null, qe = null, Je = null;
    return {
      setTest: function(ke) {
        D || (ke ? re(r.STENCIL_TEST) : Se(r.STENCIL_TEST));
      },
      setMask: function(ke) {
        te !== ke && !D && (r.stencilMask(ke), te = ke);
      },
      setFunc: function(ke, st, ot) {
        (G !== ke || q !== st || oe !== ot) && (r.stencilFunc(ke, st, ot), G = ke, q = st, oe = ot);
      },
      setOp: function(ke, st, ot) {
        (ae !== ke || Ce !== st || qe !== ot) && (r.stencilOp(ke, st, ot), ae = ke, Ce = st, qe = ot);
      },
      setLocked: function(ke) {
        D = ke;
      },
      setClear: function(ke) {
        Je !== ke && (r.clearStencil(ke), Je = ke);
      },
      reset: function() {
        D = !1, te = null, G = null, q = null, oe = null, ae = null, Ce = null, qe = null, Je = null;
      }
    };
  }
  const s = new t(), a = new n(), o = new i(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let u = {}, h = {}, d = /* @__PURE__ */ new WeakMap(), p = [], _ = null, g = !1, m = null, f = null, C = null, T = null, S = null, y = null, A = null, b = new Color(0, 0, 0), w = 0, E = !1, M = null, P = null, V = null, N = null, z = null;
  const K = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let H = !1, J = 0;
  const k = r.getParameter(r.VERSION);
  k.indexOf("WebGL") !== -1 ? (J = parseFloat(/^WebGL (\d)/.exec(k)[1]), H = J >= 1) : k.indexOf("OpenGL ES") !== -1 && (J = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), H = J >= 2);
  let ie = null, ce = {};
  const ge = r.getParameter(r.SCISSOR_BOX), Le = r.getParameter(r.VIEWPORT), ze = new Vector4().fromArray(ge), X = new Vector4().fromArray(Le);
  function Q(D, te, G, q) {
    const oe = new Uint8Array(4), ae = r.createTexture();
    r.bindTexture(D, ae), r.texParameteri(D, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(D, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let Ce = 0; Ce < G; Ce++)
      D === r.TEXTURE_3D || D === r.TEXTURE_2D_ARRAY ? r.texImage3D(te, 0, r.RGBA, 1, 1, q, 0, r.RGBA, r.UNSIGNED_BYTE, oe) : r.texImage2D(te + Ce, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, oe);
    return ae;
  }
  const pe = {};
  pe[r.TEXTURE_2D] = Q(r.TEXTURE_2D, r.TEXTURE_2D, 1), pe[r.TEXTURE_CUBE_MAP] = Q(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), pe[r.TEXTURE_2D_ARRAY] = Q(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), pe[r.TEXTURE_3D] = Q(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), re(r.DEPTH_TEST), a.setFunc(3), De(!1), Ie(1), re(r.CULL_FACE), L(0);
  function re(D) {
    u[D] !== !0 && (r.enable(D), u[D] = !0);
  }
  function Se(D) {
    u[D] !== !1 && (r.disable(D), u[D] = !1);
  }
  function Oe(D, te) {
    return h[D] !== te ? (r.bindFramebuffer(D, te), h[D] = te, D === r.DRAW_FRAMEBUFFER && (h[r.FRAMEBUFFER] = te), D === r.FRAMEBUFFER && (h[r.DRAW_FRAMEBUFFER] = te), !0) : !1;
  }
  function Ee(D, te) {
    let G = p, q = !1;
    if (D) {
      G = d.get(te), G === void 0 && (G = [], d.set(te, G));
      const oe = D.textures;
      if (G.length !== oe.length || G[0] !== r.COLOR_ATTACHMENT0) {
        for (let ae = 0, Ce = oe.length; ae < Ce; ae++)
          G[ae] = r.COLOR_ATTACHMENT0 + ae;
        G.length = oe.length, q = !0;
      }
    } else
      G[0] !== r.BACK && (G[0] = r.BACK, q = !0);
    q && r.drawBuffers(G);
  }
  function Ye(D) {
    return _ !== D ? (r.useProgram(D), _ = D, !0) : !1;
  }
  const $e = {
    100: r.FUNC_ADD,
    101: r.FUNC_SUBTRACT,
    102: r.FUNC_REVERSE_SUBTRACT
  };
  $e[103] = r.MIN, $e[104] = r.MAX;
  const Pe = {
    200: r.ZERO,
    201: r.ONE,
    202: r.SRC_COLOR,
    204: r.SRC_ALPHA,
    210: r.SRC_ALPHA_SATURATE,
    208: r.DST_COLOR,
    206: r.DST_ALPHA,
    203: r.ONE_MINUS_SRC_COLOR,
    205: r.ONE_MINUS_SRC_ALPHA,
    209: r.ONE_MINUS_DST_COLOR,
    207: r.ONE_MINUS_DST_ALPHA,
    211: r.CONSTANT_COLOR,
    212: r.ONE_MINUS_CONSTANT_COLOR,
    213: r.CONSTANT_ALPHA,
    214: r.ONE_MINUS_CONSTANT_ALPHA
  };
  function L(D, te, G, q, oe, ae, Ce, qe, Je, ke) {
    if (D === 0) {
      g === !0 && (Se(r.BLEND), g = !1);
      return;
    }
    if (g === !1 && (re(r.BLEND), g = !0), D !== 5) {
      if (D !== m || ke !== E) {
        if ((f !== 100 || S !== 100) && (r.blendEquation(r.FUNC_ADD), f = 100, S = 100), ke)
          switch (D) {
            case 1:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case 3:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case 4:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case 1:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case 3:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case 4:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        C = null, T = null, y = null, A = null, b.set(0, 0, 0), w = 0, m = D, E = ke;
      }
      return;
    }
    oe = oe || te, ae = ae || G, Ce = Ce || q, (te !== f || oe !== S) && (r.blendEquationSeparate($e[te], $e[oe]), f = te, S = oe), (G !== C || q !== T || ae !== y || Ce !== A) && (r.blendFuncSeparate(Pe[G], Pe[q], Pe[ae], Pe[Ce]), C = G, T = q, y = ae, A = Ce), (qe.equals(b) === !1 || Je !== w) && (r.blendColor(qe.r, qe.g, qe.b, Je), b.copy(qe), w = Je), m = D, E = !1;
  }
  function nt(D, te) {
    D.side === 2 ? Se(r.CULL_FACE) : re(r.CULL_FACE);
    let G = D.side === 1;
    te && (G = !G), De(G), D.blending === 1 && D.transparent === !1 ? L(0) : L(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), a.setFunc(D.depthFunc), a.setTest(D.depthTest), a.setMask(D.depthWrite), s.setMask(D.colorWrite);
    const q = D.stencilWrite;
    o.setTest(q), q && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), We(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? re(r.SAMPLE_ALPHA_TO_COVERAGE) : Se(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function De(D) {
    M !== D && (D ? r.frontFace(r.CW) : r.frontFace(r.CCW), M = D);
  }
  function Ie(D) {
    D !== 0 ? (re(r.CULL_FACE), D !== P && (D === 1 ? r.cullFace(r.BACK) : D === 2 ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : Se(r.CULL_FACE), P = D;
  }
  function ve(D) {
    D !== V && (H && r.lineWidth(D), V = D);
  }
  function We(D, te, G) {
    D ? (re(r.POLYGON_OFFSET_FILL), (N !== te || z !== G) && (r.polygonOffset(te, G), N = te, z = G)) : Se(r.POLYGON_OFFSET_FILL);
  }
  function _e(D) {
    D ? re(r.SCISSOR_TEST) : Se(r.SCISSOR_TEST);
  }
  function R(D) {
    D === void 0 && (D = r.TEXTURE0 + K - 1), ie !== D && (r.activeTexture(D), ie = D);
  }
  function v(D, te, G) {
    G === void 0 && (ie === null ? G = r.TEXTURE0 + K - 1 : G = ie);
    let q = ce[G];
    q === void 0 && (q = { type: void 0, texture: void 0 }, ce[G] = q), (q.type !== D || q.texture !== te) && (ie !== G && (r.activeTexture(G), ie = G), r.bindTexture(D, te || pe[D]), q.type = D, q.texture = te);
  }
  function F() {
    const D = ce[ie];
    D !== void 0 && D.type !== void 0 && (r.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function $() {
    try {
      r.compressedTexImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Y() {
    try {
      r.compressedTexImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function W() {
    try {
      r.texSubImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function me() {
    try {
      r.texSubImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function se() {
    try {
      r.compressedTexSubImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ue() {
    try {
      r.compressedTexSubImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ne() {
    try {
      r.texStorage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Z() {
    try {
      r.texStorage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function he() {
    try {
      r.texImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ye() {
    try {
      r.texImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Te(D) {
    ze.equals(D) === !1 && (r.scissor(D.x, D.y, D.z, D.w), ze.copy(D));
  }
  function de(D) {
    X.equals(D) === !1 && (r.viewport(D.x, D.y, D.z, D.w), X.copy(D));
  }
  function Ue(D, te) {
    let G = c.get(te);
    G === void 0 && (G = /* @__PURE__ */ new WeakMap(), c.set(te, G));
    let q = G.get(D);
    q === void 0 && (q = r.getUniformBlockIndex(te, D.name), G.set(D, q));
  }
  function we(D, te) {
    const q = c.get(te).get(D);
    l.get(te) !== q && (r.uniformBlockBinding(te, q, D.__bindingPointIndex), l.set(te, q));
  }
  function He() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), a.setReversed(!1), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), u = {}, ie = null, ce = {}, h = {}, d = /* @__PURE__ */ new WeakMap(), p = [], _ = null, g = !1, m = null, f = null, C = null, T = null, S = null, y = null, A = null, b = new Color(0, 0, 0), w = 0, E = !1, M = null, P = null, V = null, N = null, z = null, ze.set(0, 0, r.canvas.width, r.canvas.height), X.set(0, 0, r.canvas.width, r.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: re,
    disable: Se,
    bindFramebuffer: Oe,
    drawBuffers: Ee,
    useProgram: Ye,
    setBlending: L,
    setMaterial: nt,
    setFlipSided: De,
    setCullFace: Ie,
    setLineWidth: ve,
    setPolygonOffset: We,
    setScissorTest: _e,
    activeTexture: R,
    bindTexture: v,
    unbindTexture: F,
    compressedTexImage2D: $,
    compressedTexImage3D: Y,
    texImage2D: he,
    texImage3D: ye,
    updateUBOMapping: Ue,
    uniformBlockBinding: we,
    texStorage2D: Ne,
    texStorage3D: Z,
    texSubImage2D: W,
    texSubImage3D: me,
    compressedTexSubImage2D: se,
    compressedTexSubImage3D: ue,
    scissor: Te,
    viewport: de,
    reset: He
  };
}
function WebGLTextures(r, e, t, n, i, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Vector2(), u = /* @__PURE__ */ new WeakMap();
  let h;
  const d = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(R, v) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(R, v)
    ) : createElementNS("canvas");
  }
  function g(R, v, F) {
    let $ = 1;
    const Y = _e(R);
    if ((Y.width > F || Y.height > F) && ($ = F / Math.max(Y.width, Y.height)), $ < 1)
      if (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && R instanceof ImageBitmap || typeof VideoFrame < "u" && R instanceof VideoFrame) {
        const W = Math.floor($ * Y.width), me = Math.floor($ * Y.height);
        h === void 0 && (h = _(W, me));
        const se = v ? _(W, me) : h;
        return se.width = W, se.height = me, se.getContext("2d").drawImage(R, 0, 0, W, me), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Y.width + "x" + Y.height + ") to (" + W + "x" + me + ")."), se;
      } else
        return "data" in R && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Y.width + "x" + Y.height + ")."), R;
    return R;
  }
  function m(R) {
    return R.generateMipmaps;
  }
  function f(R) {
    r.generateMipmap(R);
  }
  function C(R) {
    return R.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : R.isWebGL3DRenderTarget ? r.TEXTURE_3D : R.isWebGLArrayRenderTarget || R.isCompressedArrayTexture ? r.TEXTURE_2D_ARRAY : r.TEXTURE_2D;
  }
  function T(R, v, F, $, Y = !1) {
    if (R !== null) {
      if (r[R] !== void 0) return r[R];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
    }
    let W = v;
    if (v === r.RED && (F === r.FLOAT && (W = r.R32F), F === r.HALF_FLOAT && (W = r.R16F), F === r.UNSIGNED_BYTE && (W = r.R8)), v === r.RED_INTEGER && (F === r.UNSIGNED_BYTE && (W = r.R8UI), F === r.UNSIGNED_SHORT && (W = r.R16UI), F === r.UNSIGNED_INT && (W = r.R32UI), F === r.BYTE && (W = r.R8I), F === r.SHORT && (W = r.R16I), F === r.INT && (W = r.R32I)), v === r.RG && (F === r.FLOAT && (W = r.RG32F), F === r.HALF_FLOAT && (W = r.RG16F), F === r.UNSIGNED_BYTE && (W = r.RG8)), v === r.RG_INTEGER && (F === r.UNSIGNED_BYTE && (W = r.RG8UI), F === r.UNSIGNED_SHORT && (W = r.RG16UI), F === r.UNSIGNED_INT && (W = r.RG32UI), F === r.BYTE && (W = r.RG8I), F === r.SHORT && (W = r.RG16I), F === r.INT && (W = r.RG32I)), v === r.RGB_INTEGER && (F === r.UNSIGNED_BYTE && (W = r.RGB8UI), F === r.UNSIGNED_SHORT && (W = r.RGB16UI), F === r.UNSIGNED_INT && (W = r.RGB32UI), F === r.BYTE && (W = r.RGB8I), F === r.SHORT && (W = r.RGB16I), F === r.INT && (W = r.RGB32I)), v === r.RGBA_INTEGER && (F === r.UNSIGNED_BYTE && (W = r.RGBA8UI), F === r.UNSIGNED_SHORT && (W = r.RGBA16UI), F === r.UNSIGNED_INT && (W = r.RGBA32UI), F === r.BYTE && (W = r.RGBA8I), F === r.SHORT && (W = r.RGBA16I), F === r.INT && (W = r.RGBA32I)), v === r.RGB && F === r.UNSIGNED_INT_5_9_9_9_REV && (W = r.RGB9_E5), v === r.RGBA) {
      const me = Y ? LinearTransfer : ColorManagement.getTransfer($);
      F === r.FLOAT && (W = r.RGBA32F), F === r.HALF_FLOAT && (W = r.RGBA16F), F === r.UNSIGNED_BYTE && (W = me === SRGBTransfer ? r.SRGB8_ALPHA8 : r.RGBA8), F === r.UNSIGNED_SHORT_4_4_4_4 && (W = r.RGBA4), F === r.UNSIGNED_SHORT_5_5_5_1 && (W = r.RGB5_A1);
    }
    return (W === r.R16F || W === r.R32F || W === r.RG16F || W === r.RG32F || W === r.RGBA16F || W === r.RGBA32F) && e.get("EXT_color_buffer_float"), W;
  }
  function S(R, v) {
    let F;
    return R ? v === null || v === 1014 || v === 1020 ? F = r.DEPTH24_STENCIL8 : v === 1015 ? F = r.DEPTH32F_STENCIL8 : v === 1012 && (F = r.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === 1014 || v === 1020 ? F = r.DEPTH_COMPONENT24 : v === 1015 ? F = r.DEPTH_COMPONENT32F : v === 1012 && (F = r.DEPTH_COMPONENT16), F;
  }
  function y(R, v) {
    return m(R) === !0 || R.isFramebufferTexture && R.minFilter !== 1003 && R.minFilter !== 1006 ? Math.log2(Math.max(v.width, v.height)) + 1 : R.mipmaps !== void 0 && R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? v.mipmaps.length : 1;
  }
  function A(R) {
    const v = R.target;
    v.removeEventListener("dispose", A), w(v), v.isVideoTexture && u.delete(v);
  }
  function b(R) {
    const v = R.target;
    v.removeEventListener("dispose", b), M(v);
  }
  function w(R) {
    const v = n.get(R);
    if (v.__webglInit === void 0) return;
    const F = R.source, $ = d.get(F);
    if ($) {
      const Y = $[v.__cacheKey];
      Y.usedTimes--, Y.usedTimes === 0 && E(R), Object.keys($).length === 0 && d.delete(F);
    }
    n.remove(R);
  }
  function E(R) {
    const v = n.get(R);
    r.deleteTexture(v.__webglTexture);
    const F = R.source, $ = d.get(F);
    delete $[v.__cacheKey], a.memory.textures--;
  }
  function M(R) {
    const v = n.get(R);
    if (R.depthTexture && (R.depthTexture.dispose(), n.remove(R.depthTexture)), R.isWebGLCubeRenderTarget)
      for (let $ = 0; $ < 6; $++) {
        if (Array.isArray(v.__webglFramebuffer[$]))
          for (let Y = 0; Y < v.__webglFramebuffer[$].length; Y++) r.deleteFramebuffer(v.__webglFramebuffer[$][Y]);
        else
          r.deleteFramebuffer(v.__webglFramebuffer[$]);
        v.__webglDepthbuffer && r.deleteRenderbuffer(v.__webglDepthbuffer[$]);
      }
    else {
      if (Array.isArray(v.__webglFramebuffer))
        for (let $ = 0; $ < v.__webglFramebuffer.length; $++) r.deleteFramebuffer(v.__webglFramebuffer[$]);
      else
        r.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && r.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && r.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer)
        for (let $ = 0; $ < v.__webglColorRenderbuffer.length; $++)
          v.__webglColorRenderbuffer[$] && r.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);
      v.__webglDepthRenderbuffer && r.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const F = R.textures;
    for (let $ = 0, Y = F.length; $ < Y; $++) {
      const W = n.get(F[$]);
      W.__webglTexture && (r.deleteTexture(W.__webglTexture), a.memory.textures--), n.remove(F[$]);
    }
    n.remove(R);
  }
  let P = 0;
  function V() {
    P = 0;
  }
  function N() {
    const R = P;
    return R >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + i.maxTextures), P += 1, R;
  }
  function z(R) {
    const v = [];
    return v.push(R.wrapS), v.push(R.wrapT), v.push(R.wrapR || 0), v.push(R.magFilter), v.push(R.minFilter), v.push(R.anisotropy), v.push(R.internalFormat), v.push(R.format), v.push(R.type), v.push(R.generateMipmaps), v.push(R.premultiplyAlpha), v.push(R.flipY), v.push(R.unpackAlignment), v.push(R.colorSpace), v.join();
  }
  function K(R, v) {
    const F = n.get(R);
    if (R.isVideoTexture && ve(R), R.isRenderTargetTexture === !1 && R.version > 0 && F.__version !== R.version) {
      const $ = R.image;
      if ($ === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if ($.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        X(F, R, v);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, F.__webglTexture, r.TEXTURE0 + v);
  }
  function H(R, v) {
    const F = n.get(R);
    if (R.version > 0 && F.__version !== R.version) {
      X(F, R, v);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, F.__webglTexture, r.TEXTURE0 + v);
  }
  function J(R, v) {
    const F = n.get(R);
    if (R.version > 0 && F.__version !== R.version) {
      X(F, R, v);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, F.__webglTexture, r.TEXTURE0 + v);
  }
  function k(R, v) {
    const F = n.get(R);
    if (R.version > 0 && F.__version !== R.version) {
      Q(F, R, v);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, F.__webglTexture, r.TEXTURE0 + v);
  }
  const ie = {
    1e3: r.REPEAT,
    1001: r.CLAMP_TO_EDGE,
    1002: r.MIRRORED_REPEAT
  }, ce = {
    1003: r.NEAREST,
    1004: r.NEAREST_MIPMAP_NEAREST,
    1005: r.NEAREST_MIPMAP_LINEAR,
    1006: r.LINEAR,
    1007: r.LINEAR_MIPMAP_NEAREST,
    1008: r.LINEAR_MIPMAP_LINEAR
  }, ge = {
    512: r.NEVER,
    519: r.ALWAYS,
    513: r.LESS,
    515: r.LEQUAL,
    514: r.EQUAL,
    518: r.GEQUAL,
    516: r.GREATER,
    517: r.NOTEQUAL
  };
  function Le(R, v) {
    if (v.type === 1015 && e.has("OES_texture_float_linear") === !1 && (v.magFilter === 1006 || v.magFilter === 1007 || v.magFilter === 1005 || v.magFilter === 1008 || v.minFilter === 1006 || v.minFilter === 1007 || v.minFilter === 1005 || v.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), r.texParameteri(R, r.TEXTURE_WRAP_S, ie[v.wrapS]), r.texParameteri(R, r.TEXTURE_WRAP_T, ie[v.wrapT]), (R === r.TEXTURE_3D || R === r.TEXTURE_2D_ARRAY) && r.texParameteri(R, r.TEXTURE_WRAP_R, ie[v.wrapR]), r.texParameteri(R, r.TEXTURE_MAG_FILTER, ce[v.magFilter]), r.texParameteri(R, r.TEXTURE_MIN_FILTER, ce[v.minFilter]), v.compareFunction && (r.texParameteri(R, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(R, r.TEXTURE_COMPARE_FUNC, ge[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (v.magFilter === 1003 || v.minFilter !== 1005 && v.minFilter !== 1008 || v.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        r.texParameterf(R, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function ze(R, v) {
    let F = !1;
    R.__webglInit === void 0 && (R.__webglInit = !0, v.addEventListener("dispose", A));
    const $ = v.source;
    let Y = d.get($);
    Y === void 0 && (Y = {}, d.set($, Y));
    const W = z(v);
    if (W !== R.__cacheKey) {
      Y[W] === void 0 && (Y[W] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, F = !0), Y[W].usedTimes++;
      const me = Y[R.__cacheKey];
      me !== void 0 && (Y[R.__cacheKey].usedTimes--, me.usedTimes === 0 && E(v)), R.__cacheKey = W, R.__webglTexture = Y[W].texture;
    }
    return F;
  }
  function X(R, v, F) {
    let $ = r.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && ($ = r.TEXTURE_2D_ARRAY), v.isData3DTexture && ($ = r.TEXTURE_3D);
    const Y = ze(R, v), W = v.source;
    t.bindTexture($, R.__webglTexture, r.TEXTURE0 + F);
    const me = n.get(W);
    if (W.version !== me.__version || Y === !0) {
      t.activeTexture(r.TEXTURE0 + F);
      const se = ColorManagement.getPrimaries(ColorManagement.workingColorSpace), ue = v.colorSpace === NoColorSpace ? null : ColorManagement.getPrimaries(v.colorSpace), Ne = v.colorSpace === NoColorSpace || se === ue ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, v.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, v.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ne);
      let Z = g(v.image, !1, i.maxTextureSize);
      Z = We(v, Z);
      const he = s.convert(v.format, v.colorSpace), ye = s.convert(v.type);
      let Te = T(v.internalFormat, he, ye, v.colorSpace, v.isVideoTexture);
      Le($, v);
      let de;
      const Ue = v.mipmaps, we = v.isVideoTexture !== !0, He = me.__version === void 0 || Y === !0, D = W.dataReady, te = y(v, Z);
      if (v.isDepthTexture)
        Te = S(v.format === 1027, v.type), He && (we ? t.texStorage2D(r.TEXTURE_2D, 1, Te, Z.width, Z.height) : t.texImage2D(r.TEXTURE_2D, 0, Te, Z.width, Z.height, 0, he, ye, null));
      else if (v.isDataTexture)
        if (Ue.length > 0) {
          we && He && t.texStorage2D(r.TEXTURE_2D, te, Te, Ue[0].width, Ue[0].height);
          for (let G = 0, q = Ue.length; G < q; G++)
            de = Ue[G], we ? D && t.texSubImage2D(r.TEXTURE_2D, G, 0, 0, de.width, de.height, he, ye, de.data) : t.texImage2D(r.TEXTURE_2D, G, Te, de.width, de.height, 0, he, ye, de.data);
          v.generateMipmaps = !1;
        } else
          we ? (He && t.texStorage2D(r.TEXTURE_2D, te, Te, Z.width, Z.height), D && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, Z.width, Z.height, he, ye, Z.data)) : t.texImage2D(r.TEXTURE_2D, 0, Te, Z.width, Z.height, 0, he, ye, Z.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          we && He && t.texStorage3D(r.TEXTURE_2D_ARRAY, te, Te, Ue[0].width, Ue[0].height, Z.depth);
          for (let G = 0, q = Ue.length; G < q; G++)
            if (de = Ue[G], v.format !== 1023)
              if (he !== null)
                if (we) {
                  if (D)
                    if (v.layerUpdates.size > 0) {
                      const oe = getByteLength(de.width, de.height, v.format, v.type);
                      for (const ae of v.layerUpdates) {
                        const Ce = de.data.subarray(
                          ae * oe / de.data.BYTES_PER_ELEMENT,
                          (ae + 1) * oe / de.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, G, 0, 0, ae, de.width, de.height, 1, he, Ce);
                      }
                      v.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, G, 0, 0, 0, de.width, de.height, Z.depth, he, de.data);
                } else
                  t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, G, Te, de.width, de.height, Z.depth, 0, de.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              we ? D && t.texSubImage3D(r.TEXTURE_2D_ARRAY, G, 0, 0, 0, de.width, de.height, Z.depth, he, ye, de.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, G, Te, de.width, de.height, Z.depth, 0, he, ye, de.data);
        } else {
          we && He && t.texStorage2D(r.TEXTURE_2D, te, Te, Ue[0].width, Ue[0].height);
          for (let G = 0, q = Ue.length; G < q; G++)
            de = Ue[G], v.format !== 1023 ? he !== null ? we ? D && t.compressedTexSubImage2D(r.TEXTURE_2D, G, 0, 0, de.width, de.height, he, de.data) : t.compressedTexImage2D(r.TEXTURE_2D, G, Te, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : we ? D && t.texSubImage2D(r.TEXTURE_2D, G, 0, 0, de.width, de.height, he, ye, de.data) : t.texImage2D(r.TEXTURE_2D, G, Te, de.width, de.height, 0, he, ye, de.data);
        }
      else if (v.isDataArrayTexture)
        if (we) {
          if (He && t.texStorage3D(r.TEXTURE_2D_ARRAY, te, Te, Z.width, Z.height, Z.depth), D)
            if (v.layerUpdates.size > 0) {
              const G = getByteLength(Z.width, Z.height, v.format, v.type);
              for (const q of v.layerUpdates) {
                const oe = Z.data.subarray(
                  q * G / Z.data.BYTES_PER_ELEMENT,
                  (q + 1) * G / Z.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, q, Z.width, Z.height, 1, he, ye, oe);
              }
              v.clearLayerUpdates();
            } else
              t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Z.width, Z.height, Z.depth, he, ye, Z.data);
        } else
          t.texImage3D(r.TEXTURE_2D_ARRAY, 0, Te, Z.width, Z.height, Z.depth, 0, he, ye, Z.data);
      else if (v.isData3DTexture)
        we ? (He && t.texStorage3D(r.TEXTURE_3D, te, Te, Z.width, Z.height, Z.depth), D && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, Z.width, Z.height, Z.depth, he, ye, Z.data)) : t.texImage3D(r.TEXTURE_3D, 0, Te, Z.width, Z.height, Z.depth, 0, he, ye, Z.data);
      else if (v.isFramebufferTexture) {
        if (He)
          if (we)
            t.texStorage2D(r.TEXTURE_2D, te, Te, Z.width, Z.height);
          else {
            let G = Z.width, q = Z.height;
            for (let oe = 0; oe < te; oe++)
              t.texImage2D(r.TEXTURE_2D, oe, Te, G, q, 0, he, ye, null), G >>= 1, q >>= 1;
          }
      } else if (Ue.length > 0) {
        if (we && He) {
          const G = _e(Ue[0]);
          t.texStorage2D(r.TEXTURE_2D, te, Te, G.width, G.height);
        }
        for (let G = 0, q = Ue.length; G < q; G++)
          de = Ue[G], we ? D && t.texSubImage2D(r.TEXTURE_2D, G, 0, 0, he, ye, de) : t.texImage2D(r.TEXTURE_2D, G, Te, he, ye, de);
        v.generateMipmaps = !1;
      } else if (we) {
        if (He) {
          const G = _e(Z);
          t.texStorage2D(r.TEXTURE_2D, te, Te, G.width, G.height);
        }
        D && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, he, ye, Z);
      } else
        t.texImage2D(r.TEXTURE_2D, 0, Te, he, ye, Z);
      m(v) && f($), me.__version = W.version, v.onUpdate && v.onUpdate(v);
    }
    R.__version = v.version;
  }
  function Q(R, v, F) {
    if (v.image.length !== 6) return;
    const $ = ze(R, v), Y = v.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, R.__webglTexture, r.TEXTURE0 + F);
    const W = n.get(Y);
    if (Y.version !== W.__version || $ === !0) {
      t.activeTexture(r.TEXTURE0 + F);
      const me = ColorManagement.getPrimaries(ColorManagement.workingColorSpace), se = v.colorSpace === NoColorSpace ? null : ColorManagement.getPrimaries(v.colorSpace), ue = v.colorSpace === NoColorSpace || me === se ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, v.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, v.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ue);
      const Ne = v.isCompressedTexture || v.image[0].isCompressedTexture, Z = v.image[0] && v.image[0].isDataTexture, he = [];
      for (let q = 0; q < 6; q++)
        !Ne && !Z ? he[q] = g(v.image[q], !0, i.maxCubemapSize) : he[q] = Z ? v.image[q].image : v.image[q], he[q] = We(v, he[q]);
      const ye = he[0], Te = s.convert(v.format, v.colorSpace), de = s.convert(v.type), Ue = T(v.internalFormat, Te, de, v.colorSpace), we = v.isVideoTexture !== !0, He = W.__version === void 0 || $ === !0, D = Y.dataReady;
      let te = y(v, ye);
      Le(r.TEXTURE_CUBE_MAP, v);
      let G;
      if (Ne) {
        we && He && t.texStorage2D(r.TEXTURE_CUBE_MAP, te, Ue, ye.width, ye.height);
        for (let q = 0; q < 6; q++) {
          G = he[q].mipmaps;
          for (let oe = 0; oe < G.length; oe++) {
            const ae = G[oe];
            v.format !== 1023 ? Te !== null ? we ? D && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + q, oe, 0, 0, ae.width, ae.height, Te, ae.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + q, oe, Ue, ae.width, ae.height, 0, ae.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : we ? D && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + q, oe, 0, 0, ae.width, ae.height, Te, de, ae.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + q, oe, Ue, ae.width, ae.height, 0, Te, de, ae.data);
          }
        }
      } else {
        if (G = v.mipmaps, we && He) {
          G.length > 0 && te++;
          const q = _e(he[0]);
          t.texStorage2D(r.TEXTURE_CUBE_MAP, te, Ue, q.width, q.height);
        }
        for (let q = 0; q < 6; q++)
          if (Z) {
            we ? D && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, he[q].width, he[q].height, Te, de, he[q].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Ue, he[q].width, he[q].height, 0, Te, de, he[q].data);
            for (let oe = 0; oe < G.length; oe++) {
              const Ce = G[oe].image[q].image;
              we ? D && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + q, oe + 1, 0, 0, Ce.width, Ce.height, Te, de, Ce.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + q, oe + 1, Ue, Ce.width, Ce.height, 0, Te, de, Ce.data);
            }
          } else {
            we ? D && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, Te, de, he[q]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Ue, Te, de, he[q]);
            for (let oe = 0; oe < G.length; oe++) {
              const ae = G[oe];
              we ? D && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + q, oe + 1, 0, 0, Te, de, ae.image[q]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + q, oe + 1, Ue, Te, de, ae.image[q]);
            }
          }
      }
      m(v) && f(r.TEXTURE_CUBE_MAP), W.__version = Y.version, v.onUpdate && v.onUpdate(v);
    }
    R.__version = v.version;
  }
  function pe(R, v, F, $, Y, W) {
    const me = s.convert(F.format, F.colorSpace), se = s.convert(F.type), ue = T(F.internalFormat, me, se, F.colorSpace), Ne = n.get(v), Z = n.get(F);
    if (Z.__renderTarget = v, !Ne.__hasExternalTextures) {
      const he = Math.max(1, v.width >> W), ye = Math.max(1, v.height >> W);
      Y === r.TEXTURE_3D || Y === r.TEXTURE_2D_ARRAY ? t.texImage3D(Y, W, ue, he, ye, v.depth, 0, me, se, null) : t.texImage2D(Y, W, ue, he, ye, 0, me, se, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, R), Ie(v) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, $, Y, Z.__webglTexture, 0, De(v)) : (Y === r.TEXTURE_2D || Y >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, $, Y, Z.__webglTexture, W), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function re(R, v, F) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, R), v.depthBuffer) {
      const $ = v.depthTexture, Y = $ && $.isDepthTexture ? $.type : null, W = S(v.stencilBuffer, Y), me = v.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, se = De(v);
      Ie(v) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, se, W, v.width, v.height) : F ? r.renderbufferStorageMultisample(r.RENDERBUFFER, se, W, v.width, v.height) : r.renderbufferStorage(r.RENDERBUFFER, W, v.width, v.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, me, r.RENDERBUFFER, R);
    } else {
      const $ = v.textures;
      for (let Y = 0; Y < $.length; Y++) {
        const W = $[Y], me = s.convert(W.format, W.colorSpace), se = s.convert(W.type), ue = T(W.internalFormat, me, se, W.colorSpace), Ne = De(v);
        F && Ie(v) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Ne, ue, v.width, v.height) : Ie(v) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Ne, ue, v.width, v.height) : r.renderbufferStorage(r.RENDERBUFFER, ue, v.width, v.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function Se(R, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, R), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const $ = n.get(v.depthTexture);
    $.__renderTarget = v, (!$.__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), K(v.depthTexture, 0);
    const Y = $.__webglTexture, W = De(v);
    if (v.depthTexture.format === 1026)
      Ie(v) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Y, 0, W) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Y, 0);
    else if (v.depthTexture.format === 1027)
      Ie(v) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Y, 0, W) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Y, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Oe(R) {
    const v = n.get(R), F = R.isWebGLCubeRenderTarget === !0;
    if (v.__boundDepthTexture !== R.depthTexture) {
      const $ = R.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), $) {
        const Y = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, $.removeEventListener("dispose", Y);
        };
        $.addEventListener("dispose", Y), v.__depthDisposeCallback = Y;
      }
      v.__boundDepthTexture = $;
    }
    if (R.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      Se(v.__webglFramebuffer, R);
    } else if (F) {
      v.__webglDepthbuffer = [];
      for (let $ = 0; $ < 6; $++)
        if (t.bindFramebuffer(r.FRAMEBUFFER, v.__webglFramebuffer[$]), v.__webglDepthbuffer[$] === void 0)
          v.__webglDepthbuffer[$] = r.createRenderbuffer(), re(v.__webglDepthbuffer[$], R, !1);
        else {
          const Y = R.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, W = v.__webglDepthbuffer[$];
          r.bindRenderbuffer(r.RENDERBUFFER, W), r.framebufferRenderbuffer(r.FRAMEBUFFER, Y, r.RENDERBUFFER, W);
        }
    } else if (t.bindFramebuffer(r.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0)
      v.__webglDepthbuffer = r.createRenderbuffer(), re(v.__webglDepthbuffer, R, !1);
    else {
      const $ = R.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, Y = v.__webglDepthbuffer;
      r.bindRenderbuffer(r.RENDERBUFFER, Y), r.framebufferRenderbuffer(r.FRAMEBUFFER, $, r.RENDERBUFFER, Y);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Ee(R, v, F) {
    const $ = n.get(R);
    v !== void 0 && pe($.__webglFramebuffer, R, R.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), F !== void 0 && Oe(R);
  }
  function Ye(R) {
    const v = R.texture, F = n.get(R), $ = n.get(v);
    R.addEventListener("dispose", b);
    const Y = R.textures, W = R.isWebGLCubeRenderTarget === !0, me = Y.length > 1;
    if (me || ($.__webglTexture === void 0 && ($.__webglTexture = r.createTexture()), $.__version = v.version, a.memory.textures++), W) {
      F.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        if (v.mipmaps && v.mipmaps.length > 0) {
          F.__webglFramebuffer[se] = [];
          for (let ue = 0; ue < v.mipmaps.length; ue++)
            F.__webglFramebuffer[se][ue] = r.createFramebuffer();
        } else
          F.__webglFramebuffer[se] = r.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let se = 0; se < v.mipmaps.length; se++)
          F.__webglFramebuffer[se] = r.createFramebuffer();
      } else
        F.__webglFramebuffer = r.createFramebuffer();
      if (me)
        for (let se = 0, ue = Y.length; se < ue; se++) {
          const Ne = n.get(Y[se]);
          Ne.__webglTexture === void 0 && (Ne.__webglTexture = r.createTexture(), a.memory.textures++);
        }
      if (R.samples > 0 && Ie(R) === !1) {
        F.__webglMultisampledFramebuffer = r.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let se = 0; se < Y.length; se++) {
          const ue = Y[se];
          F.__webglColorRenderbuffer[se] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, F.__webglColorRenderbuffer[se]);
          const Ne = s.convert(ue.format, ue.colorSpace), Z = s.convert(ue.type), he = T(ue.internalFormat, Ne, Z, ue.colorSpace, R.isXRRenderTarget === !0), ye = De(R);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, ye, he, R.width, R.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + se, r.RENDERBUFFER, F.__webglColorRenderbuffer[se]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), R.depthBuffer && (F.__webglDepthRenderbuffer = r.createRenderbuffer(), re(F.__webglDepthRenderbuffer, R, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (W) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, $.__webglTexture), Le(r.TEXTURE_CUBE_MAP, v);
      for (let se = 0; se < 6; se++)
        if (v.mipmaps && v.mipmaps.length > 0)
          for (let ue = 0; ue < v.mipmaps.length; ue++)
            pe(F.__webglFramebuffer[se][ue], R, v, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + se, ue);
        else
          pe(F.__webglFramebuffer[se], R, v, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + se, 0);
      m(v) && f(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (me) {
      for (let se = 0, ue = Y.length; se < ue; se++) {
        const Ne = Y[se], Z = n.get(Ne);
        t.bindTexture(r.TEXTURE_2D, Z.__webglTexture), Le(r.TEXTURE_2D, Ne), pe(F.__webglFramebuffer, R, Ne, r.COLOR_ATTACHMENT0 + se, r.TEXTURE_2D, 0), m(Ne) && f(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let se = r.TEXTURE_2D;
      if ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (se = R.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY), t.bindTexture(se, $.__webglTexture), Le(se, v), v.mipmaps && v.mipmaps.length > 0)
        for (let ue = 0; ue < v.mipmaps.length; ue++)
          pe(F.__webglFramebuffer[ue], R, v, r.COLOR_ATTACHMENT0, se, ue);
      else
        pe(F.__webglFramebuffer, R, v, r.COLOR_ATTACHMENT0, se, 0);
      m(v) && f(se), t.unbindTexture();
    }
    R.depthBuffer && Oe(R);
  }
  function $e(R) {
    const v = R.textures;
    for (let F = 0, $ = v.length; F < $; F++) {
      const Y = v[F];
      if (m(Y)) {
        const W = C(R), me = n.get(Y).__webglTexture;
        t.bindTexture(W, me), f(W), t.unbindTexture();
      }
    }
  }
  const Pe = [], L = [];
  function nt(R) {
    if (R.samples > 0) {
      if (Ie(R) === !1) {
        const v = R.textures, F = R.width, $ = R.height;
        let Y = r.COLOR_BUFFER_BIT;
        const W = R.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, me = n.get(R), se = v.length > 1;
        if (se)
          for (let ue = 0; ue < v.length; ue++)
            t.bindFramebuffer(r.FRAMEBUFFER, me.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ue, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, me.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ue, r.TEXTURE_2D, null, 0);
        t.bindFramebuffer(r.READ_FRAMEBUFFER, me.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, me.__webglFramebuffer);
        for (let ue = 0; ue < v.length; ue++) {
          if (R.resolveDepthBuffer && (R.depthBuffer && (Y |= r.DEPTH_BUFFER_BIT), R.stencilBuffer && R.resolveStencilBuffer && (Y |= r.STENCIL_BUFFER_BIT)), se) {
            r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, me.__webglColorRenderbuffer[ue]);
            const Ne = n.get(v[ue]).__webglTexture;
            r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, Ne, 0);
          }
          r.blitFramebuffer(0, 0, F, $, 0, 0, F, $, Y, r.NEAREST), l === !0 && (Pe.length = 0, L.length = 0, Pe.push(r.COLOR_ATTACHMENT0 + ue), R.depthBuffer && R.resolveDepthBuffer === !1 && (Pe.push(W), L.push(W), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, L)), r.invalidateFramebuffer(r.READ_FRAMEBUFFER, Pe));
        }
        if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), se)
          for (let ue = 0; ue < v.length; ue++) {
            t.bindFramebuffer(r.FRAMEBUFFER, me.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ue, r.RENDERBUFFER, me.__webglColorRenderbuffer[ue]);
            const Ne = n.get(v[ue]).__webglTexture;
            t.bindFramebuffer(r.FRAMEBUFFER, me.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ue, r.TEXTURE_2D, Ne, 0);
          }
        t.bindFramebuffer(r.DRAW_FRAMEBUFFER, me.__webglMultisampledFramebuffer);
      } else if (R.depthBuffer && R.resolveDepthBuffer === !1 && l) {
        const v = R.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT;
        r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function De(R) {
    return Math.min(i.maxSamples, R.samples);
  }
  function Ie(R) {
    const v = n.get(R);
    return R.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function ve(R) {
    const v = a.render.frame;
    u.get(R) !== v && (u.set(R, v), R.update());
  }
  function We(R, v) {
    const F = R.colorSpace, $ = R.format, Y = R.type;
    return R.isCompressedTexture === !0 || R.isVideoTexture === !0 || F !== LinearSRGBColorSpace && F !== NoColorSpace && (ColorManagement.getTransfer(F) === SRGBTransfer ? ($ !== 1023 || Y !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), v;
  }
  function _e(R) {
    return typeof HTMLImageElement < "u" && R instanceof HTMLImageElement ? (c.width = R.naturalWidth || R.width, c.height = R.naturalHeight || R.height) : typeof VideoFrame < "u" && R instanceof VideoFrame ? (c.width = R.displayWidth, c.height = R.displayHeight) : (c.width = R.width, c.height = R.height), c;
  }
  this.allocateTextureUnit = N, this.resetTextureUnits = V, this.setTexture2D = K, this.setTexture2DArray = H, this.setTexture3D = J, this.setTextureCube = k, this.rebindTextures = Ee, this.setupRenderTarget = Ye, this.updateRenderTargetMipmap = $e, this.updateMultisampleRenderTarget = nt, this.setupDepthRenderbuffer = Oe, this.setupFrameBufferTexture = pe, this.useMultisampledRTT = Ie;
}
function WebGLUtils(r, e) {
  function t(n, i = NoColorSpace) {
    let s;
    const a = ColorManagement.getTransfer(i);
    if (n === 1009) return r.UNSIGNED_BYTE;
    if (n === 1017) return r.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return r.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return r.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 1010) return r.BYTE;
    if (n === 1011) return r.SHORT;
    if (n === 1012) return r.UNSIGNED_SHORT;
    if (n === 1013) return r.INT;
    if (n === 1014) return r.UNSIGNED_INT;
    if (n === 1015) return r.FLOAT;
    if (n === 1016) return r.HALF_FLOAT;
    if (n === 1021) return r.ALPHA;
    if (n === 1022) return r.RGB;
    if (n === 1023) return r.RGBA;
    if (n === 1024) return r.LUMINANCE;
    if (n === 1025) return r.LUMINANCE_ALPHA;
    if (n === 1026) return r.DEPTH_COMPONENT;
    if (n === 1027) return r.DEPTH_STENCIL;
    if (n === 1028) return r.RED;
    if (n === 1029) return r.RED_INTEGER;
    if (n === 1030) return r.RG;
    if (n === 1031) return r.RG_INTEGER;
    if (n === 1033) return r.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (a === SRGBTransfer)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === 36196 || n === 37492 || n === 37496)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === 36196 || n === 37492) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === 37808) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return a === SRGBTransfer ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === 36492) return a === SRGBTransfer ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === 36492) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === 1020 ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null;
  }
  return { convert: t };
}
const _occlusion_vertex = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, _occlusion_fragment = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class WebXRDepthSensing {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new Texture(), s = e.properties.get(i);
      s.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new ShaderMaterial({
        vertexShader: _occlusion_vertex,
        fragmentShader: _occlusion_fragment,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Mesh(new PlaneGeometry(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class WebXRManager extends EventDispatcher {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", l = 1, c = null, u = null, h = null, d = null, p = null, _ = null;
    const g = new WebXRDepthSensing(), m = t.getContextAttributes();
    let f = null, C = null;
    const T = [], S = [], y = new Vector2();
    let A = null;
    const b = new PerspectiveCamera();
    b.viewport = new Vector4();
    const w = new PerspectiveCamera();
    w.viewport = new Vector4();
    const E = [b, w], M = new ArrayCamera();
    let P = null, V = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(X) {
      let Q = T[X];
      return Q === void 0 && (Q = new WebXRController(), T[X] = Q), Q.getTargetRaySpace();
    }, this.getControllerGrip = function(X) {
      let Q = T[X];
      return Q === void 0 && (Q = new WebXRController(), T[X] = Q), Q.getGripSpace();
    }, this.getHand = function(X) {
      let Q = T[X];
      return Q === void 0 && (Q = new WebXRController(), T[X] = Q), Q.getHandSpace();
    };
    function N(X) {
      const Q = S.indexOf(X.inputSource);
      if (Q === -1)
        return;
      const pe = T[Q];
      pe !== void 0 && (pe.update(X.inputSource, X.frame, c || a), pe.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function z() {
      i.removeEventListener("select", N), i.removeEventListener("selectstart", N), i.removeEventListener("selectend", N), i.removeEventListener("squeeze", N), i.removeEventListener("squeezestart", N), i.removeEventListener("squeezeend", N), i.removeEventListener("end", z), i.removeEventListener("inputsourceschange", K);
      for (let X = 0; X < T.length; X++) {
        const Q = S[X];
        Q !== null && (S[X] = null, T[X].disconnect(Q));
      }
      P = null, V = null, g.reset(), e.setRenderTarget(f), p = null, d = null, h = null, i = null, C = null, ze.stop(), n.isPresenting = !1, e.setPixelRatio(A), e.setSize(y.width, y.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(X) {
      s = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(X) {
      o = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(X) {
      c = X;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(X) {
      if (i = X, i !== null) {
        if (f = e.getRenderTarget(), i.addEventListener("select", N), i.addEventListener("selectstart", N), i.addEventListener("selectend", N), i.addEventListener("squeeze", N), i.addEventListener("squeezestart", N), i.addEventListener("squeezeend", N), i.addEventListener("end", z), i.addEventListener("inputsourceschange", K), m.xrCompatible !== !0 && await t.makeXRCompatible(), A = e.getPixelRatio(), e.getSize(y), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let pe = null, re = null, Se = null;
          m.depth && (Se = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, pe = m.stencil ? 1027 : 1026, re = m.stencil ? 1020 : 1014);
          const Oe = {
            colorFormat: t.RGBA8,
            depthFormat: Se,
            scaleFactor: s
          };
          h = new XRWebGLBinding(i, t), d = h.createProjectionLayer(Oe), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), C = new WebGLRenderTarget(
            d.textureWidth,
            d.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new DepthTexture(d.textureWidth, d.textureHeight, re, void 0, void 0, void 0, void 0, void 0, void 0, pe),
              stencilBuffer: m.stencil,
              colorSpace: e.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: d.ignoreDepthValues === !1,
              resolveStencilBuffer: d.ignoreDepthValues === !1
            }
          );
        } else {
          const pe = {
            antialias: m.antialias,
            alpha: !0,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(i, t, pe), i.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), C = new WebGLRenderTarget(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: m.stencil,
              resolveDepthBuffer: p.ignoreDepthValues === !1,
              resolveStencilBuffer: p.ignoreDepthValues === !1
            }
          );
        }
        C.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), ze.setContext(i), ze.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return g.getDepthTexture();
    };
    function K(X) {
      for (let Q = 0; Q < X.removed.length; Q++) {
        const pe = X.removed[Q], re = S.indexOf(pe);
        re >= 0 && (S[re] = null, T[re].disconnect(pe));
      }
      for (let Q = 0; Q < X.added.length; Q++) {
        const pe = X.added[Q];
        let re = S.indexOf(pe);
        if (re === -1) {
          for (let Oe = 0; Oe < T.length; Oe++)
            if (Oe >= S.length) {
              S.push(pe), re = Oe;
              break;
            } else if (S[Oe] === null) {
              S[Oe] = pe, re = Oe;
              break;
            }
          if (re === -1) break;
        }
        const Se = T[re];
        Se && Se.connect(pe);
      }
    }
    const H = new Vector3(), J = new Vector3();
    function k(X, Q, pe) {
      H.setFromMatrixPosition(Q.matrixWorld), J.setFromMatrixPosition(pe.matrixWorld);
      const re = H.distanceTo(J), Se = Q.projectionMatrix.elements, Oe = pe.projectionMatrix.elements, Ee = Se[14] / (Se[10] - 1), Ye = Se[14] / (Se[10] + 1), $e = (Se[9] + 1) / Se[5], Pe = (Se[9] - 1) / Se[5], L = (Se[8] - 1) / Se[0], nt = (Oe[8] + 1) / Oe[0], De = Ee * L, Ie = Ee * nt, ve = re / (-L + nt), We = ve * -L;
      if (Q.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(We), X.translateZ(ve), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), Se[10] === -1)
        X.projectionMatrix.copy(Q.projectionMatrix), X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);
      else {
        const _e = Ee + ve, R = Ye + ve, v = De - We, F = Ie + (re - We), $ = $e * Ye / R * _e, Y = Pe * Ye / R * _e;
        X.projectionMatrix.makePerspective(v, F, $, Y, _e, R), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
      }
    }
    function ie(X, Q) {
      Q === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(Q.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
    }
    this.updateCamera = function(X) {
      if (i === null) return;
      let Q = X.near, pe = X.far;
      g.texture !== null && (g.depthNear > 0 && (Q = g.depthNear), g.depthFar > 0 && (pe = g.depthFar)), M.near = w.near = b.near = Q, M.far = w.far = b.far = pe, (P !== M.near || V !== M.far) && (i.updateRenderState({
        depthNear: M.near,
        depthFar: M.far
      }), P = M.near, V = M.far), b.layers.mask = X.layers.mask | 2, w.layers.mask = X.layers.mask | 4, M.layers.mask = b.layers.mask | w.layers.mask;
      const re = X.parent, Se = M.cameras;
      ie(M, re);
      for (let Oe = 0; Oe < Se.length; Oe++)
        ie(Se[Oe], re);
      Se.length === 2 ? k(M, b, w) : M.projectionMatrix.copy(b.projectionMatrix), ce(X, M, re);
    };
    function ce(X, Q, pe) {
      pe === null ? X.matrix.copy(Q.matrixWorld) : (X.matrix.copy(pe.matrixWorld), X.matrix.invert(), X.matrix.multiply(Q.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(!0), X.projectionMatrix.copy(Q.projectionMatrix), X.projectionMatrixInverse.copy(Q.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = RAD2DEG * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(d === null && p === null))
        return l;
    }, this.setFoveation = function(X) {
      l = X, d !== null && (d.fixedFoveation = X), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = X);
    }, this.hasDepthSensing = function() {
      return g.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return g.getMesh(M);
    };
    let ge = null;
    function Le(X, Q) {
      if (u = Q.getViewerPose(c || a), _ = Q, u !== null) {
        const pe = u.views;
        p !== null && (e.setRenderTargetFramebuffer(C, p.framebuffer), e.setRenderTarget(C));
        let re = !1;
        pe.length !== M.cameras.length && (M.cameras.length = 0, re = !0);
        for (let Ee = 0; Ee < pe.length; Ee++) {
          const Ye = pe[Ee];
          let $e = null;
          if (p !== null)
            $e = p.getViewport(Ye);
          else {
            const L = h.getViewSubImage(d, Ye);
            $e = L.viewport, Ee === 0 && (e.setRenderTargetTextures(
              C,
              L.colorTexture,
              d.ignoreDepthValues ? void 0 : L.depthStencilTexture
            ), e.setRenderTarget(C));
          }
          let Pe = E[Ee];
          Pe === void 0 && (Pe = new PerspectiveCamera(), Pe.layers.enable(Ee), Pe.viewport = new Vector4(), E[Ee] = Pe), Pe.matrix.fromArray(Ye.transform.matrix), Pe.matrix.decompose(Pe.position, Pe.quaternion, Pe.scale), Pe.projectionMatrix.fromArray(Ye.projectionMatrix), Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(), Pe.viewport.set($e.x, $e.y, $e.width, $e.height), Ee === 0 && (M.matrix.copy(Pe.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), re === !0 && M.cameras.push(Pe);
        }
        const Se = i.enabledFeatures;
        if (Se && Se.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && h) {
          const Ee = h.getDepthInformation(pe[0]);
          Ee && Ee.isValid && Ee.texture && g.init(e, Ee, i.renderState);
        }
      }
      for (let pe = 0; pe < T.length; pe++) {
        const re = S[pe], Se = T[pe];
        re !== null && Se !== void 0 && Se.update(re, Q, c || a);
      }
      ge && ge(X, Q), Q.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Q }), _ = null;
    }
    const ze = new WebGLAnimation();
    ze.setAnimationLoop(Le), this.setAnimationLoop = function(X) {
      ge = X;
    }, this.dispose = function() {
    };
  }
}
const _e1 = /* @__PURE__ */ new Euler(), _m1 = /* @__PURE__ */ new Matrix4();
function WebGLMaterials(r, e) {
  function t(m, f) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), f.value.copy(m.matrix);
  }
  function n(m, f) {
    f.color.getRGB(m.fogColor.value, getUnlitUniformColorSpace(r)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function i(m, f, C, T, S) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? s(m, f) : f.isMeshToonMaterial ? (s(m, f), h(m, f)) : f.isMeshPhongMaterial ? (s(m, f), u(m, f)) : f.isMeshStandardMaterial ? (s(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, S)) : f.isMeshMatcapMaterial ? (s(m, f), _(m, f)) : f.isMeshDepthMaterial ? s(m, f) : f.isMeshDistanceMaterial ? (s(m, f), g(m, f)) : f.isMeshNormalMaterial ? s(m, f) : f.isLineBasicMaterial ? (a(m, f), f.isLineDashedMaterial && o(m, f)) : f.isPointsMaterial ? l(m, f, C, T) : f.isSpriteMaterial ? c(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function s(m, f) {
    m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === 1 && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === 1 && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const C = e.get(f), T = C.envMap, S = C.envMapRotation;
    T && (m.envMap.value = T, _e1.copy(S), _e1.x *= -1, _e1.y *= -1, _e1.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (_e1.y *= -1, _e1.z *= -1), m.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)), m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap && (m.lightMap.value = f.lightMap, m.lightMapIntensity.value = f.lightMapIntensity, t(f.lightMap, m.lightMapTransform)), f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform));
  }
  function a(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform));
  }
  function o(m, f) {
    m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale;
  }
  function l(m, f, C, T) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * C, m.scale.value = T * 0.5, f.map && (m.map.value = f.map, t(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function c(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.rotation.value = f.rotation, f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function u(m, f) {
    m.specular.value.copy(f.specular), m.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function h(m, f) {
    f.gradientMap && (m.gradientMap.value = f.gradientMap);
  }
  function d(m, f) {
    m.metalness.value = f.metalness, f.metalnessMap && (m.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, m.metalnessMapTransform)), m.roughness.value = f.roughness, f.roughnessMap && (m.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, m.roughnessMapTransform)), f.envMap && (m.envMapIntensity.value = f.envMapIntensity);
  }
  function p(m, f, C) {
    m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === 1 && m.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (m.dispersion.value = f.dispersion), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = C.texture, m.transmissionSamplerSize.value.set(C.width, C.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function g(m, f) {
    const C = e.get(f).light;
    m.referencePosition.value.setFromMatrixPosition(C.matrixWorld), m.nearDistance.value = C.shadow.camera.near, m.farDistance.value = C.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function WebGLUniformsGroups(r, e, t, n) {
  let i = {}, s = {}, a = [];
  const o = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(C, T) {
    const S = T.program;
    n.uniformBlockBinding(C, S);
  }
  function c(C, T) {
    let S = i[C.id];
    S === void 0 && (_(C), S = u(C), i[C.id] = S, C.addEventListener("dispose", m));
    const y = T.program;
    n.updateUBOMapping(C, y);
    const A = e.render.frame;
    s[C.id] !== A && (d(C), s[C.id] = A);
  }
  function u(C) {
    const T = h();
    C.__bindingPointIndex = T;
    const S = r.createBuffer(), y = C.__size, A = C.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, S), r.bufferData(r.UNIFORM_BUFFER, y, A), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, T, S), S;
  }
  function h() {
    for (let C = 0; C < o; C++)
      if (a.indexOf(C) === -1)
        return a.push(C), C;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(C) {
    const T = i[C.id], S = C.uniforms, y = C.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, T);
    for (let A = 0, b = S.length; A < b; A++) {
      const w = Array.isArray(S[A]) ? S[A] : [S[A]];
      for (let E = 0, M = w.length; E < M; E++) {
        const P = w[E];
        if (p(P, A, E, y) === !0) {
          const V = P.__offset, N = Array.isArray(P.value) ? P.value : [P.value];
          let z = 0;
          for (let K = 0; K < N.length; K++) {
            const H = N[K], J = g(H);
            typeof H == "number" || typeof H == "boolean" ? (P.__data[0] = H, r.bufferSubData(r.UNIFORM_BUFFER, V + z, P.__data)) : H.isMatrix3 ? (P.__data[0] = H.elements[0], P.__data[1] = H.elements[1], P.__data[2] = H.elements[2], P.__data[3] = 0, P.__data[4] = H.elements[3], P.__data[5] = H.elements[4], P.__data[6] = H.elements[5], P.__data[7] = 0, P.__data[8] = H.elements[6], P.__data[9] = H.elements[7], P.__data[10] = H.elements[8], P.__data[11] = 0) : (H.toArray(P.__data, z), z += J.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r.bufferSubData(r.UNIFORM_BUFFER, V, P.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function p(C, T, S, y) {
    const A = C.value, b = T + "_" + S;
    if (y[b] === void 0)
      return typeof A == "number" || typeof A == "boolean" ? y[b] = A : y[b] = A.clone(), !0;
    {
      const w = y[b];
      if (typeof A == "number" || typeof A == "boolean") {
        if (w !== A)
          return y[b] = A, !0;
      } else if (w.equals(A) === !1)
        return w.copy(A), !0;
    }
    return !1;
  }
  function _(C) {
    const T = C.uniforms;
    let S = 0;
    const y = 16;
    for (let b = 0, w = T.length; b < w; b++) {
      const E = Array.isArray(T[b]) ? T[b] : [T[b]];
      for (let M = 0, P = E.length; M < P; M++) {
        const V = E[M], N = Array.isArray(V.value) ? V.value : [V.value];
        for (let z = 0, K = N.length; z < K; z++) {
          const H = N[z], J = g(H), k = S % y, ie = k % J.boundary, ce = k + ie;
          S += ie, ce !== 0 && y - ce < J.storage && (S += y - ce), V.__data = new Float32Array(J.storage / Float32Array.BYTES_PER_ELEMENT), V.__offset = S, S += J.storage;
        }
      }
    }
    const A = S % y;
    return A > 0 && (S += y - A), C.__size = S, C.__cache = {}, this;
  }
  function g(C) {
    const T = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof C == "number" || typeof C == "boolean" ? (T.boundary = 4, T.storage = 4) : C.isVector2 ? (T.boundary = 8, T.storage = 8) : C.isVector3 || C.isColor ? (T.boundary = 16, T.storage = 12) : C.isVector4 ? (T.boundary = 16, T.storage = 16) : C.isMatrix3 ? (T.boundary = 48, T.storage = 48) : C.isMatrix4 ? (T.boundary = 64, T.storage = 64) : C.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", C), T;
  }
  function m(C) {
    const T = C.target;
    T.removeEventListener("dispose", m);
    const S = a.indexOf(T.__bindingPointIndex);
    a.splice(S, 1), r.deleteBuffer(i[T.id]), delete i[T.id], delete s[T.id];
  }
  function f() {
    for (const C in i)
      r.deleteBuffer(i[C]);
    a = [], i = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: f
  };
}
class WebGLRenderer {
  constructor(e = {}) {
    const {
      canvas: t = createCanvasElement(),
      context: n = null,
      depth: i = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1,
      reverseDepthBuffer: d = !1
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else
      p = a;
    const _ = new Uint32Array(4), g = new Int32Array(4);
    let m = null, f = null;
    const C = [], T = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = SRGBColorSpace, this.toneMapping = 0, this.toneMappingExposure = 1;
    const S = this;
    let y = !1, A = 0, b = 0, w = null, E = -1, M = null;
    const P = new Vector4(), V = new Vector4();
    let N = null;
    const z = new Color(0);
    let K = 0, H = t.width, J = t.height, k = 1, ie = null, ce = null;
    const ge = new Vector4(0, 0, H, J), Le = new Vector4(0, 0, H, J);
    let ze = !1;
    const X = new Frustum();
    let Q = !1, pe = !1;
    this.transmissionResolutionScale = 1;
    const re = new Matrix4(), Se = new Matrix4(), Oe = new Vector3(), Ee = new Vector4(), Ye = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let $e = !1;
    function Pe() {
      return w === null ? k : 1;
    }
    let L = n;
    function nt(x, I) {
      return t.getContext(x, I);
    }
    try {
      const x = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${REVISION}`), t.addEventListener("webglcontextlost", q, !1), t.addEventListener("webglcontextrestored", oe, !1), t.addEventListener("webglcontextcreationerror", ae, !1), L === null) {
        const I = "webgl2";
        if (L = nt(I, x), L === null)
          throw nt(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let De, Ie, ve, We, _e, R, v, F, $, Y, W, me, se, ue, Ne, Z, he, ye, Te, de, Ue, we, He, D;
    function te() {
      De = new WebGLExtensions(L), De.init(), we = new WebGLUtils(L, De), Ie = new WebGLCapabilities(L, De, e, we), ve = new WebGLState(L, De), Ie.reverseDepthBuffer && d && ve.buffers.depth.setReversed(!0), We = new WebGLInfo(L), _e = new WebGLProperties(), R = new WebGLTextures(L, De, ve, _e, Ie, we, We), v = new WebGLCubeMaps(S), F = new WebGLCubeUVMaps(S), $ = new WebGLAttributes(L), He = new WebGLBindingStates(L, $), Y = new WebGLGeometries(L, $, We, He), W = new WebGLObjects(L, Y, $, We), Te = new WebGLMorphtargets(L, Ie, R), Z = new WebGLClipping(_e), me = new WebGLPrograms(S, v, F, De, Ie, He, Z), se = new WebGLMaterials(S, _e), ue = new WebGLRenderLists(), Ne = new WebGLRenderStates(De), ye = new WebGLBackground(S, v, F, ve, W, p, l), he = new WebGLShadowMap(S, W, Ie), D = new WebGLUniformsGroups(L, We, Ie, ve), de = new WebGLBufferRenderer(L, De, We), Ue = new WebGLIndexedBufferRenderer(L, De, We), We.programs = me.programs, S.capabilities = Ie, S.extensions = De, S.properties = _e, S.renderLists = ue, S.shadowMap = he, S.state = ve, S.info = We;
    }
    te();
    const G = new WebXRManager(S, L);
    this.xr = G, this.getContext = function() {
      return L;
    }, this.getContextAttributes = function() {
      return L.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = De.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = De.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (k = x, this.setSize(H, J, !1));
    }, this.getSize = function(x) {
      return x.set(H, J);
    }, this.setSize = function(x, I, B = !0) {
      if (G.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      H = x, J = I, t.width = Math.floor(x * k), t.height = Math.floor(I * k), B === !0 && (t.style.width = x + "px", t.style.height = I + "px"), this.setViewport(0, 0, x, I);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(H * k, J * k).floor();
    }, this.setDrawingBufferSize = function(x, I, B) {
      H = x, J = I, k = B, t.width = Math.floor(x * B), t.height = Math.floor(I * B), this.setViewport(0, 0, x, I);
    }, this.getCurrentViewport = function(x) {
      return x.copy(P);
    }, this.getViewport = function(x) {
      return x.copy(ge);
    }, this.setViewport = function(x, I, B, O) {
      x.isVector4 ? ge.set(x.x, x.y, x.z, x.w) : ge.set(x, I, B, O), ve.viewport(P.copy(ge).multiplyScalar(k).round());
    }, this.getScissor = function(x) {
      return x.copy(Le);
    }, this.setScissor = function(x, I, B, O) {
      x.isVector4 ? Le.set(x.x, x.y, x.z, x.w) : Le.set(x, I, B, O), ve.scissor(V.copy(Le).multiplyScalar(k).round());
    }, this.getScissorTest = function() {
      return ze;
    }, this.setScissorTest = function(x) {
      ve.setScissorTest(ze = x);
    }, this.setOpaqueSort = function(x) {
      ie = x;
    }, this.setTransparentSort = function(x) {
      ce = x;
    }, this.getClearColor = function(x) {
      return x.copy(ye.getClearColor());
    }, this.setClearColor = function() {
      ye.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return ye.getClearAlpha();
    }, this.setClearAlpha = function() {
      ye.setClearAlpha(...arguments);
    }, this.clear = function(x = !0, I = !0, B = !0) {
      let O = 0;
      if (x) {
        let U = !1;
        if (w !== null) {
          const j = w.texture.format;
          U = j === 1033 || j === 1031 || j === 1029;
        }
        if (U) {
          const j = w.texture.type, ne = j === 1009 || j === 1014 || j === 1012 || j === 1020 || j === 1017 || j === 1018, le = ye.getClearColor(), fe = ye.getClearAlpha(), Ae = le.r, Re = le.g, xe = le.b;
          ne ? (_[0] = Ae, _[1] = Re, _[2] = xe, _[3] = fe, L.clearBufferuiv(L.COLOR, 0, _)) : (g[0] = Ae, g[1] = Re, g[2] = xe, g[3] = fe, L.clearBufferiv(L.COLOR, 0, g));
        } else
          O |= L.COLOR_BUFFER_BIT;
      }
      I && (O |= L.DEPTH_BUFFER_BIT), B && (O |= L.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), L.clear(O);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", q, !1), t.removeEventListener("webglcontextrestored", oe, !1), t.removeEventListener("webglcontextcreationerror", ae, !1), ye.dispose(), ue.dispose(), Ne.dispose(), _e.dispose(), v.dispose(), F.dispose(), W.dispose(), He.dispose(), D.dispose(), me.dispose(), G.dispose(), G.removeEventListener("sessionstart", _t), G.removeEventListener("sessionend", gt), lt.stop();
    };
    function q(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
    }
    function oe() {
      console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
      const x = We.autoReset, I = he.enabled, B = he.autoUpdate, O = he.needsUpdate, U = he.type;
      te(), We.autoReset = x, he.enabled = I, he.autoUpdate = B, he.needsUpdate = O, he.type = U;
    }
    function ae(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Ce(x) {
      const I = x.target;
      I.removeEventListener("dispose", Ce), qe(I);
    }
    function qe(x) {
      Je(x), _e.remove(x);
    }
    function Je(x) {
      const I = _e.get(x).programs;
      I !== void 0 && (I.forEach(function(B) {
        me.releaseProgram(B);
      }), x.isShaderMaterial && me.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, I, B, O, U, j) {
      I === null && (I = Ye);
      const ne = U.isMesh && U.matrixWorld.determinant() < 0, le = Et(x, I, B, O, U);
      ve.setMaterial(O, ne);
      let fe = B.index, Ae = 1;
      if (O.wireframe === !0) {
        if (fe = Y.getWireframeAttribute(B), fe === void 0) return;
        Ae = 2;
      }
      const Re = B.drawRange, xe = B.attributes.position;
      let Fe = Re.start * Ae, Ve = (Re.start + Re.count) * Ae;
      j !== null && (Fe = Math.max(Fe, j.start * Ae), Ve = Math.min(Ve, (j.start + j.count) * Ae)), fe !== null ? (Fe = Math.max(Fe, 0), Ve = Math.min(Ve, fe.count)) : xe != null && (Fe = Math.max(Fe, 0), Ve = Math.min(Ve, xe.count));
      const je = Ve - Fe;
      if (je < 0 || je === 1 / 0) return;
      He.setup(U, O, le, B, fe);
      let Ke, Be = de;
      if (fe !== null && (Ke = $.get(fe), Be = Ue, Be.setIndex(Ke)), U.isMesh)
        O.wireframe === !0 ? (ve.setLineWidth(O.wireframeLinewidth * Pe()), Be.setMode(L.LINES)) : Be.setMode(L.TRIANGLES);
      else if (U.isLine) {
        let Me = O.linewidth;
        Me === void 0 && (Me = 1), ve.setLineWidth(Me * Pe()), U.isLineSegments ? Be.setMode(L.LINES) : U.isLineLoop ? Be.setMode(L.LINE_LOOP) : Be.setMode(L.LINE_STRIP);
      } else U.isPoints ? Be.setMode(L.POINTS) : U.isSprite && Be.setMode(L.TRIANGLES);
      if (U.isBatchedMesh)
        if (U._multiDrawInstances !== null)
          warnOnce("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Be.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
        else if (De.get("WEBGL_multi_draw"))
          Be.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
        else {
          const Me = U._multiDrawStarts, Ze = U._multiDrawCounts, Ge = U._multiDrawCount, at = fe ? $.get(fe).bytesPerElement : 1, ut = _e.get(O).currentProgram.getUniforms();
          for (let tt = 0; tt < Ge; tt++)
            ut.setValue(L, "_gl_DrawID", tt), Be.render(Me[tt] / at, Ze[tt]);
        }
      else if (U.isInstancedMesh)
        Be.renderInstances(Fe, je, U.count);
      else if (B.isInstancedBufferGeometry) {
        const Me = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, Ze = Math.min(B.instanceCount, Me);
        Be.renderInstances(Fe, je, Ze);
      } else
        Be.render(Fe, je);
    };
    function ke(x, I, B) {
      x.transparent === !0 && x.side === 2 && x.forceSinglePass === !1 ? (x.side = 1, x.needsUpdate = !0, ft(x, I, B), x.side = 0, x.needsUpdate = !0, ft(x, I, B), x.side = 2) : ft(x, I, B);
    }
    this.compile = function(x, I, B = null) {
      B === null && (B = x), f = Ne.get(B), f.init(I), T.push(f), B.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), x !== B && x.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), f.setupLights();
      const O = /* @__PURE__ */ new Set();
      return x.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite))
          return;
        const j = U.material;
        if (j)
          if (Array.isArray(j))
            for (let ne = 0; ne < j.length; ne++) {
              const le = j[ne];
              ke(le, B, U), O.add(le);
            }
          else
            ke(j, B, U), O.add(j);
      }), f = T.pop(), O;
    }, this.compileAsync = function(x, I, B = null) {
      const O = this.compile(x, I, B);
      return new Promise((U) => {
        function j() {
          if (O.forEach(function(ne) {
            _e.get(ne).currentProgram.isReady() && O.delete(ne);
          }), O.size === 0) {
            U(x);
            return;
          }
          setTimeout(j, 10);
        }
        De.get("KHR_parallel_shader_compile") !== null ? j() : setTimeout(j, 10);
      });
    };
    let st = null;
    function ot(x) {
      st && st(x);
    }
    function _t() {
      lt.stop();
    }
    function gt() {
      lt.start();
    }
    const lt = new WebGLAnimation();
    lt.setAnimationLoop(ot), typeof self < "u" && lt.setContext(self), this.setAnimationLoop = function(x) {
      st = x, G.setAnimationLoop(x), x === null ? lt.stop() : lt.start();
    }, G.addEventListener("sessionstart", _t), G.addEventListener("sessionend", gt), this.render = function(x, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (y === !0) return;
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), G.enabled === !0 && G.isPresenting === !0 && (G.cameraAutoUpdate === !0 && G.updateCamera(I), I = G.getCamera()), x.isScene === !0 && x.onBeforeRender(S, x, I, w), f = Ne.get(x, T.length), f.init(I), T.push(f), Se.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), X.setFromProjectionMatrix(Se), pe = this.localClippingEnabled, Q = Z.init(this.clippingPlanes, pe), m = ue.get(x, C.length), m.init(), C.push(m), G.enabled === !0 && G.isPresenting === !0) {
        const j = S.xr.getDepthSensingMesh();
        j !== null && pt(j, I, -1 / 0, S.sortObjects);
      }
      pt(x, I, 0, S.sortObjects), m.finish(), S.sortObjects === !0 && m.sort(ie, ce), $e = G.enabled === !1 || G.isPresenting === !1 || G.hasDepthSensing() === !1, $e && ye.addToRenderList(m, x), this.info.render.frame++, Q === !0 && Z.beginShadows();
      const B = f.state.shadowsArray;
      he.render(B, x, I), Q === !0 && Z.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const O = m.opaque, U = m.transmissive;
      if (f.setupLights(), I.isArrayCamera) {
        const j = I.cameras;
        if (U.length > 0)
          for (let ne = 0, le = j.length; ne < le; ne++) {
            const fe = j[ne];
            xt(O, U, x, fe);
          }
        $e && ye.render(x);
        for (let ne = 0, le = j.length; ne < le; ne++) {
          const fe = j[ne];
          vt(m, x, fe, fe.viewport);
        }
      } else
        U.length > 0 && xt(O, U, x, I), $e && ye.render(x), vt(m, x, I);
      w !== null && b === 0 && (R.updateMultisampleRenderTarget(w), R.updateRenderTargetMipmap(w)), x.isScene === !0 && x.onAfterRender(S, x, I), He.resetDefaultState(), E = -1, M = null, T.pop(), T.length > 0 ? (f = T[T.length - 1], Q === !0 && Z.setGlobalState(S.clippingPlanes, f.state.camera)) : f = null, C.pop(), C.length > 0 ? m = C[C.length - 1] : m = null;
    };
    function pt(x, I, B, O) {
      if (x.visible === !1) return;
      if (x.layers.test(I.layers)) {
        if (x.isGroup)
          B = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(I);
        else if (x.isLight)
          f.pushLight(x), x.castShadow && f.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || X.intersectsSprite(x)) {
            O && Ee.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Se);
            const ne = W.update(x), le = x.material;
            le.visible && m.push(x, ne, le, B, Ee.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || X.intersectsObject(x))) {
          const ne = W.update(x), le = x.material;
          if (O && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), Ee.copy(x.boundingSphere.center)) : (ne.boundingSphere === null && ne.computeBoundingSphere(), Ee.copy(ne.boundingSphere.center)), Ee.applyMatrix4(x.matrixWorld).applyMatrix4(Se)), Array.isArray(le)) {
            const fe = ne.groups;
            for (let Ae = 0, Re = fe.length; Ae < Re; Ae++) {
              const xe = fe[Ae], Fe = le[xe.materialIndex];
              Fe && Fe.visible && m.push(x, ne, Fe, B, Ee.z, xe);
            }
          } else le.visible && m.push(x, ne, le, B, Ee.z, null);
        }
      }
      const j = x.children;
      for (let ne = 0, le = j.length; ne < le; ne++)
        pt(j[ne], I, B, O);
    }
    function vt(x, I, B, O) {
      const U = x.opaque, j = x.transmissive, ne = x.transparent;
      f.setupLightsView(B), Q === !0 && Z.setGlobalState(S.clippingPlanes, B), O && ve.viewport(P.copy(O)), U.length > 0 && dt(U, I, B), j.length > 0 && dt(j, I, B), ne.length > 0 && dt(ne, I, B), ve.buffers.depth.setTest(!0), ve.buffers.depth.setMask(!0), ve.buffers.color.setMask(!0), ve.setPolygonOffset(!1);
    }
    function xt(x, I, B, O) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null)
        return;
      f.state.transmissionRenderTarget[O.id] === void 0 && (f.state.transmissionRenderTarget[O.id] = new WebGLRenderTarget(1, 1, {
        generateMipmaps: !0,
        type: De.has("EXT_color_buffer_half_float") || De.has("EXT_color_buffer_float") ? 1016 : 1009,
        minFilter: 1008,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: ColorManagement.workingColorSpace
      }));
      const j = f.state.transmissionRenderTarget[O.id], ne = O.viewport || P;
      j.setSize(ne.z * S.transmissionResolutionScale, ne.w * S.transmissionResolutionScale);
      const le = S.getRenderTarget();
      S.setRenderTarget(j), S.getClearColor(z), K = S.getClearAlpha(), K < 1 && S.setClearColor(16777215, 0.5), S.clear(), $e && ye.render(B);
      const fe = S.toneMapping;
      S.toneMapping = 0;
      const Ae = O.viewport;
      if (O.viewport !== void 0 && (O.viewport = void 0), f.setupLightsView(O), Q === !0 && Z.setGlobalState(S.clippingPlanes, O), dt(x, B, O), R.updateMultisampleRenderTarget(j), R.updateRenderTargetMipmap(j), De.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Re = !1;
        for (let xe = 0, Fe = I.length; xe < Fe; xe++) {
          const Ve = I[xe], je = Ve.object, Ke = Ve.geometry, Be = Ve.material, Me = Ve.group;
          if (Be.side === 2 && je.layers.test(O.layers)) {
            const Ze = Be.side;
            Be.side = 1, Be.needsUpdate = !0, Mt(je, B, O, Ke, Be, Me), Be.side = Ze, Be.needsUpdate = !0, Re = !0;
          }
        }
        Re === !0 && (R.updateMultisampleRenderTarget(j), R.updateRenderTargetMipmap(j));
      }
      S.setRenderTarget(le), S.setClearColor(z, K), Ae !== void 0 && (O.viewport = Ae), S.toneMapping = fe;
    }
    function dt(x, I, B) {
      const O = I.isScene === !0 ? I.overrideMaterial : null;
      for (let U = 0, j = x.length; U < j; U++) {
        const ne = x[U], le = ne.object, fe = ne.geometry, Ae = O === null ? ne.material : O, Re = ne.group;
        le.layers.test(B.layers) && Mt(le, I, B, fe, Ae, Re);
      }
    }
    function Mt(x, I, B, O, U, j) {
      x.onBeforeRender(S, I, B, O, U, j), x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), U.onBeforeRender(S, I, B, O, x, j), U.transparent === !0 && U.side === 2 && U.forceSinglePass === !1 ? (U.side = 1, U.needsUpdate = !0, S.renderBufferDirect(B, I, O, U, x, j), U.side = 0, U.needsUpdate = !0, S.renderBufferDirect(B, I, O, U, x, j), U.side = 2) : S.renderBufferDirect(B, I, O, U, x, j), x.onAfterRender(S, I, B, O, U, j);
    }
    function ft(x, I, B) {
      I.isScene !== !0 && (I = Ye);
      const O = _e.get(x), U = f.state.lights, j = f.state.shadowsArray, ne = U.state.version, le = me.getParameters(x, U.state, j, I, B), fe = me.getProgramCacheKey(le);
      let Ae = O.programs;
      O.environment = x.isMeshStandardMaterial ? I.environment : null, O.fog = I.fog, O.envMap = (x.isMeshStandardMaterial ? F : v).get(x.envMap || O.environment), O.envMapRotation = O.environment !== null && x.envMap === null ? I.environmentRotation : x.envMapRotation, Ae === void 0 && (x.addEventListener("dispose", Ce), Ae = /* @__PURE__ */ new Map(), O.programs = Ae);
      let Re = Ae.get(fe);
      if (Re !== void 0) {
        if (O.currentProgram === Re && O.lightsStateVersion === ne)
          return yt(x, le), Re;
      } else
        le.uniforms = me.getUniforms(x), x.onBeforeCompile(le, S), Re = me.acquireProgram(le, fe), Ae.set(fe, Re), O.uniforms = le.uniforms;
      const xe = O.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (xe.clippingPlanes = Z.uniform), yt(x, le), O.needsLights = At(x), O.lightsStateVersion = ne, O.needsLights && (xe.ambientLightColor.value = U.state.ambient, xe.lightProbe.value = U.state.probe, xe.directionalLights.value = U.state.directional, xe.directionalLightShadows.value = U.state.directionalShadow, xe.spotLights.value = U.state.spot, xe.spotLightShadows.value = U.state.spotShadow, xe.rectAreaLights.value = U.state.rectArea, xe.ltc_1.value = U.state.rectAreaLTC1, xe.ltc_2.value = U.state.rectAreaLTC2, xe.pointLights.value = U.state.point, xe.pointLightShadows.value = U.state.pointShadow, xe.hemisphereLights.value = U.state.hemi, xe.directionalShadowMap.value = U.state.directionalShadowMap, xe.directionalShadowMatrix.value = U.state.directionalShadowMatrix, xe.spotShadowMap.value = U.state.spotShadowMap, xe.spotLightMatrix.value = U.state.spotLightMatrix, xe.spotLightMap.value = U.state.spotLightMap, xe.pointShadowMap.value = U.state.pointShadowMap, xe.pointShadowMatrix.value = U.state.pointShadowMatrix), O.currentProgram = Re, O.uniformsList = null, Re;
    }
    function St(x) {
      if (x.uniformsList === null) {
        const I = x.currentProgram.getUniforms();
        x.uniformsList = WebGLUniforms.seqWithValue(I.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function yt(x, I) {
      const B = _e.get(x);
      B.outputColorSpace = I.outputColorSpace, B.batching = I.batching, B.batchingColor = I.batchingColor, B.instancing = I.instancing, B.instancingColor = I.instancingColor, B.instancingMorph = I.instancingMorph, B.skinning = I.skinning, B.morphTargets = I.morphTargets, B.morphNormals = I.morphNormals, B.morphColors = I.morphColors, B.morphTargetsCount = I.morphTargetsCount, B.numClippingPlanes = I.numClippingPlanes, B.numIntersection = I.numClipIntersection, B.vertexAlphas = I.vertexAlphas, B.vertexTangents = I.vertexTangents, B.toneMapping = I.toneMapping;
    }
    function Et(x, I, B, O, U) {
      I.isScene !== !0 && (I = Ye), R.resetTextureUnits();
      const j = I.fog, ne = O.isMeshStandardMaterial ? I.environment : null, le = w === null ? S.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : LinearSRGBColorSpace, fe = (O.isMeshStandardMaterial ? F : v).get(O.envMap || ne), Ae = O.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, Re = !!B.attributes.tangent && (!!O.normalMap || O.anisotropy > 0), xe = !!B.morphAttributes.position, Fe = !!B.morphAttributes.normal, Ve = !!B.morphAttributes.color;
      let je = 0;
      O.toneMapped && (w === null || w.isXRRenderTarget === !0) && (je = S.toneMapping);
      const Ke = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Be = Ke !== void 0 ? Ke.length : 0, Me = _e.get(O), Ze = f.state.lights;
      if (Q === !0 && (pe === !0 || x !== M)) {
        const Qe = x === M && O.id === E;
        Z.setState(O, x, Qe);
      }
      let Ge = !1;
      O.version === Me.__version ? (Me.needsLights && Me.lightsStateVersion !== Ze.state.version || Me.outputColorSpace !== le || U.isBatchedMesh && Me.batching === !1 || !U.isBatchedMesh && Me.batching === !0 || U.isBatchedMesh && Me.batchingColor === !0 && U.colorTexture === null || U.isBatchedMesh && Me.batchingColor === !1 && U.colorTexture !== null || U.isInstancedMesh && Me.instancing === !1 || !U.isInstancedMesh && Me.instancing === !0 || U.isSkinnedMesh && Me.skinning === !1 || !U.isSkinnedMesh && Me.skinning === !0 || U.isInstancedMesh && Me.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && Me.instancingColor === !1 && U.instanceColor !== null || U.isInstancedMesh && Me.instancingMorph === !0 && U.morphTexture === null || U.isInstancedMesh && Me.instancingMorph === !1 && U.morphTexture !== null || Me.envMap !== fe || O.fog === !0 && Me.fog !== j || Me.numClippingPlanes !== void 0 && (Me.numClippingPlanes !== Z.numPlanes || Me.numIntersection !== Z.numIntersection) || Me.vertexAlphas !== Ae || Me.vertexTangents !== Re || Me.morphTargets !== xe || Me.morphNormals !== Fe || Me.morphColors !== Ve || Me.toneMapping !== je || Me.morphTargetsCount !== Be) && (Ge = !0) : (Ge = !0, Me.__version = O.version);
      let at = Me.currentProgram;
      Ge === !0 && (at = ft(O, I, U));
      let ut = !1, tt = !1, ht = !1;
      const Xe = at.getUniforms(), it = Me.uniforms;
      if (ve.useProgram(at.program) && (ut = !0, tt = !0, ht = !0), O.id !== E && (E = O.id, tt = !0), ut || M !== x) {
        ve.buffers.depth.getReversed() ? (re.copy(x.projectionMatrix), toNormalizedProjectionMatrix(re), toReversedProjectionMatrix(re), Xe.setValue(L, "projectionMatrix", re)) : Xe.setValue(L, "projectionMatrix", x.projectionMatrix), Xe.setValue(L, "viewMatrix", x.matrixWorldInverse);
        const et = Xe.map.cameraPosition;
        et !== void 0 && et.setValue(L, Oe.setFromMatrixPosition(x.matrixWorld)), Ie.logarithmicDepthBuffer && Xe.setValue(
          L,
          "logDepthBufFC",
          2 / (Math.log(x.far + 1) / Math.LN2)
        ), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && Xe.setValue(L, "isOrthographic", x.isOrthographicCamera === !0), M !== x && (M = x, tt = !0, ht = !0);
      }
      if (U.isSkinnedMesh) {
        Xe.setOptional(L, U, "bindMatrix"), Xe.setOptional(L, U, "bindMatrixInverse");
        const Qe = U.skeleton;
        Qe && (Qe.boneTexture === null && Qe.computeBoneTexture(), Xe.setValue(L, "boneTexture", Qe.boneTexture, R));
      }
      U.isBatchedMesh && (Xe.setOptional(L, U, "batchingTexture"), Xe.setValue(L, "batchingTexture", U._matricesTexture, R), Xe.setOptional(L, U, "batchingIdTexture"), Xe.setValue(L, "batchingIdTexture", U._indirectTexture, R), Xe.setOptional(L, U, "batchingColorTexture"), U._colorsTexture !== null && Xe.setValue(L, "batchingColorTexture", U._colorsTexture, R));
      const rt = B.morphAttributes;
      if ((rt.position !== void 0 || rt.normal !== void 0 || rt.color !== void 0) && Te.update(U, B, at), (tt || Me.receiveShadow !== U.receiveShadow) && (Me.receiveShadow = U.receiveShadow, Xe.setValue(L, "receiveShadow", U.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (it.envMap.value = fe, it.flipEnvMap.value = fe.isCubeTexture && fe.isRenderTargetTexture === !1 ? -1 : 1), O.isMeshStandardMaterial && O.envMap === null && I.environment !== null && (it.envMapIntensity.value = I.environmentIntensity), tt && (Xe.setValue(L, "toneMappingExposure", S.toneMappingExposure), Me.needsLights && Tt(it, ht), j && O.fog === !0 && se.refreshFogUniforms(it, j), se.refreshMaterialUniforms(it, O, k, J, f.state.transmissionRenderTarget[x.id]), WebGLUniforms.upload(L, St(Me), it, R)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (WebGLUniforms.upload(L, St(Me), it, R), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && Xe.setValue(L, "center", U.center), Xe.setValue(L, "modelViewMatrix", U.modelViewMatrix), Xe.setValue(L, "normalMatrix", U.normalMatrix), Xe.setValue(L, "modelMatrix", U.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) {
        const Qe = O.uniformsGroups;
        for (let et = 0, mt = Qe.length; et < mt; et++) {
          const ct = Qe[et];
          D.update(ct, at), D.bind(ct, at);
        }
      }
      return at;
    }
    function Tt(x, I) {
      x.ambientLightColor.needsUpdate = I, x.lightProbe.needsUpdate = I, x.directionalLights.needsUpdate = I, x.directionalLightShadows.needsUpdate = I, x.pointLights.needsUpdate = I, x.pointLightShadows.needsUpdate = I, x.spotLights.needsUpdate = I, x.spotLightShadows.needsUpdate = I, x.rectAreaLights.needsUpdate = I, x.hemisphereLights.needsUpdate = I;
    }
    function At(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return A;
    }, this.getActiveMipmapLevel = function() {
      return b;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(x, I, B) {
      _e.get(x.texture).__webglTexture = I, _e.get(x.depthTexture).__webglTexture = B;
      const O = _e.get(x);
      O.__hasExternalTextures = !0, O.__autoAllocateDepthBuffer = B === void 0, O.__autoAllocateDepthBuffer || De.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), O.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(x, I) {
      const B = _e.get(x);
      B.__webglFramebuffer = I, B.__useDefaultFramebuffer = I === void 0;
    };
    const bt = L.createFramebuffer();
    this.setRenderTarget = function(x, I = 0, B = 0) {
      w = x, A = I, b = B;
      let O = !0, U = null, j = !1, ne = !1;
      if (x) {
        const fe = _e.get(x);
        if (fe.__useDefaultFramebuffer !== void 0)
          ve.bindFramebuffer(L.FRAMEBUFFER, null), O = !1;
        else if (fe.__webglFramebuffer === void 0)
          R.setupRenderTarget(x);
        else if (fe.__hasExternalTextures)
          R.rebindTextures(x, _e.get(x.texture).__webglTexture, _e.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const xe = x.depthTexture;
          if (fe.__boundDepthTexture !== xe) {
            if (xe !== null && _e.has(xe) && (x.width !== xe.image.width || x.height !== xe.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            R.setupDepthRenderbuffer(x);
          }
        }
        const Ae = x.texture;
        (Ae.isData3DTexture || Ae.isDataArrayTexture || Ae.isCompressedArrayTexture) && (ne = !0);
        const Re = _e.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Re[I]) ? U = Re[I][B] : U = Re[I], j = !0) : x.samples > 0 && R.useMultisampledRTT(x) === !1 ? U = _e.get(x).__webglMultisampledFramebuffer : Array.isArray(Re) ? U = Re[B] : U = Re, P.copy(x.viewport), V.copy(x.scissor), N = x.scissorTest;
      } else
        P.copy(ge).multiplyScalar(k).floor(), V.copy(Le).multiplyScalar(k).floor(), N = ze;
      if (B !== 0 && (U = bt), ve.bindFramebuffer(L.FRAMEBUFFER, U) && O && ve.drawBuffers(x, U), ve.viewport(P), ve.scissor(V), ve.setScissorTest(N), j) {
        const fe = _e.get(x.texture);
        L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_CUBE_MAP_POSITIVE_X + I, fe.__webglTexture, B);
      } else if (ne) {
        const fe = _e.get(x.texture), Ae = I;
        L.framebufferTextureLayer(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, fe.__webglTexture, B, Ae);
      } else if (x !== null && B !== 0) {
        const fe = _e.get(x.texture);
        L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, fe.__webglTexture, B);
      }
      E = -1;
    }, this.readRenderTargetPixels = function(x, I, B, O, U, j, ne) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let le = _e.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && ne !== void 0 && (le = le[ne]), le) {
        ve.bindFramebuffer(L.FRAMEBUFFER, le);
        try {
          const fe = x.texture, Ae = fe.format, Re = fe.type;
          if (!Ie.textureFormatReadable(Ae)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ie.textureTypeReadable(Re)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= x.width - O && B >= 0 && B <= x.height - U && L.readPixels(I, B, O, U, we.convert(Ae), we.convert(Re), j);
        } finally {
          const fe = w !== null ? _e.get(w).__webglFramebuffer : null;
          ve.bindFramebuffer(L.FRAMEBUFFER, fe);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, I, B, O, U, j, ne) {
      if (!(x && x.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let le = _e.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && ne !== void 0 && (le = le[ne]), le) {
        const fe = x.texture, Ae = fe.format, Re = fe.type;
        if (!Ie.textureFormatReadable(Ae))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Ie.textureTypeReadable(Re))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (I >= 0 && I <= x.width - O && B >= 0 && B <= x.height - U) {
          ve.bindFramebuffer(L.FRAMEBUFFER, le);
          const xe = L.createBuffer();
          L.bindBuffer(L.PIXEL_PACK_BUFFER, xe), L.bufferData(L.PIXEL_PACK_BUFFER, j.byteLength, L.STREAM_READ), L.readPixels(I, B, O, U, we.convert(Ae), we.convert(Re), 0);
          const Fe = w !== null ? _e.get(w).__webglFramebuffer : null;
          ve.bindFramebuffer(L.FRAMEBUFFER, Fe);
          const Ve = L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return L.flush(), await probeAsync(L, Ve, 4), L.bindBuffer(L.PIXEL_PACK_BUFFER, xe), L.getBufferSubData(L.PIXEL_PACK_BUFFER, 0, j), L.deleteBuffer(xe), L.deleteSync(Ve), j;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(x, I = null, B = 0) {
      x.isTexture !== !0 && (warnOnce("WebGLRenderer: copyFramebufferToTexture function signature has changed."), I = arguments[0] || null, x = arguments[1]);
      const O = Math.pow(2, -B), U = Math.floor(x.image.width * O), j = Math.floor(x.image.height * O), ne = I !== null ? I.x : 0, le = I !== null ? I.y : 0;
      R.setTexture2D(x, 0), L.copyTexSubImage2D(L.TEXTURE_2D, B, 0, 0, ne, le, U, j), ve.unbindTexture();
    };
    const Rt = L.createFramebuffer(), Ct = L.createFramebuffer();
    this.copyTextureToTexture = function(x, I, B = null, O = null, U = 0, j = null) {
      x.isTexture !== !0 && (warnOnce("WebGLRenderer: copyTextureToTexture function signature has changed."), O = arguments[0] || null, x = arguments[1], I = arguments[2], j = arguments[3] || 0, B = null), j === null && (U !== 0 ? (warnOnce("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), j = U, U = 0) : j = 0);
      let ne, le, fe, Ae, Re, xe, Fe, Ve, je;
      const Ke = x.isCompressedTexture ? x.mipmaps[j] : x.image;
      if (B !== null)
        ne = B.max.x - B.min.x, le = B.max.y - B.min.y, fe = B.isBox3 ? B.max.z - B.min.z : 1, Ae = B.min.x, Re = B.min.y, xe = B.isBox3 ? B.min.z : 0;
      else {
        const rt = Math.pow(2, -U);
        ne = Math.floor(Ke.width * rt), le = Math.floor(Ke.height * rt), x.isDataArrayTexture ? fe = Ke.depth : x.isData3DTexture ? fe = Math.floor(Ke.depth * rt) : fe = 1, Ae = 0, Re = 0, xe = 0;
      }
      O !== null ? (Fe = O.x, Ve = O.y, je = O.z) : (Fe = 0, Ve = 0, je = 0);
      const Be = we.convert(I.format), Me = we.convert(I.type);
      let Ze;
      I.isData3DTexture ? (R.setTexture3D(I, 0), Ze = L.TEXTURE_3D) : I.isDataArrayTexture || I.isCompressedArrayTexture ? (R.setTexture2DArray(I, 0), Ze = L.TEXTURE_2D_ARRAY) : (R.setTexture2D(I, 0), Ze = L.TEXTURE_2D), L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, I.flipY), L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), L.pixelStorei(L.UNPACK_ALIGNMENT, I.unpackAlignment);
      const Ge = L.getParameter(L.UNPACK_ROW_LENGTH), at = L.getParameter(L.UNPACK_IMAGE_HEIGHT), ut = L.getParameter(L.UNPACK_SKIP_PIXELS), tt = L.getParameter(L.UNPACK_SKIP_ROWS), ht = L.getParameter(L.UNPACK_SKIP_IMAGES);
      L.pixelStorei(L.UNPACK_ROW_LENGTH, Ke.width), L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, Ke.height), L.pixelStorei(L.UNPACK_SKIP_PIXELS, Ae), L.pixelStorei(L.UNPACK_SKIP_ROWS, Re), L.pixelStorei(L.UNPACK_SKIP_IMAGES, xe);
      const Xe = x.isDataArrayTexture || x.isData3DTexture, it = I.isDataArrayTexture || I.isData3DTexture;
      if (x.isDepthTexture) {
        const rt = _e.get(x), Qe = _e.get(I), et = _e.get(rt.__renderTarget), mt = _e.get(Qe.__renderTarget);
        ve.bindFramebuffer(L.READ_FRAMEBUFFER, et.__webglFramebuffer), ve.bindFramebuffer(L.DRAW_FRAMEBUFFER, mt.__webglFramebuffer);
        for (let ct = 0; ct < fe; ct++)
          Xe && (L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, _e.get(x).__webglTexture, U, xe + ct), L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, _e.get(I).__webglTexture, j, je + ct)), L.blitFramebuffer(Ae, Re, ne, le, Fe, Ve, ne, le, L.DEPTH_BUFFER_BIT, L.NEAREST);
        ve.bindFramebuffer(L.READ_FRAMEBUFFER, null), ve.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
      } else if (U !== 0 || x.isRenderTargetTexture || _e.has(x)) {
        const rt = _e.get(x), Qe = _e.get(I);
        ve.bindFramebuffer(L.READ_FRAMEBUFFER, Rt), ve.bindFramebuffer(L.DRAW_FRAMEBUFFER, Ct);
        for (let et = 0; et < fe; et++)
          Xe ? L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, rt.__webglTexture, U, xe + et) : L.framebufferTexture2D(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, rt.__webglTexture, U), it ? L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, Qe.__webglTexture, j, je + et) : L.framebufferTexture2D(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, Qe.__webglTexture, j), U !== 0 ? L.blitFramebuffer(Ae, Re, ne, le, Fe, Ve, ne, le, L.COLOR_BUFFER_BIT, L.NEAREST) : it ? L.copyTexSubImage3D(Ze, j, Fe, Ve, je + et, Ae, Re, ne, le) : L.copyTexSubImage2D(Ze, j, Fe, Ve, Ae, Re, ne, le);
        ve.bindFramebuffer(L.READ_FRAMEBUFFER, null), ve.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
      } else
        it ? x.isDataTexture || x.isData3DTexture ? L.texSubImage3D(Ze, j, Fe, Ve, je, ne, le, fe, Be, Me, Ke.data) : I.isCompressedArrayTexture ? L.compressedTexSubImage3D(Ze, j, Fe, Ve, je, ne, le, fe, Be, Ke.data) : L.texSubImage3D(Ze, j, Fe, Ve, je, ne, le, fe, Be, Me, Ke) : x.isDataTexture ? L.texSubImage2D(L.TEXTURE_2D, j, Fe, Ve, ne, le, Be, Me, Ke.data) : x.isCompressedTexture ? L.compressedTexSubImage2D(L.TEXTURE_2D, j, Fe, Ve, Ke.width, Ke.height, Be, Ke.data) : L.texSubImage2D(L.TEXTURE_2D, j, Fe, Ve, ne, le, Be, Me, Ke);
      L.pixelStorei(L.UNPACK_ROW_LENGTH, Ge), L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, at), L.pixelStorei(L.UNPACK_SKIP_PIXELS, ut), L.pixelStorei(L.UNPACK_SKIP_ROWS, tt), L.pixelStorei(L.UNPACK_SKIP_IMAGES, ht), j === 0 && I.generateMipmaps && L.generateMipmap(Ze), ve.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, I, B = null, O = null, U = 0) {
      return x.isTexture !== !0 && (warnOnce("WebGLRenderer: copyTextureToTexture3D function signature has changed."), B = arguments[0] || null, O = arguments[1] || null, x = arguments[2], I = arguments[3], U = arguments[4] || 0), warnOnce('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(x, I, B, O, U);
    }, this.initRenderTarget = function(x) {
      _e.get(x).__webglFramebuffer === void 0 && R.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? R.setTextureCube(x, 0) : x.isData3DTexture ? R.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? R.setTexture2DArray(x, 0) : R.setTexture2D(x, 0), ve.unbindTexture();
    }, this.resetState = function() {
      A = 0, b = 0, w = null, ve.reset(), He.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = ColorManagement._getDrawingBufferColorSpace(e), t.unpackColorSpace = ColorManagement._getUnpackColorSpace();
  }
}
function toTrianglesDrawMode(r, e) {
  if (e === 0)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === 2 || e === 1) {
    let t = r.getIndex();
    if (t === null) {
      const a = [], o = r.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++)
          a.push(l);
        r.setIndex(a), t = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const n = t.count - 2, i = [];
    if (e === 2)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
class GLTFLoader extends Loader {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new GLTFMaterialsClearcoatExtension(t);
    }), this.register(function(t) {
      return new GLTFMaterialsDispersionExtension(t);
    }), this.register(function(t) {
      return new GLTFTextureBasisUExtension(t);
    }), this.register(function(t) {
      return new GLTFTextureWebPExtension(t);
    }), this.register(function(t) {
      return new GLTFTextureAVIFExtension(t);
    }), this.register(function(t) {
      return new GLTFMaterialsSheenExtension(t);
    }), this.register(function(t) {
      return new GLTFMaterialsTransmissionExtension(t);
    }), this.register(function(t) {
      return new GLTFMaterialsVolumeExtension(t);
    }), this.register(function(t) {
      return new GLTFMaterialsIorExtension(t);
    }), this.register(function(t) {
      return new GLTFMaterialsEmissiveStrengthExtension(t);
    }), this.register(function(t) {
      return new GLTFMaterialsSpecularExtension(t);
    }), this.register(function(t) {
      return new GLTFMaterialsIridescenceExtension(t);
    }), this.register(function(t) {
      return new GLTFMaterialsAnisotropyExtension(t);
    }), this.register(function(t) {
      return new GLTFMaterialsBumpExtension(t);
    }), this.register(function(t) {
      return new GLTFLightsExtension(t);
    }), this.register(function(t) {
      return new GLTFMeshoptCompression(t);
    }), this.register(function(t) {
      return new GLTFMeshGpuInstancing(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    if (this.resourcePath !== "")
      a = this.resourcePath;
    else if (this.path !== "") {
      const c = LoaderUtils.extractUrlBase(e);
      a = LoaderUtils.resolveURL(c, this.path);
    } else
      a = LoaderUtils.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }, l = new FileLoader(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        s.parse(c, a, function(u) {
          t(u), s.manager.itemEnd(e);
        }, o);
      } catch (u) {
        o(u);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const a = {}, o = {}, l = new TextDecoder();
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === BINARY_EXTENSION_HEADER_MAGIC) {
        try {
          a[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(e);
        } catch (h) {
          i && i(h);
          return;
        }
        s = JSON.parse(a[EXTENSIONS.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(l.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new GLTFParser(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const h = this.pluginCallbacks[u](c);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[h.name] = h, a[h.name] = !0;
    }
    if (s.extensionsUsed)
      for (let u = 0; u < s.extensionsUsed.length; ++u) {
        const h = s.extensionsUsed[u], d = s.extensionsRequired || [];
        switch (h) {
          case EXTENSIONS.KHR_MATERIALS_UNLIT:
            a[h] = new GLTFMaterialsUnlitExtension();
            break;
          case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
            a[h] = new GLTFDracoMeshCompressionExtension(s, this.dracoLoader);
            break;
          case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
            a[h] = new GLTFTextureTransformExtension();
            break;
          case EXTENSIONS.KHR_MESH_QUANTIZATION:
            a[h] = new GLTFMeshQuantizationExtension();
            break;
          default:
            d.indexOf(h) >= 0 && o[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    c.setExtensions(a), c.setPlugins(o), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function GLTFRegistry() {
  let r = {};
  return {
    get: function(e) {
      return r[e];
    },
    add: function(e, t) {
      r[e] = t;
    },
    remove: function(e) {
      delete r[e];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const EXTENSIONS = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class GLTFLightsExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json, l = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new Color(16777215);
    l.color !== void 0 && u.setRGB(l.color[0], l.color[1], l.color[2], LinearSRGBColorSpace);
    const h = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new DirectionalLight(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new PointLight(u), c.distance = h;
        break;
      case "spot":
        c = new SpotLight(u), c.distance = h, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), assignExtrasToUserData(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(l) {
      return n._getNodeRef(t.cache, o, l);
    });
  }
}
class GLTFMaterialsUnlitExtension {
  constructor() {
    this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return MeshBasicMaterial;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Color(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const a = s.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], LinearSRGBColorSpace), e.opacity = a[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, SRGBColorSpace));
    }
    return Promise.all(i);
  }
}
class GLTFMaterialsEmissiveStrengthExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class GLTFMaterialsClearcoatExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Vector2(o, o);
    }
    return Promise.all(s);
  }
}
class GLTFMaterialsDispersionExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.dispersion = s.dispersion !== void 0 ? s.dispersion : 0, Promise.resolve();
  }
}
class GLTFMaterialsIridescenceExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class GLTFMaterialsSheenExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new Color(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], LinearSRGBColorSpace);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, SRGBColorSpace)), a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(s);
  }
}
class GLTFMaterialsTransmissionExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s);
  }
}
class GLTFMaterialsVolumeExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Color().setRGB(o[0], o[1], o[2], LinearSRGBColorSpace), Promise.all(s);
  }
}
class GLTFMaterialsIorExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class GLTFMaterialsSpecularExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Color().setRGB(o[0], o[1], o[2], LinearSRGBColorSpace), a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, SRGBColorSpace)), Promise.all(s);
  }
}
class GLTFMaterialsBumpExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && s.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(s);
  }
}
class GLTFMaterialsAnisotropyExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : MeshPhysicalMaterial;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(s);
  }
}
class GLTFTextureBasisUExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, a);
  }
}
class GLTFTextureWebPExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class GLTFTextureAVIFExtension {
  constructor(e) {
    this.parser = e, this.name = EXTENSIONS.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class GLTFMeshoptCompression {
  constructor(e) {
    this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(o) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, u = i.count, h = i.byteStride, d = new Uint8Array(o, l, c);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(u, h, d, i.mode, i.filter).then(function(p) {
          return p.buffer;
        }) : a.ready.then(function() {
          const p = new ArrayBuffer(u * h);
          return a.decodeGltfBuffer(new Uint8Array(p), u, h, d, i.mode, i.filter), p;
        });
      });
    } else
      return null;
  }
}
class GLTFMeshGpuInstancing {
  constructor(e) {
    this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== WEBGL_CONSTANTS.TRIANGLES && c.mode !== WEBGL_CONSTANTS.TRIANGLE_STRIP && c.mode !== WEBGL_CONSTANTS.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in a)
      o.push(this.parser.getDependency("accessor", a[c]).then((u) => (l[c] = u, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const u = c.pop(), h = u.isGroup ? u.children : [u], d = c[0].count, p = [];
      for (const _ of h) {
        const g = new Matrix4(), m = new Vector3(), f = new Quaternion(), C = new Vector3(1, 1, 1), T = new InstancedMesh(_.geometry, _.material, d);
        for (let S = 0; S < d; S++)
          l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, S), l.ROTATION && f.fromBufferAttribute(l.ROTATION, S), l.SCALE && C.fromBufferAttribute(l.SCALE, S), T.setMatrixAt(S, g.compose(m, f, C));
        for (const S in l)
          if (S === "_COLOR_0") {
            const y = l[S];
            T.instanceColor = new InstancedBufferAttribute(y.array, y.itemSize, y.normalized);
          } else S !== "TRANSLATION" && S !== "ROTATION" && S !== "SCALE" && _.geometry.setAttribute(S, l[S]);
        Object3D.prototype.copy.call(T, _), this.parser.assignFinalMaterial(T), p.push(T);
      }
      return u.isGroup ? (u.clear(), u.add(...p), u) : p[0];
    }));
  }
}
const BINARY_EXTENSION_HEADER_MAGIC = "glTF", BINARY_EXTENSION_HEADER_LENGTH = 12, BINARY_EXTENSION_CHUNK_TYPES = { JSON: 1313821514, BIN: 5130562 };
class GLTFBinaryExtension {
  constructor(e) {
    this.name = EXTENSIONS.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, BINARY_EXTENSION_HEADER_LENGTH), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - BINARY_EXTENSION_HEADER_LENGTH, s = new DataView(e, BINARY_EXTENSION_HEADER_LENGTH);
    let a = 0;
    for (; a < i; ) {
      const o = s.getUint32(a, !0);
      a += 4;
      const l = s.getUint32(a, !0);
      if (a += 4, l === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
        const c = new Uint8Array(e, BINARY_EXTENSION_HEADER_LENGTH + a, o);
        this.content = n.decode(c);
      } else if (l === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
        const c = BINARY_EXTENSION_HEADER_LENGTH + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class GLTFDracoMeshCompressionExtension {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const u in a) {
      const h = ATTRIBUTES[u] || u.toLowerCase();
      o[h] = a[u];
    }
    for (const u in e.attributes) {
      const h = ATTRIBUTES[u] || u.toLowerCase();
      if (a[u] !== void 0) {
        const d = n.accessors[e.attributes[u]], p = WEBGL_COMPONENT_TYPES[d.componentType];
        c[h] = p.name, l[h] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(u) {
      return new Promise(function(h, d) {
        i.decodeDracoFile(u, function(p) {
          for (const _ in p.attributes) {
            const g = p.attributes[_], m = l[_];
            m !== void 0 && (g.normalized = m);
          }
          h(p);
        }, o, c, LinearSRGBColorSpace, d);
      });
    });
  }
}
class GLTFTextureTransformExtension {
  constructor() {
    this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class GLTFMeshQuantizationExtension {
  constructor() {
    this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
  }
}
class GLTFCubicSplineInterpolant extends Interpolant {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let a = 0; a !== i; a++)
      t[a] = n[s + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, u = i - t, h = (n - t) / u, d = h * h, p = d * h, _ = e * c, g = _ - c, m = -2 * p + 3 * d, f = p - d, C = 1 - m, T = f - d + h;
    for (let S = 0; S !== o; S++) {
      const y = a[g + S + o], A = a[g + S + l] * u, b = a[_ + S + o], w = a[_ + S] * u;
      s[S] = C * y + T * A + m * b + f * w;
    }
    return s;
  }
}
const _q = new Quaternion();
class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return _q.fromArray(s).normalize().toArray(s), s;
  }
}
const WEBGL_CONSTANTS = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, WEBGL_COMPONENT_TYPES = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, WEBGL_FILTERS = {
  9728: 1003,
  9729: 1006,
  9984: 1004,
  9985: 1007,
  9986: 1005,
  9987: 1008
}, WEBGL_WRAPPINGS = {
  33071: 1001,
  33648: 1002,
  10497: 1e3
}, WEBGL_TYPE_SIZES = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, ATTRIBUTES = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, PATH_PROPERTIES = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, INTERPOLATION = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: 2301,
  STEP: 2300
}, ALPHA_MODES = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function createDefaultMaterial(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new MeshStandardMaterial({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: 0
  })), r.DefaultMaterial;
}
function addUnknownExtensionsToUserData(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function assignExtrasToUserData(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function addMorphTargets(r, e, t) {
  let n = !1, i = !1, s = !1;
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (h.POSITION !== void 0 && (n = !0), h.NORMAL !== void 0 && (i = !0), h.COLOR_0 !== void 0 && (s = !0), n && i && s) break;
  }
  if (!n && !i && !s) return Promise.resolve(r);
  const a = [], o = [], l = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (n) {
      const d = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : r.attributes.position;
      a.push(d);
    }
    if (i) {
      const d = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : r.attributes.normal;
      o.push(d);
    }
    if (s) {
      const d = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : r.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(l)
  ]).then(function(c) {
    const u = c[0], h = c[1], d = c[2];
    return n && (r.morphAttributes.position = u), i && (r.morphAttributes.normal = h), s && (r.morphAttributes.color = d), r.morphTargetsRelative = !0, r;
  });
}
function updateMorphTargets(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function createPrimitiveKey(r) {
  let e;
  const t = r.extensions && r.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + createAttributesKey(t.attributes) : e = r.indices + ":" + createAttributesKey(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + createAttributesKey(r.targets[n]);
  return e;
}
function createAttributesKey(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function getNormalizedComponentScale(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function getImageURIMimeType(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : r.search(/\.ktx2($|\?)/i) > 0 || r.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const _identityMatrix = new Matrix4();
class GLTFParser {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new GLTFRegistry(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = -1, s = !1, a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const l = o.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, s = o.indexOf("Firefox") > -1, a = s ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || s && a < 98 ? this.textureLoader = new TextureLoader(this.options.manager) : this.textureLoader = new ImageBitmapLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(a) {
      const o = {
        scene: a[0][i.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return addUnknownExtensionsToUserData(s, o, i), assignExtrasToUserData(o, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(o);
      })).then(function() {
        for (const l of o.scenes)
          l.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i].joints;
      for (let o = 0, l = a.length; o < l; o++)
        e[a[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   *
   * @param {Object} cache
   * @param {Object3D} index
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /**
   * Returns a reference to a shared resource, cloning it if necessary.
   *
   * @param {Object} cache
   * @param {number} index
   * @param {Object} object
   * @return {Object}
   */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), s = (a, o) => {
      const l = this.associations.get(a);
      l != null && this.associations.set(o, l);
      for (const [c, u] of a.children.entries())
        s(u, o.children[c]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, a) {
      n.load(LoaderUtils.resolveURL(t.uri, i.path), s, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = WEBGL_TYPE_SIZES[i.type], o = WEBGL_COMPONENT_TYPES[i.componentType], l = i.normalized === !0, c = new o(i.count * a);
      return Promise.resolve(new BufferAttribute(c, a, l));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
      const o = a[0], l = WEBGL_TYPE_SIZES[i.type], c = WEBGL_COMPONENT_TYPES[i.componentType], u = c.BYTES_PER_ELEMENT, h = u * l, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, _ = i.normalized === !0;
      let g, m;
      if (p && p !== h) {
        const f = Math.floor(d / p), C = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count;
        let T = t.cache.get(C);
        T || (g = new c(o, f * p, i.count * p / u), T = new InterleavedBuffer(g, p / u), t.cache.add(C, T)), m = new InterleavedBufferAttribute(T, l, d % p / u, _);
      } else
        o === null ? g = new c(i.count * l) : g = new c(o, d, i.count * l), m = new BufferAttribute(g, l, _);
      if (i.sparse !== void 0) {
        const f = WEBGL_TYPE_SIZES.SCALAR, C = WEBGL_COMPONENT_TYPES[i.sparse.indices.componentType], T = i.sparse.indices.byteOffset || 0, S = i.sparse.values.byteOffset || 0, y = new C(a[1], T, i.sparse.count * f), A = new c(a[2], S, i.sparse.count * l);
        o !== null && (m = new BufferAttribute(m.array.slice(), m.itemSize, m.normalized)), m.normalized = !1;
        for (let b = 0, w = y.length; b < w; b++) {
          const E = y[b];
          if (m.setX(E, A[b * l]), l >= 2 && m.setY(E, A[b * l + 1]), l >= 3 && m.setZ(E, A[b * l + 2]), l >= 4 && m.setW(E, A[b * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = _;
      }
      return m;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, a = t.images[s];
    let o = this.textureLoader;
    if (a.uri) {
      const l = n.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, a = s.textures[e], o = s.images[t], l = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(u) {
      u.flipY = !1, u.name = a.name || o.name || "", u.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (u.name = o.uri);
      const d = (s.samplers || {})[a.sampler] || {};
      return u.magFilter = WEBGL_FILTERS[d.magFilter] || 1006, u.minFilter = WEBGL_FILTERS[d.minFilter] || 1008, u.wrapS = WEBGL_WRAPPINGS[d.wrapS] || 1e3, u.wrapT = WEBGL_WRAPPINGS[d.wrapT] || 1e3, u.generateMipmaps = !u.isCompressedTexture && u.minFilter !== 1003 && u.minFilter !== 1006, i.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let l = a.uri || "", c = !1;
    if (a.bufferView !== void 0)
      l = n.getDependency("bufferView", a.bufferView).then(function(h) {
        c = !0;
        const d = new Blob([h], { type: a.mimeType });
        return l = o.createObjectURL(d), l;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(l).then(function(h) {
      return new Promise(function(d, p) {
        let _ = d;
        t.isImageBitmapLoader === !0 && (_ = function(g) {
          const m = new Texture(g);
          m.needsUpdate = !0, d(m);
        }), t.load(LoaderUtils.resolveURL(h, s.path), _, void 0, p);
      });
    }).then(function(h) {
      return c === !0 && o.revokeObjectURL(l), assignExtrasToUserData(h, a), h.userData.mimeType = a.mimeType || getImageURIMimeType(a.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), h;
    });
    return this.sourceCache[e] = u, u;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   *
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @param {string} colorSpace
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), s.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const l = s.associations.get(a);
          a = s.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), s.associations.set(a, l);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new PointsMaterial(), Material.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new LineBasicMaterial(), Material.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(o, l)), n = l;
    }
    if (i || s || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let l = this.cache.get(o);
      l || (l = n.clone(), s && (l.vertexColors = !0), a && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return MeshStandardMaterial;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let a;
    const o = {}, l = s.extensions || {}, c = [];
    if (l[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
      const h = i[EXTENSIONS.KHR_MATERIALS_UNLIT];
      a = h.getMaterialType(), c.push(h.extendParams(o, s, t));
    } else {
      const h = s.pbrMetallicRoughness || {};
      if (o.color = new Color(1, 1, 1), o.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const d = h.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], LinearSRGBColorSpace), o.opacity = d[3];
      }
      h.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", h.baseColorTexture, SRGBColorSpace)), o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture))), a = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = 2);
    const u = s.alphaMode || ALPHA_MODES.OPAQUE;
    if (u === ALPHA_MODES.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, u === ALPHA_MODES.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && a !== MeshBasicMaterial && (c.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new Vector2(1, 1), s.normalTexture.scale !== void 0)) {
      const h = s.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    if (s.occlusionTexture !== void 0 && a !== MeshBasicMaterial && (c.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== MeshBasicMaterial) {
      const h = s.emissiveFactor;
      o.emissive = new Color().setRGB(h[0], h[1], h[2], LinearSRGBColorSpace);
    }
    return s.emissiveTexture !== void 0 && a !== MeshBasicMaterial && c.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, SRGBColorSpace)), Promise.all(c).then(function() {
      const h = new a(o);
      return s.name && (h.name = s.name), assignExtrasToUserData(h, s), t.associations.set(h, { materials: e }), s.extensions && addUnknownExtensionsToUserData(i, h, s), h;
    });
  }
  /**
   * When Object3D instances are targeted by animation, they need unique names.
   *
   * @param {string} originalName
   * @return {string}
   */
  createUniqueName(e) {
    const t = PropertyBinding.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(o) {
      return n[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return addPrimitiveAttributes(l, o, t);
      });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], u = createPrimitiveKey(c), h = i[u];
      if (h)
        a.push(h.promise);
      else {
        let d;
        c.extensions && c.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION] ? d = s(c) : d = addPrimitiveAttributes(new BufferGeometry(), c, t), i[u] = { primitive: c, promise: d }, a.push(d);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], a = s.primitives, o = [];
    for (let l = 0, c = a.length; l < c; l++) {
      const u = a[l].material === void 0 ? createDefaultMaterial(this.cache) : this.getDependency("material", a[l].material);
      o.push(u);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], h = [];
      for (let p = 0, _ = u.length; p < _; p++) {
        const g = u[p], m = a[p];
        let f;
        const C = c[p];
        if (m.mode === WEBGL_CONSTANTS.TRIANGLES || m.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || m.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || m.mode === void 0)
          f = s.isSkinnedMesh === !0 ? new SkinnedMesh(g, C) : new Mesh(g, C), f.isSkinnedMesh === !0 && f.normalizeSkinWeights(), m.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ? f.geometry = toTrianglesDrawMode(f.geometry, 1) : m.mode === WEBGL_CONSTANTS.TRIANGLE_FAN && (f.geometry = toTrianglesDrawMode(f.geometry, 2));
        else if (m.mode === WEBGL_CONSTANTS.LINES)
          f = new LineSegments(g, C);
        else if (m.mode === WEBGL_CONSTANTS.LINE_STRIP)
          f = new Line(g, C);
        else if (m.mode === WEBGL_CONSTANTS.LINE_LOOP)
          f = new LineLoop(g, C);
        else if (m.mode === WEBGL_CONSTANTS.POINTS)
          f = new Points(g, C);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(f.geometry.morphAttributes).length > 0 && updateMorphTargets(f, s), f.name = t.createUniqueName(s.name || "mesh_" + e), assignExtrasToUserData(f, s), m.extensions && addUnknownExtensionsToUserData(i, f, m), t.assignFinalMaterial(f), h.push(f);
      }
      for (let p = 0, _ = h.length; p < _; p++)
        t.associations.set(h[p], {
          meshes: e,
          primitives: p
        });
      if (h.length === 1)
        return s.extensions && addUnknownExtensionsToUserData(i, h[0], s), h[0];
      const d = new Group();
      s.extensions && addUnknownExtensionsToUserData(i, d, s), t.associations.set(d, { meshes: e });
      for (let p = 0, _ = h.length; p < _; p++)
        d.add(h[p]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new PerspectiveCamera(MathUtils.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new OrthographicCamera(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), assignExtrasToUserData(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), a = i, o = [], l = [];
      for (let c = 0, u = a.length; c < u; c++) {
        const h = a[c];
        if (h) {
          o.push(h);
          const d = new Matrix4();
          s !== null && d.fromArray(s.array, c * 16), l.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Skeleton(o, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, a = [], o = [], l = [], c = [], u = [];
    for (let h = 0, d = i.channels.length; h < d; h++) {
      const p = i.channels[h], _ = i.samplers[p.sampler], g = p.target, m = g.node, f = i.parameters !== void 0 ? i.parameters[_.input] : _.input, C = i.parameters !== void 0 ? i.parameters[_.output] : _.output;
      g.node !== void 0 && (a.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", f)), l.push(this.getDependency("accessor", C)), c.push(_), u.push(g));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c),
      Promise.all(u)
    ]).then(function(h) {
      const d = h[0], p = h[1], _ = h[2], g = h[3], m = h[4], f = [];
      for (let C = 0, T = d.length; C < T; C++) {
        const S = d[C], y = p[C], A = _[C], b = g[C], w = m[C];
        if (S === void 0) continue;
        S.updateMatrix && S.updateMatrix();
        const E = n._createAnimationTracks(S, y, A, b, w);
        if (E)
          for (let M = 0; M < E.length; M++)
            f.push(E[M]);
      }
      return new AnimationClip(s, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const a = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            o.morphTargetInfluences[l] = i.weights[l];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let c = 0, u = o.length; c < u; c++)
      a.push(n.getDependency("node", o[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      s,
      Promise.all(a),
      l
    ]).then(function(c) {
      const u = c[0], h = c[1], d = c[2];
      d !== null && u.traverse(function(p) {
        p.isSkinnedMesh && p.bind(d, _identityMatrix);
      });
      for (let p = 0, _ = h.length; p < _; p++)
        u.add(h[p]);
      return u;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const s = t.nodes[e], a = s.name ? i.createUniqueName(s.name) : "", o = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && o.push(l), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, s.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      o.push(c);
    }), this.nodeCache[e] = Promise.all(o).then(function(c) {
      let u;
      if (s.isBone === !0 ? u = new Bone() : c.length > 1 ? u = new Group() : c.length === 1 ? u = c[0] : u = new Object3D(), u !== c[0])
        for (let h = 0, d = c.length; h < d; h++)
          u.add(c[h]);
      if (s.name && (u.userData.name = s.name, u.name = a), assignExtrasToUserData(u, s), s.extensions && addUnknownExtensionsToUserData(n, u, s), s.matrix !== void 0) {
        const h = new Matrix4();
        h.fromArray(s.matrix), u.applyMatrix4(h);
      } else
        s.translation !== void 0 && u.position.fromArray(s.translation), s.rotation !== void 0 && u.quaternion.fromArray(s.rotation), s.scale !== void 0 && u.scale.fromArray(s.scale);
      return i.associations.has(u) || i.associations.set(u, {}), i.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new Group();
    n.name && (s.name = i.createUniqueName(n.name)), assignExtrasToUserData(s, n), n.extensions && addUnknownExtensionsToUserData(t, s, n);
    const a = n.nodes || [], o = [];
    for (let l = 0, c = a.length; l < c; l++)
      o.push(i.getDependency("node", a[l]));
    return Promise.all(o).then(function(l) {
      for (let u = 0, h = l.length; u < h; u++)
        s.add(l[u]);
      const c = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [d, p] of i.associations)
          (d instanceof Material || d instanceof Texture) && h.set(d, p);
        return u.traverse((d) => {
          const p = i.associations.get(d);
          p != null && h.set(d, p);
        }), h;
      };
      return i.associations = c(s), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const a = [], o = e.name ? e.name : e.uuid, l = [];
    PATH_PROPERTIES[s.path] === PATH_PROPERTIES.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(o);
    let c;
    switch (PATH_PROPERTIES[s.path]) {
      case PATH_PROPERTIES.weights:
        c = NumberKeyframeTrack;
        break;
      case PATH_PROPERTIES.rotation:
        c = QuaternionKeyframeTrack;
        break;
      case PATH_PROPERTIES.position:
      case PATH_PROPERTIES.scale:
        c = VectorKeyframeTrack;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = NumberKeyframeTrack;
            break;
          case 2:
          case 3:
          default:
            c = VectorKeyframeTrack;
            break;
        }
        break;
    }
    const u = i.interpolation !== void 0 ? INTERPOLATION[i.interpolation] : 2301, h = this._getArrayFromAccessor(n);
    for (let d = 0, p = l.length; d < p; d++) {
      const _ = new c(
        l[d] + "." + PATH_PROPERTIES[s.path],
        t.array,
        h,
        u
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(_), a.push(_);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = getNormalizedComponentScale(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, a = t.length; s < a; s++)
        i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof QuaternionKeyframeTrack ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function computeBounds(r, e, t) {
  const n = e.attributes, i = new Box3();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new Vector3(l[0], l[1], l[2]),
        new Vector3(c[0], c[1], c[2])
      ), o.normalized) {
        const u = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[o.componentType]);
        i.min.multiplyScalar(u), i.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new Vector3(), l = new Vector3();
    for (let c = 0, u = s.length; c < u; c++) {
      const h = s[c];
      if (h.POSITION !== void 0) {
        const d = t.json.accessors[h.POSITION], p = d.min, _ = d.max;
        if (p !== void 0 && _ !== void 0) {
          if (l.setX(Math.max(Math.abs(p[0]), Math.abs(_[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(_[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(_[2]))), d.normalized) {
            const g = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[d.componentType]);
            l.multiplyScalar(g);
          }
          o.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  r.boundingBox = i;
  const a = new Sphere();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a;
}
function addPrimitiveAttributes(r, e, t) {
  const n = e.attributes, i = [];
  function s(a, o) {
    return t.getDependency("accessor", a).then(function(l) {
      r.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = ATTRIBUTES[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return ColorManagement.workingColorSpace !== LinearSRGBColorSpace && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ColorManagement.workingColorSpace}" not supported.`), assignExtrasToUserData(r, e), computeBounds(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? addMorphTargets(r, e.targets, t) : r;
  });
}
var lib = {}, types = {}, hasRequiredTypes;
function requireTypes() {
  return hasRequiredTypes || (hasRequiredTypes = 1, Object.defineProperty(types, "__esModule", { value: !0 })), types;
}
var ee = {}, taskCollection$1 = {}, taskCollection = {}, utils$1 = {}, hasRequiredUtils$1;
function requireUtils$1() {
  if (hasRequiredUtils$1) return utils$1;
  hasRequiredUtils$1 = 1, Object.defineProperty(utils$1, "__esModule", { value: !0 }), utils$1._fast_remove_single = void 0;
  function r(e, t) {
    t !== -1 && (t === 0 ? e.shift() : t === e.length - 1 ? e.length = e.length - 1 : e.splice(t, 1));
  }
  return utils$1._fast_remove_single = r, utils$1;
}
var bakeCollection = {}, hasRequiredBakeCollection;
function requireBakeCollection() {
  return hasRequiredBakeCollection || (hasRequiredBakeCollection = 1, function(exports) {
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.bakeCollectionVariadic = exports.bakeCollectionAwait = exports.bakeCollection = exports.BAKED_EMPTY_FUNC = void 0, exports.BAKED_EMPTY_FUNC = function() {
    };
    var FORLOOP_FALLBACK = 1500;
    function generateArgsDefCode(r) {
      var e = "";
      if (r === 0)
        return e;
      for (var t = 0; t < r - 1; ++t)
        e += "arg" + String(t) + ", ";
      return e += "arg" + String(r - 1), e;
    }
    function generateBodyPartsCode(r, e) {
      for (var t = "", n = "", i = 0; i < e; ++i)
        t += "var f".concat(i, " = collection[").concat(i, `];
`), n += "f".concat(i, "(").concat(r, `)
`);
      return { funcDefCode: t, funcCallCode: n };
    }
    function generateBodyPartsVariadicCode(r) {
      for (var e = "", t = "", n = 0; n < r; ++n)
        e += "var f".concat(n, " = collection[").concat(n, `];
`), t += "f".concat(n, `.apply(undefined, arguments)
`);
      return { funcDefCode: e, funcCallCode: t };
    }
    function bakeCollection(collection, fixedArgsNum) {
      if (collection.length === 0)
        return exports.BAKED_EMPTY_FUNC;
      if (collection.length === 1)
        return collection[0];
      var funcFactoryCode;
      if (collection.length < FORLOOP_FALLBACK) {
        var argsDefCode = generateArgsDefCode(fixedArgsNum), _a = generateBodyPartsCode(argsDefCode, collection.length), funcDefCode = _a.funcDefCode, funcCallCode = _a.funcCallCode;
        funcFactoryCode = `(function(collection) {
            `.concat(funcDefCode, `
            collection = undefined;
            return (function(`).concat(argsDefCode, `) {
                `).concat(funcCallCode, `
            });
        })`);
      } else {
        var argsDefCode = generateArgsDefCode(fixedArgsNum);
        collection.length % 10 === 0 ? funcFactoryCode = `(function(collection) {
                return (function(`.concat(argsDefCode, `) {
                    for (var i = 0; i < collection.length; i += 10) {
                        collection[i](`).concat(argsDefCode, `);
                        collection[i+1](`).concat(argsDefCode, `);
                        collection[i+2](`).concat(argsDefCode, `);
                        collection[i+3](`).concat(argsDefCode, `);
                        collection[i+4](`).concat(argsDefCode, `);
                        collection[i+5](`).concat(argsDefCode, `);
                        collection[i+6](`).concat(argsDefCode, `);
                        collection[i+7](`).concat(argsDefCode, `);
                        collection[i+8](`).concat(argsDefCode, `);
                        collection[i+9](`).concat(argsDefCode, `);
                    }
                });
            })`) : collection.length % 4 === 0 ? funcFactoryCode = `(function(collection) {
                return (function(`.concat(argsDefCode, `) {
                    for (var i = 0; i < collection.length; i += 4) {
                        collection[i](`).concat(argsDefCode, `);
                        collection[i+1](`).concat(argsDefCode, `);
                        collection[i+2](`).concat(argsDefCode, `);
                        collection[i+3](`).concat(argsDefCode, `);
                    }
                });
            })`) : collection.length % 3 === 0 ? funcFactoryCode = `(function(collection) {
                return (function(`.concat(argsDefCode, `) {
                    for (var i = 0; i < collection.length; i += 3) {
                        collection[i](`).concat(argsDefCode, `);
                        collection[i+1](`).concat(argsDefCode, `);
                        collection[i+2](`).concat(argsDefCode, `);
                    }
                });
            })`) : funcFactoryCode = `(function(collection) {
                return (function(`.concat(argsDefCode, `) {
                    for (var i = 0; i < collection.length; ++i) {
                        collection[i](`).concat(argsDefCode, `);
                    }
                });
            })`);
      }
      {
        var funcFactory = eval(funcFactoryCode);
        return funcFactory(collection);
      }
    }
    exports.bakeCollection = bakeCollection;
    function bakeCollectionAwait(collection, fixedArgsNum) {
      if (collection.length === 0)
        return exports.BAKED_EMPTY_FUNC;
      if (collection.length === 1)
        return collection[0];
      var funcFactoryCode;
      if (collection.length < FORLOOP_FALLBACK) {
        var argsDefCode = generateArgsDefCode(fixedArgsNum), _a = generateBodyPartsCode(argsDefCode, collection.length), funcDefCode = _a.funcDefCode, funcCallCode = _a.funcCallCode;
        funcFactoryCode = `(function(collection) {
            `.concat(funcDefCode, `
            collection = undefined;
            return (function(`).concat(argsDefCode, `) {
                return Promise.all([ `).concat(funcCallCode, ` ]);
            });
        })`);
      } else {
        var argsDefCode = generateArgsDefCode(fixedArgsNum);
        funcFactoryCode = `(function(collection) {
            return (function(`.concat(argsDefCode, `) {
                var promises = Array(collection.length);
                for (var i = 0; i < collection.length; ++i) {
                    promises[i] = collection[i](`).concat(argsDefCode, `);
                }
                return Promise.all(promises);
            });
        })`);
      }
      {
        var funcFactory = eval(funcFactoryCode);
        return funcFactory(collection);
      }
    }
    exports.bakeCollectionAwait = bakeCollectionAwait;
    function bakeCollectionVariadic(collection) {
      if (collection.length === 0)
        return exports.BAKED_EMPTY_FUNC;
      if (collection.length === 1)
        return collection[0];
      var funcFactoryCode;
      if (collection.length < FORLOOP_FALLBACK) {
        var _a = generateBodyPartsVariadicCode(collection.length), funcDefCode = _a.funcDefCode, funcCallCode = _a.funcCallCode;
        funcFactoryCode = `(function(collection) {
            `.concat(funcDefCode, `
            collection = undefined;
            return (function() {
                `).concat(funcCallCode, `
            });
        })`);
      } else
        funcFactoryCode = `(function(collection) {
            return (function() {
                for (var i = 0; i < collection.length; ++i) {
                    collection[i].apply(undefined, arguments);
                }
            });
        })`;
      {
        var funcFactory = eval(funcFactoryCode);
        return funcFactory(collection);
      }
    }
    exports.bakeCollectionVariadic = bakeCollectionVariadic;
  }(bakeCollection)), bakeCollection;
}
var hasRequiredTaskCollection$1;
function requireTaskCollection$1() {
  if (hasRequiredTaskCollection$1) return taskCollection;
  hasRequiredTaskCollection$1 = 1;
  var r = taskCollection && taskCollection.__spreadArray || function(T, S, y) {
    if (y || arguments.length === 2) for (var A = 0, b = S.length, w; A < b; A++)
      (w || !(A in S)) && (w || (w = Array.prototype.slice.call(S, 0, A)), w[A] = S[A]);
    return T.concat(w || Array.prototype.slice.call(S));
  };
  Object.defineProperty(taskCollection, "__esModule", { value: !0 }), taskCollection.TaskCollection = void 0;
  var e = requireUtils$1(), t = requireBakeCollection();
  function n(T, S) {
    var y = this.length;
    if (y > 1)
      if (S) {
        var A;
        (A = this._tasks).push.apply(A, arguments), this.length += arguments.length;
      } else
        this._tasks.push(T), this.length++;
    else if (S) {
      if (y === 1) {
        var b = Array(1 + arguments.length);
        b.push(b), b.push.apply(b, arguments), this._tasks = b;
      } else {
        var b = Array(arguments.length);
        b.push.apply(b, arguments), this._tasks = b;
      }
      this.length += arguments.length;
    } else
      y === 1 ? this._tasks = [this._tasks, T] : this._tasks = T, this.length++;
  }
  function i(T, S) {
    var y = this.length;
    if (y > 1)
      if (S) {
        var A;
        (A = this._tasks).push.apply(A, arguments), this.length += arguments.length;
      } else
        this._tasks.push(T), this.length++;
    else if (S) {
      if (y === 1) {
        var b = Array(1 + arguments.length);
        b.push(b), b.push.apply(b, arguments), this._tasks = b;
      } else {
        var b = Array(arguments.length);
        b.push.apply(b, arguments), this._tasks = b;
      }
      this.length += arguments.length;
    } else
      y === 1 ? this._tasks = [this._tasks, T] : this._tasks = T, this.length++;
    this.firstEmitBuildStrategy ? this.call = h : this.rebuild();
  }
  function s(T) {
    this.length !== 0 && (this.length === 1 ? this._tasks === T && (this.length = 0) : ((0, e._fast_remove_single)(this._tasks, this._tasks.lastIndexOf(T)), this._tasks.length === 1 ? (this._tasks = this._tasks[0], this.length = 1) : this.length = this._tasks.length));
  }
  function a(T) {
    if (this.length !== 0) {
      if (this.length === 1)
        if (this._tasks === T && (this.length = 0), this.firstEmitBuildStrategy) {
          this.call = t.BAKED_EMPTY_FUNC;
          return;
        } else {
          this.rebuild();
          return;
        }
      else
        (0, e._fast_remove_single)(this._tasks, this._tasks.lastIndexOf(T)), this._tasks.length === 1 ? (this._tasks = this._tasks[0], this.length = 1) : this.length = this._tasks.length;
      this.firstEmitBuildStrategy ? this.call = h : this.rebuild();
    }
  }
  function o(T) {
    for (var S, y = [], A = 1; A < arguments.length; A++)
      y[A - 1] = arguments[A];
    this.length === 0 ? (this._tasks = y, this.length = 1) : this.length === 1 ? (y.unshift(this._tasks), this._tasks = y, this.length = this._tasks.length) : ((S = this._tasks).splice.apply(S, r([T, 0], y, !1)), this.length = this._tasks.length);
  }
  function l(T) {
    for (var S, y = [], A = 1; A < arguments.length; A++)
      y[A - 1] = arguments[A];
    this.length === 0 ? (this._tasks = y, this.length = 1) : this.length === 1 ? (y.unshift(this._tasks), this._tasks = y, this.length = this._tasks.length) : ((S = this._tasks).splice.apply(S, r([T, 0], y, !1)), this.length = this._tasks.length), this.firstEmitBuildStrategy ? this.call = h : this.rebuild();
  }
  function c() {
    this.length === 0 ? this.call = t.BAKED_EMPTY_FUNC : this.length === 1 ? this.call = this._tasks : this.call = (0, t.bakeCollection)(this._tasks, this.argsNum);
  }
  function u() {
    this.length === 0 ? this.call = t.BAKED_EMPTY_FUNC : this.length === 1 ? this.call = this._tasks : this.call = (0, t.bakeCollectionAwait)(this._tasks, this.argsNum);
  }
  function h() {
    this.rebuild(), this.call.apply(void 0, arguments);
  }
  var d = (
    /** @class */
    /* @__PURE__ */ function() {
      function T(S, y, A, b) {
        y === void 0 && (y = !0), A === void 0 && (A = null), b === void 0 && (b = !1), this.awaitTasks = b, this.call = t.BAKED_EMPTY_FUNC, this.argsNum = S, this.firstEmitBuildStrategy = !0, b ? this.rebuild = u.bind(this) : this.rebuild = c.bind(this), this.setAutoRebuild(y), A ? typeof A == "function" ? (this._tasks = A, this.length = 1) : (this._tasks = A, this.length = A.length) : (this._tasks = null, this.length = 0), y && this.rebuild();
      }
      return T;
    }()
  );
  taskCollection.TaskCollection = d;
  function p() {
    this._tasks = null, this.length = 0, this.call = t.BAKED_EMPTY_FUNC;
  }
  function _() {
    this._tasks = null, this.length = 0, this.call = t.BAKED_EMPTY_FUNC;
  }
  function g(T) {
    this.argsNum < T && (this.argsNum = T, this.firstEmitBuildStrategy ? this.call = h : this.rebuild());
  }
  function m(T) {
    T ? (this.push = i.bind(this), this.insert = l.bind(this), this.removeLast = a.bind(this)) : (this.push = n.bind(this), this.insert = o.bind(this), this.removeLast = s.bind(this));
  }
  function f() {
    return this.length === 0 ? [] : this.length === 1 ? [this._tasks] : this._tasks;
  }
  function C(T) {
    T.length === 0 ? (this.length = 0, this.call = t.BAKED_EMPTY_FUNC) : T.length === 1 ? (this.length = 1, this.call = T[0], this._tasks = T[0]) : (this.length = T.length, this._tasks = T, this.firstEmitBuildStrategy ? this.call = h : this.rebuild());
  }
  return d.prototype.fastClear = p, d.prototype.clear = _, d.prototype.growArgsNum = g, d.prototype.setAutoRebuild = m, d.prototype.tasksAsArray = f, d.prototype.setTasks = C, taskCollection;
}
var hasRequiredTaskCollection;
function requireTaskCollection() {
  return hasRequiredTaskCollection || (hasRequiredTaskCollection = 1, function(r) {
    var e = taskCollection$1 && taskCollection$1.__createBinding || (Object.create ? function(n, i, s, a) {
      a === void 0 && (a = s);
      var o = Object.getOwnPropertyDescriptor(i, s);
      (!o || ("get" in o ? !i.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
        return i[s];
      } }), Object.defineProperty(n, a, o);
    } : function(n, i, s, a) {
      a === void 0 && (a = s), n[a] = i[s];
    }), t = taskCollection$1 && taskCollection$1.__exportStar || function(n, i) {
      for (var s in n) s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && e(i, n, s);
    };
    Object.defineProperty(r, "__esModule", { value: !0 }), t(requireTaskCollection$1(), r);
  }(taskCollection$1)), taskCollection$1;
}
var utils = {}, hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1, Object.defineProperty(utils, "__esModule", { value: !0 }), utils.nullObj = void 0;
  function r() {
    var e = {};
    return e.__proto__ = null, e;
  }
  return utils.nullObj = r, utils;
}
var hasRequiredEe;
function requireEe() {
  if (hasRequiredEe) return ee;
  hasRequiredEe = 1;
  var r = ee && ee.__spreadArray || function(y, A, b) {
    if (b || arguments.length === 2) for (var w = 0, E = A.length, M; w < E; w++)
      (M || !(w in A)) && (M || (M = Array.prototype.slice.call(A, 0, w)), M[w] = A[w]);
    return y.concat(M || Array.prototype.slice.call(A));
  };
  Object.defineProperty(ee, "__esModule", { value: !0 }), ee.EventEmitter = void 0;
  var e = requireTaskCollection(), t = requireUtils$1(), n = requireUtils();
  function i(y, A, b, w, E, M) {
    var P = this.events[y];
    if (P) {
      if (P.length === 0)
        return !1;
      if (P.argsNum < 6)
        P.call(A, b, w, E, M);
      else {
        for (var V = new Array(P.argsNum), N = 0, z = V.length; N < z; ++N)
          V[N] = arguments[N + 1];
        P.call.apply(void 0, V);
      }
      return !0;
    }
    return !1;
  }
  function s(y, A, b, w, E, M) {
    var P = this.events[y], V;
    if (P !== void 0) {
      if (P.length === 0)
        return !1;
      if (P.argsNum < 6)
        P.call(A, b, w, E, M);
      else {
        V = new Array(P.argsNum);
        for (var N = 0, z = V.length; N < z; ++N)
          V[N] = arguments[N + 1];
        P.call.apply(void 0, V);
      }
    }
    var K = this.onceEvents[y];
    if (K) {
      if (typeof K == "function")
        if (this.onceEvents[y] = void 0, arguments.length < 6)
          K(A, b, w, E, M);
        else {
          if (V === void 0) {
            V = new Array(arguments.length - 1);
            for (var N = 0, z = V.length; N < z; ++N)
              V[N] = arguments[N + 1];
          }
          K.apply(void 0, V);
        }
      else {
        var H = K;
        if (this.onceEvents[y] = void 0, arguments.length < 6)
          for (var N = 0; N < H.length; ++N)
            H[N](A, b, w, E, M);
        else {
          if (V === void 0) {
            V = new Array(arguments.length - 1);
            for (var N = 0, z = V.length; N < z; ++N)
              V[N] = arguments[N + 1];
          }
          for (var N = 0; N < H.length; ++N)
            H[N].apply(void 0, V);
        }
      }
      return !0;
    }
    return P !== void 0;
  }
  var a = (
    /** @class */
    function() {
      function y() {
        this.events = (0, n.nullObj)(), this.onceEvents = (0, n.nullObj)(), this._symbolKeys = /* @__PURE__ */ new Set(), this.maxListeners = 1 / 0;
      }
      return Object.defineProperty(y.prototype, "_eventsCount", {
        get: function() {
          return this.eventNames().length;
        },
        enumerable: !1,
        configurable: !0
      }), y;
    }()
  );
  ee.EventEmitter = a;
  function o(y, A) {
    switch (this.emit === i && (this.emit = s), typeof this.onceEvents[y]) {
      case "undefined":
        this.onceEvents[y] = A, typeof y == "symbol" && this._symbolKeys.add(y);
        break;
      case "function":
        this.onceEvents[y] = [this.onceEvents[y], A];
        break;
      case "object":
        this.onceEvents[y].push(A);
    }
    return this;
  }
  function l(y, A, b) {
    if (b === void 0 && (b = A.length), typeof A != "function")
      throw new TypeError("The listener must be a function");
    var w = this.events[y];
    return w ? (w.push(A), w.growArgsNum(b), this.maxListeners !== 1 / 0 && this.maxListeners <= w.length && console.warn('Maximum event listeners for "'.concat(String(y), '" event!'))) : (this.events[y] = new e.TaskCollection(b, !0, A, !1), typeof y == "symbol" && this._symbolKeys.add(y)), this;
  }
  function c(y, A) {
    var b = this.events[y];
    b && b.removeLast(A);
    var w = this.onceEvents[y];
    return w && (typeof w == "function" ? this.onceEvents[y] = void 0 : typeof w == "object" && (w.length === 1 && w[0] === A ? this.onceEvents[y] = void 0 : (0, t._fast_remove_single)(w, w.lastIndexOf(A)))), this;
  }
  function u(y, A, b, w) {
    b === void 0 && (b = this), w === void 0 && (w = A.length), this.boundFuncs || (this.boundFuncs = /* @__PURE__ */ new Map());
    var E = A.bind(b);
    return this.boundFuncs.set(A, E), this.addListener(y, E, w);
  }
  function h(y, A) {
    var b, w, E = (b = this.boundFuncs) === null || b === void 0 ? void 0 : b.get(A);
    return (w = this.boundFuncs) === null || w === void 0 || w.delete(A), this.removeListener(y, E);
  }
  function d(y) {
    return this.events[y] && !!this.events[y].length;
  }
  function p(y, A, b) {
    if (b === void 0 && (b = A.length), typeof A != "function")
      throw new TypeError("The listener must be a function");
    var w = this.events[y];
    return !w || !(w instanceof e.TaskCollection) ? (w = this.events[y] = new e.TaskCollection(b, !0, A, !1), typeof y == "symbol" && this._symbolKeys.add(y)) : (w.insert(0, A), w.growArgsNum(b), this.maxListeners !== 1 / 0 && this.maxListeners <= w.length && console.warn('Maximum event listeners for "'.concat(String(y), '" event!'))), this;
  }
  function _(y, A) {
    this.emit === i && (this.emit = s);
    var b = this.onceEvents[y];
    return b ? typeof b != "object" ? (this.onceEvents[y] = [A, b], typeof y == "symbol" && this._symbolKeys.add(y)) : (b.unshift(A), this.maxListeners !== 1 / 0 && this.maxListeners <= b.length && console.warn('Maximum event listeners for "'.concat(String(y), '" once event!'))) : (this.onceEvents[y] = [A], typeof y == "symbol" && this._symbolKeys.add(y)), this;
  }
  function g(y) {
    return y === void 0 ? (this.events = (0, n.nullObj)(), this.onceEvents = (0, n.nullObj)(), this._symbolKeys = /* @__PURE__ */ new Set()) : (this.events[y] = void 0, this.onceEvents[y] = void 0, typeof y == "symbol" && this._symbolKeys.delete(y)), this;
  }
  function m(y) {
    return this.maxListeners = y, this;
  }
  function f() {
    return this.maxListeners;
  }
  function C(y) {
    return this.emit === i ? this.events[y] ? this.events[y].tasksAsArray().slice() : [] : this.events[y] && this.onceEvents[y] ? r(r([], this.events[y].tasksAsArray(), !0), typeof this.onceEvents[y] == "function" ? [this.onceEvents[y]] : this.onceEvents[y], !0) : this.events[y] ? this.events[y].tasksAsArray() : this.onceEvents[y] ? typeof this.onceEvents[y] == "function" ? [this.onceEvents[y]] : this.onceEvents[y] : [];
  }
  function T() {
    var y = this;
    if (this.emit === i) {
      var A = Object.keys(this.events);
      return r(r([], A, !0), Array.from(this._symbolKeys), !0).filter(function(w) {
        return w in y.events && y.events[w] && y.events[w].length;
      });
    } else {
      var A = Object.keys(this.events).filter(function(E) {
        return y.events[E] && y.events[E].length;
      }), b = Object.keys(this.onceEvents).filter(function(E) {
        return y.onceEvents[E] && y.onceEvents[E].length;
      });
      return r(r(r([], A, !0), b, !0), Array.from(this._symbolKeys).filter(function(E) {
        return E in y.events && y.events[E] && y.events[E].length || E in y.onceEvents && y.onceEvents[E] && y.onceEvents[E].length;
      }), !0);
    }
  }
  function S(y) {
    return this.emit === i ? this.events[y] && this.events[y].length || 0 : (this.events[y] && this.events[y].length || 0) + (this.onceEvents[y] && this.onceEvents[y].length || 0);
  }
  return a.prototype.emit = i, a.prototype.on = l, a.prototype.once = o, a.prototype.addListener = l, a.prototype.removeListener = c, a.prototype.addListenerBound = u, a.prototype.removeListenerBound = h, a.prototype.hasListeners = d, a.prototype.prependListener = p, a.prototype.prependOnceListener = _, a.prototype.off = c, a.prototype.removeAllListeners = g, a.prototype.setMaxListeners = m, a.prototype.getMaxListeners = f, a.prototype.listeners = C, a.prototype.eventNames = T, a.prototype.listenerCount = S, ee;
}
var hasRequiredLib;
function requireLib() {
  return hasRequiredLib || (hasRequiredLib = 1, function(r) {
    var e = lib && lib.__createBinding || (Object.create ? function(n, i, s, a) {
      a === void 0 && (a = s);
      var o = Object.getOwnPropertyDescriptor(i, s);
      (!o || ("get" in o ? !i.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
        return i[s];
      } }), Object.defineProperty(n, a, o);
    } : function(n, i, s, a) {
      a === void 0 && (a = s), n[a] = i[s];
    }), t = lib && lib.__exportStar || function(n, i) {
      for (var s in n) s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && e(i, n, s);
    };
    Object.defineProperty(r, "__esModule", { value: !0 }), t(requireTypes(), r), t(requireEe(), r);
  }(lib)), lib;
}
var libExports = requireLib();
const dirLightInfoDefaults = [
  { x: -5, y: 1.2, z: 4, intensity: 4 },
  { x: 0, y: 1.2, z: 4.5, intensity: 5 },
  { x: 3, y: 1.2, z: -5, intensity: 5 }
];
class BrainSceneLights {
  constructor(e, t = dirLightInfoDefaults) {
    be(this, "world");
    be(this, "lightsArray", []);
    be(this, "destroyLights", () => {
      this.lightsArray.forEach(({ instance: e, helper: t }) => {
        this.world.scene.remove(e), e.dispose(), t && (this.world.scene.remove(t), t.dispose());
      }), this.lightsArray = [];
    });
    be(this, "setLights", (e = dirLightInfoDefaults) => {
      this.destroyLights(), e.forEach((t) => {
        const n = new DirectionalLight(16777215, t.intensity);
        n.position.set(t.x, t.y, t.z), this.world.scene.add(n), this.lightsArray.push({ instance: n });
      });
    });
    this.world = e, this.setLights(t);
  }
}
const map = (r, e, t, n, i) => n + (i - n) * ((r - e) / (t - e));
function vertexColorsGradient(r, { color1: e, color2: t, min: n = -1, max: i = 1, axis: s = "x" }) {
  let a = r.attributes.position.count, o = [], l = r.attributes.position, c = new Color(e), u = new Color(t);
  for (let h = 0; h < a; h++) {
    let d = s === "x" ? l.getX(h) : s === "y" ? l.getY(h) : l.getZ(h), p = map(d, n, i, 0, 1), _ = new Color().copy(c).lerp(u, p);
    o.push(_.r, _.g, _.b);
  }
  r.setAttribute("color", new Float32BufferAttribute(o, 3));
}
const LIGHTBLUE = "#00c2c1", DARKBLUE = "#1414c2";
class BrainModel extends Mesh {
  constructor(t) {
    let n = new MeshPhongMaterial({ vertexColors: !0 });
    super(t, n);
    be(this, "_color1", LIGHTBLUE);
    be(this, "_color2", DARKBLUE);
    be(this, "destroy", () => {
      this.geometry.dispose(), this.material.dispose();
    });
    this.castShadow = !0, this.receiveShadow = !0, this.setVertexColors();
  }
  setVertexColors() {
    vertexColorsGradient(this.geometry, {
      color1: this._color1,
      color2: this._color2,
      min: -0.4,
      max: 0.4,
      axis: "z"
    });
  }
}
class Mouse extends libExports.EventEmitter {
  constructor(t) {
    super();
    be(this, "pos", new Vector2());
    be(this, "screenPos", new Vector2());
    be(this, "sizes");
    be(this, "onMouseMove", (t) => {
      this.screenPos.set(t.clientX, t.clientY), this.pos.set(
        t.clientX / this.sizes.width * 2 - 1,
        -(t.clientY / this.sizes.height) * 2 + 1
      ), this.emit("move");
    });
    be(this, "destroy", () => {
      this.removeAllListeners(), window.removeEventListener("mousemove", this.onMouseMove);
    });
    this.sizes = t, window.addEventListener("mousemove", this.onMouseMove);
  }
}
let instance = null;
class Sizes extends libExports.EventEmitter {
  constructor() {
    if (instance) return instance;
    super();
    be(this, "width", window.innerWidth);
    be(this, "height", window.innerHeight);
    be(this, "pixelRatio", Math.min(window.devicePixelRatio, 2));
    be(this, "onResize", () => {
      this.width = window.innerWidth, this.height = window.innerHeight, this.pixelRatio = Math.min(window.devicePixelRatio, 2), this.emit("resize");
    });
    be(this, "destroy", () => {
      window.removeEventListener("resize", this.onResize), this.removeAllListeners();
    });
    instance = this, this.onResize(), window.addEventListener("resize", this.onResize);
  }
}
class BrainWorld extends libExports.EventEmitter {
  constructor({
    fov: t,
    domTarget: n,
    clearColor: i,
    camZ: s,
    moveAmount: a,
    moveSpeed: o,
    webglContainer: l
  }) {
    super();
    be(this, "scene");
    be(this, "renderer");
    be(this, "camera");
    be(this, "sizes");
    be(this, "container");
    be(this, "mouse");
    be(this, "lights");
    be(this, "gltfLoader");
    be(this, "loadingManager", new LoadingManager());
    be(this, "domTarget");
    be(this, "domRect");
    be(this, "model");
    be(this, "boxSize", new Vector3(1, 0.8418079614639282, 0.8022598028182983));
    be(this, "rafId", null);
    be(this, "camPos", { z: 2, y: 0, x: 0 });
    be(this, "moveAmount", 0.5);
    be(this, "moveSpeed", 0.025);
    be(this, "loadModel", (t) => {
      this.gltfLoader.load(t, (n) => {
        const i = n.scene.children;
        if (i[0] instanceof Mesh) {
          let a = i[0].geometry, o = this.setModel(a);
          this.start(), this.emit("load", o);
        }
      });
    });
    be(this, "setModel", (t) => (this.model && (this.scene.remove(this.model), this.model.destroy(), this.model = void 0), this.model = new BrainModel(t), this.scene.add(this.model), this.setScale(), this.setViewport(), this.model));
    be(this, "onResize", () => {
      let { width: t, height: n } = this.container.getBoundingClientRect();
      this.camera.aspect = t / n, this.camera.updateProjectionMatrix(), this.renderer.setSize(t, n), this.renderer.setPixelRatio(this.sizes.pixelRatio), this.emit("resize"), this.domRect = this.domTarget.getBoundingClientRect(), this.setScale(), this.setViewport();
    });
    be(this, "onScroll", () => {
      this.domRect = this.domTarget.getBoundingClientRect(), this.setViewport();
    });
    be(this, "setViewport", () => {
      let t = this.domRect.left + this.domRect.width * 0.5, n = -this.domRect.top - this.domRect.height * 0.5, i = t - this.sizes.width * 0.5, s = n + this.sizes.height * 0.5;
      this.renderer.setViewport(i, s, this.sizes.width, this.sizes.height), this.emit("updateView");
    });
    be(this, "setScale", () => {
      var c;
      let t = (u, h, d) => u / 2 / Math.tan(d / 2) + h / 2;
      const n = this.camera;
      let i = this.camPos.z, s = n.fov * (Math.PI / 180), a = t(this.boxSize.y, this.boxSize.z, s), o = i / a;
      (c = this.model) == null || c.scale.setScalar(o);
      let l = this.domRect.height / this.sizes.height;
      n.zoom = 1 * l, n.updateProjectionMatrix(), this.emit("updateScale");
    });
    be(this, "tick", () => {
      let t = this.camPos.z, n = this.camPos.x;
      n = map(
        this.mouse.pos.x,
        1,
        -1,
        this.camPos.x - this.moveAmount,
        this.camPos.x + this.moveAmount
      );
      let i = this.camPos.y;
      i = map(
        this.mouse.pos.y,
        1,
        -1,
        this.camPos.y - this.moveAmount,
        this.camPos.y + this.moveAmount
      ), this.camera.position.lerp(new Vector3(n, i, t), this.moveSpeed), this.camera.lookAt(0, 0, 0), this.render(), this.rafId = window.requestAnimationFrame(this.tick);
    });
    be(this, "start", () => {
      this.rafId === null && (this.camera.position.set(
        this.camPos.x + this.moveAmount * 3,
        this.camPos.y - this.moveAmount,
        this.camPos.z + this.moveAmount * 2
      ), this.onResize(), this.sizes.on("resize", this.onResize), window.addEventListener("scroll", this.onScroll), this.rafId = window.requestAnimationFrame(this.tick));
    });
    be(this, "stop", () => {
      this.rafId && window.cancelAnimationFrame(this.rafId), this.sizes.off("resize", this.onResize), window.removeEventListener("scroll", this.onScroll), this.rafId = null;
    });
    be(this, "render", () => {
      this.renderer.render(this.scene, this.camera);
    });
    ColorManagement.enabled = !0, this.sizes = new Sizes(), this.renderer = new WebGLRenderer({ antialias: !0, alpha: !0 }), this.renderer.shadowMap.enabled = !0, this.renderer.outputColorSpace = SRGBColorSpace, l ? this.container = l : (this.container = document.createElement("div"), this.container.classList.add("webgl-container"), this.container.setAttribute(
      "style",
      "position: fixed; width: 100%; height: 100%; top: 0; left: 0;"
    ), document.body.appendChild(this.container)), this.container.appendChild(this.renderer.domElement), this.scene = new Scene(), this.camera = new PerspectiveCamera(t, 1, 0.1, 6), this.mouse = new Mouse(this.sizes), i && this.renderer.setClearColor(i), s && (this.camPos.z = s), a && (this.moveAmount = a), o && (this.moveSpeed = o), this.domTarget = n, this.domRect = this.domTarget.getBoundingClientRect(), this.lights = new BrainSceneLights(this), this.gltfLoader = new GLTFLoader(this.loadingManager), this.onResize(), this.sizes.on("resize", this.onResize);
  }
  destroy() {
    this.model && (this.scene.remove(this.model), this.model.destroy(), this.model = void 0), this.sizes.destroy(), this.mouse.destroy(), this.stop(), window.removeEventListener("scroll", this.onScroll), this.scene.clear(), this.renderer.domElement.remove(), this.renderer.dispose(), this.removeAllListeners();
  }
}
export {
  BrainWorld
};
