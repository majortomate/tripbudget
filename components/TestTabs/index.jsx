/* eslint-disable react/display-name */
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import ChangePassword from '../ChangePassword';
import 'react-tabs/style/react-tabs.css';
import EditProfile from '../EditProfile';

export default function () {
  return (
    <Tabs>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <ChangePassword />
      </TabPanel>
      <TabPanel>
        <EditProfile />
      </TabPanel>
    </Tabs>
  );
}
