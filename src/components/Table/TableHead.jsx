import React from 'react';
import cl from './Table.module.css'

const TableHead = () => {
    return (
        <thead>
              <tr className={cl.MyTableRow}>
                  <th>Delete/Nr</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Url</th>
                  <th>Display</th>
                  <th>Icon</th>
                  <th>Position</th>
                  <th>Action</th>
              </tr>
        </thead>
    );
};

export default TableHead;