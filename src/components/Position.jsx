import React from 'react';

const Position = () => {
    return (
        <div style={{ position: "relative", width: "90vw", }}>
            <div style={{ width: "300px", backgroundColor: "red", position: "fixed", left: "10px" }}></div>
        </div>
    );
};

export default Position;