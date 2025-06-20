'use client';

import React from 'react';

type NavItem = {
  id: number;
  name: string;
};

type Props = {
  navElem: NavItem[];
  selected: string;
  onChange: (value: string) => void;
};

const CategorySelect: React.FC<Props> = ({ navElem, selected, onChange }) => {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 text-sm  border-none outline-none"
    >
      {navElem.map((item) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
