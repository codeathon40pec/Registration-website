const SuspenseFallback = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', zIndex: 9999 }}>
            <h1 style={{ color: 'red', fontFamily: 'Butcherman, cursive' }}>Loading...</h1>
        </div>
    );
};

export default SuspenseFallback;
