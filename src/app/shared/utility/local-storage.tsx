const LS = localStorage;
const {parse, stringify} = JSON;

export const getFromLS = (key: string) => {
    return LS[key] ? parse(LS[key]) : undefined;
};

export const putInLS = (val: any, key: string) => {
    LS.setItem(key, stringify(val));
    // console.log(`@@[LS]: save ${key}`, val);
};

// added to array in storage
export const saveInLS = (val: any, key: string) => {
    if (LS[key]) {
        const oldVal = parse(LS[key]);
        const newVal = stringify([...oldVal, val]);
        LS.setItem(key, newVal);
    } else {
        LS.setItem(key, stringify(val));
    }
};
