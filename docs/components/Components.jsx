// npm modules
import React, { Component } from 'react';
import { Link } from 'react-router';

class Components extends Component {
    render() {
        return (
            <div>
                <h1>Components</h1>

                <h2>Icons</h2>
                <ul>
                    <li><Link to='/components/icon'>Icon</Link></li>
                </ul>

                <h2>Layout</h2>
                <ul>
                    <li><Link to='/components/sidebar'>Sidebar</Link></li>
                    <li><Link to='/components/sidebar-header'>SidebarHeader</Link></li>
                    <li><Link to='/components/sidebar-module'>SidebarModule</Link></li>
                    <li><Link to='/components/sidebar-module-header'>SidebarModuleHeader</Link></li>
                </ul>

                <h2>Text</h2>
                <ul>
                    <li><Link to='/components/page-subtitle'>PageSubtitle</Link></li>
                    <li><Link to='/components/page-title'>PageTitle</Link></li>
                </ul>

                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

module.exports = Components;
