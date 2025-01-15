"use client";

import { motion } from "framer-motion";

interface AnimatedButtonProps {
    children: string;
    onClick: () => void;
}

// 🎨 Background animation
const backgroundVariant = {
    initial: { backgroundColor: "#A3B18A" },  // Default button color
    hover: {
        backgroundColor: "#022D42",  // Darker color on hover
        transition: {
            delay: 0.1,
            duration: 0.5,
            ease: [0.19, 1, 0.22, 1]
        }
    }
};

// 🆙 First text slides up
const firstTextVariant = {
    initial: { y: 0 },
    hover: {
        y: -20,  // Slide up on hover
        transition: {
            duration: 0.5,
            ease: [0.19, 1, 0.22, 1]
        }
    }
};

// 🆙 Second text slides in
const secondTextVariant = {
    initial: { y: 20 },
    hover: {
        y: 0,  // Slides into place
        transition: {
            duration: 0.5,
            ease: [0.19, 1, 0.22, 1]
        }
    }
};

// 🚀 Animated Button Component
const AnimatedButton = ({ children, onClick }: AnimatedButtonProps) => {
    return (
        <motion.button
            initial="initial"
    whileHover="hover"
    variants={backgroundVariant}
    onClick={onClick}
    style={{
        padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            color: "#FFFFFF",
            fontWeight: "bold",
            cursor: "pointer",
            position: "absolute",
            bottom: "10px",
            left: "10px",
            overflow: "hidden"
    }}
>
    <div style={{ position: "relative", overflow: "hidden" }}>
    {/* Top Layer Text */}
    <motion.span variants={firstTextVariant}>{children}</motion.span>

    {/* Bottom Layer Text */}
    <motion.span
        variants={secondTextVariant}
    aria-hidden
    style={{
        position: "absolute",
            top: 0,
            left: 0,
            color: "#DAD7CD"
    }}
>
    {children}
    </motion.span>
    </div>
    </motion.button>
);
};

export default AnimatedButton;
