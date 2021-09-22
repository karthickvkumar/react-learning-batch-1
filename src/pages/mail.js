import React , {Component} from "react";
import {Switch, Route, NavLink} from 'react-router-dom';
import Inbox from './inbox-page';
import Sent from './sent-page';
import Trash from './trash-page';
import Draft from './draft-page';

class Mail extends Component{

  render(){
    return(
      <div className="main-content">
        <div className="header"></div>
        <div className="body">
          <div className="sidebar">
            <NavLink className="btn" activeClassName="active-btn" to="/mail/inbox">Inbox Page</NavLink>
            <br/>
            <NavLink className="btn" activeClassName="active-btn" to="/mail/sent">Sent Page</NavLink>
            <br/>
            <NavLink className="btn" activeClassName="active-btn" to="/mail/trash">Trash Page</NavLink>
            <br/>
            <NavLink className="btn" activeClassName="active-btn" to="/mail/draft">Draft Page</NavLink>
            <br/>
          </div>
          <div className="content">
            <div className="pages">
              {/* Here Page */}
              <Switch>
                <Route path="/mail/inbox" component={Inbox}></Route>
                <Route path="/mail/sent" component={Sent}></Route>
                <Route path="/mail/trash" component={Trash}></Route>
                <Route path="/mail/draft" component={Draft}></Route>
              </Switch>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Mail;