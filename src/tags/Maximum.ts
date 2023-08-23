export type Maximum<Fixed extends number | bigint> = {
    "typia.tag"?: {
        target: Fixed extends number ? "number" : "bigint";
        kind: "maximum";
        value: Fixed;
        validate: `$input <= ${Fixed}`;
    };
};
