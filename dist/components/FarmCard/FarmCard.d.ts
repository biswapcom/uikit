import React from "react";
interface FarmCardProps {
    isSoon?: boolean;
    isNew?: boolean;
    children: Array<React.ReactElement>;
}
declare const FarmCard: React.FC<FarmCardProps>;
export default FarmCard;
