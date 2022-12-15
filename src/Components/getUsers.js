import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_USERS } from '../Graphql/queries'
function GetUsers() {
  const { loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([])
  useEffect(() => {
    if (data) { setUsers(data.getAllUsers) }
  }, [data])
  return (
    <div>
      {users.map((val) => {
        return <div>{val.email}</div>
      })}
    </div>
  )
}

export default GetUsers;