interface BlockProps {
    index: number;
    layerIndex: number;
}

export const Block = ({ index, layerIndex }: BlockProps) => (
    <div
        key={index}
        className="w-8 h-8 sm:w-10 sm:h-10 border-b-4 border-r-4 rounded-sm shadow-sm transition-all hover:brightness-110"
        style={{
            backgroundColor: `rgb(${210 - layerIndex * 5}, ${160 - layerIndex * 5}, 50)`,
            borderColor: `rgb(${150 - layerIndex * 5}, 100, 20)`,
        }}
    />
);