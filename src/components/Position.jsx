import React from 'react';

const Position = () => {
    return (
        <div style={{ position: "relative", backgroundColor: "green", width: "90vw", height: "90vh", }}>
            <div style={{ width: "300px", height: "400px", backgroundColor: "red",position:"fixed",left:"10px" }}></div>
        </div>
    );
};

export default Position;