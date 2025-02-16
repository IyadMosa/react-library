import React from "react";
import styled, { keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Define spinning animation
const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

// Fullscreen wrapper to center the spinner
const FullScreenWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    width: 100vw; /* Full viewport width */
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8); /* Light overlay effect */
    z-index: 9999; /* Ensure it's on top */
`;

// Styled spinning icon
const SpinnerIcon = styled(AiOutlineLoading3Quarters)`
    font-size: 60px; /* Bigger icon */
    color: #007bff;
    animation: ${spin} 1s linear infinite;
    margin-bottom: 15px;
`;

// Styled text
const LoadingText = styled.p`
    font-size: 20px;
    color: #555;
    font-weight: bold;
`;

// Define props interface
interface LoadingSpinnerProps {
    size?: string;
    color?: string;
}

// Reusable Component
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = "60px", color = "#007bff" }) => {
    return (
        <FullScreenWrapper>
            <div>
                <SpinnerIcon style={{ fontSize: size, color }} />
                <LoadingText>Loading...</LoadingText>
            </div>
        </FullScreenWrapper>
    );
};

export default LoadingSpinner;
