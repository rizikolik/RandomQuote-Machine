import React from "react";
import "./quotes.css";
import { tsParenthesizedType } from "@babel/types";
function rgbCreator(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
  let rgb=(`${red}`+","+`${green}`+","+`${blue}`)
    return "rgb("+rgb+")"
    
  }

class QuoteGenerator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:"",
            author:"",
            color:"",
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
                author:author,
                color:rgbCreator()
                
            })
            document.body.style.background=this.state.color
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
                author:author,
                color:rgbCreator()
            })
            document.body.style.background=this.state.color
        })
        
    }
    render(){
        return(
           
            <div id="quote-box">

                <div id="text">
                    <p style={{color:this.state.color}}><i className="fas fa-quote-left"></i>{"   "}{this.state.text}</p>
                   
                </div>
                <div id="author">
                    <p style={{color:this.state.color}}>-{this.state.author}</p>

                    </div>
               
                   
                
                <div className="buttons">
                    <button id="new-quote" onClick={this.QuoteCreator} style={{background:this.state.color,color:"white"}}>New Quote</button>
                    <button className="tweet-quote" style={{background:this.state.color}}><a  id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.state.text }"+ ${this.state.author}`}><i className="fab fa-twitter"></i></a></button>
                </div>

          
            </div>
          
            
        )
    }
   
}
export default (QuoteGenerator);
