import { useState, useEffect } from 'react';

const useCountdown = (targetDateString) => {
    const targetDate = new Date(targetDateString).getTime();

    const [countDown, setCountDown] = useState(() => targetDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(targetDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
    // Calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    if (countDown < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return { days, hours, minutes, seconds };
};

export default useCountdown;
