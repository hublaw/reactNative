import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" titleStyle={{ textAlign: 'center', width: '90%' }} hideNavBar >

        <Scene key="auth" initial>
          <Scene key="login" component={LoginForm} title="Log In" />
        </Scene>

        <Scene key="main" >
          <Scene
            key="employeeList"
            title="Employees"
            titleStyle={{ textAlign: 'center', width: '110%' }}
            component={EmployeeList}
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene
            key="employeeCreate"
            title="Create Employee"
            titleStyle={{ textAlign: 'center', width: '80%' }}
            component={EmployeeCreate}
          />
          <Scene
            key="employeeEdit"
            title="Edit Employee"
            titleStyle={{ textAlign: 'center', width: '80%' }}
            component={EmployeeEdit}
          />
        </Scene>

      </Scene>
    </Router>
  );
};


export default RouterComponent;
