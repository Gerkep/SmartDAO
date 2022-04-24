import React from "react";
import "../style/votingRow.css"
import moment from "moment";
// class VotingRow extends React.Component {


//     render(){
//         return(
//             <div className="voting-row">
//                 <div className="voting-about">
//                     <h2 className="voting-name">{this.props.location}</h2>
//                     <p className="voting-description">{this.props.proposer}</p>
//                 </div>
//                 <div className="voting-interact">
//                     <button className="approve-voting-btn">Approve</button>
//                     <p className="votes-counter">{this.props.votes}/{this.props.votesGoal}</p>
//                 </div>
//             </div>
//         )
    
//     }
// }

// export default VotingRow;

const VotingRow = (props) => {

    const {timeOptions} = props;
    console.log("tOps: " ,timeOptions)

    return (
        <div className="voting-row">
            <button className="submit-times">Submit</button>
            <div className="voting-about">
                <h2 className="voting-name">{props.location}</h2>
                <p className="voting-description"></p>
                <p className="voting-description">{props.remainingTime}</p>

            </div>
            <div className="voting-interact">
                {
                    timeOptions.map(element => {
                        return (
                            <div className="voting-box">
                                <button className="approve-voting-btn">{moment(element.time).format('MM-DD HH:mm:ss')}</button>
                                <input type="checkbox" className='time-checkbox'/>
                                <p className="votes-counter">{element.votes}</p>
                            </div>
                        )
                    })
        
                }
            </div>

        </div>
    )
  }
  export default VotingRow;
  