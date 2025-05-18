function deepMerge(obj1, obj2)
{
    for (const key in obj2)
    {
        const val2 = obj2[key];
        const val1 = obj1[key];
        if
        (
            typeof val1 == 'object' && val1 != null &&
            typeof val2 == 'object' && val2 != null &&
            !Array.isArray(val1) && !Array.isArray(val2)
        )
        {
            obj1[key] = deepMerge({...val1},val2);
        }
        else
        {
            obj1[key] = val2;
        }
    }
    return obj1;
}
const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };
console.log(deepMerge(obj1, obj2));