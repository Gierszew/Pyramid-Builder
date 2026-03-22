interface ControlsProps {
    height: number;
    setHeight: (val: number) => void;
    maxHeight: number;
}

export const Controls = ({ height, setHeight, maxHeight }: ControlsProps) => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-12 flex flex-col items-center gap-4 w-full max-w-md">
        <div className="flex justify-between w-full px-2">
            <span className="text-stone-500 font-mono text-xs uppercase tracking-widest">Height</span>
            <span className="text-orange-600 font-bold text-xl">{height}</span>
        </div>
        <input
            type="range"
            min="1"
            max={maxHeight}
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
    </div>
);