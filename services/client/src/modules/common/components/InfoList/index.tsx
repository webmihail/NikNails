import * as React from 'react';
import { Table } from 'antd';
import classnames from 'classnames';

import styles from './infoList.module.scss';
import './infoList.global.scss';

interface InfoListProps {
  title?: any;
  className?: string;
  items: Array<{ title: string | React.ReactNode; description: string | React.ReactNode }>;
}

const InfoList = ({ title, items, className }: InfoListProps) => {
  const columns = [
    {
      dataIndex: 'title',
      className: styles.title,
    },
    {
      dataIndex: 'description',
    },
  ];

  const tableData = items.map((item) => ({
    key: item.title,
    title: item.title,
    description: item.description,
  }));

  return (
    <Table
      columns={columns}
      className={classnames(['info-list-table', className])}
      dataSource={tableData}
      showHeader={false}
      pagination={false}
      bordered={true}
      size="small"
      title={title && (() => title)}
    />
  );
};

export default InfoList;
