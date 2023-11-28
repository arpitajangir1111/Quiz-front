import axios from "axios";
import React,{useEffect,useState} from "react";

function AllQuestion (){
    const [question, setQuestion] = useState([]);
    const [counter,setCounter] = useState(15);
    const [currentQuestion, setCurrentQuestion] = useState(0);

}
useEffect(()=>{
    axios.get("http://localhost:9080/data/ques")
    .then((result) =>{
            setQuestion(result.data);
        
    })
}, []);

useEffect(()=>{
    const intervalId = setInterval(()=>{
        if (counter >=1){
            setCounter((prevCounter)=> prevCounter - 1);
        }
        if (counter ===0){
            if(currentQuestion< question.length -1){
                setCurrentQuestion((prevQuestion) =>prevquestion +1)
                setCounter(15);
            }
        }
    },)
})