
import { useState } from "react";
import { uuid4 } from "uuid4"
const NestedCheckBox = () => {
    const initialData = [{
        id: uuid4(),
        name: "parent1",
        checked:false,
        child: ["child1", "child2"]
    }, {
        id: uuid4(),
        name: "parent2",
        child: ["child3", "child4"]
    }, {
        id: uuid4(),
        name: "parent3",
        child: ["child5", "child6"]
    }]
    const [data, setData] = useState(initialData);
    return (<div>
        {
            data.map((item, idx) => {
                return (<div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <input type="checkbox"></input>
                        <div>{item.name}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {
                            item.child.map((child, idx) => {
                                return (<div style={{ display: "flex", gap: "20px", marginLeft: "60px" }}>
                                    <input type="checkbox"></input>
                                    <div>{child}</div>
                                </div>)
                            })
                        }
                    </div>
                </div>)
            })
        }
    </div>)
}

export default NestedCheckBox;