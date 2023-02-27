import React, {Component} from "react";

class Shapes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shape: 'Select Shape',
            color: 'Select Color',
            width: 'Select Width',
            height: 'Select Height',
            shapes: [],
        };
    }

    onSelectChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    onCreateButton = () => {
        const { shape, color, width, height } = this.state;

        let newShape;
         if (shape === 'Circle') {
            newShape = {
                shape: shape,
                color: color,
                width: width,
                height: height,
                borderRadius: '50%',
                margin: '100px auto'
            };
        } else if (shape === 'Oval') {
            newShape = {
                shape: shape,
                color: color,
                width: width * 1.5,
                height: height,
                borderRadius: '50%',
                margin: '100px auto'
            };
        } else if (shape === "Square") {
            newShape = {
                shape: shape,
                color: color,
                width: width,
                height: width,
            };
        } else if (shape === "Rectangle") {
            newShape = {
                shape: shape,
                color: color,
                width: width,
                height: height,
            };
        }
        this.setState((prevState) => ({
            shapes: [...prevState.shapes, newShape],
        }));
    };

    render() {
        const { shape, color, width, height, shapes } = this.state;
        return (
            <div>
                <div>
                    <select value={shape} name="shape" onChange={this.onSelectChange}>
                        <option value="Select Shape">Select Shape</option>
                        <option value="Circle">Circle</option>
                        <option value="Square">Square</option>
                        <option value="Rectangle">Rectangle</option>
                        <option value="Oval">Oval</option>
                    </select>
                    <select value={color} name="color" onChange={this.onSelectChange}>
                        <option value="Select Color">Select Color</option>
                        <option value="crimson">Crimson</option>
                        <option value="rgb(13, 245, 71)">Green</option>
                        <option value="rgb(237, 51, 206)">Violet</option>
                        <option value="pink">Pink</option>
                    </select>
                    <select value={width} name="width" onChange={this.onSelectChange}>
                        <option value="Select Width">Select Width</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                    </select>
                    <select value={height} name="height" onChange={this.onSelectChange}>
                        <option value="Select Height">Select Height</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                    </select>
                    <button onClick={this.onCreateButton}>Create </button>
                    {shapes.map((shape) => (
                        <div key={shape.id} style={{ backgroundColor: shape.color, width: `${shape.width}px`, height: `${shape.height}px`, borderRadius: shape.borderRadius }}>
                            {shape.shape}
                        </div>
                    ))}
                </div>
         </div>
        );
    }
}

export default Shapes;
