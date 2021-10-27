import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../../../api';
import EditForm from '../../ui/editForm';
import Loader from '../../ui/loader';

const EditUserPage = () => {
    const { userId } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    return <>{user ? <EditForm user={user} /> : <Loader />}</>;
};

export default EditUserPage;
