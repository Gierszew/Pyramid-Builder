"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { Controls } from "./Controls";
import { Layer } from "./Layer";

export default function PyramidSimulator() {
    const [height, setHeight] = useState(5);
    const [maxHeight, setMaxHeight] = useState(20);

    const layers = useMemo(() =>
            Array.from({ length: height }, (_, i) => i + 1),
        [height]);

    const blockWidth = 44;
    const maxPixels = height * blockWidth;

    const scale = maxPixels > 1000 ? Math.max(0.1, 1000 / maxPixels) : 1;
    const totalBlocks = (height * (height + 1)) / 2;

    return (
        <div className="flex flex-col items-center bg-stone-100 min-h-screen w-full p-4 sm:p-8 pt-12 overflow-x-hidden">
            <header className="mb-8 text-center shrink-0">
                <h1 className="text-2xl font-black uppercase tracking-widest text-zinc-800">
                    Pyramid <span className="text-orange-500">1×N</span>
                </h1>
            </header>

            <Controls height={height} setHeight={setHeight} maxHeight={maxHeight} />

            <div className="flex items-center gap-3 mb-10 bg-white px-4 py-2 rounded-lg shadow-sm border border-stone-200">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-tight">Set limit:</span>
                <input
                    type="number"
                    value={maxHeight}
                    className="text-orange-500 font-black w-16 outline-none bg-transparent text-center border-b-2 border-orange-200 focus:border-orange-500 transition-colors"
                    onChange={(e) => setMaxHeight(Number(e.target.value))}
                />
            </div>

            <div className="relative flex flex-col items-center grow w-full">
                <div
                    className="flex flex-col items-center gap-1 transition-transform duration-500 ease-out origin-top"
                    style={{
                        transform: `scale(${scale})`,
                        width: '100%'
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {layers.map((width, index) => (
                            <Layer
                                key={`layer-${width}-${index}`}
                                width={width}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-12 w-64 py-3 flex justify-center bg-white/95 backdrop-blur-sm rounded-full border-2 border-orange-200 shadow-xl z-10 shrink-0">
                    <p className="text-orange-800 font-mono text-sm font-bold">
                        Total Blocks: <span className="text-xl tabular-nums ml-2 text-orange-600">{totalBlocks}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}