function countLetters(str)
{
    const letterMap = new Map();
    for (const char of str)
    {
        if (letterMap.has(char))
        {
            letterMap.set(char,letterMap.get(char) + 1);
        }
        else
        {
            letterMap.set(char,1);
        }
    }
    return letterMap;
}
console.log(countLetters("banana"));
