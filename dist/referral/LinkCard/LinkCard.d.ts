import { FC } from "react";
import { LinkPercentItem } from "./types";
declare type LinkCardProps = {
    data: Array<LinkPercentItem>;
    ReferralLink: string;
};
declare const LinkCard: FC<LinkCardProps>;
export default LinkCard;
