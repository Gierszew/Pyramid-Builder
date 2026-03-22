import { Block } from "@/app/components/Block";
import { motion } from "framer-motion";

interface LayerProps {
    width: number;
    index: number;
}

export const Layer = ({ width, index }: LayerProps) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: index * 0.03 }}
        className="flex gap-1 flex-nowrap whitespace-nowrap"
    >
        {Array.from({ length: width }).map((_, i) => (
            <Block key={i} index={i} layerIndex={index} />
        ))}
    </motion.div>
);