let anyType: any = {};
anyType.a = 1;
anyType['b'] = () => {
};
anyType = 1;
anyType();

let unkType: unknown = {};
unkType.a = 1;
unkType['b'] = () => {
};
unkType = 1;
unkType();

let v: void = undefined;
