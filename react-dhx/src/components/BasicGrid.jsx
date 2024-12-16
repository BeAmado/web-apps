import { useEffect, useRef, useState } from "react";
import { Grid } from "@dhx/trial-suite";
import './BasicGrid.css';
import { ObjectUtil } from "../js/utils";

export default function BasicGridComponent({
    config,
    gridData,
    pkey,
    dblClick
}) {
    const [grid, setGrid] = useState(null);
    const gNode = useRef(null);
    const pk = (obj) => {
        if (pkey && (`_${pkey}` in obj))
            return obj[`_${pkey}`];
        else
            return (pkey) ? obj[pkey] : obj[Object.keys(obj)[0]];
    };
    const decorateGridConfig = (cfg) => {
        const newCfg = ObjectUtil.copy(cfg);
        newCfg.columns.push({
            id: `_${pkey}`,
            hidden: true,
            header: [{ text: 'ID' }]
        });
        return newCfg;
    };

    useEffect(() => {
        const newGrid = new Grid(
            gNode.current,
            decorateGridConfig(config)
        );
        
        setGrid(newGrid);

        // Cleanup
        return () => { newGrid?.destructor(); };
    }, []);

    useEffect(() => {
        grid?.data.parse(ObjectUtil.copy(gridData));
        if (dblClick) {
            grid?.events.detach('cellDblClick');
            grid?.events.on('cellDblClick', (row, column, event) => {
                dblClick(gridData.filter(d => pk(d) === pk(row))[0]);
            });
        }
    }, [gridData])

    return <div className="nhids-grid-container" ref={gNode}></div>;
}