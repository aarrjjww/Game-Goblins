import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getUser } from '../reducks/users/selectors';
import { push } from 'connected-react-router';
const OrderConfirmation = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('LOGIN_USER_KEY'));
    const backToHome =()=>{
    dispatch(push('/'))
    }
    useEffect(() => {
        console.log(user);
    }, []);
    return (
        <div>
            <div class="thanks">
                <h1 class="thankyoutext">Thank you for Ordering</h1>
            </div>
            <h6 class="thankyoumessage">
                Thank you for ordering <span class="color">{user.user_name}</span>. We received your request. <br />
                Our staff will be contacting with you to tell next steps.
            </h6>
            <div class="backtohome">
                <button class="thankyoubtn" onClick={backToHome} type="submit">
                    Back To Home
                </button>
            </div>
        </div>
    );
};

export default OrderConfirmation;
