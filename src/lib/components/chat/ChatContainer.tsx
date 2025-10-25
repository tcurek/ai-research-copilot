import * as React from "react";

interface ChatInputProps {
    id: string;
}

export const ChatContainer: React.FC<React.PropsWithChildren<ChatInputProps>> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};