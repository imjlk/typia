import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_json_application_ajv_standard_ObjectUnionExplicit =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUnionExplicit",
  })(typia.json.application<[ObjectUnionExplicit], "ajv", false>());