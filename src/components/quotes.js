import React from "react";
import "./quotes.css";
function rgbCreator(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
  let rgb=(`${red}`+","+`${green}`+","+`${blue}`)
    console.log(rgb)
    
}
rgbCreator();
class QuoteGenerator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:"",
            author:""
        }
        this.QuoteCreator=this.QuoteCreator.bind(this)
        
    }
    componentDidMount(){
        fetch(`https://favqs.com/api/qotd`)
        .then((result)=>{
            return result.json()
        })
        .then((quote)=>{
            let text=quote.quote.body
            let author=quote.quote.author;
            this.setState({
                text:text,
                author:author
            })
        })
    }
    QuoteCreator(){
        fetch(`https://favqs.com/api/qotd`)
        .then((result)=>{
            return result.json()
        })
        .then((quote)=>{
            let text=quote.quote.body
            let author=quote.quote.author;
            this.setState({
                text:text,
                author:author
            })
        }) 
    }
    render(){
        return(
            <div id="quote-box">

                <div id="text">
                    <p><i className="fas fa-quote-left"></i>{"   "}{this.state.text}</p>
                </div>
                <div id="author">
                    <p>-{this.state.author}</p>
                </div>
                <div className="buttons">
                    <button id="new-quote" onClick={this.QuoteCreator}>New Quote</button>
                    <button><a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.state.text }"+ ${this.state.author}`}><i className="fab fa-twitter"></i></a></button>
                </div>

          
            </div>
            
        )
    }
   
}
export default QuoteGenerator;