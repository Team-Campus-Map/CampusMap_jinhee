import React,{Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import MySchedule1 from'./MySchedule1';
import MySchedule2 from'./MySchedule2';

class MySchedule extends Component{
 constructor (props){
  super(props);
  this.state = {tabsState:'react'}
 }
 toggle = (tabnum => {
  if(this.state.TabState !== tabnum)
  this.setState({TabState: tabnum})
 })
  render(){
    return(
      <>
        
        <Nav tabs>
          <NavItem>
            <NavLink onClick={()=>{this.toggle('Schadul');}}>
              1학년 1학기
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={()=>{this.toggle('Schadul2');}}>
              1학년 2학기
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.TabState}>
          <TabPane tabId='Schadul'><MySchedule1/></TabPane>
          <TabPane tabId='Schadul2'><MySchedule2/></TabPane>
          </TabContent>
        
      </>
    
    )
  }
}
export default MySchedule;

