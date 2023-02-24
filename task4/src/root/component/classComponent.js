import React from "react";


class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year : null,
            age: null,
            sum: 11450,
            USdollar: null,
        }

        
    }
   
    render() {
       /* -----------------YOSH ANIQLASH------------------*/ 
        const onAgeChange = (e)=>{
            this.setState({year: +e.target.value})
        }
       
        const transfer =()=>{
            const yosh = 2023 - this.state.year
            this.setState({yosh:yosh})
        }
       /* -----------------VALYUTA KURSINI ANIQLASH------------------*/ 

        const onMoneyChange = (e)=>{
            this.setState({sum: +e.target.value})
        }
       
        const Transfer =()=>{
                let som =  this.state.USdollar * this.state.sum;
            this.setState({som:som})
        }



        return (
            <div style={{display:"flex", gap:"50px"}}> 

           {/* ------------------YOSH ANIQLASH-------- */}

            <div className="age">
            <h1>Yoshni aniqlovchi dastur</h1>
             <input type='number' placeholder="Tug'ilgan yilingizni kiriting" onChange={onAgeChange}/>
             <button onClick={transfer}>Transfer</button>
             <h3>Tug'ilgan yilingiz: {this.state.year}</h3>
             <h3>Yosh: Sizning yoshingiz {this.state.yosh}</h3>
            </div>


           {/* ------------------VALYUTA KURSINI ANIQLASH-------- */}

            <div className="dollarKursi">
            <h1>Dollar kursi</h1> 
            <div style={{display:"flex",alignItems:"center",}}>
            <h4>Dollarni kiriting:</h4>
             <input type='number' value={this.state.USdollar} onChange={onMoneyChange}/>
             <h4>Sizning summangiz:{this.state.som}</h4>
             <button onClick={Transfer}>Transfer</button>
            </div>
            </div>



         </div>
        )
      
    }
}


export default ClassComponent