import * as Namespace from "./functional/Namespace";

// import { IValidation } from "./IValidation";
import { TypeGuardError } from "./TypeGuardError";

/* ===========================================================
  FUNCTIONAL
    - ASSERTIONS
    - VALIDATIONS
==============================================================
  ASSERTIONS
----------------------------------------------------------- */
/**
 * Asserts a function.
 *
 * Asserts a function, by wrapping the function and checking its parameters and
 * return value through {@link assert} function. If some parameter or return value
 * does not match the expected type, it throws an {@link TypeGuardError} or a custom
 * error generated by the *errorFactory* parameter.
 *
 * For reference, {@link TypeGuardError.path} would be a little bit different with
 * individual {@link assert} function. If the {@link TypeGuardError} occurs from
 * some parameter, the path would start from `$input.parameters[number]`. Otherwise
 * the path would start from `$input.return`.
 *
 * - `$input.parameters[0].~`
 * - `$input.return.~`
 *
 * By the way, if what you want is not just finding the 1st type error through
 * assertion, but also finding every type errors, then use {@link validateFunction}
 * instead. Otherwise, what you want is just asserting parameters or return value
 * only, you can use {@link assertParameters} or {@link assertReturn} instead.
 *
 * On the other hand, if don't want to allow any superfluous properties, utilize
 * {@link assertEqualsFunction} or {@link validateEqualsFunction} instead.
 *
 * @template T Target function type
 * @param func Target function to assert
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns The wrapper function with type assertions
 * @throws A {@link TypeGuardError} or a custom error generated by *errorFactory*
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertFunction<T extends (...args: any[]) => any>(
  func: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/**
 * @internal
 */
function assertFunction(): never {
  halt("assertFunction");
}
const assertFunctionPure = /** @__PURE__ */ Object.assign<
  typeof assertFunction,
  {},
  {}
>(
  assertFunction,
  /** @__PURE__ */ Namespace.assert("functional.assertFunction"),
  /** @__PURE__ */ Namespace.functional.functionalAssert(),
);
export { assertFunctionPure as assertFunction };

/**
 * Asserts parameters.
 *
 * Asserts a function, by wrapping the function and checking its parameters through
 * {@link assert} function. If some parameter does not match the expected type, it
 * throws an {@link TypeGuardError} or a custom error generated by the *errorFactory*
 * parameter.
 *
 * For reference, {@link TypeGuardError.path} would be a little bit different with
 * individual {@link assert} function. If the {@link TypeGuardError} occurs from
 * some parameter, the path would start from `$input.parameters[number]`.
 *
 * By the way, if what you want is not just finding the 1st type error through
 * assertion, but also finding every type errors, then use {@link validateParameters}
 * instead. Otherwise, what you want is not only asserting parameters, but also
 * asserting return value, you can use {@link assertFunction} instead.
 *
 * On the other hand, if don't want to allow any superfluous properties, utilize
 * {@link assertEqualsParameters} or {@link validateEqualsParameters} instead.
 *
 * @template T Target function type
 * @param func Target function to assert
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns The wrapper function with type assertions
 * @throws A {@link TypeGuardError} or a custom error generated by *errorFactory*
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertParameters<T extends (...args: any[]) => any>(
  func: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/**
 * @internal
 */
function assertParameters(): never {
  halt("assertParameters");
}
const assertParametersPure = /** @__PURE__ */ Object.assign<
  typeof assertParameters,
  {},
  {}
>(
  assertFunction,
  /** @__PURE__ */ Namespace.assert("functional.assertFunction"),
  /** @__PURE__ */ Namespace.functional.functionalAssert(),
);
export { assertParametersPure as assertParameters };

