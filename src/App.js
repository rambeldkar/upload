import React from 'react';
import {
  BrowserRouter as Router,
  Switch as Switch1,
  Route
} from "react-router-dom";
import MediaQuery from 'react-responsive'
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Layout,Switch} from 'antd';
import {MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';
import Sidebarlayout from './components/common/sidebar/Sidebar.js'
import Headerlayout from './components/common/header/Header.js'
import Footerlayout from './components/common/footer/Footer.js'
import Salessummary from './components/views/dashboard/sales-summary/Salessummary.js'
import Salessummaryempty from './components/views/dashboard/sales-summary/Salessummaryempty';
import './assets/css/app.less';

const App = () => {
  const { Header, Sider } = Layout;
  const [isDarkMode, setIsDarkMode] = React.useState();
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const { switcher, themes } = useThemeSwitcher();
  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };
  return (      
    <Router>
      <div className="ekiakrtApp" id="ekikartLayout">
      <Layout style={{ minHeight: '100vh' }}>
          <MediaQuery minDeviceWidth={992}>
            <Sider trigger={null} collapsible collapsed={isCollapsed} width={230} className="ekikartSidebar">
                <Sidebarlayout/>
            </Sider>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={991}>
            <Sider trigger={null} collapsible collapsed={!isCollapsed} width={230} className="ekikartSidebar">
                <Sidebarlayout/>
            </Sider>
          </MediaQuery>          
          <Layout className="site-layout">
              <Header className="bg-white p-0">
                  {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                      className: 'trigger',
                      onClick: () => setIsCollapsed(!isCollapsed),
                  })}
                  <Switch checked={isDarkMode} onChange={toggleTheme} />
                  <Headerlayout/>          
              </Header>
              <Switch1>
                <Route exact path="/">
                  <Salessummary />
                </Route>
                <Route exact path="/salessummaryempty">
                  <Salessummaryempty />
                </Route>
              </Switch1> 
              <Footerlayout/>
          </Layout>
      </Layout>
      </div> 
    </Router> 
    );
  }

export default App;
