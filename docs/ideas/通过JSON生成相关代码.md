# 通过 JSON 生成相关代码

```ts
const fs = require('fs');

export type Option = {
  label?: string; // 显示标签
  value?: string | number; // 真实值
};

/**
 * 类型定义，表示数据库列的属性
 */
export type Column = {
  label?: string; // 可选的列标签
  type: TYPE; // 列的数据类型
  length?: number; // 用于指定 VARCHAR 等类型的长度
  autoIncrement?: boolean; // 是否自增
  primaryKey?: boolean; // 是否为主键
  notNull?: boolean; // 是否为非空
  unique?: boolean; // 是否唯一
  defaultValue?: any; // 默认值
  references?: { table: string; column: string }; // 外键引用
  options?: Option[];
};

/**
 * 数据库定义，表示数据库中的表和列
 */
export type DB = Record<string, Record<string, Column>>;

/**
 * 枚举类型，表示可能的列数据类型
 */
export enum TYPE {
  INT = 'INT',
  VARCHAR = 'VARCHAR',
  TEXT = 'TEXT',
  DATE = 'DATE',
  TIMESTAMP = 'TIMESTAMP',
  FLOAT = 'FLOAT',
  DOUBLE = 'DOUBLE',
  BOOLEAN = 'BOOLEAN',
}

const db: DB = {
  students: {
    name: {
      label: '姓名',
      type: TYPE.VARCHAR,
      length: 100,
      notNull: true,
    },
    gender: {
      label: '性别', // 希望生成 性别(男=1;女=0)
      type: TYPE.INT,
      options: [
        { label: '男', value: 1 },
        { label: '女', value: 0 },
      ],
    },
    email: {
      label: '邮箱',
      type: TYPE.VARCHAR,
      length: 100,
      unique: true,
    },
  },
  courses: {
    courseName: {
      label: '课程名称',
      type: TYPE.VARCHAR,
      length: 100,
      notNull: true,
    },
  },
  studentCourses: {
    studentId: {
      label: '学生ID',
      type: TYPE.INT,
      references: { table: 'students', column: 'id' }, // 定义关联students表的id
      notNull: true,
    },
    courseId: {
      label: '课程ID',
      type: TYPE.INT,
      references: { table: 'courses', column: 'id' }, // 定义关联courses表的id
      notNull: true,
    },
  },
};

/**
 * 生成 SQL 语句以创建或修改数据库表结构
 * @param db - 数据库定义对象
 * @returns - 生成的 SQL 语句
 */
function generateSQL(db: DB): string {
  const sqlStatements: string[] = [];

  for (const tableName in db) {
    const columns = db[tableName];
    const columnDefinitions: string[] = [];
    const foreignKeys: string[] = [];
    const primaryKeys: string[] = [];
    const defaultColumns: Column[] = [
      {
        label: '主键',
        type: TYPE.INT,
        autoIncrement: true,
        primaryKey: true,
        notNull: true,
      },
      {
        label: '创建时间',
        type: TYPE.TIMESTAMP,
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP',
      },
      {
        label: '更新时间',
        type: TYPE.TIMESTAMP,
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
      },
    ];

    // 添加默认字段
    db[tableName] = {
      id: defaultColumns[0],
      ...columns,
      createdAt: defaultColumns[1],
      updatedAt: defaultColumns[2],
    };

    for (const columnName in db[tableName]) {
      const column = db[tableName][columnName];
      let columnDefinition = `${columnName} ${column.type}`;

      if (column.type === TYPE.VARCHAR && column.length) {
        columnDefinition += `(${column.length})`;
      }

      if (column.autoIncrement) {
        columnDefinition += ` AUTO_INCREMENT`;
      }

      if (column.notNull) {
        columnDefinition += ` NOT NULL`;
      }

      if (column.unique) {
        columnDefinition += ` UNIQUE`;
      }

      if (column.defaultValue !== undefined) {
        columnDefinition += ` DEFAULT ${
          typeof column.defaultValue === 'string'
            ? `'${column.defaultValue}'`
            : column.defaultValue
        }`;
      }

      if (column.primaryKey) {
        primaryKeys.push(columnName);
      }

      if (column.label) {
        columnDefinition += ` COMMENT '${column.label}'`;
      }

      columnDefinitions.push(columnDefinition);

      if (column.references) {
        foreignKeys.push(
          `FOREIGN KEY (${columnName}) REFERENCES ${column.references.table}(${column.references.column})`
        );
      }
    }

    let createTableSQL = `-- Creating table ${tableName}\nCREATE TABLE IF NOT EXISTS ${tableName} (\n  ${columnDefinitions.join(
      ',\n  '
    )}`;

    if (primaryKeys.length > 0) {
      createTableSQL += `,\n  PRIMARY KEY (${primaryKeys.join(', ')})`;
    }

    if (foreignKeys.length > 0) {
      createTableSQL += `,\n  ${foreignKeys.join(',\n  ')}`;
    }

    createTableSQL += `\n);`;

    sqlStatements.push(createTableSQL);

    // Generate ALTER TABLE statements for existing tables
    for (const columnName in columns) {
      const column = columns[columnName];
      let alterColumnSQL = `-- Modifying column ${columnName} in table ${tableName}\nALTER TABLE ${tableName} MODIFY COLUMN ${columnName} ${column.type}`;

      if (column.type === TYPE.VARCHAR && column.length) {
        alterColumnSQL += `(${column.length})`;
      }

      if (column.autoIncrement) {
        alterColumnSQL += ` AUTO_INCREMENT`;
      }

      if (column.notNull) {
        alterColumnSQL += ` NOT NULL`;
      }

      if (column.unique) {
        alterColumnSQL += ` UNIQUE`;
      }

      if (column.defaultValue !== undefined) {
        alterColumnSQL += ` DEFAULT ${
          typeof column.defaultValue === 'string'
            ? `'${column.defaultValue}'`
            : column.defaultValue
        }`;
      }

      if (column.label) {
        const subLabel = column?.options
          ?.map((x) => `${x.label}=${x.value}`)
          .join(';');
        alterColumnSQL += ` COMMENT '${column.label}${
          subLabel ? `(${subLabel})` : ''
        }'`;
      }

      sqlStatements.push(alterColumnSQL);

      if (column.references) {
        const foreignKeySQL = `-- Adding foreign key constraint on ${columnName} in table ${tableName}\nALTER TABLE ${tableName} ADD FOREIGN KEY (${columnName}) REFERENCES ${column.references.table}(${column.references.column});`;
        sqlStatements.push(foreignKeySQL);
      }
    }
  }

  return sqlStatements.join('\n\n');
}

const sql = generateSQL(db);
console.log(sql);

// 可选：将生成的 SQL 保存到文件
fs.writeFileSync('db_schema.sql', sql);
```
