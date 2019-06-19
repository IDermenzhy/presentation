import React from 'react'
import { Input } from 'antd';

import {useTestContext} from "../context";

export default () => {
  const {setKeyword, keyword} = useTestContext()
  return <Input value={keyword} onChange={(e) => setKeyword(e.target.value)}/>


}