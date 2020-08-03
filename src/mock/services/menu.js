import Mock from 'mockjs2'

const menu = [{"menuId":2,"menuName":"Upms","title":"系统管理","icon":"example","path":"/upms","paths":"/0/2","menuType":"M","action":"无","permission":"","parentId":0,"noCache":true,"breadcrumb":"","component":"Layout","sort":1,"visible":"0","createBy":"1","updateBy":"1","isFrame":"0","dataScope":"","params":"","RoleId":0,"children":[{"menuId":3,"menuName":"Sysuser","title":"用户管理","icon":"user","path":"sysuser","paths":"","menuType":"C","action":"无","permission":"system:sysuser:list","parentId":2,"noCache":false,"breadcrumb":"","component":"/sysuser/index","sort":1,"visible":"0","createBy":"","updateBy":"","isFrame":"","dataScope":"","params":"","RoleId":0,"children":[],"is_select":false,"createdAt":"2019-09-10T13:55:17+08:00","updatedAt":"0001-01-01T00:00:00Z","deletedAt":null},{"menuId":52,"menuName":"Role","title":"角色管理","icon":"peoples","path":"role","paths":"","menuType":"C","action":"无","permission":"system:sysrole:list","parentId":2,"noCache":true,"breadcrumb":"","component":"/role/index","sort":2,"visible":"0","createBy":"","updateBy":"","isFrame":"","dataScope":"","params":"","RoleId":0,"children":[],"is_select":false,"createdAt":"2019-11-26T23:40:59+08:00","updatedAt":"0001-01-01T00:00:00Z","deletedAt":null}],"is_select":false,"createdAt":"2019-11-26T21:22:09+08:00","updatedAt":"2020-04-08T15:07:57+08:00","deletedAt":null}]

Mock.mock(/\/list\/menu/, 'get', menu)