/**
 * Asserts return value.
 *
 * Asserts a function, by wrapping the function and checking its return value through
 * {@link assert} function. If the return value does not match the expected type, it
 * throws an {@link TypeGuardError} or a custom error generated by the *errorFactory*
 * parameter.
 *
 * For reference, {@link TypeGuardError.path} would be a little bit different with
 * individual {@link assert} function. If the {@link TypeGuardError} occurs from
 * the return value, the path would start from `$input.return`.
 *
 * By the way, if what you want is not just finding the 1st type error through
 * assertion, but also finding every type errors, then use {@link validateReturn}
 * instead. Otherwise, what you want is not only asserting return value, but also
 * asserting parameters, you can use {@link assertFunction} instead.
 *
 * On the other hand, if don't want to allow any superfluous properties, utilize
 * {@link assertEqualsReturn} or {@link validateEqualsReturn} instead.
 *
 * @template T Target function type
 * @param func Target function to assert
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns The wrapper function with type assertions
 * @throws A {@link TypeGuardError} or a custom error generated by *errorFactory*
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertReturn<T extends (...args: any[]) => any>(
  func: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/**
 * @internal
 */
function assertReturn(): never {
  halt("assertReturn");
}
const assertReturnPure = /** @__PURE__ */ Object.assign<
  typeof assertReturn,
  {},
  {}
>(
  assertReturn,
  /** @__PURE__ */ Namespace.assert("functional.assertReturn"),
  /** @__PURE__ */ Namespace.functional.functionalAssert(),
);
export { assertReturnPure as assertReturn };

/**
 * Asserts a function with strict equality.
 *
 * Asserts a function with strict equality, by wrapping the function and checking
 * its parameters and return value through {@link assertEquals} function. If some
 * parameter or return value does not match the expected type, it throws an
 * {@link TypeGuardError} or a custom error generated by the *errorFactory* parameter.
 *
 * For reference, {@link TypeGuardError.path} would be a little bit different with
 * individual {@link assertEquals} function. If the {@link TypeGuardError} occurs from
 * some parameter, the path would start from `$input.parameters[number]`. Otherwise
 * the path would start from `$input.return`.
 *
 * - `$input.parameters[0].~`
 * - `$input.return.~`
 *
 * By the way, if what you want is not just finding the 1st type error through
 * assertion, but also finding every type errors, then use
 * {@link validateEqualsFunction} instead. Otherwise, what you want is just asserting
 * parameters or return value only, you can use {@link assertEqualsParameters} or
 * {@link assertEqualsReturn} instead.
 *
 * On the other hand, if you want to allow any superfluous properties, utilize
 * {@link assertFunction} or {@link validateFunction} instead.
 *
 * @template T Target function type
 * @param func Target function to assert
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns The wrapper function with type assertions
 * @throws A {@link TypeGuardError} or a custom error generated by *errorFactory*
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertEqualsFunction<T extends (...args: any[]) => any>(
  func: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/**
 * @internal
 */
function assertEqualsFunction(): never {
  halt("assertEqualsFunction");
}
const assertEqualsFunctionPure = /** @__PURE__ */ Object.assign<
  typeof assertEqualsFunction,
  {},
  {}
>(
  assertEqualsFunction,
  /** @__PURE__ */ Namespace.assert("functional.assertEqualsFunction"),
  /** @__PURE__ */ Namespace.functional.functionalAssert(),
);
export { assertEqualsFunctionPure as assertEqualsFunction };

/**
 * Asserts parameters with strict equality.
 *
 * Asserts a function, by wrapping the function and checking its parameters through
 * {@link assertEquals} function. If some parameter does not match the expected type,
 * it throws an {@link TypeGuardError} or a custom error generated by the *errorFactory*
 * parameter.
 *
 * For reference, {@link TypeGuardError.path} would be a little bit different with
 * individual {@link assertEquals} function. If the {@link TypeGuardError} occurs from
 * some parameter, the path would start from `$input.parameters[number]`.
 *
 * By the way, if what you want is not just finding the 1st type error through
 * assertion, but also finding every type errors, then use
 * {@link validateEqualsParameters} instead. Otherwise, what you want is not only
 * asserting parameters, but also asserting return value, you can use
 * {@link assertEqualsFunction} instead.
 *
 * On the other hand, if you want to allow any superfluous properties, utilize
 * {@link assertParameters} or {@link validateParameters} instead.
 *
 * @template T Target function type
 * @param func Target function to assert
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns The wrapper function with type assertions
 * @throws A {@link TypeGuardError} or a custom error generated by *errorFactory*
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertEqualsParameters<T extends (...args: any[]) => any>(
  func: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/**
 * @internal
 */
