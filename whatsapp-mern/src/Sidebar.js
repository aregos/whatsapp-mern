import React from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import {DonutLarge, MoreVert, SearchOutlined} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars0.githubusercontent.com/u/11743372?s=460&u=76f11f1fc0ffffb1db69bffe28f3592a1e3b89bb&v=4"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
};

export default Sidebar;