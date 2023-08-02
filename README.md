安装
```
npm install ruigu-tools
```

导入
```
const ruigu = require('ruigu-tools')
```

格式化时间
```
调用 dateFormat 对时间格式化
const dtStr = ruigu.dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss')
结果 2023-07-15 13:08:10
```

深拷贝
```
调用 deepCopy 对数组或对象进行深拷贝
const obj = ruigu.deepCopy({ a: 1 })
```
