import { IDashboardItem } from "./types";
interface IDashboardProps {
    data: Array<IDashboardItem>;
    totalData: Array<IDashboardItem>;
    imageSource: string;
}
declare const Dashboard: ({ data, totalData, imageSource }: IDashboardProps) => JSX.Element;
export default Dashboard;
