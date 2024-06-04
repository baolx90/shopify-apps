import {
    SettingOutlined
} from '@ant-design/icons';
import { Menu, Layout } from "antd";
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
const { Header } = Layout;
const items: MenuItem[] = [
  {
    key: 'hsub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: 'h9', label: 'Option 9' },
      { key: 'h10', label: 'Option 10' },
      { key: 'h11', label: 'Option 11' },
      { key: 'h12', label: 'Option 12' },
    ],
  },
  {
    key: 'hgrp',
    label: 'Group',
    children: [
      { key: 'h13', label: 'Option 13' },
      { key: 'h14', label: 'Option 14' },
    ],
  },
];



const AppHeader = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };
    return (
        <>
            <Header
        style={{
          zIndex: 1,
          width: '100%',
          padding: '0'
        }}
      >
                <Menu style={{width:'100%'}} onClick={onClick} defaultOpenKeys={['sub1']} theme="light" mode="horizontal" items={items} />
            </Header>
        </>
    );
};

export default AppHeader;