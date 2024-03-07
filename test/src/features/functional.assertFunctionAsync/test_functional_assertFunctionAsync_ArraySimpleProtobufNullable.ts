import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ArraySimpleProtobufNullable =
  _test_functional_assertFunctionAsync(TypeGuardError)(
    "ArraySimpleProtobufNullable",
  )(ArraySimpleProtobufNullable)(
    (
      p: (
        input: ArraySimpleProtobufNullable,
      ) => Promise<ArraySimpleProtobufNullable>,
    ) => typia.functional.assertFunction(p),
  );