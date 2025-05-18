class Vector 
{
    constructor(values) 
    {
        this.values = values;
    }

    add(other) 
    {
        this.#checkLength(other);
        const result = this.values.map((v, i) => v + other.values[i]);
        return new Vector(result);
    }

    sub(other) 
    {
        this.#checkLength(other);
        const result = this.values.map((v, i) => v - other.values[i]);
        return new Vector(result);
    }

    dot(other) 
    {
        this.#checkLength(other);
        return this.values.reduce((sum, v, i) => sum + v * other.values[i], 0);
    }

    #checkLength(other) 
    {
        if (this.values.length !== other.values.length) 
        {
            throw new Error("向量長度不一致");
        }
    }
}
let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);
console.log(a.add(b).sub(b).dot(b)); 