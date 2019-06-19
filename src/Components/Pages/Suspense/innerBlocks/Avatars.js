import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Avatar} from 'antd'

export default ({}) => {
  const [users, setUsers] = useState(null)
  useEffect( () => {
    const func = async () => {
      const usersArr = await axios.get('https://5cabafafc85e05001452ebe5.mockapi.io/api/v1/user')
      setUsers(usersArr)
    }
    func()
  }, [])

  return users && users.data.map(el => <Avatar src={el.avatar} style={{margin: 5}} shape={'circle'}/>)
}