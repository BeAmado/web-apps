import { useCallback, useEffect, useRef, useState } from 'react';
import { List } from '@dhx/trial-suite';
import { ObjectUtil } from '../js/utils';
import './BasicList.css';

export default function BasicListComponent({
    configDhxList,
    listData,
    templateMethod,
    pkey
}) {
    const [list, setList] = useState(null);
    const lNode = useRef(null);
    const decorateConfig = useCallback((cfg) => ObjectUtil.merge(cfg, {
        virtual: true,
        selection: false,
        keyNavigation: true,
        template: templateMethod || ((item) => ''
            + '<ul class="inline-list"><li>'
            +  Object.keys(item.data || item)
                .map(attr => `${attr}: ${(item.data || item)[attr]}`)
                .join('</li><li>')
            + '</li></ul>')
    }), []);
    const pk = (obj) => (pkey) ? obj[pkey] : obj[Object.keys(obj)[0]];
    const decorateData = function(obj) {
        return {
            data: obj,
            id: pk(obj)
        }
    };

    useEffect(() => {
        const newList = new List(lNode.current, decorateConfig(configDhxList))
        setList(newList);
        return () => { newList?.destructor(); }
    }, [configDhxList, decorateConfig]);

    useEffect(() => {
        list?.events.on('click', (id, e) => {
            console.log('id', id);
            console.log('data', listData.filter(d => pk(d) == id)[0]);
        });
        list?.data.parse(listData.map(decorateData));
    }, [list, listData]);

    return <div className="nhids-basic-list-container" ref={lNode}></div>;
}