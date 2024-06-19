import { useUser } from '@clerk/clerk-react';
import { XpenseXplorerRecord } from './xpense-xplorer-record';
import { XpenseXplorerList } from './xpense-xplorer-list';

export const Dashboard = () => {
    
    const { user } = useUser();
    
    return (
        <div className='dashboard-container'>
            <h1>Welcome {user?.firstName} for Xpense Xplorer</h1>
            <XpenseXplorerRecord />
            <XpenseXplorerList />
        </div>
    )
}