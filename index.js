const employee = {
    name: "Pascal",
    adress: 254,
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
const newO = updateEmployeeWithKeyAndValue(employee, "name2", "effiecancode");
console.log(newO);
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
const newOb = destructivelyUpdateEmployeeWithKeyAndValue(employee, "adress2", "255");
console.log(newOb);
function deleteFromEmployeeByKey(obj, key) {
    const newObje = {...obj};
    delete newObje[key];
    return newObje;
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];

    return obj;
}