function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const characterMap = {};
    for (let i = 0; i < s.length; i++) {
        if (characterMap[s.at(i)]) {
            characterMap[s.at(i)]++;
        }
        else {
            characterMap[s.at(i)] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (characterMap[t.at(i)] === undefined) {
            return false;
        }
        if (characterMap[t.at(i)] > 1) {
            characterMap[t.at(i)]--;
        }
        else {
            delete characterMap[t.at(i)];
        }
    }
    return Object.keys(characterMap).length === 0;
}
;
export { isAnagram };
