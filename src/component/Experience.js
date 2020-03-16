import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'


class Experience extends Component {
constructor(){
    super()
    this.state = {
        
    }
}



    render() {        
        return (
            <div>
<div className='container'>
    <h4 className="center-align blue-text grey lighten-4">Job Experience</h4>
 </div>

                <div className='container'>
                        <div className="card blue-grey lighten-3">
                        <div className="card-content black-text">
                        <span className="card-title"><b>Assistant Manager Accounts</b>  </span>
                        <span className="card-title"><b>Niagara Mills (Pvt) Ltd - Head Office Faisalabad.</b>  </span>
                        <p>I Joined Niagara Mills Pvt Ltd in 2007 as Assistant Accounts Officer. My designation revised in 2010 as Senior Accounts Officer. Currently i am working as Assistant Manager Accounts. The detail of my key responsiblities that i performed and performing are as under : <br/><br/>
                        <span className="card-title black-text">Key responsiblities  </span>
                                <ol className='black-text'>
                                <li>Preparation of periodical/Monthly Financial Statements.</li>
                                <li>Checking all types of Vouchers and monitoring all accounting transactions of the day.</li>
                                <li>Checking and Monitoring bank reconciliation statements</li>
                                <li>Maintains the Chart of Accounts and Trial Balance.</li>
                                <li>Monitoring and follow up of Accounts Receivables and Accounts Payables</li>
                                <li>Working on Annual Insurance of the Company’s Assets and its documentation.</li>
                                <li>Dealing with banks for foreign remittances/payments and get foreign rates on daily basis.</li>
                                <li>Making foreign Payments through T.T (Telegraphic Transfer) as per the rules of state bank of Pakistan and complete all its documentations.</li>
                                <li>Maintain/Reconcile the record of Rebate receivables/Sales tax refundable and report to the higher management.</li>
                                <li>Checking of store purchase Payments as per Store inventory System/Process.</li>
                                <li>Submission of W.H.Tax deducted from the payments from Parties. </li>
                                <li>Preparation of Monthly store Consumption Report</li>
                                <li>Preparation of Monthly Depreciation schedule and feed in system.</li>
                                <li>Make sure the auditing and filling of all Vouchers.</li>
                                
                                </ol>                    
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className='center'><Link to='/Itskills'><button className="waves-effect waves-light btn-large">I.T Skills</button></Link></div>
            </div>

        )


    }
}

export default Experience;