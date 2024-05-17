import React from "react";
import { useState } from "react";

const NameForm = () => {
    const [name, setName] = useState("");

    const alertName = () => {
        alert(`${name} さんで宜しいでしょうか？`);
    };

    return (
        <form onSubmit={alertName}>
            <label>名前入力：</label>
            <input type="text" value={name} placeholder="Jane Doe" onChange={(e) => setName(e.target.value)}></input>
            <button type="subumit">送信</button>
        </form>
    )
};

export default NameForm