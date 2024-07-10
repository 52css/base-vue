# 通过 JSON 生成相关代码

记录一个想法, 能否定义一段`json` 生成

- 数据库的`表`
- Node 生成接口的`CURD`
- 生成前端页面`列表`、`新增`、`编辑`、`详情`

这样所有的操作都归在这个 JSON 操作，只有相应生成

## 定义`JSON`

```js
{
  // 数据库名
  your_database_name: {
    // 表名
    user: {
        // 字段
        id: {
            label: '序号', // 注释名称
            type: 'INT', // 数据库类型
            autoIncrement: true, // 是否子增长
            primaryKey: true, // 是否主键
        },
        name: {
            label: '名称',
            type: 'CHAR',
            required: true, // 是否必填
            fontType: 'Input', // 前端对应展示类型
        },
        gender: {
            label: '性别',
            type: 'TINYINT',
            required: true,
            options: [{label: '男', value: 1}, {label: '女', value: 0}], // 有些前端的数据类型（Checkbox、Radio、Select），需要定义
            fontType: 'Radio',
        }
    }
  }
}
```

## 生成`sql`

```sql
-- Check if the user table exists
SELECT COUNT(*) INTO @table_exists FROM information_schema.tables
WHERE table_schema = 'your_database_name' AND table_name = 'user';

-- If the table exists, modify or add fields
IF @table_exists = 1 THEN
    -- Modify existing fields
    ALTER TABLE user
    MODIFY id INT AUTO_INCREMENT PRIMARY KEY COMMENT '序号',
    MODIFY name CHAR(255) NOT NULL COMMENT '名称',
    MODIFY gender TINYINT NOT NULL COMMENT '性别 (男=1; 女=0)';

    -- Add constraints if they don't already exist
    ALTER TABLE user
    ADD CONSTRAINT chk_gender CHECK (gender IN (0, 1))
    IF NOT EXISTS (SELECT * FROM information_schema.table_constraints
                   WHERE table_schema = 'your_database_name'
                   AND table_name = 'user'
                   AND constraint_name = 'chk_gender');

-- If the table does not exist, create it
ELSE
    CREATE TABLE user (
        id INT AUTO_INCREMENT PRIMARY KEY COMMENT '序号',
        name CHAR(255) NOT NULL COMMENT '名称',
        gender TINYINT NOT NULL COMMENT '性别 (男=1; 女=0)',
        CONSTRAINT chk_gender CHECK (gender IN (0, 1))
    ) COMMENT '用户表';
END IF;
```