function assertEqualsParameters(): never {
  halt("assertEqualsParameters");
}
const assertEqualsParametersPure = /** @__PURE__ */ Object.assign<
  typeof assertEqualsParameters,
  {},
  {}
>(
  assertEqualsParameters,
  /** @__PURE__ */ Namespace.assert("functional.assertEqualsParameters"),
  /** @__PURE__ */ Namespace.functional.functionalAssert(),
);
export { assertEqualsParametersPure as assertEqualsParameters };

/**
 * Asserts return value with strict equality.
 *
 * Asserts a function, by wrapping the function and checking its return value through
 * {@link assertEquals} function. If the return value does not match the expected type,
 * it throws an {@link TypeGuardError} or a custom error generated by the *errorFactory*
 * parameter.
 *
 * For reference, {@link TypeGuardError.path} would be a little bit different with
 * individual {@link assertEquals} function. If the {@link TypeGuardError} occurs from
 * the return value, the path would start from `$input.return`.
 *
 * By the way, if what you want is not just finding the 1st type error through
 * assertion, but also finding every type errors, then use {@link validateEqualsReturn}
 * instead. Otherwise, what you want is not only asserting return value, but also
 * asserting parameters, you can use {@link assertEqualsFunction} instead.
 *
 * On the other hand, if you want to allow any superfluous properties, utilize
 * {@link assertReturn} or {@link validateReturn} instead.
 *
 * @template T Target function type
 * @param func Target function to assert
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns The wrapper function with type assertions
 * @throws A {@link TypeGuardError} or a custom error generated by *errorFactory*
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
function assertEqualsReturn<T extends (...args: any[]) => any>(
  func: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/**
 * @internal
 */
function assertEqualsReturn(): never {
  halt("assertEqualsReturn");
}
const assertEqualsReturnPure = /** @__PURE__ */ Object.assign<
  typeof assertEqualsReturn,
  {},
  {}
>(
  assertEqualsReturn,
  /** @__PURE__ */ Namespace.assert("functional.assertEqualsReturn"),
  /** @__PURE__ */ Namespace.functional.functionalAssert(),
);
export { assertEqualsReturnPure as assertEqualsReturn };

// /* -----------------------------------------------------------
//   VALIDATIONS
// ----------------------------------------------------------- */
// /**
//  * Validates a function.
//  *
//  * Validates a function, by wrapping the function and checking its parameters and
//  * return value through {@link validate} function. If some parameter or return value
//  * does not match the expected type, it returns {@link IValidation.IError} typed
//  * object. Otherwise there's no type error, it returns {@link IValidation.ISuccess}
//  * typed object instead.
//  *
//  * For reference, {@link IValidation.IError.path} would be a little bit different with
//  * individual {@link validate} function. If the {@link IValidation.IError} occurs from
//  * some parameter, the path would start from `$input.parameters[number]`. Otherwise
//  * the path would start from `$input.return`.
//  *
//  * - `$input.parameters[0].~`
//  * - `$input.return.~`
//  *
//  * By the way, if what you want is not finding every type errors, but just finding
//  * the 1st type error, then use {@link assertFunction} instead. Otherwise, what you
//  * want is just validating parameters or return value only, you can use
//  * {@link validateParameters} or {@link validateReturn} instead.
//  *
//  * On the other hand, if you don't want to allow any superfluous properties, utilize
//  * {@link validateEqualsFunction} or {@link assertEqualsFunction} instead.
//  *
//  * @template T Target function type
//  * @param func Target function to validate
//  * @returns The wrapper function with type validations
//  *
//  * @author Jeongho Nam - https://github.com/samchon
//  */
// function validateFunction<T extends (...args: any[]) => any>(
//   func: T,
// ): T extends (...args: infer Arguments) => infer Output
//   ? Output extends Promise<infer R>
//     ? (...args: Arguments) => Promise<IValidation<R>>
//     : (...args: Arguments) => IValidation<Output>
//   : never;

