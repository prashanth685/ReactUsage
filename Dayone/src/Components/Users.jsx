import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers } from "../app/slices/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);

  if (loading) return <p>loading!....</p>;
  if (error) return <p>Error {error}</p>;
  return (
    <>
      <div>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </>
  );
};

export default Users;
