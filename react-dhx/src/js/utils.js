const ObjectUtil = {
    merge: function(obj, defaultObj, overwrite) {
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
    },
    copy: function(obj) {
        if (obj instanceof Date)
            return new Date(obj);
        if (Array.isArray(obj))
            return obj.map(i => this.copy(i));
        if (typeof obj == 'object') {
            const newObj = {};
            if (obj)
                Object.keys(obj).forEach(k => {
                    if (typeof obj[k] === 'object')
                        newObj[k] = this.copy(obj[k]);
                    else
                        newObj[k] = obj[k];
                });
            return newObj;
        }
        else
            return obj;
    }
}

const DateUtil = {
    asString: (dt, locale) => dt.toLocaleDateString(locale || 'pt-br')
}

export {
    DateUtil,
    ObjectUtil
};