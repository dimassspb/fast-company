import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../api';
import UserCard from '../../ui/userCard';
import Loader from '../../ui/loader';

const UserPage = () => {
    const { userId } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((user) => setUser(user));
    }, []);

    return <>{user ? <UserCard user={user} /> : <Loader />}</>;
};

export default UserPage;
