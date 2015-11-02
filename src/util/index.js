"use strict";
import { trim, compose, prop, reduce, curry} from "ramda";
var randomString = ()=>Math.random().toString(36).slice(2, 8);
var getTrimmedValue = compose(trim, prop("value"));
var processRefs = refs=>(acc, key)=>(acc[key] = getTrimmedValue(refs[key]),acc);
var makeFormItem = curry((fieldKeys, refs)=> reduce(processRefs(refs),{}, fieldKeys));
var resetField = refs =>field=>refs[field.key] = field.defaultValue;
var resetForm = curry((fields, refs)=>fields.forEach(resetField(refs)));
export {
    resetForm,
    makeFormItem,
    randomString,
    getTrimmedValue
}