import { useContext } from "react";
import { SidebarContext } from "../store/sidebar/SidebarContext";

const useSidebarContext = () => {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error(
            'useSidebarContext must be used within a SidebarProvider'
        )
    }

    return context;
}

export { useSidebarContext }