// /**
//  * @internal
//  */
// function validateFunction(): never {
//   halt("validateFunction");
// }
// const validateFunctionPure = /** @__PURE__ */ Object.assign<
//   typeof validateFunction,
//   {}
// >(validateFunction, /** @__PURE__ */ Namespace.validate());
// export { validateFunctionPure as validateFunction };

// /**
//  * Validates parameters.
//  *
//  * Validates a function, by wrapping the function and checking its parameters through
//  * {@link validate} function. If some parameter does not match the expected type, it
//  * returns {@link IValidation.IError} typed object. Otherwise there's no type error,
//  * it returns {@link IValidation.ISuccess} typed object instead.
//  *
//  * For reference, {@link IValidation.IError.path} would be a little bit different with
//  * individual {@link validate} function. If the {@link IValidation.IError} occurs from
//  * some parameter, the path would start from `$input.parameters[number]`.
//  *
//  * By the way, if what you want is not finding every type errors, but just finding
//  * the 1st type error, then use {@link assertParameters} instead. Otherwise, what you
//  * want is not only validating parameters, but also validating return value, you can
//  * use {@link validateFunction} instead.
//  *
//  * On the other hand, if you don't want to allow any superfluous properties, utilize
//  * {@link validateEqualsParameters} or {@link assertEqualsParameters} instead.
//  *
//  * @template T Target function type
//  * @param func Target function to validate
//  * @returns The wrapper function with type validations
//  *
//  * @author Jeongho Nam - https://github.com/samchon
//  */
// function validateReturn<T extends (...args: any[]) => any>(
//   func: T,
// ): T extends (...args: infer Arguments) => infer Output
//   ? Output extends Promise<infer R>
//     ? (...args: Arguments) => Promise<IValidation<R>>
//     : (...args: Arguments) => IValidation<Output>
//   : never;

// /**
//  * @internal
//  */
// function validateReturn(): never {
//   halt("validateReturn");
// }
// const validateReturnPure = /** @__PURE__ */ Object.assign<
//   typeof validateReturn,
//   {}
// >(validateReturn, /** @__PURE__ */ Namespace.validate());
// export { validateReturnPure as validateReturn };

// /**
//  * Validates a function with strict equality.
//  *
//  * Validates a function with strict equality, by wrapping the function and checking
//  * its parameters and return value through {@link validateEquals} function. If some
//  * parameter or return value does not match the expected type, it returns
//  * {@link IValidation.IError} typed object. Otherwise there's no type error, it
//  * returns {@link IValidation.ISuccess} typed object instead.
//  *
//  * For reference, {@link IValidation.IError.path} would be a little bit different with
//  * individual {@link validateEquals} function. If the {@link IValidation.IError} occurs
//  * from some parameter, the path would start from `$input.parameters[number]`. Otherwise
//  * the path would start from `$input.return`.
//  *
//  * - `$input.parameters[0].~`
//  * - `$input.return.~`
//  *
//  * By the way, if what you want is not finding every type errors, but just finding
//  * the 1st type error, then use {@link assertEqualsFunction} instead. Otherwise, what
//  * you want is just validating parameters or return value only, you can use
//  * {@link validateEqualsParameters} or {@link validateEqualsReturn} instead.
//  *
//  * On the other hand, if you want to allow any superfluous properties, utilize
//  * {@link validateFunction} or {@link assertFunction} instead.
//  *
//  * @template T Target function type
//  * @param func Target function to validate
//  * @returns The wrapper function with type validations
//  *
//  * @author Jeongho Nam - https://github.com/samchon
//  */
// function validateEqualsFunction<T extends (...args: any[]) => any>(
//   func: T,
// ): T extends (...args: infer Arguments) => infer Output
//   ? Output extends Promise<infer R>
//     ? (...args: Arguments) => Promise<IValidation<R>>
//     : (...args: Arguments) => IValidation<Output>
//   : never;

// /**
//  * @internal
//  */
// function validateEqualsFunction(): never {
//   halt("validateEqualsFunction");
// }
// const validateEqualsFunctionPure = /** @__PURE__ */ Object.assign<
//   typeof validateEqualsFunction,
//   {}
// >(validateEqualsFunction, /** @__PURE__ */ Namespace.validate());
// export { validateEqualsFunctionPure as validateEqualsFunction };

