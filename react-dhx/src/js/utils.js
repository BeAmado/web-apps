const ObjectUtil = {
    merge: (obj, defaultObj, overwrite) => {
        const newObj = {};
        if (obj && (typeof obj == 'object'))
            Object.keys(obj).forEach(attr => {
                newObj[attr] = obj[attr];
            });
        if (defaultObj && (typeof defaultObj == 'object'))
            Object.keys(defaultObj).forEach(attr => {
                if (overwrite || (newObj[attr] === undefined))
                    newObj[attr] = defaultObj[attr];
            });
        return newObj;
    }
}

const DateUtil = {
    asString: (dt, locale) => dt.toLocaleDateString(locale || 'pt-br')
}

export {
    DateUtil,
    ObjectUtil
};