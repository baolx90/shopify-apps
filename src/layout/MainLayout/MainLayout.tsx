import React , { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';

const { Sider } = Layout;
import { ScrollContainer , FixedElement } from 'react-nice-scroll';
import { Content } from "antd/es/layout/layout";
import { useMount } from 'ahooks';
import { useProfile } from "@/admin/store/profile/useProfile";


const AppMenu = React.lazy(() => import('@/admin/components/Menu'));
const AppHeader = React.lazy(() => import('@/admin/components/Header'));

const MainLayout = () => {
  useMount(() => {
    useProfile();
  });
  const [collapsed, setCollapsed] = useState(false);
    return (
      <>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                  style={{ overflow: 'auto', height: '100vh', left: 0, top: 0, bottom: 0 }} width={270}>
            <ScrollContainer>
              <section style={{ height: '100vh' }}>              
                <AppMenu/>
              </section>
            </ScrollContainer>
          </Sider>
          <Layout>
              <ScrollContainer >
                <section style={{ height: '100vh' }}>
                  <FixedElement >
                    <section style={{ width: '100%' }}>   
                      <AppHeader/>
                    </section>
                  </FixedElement>
                  <Content
                    style={{
                      padding: 24,
                      minHeight: 280
                    }}
                  >
                      <Outlet />
                  </Content>         
                </section>
              </ScrollContainer>
          </Layout>
        </Layout>
      </>
    );
}
export default MainLayout;