// /**
//  * Validates parameters with strict equality.
//  *
//  * Validates a function, by wrapping the function and checking its parameters through
//  * {@link validateEquals} function. If some parameter does not match the expected type,
//  * it returns {@link IValidation.IError} typed object. Otherwise there's no type error,
//  * it returns {@link IValidation.ISuccess} typed object instead.
//  *
//  * For reference, {@link IValidation.IError.path} would be a little bit different with
//  * individual {@link validateEquals} function. If the {@link IValidation.IError} occurs
//  * from some parameter, the path would start from `$input.parameters[number]`.
//  *
//  * By the way, if what you want is not finding every type errors, but just finding
//  * the 1st type error, then use {@link assertEqualsParameters} instead. Otherwise,
//  * what you want is not only validating parameters, but also validating return value,
//  * you can use {@link validateEqualsFunction} instead.
//  *
//  * On the other hand, if you want to allow any superfluous properties, utilize
//  * {@link validateParameters} or {@link assertParameters} instead.
//  *
//  * @template T Target function type
//  * @param func Target function to validate
//  * @returns The wrapper function with type validations
//  *
//  * @author Jeongho Nam - https://github.com/samchon
//  */
// function validateEqualsParameters<T extends (...args: any[]) => any>(
//   func: T,
// ): T extends (...args: infer Arguments) => infer Output
//   ? Output extends Promise<infer R>
//     ? (...args: Arguments) => Promise<IValidation<R>>
//     : (...args: Arguments) => IValidation<Output>
//   : never;

// /**
//  * @internal
//  */
// function validateEqualsParameters(): never {
//   halt("validateEqualsParameters");
// }
// const validateEqualsParametersPure = /** @__PURE__ */ Object.assign<
//   typeof validateEqualsParameters,
//   {}
// >(validateEqualsParameters, /** @__PURE__ */ Namespace.validate());
// export { validateEqualsParametersPure as validateEqualsParameters };

// /**
//  * Validates return value with strict equality.
//  *
//  * Validates a function, by wrapping the function and checking its return value through
//  * {@link validateEquals} function. If the return value does not match the expected type,
//  * it returns {@link IValidation.IError} typed object. Otherwise there's no type error,
//  * it returns {@link IValidation.ISuccess} typed object instead.
//  *
//  * For reference, {@link IValidation.IError.path} would be a little bit different with
//  * individual {@link validateEquals} function. If the {@link IValidation.IError} occurs
//  * from the return value, the path would start from `$input.return`.
//  *
//  * By the way, if what you want is not finding every type errors, but just finding
//  * the 1st type error, then use {@link assertEqualsReturn} instead. Otherwise, what you
//  * want is not only validating return value, but also validating parameters, you can use
//  * {@link validateEqualsFunction} instead.
//  *
//  * On the other hand, if you want to allow any superfluous properties, utilize
//  * {@link validateReturn} or {@link assertReturn} instead.
//  *
//  * @template T Target function type
//  * @param func Target function to validate
//  * @returns The wrapper function with type validations
//  *
//  * @author Jeongho Nam - https://github.com/samchon
//  */
// function validateEqualsReturn<T extends (...args: any[]) => any>(
//   func: T,
// ): T extends (...args: infer Arguments) => infer Output
//   ? Output extends Promise<infer R>
//     ? (...args: Arguments) => Promise<IValidation<R>>
//     : (...args: Arguments) => IValidation<Output>
//   : never;

// /**
//  * @internal
//  */
// function validateEqualsReturn(): never {
//   halt("validateEqualsReturn");
// }
// const validateEqualsReturnPure = /** @__PURE__ */ Object.assign<
//   typeof validateEqualsReturn,
//   {}
// >(validateEqualsReturn, /** @__PURE__ */ Namespace.validate());
// export { validateEqualsReturnPure as validateEqualsReturn };

/* -----------------------------------------------------------
  HALTER
----------------------------------------------------------- */
/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.functional.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
