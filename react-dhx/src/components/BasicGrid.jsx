import { useEffect, useRef, useState } from "react";
import { Grid } from "@dhx/trial-suite";
import './BasicGrid.css';

export default function BasicGridComponent({
    config,
    gridData
}) {
    const [grid, setGrid] = useState(null);
    const gNode = useRef(null);

    useEffect(() => {
        const newGrid = new Grid(gNode.current, config);
        setGrid(newGrid);

        // Cleanup
        return () => { newGrid?.destructor(); };
    }, [config]);

    useEffect(() => {
        grid?.data.parse(gridData)
    }, [grid, gridData])

    return <div className="nhids-basic-grid-container" ref={gNode}></div>;
}