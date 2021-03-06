import React from 'react';
import { Alert } from 'blue-design';
import 'blue-design/esm/alert/style/css';

export default () => (
  <>
    <Alert>这是一条普通提示！</Alert>
    <Alert kind='success'>这是一条成功提示！</Alert>
    <Alert kind='error'>这是一条错误提示！</Alert>
    <Alert kind='warning'>这是一条警告提示！</Alert>
  </>
)