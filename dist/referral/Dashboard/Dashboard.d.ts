import { IDashboardItem } from './types';
interface IDashboardProps {
    data: Array<IDashboardItem>;
    totalData: Array<IDashboardItem>;
}
declare const Dashboard: ({ data, totalData }: IDashboardProps) => JSX.Element;
export default Dashboard;
